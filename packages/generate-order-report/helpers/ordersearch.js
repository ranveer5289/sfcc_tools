const ocapiShopApi = require('@sfcc_tools/shop_api');
const util = require('util');
const config = require('@sfcc_tools/config');
const chalk = require('chalk');
const pLimit = require('p-limit');

const limit = pLimit(10);

const ocapiConfig = config.get('packages.ocapi');
const orderReportConfig = config.get('packages.generate-order-report');

function getPostData(start) {
    return `{
        "start": ${start},
        "count": 50,
        "query": {
            "filtered_query": {
                "query": {
                    "bool_query": {
                        "must": [
                            {
                                "term_query": {
                                    "fields": [
                                        "status"
                                    ],
                                    "operator": "one_of",
                                    "values": [
                                        "new",
                                        "open"
                                    ]
                                }
                            },
                            {
                                "term_query": {
                                    "fields": [
                                        "payment_status"
                                    ],
                                    "operator": "is",
                                    "values": [
                                        "paid"
                                    ]
                                }
                            }
                        ]
                    }
                },
                "filter": {
                    "range_filter": {
                        "field": "creation_date",
                        "from": "${orderReportConfig.from}",
                        "to": "${orderReportConfig.to}"
                    }
                }
            }
        },
        "select": "(**)"
    }`;
}
async function search(oauthToken) {
    let allOrders = [];
    try {
        const defaultClient = ocapiShopApi.ApiClient.instance;
        const oauth2Application = defaultClient.authentications.oauth2_application;
        oauth2Application.accessToken = oauthToken;
        defaultClient.basePath = util.format(
            ocapiConfig.ocapi_shop_api_url, ocapiConfig.sfcc_site_id
        );

        const apiInstance = new ocapiShopApi.OrderSearchApi();
        const body = getPostData(0);
        const orderSearchResponse = await apiInstance.postOrderSearch(body);

        if (!orderSearchResponse || !orderSearchResponse.hits) {
            console.log(chalk.red(`No response received ${orderSearchResponse}`));
            return allOrders;
        }
        console.log(chalk.green('Fetching all orders..........'));
        allOrders = allOrders.concat(orderSearchResponse.hits);

        const totalHits = orderSearchResponse.total;
        const asyncFunctions = [];
        console.log(chalk.green(`Total orders ${totalHits}`));
        const counter = Math.ceil(totalHits / 50);
        for (let i = 1; i < counter; i += 1) {
            const requestBody = getPostData(i * 50);
            asyncFunctions.push(limit(function () {
                return apiInstance.postOrderSearch(requestBody);
            }));
        }
        const results = await Promise.all(asyncFunctions);
        if (!results) {
            console.log('No orders found');
            return allOrders;
        }
        results.forEach(function (result) {
            allOrders = allOrders.concat(result.hits);
        });
    } catch (error) {
        console.log(error);
    }
    return allOrders;
}

module.exports.search = search;
