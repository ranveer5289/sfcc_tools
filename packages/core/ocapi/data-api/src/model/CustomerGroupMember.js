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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.CustomerGroupMember = factory(root.DataApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The CustomerGroupMember model module.
   * @module model/CustomerGroupMember
   * @version 20.4
   */

  /**
   * Constructs a new <code>CustomerGroupMember</code>.
   * Document representing a customer group member
   * @alias module:model/CustomerGroupMember
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>CustomerGroupMember</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomerGroupMember} obj Optional instance to populate.
   * @return {module:model/CustomerGroupMember} The populated <code>CustomerGroupMember</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('c_familyStatus')) {
        obj['c_familyStatus'] = ApiClient.convertToType(data['c_familyStatus'], 'String');
      }
      if (data.hasOwnProperty('creation_date')) {
        obj['creation_date'] = ApiClient.convertToType(data['creation_date'], 'Date');
      }
      if (data.hasOwnProperty('customer_link')) {
        obj['customer_link'] = ApiClient.convertToType(data['customer_link'], 'String');
      }
      if (data.hasOwnProperty('customer_no')) {
        obj['customer_no'] = ApiClient.convertToType(data['customer_no'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('first_name')) {
        obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
      }
      if (data.hasOwnProperty('last_modified')) {
        obj['last_modified'] = ApiClient.convertToType(data['last_modified'], 'Date');
      }
      if (data.hasOwnProperty('last_name')) {
        obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
      }
      if (data.hasOwnProperty('link')) {
        obj['link'] = ApiClient.convertToType(data['link'], 'String');
      }
      if (data.hasOwnProperty('login')) {
        obj['login'] = ApiClient.convertToType(data['login'], 'String');
      }
    }
    return obj;
  }

  /**
   * A flag indicating whether the customer is enabled and can log in.
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * @member {String} c_familyStatus
   */
  exports.prototype['c_familyStatus'] = undefined;
  /**
   * Returns the value of attribute 'creationDate'.
   * @member {Date} creation_date
   */
  exports.prototype['creation_date'] = undefined;
  /**
   * The link to the customer resource.
   * @member {String} customer_link
   */
  exports.prototype['customer_link'] = undefined;
  /**
   * The customers number (id).
   * @member {String} customer_no
   */
  exports.prototype['customer_no'] = undefined;
  /**
   * The customer's email address.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * The customer's first name.
   * @member {String} first_name
   */
  exports.prototype['first_name'] = undefined;
  /**
   * Returns the value of attribute 'lastModified'.
   * @member {Date} last_modified
   */
  exports.prototype['last_modified'] = undefined;
  /**
   * The customer's last name.
   * @member {String} last_name
   */
  exports.prototype['last_name'] = undefined;
  /**
   * The link to the customer group member resource.
   * @member {String} link
   */
  exports.prototype['link'] = undefined;
  /**
   * The login of the customer.
   * @member {String} login
   */
  exports.prototype['login'] = undefined;



  return exports;
}));


