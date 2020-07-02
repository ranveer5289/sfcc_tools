const LineByLineReader = require('line-by-line');

// @TODO: should be in ecdn package
function parseJSON(esClient, config, resolve, reject) {
    let count = 0;
    let items = [];
    let totalProcessed = 0;
    const batchSize = 1000;
    const helper = config.helper;
    const lineReader = new LineByLineReader(config.filePath);

    lineReader.on('line', async function (line) {
        count += 1;
        let obj;
        try {
            obj = JSON.parse(line.trim());
            obj.ClientRequestURIWithoutVersion = helper.getNonCachedUrl(obj.ClientRequestURI);
            obj.IsPageWithQS = helper.isQueryString(obj.ClientRequestURI);
            obj.PageType = helper.getPageType(obj.ClientRequestURI);
            obj.LogFileName = config.filePath;

            const action = {
                _index: esClient.INDEX_NAME,
                _type: esClient.TYPE,
                _id: obj.RayID
            };
            items.push({ index: action });
            items.push(obj);

            if (count % batchSize === 0) {
                totalProcessed += count;
                lineReader.pause();
                console.log(`Items processed in ElasticSearch ${totalProcessed}`);

                await esClient.bulk(items);
                count = 0;
                items = [];
                lineReader.resume();
            }
        } catch (error) {
            console.log(error);
        }
    });

    lineReader.on('end', async function () {
        console.log('received end event. Finalizing ES processing.....');
        await esClient.bulk(items);
        await esClient.refresh();
        totalProcessed += items.length / 2;
        console.log(`Total items processed in ElasticSearch ${totalProcessed}`);
        console.log('-------------------------------------------------------------');
        resolve();
    });

    lineReader.on('error', function (error) {
        console.log(error);
        reject();
    });
}

function parseJSONPromisify(esClient, config) {
    return new Promise(function (resolve, reject) {
        parseJSON(esClient, config, resolve, reject);
    });
}
module.exports = parseJSONPromisify;
