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
import VariationAttributeValue from './VariationAttributeValue';

/**
* The VariationAttributeValues model module.
* @module models/VariationAttributeValues
* @version 20.8
*/
export default class VariationAttributeValues {
    /**
    * Constructs a new <code>VariationAttributeValues</code>.
    * Document representing an unfiltered list of variation attribute values.
    * @alias module:models/VariationAttributeValues
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>VariationAttributeValues</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/VariationAttributeValues} obj Optional instance to populate.
    * @return {module:models/VariationAttributeValues} The populated <code>VariationAttributeValues</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VariationAttributeValues();
                        
            
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [VariationAttributeValue]);
            }
            if (data.hasOwnProperty('expand')) {
                obj['expand'] = ApiClient.convertToType(data['expand'], ['String']);
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
            }
            if (data.hasOwnProperty('select')) {
                obj['select'] = ApiClient.convertToType(data['select'], 'String');
            }
            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }

    /**
    * The number of returned documents.
    * @member {Number} count
    */
    count = undefined;
    /**
    * @member {Array.<module:models/VariationAttributeValue>} data
    */
    data = undefined;
    /**
    * The list of expands set for the search request. Expands are optional.
    * @member {Array.<String>} expand
    */
    expand = undefined;
    /**
    * The URL of the next result page.
    * @member {String} next
    */
    next = undefined;
    /**
    * The URL of the previous result page.
    * @member {String} previous
    */
    previous = undefined;
    /**
    * The fields that you want to select.
    * @member {String} select
    */
    select = undefined;
    /**
    * The zero-based index of the first search hit to include in the result.
    * @member {Number} start
    */
    start = undefined;
    /**
    * The total number of documents.
    * @member {Number} total
    */
    total = undefined;




}
