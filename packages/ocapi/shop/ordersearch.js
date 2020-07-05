const axios = require('axios');
const path = require('path');
const util = require('util');

process.env.NODE_CONFIG_DIR = path.join(process.cwd(), '..', '..', 'config');
const config = require('config');

const ocapiConfig = config.get('packages.ocapi');

async function search(oauthToken, query) {
    const shopApiUrl = util.format(ocapiConfig.ocapi_shop_api_url, ocapiConfig.sfcc_site_id);
    const orderSearchUrl = `${shopApiUrl}order_search`;
    console.log(orderSearchUrl);
    const instance = axios.create({
        headers: {
            'content-type': 'application/json',
            'x-dw-client-id': `${ocapiConfig.ocapi_client_id}`,
            authorization: `Bearer ${oauthToken}`
        },
        timeout: 200000 // really slow
    });

    const postData = query;
    // console.log(postData);
    return instance.post(orderSearchUrl, postData);
}

module.exports.search = search;
