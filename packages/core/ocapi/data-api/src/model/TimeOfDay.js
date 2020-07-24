/**
 * Data API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 20.8
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.TimeOfDay = factory(root.DataApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The TimeOfDay model module.
   * @module model/TimeOfDay
   * @version 20.8
   */

  /**
   * Constructs a new <code>TimeOfDay</code>.
   * Document representing a time schedule within a single day.
   * @alias module:model/TimeOfDay
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>TimeOfDay</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TimeOfDay} obj Optional instance to populate.
   * @return {module:model/TimeOfDay} The populated <code>TimeOfDay</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('time_from')) {
        obj['time_from'] = ApiClient.convertToType(data['time_from'], 'String');
      }
      if (data.hasOwnProperty('time_to')) {
        obj['time_to'] = ApiClient.convertToType(data['time_to'], 'String');
      }
    }
    return obj;
  }

  /**
   * The time to start from. Time format: HH:mm:ss. Seconds  are ignored and set to 0.
   * @member {String} time_from
   */
  exports.prototype['time_from'] = undefined;
  /**
   * The time to end on. Time format: HH:mm:ss. Seconds  are ignored and set to 0.
   * @member {String} time_to
   */
  exports.prototype['time_to'] = undefined;



  return exports;
}));


