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
import AbTest from './AbTest';
import Query from './Query';
import ResultPage from './ResultPage';
import Sort from './Sort';

/**
* The AbTestSearchResult model module.
* @module models/AbTestSearchResult
* @version 20.8
*/
export default class AbTestSearchResult {
    /**
    * Constructs a new <code>AbTestSearchResult</code>.
    * Request document containing a search response for A/B test
    * @alias module:models/AbTestSearchResult
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>AbTestSearchResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/AbTestSearchResult} obj Optional instance to populate.
    * @return {module:models/AbTestSearchResult} The populated <code>AbTestSearchResult</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AbTestSearchResult();
                        
            
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Object]);
            }
            if (data.hasOwnProperty('db_start_record_')) {
                obj['db_start_record_'] = ApiClient.convertToType(data['db_start_record_'], 'Number');
            }
            if (data.hasOwnProperty('expand')) {
                obj['expand'] = ApiClient.convertToType(data['expand'], ['String']);
            }
            if (data.hasOwnProperty('hits')) {
                obj['hits'] = ApiClient.convertToType(data['hits'], [AbTest]);
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ResultPage.constructFromObject(data['next']);
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = ResultPage.constructFromObject(data['previous']);
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = Query.constructFromObject(data['query']);
            }
            if (data.hasOwnProperty('select')) {
                obj['select'] = ApiClient.convertToType(data['select'], 'String');
            }
            if (data.hasOwnProperty('sorts')) {
                obj['sorts'] = ApiClient.convertToType(data['sorts'], [Sort]);
            }
            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }

    /**
    * The number of returned documents.
    * @member {Number} count
    */
    count = undefined;
    /**
    * @member {Array.<Object>} data
    */
    data = undefined;
    /**
    * @member {Number} db_start_record_
    */
    db_start_record_ = undefined;
    /**
    * @member {Array.<String>} expand
    */
    expand = undefined;
    /**
    * The search hits returned as an ordered list
    * @member {Array.<module:models/AbTest>} hits
    */
    hits = undefined;
    /**
    * @member {module:models/ResultPage} next
    */
    next = undefined;
    /**
    * @member {module:models/ResultPage} previous
    */
    previous = undefined;
    /**
    * @member {module:models/Query} query
    */
    query = undefined;
    /**
    * The fields that you want to select.
    * @member {String} select
    */
    select = undefined;
    /**
    * @member {Array.<module:models/Sort>} sorts
    */
    sorts = undefined;
    /**
    * The zero-based index of the first search hit to include in the result.
    * @member {Number} start
    */
    start = undefined;
    /**
    * The total number of documents.
    * @member {Number} total
    */
    total = undefined;




}