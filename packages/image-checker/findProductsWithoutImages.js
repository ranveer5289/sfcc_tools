const path = require('path');
const fs = require('fs');
const yargs = require('yargs');

const util = require('./helpers/util');
const productHelper = require('./helpers/productHelpers');

const argv = yargs
    .usage('Usage: $0 [options]')
    .example('$0 --catalogxml /path/to/catalog.xml --serverxml /path/to/serverfile.xml --fname images_not_in_use.csv', 'Find images which are referenced in master catalog but not longer in use.')
    .alias('c', 'catalogxml')
    .nargs('c', 1)
    .normalize('c')
    .describe('c', 'Path to SFCC master catalog XML')
    .alias('s', 'serverxml')
    .nargs('s', 1)
    .normalize('s')
    .describe('s', 'Path to sever XML file, generated using PROPFIND request to WEBDAV')
    .alias('fname', 'filename')
    .nargs('fname', 1)
    .describe('fname', 'Name of the file(with extension(CSV)) to which product without images will be written')
    .default('fname', 'product_without_images.csv')
    .demandOption(['c', 's', 'fname'])
    .help('h')
    .alias('h', 'help')
    .wrap(null)
    .argv;

async function findProduct() {
    try {
        const serverWebDavImages = await util.getImagesFromServerXML({
            serverXMLPath: argv.s
        });

        if (serverWebDavImages) {
            console.log('Catalog images successfully collected');
            const outputDir = path.join(__dirname, 'output');

            if (!fs.existsSync(outputDir)) {
                fs.mkdirSync(outputDir);
            }

            const outputCSVFileName = path.join(outputDir, argv.fname);
            await productHelper.findProductsWithoutImages({
                catalogXMLPath: argv.c,
                serverWebDavImages: serverWebDavImages,
                outputPath: outputCSVFileName
            });
        }
    } catch (error) {
        console.log(error);
    }
}

findProduct();
