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
* The ShippingAddressUpdateRequest model module.
* @module models/ShippingAddressUpdateRequest
* @version 20.8
*/
export default class ShippingAddressUpdateRequest {
    /**
    * Constructs a new <code>ShippingAddressUpdateRequest</code>.
    * Request body to update the order shipping address.
    * @alias module:models/ShippingAddressUpdateRequest
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ShippingAddressUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/ShippingAddressUpdateRequest} obj Optional instance to populate.
    * @return {module:models/ShippingAddressUpdateRequest} The populated <code>ShippingAddressUpdateRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShippingAddressUpdateRequest();
                        
            
            if (data.hasOwnProperty('address1')) {
                obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
            }
            if (data.hasOwnProperty('address2')) {
                obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
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
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('full_name')) {
                obj['full_name'] = ApiClient.convertToType(data['full_name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('job_title')) {
                obj['job_title'] = ApiClient.convertToType(data['job_title'], 'String');
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
    * @member {String} address1
    */
    address1 = undefined;
    /**
    * @member {String} address2
    */
    address2 = undefined;
    /**
    * @member {String} city
    */
    city = undefined;
    /**
    * @member {String} company_name
    */
    company_name = undefined;
    /**
    * @member {String} country_code
    */
    country_code = undefined;
    /**
    * @member {String} first_name
    */
    first_name = undefined;
    /**
    * @member {String} full_name
    */
    full_name = undefined;
    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {String} job_title
    */
    job_title = undefined;
    /**
    * @member {String} last_name
    */
    last_name = undefined;
    /**
    * @member {String} phone
    */
    phone = undefined;
    /**
    * @member {String} post_box
    */
    post_box = undefined;
    /**
    * @member {String} postal_code
    */
    postal_code = undefined;
    /**
    * @member {String} salutation
    */
    salutation = undefined;
    /**
    * @member {String} second_name
    */
    second_name = undefined;
    /**
    * @member {String} state_code
    */
    state_code = undefined;
    /**
    * @member {String} suffix
    */
    suffix = undefined;
    /**
    * @member {String} suite
    */
    suite = undefined;
    /**
    * @member {String} title
    */
    title = undefined;




}