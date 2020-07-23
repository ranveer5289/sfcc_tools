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
* The AlertDescriptorsRevalidationRequest model module.
* @module models/AlertDescriptorsRevalidationRequest
* @version 20.8
*/
export default class AlertDescriptorsRevalidationRequest {
    /**
    * Constructs a new <code>AlertDescriptorsRevalidationRequest</code>.
    * Contains parameters for a alert descriptor revalidation request.
    * @alias module:models/AlertDescriptorsRevalidationRequest
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>AlertDescriptorsRevalidationRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/AlertDescriptorsRevalidationRequest} obj Optional instance to populate.
    * @return {module:models/AlertDescriptorsRevalidationRequest} The populated <code>AlertDescriptorsRevalidationRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AlertDescriptorsRevalidationRequest();
                        
            
            if (data.hasOwnProperty('context_object_id')) {
                obj['context_object_id'] = ApiClient.convertToType(data['context_object_id'], 'String');
            }
        }
        return obj;
    }

    /**
    * ID of the object in which context messages should be revalidated.
    * @member {String} context_object_id
    */
    context_object_id = undefined;




}