const yargs = require('yargs');
const chalk = require('chalk');
const util = require('./helpers/util');
const CatalogLite = require('./lib/CatalogLite');
const FakeInventory = require('./lib/FakeInventory');

const MAX_MASTERS = 50;
const DEFAULT_INVENTORY_LEVEL = 100;
const argv = yargs
    .usage('Usage: $0 [options]')
    .example('$0 --mastercatalog /path/to/catalog.xml --catalogid master_catalog --inventory true --inventoryid "inventory-list-id"', 'reduce master catalog file')
    .alias('c', 'mastercatalog')
    .nargs('c', 1)
    .normalize('c')
    .describe('c', 'Path to master catalog XML file')
    .alias('cid', 'catalogid')
    .nargs('cid', 1)
    .describe('cid', 'master catalog id')
    .alias('i', 'inventory')
    .nargs('i', 1)
    .normalize('i')
    .describe('i', 'Generate inventory file or not')
    .nargs('inventoryid', 1)
    .describe('inventoryid', 'inventory list id')
    .demandOption(['c', 'cid'])
    .help('h')
    .alias('h', 'help')
    .wrap(null)
    .argv;

async function run() {
    const mapping = await util.getMasterCatalogMapping({
        catalogPath: argv.c,
        MAX_MASTERS: MAX_MASTERS
    });

    console.log(chalk.green(`Total products(masters, variants, variationgroups) ${mapping.products.length}`));
    try {
        const catalogLite = new CatalogLite(mapping.products, argv.c, argv.cid);
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

run();
