/**
 * Data API
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
import MediaFile from './MediaFile';
import VariationAttribute from './VariationAttribute';

/**
* The Variant model module.
* @module models/Variant
* @version 20.8
*/
export default class Variant {
    /**
    * Constructs a new <code>Variant</code>.
    * Document representing a product variation.
    * @alias module:models/Variant
    * @class
    * @param productId {String} The id (SKU) of the variant.
    */

    constructor(productId) {
        
        
        this['product_id'] = productId;
        
    }

    /**
    * Constructs a <code>Variant</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/Variant} obj Optional instance to populate.
    * @return {module:models/Variant} The populated <code>Variant</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Variant();
                        
            
            if (data.hasOwnProperty('ats')) {
                obj['ats'] = ApiClient.convertToType(data['ats'], 'Number');
            }
            if (data.hasOwnProperty('default_product_variation')) {
                obj['default_product_variation'] = ApiClient.convertToType(data['default_product_variation'], 'Boolean');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = MediaFile.constructFromObject(data['image']);
            }
            if (data.hasOwnProperty('in_stock')) {
                obj['in_stock'] = ApiClient.convertToType(data['in_stock'], 'Boolean');
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String');
            }
            if (data.hasOwnProperty('online')) {
                obj['online'] = ApiClient.convertToType(data['online'], 'Boolean');
            }
            if (data.hasOwnProperty('orderable')) {
                obj['orderable'] = ApiClient.convertToType(data['orderable'], 'Boolean');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('price_currency')) {
                obj['price_currency'] = ApiClient.convertToType(data['price_currency'], 'String');
            }
            if (data.hasOwnProperty('price_per_unit')) {
                obj['price_per_unit'] = ApiClient.convertToType(data['price_per_unit'], 'Number');
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'String');
            }
            if (data.hasOwnProperty('searchable')) {
                obj['searchable'] = ApiClient.convertToType(data['searchable'], {'String': 'Boolean'});
            }
            if (data.hasOwnProperty('variation_attributes')) {
                obj['variation_attributes'] = ApiClient.convertToType(data['variation_attributes'], [VariationAttribute]);
            }
            if (data.hasOwnProperty('variation_values')) {
                obj['variation_values'] = ApiClient.convertToType(data['variation_values'], {'String': 'String'});
            }
        }
        return obj;
    }

    /**
    * Inventory \"Available to Sell\" of the product.
    * @member {Number} ats
    */
    ats = undefined;
    /**
    * @member {Boolean} default_product_variation
    */
    default_product_variation = undefined;
    /**
    * @member {module:models/MediaFile} image
    */
    image = undefined;
    /**
    * true if the product is in stock, or false if not.
    * @member {Boolean} in_stock
    */
    in_stock = undefined;
    /**
    * The URL addressing the product.
    * @member {String} link
    */
    link = undefined;
    /**
    * If the product is currently online.  true if online  false if not
    * @member {Boolean} online
    */
    online = undefined;
    /**
    * A flag indicating whether the variant is orderable.
    * @member {Boolean} orderable
    */
    orderable = undefined;
    /**
    * The sales price of the variant.
    * @member {Number} price
    */
    price = undefined;
    /**
    * Currency code for the price of the product.
    * @member {String} price_currency
    */
    price_currency = undefined;
    /**
    * The sales price of the variant.
    * @member {Number} price_per_unit
    */
    price_per_unit = undefined;
    /**
    * The id (SKU) of the variant.
    * @member {String} product_id
    */
    product_id = undefined;
    /**
    * @member {Object.<String, Boolean>} searchable
    */
    searchable = undefined;
    /**
    * variation attributes
    * @member {Array.<module:models/VariationAttribute>} variation_attributes
    */
    variation_attributes = undefined;
    /**
    * The actual variation attribute id - value pairs.
    * @member {Object.<String, String>} variation_values
    */
    variation_values = undefined;




}
