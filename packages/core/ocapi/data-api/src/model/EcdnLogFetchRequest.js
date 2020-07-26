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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.EcdnLogFetchRequest = factory(root.DataApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The EcdnLogFetchRequest model module.
   * @module model/EcdnLogFetchRequest
   * @version 20.4
   */

  /**
   * Constructs a new <code>EcdnLogFetchRequest</code>.
   * Input-Document for requesting a Log-Fetch process.
   * @alias module:model/EcdnLogFetchRequest
   * @class
   * @param startTime {Date} Start time for log file entries, in Unix time stamp format. Must not be more than 7 days in the past
   * @param zoneName {String} The internationalized domain name representation (from RFC 3490) of the zone name
   */
  var exports = function(startTime, zoneName) {
    var _this = this;

    _this['start_time'] = startTime;
    _this['zone_name'] = zoneName;
  };

  /**
   * Constructs a <code>EcdnLogFetchRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EcdnLogFetchRequest} obj Optional instance to populate.
   * @return {module:model/EcdnLogFetchRequest} The populated <code>EcdnLogFetchRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('end_time')) {
        obj['end_time'] = ApiClient.convertToType(data['end_time'], 'Date');
      }
      if (data.hasOwnProperty('start_time')) {
        obj['start_time'] = ApiClient.convertToType(data['start_time'], 'Date');
      }
      if (data.hasOwnProperty('zone_name')) {
        obj['zone_name'] = ApiClient.convertToType(data['zone_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * Optional end time for log file entries, in Unix time stamp format. Must not be more than 1 hour after the start time. If not passed, a one hour time frame is assumed for the log file.
   * @member {Date} end_time
   */
  exports.prototype['end_time'] = undefined;
  /**
   * Start time for log file entries, in Unix time stamp format. Must not be more than 7 days in the past
   * @member {Date} start_time
   */
  exports.prototype['start_time'] = undefined;
  /**
   * The internationalized domain name representation (from RFC 3490) of the zone name
   * @member {String} zone_name
   */
  exports.prototype['zone_name'] = undefined;



  return exports;
}));


