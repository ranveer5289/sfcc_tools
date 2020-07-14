const fs = require('fs');
const XmlStream = require('xml-stream');

const serverWebDavImages = {};
const batchSize = 10000;
let totalUniqueImagesCollected = 0;
let count = 0;

const prefix = '/on/demandware.servlet/webdav/Sites/Catalogs/vd-master-catalog/default/';
async function getImagesFromServerXML(params) {
    return new Promise(function (resolve, reject) {
        const stream = fs.createReadStream(params.serverXMLPath);
        const xml = new XmlStream(stream);

        xml.on('endElement: href', function (item) {
            let imagePath = item.$text;
            try {
                imagePath = decodeURIComponent(item.$text);
            } catch (error) {
                console.log(`${error} - ${imagePath}`);
            }

            imagePath = imagePath.replace(prefix, '');
            if (!serverWebDavImages[imagePath]) {
                serverWebDavImages[imagePath] = true;
                count += 1;

                if (count % batchSize === 0) {
                    totalUniqueImagesCollected += batchSize;
                    console.log(`${totalUniqueImagesCollected} images collected`);
                    count = 0;
                }
            }
        });

        xml.on('end', function () {
            console.log(`Total unique images present in server XML ${Object.keys(serverWebDavImages).length}`);
            resolve(serverWebDavImages);
        });

        xml.on('error', function (error) {
            reject(error);
        });
    });
}

module.exports.getImagesFromServerXML = getImagesFromServerXML;
