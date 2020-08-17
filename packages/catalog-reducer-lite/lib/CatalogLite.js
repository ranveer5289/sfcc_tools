const fs = require('fs');
const xtreamer = require('xtreamer');
const xml2js = require('xml2js');
const path = require('path');
const config = require('@sfcc_tools/config');

const parser = new xml2js.Parser();
const builder = new xml2js.Builder();
const catalogLiteConfig = config.get('packages.catalog-reducer-lite');

class CatalogLite {
    constructor(products, catalogPath) {
        this.products = products;
        this.catalogPath = catalogPath;
        this.catalogId = catalogLiteConfig.catalog.master_catalog_id;
        this.catalogObj = {};

        const parsedPath = path.parse(this.catalogPath);

        this.outPath = path.join(__dirname, '..', `reduced-${parsedPath.name}${parsedPath.ext}`);
        this.writeStream = fs.createWriteStream(this.outPath);
    }

    buildCatalogHeader() {
        this.catalogObj = {
            catalog: {
                $: {
                    xmlns: 'http://www.demandware.com/xml/impex/catalog/2006-10-31',
                    'catalog-id': this.catalogId
                },
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
                },
                products: {
                    product: []
                }
            }
        };
    }

    writeProducts() {
        const self = this;
        return new Promise(function (resolve, reject) {
            self.buildCatalogHeader();
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
                        self.catalogObj.catalog.products.product.push(xmlObj.product);
                        productsWritten += 1;
                    }
                    catalogLiteTransform.resume();
                } else {
                    readStream.destroy();
                    catalogLiteTransform.destroy(); // stop the stream
                }
            });

            catalogLiteTransform.on('close', function () {
                const xml = builder.buildObject(self.catalogObj);
                self.writeStream.write(xml);

                resolve(self.outPath);
            });

            catalogLiteTransform.on('error', function (error) {
                reject(error);
            });
        });
    }
}

module.exports = CatalogLite;
