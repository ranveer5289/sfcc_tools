const fs = require('fs');
const xml2js = require('xml2js');
const path = require('path');
const config = require('@sfcc_tools/config');

const builder = new xml2js.Builder();
const catalogLiteConfig = config.get('packages.catalog-reducer-lite');

class FakeInventory {
    constructor(productMapping) {
        this.productMapping = productMapping;
        this.inventoryListId = catalogLiteConfig.inventory.inventory_id;
        this.defaultStockLevel = catalogLiteConfig.inventory.default_stock_level;
        this.inventoryObj = {};

        this.outPath = path.join(__dirname, '..', `reduced-${this.inventoryListId}.xml`);
    }

    buildInventoryHeader() {
        this.inventoryObj = {
            inventory: {
                $: {
                    xmlns: 'http://www.demandware.com/xml/impex/inventory/2007-05-31'
                },
                'inventory-list': {
                    header: {
                        $: {
                            'list-id': this.inventoryListId
                        },
                        'default-instock': false,
                        'use-bundle-inventory-only': false,
                        'on-order': false
                    },
                    records: {
                        record: []
                    }
                }
            }
        };
    }

    writeProducts() {
        const self = this;
        return new Promise(function (resolve, reject) {
            self.buildInventoryHeader();
            Object.keys(self.productMapping).forEach(function (productId) {
                self.productMapping[productId].variants.forEach(function (variant) {
                    const record = {
                        $: {
                            'product-id': variant
                        },
                        allocation: self.defaultStockLevel
                    };
                    self.inventoryObj.inventory['inventory-list'].records.record.push(record);
                });
            });

            const xml = builder.buildObject(self.inventoryObj);

            fs.writeFile(self.outPath, xml, function (error) {
                if (error) {
                    reject(error);
                }
                resolve(self.outPath);
            });
        });
    }
}

module.exports = FakeInventory;
