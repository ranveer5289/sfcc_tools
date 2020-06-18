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
    let promises = await getPromises(token);
    let allOrders = await execute(promises);
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
            const mergedObject = {};
            const customAttributes = getOrderAttributes(order.data);
            const billingAddress = getAddress(order.data.billing_address, 'billing');
            const shippingAddress = getAddress(order.data.shipments[0].shipping_address, 'shipping');
            const customerInfo = {
                'order-no': order.data.order_no,
                'customer-name': order.data.customer_info.customer_name,
                'customer-email': order.data.customer_info.email,
                'customer-no':  order.data.customer_info.customer_no,
            };

            Object.assign(mergedObject, customerInfo, customAttributes, billingAddress, shippingAddress);

            writer.write(mergedObject);
        });
        writer.end();
    }
}

function getOrderAttributes(obj) {
    const customAttributtes = {};
    for (key in obj) {
        if (typeof obj[key] !== 'object') {
            customAttributtes[key] = obj[key];
        }
    }
    return customAttributtes;
}

function getAddress(address, addressType) {
    const addressObj = {};
    for (key in address) {
        addressObj[addressType + '_' + key] = address[key];
    }
    return addressObj;
}

async function getPromises(token) {
    let apiResponse = await ordersearch.search(token);
    const orderSearchResponse = apiResponse && apiResponse.data;
    if (!orderSearchResponse || !orderSearchResponse.hits) {
        return allOrders;
    }

    console.log(chalk.green('Fetching all orders..........'));
    allOrders = allOrders.concat(orderSearchResponse.hits);

    const totalHits = orderSearchResponse.total;
    const asyncFunctions = [];
    console.log(chalk.green('Total orders ' + totalHits));
    const counter = Math.ceil(totalHits / 50);
    for (let i = 1; i < counter; i++) {
        const start = i * 50;
        asyncFunctions.push(limit(function() {
            return ordersearch.search(token, start);
        }));
    }

    return asyncFunctions;
}

async function execute(promises) {
    console.log(promises.length);
    const results = await Promise.all(promises);
    if (!results) {
        return allOrders;
    }
    results.forEach(function(result) {
        allOrders = allOrders.concat(result.data.hits);
    });
    return allOrders;
}
module.exports = writeOrderReport();
