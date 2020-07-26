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
    define(['ApiClient', 'model/RoleFunctionalPermission'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RoleFunctionalPermission'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.RoleFunctionalPermissions = factory(root.DataApi.ApiClient, root.DataApi.RoleFunctionalPermission);
  }
}(this, function(ApiClient, RoleFunctionalPermission) {
  'use strict';



  /**
   * The RoleFunctionalPermissions model module.
   * @module model/RoleFunctionalPermissions
   * @version 20.4
   */

  /**
   * Constructs a new <code>RoleFunctionalPermissions</code>.
   * Document listing the functional permissions assigned to a certain role.
   * @alias module:model/RoleFunctionalPermissions
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>RoleFunctionalPermissions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RoleFunctionalPermissions} obj Optional instance to populate.
   * @return {module:model/RoleFunctionalPermissions} The populated <code>RoleFunctionalPermissions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('organization')) {
        obj['organization'] = ApiClient.convertToType(data['organization'], [RoleFunctionalPermission]);
      }
      if (data.hasOwnProperty('site')) {
        obj['site'] = ApiClient.convertToType(data['site'], [RoleFunctionalPermission]);
      }
    }
    return obj;
  }

  /**
   * The list of organization functional permissions.
   * @member {Array.<module:model/RoleFunctionalPermission>} organization
   */
  exports.prototype['organization'] = undefined;
  /**
   * The list of site functional permissions.
   * @member {Array.<module:model/RoleFunctionalPermission>} site
   */
  exports.prototype['site'] = undefined;



  return exports;
}));


