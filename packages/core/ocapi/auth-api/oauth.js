/* eslint-disable import/no-dynamic-require */
const axios = require('axios');
const chalk = require('chalk');
const config = require('@sfcc_tools/config');

const ocapiConfig = config.get('packages.ocapi');

async function getClientCredentialGrant() {
    const accountManagerUrl = ocapiConfig.account_manager_url;
    const basicAuth = Buffer.from(`${ocapiConfig.ocapi_client_id}:${ocapiConfig.ocapi_client_secret}`).toString('base64');
    const instance = axios.create({
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            authorization: `Basic ${basicAuth}`
        }
    });

    const postData = 'grant_type=client_credentials';

    let token;
    try {
        const response = await instance.post(accountManagerUrl, postData);
        if (response && response.data.access_token) {
            token = response.data.access_token;
            console.log(chalk.green('Successfully fetched oauth token from server'));
        } else {
            console.log(`Error fetching token ${response.status} ${response.error}`);
        }
    } catch (error) {
        console.log(error.message);
    }

    return token;
}

module.exports.getClientCredentialGrant = getClientCredentialGrant;
