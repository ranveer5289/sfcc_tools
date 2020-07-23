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
import CustomerListLink from './CustomerListLink';

/**
* The Site model module.
* @module models/Site
* @version 20.8
*/
export default class Site {
    /**
    * Constructs a new <code>Site</code>.
    * Document representing a site.
    * @alias module:models/Site
    * @class
    * @param id {String} The id of this site.
    */

    constructor(id) {
        
        
        this['id'] = id;
        
    }

    /**
    * Constructs a <code>Site</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/Site} obj Optional instance to populate.
    * @return {module:models/Site} The populated <code>Site</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Site();
                        
            
            if (data.hasOwnProperty('cartridges')) {
                obj['cartridges'] = ApiClient.convertToType(data['cartridges'], 'String');
            }
            if (data.hasOwnProperty('customer_list_link')) {
                obj['customer_list_link'] = CustomerListLink.constructFromObject(data['customer_list_link']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], {'String': 'String'});
            }
            if (data.hasOwnProperty('display_name')) {
                obj['display_name'] = ApiClient.convertToType(data['display_name'], {'String': 'String'});
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('in_deletion')) {
                obj['in_deletion'] = ApiClient.convertToType(data['in_deletion'], 'Boolean');
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String');
            }
            if (data.hasOwnProperty('storefront_status')) {
                obj['storefront_status'] = ApiClient.convertToType(data['storefront_status'], 'String');
            }
        }
        return obj;
    }

    /**
    * The cartridge Path of the site
    * @member {String} cartridges
    */
    cartridges = undefined;
    /**
    * @member {module:models/CustomerListLink} customer_list_link
    */
    customer_list_link = undefined;
    /**
    * The description of this site.
    * @member {Object.<String, String>} description
    */
    description = undefined;
    /**
    * The display name entered by the user.
    * @member {Object.<String, String>} display_name
    */
    display_name = undefined;
    /**
    * The id of this site.
    * @member {String} id
    */
    id = undefined;
    /**
    * The deletion status of this site, true if in deletion
    * @member {Boolean} in_deletion
    */
    in_deletion = undefined;
    /**
    * A link directly to the site
    * @member {String} link
    */
    link = undefined;
    /**
    * @member {module:models/Site.StorefrontStatusEnum} storefront_status
    */
    storefront_status = undefined;



    /**
    * Allowed values for the <code>storefront_status</code> property.
    * @enum {String}
    * @readonly
    */
    static StorefrontStatusEnum = {
        /**
         * value: "online"
         * @const
         */
        "online": "online",
        /**
         * value: "maintenance"
         * @const
         */
        "maintenance": "maintenance",
        /**
         * value: "to_be_deleted"
         * @const
         */
        "to_be_deleted": "to_be_deleted",
        /**
         * value: "protected"
         * @const
         */
        "protected": "protected"    };

}
