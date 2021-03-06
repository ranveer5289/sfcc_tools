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
    root.DataApi.JobExecutionParameter = factory(root.DataApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The JobExecutionParameter model module.
   * @module model/JobExecutionParameter
   * @version 20.4
   */

  /**
   * Constructs a new <code>JobExecutionParameter</code>.
   * Specification of a parameter for a job execution.
   * @alias module:model/JobExecutionParameter
   * @class
   * @param name {String} The name of the parameter.
   * @param value {String} The value of the parameter.
   */
  var exports = function(name, value) {
    var _this = this;

    _this['name'] = name;
    _this['value'] = value;
  };

  /**
   * Constructs a <code>JobExecutionParameter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobExecutionParameter} obj Optional instance to populate.
   * @return {module:model/JobExecutionParameter} The populated <code>JobExecutionParameter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }

  /**
   * The name of the parameter.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The value of the parameter.
   * @member {String} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


