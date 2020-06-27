const es = require('./lib/elasticsearch');
const xmlparser = require('./parser/XMLParser');
const csvparser = require('./parser/CSVParser');

module.exports.es = es;
module.exports.xmlparser = xmlparser;
module.exports.csvparser = csvparser;
