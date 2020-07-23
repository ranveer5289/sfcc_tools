/**
 * Data API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 20.8
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The CustomerAddress model module.
* @module models/CustomerAddress
* @version 20.8
*/
export default class CustomerAddress {
    /**
    * Constructs a new <code>CustomerAddress</code>.
    * Document representing a customer address.
    * @alias module:models/CustomerAddress
    * @class
    * @param addressId {String} The customer address id.
    * @param countryCode {module:models/CustomerAddress.CountryCodeEnum} The customer's two-character country code per ISO 3166-1 alpha-2.
    * @param lastName {String} The customer's last name.
    */

    constructor(addressId, countryCode, lastName) {
        
        
        this['address_id'] = addressId;
        this['country_code'] = countryCode;
        this['last_name'] = lastName;
        
    }

    /**
    * Constructs a <code>CustomerAddress</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/CustomerAddress} obj Optional instance to populate.
    * @return {module:models/CustomerAddress} The populated <code>CustomerAddress</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerAddress();
                        
            
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
            if (data.hasOwnProperty('etag')) {
                obj['etag'] = ApiClient.convertToType(data['etag'], 'String');
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
    * The customer's first address.
    * @member {String} address1
    */
    address1 = undefined;
    /**
    * The customer's second address value.
    * @member {String} address2
    */
    address2 = undefined;
    /**
    * The customer address id.
    * @member {String} address_id
    */
    address_id = undefined;
    /**
    * The customer's city.
    * @member {String} city
    */
    city = undefined;
    /**
    * The customer's company name.
    * @member {String} company_name
    */
    company_name = undefined;
    /**
    * The customer's two-character country code per ISO 3166-1 alpha-2.
    * @member {module:models/CustomerAddress.CountryCodeEnum} country_code
    */
    country_code = undefined;
    /**
    * Returns the value of attribute 'creationDate'.
    * @member {Date} creation_date
    */
    creation_date = undefined;
    /**
    * The generated eTag representing the state of the customer address.
    * @member {String} etag
    */
    etag = undefined;
    /**
    * The customer's first name.
    * @member {String} first_name
    */
    first_name = undefined;
    /**
    * The concatenation of the customer's first, middle, and last names and its suffix.
    * @member {String} full_name
    */
    full_name = undefined;
    /**
    * The customer's job title.
    * @member {String} job_title
    */
    job_title = undefined;
    /**
    * Returns the value of attribute 'lastModified'.
    * @member {Date} last_modified
    */
    last_modified = undefined;
    /**
    * The customer's last name.
    * @member {String} last_name
    */
    last_name = undefined;
    /**
    * The customer's phone number.
    * @member {String} phone
    */
    phone = undefined;
    /**
    * The customer's post box.
    * @member {String} post_box
    */
    post_box = undefined;
    /**
    * The customer's postal code.
    * @member {String} postal_code
    */
    postal_code = undefined;
    /**
    * The customer's salutation.
    * @member {String} salutation
    */
    salutation = undefined;
    /**
    * The customer's second name.
    * @member {String} second_name
    */
    second_name = undefined;
    /**
    * The customer's state.
    * @member {String} state_code
    */
    state_code = undefined;
    /**
    * The customer's suffix.
    * @member {String} suffix
    */
    suffix = undefined;
    /**
    * The customer's suite.
    * @member {String} suite
    */
    suite = undefined;
    /**
    * The customer's title.
    * @member {String} title
    */
    title = undefined;



    /**
    * Allowed values for the <code>country_code</code> property.
    * @enum {String}
    * @readonly
    */
    static CountryCodeEnum = {
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
        "GB": "GB"    };

}