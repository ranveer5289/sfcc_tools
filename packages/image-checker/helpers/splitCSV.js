const csvSplitStream = require('csv-split-stream');
const fs = require('fs');
const path = require('path');

async function split(config) {
    const inputCSVFile = config.inputCSVFile;
    const parsedPath = path.parse(inputCSVFile);

    const readStream = fs.createReadStream(inputCSVFile);
    const outputDir = config.outputDir;

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }
    const csvSplitResponse = await csvSplitStream.split(readStream,
        { lineLimit: config.MAX_LINES_IN_CSV }, function (index) {
            const outputCSVPath = path.join(outputDir, `${parsedPath.name}_${index}${parsedPath.ext}`);
            return fs.createWriteStream(outputCSVPath);
        });
    console.log('csvSplitStream succeeded.', csvSplitResponse);
}

module.exports.split = split;
