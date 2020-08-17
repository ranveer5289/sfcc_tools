const yargs = require('yargs');
const chalk = require('chalk');
const config = require('@sfcc_tools/config');

const util = require('./helpers/util');
const CatalogLite = require('./lib/CatalogLite');
const FakeInventory = require('./lib/FakeInventory');

const catalogLiteConfig = config.get('packages.catalog-reducer-lite');

const MAX_MASTERS = catalogLiteConfig.catalog.max_masters;
const DEFAULT_INVENTORY_LEVEL = catalogLiteConfig.inventory.default_stock_level;

const argv = yargs
    .usage('Usage: $0 [options]')
    .example('$0 --mastercatalog /path/to/catalog.xml --catalogid master_catalog --inventory true --inventoryid "inventory-list-id"', 'reduce master catalog file')
    .alias('c', 'mastercatalog')
    .nargs('c', 1)
    .normalize('c')
    .describe('c', 'Path to master catalog XML file')
    .alias('i', 'inventory')
    .nargs('i', 1)
    .normalize('i')
    .describe('i', 'Generate inventory file or not')
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
            console.log(chalk.green(`reduced master catalog file written at ${catalogOutputPath}`));
        }

        if (argv.i) {
            const fakeInventory = new FakeInventory(
                mapping.masterMapping, argv.inventoryid, DEFAULT_INVENTORY_LEVEL
            );
            const inventoryOutputPath = await fakeInventory.writeProducts();
            if (inventoryOutputPath) {
                console.log(chalk.green(`fake inventory file written at ${inventoryOutputPath}`));
            }
        }
    } catch (error) {
        console.log(chalk.red(error));
    }
}

main();
