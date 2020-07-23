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

/**
* The RedemptionLimitPerPeriod model module.
* @module models/RedemptionLimitPerPeriod
* @version 20.8
*/
export default class RedemptionLimitPerPeriod {
    /**
    * Constructs a new <code>RedemptionLimitPerPeriod</code>.
    * Document representing a coupon redemption limit.
    * @alias module:models/RedemptionLimitPerPeriod
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>RedemptionLimitPerPeriod</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/RedemptionLimitPerPeriod} obj Optional instance to populate.
    * @return {module:models/RedemptionLimitPerPeriod} The populated <code>RedemptionLimitPerPeriod</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RedemptionLimitPerPeriod();
                        
            
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('redemption_time_frame')) {
                obj['redemption_time_frame'] = ApiClient.convertToType(data['redemption_time_frame'], 'Number');
            }
        }
        return obj;
    }

    /**
    * The limit on the number of times a coupon can be redeemed for a specified redemption time period.
    * @member {Number} limit
    */
    limit = undefined;
    /**
    * The redemption time period.
    * @member {Number} redemption_time_frame
    */
    redemption_time_frame = undefined;




}
