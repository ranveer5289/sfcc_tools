const yargs = require('yargs');
const chalk = require('chalk');
const config = require('@sfcc_tools/config');

const util = require('./helpers/util');
const CatalogLite = require('./lib/CatalogLite');
const FakeInventory = require('./lib/FakeInventory');
const FakePricebook = require('./lib/FakePricebook');

const catalogLiteConfig = config.get('packages.catalog-reducer-lite');

const MAX_MASTERS = catalogLiteConfig.catalog.max_masters;
const DEFAULT_INVENTORY_LEVEL = catalogLiteConfig.inventory.default_stock_level;

const argv = yargs
    .usage('Usage: $0 [options]')
    .example('$0 --mastercatalog /path/to/catalog.xml --inventory true --pricebook true', 'reduce master catalog file')
    .alias('c', 'mastercatalog')
    .nargs('c', 1)
    .normalize('c')
    .describe('c', 'Path to master catalog XML file')
    .alias('i', 'inventory')
    .nargs('i', 1)
    .describe('i', 'Generate inventory file or not')
    .alias('p', 'pricebook')
    .nargs('p', 1)
    .describe('p', 'Generate pricebook file or not')
    .demandOption(['c'])
    .help('h')
    .alias('h', 'help')
    .wrap(null)
    .argv;

async function main() {
    const mapping = await util.getMasterCatalogMapping({
        catalogPath: argv.c,
        MAX_MASTERS: MAX_MASTERS
    });

    console.log(chalk.green(`Total products ${mapping.statistics.totalProducts}`));
    console.log(chalk.green(`Total masters ${mapping.statistics.masterCount}`));
    console.log(chalk.green(`Total variants ${mapping.statistics.variantCount}`));
    console.log(chalk.green(`Total variationGroups ${mapping.statistics.variationGroupCount}`));

    try {
        const catalogLite = new CatalogLite(mapping.products, argv.c);
        const catalogOutputPath = await catalogLite.writeProducts();
        if (catalogOutputPath) {
            console.log(chalk.green(`Reduced Master Catalog file written at ${catalogOutputPath}`));
        }

        if (argv.i) {
            const fakeInventory = new FakeInventory(
                mapping.masterMapping, argv.inventoryid, DEFAULT_INVENTORY_LEVEL
            );
            const inventoryOutputPath = await fakeInventory.writeProducts();
            if (inventoryOutputPath) {
                console.log(chalk.green(`Fake Inventory file written at ${inventoryOutputPath}`));
            }
        }

        if (argv.p) {
            const priceBooks = catalogLiteConfig.pricebooks;
            const asyncFunctions = [];

            // eslint-disable-next-line no-restricted-syntax
            for (const key in priceBooks) {
                if (Object.prototype.hasOwnProperty.call(priceBooks, key)) {
                    const pricebook = priceBooks[key];
                    const parentPriceBookObj = priceBooks[pricebook.parentPriceBook];
                    const params = {
                        pricebookId: pricebook.id,
                        currency: pricebook.currency,
                        defaultPrice: pricebook.default_price,
                        parentPricebookId: parentPriceBookObj ? parentPriceBookObj.id : null
                    };
                    const fakePricebook = new FakePricebook(mapping.masterMapping, params);
                    asyncFunctions.push(fakePricebook.writeProducts());
                }
            }

            Promise.all(asyncFunctions).then(function (result) {
                console.log(chalk.green('Fake Pricebook files written at: '));
                console.log(result.join('\n'));
            });
        }
    } catch (error) {
        console.log(chalk.red(error));
    }
}

main();
