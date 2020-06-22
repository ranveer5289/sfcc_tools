/* eslint-disable import/no-dynamic-require */
const axios = require('axios');
const path = require('path');

const configPath = path.resolve(process.cwd(), 'config.json');
const config = require(configPath);

async function search(oauthToken, start, query) {
    const jobSearchUrl = `${config.ocapi_data_api_url}job_execution_search`;
    const instance = axios.create({
        headers: {
            'content-type': 'application/json',
            'x-dw-client-id': `${config.ocapi_client_id}`,
            authorization: `Bearer ${oauthToken}`
        },
        timeout: 50000 // long running query
    });

    const index = start || 0;
    const date = new Date();
    date.setDate(date.getDate() - 2);

    // eslint-disable-next-line max-len
    const startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 20, 0, 0).toISOString();
    // eslint-disable-next-line max-len
    const endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1, 19, 59, 0).toISOString();

    const postData = query || `{
        "start": ${index},
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
    let jobs;
    try {
        const response = await instance.post(jobSearchUrl, postData);
        if (!response.data.hits) {
            console.log('No jobs founds for supplied search');
        } else {
            jobs = response.data;
        }
    } catch (error) {
        console.log(error.message);
    }
    return jobs;
}

module.exports.search = search;
