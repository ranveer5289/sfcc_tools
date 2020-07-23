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
import MarkupText from './MarkupText';
import MediaFile from './MediaFile';

/**
* The ContentAsset model module.
* @module models/ContentAsset
* @version 20.8
*/
export default class ContentAsset {
    /**
    * Constructs a new <code>ContentAsset</code>.
    * Document representing a content asset.
    * @alias module:models/ContentAsset
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ContentAsset</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/ContentAsset} obj Optional instance to populate.
    * @return {module:models/ContentAsset} The populated <code>ContentAsset</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentAsset();
                        
            
            if (data.hasOwnProperty('c_Year')) {
                obj['c_Year'] = ApiClient.convertToType(data['c_Year'], 'String');
            }
            if (data.hasOwnProperty('c_body')) {
                obj['c_body'] = ApiClient.convertToType(data['c_body'], {'String': MarkupText});
            }
            if (data.hasOwnProperty('c_customCSSFile')) {
                obj['c_customCSSFile'] = MediaFile.constructFromObject(data['c_customCSSFile']);
            }
            if (data.hasOwnProperty('classification_folder_id')) {
                obj['classification_folder_id'] = ApiClient.convertToType(data['classification_folder_id'], 'String');
            }
            if (data.hasOwnProperty('classification_folder_link')) {
                obj['classification_folder_link'] = ApiClient.convertToType(data['classification_folder_link'], 'String');
            }
            if (data.hasOwnProperty('creation_date')) {
                obj['creation_date'] = ApiClient.convertToType(data['creation_date'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], {'String': 'String'});
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('last_modified')) {
                obj['last_modified'] = ApiClient.convertToType(data['last_modified'], 'Date');
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], {'String': 'String'});
            }
            if (data.hasOwnProperty('online')) {
                obj['online'] = ApiClient.convertToType(data['online'], {'String': 'Boolean'});
            }
            if (data.hasOwnProperty('page_description')) {
                obj['page_description'] = ApiClient.convertToType(data['page_description'], {'String': 'String'});
            }
            if (data.hasOwnProperty('page_keywords')) {
                obj['page_keywords'] = ApiClient.convertToType(data['page_keywords'], {'String': 'String'});
            }
            if (data.hasOwnProperty('page_title')) {
                obj['page_title'] = ApiClient.convertToType(data['page_title'], {'String': 'String'});
            }
            if (data.hasOwnProperty('page_url')) {
                obj['page_url'] = ApiClient.convertToType(data['page_url'], {'String': 'String'});
            }
            if (data.hasOwnProperty('searchable')) {
                obj['searchable'] = ApiClient.convertToType(data['searchable'], {'String': 'Boolean'});
            }
            if (data.hasOwnProperty('site_map_change_frequency')) {
                obj['site_map_change_frequency'] = ApiClient.convertToType(data['site_map_change_frequency'], {'String': 'String'});
            }
            if (data.hasOwnProperty('site_map_included')) {
                obj['site_map_included'] = ApiClient.convertToType(data['site_map_included'], {'String': 'Number'});
            }
            if (data.hasOwnProperty('site_map_priority')) {
                obj['site_map_priority'] = ApiClient.convertToType(data['site_map_priority'], {'String': 'Number'});
            }
            if (data.hasOwnProperty('template')) {
                obj['template'] = ApiClient.convertToType(data['template'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} c_Year
    */
    c_Year = undefined;
    /**
    * @member {Object.<String, module:models/MarkupText>} c_body
    */
    c_body = undefined;
    /**
    * @member {module:models/MediaFile} c_customCSSFile
    */
    c_customCSSFile = undefined;
    /**
    * The ID of the classification folder. It is only part of the response, if the assignment from  this content asset to the folder is marked as 'default'. The property is read-only. To  set the classification folder just create/update an assignment between this content asset and  a folder and mark it as 'default'. See details in  /libraries/{library_id}/folder_assignments/{content_id}/{folder_id} resource.
    * @member {String} classification_folder_id
    */
    classification_folder_id = undefined;
    /**
    * The link to the classification folder. It is only part of the response, if the assignment from  this content asset to the folder is marked as 'default'. The property is read-only. To  set the classification folder just create/update an assignment between this content asset and  a folder and mark it as 'default'. See details in  /libraries/{library_id}/folder_assignments/{content_id}/{folder_id} resource.
    * @member {String} classification_folder_link
    */
    classification_folder_link = undefined;
    /**
    * Returns the value of attribute 'creationDate'.
    * @member {Date} creation_date
    */
    creation_date = undefined;
    /**
    * The localized content asset description.
    * @member {Object.<String, String>} description
    */
    description = undefined;
    /**
    * The id of the content asset.
    * @member {String} id
    */
    id = undefined;
    /**
    * Returns the value of attribute 'lastModified'.
    * @member {Date} last_modified
    */
    last_modified = undefined;
    /**
    * The link to the content asset resource.
    * @member {String} link
    */
    link = undefined;
    /**
    * The localized content asset name.
    * @member {Object.<String, String>} name
    */
    name = undefined;
    /**
    * Is the asset online?
    * @member {Object.<String, Boolean>} online
    */
    online = undefined;
    /**
    * The localized content asset page description.
    * @member {Object.<String, String>} page_description
    */
    page_description = undefined;
    /**
    * The localized content asset page keywords.
    * @member {Object.<String, String>} page_keywords
    */
    page_keywords = undefined;
    /**
    * The localized content asset page title.
    * @member {Object.<String, String>} page_title
    */
    page_title = undefined;
    /**
    * The localized content asset page url.
    * @member {Object.<String, String>} page_url
    */
    page_url = undefined;
    /**
    * Is the asset searchable?
    * @member {Object.<String, Boolean>} searchable
    */
    searchable = undefined;
    /**
    * The content assets change frequency needed for the sitemap creation  (always, hourly, daily, weekly, monthly, yearly, never).
    * @member {Object.<String, module:models/ContentAsset.InnerEnum>} site_map_change_frequency
    */
    site_map_change_frequency = undefined;
    /**
    * The status if the content asset is included into the sitemap (either 0 or  1).
    * @member {Object.<String, module:models/ContentAsset.InnerEnum>} site_map_included
    */
    site_map_included = undefined;
    /**
    * The content assets priority needed for the sitemap creation (0.0 for no  priority defined).
    * @member {Object.<String, Number>} site_map_priority
    */
    site_map_priority = undefined;
    /**
    * The rendering template.
    * @member {String} template
    */
    template = undefined;



    /**
    * Allowed values for the <code>inner</code> property.
    * @enum {String}
    * @readonly
    */
    static InnerEnum = {
        /**
         * value: "always"
         * @const
         */
        "always": "always",
        /**
         * value: "hourly"
         * @const
         */
        "hourly": "hourly",
        /**
         * value: "daily"
         * @const
         */
        "daily": "daily",
        /**
         * value: "weekly"
         * @const
         */
        "weekly": "weekly",
        /**
         * value: "monthly"
         * @const
         */
        "monthly": "monthly",
        /**
         * value: "yearly"
         * @const
         */
        "yearly": "yearly",
        /**
         * value: "never"
         * @const
         */
        "never": "never"    };
    /**
    * Allowed values for the <code>inner</code> property.
    * @enum {Number}
    * @readonly
    */
    static InnerEnum = {
        /**
         * value: "1"
         * @const
         */
        "1": "1",
        /**
         * value: "0"
         * @const
         */
        "0": "0"    };

}
