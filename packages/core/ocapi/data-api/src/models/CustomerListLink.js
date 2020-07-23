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
* The CustomerListLink model module.
* @module models/CustomerListLink
* @version 20.8
*/
export default class CustomerListLink {
    /**
    * Constructs a new <code>CustomerListLink</code>.
    * Document representing a link to a customer list.
    * @alias module:models/CustomerListLink
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>CustomerListLink</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/CustomerListLink} obj Optional instance to populate.
    * @return {module:models/CustomerListLink} The populated <code>CustomerListLink</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerListLink();
                        
            
            if (data.hasOwnProperty('customer_list_id')) {
                obj['customer_list_id'] = ApiClient.convertToType(data['customer_list_id'], 'String');
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], {'String': 'String'});
            }
        }
        return obj;
    }

    /**
    * The customerlist id.
    * @member {String} customer_list_id
    */
    customer_list_id = undefined;
    /**
    * The target of the link.
    * @member {String} link
    */
    link = undefined;
    /**
    * The link title.
    * @member {Object.<String, String>} title
    */
    title = undefined;




}