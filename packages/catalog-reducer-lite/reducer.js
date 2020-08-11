const yargs = require('yargs');
const chalk = require('chalk');
const util = require('./helpers/util');
const CatalogLite = require('./lib/CatalogLite');

const MAX_MASTERS = 100;
const argv = yargs
    .usage('Usage: $0 [options]')
    .example('$0 --mastercatalog /path/to/catalog.xml -catalogid master_catalog --inventory true', 'reduce master catalog file')
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

    console.log(chalk.green(`Total products ${mapping.products.length}`));

    const catalogLite = new CatalogLite(mapping.products, argv.c, argv.cid);
    catalogLite.writeCatalogHeader();
    await catalogLite.writeProducts();
    catalogLite.writeCatalogFooter();
}

run();
