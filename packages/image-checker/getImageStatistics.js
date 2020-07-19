const path = require('path');
const fs = require('fs');
const XmlStream = require('xml-stream');
const yargs = require('yargs');
const chalk = require('chalk');

const argv = yargs
    .usage('Usage: $0 [options]')
    .example('$0 --serverxml /path/to/serverfile.xml', 'Get image statistics like size & count')
    .alias('s', 'serverxml')
    .nargs('s', 1)
    .normalize('s')
    .describe('s', 'Path to sever XML file, generated using PROPFIND request to WEBDAV')
    .demandOption(['s'])
    .help('h')
    .alias('h', 'help')
    .wrap(null)
    .argv;
/**
 * Get statistics like total image count & size
 * from the server xml file.
 */
function getStatistics() {
    let totalImageSize = 0;
    let totalImages = 0;
    const stream = fs.createReadStream(argv.s);
    const xml = new XmlStream(stream);

    xml.on('endElement: response', function (item) {
        const imageSize = item.propstat && item.propstat.prop
        && item.propstat.prop.getcontentlength ? item.propstat.prop.getcontentlength : '';

        const imagePath = item.href;
        const fileExtension = path.extname(imagePath);
        if (fileExtension) { // means image & not directory
            if (imageSize) {
                totalImageSize += imageSize;
            }
            totalImages += 1;
        }
    });

    xml.on('end', function () {
        console.log(chalk.green(`Total images on server ${totalImages}`));
        if (totalImageSize > 0) {
            const imageSizeInKB = totalImageSize / 1000;
            console.log(chalk.green(`Total Image size in bytes is ${totalImageSize}`));
            console.log(chalk.green(`Total Image size in KB is ${imageSizeInKB}`));
        } else {
            console.log(chalk.yellow('No image metadata information found in server xml'));
        }
    });
}

getStatistics();
