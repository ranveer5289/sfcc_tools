/* eslint-disable import/no-dynamic-require */
const config = require('@sfcc_tools/config');
const ocapiDataApi = require('@sfcc_tools/data_api');
const axios = require('axios');

const ocapiConfig = config.get('packages.ocapi');
const defaultDataApiClient = ocapiDataApi.ApiClient.instance;
const oauth2Application = defaultDataApiClient.authentications.oauth2_application;

async function initLogFetchRequest(oauthToken, startTime, zoneName) {
    oauth2Application.accessToken = oauthToken;
    defaultDataApiClient.basePath = ocapiConfig.ocapi_data_api_url;

    // end_time defaults to 1 hour from start_time
    const postData = {
        zone_name: zoneName,
        start_time: startTime
    };
    const apiInstance = new ocapiDataApi.LogRequestsApi();
    return apiInstance.postLogRequestsEcdn(postData);
}

async function downloadECDNLog(oauthToken, logFetchRequestId) {
    oauth2Application.accessToken = oauthToken;
    defaultDataApiClient.basePath = ocapiConfig.ocapi_data_api_url;

    const apiInstance = new ocapiDataApi.LogRequestsApi();
    return apiInstance.getLogRequestsEcdnByID(logFetchRequestId);
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
