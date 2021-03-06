/**
 * Data API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 20.4
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/LogCategory'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LogCategory'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.CustomLogSettings = factory(root.DataApi.ApiClient, root.DataApi.LogCategory);
  }
}(this, function(ApiClient, LogCategory) {
  'use strict';



  /**
   * The CustomLogSettings model module.
   * @module model/CustomLogSettings
   * @version 20.4
   */

  /**
   * Constructs a new <code>CustomLogSettings</code>.
   * Document representing custom logging settings.
   * @alias module:model/CustomLogSettings
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>CustomLogSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomLogSettings} obj Optional instance to populate.
   * @return {module:model/CustomLogSettings} The populated <code>CustomLogSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
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
  exports.prototype['debug_permitted'] = undefined;
  /**
   * Indicates if custom debug logs are written to file.
   * @member {Boolean} debug_to_file
   */
  exports.prototype['debug_to_file'] = undefined;
  /**
   * Email addresses for fatal log messages with a maximum length of 1000 characters.
   * @member {String} email_to
   */
  exports.prototype['email_to'] = undefined;
  /**
   * Indicates if custom error logs are written to file.
   * @member {Boolean} error_to_file
   */
  exports.prototype['error_to_file'] = undefined;
  /**
   * Indicates if custom fatal logs are written to file.
   * @member {Boolean} fatal_to_file
   */
  exports.prototype['fatal_to_file'] = undefined;
  /**
   * Indicates if custom info logs are written to file.
   * @member {Boolean} info_to_file
   */
  exports.prototype['info_to_file'] = undefined;
  /**
   * Defined custom log categories.
   * @member {Array.<module:model/LogCategory>} log_categories
   */
  exports.prototype['log_categories'] = undefined;
  /**
   * Custom root category log level.
   * @member {String} root_level
   */
  exports.prototype['root_level'] = undefined;
  /**
   * Indicates if custom warn logs are written to file.
   * @member {Boolean} warn_to_file
   */
  exports.prototype['warn_to_file'] = undefined;



  return exports;
}));


