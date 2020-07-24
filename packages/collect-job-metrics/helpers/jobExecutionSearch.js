/* eslint-disable import/no-dynamic-require */
const path = require('path');
const ocapiDataApi = require('@sfcc_tools/data_api');
const config = require('@sfcc_tools/config');
const chalk = require('chalk');

const ocapiConfig = config.get('packages.ocapi');

function getPostData(start, startTime, endTime) {
    return `{
        "start": ${start},
        "count": 200,
        "query": {
            "bool_query": {
                "must": [
                    {
                        "filtered_query": {
                            "filter": {
                                "bool_filter": {
                                    "operator": "and",
                                    "filters": [
                                        {
                                            "range_filter": {
                                                "field": "start_time",
                                                "from": "${startTime}"
                                            }
                                        },
                                        {
                                            "range_filter": {
                                                "field": "end_time",
                                                "to": "${endTime}"
                                            }
                                        }
                                    ]
                                }
                            },
                            "query": {
                                "match_all_query": {}
                            }
                        }
                    }
                ],
                "must_not": [
                    {
                        "text_query": {
                            "search_phrase": "sfcc-",
                            "fields": [
                                "job_id"
                            ]
                        }
                    }
                ]
            }
        },
        "select": "(hits.(job_id,duration,start_time),count,start,total)"
    }`;
}

async function getJobExecutions(oauthToken) {
    const defaultDataApiClient = ocapiDataApi.ApiClient.instance;
    const oauth2Application = defaultDataApiClient.authentications.oauth2_application;
    oauth2Application.accessToken = oauthToken;

    let allJobExecutions = [];
    defaultDataApiClient.basePath = ocapiConfig.ocapi_data_api_url;

    const apiInstance = new ocapiDataApi.JobExecutionSearchApi();

    const date = new Date();
    date.setDate(date.getDate() - 2);

    // eslint-disable-next-line max-len
    const startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 20, 0, 0).toISOString();
    // eslint-disable-next-line max-len
    const endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1, 19, 59, 0).toISOString();

    let postData = getPostData(0, startTime, endTime);
    try {
        const jobResponse = await apiInstance.postJobExecutionSearch(postData);
        if (!jobResponse.hits) {
            console.log('No jobs founds for supplied search');
            return [];
        }
        allJobExecutions = allJobExecutions.concat(jobResponse.hits);
        const totalHits = jobResponse.total;
        const asyncFunctions = [];
        console.log(chalk.green(`Total job executions ${totalHits}`));
        const counter = Math.ceil(totalHits / 200);

        for (let i = 1; i < counter; i += 1) {
            const start = i * 200;
            postData = getPostData(start, startTime, endTime);
            console.log(chalk.green(`Fetching job executions from index ${start}`));
            asyncFunctions.push(apiInstance.postJobExecutionSearch(postData));
        }

        const results = await Promise.all(asyncFunctions);
        if (results && results.length > 0) {
            results.forEach(function (result) {
                allJobExecutions = allJobExecutions.concat(result.hits);
            });
        }
    } catch (error) {
        console.log(error.message);
    }
    return allJobExecutions;
}

module.exports.getJobExecutions = getJobExecutions;
