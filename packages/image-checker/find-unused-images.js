const path = require('path');
const fs = require('fs');
const fsExtra = require('fs-extra');
const yargs = require('yargs');

const catalogImageHelper = require('./helpers/collectImagesFromCatalog');
const findUnUsedImages = require('./helpers/findUnUsedImages');

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
    .describe('fname', 'Name of the file(with extension(CSV)) to which orphaned images will be written')
    .default('fname', 'images_not_in_use.csv')
    .demandOption(['c', 's', 'fname'])
    .help('h')
    .alias('h', 'help')
    .wrap(null)
    .argv;

async function collect() {
    try {
        const catalogImages = await catalogImageHelper.getImages({
            catalogXMLPath: argv.c
        });

        if (catalogImages) {
            console.log('Catalog images collected successfully');
            const outputDir = path.join(__dirname, 'output');

            if (!fs.existsSync(outputDir)) {
                fs.mkdirSync(outputDir);
            }

            const outputCSVFileName = path.join(outputDir, argv.fname);
            await findUnUsedImages.findImages({
                serverImageFileXMLPath: argv.s,
                outputPath: outputCSVFileName,
                catalogImages: catalogImages
            });
        }
    } catch (error) {
        console.log(error);
    }
}

collect();
