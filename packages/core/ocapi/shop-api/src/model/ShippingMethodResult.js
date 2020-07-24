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
    define(['ApiClient', 'model/ShippingMethod'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ShippingMethod'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.ShippingMethodResult = factory(root.ShopApi.ApiClient, root.ShopApi.ShippingMethod);
  }
}(this, function(ApiClient, ShippingMethod) {
  'use strict';



  /**
   * The ShippingMethodResult model module.
   * @module model/ShippingMethodResult
   * @version 20.8
   */

  /**
   * Constructs a new <code>ShippingMethodResult</code>.
   * Result document containing shipping methods.
   * @alias module:model/ShippingMethodResult
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ShippingMethodResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShippingMethodResult} obj Optional instance to populate.
   * @return {module:model/ShippingMethodResult} The populated <code>ShippingMethodResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('applicable_shipping_methods')) {
        obj['applicable_shipping_methods'] = ApiClient.convertToType(data['applicable_shipping_methods'], [ShippingMethod]);
      }
      if (data.hasOwnProperty('default_shipping_method_id')) {
        obj['default_shipping_method_id'] = ApiClient.convertToType(data['default_shipping_method_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * The applicable shipping method documents.
   * @member {Array.<module:model/ShippingMethod>} applicable_shipping_methods
   */
  exports.prototype['applicable_shipping_methods'] = undefined;
  /**
   * The default shipping method.
   * @member {String} default_shipping_method_id
   */
  exports.prototype['default_shipping_method_id'] = undefined;



  return exports;
}));


