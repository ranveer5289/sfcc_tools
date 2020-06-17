const ES = require('./es');
const CSVParser = require('./parser/CSVParser');
const XMLParser = require('./parser/XMLParser');

const client = new ES({ host: 'http://localhost:9200' });

async function main() {
    const indexExists = await client.indexExists();
    if (!indexExists) {
        await client.createIndex();
    }

    // // CSVParser.parseCSV(client, { filePath: './parser/test.csv' });
    await XMLParser.parseXML(client, { filePath: './parser/test.xml' });
}

main();
