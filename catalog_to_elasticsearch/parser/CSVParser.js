const fastcsv = require('fast-csv');
const fs = require('fs');

let count = 0;
let items = [];
let totalProcessed = 0;
const batchSize = 1000;

function parseCSV(esClient, config) {
    const stream = fs.createReadStream(config.filePath);
    const parser = fastcsv.parseStream(stream, { headers: true })
        .on('error', function (error) {
            console.log(error);
        })
        .on('data', async function (row) {
            count += 1;
            const action = {
                _index: esClient.INDEX_NAME,
                _type: esClient.TYPE,
                _id: row.ID
            };
            items.push({ index: action });
            items.push(row);
            if (count % batchSize === 0) {
                totalProcessed += count;
                parser.pause();
                console.log(`Items processed in ElasticSearch ${totalProcessed}`);
                console.log(items.length);
                console.log('-----------------------');

                await esClient.bulk(items);
                if (parser.isPaused()) {
                    parser.resume();
                    count = 0;
                    items = [];
                }
            }
        })
        .on('end', async function (rowCount) {
            await esClient.bulk(items);
            await esClient.refresh();
            totalProcessed += items.length / 2;
            console.log(`Total items processed in ElasticSearch ${totalProcessed}`);
            console.log(`Total CSV rows ${rowCount}`);
        });
}

module.exports.parseCSV = parseCSV;
