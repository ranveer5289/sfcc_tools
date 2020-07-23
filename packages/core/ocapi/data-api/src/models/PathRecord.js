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
* The PathRecord model module.
* @module models/PathRecord
* @version 20.8
*/
export default class PathRecord {
    /**
    * Constructs a new <code>PathRecord</code>.
    * Document representing most basic info (id and name) of a category or catalog.
    * @alias module:models/PathRecord
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>PathRecord</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/PathRecord} obj Optional instance to populate.
    * @return {module:models/PathRecord} The populated <code>PathRecord</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PathRecord();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], {'String': 'String'});
            }
        }
        return obj;
    }

    /**
    * The id of the category path.
    * @member {String} id
    */
    id = undefined;
    /**
    * The name of the category path.
    * @member {Object.<String, String>} name
    */
    name = undefined;




}
