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

/**
* The SuggestedTerm model module.
* @module models/SuggestedTerm
* @version 20.8
*/
export default class SuggestedTerm {
    /**
    * Constructs a new <code>SuggestedTerm</code>.
    * Document representing a suggested term.
    * @alias module:models/SuggestedTerm
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>SuggestedTerm</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/SuggestedTerm} obj Optional instance to populate.
    * @return {module:models/SuggestedTerm} The populated <code>SuggestedTerm</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SuggestedTerm();
                        
            
            if (data.hasOwnProperty('completed')) {
                obj['completed'] = ApiClient.convertToType(data['completed'], 'Boolean');
            }
            if (data.hasOwnProperty('corrected')) {
                obj['corrected'] = ApiClient.convertToType(data['corrected'], 'Boolean');
            }
            if (data.hasOwnProperty('exact_match')) {
                obj['exact_match'] = ApiClient.convertToType(data['exact_match'], 'Boolean');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
    * Returns whether this term value is a completion match.
    * @member {Boolean} completed
    */
    completed = undefined;
    /**
    * Returns whether this term value is a correction match.
    * @member {Boolean} corrected
    */
    corrected = undefined;
    /**
    * Returns whether this term value is a exact match.
    * @member {Boolean} exact_match
    */
    exact_match = undefined;
    /**
    * Returns the term value.
    * @member {String} value
    */
    value = undefined;




}
