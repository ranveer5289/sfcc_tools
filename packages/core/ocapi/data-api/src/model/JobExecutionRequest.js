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
    define(['ApiClient', 'model/JobExecutionParameter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./JobExecutionParameter'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.JobExecutionRequest = factory(root.DataApi.ApiClient, root.DataApi.JobExecutionParameter);
  }
}(this, function(ApiClient, JobExecutionParameter) {
  'use strict';



  /**
   * The JobExecutionRequest model module.
   * @module model/JobExecutionRequest
   * @version 20.4
   */

  /**
   * Constructs a new <code>JobExecutionRequest</code>.
   * Specification of a parameter for a job execution.
   * @alias module:model/JobExecutionRequest
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>JobExecutionRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobExecutionRequest} obj Optional instance to populate.
   * @return {module:model/JobExecutionRequest} The populated <code>JobExecutionRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('parameters')) {
        obj['parameters'] = ApiClient.convertToType(data['parameters'], [JobExecutionParameter]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/JobExecutionParameter>} parameters
   */
  exports.prototype['parameters'] = undefined;



  return exports;
}));


