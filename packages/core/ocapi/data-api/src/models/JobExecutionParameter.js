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
* The JobExecutionParameter model module.
* @module models/JobExecutionParameter
* @version 20.8
*/
export default class JobExecutionParameter {
    /**
    * Constructs a new <code>JobExecutionParameter</code>.
    * Specification of a parameter for a job execution.
    * @alias module:models/JobExecutionParameter
    * @class
    * @param name {String} The name of the parameter.
    * @param value {String} The value of the parameter.
    */

    constructor(name, value) {
        
        
        this['name'] = name;
        this['value'] = value;
        
    }

    /**
    * Constructs a <code>JobExecutionParameter</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/JobExecutionParameter} obj Optional instance to populate.
    * @return {module:models/JobExecutionParameter} The populated <code>JobExecutionParameter</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobExecutionParameter();
                        
            
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
    * The name of the parameter.
    * @member {String} name
    */
    name = undefined;
    /**
    * The value of the parameter.
    * @member {String} value
    */
    value = undefined;




}