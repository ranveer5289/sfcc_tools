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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.Inventory = factory(root.ShopApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Inventory model module.
   * @module model/Inventory
   * @version 20.4
   */

  /**
   * Constructs a new <code>Inventory</code>.
   * Document representing inventory information of the current product for a particular inventory list.
   * @alias module:model/Inventory
   * @class
   * @param id {String} The inventory id.
   */
  var exports = function(id) {
    var _this = this;

    _this['id'] = id;
  };

  /**
   * Constructs a <code>Inventory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Inventory} obj Optional instance to populate.
   * @return {module:model/Inventory} The populated <code>Inventory</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ats')) {
        obj['ats'] = ApiClient.convertToType(data['ats'], 'Number');
      }
      if (data.hasOwnProperty('backorderable')) {
        obj['backorderable'] = ApiClient.convertToType(data['backorderable'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('in_stock_date')) {
        obj['in_stock_date'] = ApiClient.convertToType(data['in_stock_date'], 'Date');
      }
      if (data.hasOwnProperty('orderable')) {
        obj['orderable'] = ApiClient.convertToType(data['orderable'], 'Boolean');
      }
      if (data.hasOwnProperty('preorderable')) {
        obj['preorderable'] = ApiClient.convertToType(data['preorderable'], 'Boolean');
      }
      if (data.hasOwnProperty('stock_level')) {
        obj['stock_level'] = ApiClient.convertToType(data['stock_level'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The ats of the product. If it is infinity, the return value is 999999. The value can be overwritten by the  OCAPI setting 'product.inventory.ats.max_threshold'.
   * @member {Number} ats
   */
  exports.prototype['ats'] = undefined;
  /**
   * A flag indicating whether the product is back orderable.
   * @member {Boolean} backorderable
   */
  exports.prototype['backorderable'] = undefined;
  /**
   * The inventory id.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * A flag indicating the date when the product will be in stock.
   * @member {Date} in_stock_date
   */
  exports.prototype['in_stock_date'] = undefined;
  /**
   * A flag indicating whether at least one of products is available to sell.
   * @member {Boolean} orderable
   */
  exports.prototype['orderable'] = undefined;
  /**
   * A flag indicating whether the product is pre orderable.
   * @member {Boolean} preorderable
   */
  exports.prototype['preorderable'] = undefined;
  /**
   * The stock level of the product. If it is infinity, the return value is 999999. The value can be overwritten by the  OCAPI setting 'product.inventory.stock_level.max_threshold'.
   * @member {Number} stock_level
   */
  exports.prototype['stock_level'] = undefined;



  return exports;
}));


