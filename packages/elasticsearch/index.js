const elasticsearch = require('./lib/elasticsearch');
const xmlparser = require('./parser/XMLParser');
const csvparser = require('./parser/CSVParser');
const ndjsonparser = require('./parser/NDJSONParser');

module.exports.ES = elasticsearch;
module.exports.xmlparser = xmlparser;
module.exports.csvparser = csvparser;
module.exports.ndjsonparser = ndjsonparser;
