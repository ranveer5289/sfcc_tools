const path = require('path');
const fs = require('fs');
const elasticsearch = require('@sfcc_tools/elasticsearch');

process.env.NODE_CONFIG_DIR = path.join(process.cwd(), '..', '..', 'config');
const config = require('config');

const ecdnConfig = config.get('packages.ecdn-waf-logs');

const ES = elasticsearch.ES;

const helper = require('./helper/util');

const client = new ES({
    host: ecdnConfig.elasticsearch_host,
    TYPE: ecdnConfig.doc_type,
    INDEX_NAME: ecdnConfig.index_name
});

async function addToES() {
    const inputPath = path.join(__dirname, 'logs');

    const existingLogFiles = helper.getFilesFromDirectory(inputPath, '.log'); // sync operation
    if (existingLogFiles && existingLogFiles.length > 0) { // files already found, let's cleanup
        existingLogFiles.forEach(function (logFile) {
            const fullPath = path.join(inputPath, logFile);
            fs.unlinkSync(fullPath);
        });
    }

    await helper.extractAllLogFiles(inputPath);

    try {
        const indexExists = await client.indexExists();
        if (!indexExists) {
            await client.createIndex();
        }
    } catch (error) {
        console.log(error);
        return;
    }

    const logFiles = helper.getFilesFromDirectory(inputPath, '.log');
    console.log(`Total log files found ${logFiles.length}`);

    for (let i = 0; i < logFiles.length; i += 1) {
        const fullPath = path.join(inputPath, logFiles[i]);
        console.log(`Going to add ${fullPath} to ES`);
        // eslint-disable-next-line no-await-in-loop
        // Made this operation synchronous to avoid too many request to local ES server
        // @TODO: add a transform callback to make the code generic
        await elasticsearch.ndjsonparser(client, { filePath: fullPath, helper: helper });
    }
}

module.exports = addToES();
