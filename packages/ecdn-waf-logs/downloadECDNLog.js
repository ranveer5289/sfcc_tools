/* eslint-disable import/no-dynamic-require */
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const fsExtra = require('fs-extra');
const ocapi = require('@sfcc_tools/ocapi');

const oauth = ocapi.oauth;
const ecdn = ocapi.ecdn;

// const TASKID = 'downloadECDNLog';

function getLogFetchRequestIds(filePath) {
    const data = fs.readFileSync(filePath);
    if (data) {
        return JSON.parse(data.toString());
    }
    return null;
}

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
                console.log(chalk.red('One or more log fetch requests on the server are still not finished.'));
                console.log(chalk.red('We will continue with downloading other log files. You can re-run the task/script to download all files again.'));
                console.log(notFinishedRequests);
            }

            const outDirectory = path.join(__dirname, 'logs');
            if (!fs.existsSync(outDirectory)) {
                fs.mkdirSync(outDirectory);
            } else {
                fsExtra.emptyDirSync(outDirectory);
            }

            console.log('Downloading log files now from the server');
            results.filter(function (result) {
                return result.data.status === 'finished';
            }).forEach(function (result) {
                const downloadPath = path.join(outDirectory, `${result.data.id}.log.gz`);

                ecdn.downloadFileToDisk(result.data.link).then(function (response) {
                    response.data.pipe(fs.createWriteStream(downloadPath));
                }).catch(function (error) {
                    console.log(error);
                });
            });
        }
    } catch (error) {
        if (error.response && error.response.data) {
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
}

module.exports = download();
