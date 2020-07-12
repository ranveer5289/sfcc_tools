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

        xml.on('endElement: response', async function (item) {
            const href = item.href;
            /**
             * SFCC PROPFIND has a bug where images with "accented characters"
             * come as invalid xml encoded (?) in output/response.
             *
             * Since, these href's are  with invalid name we should ignore them
             * & not consider them as un-used images.
             * These images come with "null" value in response.
             */
            const lastModifiedDate = item.propstat && item.propstat.prop
                                        && item.propstat.prop.getlastmodified ? item.propstat.prop.getlastmodified : '';

            const imagePath = decodeURIComponent(href);
            const fileExtension = path.extname(imagePath);

            if (fileExtension) { // if no extension we assume it is directory
                totalImagesInServerXML += 1;
                if (!(imagePath in config.catalogImages) && lastModifiedDate !== 'null') {
                    xml.pause();
                    totalUnUsedImages += 1;
                    await csvStream.write({ 'image-path': imagePath });
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