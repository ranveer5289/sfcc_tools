/* eslint-disable import/no-dynamic-require */
const axios = require('axios');
const path = require('path');

process.env.NODE_CONFIG_DIR = path.join(process.cwd(), '..', '..', '..', 'config');
const config = require('config');

const ocapiConfig = config.get('packages.ocapi');

async function initLogFetchRequest(oauthToken, startTime) {
    const ecdnInitUrl = `${ocapiConfig.ocapi_data_api_url}log_requests/ecdn`;
    const instance = axios.create({
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${oauthToken}`
        }
    });

    // end_time defaults to 1 hour from start_time
    const postData = {
        zone_name: ocapiConfig.ecdn_zone_name,
        start_time: startTime
    };
    return instance.post(ecdnInitUrl, postData);
}

module.exports.initLogFetchRequest = initLogFetchRequest;
