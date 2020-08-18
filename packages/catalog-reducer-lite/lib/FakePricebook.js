const fs = require('fs');
const xml2js = require('xml2js');
const path = require('path');

const builder = new xml2js.Builder();

class FakePricebook {
    constructor(productMapping, params) {
        this.productMapping = productMapping;
        this.pricebookId = params.pricebookId;
        this.currency = params.currency;
        this.parentPricebookId = params.parentPricebookId;
        this.defaultPrice = params.defaultPrice;
        this.pricebookObj = {};

        this.outPath = path.join(__dirname, '..', `reduced-${this.pricebookId}.xml`);
    }

    buildPricebookHeader() {
        this.pricebookObj = {
            pricebooks: {
                $: {
                    xmlns: 'http://www.demandware.com/xml/impex/pricebook/2006-10-31'
                },
                pricebook: {
                    header: {
                        $: {
                            'pricebook-id': this.pricebookId
                        },
                        currency: this.currency,
                        'online-flag': true
                    },
                    'price-tables': {
                        'price-table': []
                    }
                }
            }
        };

        if (this.parentPricebookId) {
            this.pricebookObj.pricebooks.pricebook.header.parent = this.parentPricebookId;
        }
    }

    writeProducts() {
        const self = this;
        return new Promise(function (resolve, reject) {
            self.buildPricebookHeader();
            Object.keys(self.productMapping).forEach(function (productId) {
                self.productMapping[productId].variants.forEach(function (variant) {
                    let defaultPrice = self.defaultPrice;
                    if (self.parentPricebookId) { // generate random sale price
                        const random = Math.random().toFixed(2);
                        defaultPrice *= random;
                    }
                    const record = {
                        $: {
                            'product-id': variant
                        },
                        amount: {
                            $: {
                                quantity: 1
                            },
                            _: defaultPrice.toFixed(2)
                        }
                    };
                    self.pricebookObj.pricebooks.pricebook['price-tables']['price-table'].push(record);
                });
            });

            const xml = builder.buildObject(self.pricebookObj);

            fs.writeFile(self.outPath, xml, function (error) {
                if (error) {
                    reject(error);
                }
                resolve(self.outPath);
            });
        });
    }
}

module.exports = FakePricebook;
