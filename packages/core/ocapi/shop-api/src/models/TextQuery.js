/**
 * Shop API
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
* The TextQuery model module.
* @module models/TextQuery
* @version 20.8
*/
export default class TextQuery {
    /**
    * Constructs a new <code>TextQuery</code>.
    * A text query is used to match some text (i.e. a search phrase possibly consisting of multiple terms) against one or  multiple fields. In case multiple fields are provided, the phrase conceptually forms a logical OR over the fields. In  this case, the terms of the phrase basically have to match within the text, that would result in concatenating all  given fields.  
    * @alias module:models/TextQuery
    * @class
    * @param fields {Array.<String>} The document fields the search phrase has to match against.
    * @param searchPhrase {String} A search phrase, which may consist of multiple terms.
    */

    constructor(fields, searchPhrase) {
        
        
        this['fields'] = fields;
        this['search_phrase'] = searchPhrase;
        
    }

    /**
    * Constructs a <code>TextQuery</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/TextQuery} obj Optional instance to populate.
    * @return {module:models/TextQuery} The populated <code>TextQuery</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TextQuery();
                        
            
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], ['String']);
            }
            if (data.hasOwnProperty('search_phrase')) {
                obj['search_phrase'] = ApiClient.convertToType(data['search_phrase'], 'String');
            }
        }
        return obj;
    }

    /**
    * The document fields the search phrase has to match against.
    * @member {Array.<String>} fields
    */
    fields = undefined;
    /**
    * A search phrase, which may consist of multiple terms.
    * @member {String} search_phrase
    */
    search_phrase = undefined;




}