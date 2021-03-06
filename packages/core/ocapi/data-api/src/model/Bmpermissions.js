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
    define(['ApiClient', 'model/FunctionalPermissions', 'model/LocalePermissions', 'model/ModulePermissions', 'model/WebdavPermissions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FunctionalPermissions'), require('./LocalePermissions'), require('./ModulePermissions'), require('./WebdavPermissions'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.Bmpermissions = factory(root.DataApi.ApiClient, root.DataApi.FunctionalPermissions, root.DataApi.LocalePermissions, root.DataApi.ModulePermissions, root.DataApi.WebdavPermissions);
  }
}(this, function(ApiClient, FunctionalPermissions, LocalePermissions, ModulePermissions, WebdavPermissions) {
  'use strict';



  /**
   * The Bmpermissions model module.
   * @module model/Bmpermissions
   * @version 20.4
   */

  /**
   * Constructs a new <code>Bmpermissions</code>.
   * @alias module:model/Bmpermissions
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Bmpermissions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Bmpermissions} obj Optional instance to populate.
   * @return {module:model/Bmpermissions} The populated <code>Bmpermissions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('functional')) {
        obj['functional'] = FunctionalPermissions.constructFromObject(data['functional']);
      }
      if (data.hasOwnProperty('functional_link')) {
        obj['functional_link'] = ApiClient.convertToType(data['functional_link'], 'String');
      }
      if (data.hasOwnProperty('locale')) {
        obj['locale'] = LocalePermissions.constructFromObject(data['locale']);
      }
      if (data.hasOwnProperty('locale_link')) {
        obj['locale_link'] = ApiClient.convertToType(data['locale_link'], 'String');
      }
      if (data.hasOwnProperty('module')) {
        obj['module'] = ModulePermissions.constructFromObject(data['module']);
      }
      if (data.hasOwnProperty('module_link')) {
        obj['module_link'] = ApiClient.convertToType(data['module_link'], 'String');
      }
      if (data.hasOwnProperty('types')) {
        obj['types'] = ApiClient.convertToType(data['types'], ['String']);
      }
      if (data.hasOwnProperty('webdav')) {
        obj['webdav'] = WebdavPermissions.constructFromObject(data['webdav']);
      }
      if (data.hasOwnProperty('webdav_link')) {
        obj['webdav_link'] = ApiClient.convertToType(data['webdav_link'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/FunctionalPermissions} functional
   */
  exports.prototype['functional'] = undefined;
  /**
   * @member {String} functional_link
   */
  exports.prototype['functional_link'] = undefined;
  /**
   * @member {module:model/LocalePermissions} locale
   */
  exports.prototype['locale'] = undefined;
  /**
   * @member {String} locale_link
   */
  exports.prototype['locale_link'] = undefined;
  /**
   * @member {module:model/ModulePermissions} module
   */
  exports.prototype['module'] = undefined;
  /**
   * @member {String} module_link
   */
  exports.prototype['module_link'] = undefined;
  /**
   * @member {Array.<String>} types
   */
  exports.prototype['types'] = undefined;
  /**
   * @member {module:model/WebdavPermissions} webdav
   */
  exports.prototype['webdav'] = undefined;
  /**
   * @member {String} webdav_link
   */
  exports.prototype['webdav_link'] = undefined;



  return exports;
}));


