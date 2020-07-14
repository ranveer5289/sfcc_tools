const path = require('path');
const fs = require('fs');
const yargs = require('yargs');
const chalk = require('chalk');

const getImagesFromServerXML = require('./helpers/getImagesFromServerXML');
const getProductsWithoutImages = require('./helpers/getProductsWithoutImages');

const argv = yargs
    .usage('Usage: $0 [options]')
    .example('$0 --catalogxml /path/to/catalog.xml --serverxml /path/to/serverfile.xml --fname images_not_in_use.csv', 'Find products with missing images & the images attached to that product')
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

/**
 * Find products without images.
 * This function is responsible for following
 * 1) Get all image path's defined in server XML (webdav propfind)
 * 2) Parse master catalog <image> tags. If images of a product are
 * not present in server xml file it means images are missing for that particular product.
 * 3) Write products to CSV file.
 */
async function findProducts() {
    try {
        const serverWebDavImages = await getImagesFromServerXML.get({
            serverXMLPath: argv.s
        });

        if (serverWebDavImages) {
            console.log('webdav/serverxml images successfully collected');
            const outputDir = path.join(__dirname, 'output');

            if (!fs.existsSync(outputDir)) {
                fs.mkdirSync(outputDir);
            }

            const outputCSVFileName = path.join(outputDir, argv.fname);
            await getProductsWithoutImages.find({
                catalogXMLPath: argv.c,
                serverWebDavImages: serverWebDavImages,
                outputPath: outputCSVFileName
            });
            console.log(chalk.green(`Product without images are written to ${outputCSVFileName}`));
        }
    } catch (error) {
        console.log(error);
    }
}

findProducts();
