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
    define(['ApiClient', 'model/Credentials', 'model/CustomerAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Credentials'), require('./CustomerAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.Customer = factory(root.DataApi.ApiClient, root.DataApi.Credentials, root.DataApi.CustomerAddress);
  }
}(this, function(ApiClient, Credentials, CustomerAddress) {
  'use strict';



  /**
   * The Customer model module.
   * @module model/Customer
   * @version 20.8
   */

  /**
   * Constructs a new <code>Customer</code>.
   * Document representing a customer.
   * @alias module:model/Customer
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Customer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Customer} obj Optional instance to populate.
   * @return {module:model/Customer} The populated <code>Customer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('birthday')) {
        obj['birthday'] = ApiClient.convertToType(data['birthday'], 'Date');
      }
      if (data.hasOwnProperty('c_familyStatus')) {
        obj['c_familyStatus'] = ApiClient.convertToType(data['c_familyStatus'], 'String');
      }
      if (data.hasOwnProperty('company_name')) {
        obj['company_name'] = ApiClient.convertToType(data['company_name'], 'String');
      }
      if (data.hasOwnProperty('creation_date')) {
        obj['creation_date'] = ApiClient.convertToType(data['creation_date'], 'Date');
      }
      if (data.hasOwnProperty('credentials')) {
        obj['credentials'] = Credentials.constructFromObject(data['credentials']);
      }
      if (data.hasOwnProperty('customer_id')) {
        obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
      }
      if (data.hasOwnProperty('customer_no')) {
        obj['customer_no'] = ApiClient.convertToType(data['customer_no'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('fax')) {
        obj['fax'] = ApiClient.convertToType(data['fax'], 'String');
      }
      if (data.hasOwnProperty('first_name')) {
        obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
      }
      if (data.hasOwnProperty('gender')) {
        obj['gender'] = ApiClient.convertToType(data['gender'], 'Number');
      }
      if (data.hasOwnProperty('global_party_id')) {
        obj['global_party_id'] = ApiClient.convertToType(data['global_party_id'], 'String');
      }
      if (data.hasOwnProperty('job_title')) {
        obj['job_title'] = ApiClient.convertToType(data['job_title'], 'String');
      }
      if (data.hasOwnProperty('last_login_time')) {
        obj['last_login_time'] = ApiClient.convertToType(data['last_login_time'], 'Date');
      }
      if (data.hasOwnProperty('last_modified')) {
        obj['last_modified'] = ApiClient.convertToType(data['last_modified'], 'Date');
      }
      if (data.hasOwnProperty('last_name')) {
        obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
      }
      if (data.hasOwnProperty('last_visit_time')) {
        obj['last_visit_time'] = ApiClient.convertToType(data['last_visit_time'], 'Date');
      }
      if (data.hasOwnProperty('phone_business')) {
        obj['phone_business'] = ApiClient.convertToType(data['phone_business'], 'String');
      }
      if (data.hasOwnProperty('phone_home')) {
        obj['phone_home'] = ApiClient.convertToType(data['phone_home'], 'String');
      }
      if (data.hasOwnProperty('phone_mobile')) {
        obj['phone_mobile'] = ApiClient.convertToType(data['phone_mobile'], 'String');
      }
      if (data.hasOwnProperty('preferred_locale')) {
        obj['preferred_locale'] = ApiClient.convertToType(data['preferred_locale'], 'String');
      }
      if (data.hasOwnProperty('previous_login_time')) {
        obj['previous_login_time'] = ApiClient.convertToType(data['previous_login_time'], 'Date');
      }
      if (data.hasOwnProperty('previous_visit_time')) {
        obj['previous_visit_time'] = ApiClient.convertToType(data['previous_visit_time'], 'Date');
      }
      if (data.hasOwnProperty('primary_address')) {
        obj['primary_address'] = CustomerAddress.constructFromObject(data['primary_address']);
      }
      if (data.hasOwnProperty('salutation')) {
        obj['salutation'] = ApiClient.convertToType(data['salutation'], 'String');
      }
      if (data.hasOwnProperty('second_name')) {
        obj['second_name'] = ApiClient.convertToType(data['second_name'], 'String');
      }
      if (data.hasOwnProperty('suffix')) {
        obj['suffix'] = ApiClient.convertToType(data['suffix'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
    }
    return obj;
  }

  /**
   * The customer's birthday.
   * @member {Date} birthday
   */
  exports.prototype['birthday'] = undefined;
  /**
   * @member {String} c_familyStatus
   */
  exports.prototype['c_familyStatus'] = undefined;
  /**
   * The customer's company name.
   * @member {String} company_name
   */
  exports.prototype['company_name'] = undefined;
  /**
   * Returns the value of attribute 'creationDate'.
   * @member {Date} creation_date
   */
  exports.prototype['creation_date'] = undefined;
  /**
   * @member {module:model/Credentials} credentials
   */
  exports.prototype['credentials'] = undefined;
  /**
   * The customer's id. Both registered and guest customers have a  customer id.
   * @member {String} customer_id
   */
  exports.prototype['customer_id'] = undefined;
  /**
   * The customer's number.
   * @member {String} customer_no
   */
  exports.prototype['customer_no'] = undefined;
  /**
   * The customer's email address.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * The fax number to use for the customer.  The length is restricted to 32 characters.
   * @member {String} fax
   */
  exports.prototype['fax'] = undefined;
  /**
   * The customer's first name.
   * @member {String} first_name
   */
  exports.prototype['first_name'] = undefined;
  /**
   * The customer's gender.
   * @member {module:model/Customer.GenderEnum} gender
   */
  exports.prototype['gender'] = undefined;
  /**
   * The Global Party ID is set by Customer 360 and identifies a person across multiple systems.
   * @member {String} global_party_id
   */
  exports.prototype['global_party_id'] = undefined;
  /**
   * The customer's job title.
   * @member {String} job_title
   */
  exports.prototype['job_title'] = undefined;
  /**
   * The last login time of the customer.
   * @member {Date} last_login_time
   */
  exports.prototype['last_login_time'] = undefined;
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
   * The last visit time of the customer.
   * @member {Date} last_visit_time
   */
  exports.prototype['last_visit_time'] = undefined;
  /**
   * The customer's business phone number.
   * @member {String} phone_business
   */
  exports.prototype['phone_business'] = undefined;
  /**
   * The customer's home phone number.
   * @member {String} phone_home
   */
  exports.prototype['phone_home'] = undefined;
  /**
   * The customer's mobile phone number.
   * @member {String} phone_mobile
   */
  exports.prototype['phone_mobile'] = undefined;
  /**
   * The customer's preferred locale, formatted with a hyphen. (For example: en-US)  If the request uses an underscore, as with the Java locale format, the stored value is converted to a hyphen.  (For example: en_US is stored as en-US)
   * @member {String} preferred_locale
   */
  exports.prototype['preferred_locale'] = undefined;
  /**
   * The time when the customer logged in previously.
   * @member {Date} previous_login_time
   */
  exports.prototype['previous_login_time'] = undefined;
  /**
   * The time when the customer previously visited the store.
   * @member {Date} previous_visit_time
   */
  exports.prototype['previous_visit_time'] = undefined;
  /**
   * @member {module:model/CustomerAddress} primary_address
   */
  exports.prototype['primary_address'] = undefined;
  /**
   * The customer's salutation.
   * @member {String} salutation
   */
  exports.prototype['salutation'] = undefined;
  /**
   * The customer's second name.
   * @member {String} second_name
   */
  exports.prototype['second_name'] = undefined;
  /**
   * The customer's suffix (for example, \"Jr.\" or \"Sr.\").
   * @member {String} suffix
   */
  exports.prototype['suffix'] = undefined;
  /**
   * The customer's title (for example, \"Mrs\" or \"Mr\").
   * @member {String} title
   */
  exports.prototype['title'] = undefined;


  /**
   * Allowed values for the <code>gender</code> property.
   * @enum {Number}
   * @readonly
   */
  exports.GenderEnum = {
    /**
     * value: 1
     * @const
     */
    "1": 1,
    /**
     * value: 2
     * @const
     */
    "2": 2  };


  return exports;
}));


