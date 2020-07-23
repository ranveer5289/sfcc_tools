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
* The RoleLocalePermission model module.
* @module models/RoleLocalePermission
* @version 20.8
*/
export default class RoleLocalePermission {
    /**
    * Constructs a new <code>RoleLocalePermission</code>.
    * Document representing a locale permission.
    * @alias module:models/RoleLocalePermission
    * @class
    * @param localeId {String} The related locale id of the locale permission.
    * @param type {String} The permission type (\"locale\").
    */

    constructor(localeId, type) {
        
        
        this['locale_id'] = localeId;
        this['type'] = type;
        
    }

    /**
    * Constructs a <code>RoleLocalePermission</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/RoleLocalePermission} obj Optional instance to populate.
    * @return {module:models/RoleLocalePermission} The populated <code>RoleLocalePermission</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RoleLocalePermission();
                        
            
            if (data.hasOwnProperty('locale_id')) {
                obj['locale_id'] = ApiClient.convertToType(data['locale_id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], {'String': 'String'});
            }
        }
        return obj;
    }

    /**
    * The related locale id of the locale permission.
    * @member {String} locale_id
    */
    locale_id = undefined;
    /**
    * The permission type (\"locale\").
    * @member {String} type
    */
    type = undefined;
    /**
    * The non domain specific value for the locale permission, e.g. ACCESS or READONLY.
    * @member {String} value
    */
    value = undefined;
    /**
    * The map of value per domain for the locale permission, e.g. ACCESS or READONLY per domain name.
    * @member {Object.<String, String>} values
    */
    values = undefined;




}
