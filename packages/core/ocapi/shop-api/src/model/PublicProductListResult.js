/**
 * Shop API
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
    define(['ApiClient', 'model/PublicProductListLink'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PublicProductListLink'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.PublicProductListResult = factory(root.ShopApi.ApiClient, root.ShopApi.PublicProductListLink);
  }
}(this, function(ApiClient, PublicProductListLink) {
  'use strict';



  /**
   * The PublicProductListResult model module.
   * @module model/PublicProductListResult
   * @version 20.8
   */

  /**
   * Constructs a new <code>PublicProductListResult</code>.
   * Result document containing an array of public product list links.
   * @alias module:model/PublicProductListResult
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>PublicProductListResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PublicProductListResult} obj Optional instance to populate.
   * @return {module:model/PublicProductListResult} The populated <code>PublicProductListResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [PublicProductListLink]);
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The number of returned documents.
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * The array of product list link documents.
   * @member {Array.<module:model/PublicProductListLink>} data
   */
  exports.prototype['data'] = undefined;
  /**
   * The total number of documents.
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;



  return exports;
}));


