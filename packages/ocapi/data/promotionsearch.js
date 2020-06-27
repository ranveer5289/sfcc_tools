/* eslint-disable import/no-dynamic-require */
const axios = require('axios');
const path = require('path');

const configPath = path.resolve(__dirname, '..', 'config.json');
const config = require(configPath);

async function search(oauthToken, start, query) {
    const promotionSearchUrl = `${config.ocapi_data_api_url}sites/${config.sfcc_site_id}/promotion_search`;
    const instance = axios.create({
        headers: {
            'content-type': 'application/json',
            'x-dw-client-id': `${config.ocapi_client_id}`,
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
