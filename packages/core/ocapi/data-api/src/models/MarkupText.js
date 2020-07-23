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
* The MarkupText model module.
* @module models/MarkupText
* @version 20.8
*/
export default class MarkupText {
    /**
    * Constructs a new <code>MarkupText</code>.
    * @alias module:models/MarkupText
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>MarkupText</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/MarkupText} obj Optional instance to populate.
    * @return {module:models/MarkupText} The populated <code>MarkupText</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MarkupText();
                        
            
            if (data.hasOwnProperty('markup')) {
                obj['markup'] = ApiClient.convertToType(data['markup'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
        }
        return obj;
    }

    /**
    * The rendered HTML
    * @member {String} markup
    */
    markup = undefined;
    /**
    * The raw markup text
    * @member {String} source
    */
    source = undefined;




}
