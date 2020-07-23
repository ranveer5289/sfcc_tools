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
* The Tag model module.
* @module models/Tag
* @version 20.8
*/
export default class Tag {
    /**
    * Constructs a new <code>Tag</code>.
    * Document representing a tag
    * @alias module:models/Tag
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Tag</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/Tag} obj Optional instance to populate.
    * @return {module:models/Tag} The populated <code>Tag</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Tag();
                        
            
            if (data.hasOwnProperty('tag_id')) {
                obj['tag_id'] = ApiClient.convertToType(data['tag_id'], 'String');
            }
        }
        return obj;
    }

    /**
    * The id of the tag.
    * @member {String} tag_id
    */
    tag_id = undefined;




}
