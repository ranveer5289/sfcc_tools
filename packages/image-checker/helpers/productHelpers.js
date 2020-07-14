const fs = require('fs');
const XmlStream = require('xml-stream');
const csv = require('fast-csv');
const chalk = require('chalk');

const csvStream = csv.format({ headers: true });

let count = 0;
let totalImagesMissing = 0;

async function findProductsWithoutImages(config) {
    return new Promise(function (resolve, reject) {
        const stream = fs.createReadStream(config.catalogXMLPath);
        if (fs.existsSync(config.outputPath)) {
            fs.unlinkSync(config.outputPath);
        }
        const outputStream = fs.createWriteStream(config.outputPath);
        csvStream.pipe(outputStream);

        const xml = new XmlStream(stream);

        xml.preserve('images');
        xml.on('endElement: product', async function (item) {
            const images = item.images;
            const pid = item.$['product-id'];
            let productImages = [];
            if (images) {
                const childImages = images.$children;
                childImages.forEach(function (image) {
                    const subChild = image.$children;
                    if (subChild) {
                        const tempProductImages = subChild.filter(function (c) {
                            return c.$name === 'image';
                        }).map(function (tags) {
                            const imagePath = decodeURIComponent(tags.$.path);
                            return imagePath;
                        });
                        if (tempProductImages) {
                            productImages = productImages.concat(tempProductImages);
                        }
                    }
                });

                if (productImages.length > 0) {
                    const uniqueImages = productImages.filter(function (elem, index, self) {
                        return index === self.indexOf(elem);
                    });

                    const missingImages = uniqueImages.filter(function (ui) {
                        return !config.serverWebDavImages[ui];
                    });

                    if (missingImages && missingImages.length > 0) {
                        csvStream.write({ pid: pid, 'image-path': missingImages.join(',') });
                        count += 1;
                        totalImagesMissing += missingImages.length;
                    }
                }
            }
        });

        xml.on('end', function () {
            csvStream.end();
            console.log(chalk.green(`Total Product without/incomplete Images ${count}`));
            console.log(chalk.green(`Total missing Images ${totalImagesMissing}`));
            resolve();
        });

        xml.on('error', function (error) {
            csvStream.end();
            reject(error);
        });
    });
}

module.exports.findProductsWithoutImages = findProductsWithoutImages;
