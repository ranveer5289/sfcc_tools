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
    define(['ApiClient', 'model/FunctionalPermission'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FunctionalPermission'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.FunctionalPermissions = factory(root.DataApi.ApiClient, root.DataApi.FunctionalPermission);
  }
}(this, function(ApiClient, FunctionalPermission) {
  'use strict';



  /**
   * The FunctionalPermissions model module.
   * @module model/FunctionalPermissions
   * @version 20.4
   */

  /**
   * Constructs a new <code>FunctionalPermissions</code>.
   * Document representing the available functional permissions.
   * @alias module:model/FunctionalPermissions
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>FunctionalPermissions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FunctionalPermissions} obj Optional instance to populate.
   * @return {module:model/FunctionalPermissions} The populated <code>FunctionalPermissions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('organization')) {
        obj['organization'] = ApiClient.convertToType(data['organization'], [FunctionalPermission]);
      }
      if (data.hasOwnProperty('scopes')) {
        obj['scopes'] = ApiClient.convertToType(data['scopes'], ['String']);
      }
      if (data.hasOwnProperty('site')) {
        obj['site'] = ApiClient.convertToType(data['site'], [FunctionalPermission]);
      }
    }
    return obj;
  }

  /**
   * The collection of available organization functional permissions.
   * @member {Array.<module:model/FunctionalPermission>} organization
   */
  exports.prototype['organization'] = undefined;
  /**
   * The available functional permission scopes (e.g. organization, site).
   * @member {Array.<String>} scopes
   */
  exports.prototype['scopes'] = undefined;
  /**
   * The list of available site functional permissions.
   * @member {Array.<module:model/FunctionalPermission>} site
   */
  exports.prototype['site'] = undefined;



  return exports;
}));


