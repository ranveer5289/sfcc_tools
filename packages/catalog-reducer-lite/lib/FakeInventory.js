const fs = require('fs');
const xml2js = require('xml2js');
const path = require('path');
const chalk = require('chalk');

const builder = new xml2js.Builder({ headless: true });

class FakeInventory {
    constructor(productMapping, inventoryListId, defaultStockLevel) {
        this.productMapping = productMapping;
        this.inventoryListId = inventoryListId;
        this.defaultStockLevel = defaultStockLevel;

        this.outPath = path.join(__dirname, '..', `reduced-${this.inventoryListId}.xml`);
        this.writeStream = fs.createWriteStream(this.outPath);
    }

    writeInventoryHeader() {
        this.writeStream.write(`<inventory xmlns="http://www.demandware.com/xml/impex/inventory/2007-05-31">
        <inventory-list>
            <header list-id="${this.inventoryListId}">
                <default-instock>false</default-instock>
                <description>Inventory List</description>
                <use-bundle-inventory-only>false</use-bundle-inventory-only>
                <on-order>false</on-order>
            </header><records>\n`);
    }

    writeProducts() {
        const self = this;
        return new Promise(function (resolve, reject) {
            self.writeInventoryHeader();
            Object.keys(self.productMapping).forEach(function (productId) {
                self.productMapping[productId].variants.forEach(function (variant) {
                    const obj = {
                        record: {
                            $: {
                                'product-id': variant
                            },
                            ats: self.defaultStockLevel
                        }
                    };
                    const xml = builder.buildObject(obj);
                    self.writeStream.write(xml);
                });
            });
            self.writeInventoryFooter();

            self.writeStream.on('finish', function () {
                resolve(self.outPath);
            });
            self.writeStream.on('error', function (error) {
                reject(error);
            });
        });
    }

    writeInventoryFooter() {
        this.writeStream.write('</records></inventory-list></inventory>');
        this.writeStream.end();
    }
}

module.exports = FakeInventory;
