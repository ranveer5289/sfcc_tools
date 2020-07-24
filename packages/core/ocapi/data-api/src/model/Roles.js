/**
 * Data API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 20.8
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 5.0.0-beta
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Role'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Role'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.Roles = factory(root.DataApi.ApiClient, root.DataApi.Role);
  }
}(this, function(ApiClient, Role) {
  'use strict';



  /**
   * The Roles model module.
   * @module model/Roles
   * @version 20.8
   */

  /**
   * Constructs a new <code>Roles</code>.
   * Document representing a list of access roles.
   * @alias module:model/Roles
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Roles</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Roles} obj Optional instance to populate.
   * @return {module:model/Roles} The populated <code>Roles</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Role]);
      }
      if (data.hasOwnProperty('expand')) {
        obj['expand'] = ApiClient.convertToType(data['expand'], ['String']);
      }
      if (data.hasOwnProperty('next')) {
        obj['next'] = ApiClient.convertToType(data['next'], 'String');
      }
      if (data.hasOwnProperty('previous')) {
        obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
      }
      if (data.hasOwnProperty('select')) {
        obj['select'] = ApiClient.convertToType(data['select'], 'String');
      }
      if (data.hasOwnProperty('start')) {
        obj['start'] = ApiClient.convertToType(data['start'], 'Number');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * The list of access roles.
   * @member {Array.<module:model/Role>} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {Array.<String>} expand
   */
  exports.prototype['expand'] = undefined;
  /**
   * @member {String} next
   */
  exports.prototype['next'] = undefined;
  /**
   * @member {String} previous
   */
  exports.prototype['previous'] = undefined;
  /**
   * @member {String} select
   */
  exports.prototype['select'] = undefined;
  /**
   * @member {Number} start
   */
  exports.prototype['start'] = undefined;
  /**
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;



  return exports;
}));

