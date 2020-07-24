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
    root.DataApi.Rule = factory(root.DataApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Rule model module.
   * @module model/Rule
   * @version 20.8
   */

  /**
   * Constructs a new <code>Rule</code>.
   * Document representing a customer group rule
   * @alias module:model/Rule
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Rule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Rule} obj Optional instance to populate.
   * @return {module:model/Rule} The populated <code>Rule</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
    }
    return obj;
  }

  /**
   * The description of the rule, describing its conditions in natural language. Property is read-only.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;



  return exports;
}));


