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
import PromotionAssignmentInformation from './PromotionAssignmentInformation';
import Tag from './Tag';

/**
* The Promotion model module.
* @module models/Promotion
* @version 20.8
*/
export default class Promotion {
    /**
    * Constructs a new <code>Promotion</code>.
    * Document representing a promotion. Unless otherwise stated, attributes of this document are not supported when using  the Open Commerce API to update multiple promotions at once.
    * @alias module:models/Promotion
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Promotion</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/Promotion} obj Optional instance to populate.
    * @return {module:models/Promotion} The populated <code>Promotion</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Promotion();
                        
            
            if (data.hasOwnProperty('archived')) {
                obj['archived'] = ApiClient.convertToType(data['archived'], 'Boolean');
            }
            if (data.hasOwnProperty('assignment_information')) {
                obj['assignment_information'] = PromotionAssignmentInformation.constructFromObject(data['assignment_information']);
            }
            if (data.hasOwnProperty('callout_msg')) {
                obj['callout_msg'] = ApiClient.convertToType(data['callout_msg'], {'String': MarkupText});
            }
            if (data.hasOwnProperty('creation_date')) {
                obj['creation_date'] = ApiClient.convertToType(data['creation_date'], 'Date');
            }
            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('disable_globally_excluded')) {
                obj['disable_globally_excluded'] = ApiClient.convertToType(data['disable_globally_excluded'], 'Boolean');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('exclusivity')) {
                obj['exclusivity'] = ApiClient.convertToType(data['exclusivity'], 'String');
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
            if (data.hasOwnProperty('promotion_class')) {
                obj['promotion_class'] = ApiClient.convertToType(data['promotion_class'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [Tag]);
            }
        }
        return obj;
    }

    /**
    * Determines whether or not this promotion is archived. This attribute is allowed to be updated when using the Open  Commerce API to update multiple promotions at once.
    * @member {Boolean} archived
    */
    archived = undefined;
    /**
    * @member {module:models/PromotionAssignmentInformation} assignment_information
    */
    assignment_information = undefined;
    /**
    * The localized callout message of the promotion.
    * @member {Object.<String, module:models/MarkupText>} callout_msg
    */
    callout_msg = undefined;
    /**
    * Returns the value of attribute 'creationDate'.
    * @member {Date} creation_date
    */
    creation_date = undefined;
    /**
    * The ISO 4217 mnemonic code of the currency this promotion is restricted to. If not populated, then there is no  currency restriction on the promotion.
    * @member {String} currency_code
    */
    currency_code = undefined;
    /**
    * Determines whether or not this promotion ignores the global product exclusions for promotions.
    * @member {Boolean} disable_globally_excluded
    */
    disable_globally_excluded = undefined;
    /**
    * Determines whether or not this promotion is enabled. This attribute is allowed to be updated when using the Open  Commerce API to update multiple promotions at once.
    * @member {Boolean} enabled
    */
    enabled = undefined;
    /**
    * Determines if the promotion can be combined with other promotions of the same promotion class or if it cannot be  combined with any other promotions. This attribute is allowed to be updated when using the Open Commerce API to  update multiple promotions at once.
    * @member {module:models/Promotion.ExclusivityEnum} exclusivity
    */
    exclusivity = undefined;
    /**
    * The id for the promotion.
    * @member {String} id
    */
    id = undefined;
    /**
    * Returns the value of attribute 'lastModified'.
    * @member {Date} last_modified
    */
    last_modified = undefined;
    /**
    * A URL that is used to get the details of this promotion.
    * @member {String} link
    */
    link = undefined;
    /**
    * The user supplied name of this promotion, which can be localized
    * @member {Object.<String, String>} name
    */
    name = undefined;
    /**
    * The class of the promotion. If the promotion class is modified, then the promotion rule and all of its values,  such as whether or not to disable global product exclusions, will be reset.
    * @member {module:models/Promotion.PromotionClassEnum} promotion_class
    */
    promotion_class = undefined;
    /**
    * Returns the list of tags assigned to this promotion. If used to set the tags on a promotion, the promotion will  only have the tags passed in the input. Any existing tags will be removed.
    * @member {Array.<module:models/Tag>} tags
    */
    tags = undefined;



    /**
    * Allowed values for the <code>exclusivity</code> property.
    * @enum {String}
    * @readonly
    */
    static ExclusivityEnum = {
        /**
         * value: "no"
         * @const
         */
        "no": "no",
        /**
         * value: "class"
         * @const
         */
        "class": "class",
        /**
         * value: "global"
         * @const
         */
        "global": "global"    };
    /**
    * Allowed values for the <code>promotion_class</code> property.
    * @enum {String}
    * @readonly
    */
    static PromotionClassEnum = {
        /**
         * value: "product"
         * @const
         */
        "product": "product",
        /**
         * value: "shipping"
         * @const
         */
        "shipping": "shipping",
        /**
         * value: "order"
         * @const
         */
        "order": "order"    };

}
