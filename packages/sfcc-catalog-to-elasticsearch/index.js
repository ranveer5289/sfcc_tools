const elasticsearch = require('@sfcc_tools/elasticsearch');
const path = require('path');

process.env.NODE_CONFIG_DIR = path.join(process.cwd(), '..', '..', 'config');
const config = require('config');

const esConfig = config.get('packages.sfcc-catalog-to-elasticsearch');

const ES = elasticsearch.ES;
const XMLParser = elasticsearch.xmlparser;
// const CSVParser = elasticsearch.csvparser;

const client = new ES({
    host: esConfig.elasticsearchHost,
    TYPE: esConfig.doc_type,
    INDEX_NAME: esConfig.index_name
});

async function parse() {
    try {
        const indexExists = await client.indexExists();
        if (!indexExists) {
            await client.createIndex();
        }

        // CSVParser.parseCSV(client, { filePath: './parser/vd-master-catalog.csv' });
        XMLParser.parseXML(client, { filePath: './vd-all.xml' });
    } catch (error) {
        console.log(error);
    }
}

parse();
