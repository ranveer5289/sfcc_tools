const fs = require('fs');
const path = require('path');
const split2 = require('split2');
const fsExtra = require('fs-extra');
const chalk = require('chalk');
const helper = require('./helper/util');

function writeAsW3C(inputPath, outputPath) {
    return new Promise(function (resolve, reject) {
        const readStream = fs.createReadStream(inputPath);
        const w3cFilename = `w3c-${path.basename(inputPath)}`;
        const w3cOutputPath = path.join(outputPath, w3cFilename);
        console.log(chalk.green(`W3C transformed file will be created here ${w3cOutputPath}`));
        console.log(chalk.yellow('-------------------------------------------------------------------'));

        if (fs.existsSync(w3cOutputPath)) {
            fs.unlinkSync(w3cOutputPath);
        }
        const writeStream = fs.createWriteStream(w3cOutputPath);

        writeStream.write('#Software: Screaming Frog Log Generator\n');
        writeStream.write('#Version: 1.0\n');

        const d = new Date();
        // 2020-07-05 12:00:00
        writeStream.write(
            `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}\n`
        );
        writeStream.write('#Fields: date time cs-uri-stem cs-uri-query cs(User-Agent) sc-status cs-method c-ip cs-host cs-protocol\n');

        readStream
            .pipe(split2(JSON.parse))
            .on('data', function (obj) {
                const lines = [];
                // nanoseconds to milliseconds
                const edgeStartTimeStamp = obj.EdgeStartTimestamp / 1000000;
                const requestDate = new Date(edgeStartTimeStamp);
                const formattedDate = `${requestDate.getFullYear()}-${requestDate.getMonth() + 1}-${requestDate.getDate()}`;
                lines.push(formattedDate);

                const formattedTime = `${requestDate.getHours()}:${requestDate.getMinutes()}:${requestDate.getSeconds()}`;
                lines.push(formattedTime);

                const isQs = obj.ClientRequestURI.indexOf('?') !== -1;
                let uriStem = obj.ClientRequestURI;
                let uriQuery = '-';
                if (isQs) {
                    const urlParts = obj.ClientRequestURI.split('?');
                    if (urlParts.length > 0) {
                        uriStem = urlParts[0];
                        uriQuery = urlParts[1];
                    }
                }
                lines.push(uriStem);
                lines.push(uriQuery);

                lines.push(`"${obj.ClientRequestUserAgent}"`);
                lines.push(obj.EdgeResponseStatus.toString());

                lines.push(obj.ClientRequestMethod);
                lines.push(obj.ClientIP);
                lines.push(obj.ClientRequestHost);
                lines.push('https');

                writeStream.write(lines.join(' '));
                writeStream.write('\n');
            });

        readStream.on('end', function () {
            readStream.close();
            resolve();
        });

        readStream.on('error', function (error) {
            reject(error);
        });
    });
}

async function transform() {
    try {
        const inputPath = path.join(__dirname, 'logs');
        const existingLogFiles = helper.getFilesFromDirectory(inputPath, '.log'); // sync operation
        if (existingLogFiles && existingLogFiles.length > 0) { // files already found, let's cleanup
            existingLogFiles.forEach(function (logFile) {
                const fullPath = path.join(inputPath, logFile);
                fs.unlinkSync(fullPath);
            });
        }

        await helper.extractAllLogFiles(inputPath); // unzip is an async operation

        const logFiles = helper.getFilesFromDirectory(inputPath, '.log'); // sync operation
        console.log(chalk.green(`Total log files extracted ${logFiles.length}`));

        const outDirectory = path.join(__dirname, 'w3c');
        if (!fs.existsSync(outDirectory)) {
            fs.mkdirSync(outDirectory);
        } else {
            fsExtra.emptyDirSync(outDirectory);
        }

        const asyncFunctions = logFiles.map(function (logFile) {
            const fullPath = path.join(inputPath, logFile);
            console.log(fullPath);
            return writeAsW3C(fullPath, outDirectory);
        });
        Promise.all(asyncFunctions).then(function () {
            console.log(chalk.green('Files successfully transformed to W3C format'));
        });
    } catch (error) {
        console.log(chalk.red(error));
    }
}

module.exports = transform();
