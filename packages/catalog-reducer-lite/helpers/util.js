const fs = require('fs');
const xtreamer = require('xtreamer');
const xml2js = require('xml2js');

const xtreamerTransform = xtreamer('product', {}); // collect product nodes
const parser = new xml2js.Parser();

function getMasterCatalogMapping(params) {
    return new Promise(function (resolve, reject) {
        let count = 0;
        let masterCount = 0;
        let variantCount = 0;
        let variationGroupCount = 0;
        const products = [];
        const masterMapping = {};

        const readStream = fs.createReadStream(params.catalogPath);
        readStream.pipe(xtreamerTransform);

        xtreamerTransform.on('data', async function (item) {
            if (item.toString().indexOf('<variants>') !== -1) { // master product
                if (count < params.MAX_MASTERS) {
                    xtreamerTransform.pause();
                    const xmlObj = await parser.parseStringPromise(item.toString());
                    // eslint-disable-next-line max-len
                    const variants = xmlObj.product.variations[0].variants[0].variant.map(function (variant) {
                        return variant.$['product-id'];
                    });

                    // only consider master products which have atleast below defined variant count.
                    // This is needed to avoid collecting masters with
                    // single variant(fixed-size) products
                    if (variants.length > params.minimumVariants) {
                        masterCount += 1;
                        const masterId = xmlObj.product.$['product-id'];
                        masterMapping[masterId] = {};
                        products.push(masterId);
                        variantCount += variants.length;
                        masterMapping[masterId].variants = variants;
                        products.push(...variants);

                        if (xmlObj.product.variations[0]['variation-groups']) {
                            const variationGroups = xmlObj.product.variations[0]['variation-groups'][0]['variation-group'].map(function (vGroup) {
                                return vGroup.$['product-id'];
                            });
                            variationGroupCount += variationGroups.length;
                            masterMapping[masterId].variationGroups = variationGroups;
                            products.push(...variationGroups);
                        }

                        count += 1;
                    }
                    xtreamerTransform.resume();
                } else {
                    readStream.destroy(); // stop the stream
                    xtreamerTransform.destroy();
                }
            }
        });
        xtreamerTransform.on('close', function () {
            resolve({
                products: products,
                masterMapping: masterMapping,
                statistics: {
                    totalProducts: products.length,
                    masterCount: masterCount,
                    variantCount: variantCount,
                    variationGroupCount: variationGroupCount
                }
            });
        });

        xtreamerTransform.on('error', function (error) {
            reject(error);
        });
    });
}
module.exports.getMasterCatalogMapping = getMasterCatalogMapping;
