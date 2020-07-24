/**
 * Shop API
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
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.Store = factory(root.ShopApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Store model module.
   * @module model/Store
   * @version 20.8
   */

  /**
   * Constructs a new <code>Store</code>.
   * Document representing a store.
   * @alias module:model/Store
   * @class
   * @param id {String} The id of the store.
   */
  var exports = function(id) {
    var _this = this;

    _this['id'] = id;
  };

  /**
   * Constructs a <code>Store</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Store} obj Optional instance to populate.
   * @return {module:model/Store} The populated <code>Store</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('address1')) {
        obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
      }
      if (data.hasOwnProperty('address2')) {
        obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
      }
      if (data.hasOwnProperty('c_TestAttribute')) {
        obj['c_TestAttribute'] = ApiClient.convertToType(data['c_TestAttribute'], ['String']);
      }
      if (data.hasOwnProperty('c_countryCodeValue')) {
        obj['c_countryCodeValue'] = ApiClient.convertToType(data['c_countryCodeValue'], 'String');
      }
      if (data.hasOwnProperty('c_inventoryListId')) {
        obj['c_inventoryListId'] = ApiClient.convertToType(data['c_inventoryListId'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('country_code')) {
        obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
      }
      if (data.hasOwnProperty('distance')) {
        obj['distance'] = ApiClient.convertToType(data['distance'], 'Number');
      }
      if (data.hasOwnProperty('distance_unit')) {
        obj['distance_unit'] = ApiClient.convertToType(data['distance_unit'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('fax')) {
        obj['fax'] = ApiClient.convertToType(data['fax'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
      if (data.hasOwnProperty('inventory_id')) {
        obj['inventory_id'] = ApiClient.convertToType(data['inventory_id'], 'String');
      }
      if (data.hasOwnProperty('latitude')) {
        obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
      }
      if (data.hasOwnProperty('longitude')) {
        obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('pos_enabled')) {
        obj['pos_enabled'] = ApiClient.convertToType(data['pos_enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('postal_code')) {
        obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
      }
      if (data.hasOwnProperty('state_code')) {
        obj['state_code'] = ApiClient.convertToType(data['state_code'], 'String');
      }
      if (data.hasOwnProperty('store_events')) {
        obj['store_events'] = ApiClient.convertToType(data['store_events'], 'String');
      }
      if (data.hasOwnProperty('store_hours')) {
        obj['store_hours'] = ApiClient.convertToType(data['store_hours'], 'String');
      }
      if (data.hasOwnProperty('store_locator_enabled')) {
        obj['store_locator_enabled'] = ApiClient.convertToType(data['store_locator_enabled'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The first address of the store.
   * @member {String} address1
   */
  exports.prototype['address1'] = undefined;
  /**
   * The second address of the store.
   * @member {String} address2
   */
  exports.prototype['address2'] = undefined;
  /**
   * @member {Array.<String>} c_TestAttribute
   */
  exports.prototype['c_TestAttribute'] = undefined;
  /**
   * Country Code Value - for the form values
   * @member {String} c_countryCodeValue
   */
  exports.prototype['c_countryCodeValue'] = undefined;
  /**
   * Store Inventory List ID
   * @member {String} c_inventoryListId
   */
  exports.prototype['c_inventoryListId'] = undefined;
  /**
   * The city of the store.
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * The country code of the store.
   * @member {module:model/Store.CountryCodeEnum} country_code
   */
  exports.prototype['country_code'] = undefined;
  /**
   * The distance to the given geo location in the unit of attribute distance (miles or kilometers).
   * @member {Number} distance
   */
  exports.prototype['distance'] = undefined;
  /**
   * The distance unit the distance attribute is measured in (either in miles or kilometers).
   * @member {String} distance_unit
   */
  exports.prototype['distance_unit'] = undefined;
  /**
   * The email address of the store.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * The fax number of the store.
   * @member {String} fax
   */
  exports.prototype['fax'] = undefined;
  /**
   * The id of the store.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The store image.
   * @member {String} image
   */
  exports.prototype['image'] = undefined;
  /**
   * The inventory list id associated with this store.
   * @member {String} inventory_id
   */
  exports.prototype['inventory_id'] = undefined;
  /**
   * The latitude of the store.
   * @member {Number} latitude
   */
  exports.prototype['latitude'] = undefined;
  /**
   * The longitude of the store.
   * @member {Number} longitude
   */
  exports.prototype['longitude'] = undefined;
  /**
   * The store name.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The phone number of the store.
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * Whether this store uses Store Point-of-Sale.
   * @member {Boolean} pos_enabled
   */
  exports.prototype['pos_enabled'] = undefined;
  /**
   * The postal code of the store.
   * @member {String} postal_code
   */
  exports.prototype['postal_code'] = undefined;
  /**
   * The state code of the store.
   * @member {String} state_code
   */
  exports.prototype['state_code'] = undefined;
  /**
   * The store events.
   * @member {String} store_events
   */
  exports.prototype['store_events'] = undefined;
  /**
   * The store opening hours.
   * @member {String} store_hours
   */
  exports.prototype['store_hours'] = undefined;
  /**
   * Whether this store should show up in store locator results.
   * @member {Boolean} store_locator_enabled
   */
  exports.prototype['store_locator_enabled'] = undefined;


  /**
   * Allowed values for the <code>country_code</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CountryCodeEnum = {
    /**
     * value: "US"
     * @const
     */
    "US": "US",
    /**
     * value: "CA"
     * @const
     */
    "CA": "CA",
    /**
     * value: "DE"
     * @const
     */
    "DE": "DE"  };


  return exports;
}));

