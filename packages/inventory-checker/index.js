const yargs = require('yargs');
const fs = require('fs');
const chalk = require('chalk');
const path = require('path');
const plotlib = require('nodeplotlib');

const inventoryHelper = require('./helpers/getProductFromInventoryXML');

// const pid = 'ino.diamant.0dk011.001.7024163424247';
// const xmlPath = './no_no_00968ed5-4e35-44b1-9e0e-69da9dc1201f.xml';

const argv = yargs
    .usage('Usage: $0 [options]')
    .example('$0 --pid 12345 --inputDir /path/to/xmlfiles', '')
    .nargs('pid', 1)
    .describe('pid', 'Product Id to search for in the xml files')
    .nargs('inputDir', 1)
    .describe('inputDir', 'Input directory where inventory xml files are located')
    .demandOption(['pid', 'inputDir'])
    .help('h')
    .alias('h', 'help')
    .wrap(null)
    .argv;

async function run() {
    const inventoryFiles = fs.readdirSync(argv.inputDir);
    if (!inventoryFiles) {
        console.log(chalk.red(`No inventory files found in ${argv.inputDir}`));
        return;
    }
    const asyncFunctions = inventoryFiles.map(function (inventoryFile) {
        return inventoryHelper.getProductData({
            inventoryFileName: inventoryFile,
            inventoryXMLPath: path.join(argv.inputDir, inventoryFile),
            pid: argv.pid
        });
    });

    try {
        let results = await Promise.all(asyncFunctions);

        results = results.filter(function (item) {
            return item && Object.keys(item).length > 0;
        });
        const sortedByTimeStamp = results.sort(function (a, b) {
            if (a.timestampAsDate < b.timestampAsDate) {
                return -1;
            } if (a.timestampAsDate > b.timestampAsDate) {
                return 1;
            }
            return 0;
        });
        console.table(sortedByTimeStamp);
        const xAxis = [];
        const yAxis = [];
        sortedByTimeStamp.forEach(function (item) {
            xAxis.push(item.timestampAsDate);
            yAxis.push(item.allocation);
        });
        const layout = {
            title: `Inventory allocation for product ${argv.pid}`,
            xaxis: {
                title: 'timestamp'
            },
            yaxis: {
                title: 'allocation'
            }
        };
        const chartData = [
            {
                x: xAxis,
                y: yAxis,
                type: 'line'
            }
        ];
        plotlib.plot(chartData, layout);
    } catch (error) {
        console.log(chalk.red(error));
    }
}

run();
