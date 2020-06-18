const axios = require('axios');
const path = require('path');
const chalk = require('chalk');
const util = require('util');

const configPath = path.resolve(process.cwd(), 'config.json');
const config = require(configPath);

async function search(oauthToken, start, query) {
    const shopApiUrl = util.format(config.ocapi_shop_api_url, config.sfcc_site_id);
    const orderSearchUrl = shopApiUrl + 'order_search';
    console.log(orderSearchUrl);
    const instance = axios.create({
        headers: {
            'content-type': 'application/json',
            'x-dw-client-id': `${config.ocapi_client_id}`,
            authorization: `Bearer ${oauthToken}`
        },
        timeout: 200000 // really slow
    });

    const index = start || 0;
    const postData = query || `{
        "start": ${index},
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
                        "from": "2020-06-18T09:00:00.000Z",
                        "to": "2020-06-18T09:10:00.000Z"
                    }
                }
            }
        },
        "select": "(**)"
    }`;
    return instance.post(orderSearchUrl, postData);
}

module.exports.search = search;
