const fs = require('fs');
const XmlStream = require('xml-stream');
const path = require('path');

process.env.NODE_CONFIG_DIR = path.join(process.cwd(), '..', '..', '..', 'config');
const config = require('config');

const imageCheckerConfig = config.get('packages.image-checker');

const catalogImages = {};
const batchSize = 10000;
let totalUniqueImagesCollected = 0;
let count = 0;
const prefix = `/on/demandware.servlet/webdav/Sites/Catalogs/${imageCheckerConfig.master_catalog_id}/default/`;

async function getImages(params) {
    return new Promise(function (resolve, reject) {
        const stream = fs.createReadStream(params.catalogXMLPath);
        const xml = new XmlStream(stream);

        xml.on('endElement: image', function (item) {
            const imagePath = decodeURIComponent(`${prefix}${item.$.path}`);
            if (!catalogImages[imagePath]) {
                catalogImages[imagePath] = true;
                count += 1;

                if (count % batchSize === 0) {
                    totalUniqueImagesCollected += batchSize;
                    console.log(`${totalUniqueImagesCollected} images collected`);
                    count = 0;
                }
            }
        });

        xml.on('end', function () {
            console.log(`Total unique images present in catalog XML ${Object.keys(catalogImages).length}`);
            resolve(catalogImages);
        });

        xml.on('error', function (error) {
            reject(error);
        });
    });
}

module.exports.getImages = getImages;
