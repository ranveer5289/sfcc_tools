const axios = require('axios');
const fs = require('fs');
const path = require('path');
const util = require('util');
const chalk = require('chalk');
const yargs = require('yargs');
const coreConfig = require('@sfcc_tools/config');

const generalConfig = coreConfig.get('general');
const imageCheckerConfig = coreConfig.get('packages.image-checker');

// eslint-disable-next-line no-unused-vars
const argv = yargs
    .usage('Usage: node $0')
    .example('node $0', 'Download the server xml using propfind request')
    .help('h')
    .alias('h', 'help')
    .wrap(null)
    .argv;

const environment = generalConfig.hostname.split('-')[0];

const CATALOG_URL = 'https://%s/on/demandware.servlet/webdav/Sites/Catalogs/%s/default/images/product/';
const catalogUrl = util.format(
    CATALOG_URL, generalConfig.hostname, imageCheckerConfig.master_catalog_id
);

console.log(chalk.green(`Going to initiate propfind request to url ${catalogUrl}`));

async function listWebDavFiles() {
    try {
        const response = await axios({
            url: catalogUrl,
            method: 'PROPFIND',
            data: '<propfind xmlns="DAV:"><prop><displayname/><getlastmodified/></prop></propfind>',
            headers: { Depth: 'infinity' },
            auth: {
                username: `${generalConfig.username}`,
                password: `${generalConfig.password}`
            },
            responseType: 'stream',
            responseEncoding: 'utf8'
        });
        if (response && response.data) {
            const outputFilePath = path.join(__dirname, `${imageCheckerConfig.master_catalog_id}_${environment}_webdav.xml`);
            console.log(chalk.green(`Successfully, received response from server. Now, streaming it to a file ${outputFilePath}`));
            const responseStream = response.data;
            responseStream.pipe(fs.createWriteStream(outputFilePath));
        } else {
            throw new Error('No response received from server');
        }
    } catch (error) {
        console.log(chalk.red(`Error listing webdav files code : ${error.response.status} status : ${error.response.statusText} message : ${error.message}`));
    }
}

listWebDavFiles();
