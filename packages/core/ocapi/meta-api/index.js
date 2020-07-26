const fs = require('fs');
const path = require('path');
const axios = require('axios');
const chalk = require('chalk');
const util = require('util');
const yargs = require('yargs');
const config = require('@sfcc_tools/config');
const ocapiAuthApi = require('@sfcc_tools/auth-api');

const ocapiConfig = config.get('packages.ocapi');

const argv = yargs
    .usage('Usage: $0 [options]')
    .example('$0 --apiName shop --outDir /output/swagger/files', 'Download the swagger spec file for data/shop api')
    .nargs('apiName', 1)
    .describe('apiName', 'Name of the SFCC OCAPI either shop or data')
    .nargs('outDir', 1)
    .normalize('outDir')
    .describe('outDir', 'output directory where downloaded swagger spec will be written')
    .demandOption(['apiName', 'outDir'])
    .help('h')
    .alias('h', 'help')
    .wrap(null)
    .argv;

// TODO: add ocapi config which allows everything
async function downloadSwaggerSpec() {
    const token = await ocapiAuthApi.oauth.getClientCredentialGrant();
    if (!token) {
        console.log(chalk.red('No token received from server'));
        process.exit(0);
    }

    const outputFileName = `swagger-${argv.apiName}api.json`;
    const outputPath = path.join(argv.outDir, outputFileName);
    const metaApiUrl = util.format(ocapiConfig.ocapi_meta_api_url, argv.apiName);
    const instance = axios.create({
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`
        }
    });
    try {
        const response = await instance.get(metaApiUrl);
        if (response.data) {
            fs.writeFileSync(outputPath, JSON.stringify(response.data));
            console.log(chalk.green(`Swagger spec for ${argv.apiName} api successfully written to ${outputPath}`));
        }
    } catch (error) {
        console.log(chalk.red(error));
    }
}
downloadSwaggerSpec();
