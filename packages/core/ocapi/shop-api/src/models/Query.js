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
* The Query model module.
* @module models/Query
* @version 20.8
*/
export default class Query {
    /**
    * Constructs a new <code>Query</code>.
    * Document representing a query. A query contains a set of objects that define criteria  used to select records. A query can contain one of the following: 
    * @alias module:models/Query
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Query</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/Query} obj Optional instance to populate.
    * @return {module:models/Query} The populated <code>Query</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Query();
                        
            
        }
        return obj;
    }





}
