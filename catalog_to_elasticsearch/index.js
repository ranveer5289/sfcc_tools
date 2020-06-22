const ES = require('./es');
const CSVParser = require('./parser/CSVParser');
const XMLParser = require('./parser/XMLParser');

const client = new ES({ host: 'http://localhost:9200', TYPE: 'products' });

async function parse() {
    const indexExists = await client.indexExists();
    if (!indexExists) {
        await client.createIndex();
    }

    // CSVParser.parseCSV(client, { filePath: './parser/vd-master-catalog.csv' });
    await XMLParser.parseXML(client, { filePath: './parser/vd-all.xml' });
}

parse();
