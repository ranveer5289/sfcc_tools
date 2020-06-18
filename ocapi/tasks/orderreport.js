const path = require('path');
const csvstream = require('csv-write-stream');
const fs = require('fs');
const chalk = require('chalk');
const pLimit = require('p-limit');

const TASKID = 'orderreport';
const limit = pLimit(5);
let allOrders = [];

const configPath = path.resolve(process.cwd(), 'config.json');
const config = require(configPath);

const oauth = require(path.resolve(process.cwd(), 'ocapi', 'auth', 'oauth.js'));
const ordersearch = require(path.resolve(process.cwd(), 'ocapi', 'shop', 'ordersearch.js'));

async function writeOrderReport() {
    const token = await oauth.getClientCredentialGrant();
    if (!token) {
        process.exit(1);
    }
    
    console.log(chalk.green('Going to retrieve orders from SFCC'));
    let inputs = await getInput(token);
    let allOrders = await execute(inputs);
    console.log(allOrders);
    if(allOrders && allOrders.length > 0) {
        console.log(chalk.green('Total orders found ' + allOrders.length));

        const writer = new csvstream();
        const output = path.resolve(process.cwd(), 'output', `${TASKID}_${config.sfcc_site_id}.csv`);
        if (fs.existsSync(output)) {
            fs.unlinkSync(output);
        }
        writer.pipe(fs.createWriteStream(output));

        allOrders.forEach(function(order) {
            writer.write({'order-no': order.data.order_no});
        });
        writer.end();
    }
}

async function getInput(token) {
    let resp = await ordersearch.search(token);
    const orderSearchResponse = resp.data;
    if (!orderSearchResponse || !orderSearchResponse.hits) {
        return allOrders;
    }

    console.log(chalk.green('Fetching all orders..........'));
    allOrders = allOrders.concat(orderSearchResponse.hits);

    const totalHits = orderSearchResponse.total;
    const input = [];
    console.log(chalk.green('Total orders ' + totalHits));
    const counter = Math.ceil(totalHits / 50);
    for (let i = 1; i < counter; i++) {
        const start = i * 50;
        // console.log(chalk.green('Fetching order from index ' + start));
        input.push(limit(function() {
            return ordersearch.search(token, start);
        }));
    }

    return input;
}

async function execute(inputs) {
    console.log(inputs.length);
    const results = await Promise.all(inputs);
    results.forEach(function(result) {
        allOrders = allOrders.concat(result.data.hits);
    });
    return allOrders;
}
module.exports = writeOrderReport();
