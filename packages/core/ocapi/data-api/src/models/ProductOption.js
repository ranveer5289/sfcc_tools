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
import MediaFile from './MediaFile';
import ProductOptionValue from './ProductOptionValue';

/**
* The ProductOption model module.
* @module models/ProductOption
* @version 20.8
*/
export default class ProductOption {
    /**
    * Constructs a new <code>ProductOption</code>.
    * Document representing a product option
    * @alias module:models/ProductOption
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ProductOption</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/ProductOption} obj Optional instance to populate.
    * @return {module:models/ProductOption} The populated <code>ProductOption</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductOption();
                        
            
            if (data.hasOwnProperty('custom_name')) {
                obj['custom_name'] = ApiClient.convertToType(data['custom_name'], {'String': 'String'});
            }
            if (data.hasOwnProperty('default_product_option_value')) {
                obj['default_product_option_value'] = ApiClient.convertToType(data['default_product_option_value'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], {'String': 'String'});
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = MediaFile.constructFromObject(data['image']);
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('selected_option_value')) {
                obj['selected_option_value'] = ApiClient.convertToType(data['selected_option_value'], 'String');
            }
            if (data.hasOwnProperty('shared')) {
                obj['shared'] = ApiClient.convertToType(data['shared'], 'Boolean');
            }
            if (data.hasOwnProperty('sorting_mode')) {
                obj['sorting_mode'] = ApiClient.convertToType(data['sorting_mode'], 'String');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [ProductOptionValue]);
            }
        }
        return obj;
    }

    /**
    * The localized custom name of the product option.
    * @member {Object.<String, String>} custom_name
    */
    custom_name = undefined;
    /**
    * The default product option value.
    * @member {String} default_product_option_value
    */
    default_product_option_value = undefined;
    /**
    * The localized description of the product option.
    * @member {Object.<String, String>} description
    */
    description = undefined;
    /**
    * The object attribute definition id which is also the identifier for the product option.
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {module:models/MediaFile} image
    */
    image = undefined;
    /**
    * The URL link to the product option.
    * @member {String} link
    */
    link = undefined;
    /**
    * The name of the object attribute definition.
    * @member {String} name
    */
    name = undefined;
    /**
    * The selected option value of the product option.
    * @member {String} selected_option_value
    */
    selected_option_value = undefined;
    /**
    * The flag that indicates if the product option is shared or local.
    * @member {Boolean} shared
    */
    shared = undefined;
    /**
    * The sorting mode for the product option values.
    * @member {module:models/ProductOption.SortingModeEnum} sorting_mode
    */
    sorting_mode = undefined;
    /**
    * The sorted array of values of the product option.
    * @member {Array.<module:models/ProductOptionValue>} values
    */
    values = undefined;



    /**
    * Allowed values for the <code>sorting_mode</code> property.
    * @enum {String}
    * @readonly
    */
    static SortingModeEnum = {
        /**
         * value: "byexplicitorder"
         * @const
         */
        "byexplicitorder": "byexplicitorder",
        /**
         * value: "byoptionprice"
         * @const
         */
        "byoptionprice": "byoptionprice"    };

}