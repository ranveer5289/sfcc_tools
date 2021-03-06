/**
 * Shop API
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
    define(['ApiClient', 'model/Customer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Customer'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.CustomerRegistration = factory(root.ShopApi.ApiClient, root.ShopApi.Customer);
  }
}(this, function(ApiClient, Customer) {
  'use strict';



  /**
   * The CustomerRegistration model module.
   * @module model/CustomerRegistration
   * @version 20.4
   */

  /**
   * Constructs a new <code>CustomerRegistration</code>.
   * Document representing the registration information for a customer.
   * @alias module:model/CustomerRegistration
   * @class
   * @param customer {module:model/Customer} 
   */
  var exports = function(customer) {
    var _this = this;

    _this['customer'] = customer;
  };

  /**
   * Constructs a <code>CustomerRegistration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomerRegistration} obj Optional instance to populate.
   * @return {module:model/CustomerRegistration} The populated <code>CustomerRegistration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('customer')) {
        obj['customer'] = Customer.constructFromObject(data['customer']);
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Customer} customer
   */
  exports.prototype['customer'] = undefined;
  /**
   * The password to authorize.
   * @member {String} password
   */
  exports.prototype['password'] = undefined;



  return exports;
}));


