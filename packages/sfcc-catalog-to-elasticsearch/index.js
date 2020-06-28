const elasticsearch = require('@sfcc_tools/elasticsearch');

const ES = elasticsearch.es;
const XMLParser = elasticsearch.xmlparser;
// const CSVParser = elasticsearch.csvparser;

const client = new ES({ host: 'http://localhost:9200', TYPE: 'products' });

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
