const path = require('path');
const yargs = require('yargs');
const splitCSV = require('./helpers/splitCSV');

const argv = yargs
    .usage('Usage: $0 [options]')
    .example('$0 -f /path/to/file.csv', 'split a large CSV to smaller chunks')
    .alias('f', 'inputfile')
    .nargs('f', 1)
    .normalize('f')
    .describe('f', 'Load a CSV file to be split up')
    .demandOption(['f'])
    .help('h')
    .alias('h', 'help')
    .argv;

const outputDir = path.join(__dirname, 'output', 'split-files');
const MAX_LINES_IN_CSV = 10000;

async function split() {
    try {
        console.log('Going to split files now');
        await splitCSV.split({
            inputCSVFile: argv.f,
            outputDir: outputDir,
            MAX_LINES_IN_CSV: MAX_LINES_IN_CSV
        });
    } catch (error) {
        console.log(error);
    }
}

split();
