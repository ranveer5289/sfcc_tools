const path = require('path');
process.env.NODE_CONFIG_DIR = path.join(process.cwd(), '..', '..', 'config');
const config = require('config');

module.exports = config;
