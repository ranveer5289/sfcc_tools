const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

function fixPackageJSON(apiName) {
    const ocapiFolder = path.join(__dirname, '..', 'ocapi', apiName);
    const ocapiJsonFile = path.join(ocapiFolder, 'package.json');

    console.log(chalk.green(`reading file ${ocapiJsonFile}`));
    const packageJSONData = fs.readFileSync(ocapiJsonFile);
    const jsonObj = JSON.parse(packageJSONData.toString());

    // modify below vars for lerna to work properly
    jsonObj.version = '1.0.0';
    if (jsonObj.name.indexOf('@sfcc_tools') === -1) {
        jsonObj.name = `@sfcc_tools/${jsonObj.name}`;
    }
    jsonObj.private = true;
    console.log(chalk.green('fixing package.json'));

    fs.writeFileSync(ocapiJsonFile, JSON.stringify(jsonObj, null, '\t'));
}

fixPackageJSON('shop-api');
fixPackageJSON('data-api');
