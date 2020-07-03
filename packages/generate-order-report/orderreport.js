/* eslint-disable import/no-dynamic-require */
const path = require('path');
const CSVStream = require('csv-write-stream');
const fs = require('fs');
const chalk = require('chalk');
const pLimit = require('p-limit');

const ocapi = require('@sfcc_tools/ocapi');

const TASKID = 'orderreport';
const limit = pLimit(10);

let allOrders = [];

process.env.NODE_CONFIG_DIR = path.join(process.cwd(), '..', '..', 'config');
const config = require('config');

const ocapiConfig = config.get('packages.ocapi');

const oauth = ocapi.oauth;
const orderSearch = ocapi.ordersearch;

async function getPromises(token) {
    const apiResponse = await orderSearch.search(token);
    const orderSearchResponse = apiResponse && apiResponse.data;
    if (!orderSearchResponse || !orderSearchResponse.hits) {
        return allOrders;
    }

    console.log(chalk.green('Fetching all orders..........'));
    allOrders = allOrders.concat(orderSearchResponse.hits);

    const totalHits = orderSearchResponse.total;
    const asyncFunctions = [];
    console.log(chalk.green(`Total orders ${totalHits}`));
    const counter = Math.ceil(totalHits / 50);
    for (let i = 1; i < counter; i += 1) {
        const start = i * 50;
        asyncFunctions.push(limit(function () {
            return orderSearch.search(token, start);
        }));
    }

    return asyncFunctions;
}

async function execute(promises) {
    const results = await Promise.all(promises);
    if (!results) {
        console.log('No orders found');
        return allOrders;
    }
    results.forEach(function (result) {
        allOrders = allOrders.concat(result.data.hits);
    });
    return allOrders;
}

function getOrderAttributes(obj) {
    const ignoreAttributes = ['product_items', 'payment_instruments', 'shipments', 'shipping_items'];
    const customAttributes = {};
    Object.keys(obj).forEach(function (key) {
        if (ignoreAttributes.indexOf(key) === -1 && (typeof obj[key] !== 'object' || Array.isArray(obj[key]))) {
            customAttributes[key] = Array.isArray(obj[key]) ? obj[key].join(',') : obj[key];
        }
    });
    return customAttributes;
}

function getAddress(address, addressType) {
    const addressObj = {};

    Object.keys(address).forEach(function (key) {
        addressObj[`${addressType}_${key}`] = address[key];
    });
    return addressObj;
}

function getPayment(paymentInstruments) {
    const paymentObj = {};

    paymentInstruments.forEach(function (pi, i) {
        Object.keys(pi).forEach(function (key) {
            const objectKey = `payment_${key}_${i + 1}`;
            paymentObj[objectKey] = pi[key];
        });
    });
    return paymentObj;
}

function getOrderPromotions(order) {
    if (order.order_price_adjustments) {
        const orderPromotions = order.order_price_adjustments.map(function (orderPA) {
            return orderPA.promotion_id;
        }).join(',');
        const orderCoupons = order.order_price_adjustments.map(function (orderPA) {
            return orderPA.coupon_code || '';
        }).join(',');

        return {
            order_promotions: orderPromotions,
            order_coupons: orderCoupons
        };
    }
    return {
        order_promotions: '',
        order_coupons: ''
    };
}

function getProductPromotions(productItems) {
    const productPromotions = [];
    const productCoupons = [];
    if (productItems) {
        productItems.forEach(function (item) {
            if (item.price_adjustments) {
                item.price_adjustments.forEach(function (pa) {
                    if (productPromotions.indexOf(pa.promotion_id) === -1) {
                        productPromotions.push(pa.promotion_id);
                    }
                    if (productCoupons.indexOf(pa.coupon_code) === -1) {
                        productCoupons.push(pa.coupon_code || '');
                    }
                });
            }
        });
    }
    return {
        product_promotions: productPromotions.join(','),
        product_coupons: productCoupons.join(',')
    };
}
async function writeOrderReport() {
    try {
        const token = await oauth.getClientCredentialGrant();
        if (!token) {
            process.exit(1);
        }

        console.log(chalk.green('Going to retrieve orders from SFCC'));
        const promises = await getPromises(token);
        const orders = await execute(promises);
        if (orders && orders.length > 0) {
            console.log(chalk.green(`Total orders found ${orders.length}`));

            const writer = new CSVStream();
            const output = path.resolve(process.cwd(), 'output', `${TASKID}_${ocapiConfig.sfcc_site_id}.csv`);
            if (fs.existsSync(output)) {
                fs.unlinkSync(output);
            }
            writer.pipe(fs.createWriteStream(output));

            orders.forEach(function (order) {
                const mergedObject = {};
                const customAttributes = getOrderAttributes(order.data);
                const billingAddress = getAddress(order.data.billing_address, 'billing');
                const shippingAddress = getAddress(order.data.shipments[0].shipping_address, 'shipping');
                const paymentData = getPayment(order.data.payment_instruments);
                const orderPromotions = getOrderPromotions(order.data);
                const productPromotions = getProductPromotions(order.data.product_items);
                const additionalInfo = {
                    order_no: order.data.order_no,
                    customer_name: order.data.customer_info.customer_name,
                    customer_email: order.data.customer_info.email,
                    customer_no: order.data.customer_info.customer_no,
                    shipping_method_id: order.data.shipments[0].shipping_method.id
                };

                Object.assign(mergedObject,
                    additionalInfo,
                    customAttributes,
                    orderPromotions,
                    productPromotions,
                    billingAddress,
                    shippingAddress,
                    paymentData);

                writer.write(mergedObject);
            });
            writer.end();
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = writeOrderReport();
