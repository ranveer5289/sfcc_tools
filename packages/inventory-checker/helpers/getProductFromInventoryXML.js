const XmlStream = require('xml-stream');
const fs = require('fs');
const dateFns = require('date-fns');
const chalk = require('chalk');

function getProductData(config) {
    return new Promise(function (resolve, reject) {
        let inventoryMapping = {};
        const inventoryXMLPath = config.inventoryXMLPath;
        const stream = fs.createReadStream(inventoryXMLPath);
        const productId = config.pid;
        const xml = new XmlStream(stream);
        xml.on('endElement: record', function (item) {
            const pid = item.$['product-id'];
            if (pid === productId) {
                const allocation = item.allocation;
                const timestamp = item['allocation-timestamp'];
                const timestampAsDate = dateFns.parse(timestamp, 'yyyy-MM-dd\'T\'HH:mm:ss.SSSX', new Date());
                if (inventoryMapping.pid !== pid) {
                    inventoryMapping = {
                        pid: pid,
                        filename: config.inventoryFileName,
                        timestampAsDate: timestampAsDate,
                        allocation: allocation
                    };
                } else {
                    console.log(chalk.red(`Multiple inventory allocations found for pid ${pid} in file ${inventoryXMLPath}`));
                    console.log(chalk.red(`Previous value for pid ${pid} in same file is ${inventoryMapping.allocation}`));
                    console.log('---------------------------------------------------------------------------------');
                }
            }
        });

        xml.on('end', function () {
            resolve(inventoryMapping);
        });

        xml.on('error', function (error) {
            reject(error);
        });
    });
}

module.exports.getProductData = getProductData;
