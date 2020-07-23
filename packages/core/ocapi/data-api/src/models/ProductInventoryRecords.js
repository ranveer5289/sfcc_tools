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
import ProductInventoryRecord from './ProductInventoryRecord';

/**
* The ProductInventoryRecords model module.
* @module models/ProductInventoryRecords
* @version 20.8
*/
export default class ProductInventoryRecords {
    /**
    * Constructs a new <code>ProductInventoryRecords</code>.
    * Document representing an unfiltered list of inventory records.
    * @alias module:models/ProductInventoryRecords
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ProductInventoryRecords</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/ProductInventoryRecords} obj Optional instance to populate.
    * @return {module:models/ProductInventoryRecords} The populated <code>ProductInventoryRecords</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductInventoryRecords();
                        
            
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ProductInventoryRecord]);
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
    * The collection of product inventory records.
    * @member {Array.<module:models/ProductInventoryRecord>} data
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
