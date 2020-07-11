const fs = require('fs');
const XmlStream = require('xml-stream');
const csv = require('fast-csv');
const path = require('path');

const csvStream = csv.format({ headers: true });

let totalImagesInServerXML = 0;
let totalUnUsedImages = 0;

async function findImages(config) {
    return new Promise(function (resolve, reject) {
        const stream = fs.createReadStream(config.serverImageFileXMLPath);
        if (fs.existsSync(config.outputPath)) {
            fs.unlinkSync(config.outputPath);
        }
        const outputStream = fs.createWriteStream(config.outputPath);
        csvStream.pipe(outputStream);

        const xml = new XmlStream(stream);

        xml.on('endElement: href', async function (item) {
            const imagePath = item.$text;
            const fileExtension = path.extname(imagePath);
            if (fileExtension) { // if no extension we assume it is directory
                const supplierId = '';
                totalImagesInServerXML += 1;
                if (!(imagePath in config.catalogImages)) {
                    xml.pause();
                    totalUnUsedImages += 1;
                    // const urlParts = imagePath.split('/on/demandware.servlet/webdav/Sites/Catalogs/vd-master-catalog/default/images/');
                    // if (urlParts && urlParts.length > 0) {
                    //     supplierId = urlParts[1].split('/') ? urlParts[1].split('/')[0] : '';
                    // }
                    await csvStream.write({ 'image-path': imagePath, supplierId: supplierId });
                    xml.resume();
                }
            }
        });

        xml.on('end', function () {
            console.log(`Total images in server XML ${totalImagesInServerXML}`);
            console.log(`Total unused images in platform ${totalUnUsedImages}`);
            csvStream.end();
            resolve();
        });

        xml.on('error', function (error) {
            csvStream.end();
            reject(error);
        });
    });
}

module.exports.findImages = findImages;
