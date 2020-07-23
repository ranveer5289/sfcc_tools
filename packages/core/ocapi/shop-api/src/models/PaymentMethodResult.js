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
import PaymentMethod from './PaymentMethod';

/**
* The PaymentMethodResult model module.
* @module models/PaymentMethodResult
* @version 20.8
*/
export default class PaymentMethodResult {
    /**
    * Constructs a new <code>PaymentMethodResult</code>.
    * Result document of payment methods applicable for a basket.
    * @alias module:models/PaymentMethodResult
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>PaymentMethodResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/PaymentMethodResult} obj Optional instance to populate.
    * @return {module:models/PaymentMethodResult} The populated <code>PaymentMethodResult</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentMethodResult();
                        
            
            if (data.hasOwnProperty('applicable_payment_methods')) {
                obj['applicable_payment_methods'] = ApiClient.convertToType(data['applicable_payment_methods'], [PaymentMethod]);
            }
        }
        return obj;
    }

    /**
    * The applicable payment methods.
    * @member {Array.<module:models/PaymentMethod>} applicable_payment_methods
    */
    applicable_payment_methods = undefined;




}