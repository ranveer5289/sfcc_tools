/* eslint-disable import/no-dynamic-require */
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const fsExtra = require('fs-extra')

const ocapi = require('@sfcc_tools/ocapi');

const TASKID = 'downloadECDNLog';

const oauth = ocapi.oauth;
const ecdn = ocapi.ecdn;


function getLogFetchRequestIds(filePath) {
    const data = fs.readFileSync(filePath);
    if (data) {
        return JSON.parse(data.toString());
    }
    return null;
};

async function download() {
    const token = await oauth.getClientCredentialGrant();
    if (!token) {
        console.log(chalk.red('Error getting oauth token from SFCC'));
        process.exit(1);
    }

    const filePath = path.join(__dirname, 'ecdn-request-ids.json');
    const ids = getLogFetchRequestIds(filePath);
    if (!ids) {
        console.log(chalk.red('No, log fetch request ids found. Make sure to run fetchECDNLog.js task before running this task'));
        process.exit(1);
    }

    const asyncFunctions = ids.map(function (id) {
        return ecdn.downloadECDNLog(token, id);
    });

    try {
        const results = await Promise.all(asyncFunctions);
        if (results && results.length > 0) {
            const notFinishedRequests = results.filter(function (result) {
                return result.data.status !== 'finished';
            }).map(function (result) {
                return result.data.id;
            });

            if (notFinishedRequests.length > 0) {
                console.log(chalk.red('One or more log fetch requests on the server are still not finished.Retry this task in a few minutes'));
                console.log(notFinishedRequests);
                process.exit(1);
            }
            const outDirectory =  path.join(__dirname, 'logs');
            if (!fs.existsSync(outDirectory)) {
                fs.mkdirSync(outDirectory);
            } else {
                fsExtra.emptyDirSync(outDirectory);
            }

            results.forEach(function(result) {
                const downloadPath = path.join(outDirectory, `${result.data.id}.log.gz`);
                console.log(`Going to Download log file ${result.data.link}`);
                console.log('-------------------------------------------------------------');

                ecdn.downloadFileToDisk(result.data.link).then(function(response) {
                    response.data.pipe(fs.createWriteStream(downloadPath));
                }).catch(function(error) {
                    console.log(error);
                });
            });
        }
    } catch (error) {
        console.log(error);
    }

}

module.exports = download();
