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
    define(['ApiClient', 'model/Schedule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Schedule'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.SlotConfigurationAbtestGroupAssignment = factory(root.DataApi.ApiClient, root.DataApi.Schedule);
  }
}(this, function(ApiClient, Schedule) {
  'use strict';



  /**
   * The SlotConfigurationAbtestGroupAssignment model module.
   * @module model/SlotConfigurationAbtestGroupAssignment
   * @version 20.8
   */

  /**
   * Constructs a new <code>SlotConfigurationAbtestGroupAssignment</code>.
   * @alias module:model/SlotConfigurationAbtestGroupAssignment
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>SlotConfigurationAbtestGroupAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SlotConfigurationAbtestGroupAssignment} obj Optional instance to populate.
   * @return {module:model/SlotConfigurationAbtestGroupAssignment} The populated <code>SlotConfigurationAbtestGroupAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('abtest_description')) {
        obj['abtest_description'] = ApiClient.convertToType(data['abtest_description'], 'String');
      }
      if (data.hasOwnProperty('abtest_id')) {
        obj['abtest_id'] = ApiClient.convertToType(data['abtest_id'], 'String');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('schedule')) {
        obj['schedule'] = Schedule.constructFromObject(data['schedule']);
      }
      if (data.hasOwnProperty('segment_description')) {
        obj['segment_description'] = ApiClient.convertToType(data['segment_description'], 'String');
      }
      if (data.hasOwnProperty('segment_id')) {
        obj['segment_id'] = ApiClient.convertToType(data['segment_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} abtest_description
   */
  exports.prototype['abtest_description'] = undefined;
  /**
   * @member {String} abtest_id
   */
  exports.prototype['abtest_id'] = undefined;
  /**
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * @member {module:model/Schedule} schedule
   */
  exports.prototype['schedule'] = undefined;
  /**
   * @member {String} segment_description
   */
  exports.prototype['segment_description'] = undefined;
  /**
   * @member {String} segment_id
   */
  exports.prototype['segment_id'] = undefined;



  return exports;
}));


