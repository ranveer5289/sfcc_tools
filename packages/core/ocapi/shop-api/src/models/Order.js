/**
 * Shop API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 20.8
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BonusDiscountLineItem from './BonusDiscountLineItem';
import CouponItem from './CouponItem';
import CustomerInfo from './CustomerInfo';
import GiftCertificateItem from './GiftCertificateItem';
import OrderAddress from './OrderAddress';
import OrderPaymentInstrument from './OrderPaymentInstrument';
import PriceAdjustment from './PriceAdjustment';
import ProductItem from './ProductItem';
import Shipment from './Shipment';
import ShippingItem from './ShippingItem';
import SimpleLink from './SimpleLink';

/**
* The Order model module.
* @module models/Order
* @version 20.8
*/
export default class Order {
    /**
    * Constructs a new <code>Order</code>.
    * Document representing an order.
    * @alias module:models/Order
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/Order} obj Optional instance to populate.
    * @return {module:models/Order} The populated <code>Order</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Order();
                        
            
            if (data.hasOwnProperty('adjusted_merchandize_total_tax')) {
                obj['adjusted_merchandize_total_tax'] = ApiClient.convertToType(data['adjusted_merchandize_total_tax'], 'Number');
            }
            if (data.hasOwnProperty('adjusted_shipping_total_tax')) {
                obj['adjusted_shipping_total_tax'] = ApiClient.convertToType(data['adjusted_shipping_total_tax'], 'Number');
            }
            if (data.hasOwnProperty('billing_address')) {
                obj['billing_address'] = OrderAddress.constructFromObject(data['billing_address']);
            }
            if (data.hasOwnProperty('bonus_discount_line_items')) {
                obj['bonus_discount_line_items'] = ApiClient.convertToType(data['bonus_discount_line_items'], [BonusDiscountLineItem]);
            }
            if (data.hasOwnProperty('channel_type')) {
                obj['channel_type'] = ApiClient.convertToType(data['channel_type'], 'String');
            }
            if (data.hasOwnProperty('confirmation_status')) {
                obj['confirmation_status'] = ApiClient.convertToType(data['confirmation_status'], 'String');
            }
            if (data.hasOwnProperty('coupon_items')) {
                obj['coupon_items'] = ApiClient.convertToType(data['coupon_items'], [CouponItem]);
            }
            if (data.hasOwnProperty('created_by')) {
                obj['created_by'] = ApiClient.convertToType(data['created_by'], 'String');
            }
            if (data.hasOwnProperty('creation_date')) {
                obj['creation_date'] = ApiClient.convertToType(data['creation_date'], 'Date');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('customer_info')) {
                obj['customer_info'] = CustomerInfo.constructFromObject(data['customer_info']);
            }
            if (data.hasOwnProperty('customer_name')) {
                obj['customer_name'] = ApiClient.convertToType(data['customer_name'], 'String');
            }
            if (data.hasOwnProperty('export_status')) {
                obj['export_status'] = ApiClient.convertToType(data['export_status'], 'String');
            }
            if (data.hasOwnProperty('external_order_status')) {
                obj['external_order_status'] = ApiClient.convertToType(data['external_order_status'], 'String');
            }
            if (data.hasOwnProperty('gift_certificate_items')) {
                obj['gift_certificate_items'] = ApiClient.convertToType(data['gift_certificate_items'], [GiftCertificateItem]);
            }
            if (data.hasOwnProperty('global_party_id')) {
                obj['global_party_id'] = ApiClient.convertToType(data['global_party_id'], 'String');
            }
            if (data.hasOwnProperty('last_modified')) {
                obj['last_modified'] = ApiClient.convertToType(data['last_modified'], 'Date');
            }
            if (data.hasOwnProperty('merchandize_total_tax')) {
                obj['merchandize_total_tax'] = ApiClient.convertToType(data['merchandize_total_tax'], 'Number');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = SimpleLink.constructFromObject(data['notes']);
            }
            if (data.hasOwnProperty('order_no')) {
                obj['order_no'] = ApiClient.convertToType(data['order_no'], 'String');
            }
            if (data.hasOwnProperty('order_price_adjustments')) {
                obj['order_price_adjustments'] = ApiClient.convertToType(data['order_price_adjustments'], [PriceAdjustment]);
            }
            if (data.hasOwnProperty('order_token')) {
                obj['order_token'] = ApiClient.convertToType(data['order_token'], 'String');
            }
            if (data.hasOwnProperty('order_total')) {
                obj['order_total'] = ApiClient.convertToType(data['order_total'], 'Number');
            }
            if (data.hasOwnProperty('payment_instruments')) {
                obj['payment_instruments'] = ApiClient.convertToType(data['payment_instruments'], [OrderPaymentInstrument]);
            }
            if (data.hasOwnProperty('payment_status')) {
                obj['payment_status'] = ApiClient.convertToType(data['payment_status'], 'String');
            }
            if (data.hasOwnProperty('product_items')) {
                obj['product_items'] = ApiClient.convertToType(data['product_items'], [ProductItem]);
            }
            if (data.hasOwnProperty('product_sub_total')) {
                obj['product_sub_total'] = ApiClient.convertToType(data['product_sub_total'], 'Number');
            }
            if (data.hasOwnProperty('product_total')) {
                obj['product_total'] = ApiClient.convertToType(data['product_total'], 'Number');
            }
            if (data.hasOwnProperty('shipments')) {
                obj['shipments'] = ApiClient.convertToType(data['shipments'], [Shipment]);
            }
            if (data.hasOwnProperty('shipping_items')) {
                obj['shipping_items'] = ApiClient.convertToType(data['shipping_items'], [ShippingItem]);
            }
            if (data.hasOwnProperty('shipping_status')) {
                obj['shipping_status'] = ApiClient.convertToType(data['shipping_status'], 'String');
            }
            if (data.hasOwnProperty('shipping_total')) {
                obj['shipping_total'] = ApiClient.convertToType(data['shipping_total'], 'Number');
            }
            if (data.hasOwnProperty('shipping_total_tax')) {
                obj['shipping_total_tax'] = ApiClient.convertToType(data['shipping_total_tax'], 'Number');
            }
            if (data.hasOwnProperty('site_id')) {
                obj['site_id'] = ApiClient.convertToType(data['site_id'], 'String');
            }
            if (data.hasOwnProperty('source_code')) {
                obj['source_code'] = ApiClient.convertToType(data['source_code'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('tax_total')) {
                obj['tax_total'] = ApiClient.convertToType(data['tax_total'], 'Number');
            }
            if (data.hasOwnProperty('taxation')) {
                obj['taxation'] = ApiClient.convertToType(data['taxation'], 'String');
            }
        }
        return obj;
    }

    /**
    * The products tax after discounts applying in purchase currency.   Adjusted merchandize prices represent the sum of product prices before  services such as shipping have been added, but after adjustment from  promotions have been added.
    * @member {Number} adjusted_merchandize_total_tax
    */
    adjusted_merchandize_total_tax = undefined;
    /**
    * The tax of all shipping line items of the line item container after  shipping adjustments have been applied.
    * @member {Number} adjusted_shipping_total_tax
    */
    adjusted_shipping_total_tax = undefined;
    /**
    * @member {module:models/OrderAddress} billing_address
    */
    billing_address = undefined;
    /**
    * The bonus discount line items of the line item container.
    * @member {Array.<module:models/BonusDiscountLineItem>} bonus_discount_line_items
    */
    bonus_discount_line_items = undefined;
    /**
    * The sales channel for the order.
    * @member {module:models/Order.ChannelTypeEnum} channel_type
    */
    channel_type = undefined;
    /**
    * The confirmation status of the order.
    * @member {module:models/Order.ConfirmationStatusEnum} confirmation_status
    */
    confirmation_status = undefined;
    /**
    * The sorted array of coupon items. This array can be empty.
    * @member {Array.<module:models/CouponItem>} coupon_items
    */
    coupon_items = undefined;
    /**
    * The name of the user who created the order.
    * @member {String} created_by
    */
    created_by = undefined;
    /**
    * Returns the value of attribute 'creationDate'.
    * @member {Date} creation_date
    */
    creation_date = undefined;
    /**
    * The ISO 4217 mnemonic code of the currency.
    * @member {String} currency
    */
    currency = undefined;
    /**
    * @member {module:models/CustomerInfo} customer_info
    */
    customer_info = undefined;
    /**
    * The name of the customer associated with this order.
    * @member {String} customer_name
    */
    customer_name = undefined;
    /**
    * The export status of the order.
    * @member {module:models/Order.ExportStatusEnum} export_status
    */
    export_status = undefined;
    /**
    * The external status of the order.
    * @member {String} external_order_status
    */
    external_order_status = undefined;
    /**
    * The sorted array of gift certificate line items. This array can be empty.
    * @member {Array.<module:models/GiftCertificateItem>} gift_certificate_items
    */
    gift_certificate_items = undefined;
    /**
    * globalPartyId is managed by Customer 360. Its value can be changed.
    * @member {String} global_party_id
    */
    global_party_id = undefined;
    /**
    * Returns the value of attribute 'lastModified'.
    * @member {Date} last_modified
    */
    last_modified = undefined;
    /**
    * The products total tax in purchase currency.   Merchandize total prices represent the sum of product prices before  services such as shipping or adjustment from promotions have  been added.
    * @member {Number} merchandize_total_tax
    */
    merchandize_total_tax = undefined;
    /**
    * @member {module:models/SimpleLink} notes
    */
    notes = undefined;
    /**
    * The order number of the order.
    * @member {String} order_no
    */
    order_no = undefined;
    /**
    * The array of order level price adjustments. This array can be empty.
    * @member {Array.<module:models/PriceAdjustment>} order_price_adjustments
    */
    order_price_adjustments = undefined;
    /**
    * The order token used to secure the lookup of an order on base of the  plain order number. The order token contains only URL safe characters.
    * @member {String} order_token
    */
    order_token = undefined;
    /**
    * The total price of the order, including products, shipping and tax. This property is part of basket checkout  information only.
    * @member {Number} order_total
    */
    order_total = undefined;
    /**
    * The payment instruments list for the order.
    * @member {Array.<module:models/OrderPaymentInstrument>} payment_instruments
    */
    payment_instruments = undefined;
    /**
    * The payment status of the order.
    * @member {module:models/Order.PaymentStatusEnum} payment_status
    */
    payment_status = undefined;
    /**
    * The sorted array of product items (up to a maximum of 50 items). This array can be empty.
    * @member {Array.<module:models/ProductItem>} product_items
    */
    product_items = undefined;
    /**
    * The total price of all product items after all product discounts.  Depending on taxation policy the returned price is net or gross.
    * @member {Number} product_sub_total
    */
    product_sub_total = undefined;
    /**
    * The total price of all product items after all product and order discounts.  Depending on taxation policy the returned price is net or gross.
    * @member {Number} product_total
    */
    product_total = undefined;
    /**
    * The array of shipments. This property is part of basket checkout information only.
    * @member {Array.<module:models/Shipment>} shipments
    */
    shipments = undefined;
    /**
    * The sorted array of shipping items. This array can be empty.
    * @member {Array.<module:models/ShippingItem>} shipping_items
    */
    shipping_items = undefined;
    /**
    * The shipping status of the order.
    * @member {module:models/Order.ShippingStatusEnum} shipping_status
    */
    shipping_status = undefined;
    /**
    * The total shipping price of the order after all shipping discounts. Excludes tax if taxation policy is net. Includes  tax if taxation policy is gross. This property is part of basket checkout information only.
    * @member {Number} shipping_total
    */
    shipping_total = undefined;
    /**
    * The tax of all shipping line items of the line item container before  shipping adjustments have been applied.
    * @member {Number} shipping_total_tax
    */
    shipping_total_tax = undefined;
    /**
    * The site where the order resides.
    * @member {String} site_id
    */
    site_id = undefined;
    /**
    * Gets the source code assigned to this basket.
    * @member {String} source_code
    */
    source_code = undefined;
    /**
    * The status of the order.
    * @member {module:models/Order.StatusEnum} status
    */
    status = undefined;
    /**
    * The total tax amount of the order. This property is part of basket checkout information only.
    * @member {Number} tax_total
    */
    tax_total = undefined;
    /**
    * The taxation the line item container is based on.
    * @member {module:models/Order.TaxationEnum} taxation
    */
    taxation = undefined;



    /**
    * Allowed values for the <code>channel_type</code> property.
    * @enum {String}
    * @readonly
    */
    static ChannelTypeEnum = {
        /**
         * value: "storefront"
         * @const
         */
        "storefront": "storefront",
        /**
         * value: "callcenter"
         * @const
         */
        "callcenter": "callcenter",
        /**
         * value: "marketplace"
         * @const
         */
        "marketplace": "marketplace",
        /**
         * value: "dss"
         * @const
         */
        "dss": "dss",
        /**
         * value: "store"
         * @const
         */
        "store": "store",
        /**
         * value: "pinterest"
         * @const
         */
        "pinterest": "pinterest",
        /**
         * value: "twitter"
         * @const
         */
        "twitter": "twitter",
        /**
         * value: "facebookads"
         * @const
         */
        "facebookads": "facebookads",
        /**
         * value: "subscriptions"
         * @const
         */
        "subscriptions": "subscriptions",
        /**
         * value: "onlinereservation"
         * @const
         */
        "onlinereservation": "onlinereservation",
        /**
         * value: "customerservicecenter"
         * @const
         */
        "customerservicecenter": "customerservicecenter",
        /**
         * value: "instagramcommerce"
         * @const
         */
        "instagramcommerce": "instagramcommerce"    };
    /**
    * Allowed values for the <code>confirmation_status</code> property.
    * @enum {String}
    * @readonly
    */
    static ConfirmationStatusEnum = {
        /**
         * value: "not_confirmed"
         * @const
         */
        "not_confirmed": "not_confirmed",
        /**
         * value: "confirmed"
         * @const
         */
        "confirmed": "confirmed"    };
    /**
    * Allowed values for the <code>export_status</code> property.
    * @enum {String}
    * @readonly
    */
    static ExportStatusEnum = {
        /**
         * value: "not_exported"
         * @const
         */
        "not_exported": "not_exported",
        /**
         * value: "exported"
         * @const
         */
        "exported": "exported",
        /**
         * value: "ready"
         * @const
         */
        "ready": "ready",
        /**
         * value: "failed"
         * @const
         */
        "failed": "failed"    };
    /**
    * Allowed values for the <code>payment_status</code> property.
    * @enum {String}
    * @readonly
    */
    static PaymentStatusEnum = {
        /**
         * value: "not_paid"
         * @const
         */
        "not_paid": "not_paid",
        /**
         * value: "part_paid"
         * @const
         */
        "part_paid": "part_paid",
        /**
         * value: "paid"
         * @const
         */
        "paid": "paid"    };
    /**
    * Allowed values for the <code>shipping_status</code> property.
    * @enum {String}
    * @readonly
    */
    static ShippingStatusEnum = {
        /**
         * value: "not_shipped"
         * @const
         */
        "not_shipped": "not_shipped",
        /**
         * value: "part_shipped"
         * @const
         */
        "part_shipped": "part_shipped",
        /**
         * value: "shipped"
         * @const
         */
        "shipped": "shipped"    };
    /**
    * Allowed values for the <code>status</code> property.
    * @enum {String}
    * @readonly
    */
    static StatusEnum = {
        /**
         * value: "created"
         * @const
         */
        "created": "created",
        /**
         * value: "new"
         * @const
         */
        "new": "new",
        /**
         * value: "open"
         * @const
         */
        "open": "open",
        /**
         * value: "completed"
         * @const
         */
        "completed": "completed",
        /**
         * value: "cancelled"
         * @const
         */
        "cancelled": "cancelled",
        /**
         * value: "replaced"
         * @const
         */
        "replaced": "replaced",
        /**
         * value: "failed"
         * @const
         */
        "failed": "failed"    };
    /**
    * Allowed values for the <code>taxation</code> property.
    * @enum {String}
    * @readonly
    */
    static TaxationEnum = {
        /**
         * value: "gross"
         * @const
         */
        "gross": "gross",
        /**
         * value: "net"
         * @const
         */
        "net": "net"    };

}
