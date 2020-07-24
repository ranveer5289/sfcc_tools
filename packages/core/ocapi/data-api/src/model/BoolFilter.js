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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.BoolFilter = factory(root.DataApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The BoolFilter model module.
   * @module model/BoolFilter
   * @version 20.8
   */

  /**
   * Constructs a new <code>BoolFilter</code>.
   * Document representing a boolean filter.  
   * @alias module:model/BoolFilter
   * @class
   * @param operator {module:model/BoolFilter.OperatorEnum} The logical operator the filters are combined with.
   */
  var exports = function(operator) {
    var _this = this;

    _this['operator'] = operator;
  };

  /**
   * Constructs a <code>BoolFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoolFilter} obj Optional instance to populate.
   * @return {module:model/BoolFilter} The populated <code>BoolFilter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('filters')) {
        obj['filters'] = ApiClient.convertToType(data['filters'], [Object]);
      }
      if (data.hasOwnProperty('operator')) {
        obj['operator'] = ApiClient.convertToType(data['operator'], 'String');
      }
    }
    return obj;
  }

  /**
   * A list of filters, which are logically combined by an operator.
   * @member {Array.<Object>} filters
   */
  exports.prototype['filters'] = undefined;
  /**
   * The logical operator the filters are combined with.
   * @member {module:model/BoolFilter.OperatorEnum} operator
   */
  exports.prototype['operator'] = undefined;


  /**
   * Allowed values for the <code>operator</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OperatorEnum = {
    /**
     * value: "and"
     * @const
     */
    "and": "and",
    /**
     * value: "or"
     * @const
     */
    "or": "or",
    /**
     * value: "not"
     * @const
     */
    "not": "not"  };


  return exports;
}));

