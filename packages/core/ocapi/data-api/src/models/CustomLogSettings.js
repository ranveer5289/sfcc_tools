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
import LogCategory from './LogCategory';

/**
* The CustomLogSettings model module.
* @module models/CustomLogSettings
* @version 20.8
*/
export default class CustomLogSettings {
    /**
    * Constructs a new <code>CustomLogSettings</code>.
    * Document representing custom logging settings.
    * @alias module:models/CustomLogSettings
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>CustomLogSettings</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/CustomLogSettings} obj Optional instance to populate.
    * @return {module:models/CustomLogSettings} The populated <code>CustomLogSettings</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomLogSettings();
                        
            
            if (data.hasOwnProperty('debug_permitted')) {
                obj['debug_permitted'] = ApiClient.convertToType(data['debug_permitted'], 'Boolean');
            }
            if (data.hasOwnProperty('debug_to_file')) {
                obj['debug_to_file'] = ApiClient.convertToType(data['debug_to_file'], 'Boolean');
            }
            if (data.hasOwnProperty('email_to')) {
                obj['email_to'] = ApiClient.convertToType(data['email_to'], 'String');
            }
            if (data.hasOwnProperty('error_to_file')) {
                obj['error_to_file'] = ApiClient.convertToType(data['error_to_file'], 'Boolean');
            }
            if (data.hasOwnProperty('fatal_to_file')) {
                obj['fatal_to_file'] = ApiClient.convertToType(data['fatal_to_file'], 'Boolean');
            }
            if (data.hasOwnProperty('info_to_file')) {
                obj['info_to_file'] = ApiClient.convertToType(data['info_to_file'], 'Boolean');
            }
            if (data.hasOwnProperty('log_categories')) {
                obj['log_categories'] = ApiClient.convertToType(data['log_categories'], [LogCategory]);
            }
            if (data.hasOwnProperty('root_level')) {
                obj['root_level'] = ApiClient.convertToType(data['root_level'], 'String');
            }
            if (data.hasOwnProperty('warn_to_file')) {
                obj['warn_to_file'] = ApiClient.convertToType(data['warn_to_file'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * False if the current instance is production.
    * @member {Boolean} debug_permitted
    */
    debug_permitted = undefined;
    /**
    * Indicates if custom debug logs are written to file.
    * @member {Boolean} debug_to_file
    */
    debug_to_file = undefined;
    /**
    * Email addresses for fatal log messages with a maximum length of 1000 characters.
    * @member {String} email_to
    */
    email_to = undefined;
    /**
    * Indicates if custom error logs are written to file.
    * @member {Boolean} error_to_file
    */
    error_to_file = undefined;
    /**
    * Indicates if custom fatal logs are written to file.
    * @member {Boolean} fatal_to_file
    */
    fatal_to_file = undefined;
    /**
    * Indicates if custom info logs are written to file.
    * @member {Boolean} info_to_file
    */
    info_to_file = undefined;
    /**
    * Defined custom log categories.
    * @member {Array.<module:models/LogCategory>} log_categories
    */
    log_categories = undefined;
    /**
    * Custom root category log level.
    * @member {String} root_level
    */
    root_level = undefined;
    /**
    * Indicates if custom warn logs are written to file.
    * @member {Boolean} warn_to_file
    */
    warn_to_file = undefined;




}