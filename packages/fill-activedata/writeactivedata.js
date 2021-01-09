const csv = require('csv-parser');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createArrayCsvWriter;
const insertLine = require('insert-line');

const csvWriter = createCsvWriter({
    path: 'output.csv',
    header: ['productID', 'revenueDay', 'unitsDay', 'ordersDay', 'impressionsDay', 'viewsDay', 'avgSalesPriceDay', 'conversionDay', 'revenueWeek', 'unitsWeek', 'ordersWeek', 'impressionsWeek', 'viewsWeek', 'avgSalesPriceWeek', 'conversionWeek', 'revenueMonth', 'unitsMonth', 'ordersMonth', 'impressionsMonth', 'viewsMonth', 'avgSalesPriceMonth', 'conversionMonth', 'revenueYear', 'unitsYear', 'ordersYear', 'impressionsYear', 'viewsYear', 'avgSalesPriceYear', 'conversionYear']
});

let count = 0;
const records = [];

fs.createReadStream('products.csv')
    .pipe(csv())
    .on('data', function (data) {
        const defaultValues = [
            0.0, 0.0, 0, 0, 0, 0.0, 0.0, 0.0, 0.0, 0, 0, 0, 0.0, 0.0,
            0.0, 0.0, 0, 0, 0, 0.0, 0.0, 0.0, 0.0, 0, 0, 0, 0.0, 0.0
        ];
        defaultValues.unshift(data.productId); // add productId at the beginning
        count += 1;
        records.push(defaultValues);
    }).on('end', async function () {
        await csvWriter.writeRecords(records);
        console.log('...Done');
        console.log(count);
        await insertLine('./output.csv').content('\nDemandware Product Active Data').at(1);
    });
