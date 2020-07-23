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
import OrderAddress from './OrderAddress';
import ShippingMethod from './ShippingMethod';

/**
* The Shipment model module.
* @module models/Shipment
* @version 20.8
*/
export default class Shipment {
    /**
    * Constructs a new <code>Shipment</code>.
    * Document representing a shipment.
    * @alias module:models/Shipment
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Shipment</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/Shipment} obj Optional instance to populate.
    * @return {module:models/Shipment} The populated <code>Shipment</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Shipment();
                        
            
            if (data.hasOwnProperty('adjusted_merchandize_total_tax')) {
                obj['adjusted_merchandize_total_tax'] = ApiClient.convertToType(data['adjusted_merchandize_total_tax'], 'Number');
            }
            if (data.hasOwnProperty('adjusted_shipping_total_tax')) {
                obj['adjusted_shipping_total_tax'] = ApiClient.convertToType(data['adjusted_shipping_total_tax'], 'Number');
            }
            if (data.hasOwnProperty('c_fromStoreId')) {
                obj['c_fromStoreId'] = ApiClient.convertToType(data['c_fromStoreId'], 'String');
            }
            if (data.hasOwnProperty('c_shipmentType')) {
                obj['c_shipmentType'] = ApiClient.convertToType(data['c_shipmentType'], 'String');
            }
            if (data.hasOwnProperty('c_storePickupMessage')) {
                obj['c_storePickupMessage'] = ApiClient.convertToType(data['c_storePickupMessage'], 'String');
            }
            if (data.hasOwnProperty('gift')) {
                obj['gift'] = ApiClient.convertToType(data['gift'], 'Boolean');
            }
            if (data.hasOwnProperty('gift_message')) {
                obj['gift_message'] = ApiClient.convertToType(data['gift_message'], 'String');
            }
            if (data.hasOwnProperty('merchandize_total_tax')) {
                obj['merchandize_total_tax'] = ApiClient.convertToType(data['merchandize_total_tax'], 'Number');
            }
            if (data.hasOwnProperty('product_sub_total')) {
                obj['product_sub_total'] = ApiClient.convertToType(data['product_sub_total'], 'Number');
            }
            if (data.hasOwnProperty('product_total')) {
                obj['product_total'] = ApiClient.convertToType(data['product_total'], 'Number');
            }
            if (data.hasOwnProperty('shipment_id')) {
                obj['shipment_id'] = ApiClient.convertToType(data['shipment_id'], 'String');
            }
            if (data.hasOwnProperty('shipment_no')) {
                obj['shipment_no'] = ApiClient.convertToType(data['shipment_no'], 'String');
            }
            if (data.hasOwnProperty('shipment_total')) {
                obj['shipment_total'] = ApiClient.convertToType(data['shipment_total'], 'Number');
            }
            if (data.hasOwnProperty('shipping_address')) {
                obj['shipping_address'] = OrderAddress.constructFromObject(data['shipping_address']);
            }
            if (data.hasOwnProperty('shipping_method')) {
                obj['shipping_method'] = ShippingMethod.constructFromObject(data['shipping_method']);
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
            if (data.hasOwnProperty('tax_total')) {
                obj['tax_total'] = ApiClient.convertToType(data['tax_total'], 'Number');
            }
            if (data.hasOwnProperty('tracking_number')) {
                obj['tracking_number'] = ApiClient.convertToType(data['tracking_number'], 'String');
            }
        }
        return obj;
    }

    /**
    * The products tax after discounts applying in purchase currency. Adjusted merchandize prices represent the sum of  product prices before services such as shipping have been added, but after adjustment from promotions have been  added.   Note that order level adjustments are considered if Discount Taxation preference is set to  \"Tax Products and Shipping Only Based on Adjusted Price\".
    * @member {Number} adjusted_merchandize_total_tax
    */
    adjusted_merchandize_total_tax = undefined;
    /**
    * The tax of all shipping line items of the line item container after shipping adjustments have been applied.
    * @member {Number} adjusted_shipping_total_tax
    */
    adjusted_shipping_total_tax = undefined;
    /**
    * Used to map the shipment to a  brick and mortar store.
    * @member {String} c_fromStoreId
    */
    c_fromStoreId = undefined;
    /**
    * @member {String} c_shipmentType
    */
    c_shipmentType = undefined;
    /**
    * This is text used by the end user when sending a message to the brick and mortar store about the shipment.  This is reflected in the order export.
    * @member {String} c_storePickupMessage
    */
    c_storePickupMessage = undefined;
    /**
    * A flag indicating whether the shipment is a gift.
    * @member {Boolean} gift
    */
    gift = undefined;
    /**
    * The gift message.
    * @member {String} gift_message
    */
    gift_message = undefined;
    /**
    * The products total tax in purchase currency. Merchandize total prices represent the sum of product prices before  services such as shipping or adjustment from promotions have been added.
    * @member {Number} merchandize_total_tax
    */
    merchandize_total_tax = undefined;
    /**
    * The total price of all product items after all product discounts. Depending on taxation policy the returned price  is net or gross.
    * @member {Number} product_sub_total
    */
    product_sub_total = undefined;
    /**
    * The total price of all product items after all product and order discounts. Depending on taxation policy the  returned price is net or gross.
    * @member {Number} product_total
    */
    product_total = undefined;
    /**
    * The order specific id to identify the shipment.
    * @member {String} shipment_id
    */
    shipment_id = undefined;
    /**
    * Returns the shipment number for this shipment.   This number is automatically generated.
    * @member {String} shipment_no
    */
    shipment_no = undefined;
    /**
    * The total price of the shipment, including products, shipping and tax.   Note that order level adjustments are not considered.
    * @member {Number} shipment_total
    */
    shipment_total = undefined;
    /**
    * @member {module:models/OrderAddress} shipping_address
    */
    shipping_address = undefined;
    /**
    * @member {module:models/ShippingMethod} shipping_method
    */
    shipping_method = undefined;
    /**
    * The shipping status of the shipment.
    * @member {module:models/Shipment.ShippingStatusEnum} shipping_status
    */
    shipping_status = undefined;
    /**
    * The total shipping price of the shipment after all shipping discounts. Excludes tax if taxation policy is net.  Includes tax if taxation policy is gross.
    * @member {Number} shipping_total
    */
    shipping_total = undefined;
    /**
    * The tax of all shipping line items of the line item container before shipping adjustments have been applied.
    * @member {Number} shipping_total_tax
    */
    shipping_total_tax = undefined;
    /**
    * The total tax amount of the shipment.   Note that order level adjustments are considered if Discount Taxation preference is set to  \"Tax Products and Shipping Only Based on Adjusted Price\".
    * @member {Number} tax_total
    */
    tax_total = undefined;
    /**
    * The tracking number of the shipment.
    * @member {String} tracking_number
    */
    tracking_number = undefined;



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
         * value: "shipped"
         * @const
         */
        "shipped": "shipped"    };

}