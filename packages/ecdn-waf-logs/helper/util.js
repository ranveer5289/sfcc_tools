const urlLib = require('url');
const path = require('path');
const fs = require('fs');
const zlib = require('zlib');

function getNonCachedUrl(url) {
    let notCachedUrl = url;
    const cachedRegex1 = /(v\d{2,}\/)/;
    const cachedRegex2 = /(dw\w+\/)/;

    if (url.match(cachedRegex1)) {
        notCachedUrl = url.replace(cachedRegex1, '');
    } else if (url.match(cachedRegex2)) {
        notCachedUrl = url.replace(cachedRegex2, '');
    }
    return notCachedUrl;
}

function isQueryString(url) {
    const qsRegex = /^\/.*\?\w+/;
    if (url.match(qsRegex)) {
        return true;
    }
    return false;
}

function getExtension(siteUrl) {
    const parsedUrl = urlLib.parse(siteUrl);
    if (parsedUrl && parsedUrl.pathname) {
        return path.extname(parsedUrl.pathname);
    }
    return null;
}

function getPageType(siteUrl) {
    const specialMapping = {
        '.jpg': 'image',
        '.png': 'image',
        '.gif': 'image',
        '.js': 'javascript',
        '.css': 'css',
        '.svg': 'image',
        '.woff': 'font',
        '.otf': 'font',
        '.xml': 'xml',
        '.txt': 'text'
    };
    let pageType = 'other';
    const ext = getExtension(siteUrl);
    if (siteUrl.indexOf('/images/') !== -1) {
        pageType = 'image';
    } else if (siteUrl.indexOf('__Analytics-') !== -1) {
        pageType = 'sfcc-analytics';
    } else if (siteUrl.indexOf('CQRecomm-') !== -1) {
        pageType = 'sfcc-einstein';
    } else if (siteUrl.indexOf('dwvar_') !== -1 || siteUrl.indexOf('Product-') !== -1) {
        pageType = 'pdp';
    } else if (siteUrl.indexOf('Login-') !== -1) {
        pageType = 'login';
    } else if (siteUrl.indexOf('Account-') !== -1) {
        pageType = 'account';
    } else if (siteUrl.indexOf('Cart-') !== -1 || siteUrl.indexOf('Checkout-') !== -1
             || siteUrl.indexOf('COShipping-') !== -1 || siteUrl.indexOf('COBilling-') !== -1) {
        pageType = 'checkout';
    } else if (siteUrl.indexOf('Search-') !== -1) {
        pageType = 'search';
    } else if (siteUrl.indexOf('prefn1=') !== -1 || siteUrl.indexOf('pmin=') !== -1 || siteUrl.indexOf('srule=') !== -1) {
        pageType = 'search-refinement-sorting';
    } else if (ext in specialMapping) {
        pageType = specialMapping[ext];
    }
    return pageType;
}

function getFilesFromDirectory(inputPath, extName) {
    const files = fs.readdirSync(inputPath);
    if (!files) {
        console.log(`No files found in ${inputPath}`);
        return null;
    }

    const filteredFiles = files.filter(function (file) {
        return path.extname(file) === extName;
    });
    return filteredFiles;
}

function extractAllLogFiles(inputPath) {
    const logFiles = getFilesFromDirectory(inputPath, '.gz');
    if (!logFiles) {
        return null;
    }

    return Promise.all(logFiles.map(function (logFile) {
        return new Promise(function (resolve, reject) {
            const sourcePath = path.join(inputPath, logFile);
            const destinationPath = sourcePath.replace('.gz', '');
            const fileContents = fs.createReadStream(sourcePath);
            const writeStream = fs.createWriteStream(destinationPath);
            const unzip = zlib.createGunzip();
            fileContents.pipe(unzip).pipe(writeStream).on('finish', function (err) {
                if (err) {
                    return reject(err);
                }
                return resolve();
            });
        });
    }));
}

module.exports.getNonCachedUrl = getNonCachedUrl;
module.exports.isQueryString = isQueryString;
module.exports.getPageType = getPageType;
module.exports.getFilesFromDirectory = getFilesFromDirectory;
module.exports.extractAllLogFiles = extractAllLogFiles;
