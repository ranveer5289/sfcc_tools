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
import Image from './Image';

/**
* The SuggestedProduct model module.
* @module models/SuggestedProduct
* @version 20.8
*/
export default class SuggestedProduct {
    /**
    * Constructs a new <code>SuggestedProduct</code>.
    * Document representing a product search hit.
    * @alias module:models/SuggestedProduct
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>SuggestedProduct</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/SuggestedProduct} obj Optional instance to populate.
    * @return {module:models/SuggestedProduct} The populated <code>SuggestedProduct</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SuggestedProduct();
                        
            
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = Image.constructFromObject(data['image']);
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'String');
            }
            if (data.hasOwnProperty('product_name')) {
                obj['product_name'] = ApiClient.convertToType(data['product_name'], 'String');
            }
        }
        return obj;
    }

    /**
    * The ISO 4217 mnemonic code of the currency.
    * @member {String} currency
    */
    currency = undefined;
    /**
    * @member {module:models/Image} image
    */
    image = undefined;
    /**
    * The URL addressing the product.
    * @member {String} link
    */
    link = undefined;
    /**
    * The sales price of the product. In the case of complex products like a master or a set, this is the minimum price of  related child products.
    * @member {Number} price
    */
    price = undefined;
    /**
    * The id (SKU) of the product.
    * @member {String} product_id
    */
    product_id = undefined;
    /**
    * The localized name of the product.
    * @member {String} product_name
    */
    product_name = undefined;




}
