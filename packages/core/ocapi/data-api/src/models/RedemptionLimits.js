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
import RedemptionLimitPerPeriod from './RedemptionLimitPerPeriod';

/**
* The RedemptionLimits model module.
* @module models/RedemptionLimits
* @version 20.8
*/
export default class RedemptionLimits {
    /**
    * Constructs a new <code>RedemptionLimits</code>.
    * Document representing a coupon.
    * @alias module:models/RedemptionLimits
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>RedemptionLimits</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/RedemptionLimits} obj Optional instance to populate.
    * @return {module:models/RedemptionLimits} The populated <code>RedemptionLimits</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RedemptionLimits();
                        
            
            if (data.hasOwnProperty('limit_per_code')) {
                obj['limit_per_code'] = ApiClient.convertToType(data['limit_per_code'], 'Number');
            }
            if (data.hasOwnProperty('limit_per_customer')) {
                obj['limit_per_customer'] = ApiClient.convertToType(data['limit_per_customer'], 'Number');
            }
            if (data.hasOwnProperty('limit_per_time_frame')) {
                obj['limit_per_time_frame'] = RedemptionLimitPerPeriod.constructFromObject(data['limit_per_time_frame']);
            }
        }
        return obj;
    }

    /**
    * The redemption limit per code
    * @member {Number} limit_per_code
    */
    limit_per_code = undefined;
    /**
    * The redemption limit per customer
    * @member {Number} limit_per_customer
    */
    limit_per_customer = undefined;
    /**
    * @member {module:models/RedemptionLimitPerPeriod} limit_per_time_frame
    */
    limit_per_time_frame = undefined;




}