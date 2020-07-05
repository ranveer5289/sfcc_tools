const axios = require('axios');
const path = require('path');

process.env.NODE_CONFIG_DIR = path.join(process.cwd(), '..', '..', 'config');
const config = require('config');

const ocapiConfig = config.get('packages.ocapi');

async function getNotes(orderNotesUrl, oauthToken) {
    // console.log(orderNotesUrl);
    const instance = axios.create({
        headers: {
            'content-type': 'application/json',
            'x-dw-client-id': `${ocapiConfig.ocapi_client_id}`,
            authorization: `Bearer ${oauthToken}`
        },
        timeout: 200000 // really slow
    });

    return instance.get(orderNotesUrl);
}

module.exports.getNotes = getNotes;
