/* eslint-disable import/no-dynamic-require */
const axios = require('axios');
const path = require('path');

process.env.NODE_CONFIG_DIR = path.join(process.cwd(), '..', '..', '..', 'config');
const config = require('config');

const ocapiConfig = config.get('packages.ocapi');

async function search(oauthToken, start, query) {
    const promotionSearchUrl = `${ocapiConfig.ocapi_data_api_url}sites/${ocapiConfig.sfcc_site_id}/promotion_search`;
    const instance = axios.create({
        headers: {
            'content-type': 'application/json',
            'x-dw-client-id': `${ocapiConfig.ocapi_client_id}`,
            authorization: `Bearer ${oauthToken}`
        }
    });

    const index = start || 0;
    const postData = query || `{
        "start": ${index},
        "count": 200,
        "query": {
            "match_all_query": {}
        },
        "select": "(**)"
    }`;
    let promotions;
    try {
        const response = await instance.post(promotionSearchUrl, postData);
        if (!response.data.hits) {
            console.log('No promotions founds for supplied search');
        } else {
            promotions = response.data;
        }
    } catch (error) {
        console.log(error.message);
    }
    return promotions;
}

module.exports.search = search;
