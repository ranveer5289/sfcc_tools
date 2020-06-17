const XmlStream = require('xml-stream');
const fs = require('fs');

let count = 0;
let items = [];
let totalProcessed = 0;
const batchSize = 10000;

async function parseXML(esClient, config) {
    const stream = fs.createReadStream(config.filePath);
    const xml = new XmlStream(stream);

    xml.preserve('product');

    xml.on('endElement: product', async function (item) {
        count += 1;
        const productObj = {};
        const children = item.$children;
        productObj.ID = item.$['product-id'];
        children.forEach(function (child) {
            const name = child.$name;

            if (name === 'display-name' || name === 'short-description' || name === 'long-description') {
                const locale = child.$['xml:lang'].replace('-', '_');
                const key = `${name.replace('-', '_')}_${locale}`;
                productObj[key] = child.$text;
            } else if (name === 'online-flag') {
                const siteId = child.$ && child.$['site-id'] ? child.$['site-id'] : '';
                const key = siteId ? `${name}_${siteId}` : name;
                const value = child.$text;
                productObj[key] = value;
            } else if (name === 'custom-attributes') {
                const subChildren = child.$children;
                if (subChildren.length) {
                    subChildren.forEach(function (subChild) {
                        const attributeId = subChild.$['attribute-id'];
                        let attributeKey = attributeId;

                        const locale = subChild.$['xml:lang'] ? subChild.$['xml:lang'].replace('-', '_') : '';
                        const siteId = subChild.$['site-id'];

                        let attributeValue = subChild.$text || '';

                        const subSubChildren = subChild.$children ? subChild.$children : null;
                        if (subSubChildren && subSubChildren.length > 0) {
                            const values = subSubChildren.map(function (f) {
                                if (f.$text) {
                                    return f.$text;
                                }
                                return f;
                            });
                            attributeValue = values.join(',');
                        }

                        if (locale && siteId) {
                            attributeKey = `${attributeId}_${locale}_${siteId}`;
                        } else if (locale) {
                            attributeKey = `${attributeId}_${locale}`;
                        } else if (siteId) {
                            attributeKey = `${attributeId}_${siteId}`;
                        }
                        productObj[`c__${attributeKey}`] = attributeValue;
                    });
                }
            } else {
                productObj[child.$name] = child.$text || '';
            }
        });

        const action = {
            _index: esClient.INDEX_NAME,
            _type: '_doc',
            _id: productObj.ID
        };
        items.push({ index: action });
        items.push(productObj);

        if (count % batchSize === 0) {
            totalProcessed += count;
            xml.pause();
            console.log(`Items processed in ElasticSearch ${totalProcessed}`);
            await esClient.bulk(items);
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
