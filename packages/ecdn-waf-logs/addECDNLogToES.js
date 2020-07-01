const fs = require('fs');
const path = require('path');
const gunzip = require('gunzip-file');
const elasticsearch = require('@sfcc_tools/elasticsearch');

process.env.NODE_CONFIG_DIR = path.join(process.cwd(), '..', '..', 'config');
const config = require('config');

const esConfig = config.get('packages.sfcc-catalog-to-elasticsearch');

const ES = elasticsearch.ES;

// @TODO
const client = new ES({
    host: esConfig.elasticsearchHost,
    TYPE: 'logs',
    INDEX_NAME: 'ecdn-logs'
});

function getFilesFromDirectory(inputPath, extName) {
    const files = fs.readdirSync(inputPath);
    if (!files) {
        console.log(`No files found in ${inputPath}`);
        return null;
    }

    const filteredFiles = files.filter(function (file) {
        return path.extname(file) === extName;
    });
    return filteredFiles;
}

function extractAllLogFiles(inputPath) {
    const logFiles = getFilesFromDirectory(inputPath, '.gz');
    if (!logFiles) {
        return;
    }

    logFiles.forEach(function (logFile) {
        const sourcePath = path.join(inputPath, logFile);
        const destinationPath = sourcePath.replace('.gz', '');
        gunzip(sourcePath, destinationPath);
    });
}

async function addToES() {
    const inputPath = path.join(__dirname, 'logs');
    extractAllLogFiles(inputPath);

    try {
        const indexExists = await client.indexExists();
        if (!indexExists) {
            await client.createIndex();
        }
    } catch (error) {
        console.log(error);
        return;
    }

    const logFiles = getFilesFromDirectory(inputPath, '.log');
    console.log(`Total log files found ${logFiles.length}`);

    for (let i = 0; i < logFiles.length; i += 1) {
        const fullPath = path.join(inputPath, logFiles[i]);
        console.log(`Going to add ${fullPath} to ES`);
        // eslint-disable-next-line no-await-in-loop
        await elasticsearch.ndjsonparser(client, { filePath: fullPath });
    }
}

module.exports = addToES();
