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
* The OrderShippingStatusUpdateRequest model module.
* @module models/OrderShippingStatusUpdateRequest
* @version 20.8
*/
export default class OrderShippingStatusUpdateRequest {
    /**
    * Constructs a new <code>OrderShippingStatusUpdateRequest</code>.
    * Request body to update the order shipping status.
    * @alias module:models/OrderShippingStatusUpdateRequest
    * @class
    * @param status {module:models/OrderShippingStatusUpdateRequest.StatusEnum} The new shipping status for an order.
    */

    constructor(status) {
        
        
        this['status'] = status;
        
    }

    /**
    * Constructs a <code>OrderShippingStatusUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/OrderShippingStatusUpdateRequest} obj Optional instance to populate.
    * @return {module:models/OrderShippingStatusUpdateRequest} The populated <code>OrderShippingStatusUpdateRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderShippingStatusUpdateRequest();
                        
            
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
    * The new shipping status for an order.
    * @member {module:models/OrderShippingStatusUpdateRequest.StatusEnum} status
    */
    status = undefined;



    /**
    * Allowed values for the <code>status</code> property.
    * @enum {String}
    * @readonly
    */
    static StatusEnum = {
        /**
         * value: "shipped"
         * @const
         */
        "shipped": "shipped",
        /**
         * value: "part_shipped"
         * @const
         */
        "part_shipped": "part_shipped",
        /**
         * value: "not_shipped"
         * @const
         */
        "not_shipped": "not_shipped"    };

}
