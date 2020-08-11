const fs = require('fs');
const xtreamer = require('xtreamer');
const xml2js = require('xml2js');
const path = require('path');
const chalk = require('chalk');

const parser = new xml2js.Parser();
const builder = new xml2js.Builder({ headless: true });

class CatalogLite {
    constructor(products, catalogPath, catalogId) {
        this.products = products;
        this.catalogPath = catalogPath;
        this.catalogId = catalogId;

        const parsedPath = path.parse(this.catalogPath);

        this.outPath = path.join(__dirname, '..', `reduced-${parsedPath.name}${parsedPath.ext}`);
        this.writeStream = fs.createWriteStream(this.outPath);
    }

    writeCatalogHeader() {
        this.writeStream.write(`<?xml version="1.0" encoding="UTF-8"?>
        <catalog xmlns="http://www.demandware.com/xml/impex/catalog/2006-10-31" catalog-id="${this.catalogId}">\n`);

        const catalogHeader = {
            header: {
                'image-settings': {
                    'internal-location': {
                        $: {
                            'base-path': '/'
                        }
                    },
                    'view-types': {
                        'view-type': 'hi-res'
                    },
                    // eslint-disable-next-line no-template-curly-in-string
                    'alt-pattern': '${productname}',
                    // eslint-disable-next-line no-template-curly-in-string
                    'title-pattern': '${productname}'
                }
            }
        };
        const xml = builder.buildObject(catalogHeader);
        this.writeStream.write(xml);
    }

    writeProducts() {
        const self = this;
        return new Promise(function (resolve, reject) {
            let productsWritten = 0;
            const totalProducts = self.products.length;
            const catalogLiteTransform = xtreamer('product', {});
            const readStream = fs.createReadStream(self.catalogPath);
            readStream.pipe(catalogLiteTransform);

            catalogLiteTransform.on('data', async function (item) {
                if (productsWritten < totalProducts) {
                    catalogLiteTransform.pause();
                    const xmlObj = await parser.parseStringPromise(item.toString());
                    const productId = xmlObj.product.$['product-id'];

                    if (self.products.indexOf(productId) !== -1) {
                        // const xml = builder.buildObject(xmlObj);
                        self.writeStream.write(`${item.toString()}\n`);
                        productsWritten += 1;
                    }
                    catalogLiteTransform.resume();
                } else {
                    readStream.destroy();
                    catalogLiteTransform.destroy(); // stop the stream
                    resolve();
                }
            });

            catalogLiteTransform.on('error', function (error) {
                reject(error);
            });
        });
    }

    writeCatalogFooter() {
        this.writeStream.write('</catalog>');
        console.log(chalk.green(`reduced master catalog file written at ${this.outPath}`));
    }
}

module.exports = CatalogLite;
