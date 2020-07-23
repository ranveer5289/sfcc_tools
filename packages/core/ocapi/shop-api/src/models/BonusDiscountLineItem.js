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
import ProductDetailsLink from './ProductDetailsLink';

/**
* The BonusDiscountLineItem model module.
* @module models/BonusDiscountLineItem
* @version 20.8
*/
export default class BonusDiscountLineItem {
    /**
    * Constructs a new <code>BonusDiscountLineItem</code>.
    * Document representing a bonus discount line item
    * @alias module:models/BonusDiscountLineItem
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>BonusDiscountLineItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/BonusDiscountLineItem} obj Optional instance to populate.
    * @return {module:models/BonusDiscountLineItem} The populated <code>BonusDiscountLineItem</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BonusDiscountLineItem();
                        
            
            if (data.hasOwnProperty('bonus_products')) {
                obj['bonus_products'] = ApiClient.convertToType(data['bonus_products'], [ProductDetailsLink]);
            }
            if (data.hasOwnProperty('coupon_code')) {
                obj['coupon_code'] = ApiClient.convertToType(data['coupon_code'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('max_bonus_items')) {
                obj['max_bonus_items'] = ApiClient.convertToType(data['max_bonus_items'], 'Number');
            }
            if (data.hasOwnProperty('promotion_id')) {
                obj['promotion_id'] = ApiClient.convertToType(data['promotion_id'], 'String');
            }
        }
        return obj;
    }

    /**
    * The list of links to the bonus products the customer can choose from.
    * @member {Array.<module:models/ProductDetailsLink>} bonus_products
    */
    bonus_products = undefined;
    /**
    * The coupon code that triggered the promotion, if applicable.
    * @member {String} coupon_code
    */
    coupon_code = undefined;
    /**
    * The ID of the line item.
    * @member {String} id
    */
    id = undefined;
    /**
    * The maximum number of bonus items the user can select for this promotion.
    * @member {Number} max_bonus_items
    */
    max_bonus_items = undefined;
    /**
    * The ID of the promotion which triggered the creation of the line item.
    * @member {String} promotion_id
    */
    promotion_id = undefined;




}