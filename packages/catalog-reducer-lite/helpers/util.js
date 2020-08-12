const fs = require('fs');
const xtreamer = require('xtreamer');
const xml2js = require('xml2js');

const xtreamerTransform = xtreamer('product', {});
const parser = new xml2js.Parser();

function getMasterCatalogMapping(params) {
    return new Promise(function (resolve, reject) {
        let count = 0;
        const products = [];
        const masterMapping = {};
        const readStream = fs.createReadStream(params.catalogPath);
        readStream.pipe(xtreamerTransform);

        xtreamerTransform.on('data', async function (item) {
            if (item.toString().indexOf('<variants>') !== -1) { // master product
                if (count < params.MAX_MASTERS) {
                    xtreamerTransform.pause();
                    const xmlObj = await parser.parseStringPromise(item.toString());
                    const masterId = xmlObj.product.$['product-id'];
                    masterMapping[masterId] = {};
                    products.push(masterId);

                    // eslint-disable-next-line max-len
                    const variants = xmlObj.product.variations[0].variants[0].variant.map(function (variant) {
                        return variant.$['product-id'];
                    });
                    masterMapping[masterId].variants = variants;
                    products.push(...variants);

                    if (xmlObj.product.variations[0]['variation-groups']) {
                        const variationGroups = xmlObj.product.variations[0]['variation-groups'][0]['variation-group'].map(function (vGroup) {
                            return vGroup.$['product-id'];
                        });
                        masterMapping[masterId].variationGroups = variationGroups;
                        products.push(...variationGroups);
                    }

                    count += 1;
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
                masterMapping: masterMapping
            });
        });

        xtreamerTransform.on('error', function (error) {
            reject(error);
        });
    });
}
module.exports.getMasterCatalogMapping = getMasterCatalogMapping;
