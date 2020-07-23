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
* The RangeFilter model module.
* @module models/RangeFilter
* @version 20.8
*/
export default class RangeFilter {
    /**
    * Constructs a new <code>RangeFilter</code>.
    * Document representing a range filter.  
    * @alias module:models/RangeFilter
    * @class
    * @param field {String} The search field.
    */

    constructor(field) {
        
        
        this['field'] = field;
        
    }

    /**
    * Constructs a <code>RangeFilter</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/RangeFilter} obj Optional instance to populate.
    * @return {module:models/RangeFilter} The populated <code>RangeFilter</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RangeFilter();
                        
            
            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], 'String');
            }
            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], Object);
            }
            if (data.hasOwnProperty('from_inclusive')) {
                obj['from_inclusive'] = ApiClient.convertToType(data['from_inclusive'], 'Boolean');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], Object);
            }
            if (data.hasOwnProperty('to_inclusive')) {
                obj['to_inclusive'] = ApiClient.convertToType(data['to_inclusive'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * The search field.
    * @member {String} field
    */
    field = undefined;
    /**
    * The lower bound of the filter range. If not specified, the range is  open-ended with respect to the lower bound. You can't leave both the lower and upper bounds open-ended.
    * @member {Object} from
    */
    from = undefined;
    /**
    * Indicates whether the lower bound of the range is inclusive. If not specified, the default is true. Set to false to make the lower bound exclusive.
    * @member {Boolean} from_inclusive
    */
    from_inclusive = undefined;
    /**
    * The upper bound of the filter range. If not specified, the range is  open-ended with respect to the upper bound. You can't leave both the upper and lower bounds open-ended.
    * @member {Object} to
    */
    to = undefined;
    /**
    * Indicates whether the upper bound of the range is inclusive. If not specified, the default is true. Set to false to made the upper bound  exclusive.
    * @member {Boolean} to_inclusive
    */
    to_inclusive = undefined;




}
