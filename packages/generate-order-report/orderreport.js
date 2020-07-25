/* eslint-disable import/no-dynamic-require */
const path = require('path');
const CSVStream = require('csv-write-stream');
const fs = require('fs');
const chalk = require('chalk');
const config = require('@sfcc_tools/config');
const ocapiAuthApi = require('@sfcc_tools/auth-api');

const TASKID = 'orderreport';
const ocapiConfig = config.get('packages.ocapi');

const orderSearch = require('./helpers/ordersearch');

function getOrderAttributes(obj) {
    const ignoreAttributes = ['product_items', 'payment_instruments', 'shipments', 'shipping_items', 'coupon_items', 'order_price_adjustments'];
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

// function getProductLineItemAttributes(productItems) {
//     const pli = {};
//     const ignoreAttributes = [];

//     productItems.forEach(function (li, i) {
//         Object.keys(li).forEach(function (key) {
//             const objectKey = `pli_${key}_${i + 1}`;
// eslint-disable-next-line max-len
//             if (ignoreAttributes.indexOf(key) === -1 && (typeof li[key] !== 'object' || Array.isArray(li[key]))) {
//                 pli[objectKey] = Array.isArray(li[key]) ? li[key].join(',') : li[key];
//             }
//         });
//     });
//     return pli;
// }

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

function getProductCount(productItems) {
    return {
        productsOrdered: productItems.length
    };
}
async function writeOrderReport() {
    try {
        const token = await ocapiAuthApi.oauth.getClientCredentialGrant();
        if (!token) {
            process.exit(1);
        }

        console.log(chalk.green('Going to retrieve orders from SFCC'));
        const orders = await orderSearch.search(token);
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
                const orderAttributes = getOrderAttributes(order.data);
                // eslint-disable-next-line max-len
                // const productLineItemAttributes = getProductLineItemAttributes(order.data.product_items);
                const billingAddress = getAddress(order.data.billing_address, 'billing');
                const shippingAddress = getAddress(order.data.shipments[0].shipping_address, 'shipping');
                const paymentData = getPayment(order.data.payment_instruments);
                const orderPromotions = getOrderPromotions(order.data);
                const productPromotions = getProductPromotions(order.data.product_items);
                const productCount = getProductCount(order.data.product_items);
                const additionalInfo = {
                    order_no: order.data.order_no,
                    customer_name: order.data.customer_info.customer_name,
                    customer_email: order.data.customer_info.email,
                    customer_no: order.data.customer_info.customer_no,
                    shipping_method_id: order.data.shipments[0].shipping_method.id
                };

                Object.assign(mergedObject,
                    additionalInfo,
                    productCount,
                    // productLineItemAttributes,
                    productPromotions,
                    orderAttributes,
                    orderPromotions,
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
