const path = require('path');
const fs = require('fs');
const XmlStream = require('xml-stream');
const yargs = require('yargs');
const chalk = require('chalk');
const config = require('@sfcc_tools/config');
const dateFns = require('date-fns');
const csv = require('fast-csv');

const imageCheckerConfig = config.get('packages.image-checker');
const daysInPast = imageCheckerConfig.days_in_past || 1;

const csvStream = csv.format({ headers: true });

const argv = yargs
    .usage('Usage: $0 [options]')
    .example('$0 --serverxml /path/to/serverfile.xml --fname images_modified.csv', 'Find images modified in last X days')
    .alias('s', 'serverxml')
    .nargs('s', 1)
    .normalize('s')
    .describe('s', 'Path to sever XML file, generated using PROPFIND request to WEBDAV')
    .alias('fname', 'filename')
    .nargs('fname', 1)
    .describe('fname', 'Name of the file(with extension(CSV)) to which images modified withing offset will be writtent to')
    .default('fname', 'images_modified.csv')
    .demandOption(['s'])
    .help('h')
    .alias('h', 'help')
    .wrap(null)
    .argv;

function find() {
    let totalImagesModified = 0;
    const stream = fs.createReadStream(argv.s);
    const xml = new XmlStream(stream);
    const outputDir = path.join(__dirname, 'output');

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }
    const outputCSVFileName = path.join(outputDir, argv.fname);

    const outputStream = fs.createWriteStream(outputCSVFileName);
    csvStream.pipe(outputStream);

    xml.on('endElement: response', function (item) {
        const lastModifiedDate = item.propstat && item.propstat.prop
        && item.propstat.prop.getlastmodified ? item.propstat.prop.getlastmodified : '';

        if (lastModifiedDate && lastModifiedDate !== 'null') {
            const imagePath = item.href;
            // Mon, 01 Jun 2020 12:10:19 GMT
            const dateString = dateFns.parse(lastModifiedDate, 'EEE, d LLL yyyy HH:mm:ss \'GMT\'', new Date());
            const imageModifiedDate = new Date(dateString);
            if (dateFns.isValid(imageModifiedDate)) {
                const todaysDate = new Date();
                todaysDate.setDate(todaysDate.getDate() - daysInPast); // subtract offset

                // modified date of image is after the offset
                if (imageModifiedDate > todaysDate) {
                    totalImagesModified += 1;
                    csvStream.write({ 'image-path': imagePath });
                }
            } else {
                console.log(chalk.red(`Invalid date ${lastModifiedDate} for image ${imagePath}`));
            }
        }
    });

    xml.on('end', function () {
        console.log(chalk.green(`Total images modified in last ${daysInPast} days are ${totalImagesModified}`));
        console.log(chalk.green(`modified images are written at location ${outputCSVFileName}`));
        csvStream.end();
    });
}

find();
