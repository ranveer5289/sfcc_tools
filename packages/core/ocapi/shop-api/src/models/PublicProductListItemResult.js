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
import PublicProductListItem from './PublicProductListItem';

/**
* The PublicProductListItemResult model module.
* @module models/PublicProductListItemResult
* @version 20.8
*/
export default class PublicProductListItemResult {
    /**
    * Constructs a new <code>PublicProductListItemResult</code>.
    * Result document containing an array of product list items.
    * @alias module:models/PublicProductListItemResult
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>PublicProductListItemResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/PublicProductListItemResult} obj Optional instance to populate.
    * @return {module:models/PublicProductListItemResult} The populated <code>PublicProductListItemResult</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PublicProductListItemResult();
                        
            
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [PublicProductListItem]);
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
    * The array of product list item documents.
    * @member {Array.<module:models/PublicProductListItem>} data
    */
    data = undefined;
    /**
    * The total number of documents.
    * @member {Number} total
    */
    total = undefined;




}