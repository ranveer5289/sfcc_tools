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
import Query from './Query';
import ResultPage from './ResultPage';
import Slot from './Slot';
import Sort from './Sort';

/**
* The SlotSearchResult model module.
* @module models/SlotSearchResult
* @version 20.8
*/
export default class SlotSearchResult {
    /**
    * Constructs a new <code>SlotSearchResult</code>.
    * Document representing a slot search result.
    * @alias module:models/SlotSearchResult
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>SlotSearchResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/SlotSearchResult} obj Optional instance to populate.
    * @return {module:models/SlotSearchResult} The populated <code>SlotSearchResult</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SlotSearchResult();
                        
            
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
                obj['hits'] = ApiClient.convertToType(data['hits'], [Slot]);
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
    * The zero-based index of the record that we want to start with, used to optimize special handling
    * @member {Number} db_start_record_
    */
    db_start_record_ = undefined;
    /**
    * List of expansions to be applied to each search results. Expands are optional
    * @member {Array.<String>} expand
    */
    expand = undefined;
    /**
    * The sorted array of search hits. Can be empty.
    * @member {Array.<module:models/Slot>} hits
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
    * The list of sort clauses configured for the search request. Sort clauses are optional.
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
