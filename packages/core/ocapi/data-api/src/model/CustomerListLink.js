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
    root.DataApi.CustomerListLink = factory(root.DataApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The CustomerListLink model module.
   * @module model/CustomerListLink
   * @version 20.8
   */

  /**
   * Constructs a new <code>CustomerListLink</code>.
   * Document representing a link to a customer list.
   * @alias module:model/CustomerListLink
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>CustomerListLink</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomerListLink} obj Optional instance to populate.
   * @return {module:model/CustomerListLink} The populated <code>CustomerListLink</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('customer_list_id')) {
        obj['customer_list_id'] = ApiClient.convertToType(data['customer_list_id'], 'String');
      }
      if (data.hasOwnProperty('link')) {
        obj['link'] = ApiClient.convertToType(data['link'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * The customerlist id.
   * @member {String} customer_list_id
   */
  exports.prototype['customer_list_id'] = undefined;
  /**
   * The target of the link.
   * @member {String} link
   */
  exports.prototype['link'] = undefined;
  /**
   * The link title.
   * @member {Object.<String, String>} title
   */
  exports.prototype['title'] = undefined;



  return exports;
}));


