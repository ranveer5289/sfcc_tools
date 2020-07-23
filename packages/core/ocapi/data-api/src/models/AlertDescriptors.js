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
import AlertDescriptor from './AlertDescriptor';

/**
* The AlertDescriptors model module.
* @module models/AlertDescriptors
* @version 20.8
*/
export default class AlertDescriptors {
    /**
    * Constructs a new <code>AlertDescriptors</code>.
    * Document containing a collection of alert descriptors.
    * @alias module:models/AlertDescriptors
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>AlertDescriptors</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/AlertDescriptors} obj Optional instance to populate.
    * @return {module:models/AlertDescriptors} The populated <code>AlertDescriptors</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AlertDescriptors();
                        
            
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [AlertDescriptor]);
            }
        }
        return obj;
    }

    /**
    * Collection of alert descriptors
    * @member {Array.<module:models/AlertDescriptor>} data
    */
    data = undefined;




}