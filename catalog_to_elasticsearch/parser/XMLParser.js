const XmlStream = require('xml-stream');
const fs = require('fs');

let count = 0;
let items = [];
let totalProcessed = 0;
const batchSize = 1000;
let productObj = {};

async function parseXML(esClient, config) {
    const stream = fs.createReadStream(config.filePath);
    const xml = new XmlStream(stream);

    xml.preserve('product');

    xml.on('endElement: online-flag', function (item) {
        let key;
        if (Object.prototype.hasOwnProperty.call(item, '$')) {
            key = item.$['site-id'] ? `${item.$name}_${item.$['site-id']}` : item.name;
        } else {
            key = item.$name;
        }
        productObj[key] = item.$name;
    });

    xml.on('endElement: available-flag', function (item) {
        productObj[item.$name] = item.$text;
    });
    xml.on('endElement: tax-class-id', function (item) {
        productObj[item.$name] = item.$text;
    });
    xml.on('endElement: brand', function (item) {
        productObj[item.$name] = item.$text;
    });
    xml.on('endElement: classification-category', function (item) {
        productObj[item.$name] = item.$text;
    });

    xml.on('endElement: product > display-name', function (item) {
        const locale = item.$['xml:lang'];
        const attributeId = item.$name;
        const value = item.$text;
        let key = attributeId;
        if (locale) {
            key = `${attributeId}_${locale}`;
        }
        productObj[key] = value;
    });

    xml.on('endElement: product > short-description', function (item) {
        const locale = item.$['xml:lang'];
        const attributeId = item.$name;
        const value = item.$text;
        let key = attributeId;
        if (locale) {
            key = `${attributeId}_${locale}`;
        }
        productObj[key] = value;
    });

    xml.on('endElement: product > long-description', function (item) {
        const locale = item.$['xml:lang'];
        const attributeId = item.$name;
        const value = item.$text;
        let key = attributeId;
        if (locale) {
            key = `${attributeId}_${locale}`;
        }
        productObj[key] = value;
    });

    xml.on('endElement: custom-attribute', function (item) {
        const attributeId = item.$['attribute-id'];
        const locale = item.$['xml:lang'];
        const siteId = item.$['site-id'];
        let key;
        let values;

        const children = item.$children;
        if (children && children.length > 0) {
            values = children.map(function (child) {
                if (child.$text) {
                    return child.$text;
                }
                return child;
            }).join(',');
        }
        if (locale && siteId) {
            key = `${attributeId}_${siteId}_${locale}`;
        } else if (siteId) {
            key = `${attributeId}_${siteId}`;
        } else if (locale) {
            key = `${attributeId}_${locale}`;
        } else {
            key = attributeId;
        }

        productObj[key] = values;
    });

    xml.on('endElement: variants', function (item) {
        const children = item.$children;
        if (children && children.length > 0) {
            const variants = children.map(function (child) {
                return child.$['product-id'];
            }).join(',');
            productObj[item.$name] = variants;
            productObj.productType = 'master';
        }
    });

    xml.on('endElement: variation-groups', function (item) {
        const children = item.$children;
        if (children && children.length > 0) {
            const variants = children.map(function (child) {
                return child.$['product-id'];
            }).join(',');
            productObj[item.$name] = variants;
        }
    });

    xml.on('endElement: product', async function (item) {
        const productID = item.$['product-id'];
        productObj.ID = productID;

        count += 1;
        const action = {
            _index: esClient.INDEX_NAME,
            _type: esClient.TYPE,
            _id: productObj.ID
        };
        items.push({ index: action });
        items.push(productObj);
        productObj = {};
        if (count % batchSize === 0) {
            totalProcessed += count;
            xml.pause();
            // console.log(items);
            await esClient.bulk(items);
            console.log(`Items processed in ElasticSearch ${totalProcessed}`);
            count = 0;
            items = [];
            xml.resume();
        }
    });

    xml.on('end', async function () {
        await esClient.bulk(items);
        await esClient.refresh();
        totalProcessed += items.length / 2;
        console.log(`Total items processed in ElasticSearch ${totalProcessed}`);
    });

    xml.on('error', function (error) {
        console.log(error);
    });
}

module.exports.parseXML = parseXML;
