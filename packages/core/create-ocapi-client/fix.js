const path = require('path');
const fs = require('fs');

function fixPackageJSON(apiName) {
    const dataApiFolder = path.join(__dirname, '..', 'ocapi', apiName);
    const dataApiPackageJSONFile = path.join(dataApiFolder, 'package.json');

    console.log(`reading file ${dataApiPackageJSONFile}`);
    const packageJSONData = fs.readFileSync(dataApiPackageJSONFile);
    const jsonObj = JSON.parse(packageJSONData.toString());

    jsonObj.version = '1.0.0';
    console.log('fixing package.json');

    fs.writeFileSync(dataApiPackageJSONFile, JSON.stringify(jsonObj, null, '\t'));
}

fixPackageJSON('shop-api');
fixPackageJSON('data-api');
