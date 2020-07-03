/* eslint-disable import/no-dynamic-require */
const axios = require('axios');
const path = require('path');

process.env.NODE_CONFIG_DIR = path.join(process.cwd(), '..', '..', '..', 'config');
const config = require('config');

const ocapiConfig = config.get('packages.ocapi');

async function initLogFetchRequest(oauthToken, startTime, zoneName) {
    const ecdnInitUrl = `${ocapiConfig.ocapi_data_api_url}log_requests/ecdn`;
    const instance = axios.create({
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${oauthToken}`
        }
    });

    // end_time defaults to 1 hour from start_time
    const postData = {
        zone_name: zoneName,
        start_time: startTime
    };
    return instance.post(ecdnInitUrl, postData);
}

async function downloadECDNLog(oauthToken, logFetchRequestId) {
    const ecdnInitUrl = `${ocapiConfig.ocapi_data_api_url}log_requests/ecdn/${logFetchRequestId}`;
    const instance = axios.create({
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${oauthToken}`
        }
    });

    return instance.get(ecdnInitUrl);
}

async function downloadFileToDisk(url) {
    return axios({
        method: 'get',
        url: url,
        responseType: 'stream'
    });
}

module.exports.initLogFetchRequest = initLogFetchRequest;
module.exports.downloadECDNLog = downloadECDNLog;
module.exports.downloadFileToDisk = downloadFileToDisk;
