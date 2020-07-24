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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.CustomerAddress = factory(root.ShopApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The CustomerAddress model module.
   * @module model/CustomerAddress
   * @version 20.8
   */

  /**
   * Constructs a new <code>CustomerAddress</code>.
   * Document representing a customer address.
   * @alias module:model/CustomerAddress
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>CustomerAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomerAddress} obj Optional instance to populate.
   * @return {module:model/CustomerAddress} The populated <code>CustomerAddress</code> instance.
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
      if (data.hasOwnProperty('address_id')) {
        obj['address_id'] = ApiClient.convertToType(data['address_id'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('company_name')) {
        obj['company_name'] = ApiClient.convertToType(data['company_name'], 'String');
      }
      if (data.hasOwnProperty('country_code')) {
        obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
      }
      if (data.hasOwnProperty('creation_date')) {
        obj['creation_date'] = ApiClient.convertToType(data['creation_date'], 'Date');
      }
      if (data.hasOwnProperty('first_name')) {
        obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
      }
      if (data.hasOwnProperty('full_name')) {
        obj['full_name'] = ApiClient.convertToType(data['full_name'], 'String');
      }
      if (data.hasOwnProperty('job_title')) {
        obj['job_title'] = ApiClient.convertToType(data['job_title'], 'String');
      }
      if (data.hasOwnProperty('last_modified')) {
        obj['last_modified'] = ApiClient.convertToType(data['last_modified'], 'Date');
      }
      if (data.hasOwnProperty('last_name')) {
        obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('post_box')) {
        obj['post_box'] = ApiClient.convertToType(data['post_box'], 'String');
      }
      if (data.hasOwnProperty('postal_code')) {
        obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
      }
      if (data.hasOwnProperty('preferred')) {
        obj['preferred'] = ApiClient.convertToType(data['preferred'], 'Boolean');
      }
      if (data.hasOwnProperty('salutation')) {
        obj['salutation'] = ApiClient.convertToType(data['salutation'], 'String');
      }
      if (data.hasOwnProperty('second_name')) {
        obj['second_name'] = ApiClient.convertToType(data['second_name'], 'String');
      }
      if (data.hasOwnProperty('state_code')) {
        obj['state_code'] = ApiClient.convertToType(data['state_code'], 'String');
      }
      if (data.hasOwnProperty('suffix')) {
        obj['suffix'] = ApiClient.convertToType(data['suffix'], 'String');
      }
      if (data.hasOwnProperty('suite')) {
        obj['suite'] = ApiClient.convertToType(data['suite'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
    }
    return obj;
  }

  /**
   * The first address.
   * @member {String} address1
   */
  exports.prototype['address1'] = undefined;
  /**
   * The second address.
   * @member {String} address2
   */
  exports.prototype['address2'] = undefined;
  /**
   * The id of the address as specified by account owner.
   * @member {String} address_id
   */
  exports.prototype['address_id'] = undefined;
  /**
   * The city.
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * The company name.
   * @member {String} company_name
   */
  exports.prototype['company_name'] = undefined;
  /**
   * The two-letter ISO 3166-1 (Alpha-2) country code.
   * @member {module:model/CustomerAddress.CountryCodeEnum} country_code
   */
  exports.prototype['country_code'] = undefined;
  /**
   * Returns the value of attribute 'creationDate'.
   * @member {Date} creation_date
   */
  exports.prototype['creation_date'] = undefined;
  /**
   * The first name.
   * @member {String} first_name
   */
  exports.prototype['first_name'] = undefined;
  /**
   * The full name.
   * @member {String} full_name
   */
  exports.prototype['full_name'] = undefined;
  /**
   * The job title.
   * @member {String} job_title
   */
  exports.prototype['job_title'] = undefined;
  /**
   * Returns the value of attribute 'lastModified'.
   * @member {Date} last_modified
   */
  exports.prototype['last_modified'] = undefined;
  /**
   * The last name.
   * @member {String} last_name
   */
  exports.prototype['last_name'] = undefined;
  /**
   * The phone number.
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * The post box.
   * @member {String} post_box
   */
  exports.prototype['post_box'] = undefined;
  /**
   * The postal code.
   * @member {String} postal_code
   */
  exports.prototype['postal_code'] = undefined;
  /**
   * The preferred attribute.
   * @member {Boolean} preferred
   */
  exports.prototype['preferred'] = undefined;
  /**
   * The salutation.
   * @member {String} salutation
   */
  exports.prototype['salutation'] = undefined;
  /**
   * The second name.
   * @member {String} second_name
   */
  exports.prototype['second_name'] = undefined;
  /**
   * The state code.
   * @member {String} state_code
   */
  exports.prototype['state_code'] = undefined;
  /**
   * The suffix.
   * @member {String} suffix
   */
  exports.prototype['suffix'] = undefined;
  /**
   * The suite.
   * @member {String} suite
   */
  exports.prototype['suite'] = undefined;
  /**
   * The title.
   * @member {String} title
   */
  exports.prototype['title'] = undefined;


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
     * value: "FR"
     * @const
     */
    "FR": "FR",
    /**
     * value: "IT"
     * @const
     */
    "IT": "IT",
    /**
     * value: "JP"
     * @const
     */
    "JP": "JP",
    /**
     * value: "CN"
     * @const
     */
    "CN": "CN",
    /**
     * value: "GB"
     * @const
     */
    "GB": "GB"  };


  return exports;
}));


