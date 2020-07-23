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

import ApiClient from "../ApiClient";
import ObjectAttributeDefinition from '../models/ObjectAttributeDefinition';
import ObjectAttributeDefinitionSearchResult from '../models/ObjectAttributeDefinitionSearchResult';
import ObjectAttributeDefinitions from '../models/ObjectAttributeDefinitions';
import ObjectAttributeGroup from '../models/ObjectAttributeGroup';
import ObjectAttributeGroupSearchResult from '../models/ObjectAttributeGroupSearchResult';
import ObjectAttributeGroups from '../models/ObjectAttributeGroups';
import ObjectTypeDefinition from '../models/ObjectTypeDefinition';
import ObjectTypeDefinitions from '../models/ObjectTypeDefinitions';
import SearchRequest from '../models/SearchRequest';

/**
* SystemObjectDefinitions service.
* @module api/SystemObjectDefinitionsApi
* @version 20.8
*/
export default class SystemObjectDefinitionsApi {

    /**
    * Constructs a new SystemObjectDefinitionsApi. 
    * @alias module:api/SystemObjectDefinitionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Deletes the attribute definition by ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteSystemObjectDefinitionsByIDAttributeDefinitionsByIDWithHttpInfo(objectType, id) {
      let postBody = null;

      let pathParams = {
        'object_type': objectType,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/system_object_definitions/{object_type}/attribute_definitions/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Deletes the attribute definition by ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteSystemObjectDefinitionsByIDAttributeDefinitionsByID(objectType, id) {
      return this.deleteSystemObjectDefinitionsByIDAttributeDefinitionsByIDWithHttpInfo(objectType, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes the attribute group by ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteSystemObjectDefinitionsByIDAttributeGroupsByIDWithHttpInfo(objectType, id) {
      let postBody = null;

      let pathParams = {
        'object_type': objectType,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/system_object_definitions/{object_type}/attribute_groups/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Deletes the attribute group by ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteSystemObjectDefinitionsByIDAttributeGroupsByID(objectType, id) {
      return this.deleteSystemObjectDefinitionsByIDAttributeGroupsByIDWithHttpInfo(objectType, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Un-assign an attribute definition from an attribute group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteSystemObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByIDWithHttpInfo(objectType, groupId, defId) {
      let postBody = null;

      let pathParams = {
        'object_type': objectType,
        'group_id': groupId,
        'def_id': defId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/system_object_definitions/{object_type}/attribute_groups/{group_id}/attribute_definitions/{def_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Un-assign an attribute definition from an attribute group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteSystemObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID(objectType, groupId, defId) {
      return this.deleteSystemObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByIDWithHttpInfo(objectType, groupId, defId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Action to get all the system objects with no filtering.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ObjectTypeDefinitions} and HTTP response
     */
    getSystemObjectDefinitionsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'start': opts['start'],
        'count': opts['count'],
        'select': opts['select']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = ObjectTypeDefinitions;

      return this.apiClient.callApi(
        '/system_object_definitions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Action to get all the system objects with no filtering.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ObjectTypeDefinitions}
     */
    getSystemObjectDefinitions(opts) {
      return this.getSystemObjectDefinitionsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Action to get system object information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ObjectTypeDefinition} and HTTP response
     */
    getSystemObjectDefinitionsByIDWithHttpInfo(objectType) {
      let postBody = null;

      let pathParams = {
        'object_type': objectType
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = ObjectTypeDefinition;

      return this.apiClient.callApi(
        '/system_object_definitions/{object_type}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Action to get system object information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ObjectTypeDefinition}
     */
    getSystemObjectDefinitionsByID(objectType) {
      return this.getSystemObjectDefinitionsByIDWithHttpInfo(objectType)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Action to get all the attribute definitions with no filtering.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ObjectAttributeDefinitions} and HTTP response
     */
    getSystemObjectDefinitionsByIDAttributeDefinitionsWithHttpInfo(objectType, opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'object_type': objectType
      };
      let queryParams = {
        'start': opts['start'],
        'count': opts['count'],
        'select': opts['select']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = ObjectAttributeDefinitions;

      return this.apiClient.callApi(
        '/system_object_definitions/{object_type}/attribute_definitions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Action to get all the attribute definitions with no filtering.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ObjectAttributeDefinitions}
     */
    getSystemObjectDefinitionsByIDAttributeDefinitions(objectType, opts) {
      return this.getSystemObjectDefinitionsByIDAttributeDefinitionsWithHttpInfo(objectType, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Action to get attribute definition information.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ObjectAttributeDefinition} and HTTP response
     */
    getSystemObjectDefinitionsByIDAttributeDefinitionsByIDWithHttpInfo(objectType, id, opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'object_type': objectType,
        'id': id
      };
      let queryParams = {
        'select': opts['select'],
        'expand': this.apiClient.buildCollectionParam(opts['expand'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = ObjectAttributeDefinition;

      return this.apiClient.callApi(
        '/system_object_definitions/{object_type}/attribute_definitions/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Action to get attribute definition information.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ObjectAttributeDefinition}
     */
    getSystemObjectDefinitionsByIDAttributeDefinitionsByID(objectType, id, opts) {
      return this.getSystemObjectDefinitionsByIDAttributeDefinitionsByIDWithHttpInfo(objectType, id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Action to get all the attribute groups with no filtering.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ObjectAttributeGroups} and HTTP response
     */
    getSystemObjectDefinitionsByIDAttributeGroupsWithHttpInfo(objectType, opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'object_type': objectType
      };
      let queryParams = {
        'start': opts['start'],
        'count': opts['count'],
        'select': opts['select'],
        'expand': this.apiClient.buildCollectionParam(opts['expand'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = ObjectAttributeGroups;

      return this.apiClient.callApi(
        '/system_object_definitions/{object_type}/attribute_groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Action to get all the attribute groups with no filtering.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ObjectAttributeGroups}
     */
    getSystemObjectDefinitionsByIDAttributeGroups(objectType, opts) {
      return this.getSystemObjectDefinitionsByIDAttributeGroupsWithHttpInfo(objectType, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Action to get attribute group information.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ObjectAttributeGroup} and HTTP response
     */
    getSystemObjectDefinitionsByIDAttributeGroupsByIDWithHttpInfo(objectType, id, opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'object_type': objectType,
        'id': id
      };
      let queryParams = {
        'select': opts['select'],
        'expand': this.apiClient.buildCollectionParam(opts['expand'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = ObjectAttributeGroup;

      return this.apiClient.callApi(
        '/system_object_definitions/{object_type}/attribute_groups/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Action to get attribute group information.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ObjectAttributeGroup}
     */
    getSystemObjectDefinitionsByIDAttributeGroupsByID(objectType, id, opts) {
      return this.getSystemObjectDefinitionsByIDAttributeGroupsByIDWithHttpInfo(objectType, id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates the attribute definition with the specified information. The request must include the If-Match header, which holds  the last known base-point information. The value of this header is an \&quot;ETag\&quot; representing the attribute definition state. If  the request does not contain an If-Match header with the current server customer \&quot;ETag\&quot;, a 409 (IfMatchRequiredException)  fault is returned. If the If-Match header does not match the current server attribute definition \&quot;ETag\&quot;, a 412 (InvalidIfMatchException)  fault is returned.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ObjectAttributeDefinition} and HTTP response
     */
    patchSystemObjectDefinitionsByIDAttributeDefinitionsByIDWithHttpInfo(body, objectType, id, opts) {
      opts = opts || {};
      let postBody = body;

      let pathParams = {
        'object_type': objectType,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'If-Match': opts['ifMatch']
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = ['application/json', 'text/xml', 'application/xml'];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = ObjectAttributeDefinition;

      return this.apiClient.callApi(
        '/system_object_definitions/{object_type}/attribute_definitions/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Updates the attribute definition with the specified information. The request must include the If-Match header, which holds  the last known base-point information. The value of this header is an \&quot;ETag\&quot; representing the attribute definition state. If  the request does not contain an If-Match header with the current server customer \&quot;ETag\&quot;, a 409 (IfMatchRequiredException)  fault is returned. If the If-Match header does not match the current server attribute definition \&quot;ETag\&quot;, a 412 (InvalidIfMatchException)  fault is returned.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ObjectAttributeDefinition}
     */
    patchSystemObjectDefinitionsByIDAttributeDefinitionsByID(body, objectType, id, opts) {
      return this.patchSystemObjectDefinitionsByIDAttributeDefinitionsByIDWithHttpInfo(body, objectType, id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates the attribute group with the specified information. The request must include the If-Match header, which holds  the last known base-point information. The value of this header is an \&quot;ETag\&quot; representing the attribute group state. If  the request does not contain an If-Match header with the current server customer \&quot;ETag\&quot;, a 409 (IfMatchRequiredException)  fault is returned. If the If-Match header does not match the current server attribute group \&quot;ETag\&quot;, a 412 (InvalidIfMatchException)  fault is returned.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ObjectAttributeGroup} and HTTP response
     */
    patchSystemObjectDefinitionsByIDAttributeGroupsByIDWithHttpInfo(body, objectType, id, opts) {
      opts = opts || {};
      let postBody = body;

      let pathParams = {
        'object_type': objectType,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'If-Match': opts['ifMatch']
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = ['application/json', 'text/xml', 'application/xml'];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = ObjectAttributeGroup;

      return this.apiClient.callApi(
        '/system_object_definitions/{object_type}/attribute_groups/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Updates the attribute group with the specified information. The request must include the If-Match header, which holds  the last known base-point information. The value of this header is an \&quot;ETag\&quot; representing the attribute group state. If  the request does not contain an If-Match header with the current server customer \&quot;ETag\&quot;, a 409 (IfMatchRequiredException)  fault is returned. If the If-Match header does not match the current server attribute group \&quot;ETag\&quot;, a 412 (InvalidIfMatchException)  fault is returned.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ObjectAttributeGroup}
     */
    patchSystemObjectDefinitionsByIDAttributeGroupsByID(body, objectType, id, opts) {
      return this.patchSystemObjectDefinitionsByIDAttributeGroupsByIDWithHttpInfo(body, objectType, id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Searches the attribute definitions of the specified system object type.    The query attribute specifies a complex query that can be used to narrow down the search. Attributes are grouped  into different buckets.  These are the list of searchable attributes with their corresponding buckets:   Main:       id - String     display_name* - Localized String     description* - Localized String     key - boolean     mandatory - boolean     searchable - boolean     system - boolean     visible - boolean    Definition version:       localizable - boolean     site_specific - boolean     value_type - one of {string, int, double, text, html, date, image, boolean, money, quantity, datetime, email, password, set_of_string, set_of_int, set_of_double, enum_of_string, enum_of_int}    Group:       group - String     Only attributes in the same bucket can be joined using a disjunction (OR).  For instance, when joining localizable and description above, only a conjunction is allowed (AND), whereas display_name  and description can be joined using a disjunction because they are in the same bucket.  If an attribute  is used in a disjunction (OR) that violates this rule, an exception will be thrown.   * These attributes are not searchable or sortable for built in system attributes.  They work normally for non  system attributes.   Note that only searchable attributes can be used in sorting.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ObjectAttributeDefinitionSearchResult} and HTTP response
     */
    postSystemObjectDefinitionsByIDAttributeDefinitionSearchWithHttpInfo(body, objectType) {
      let postBody = body;

      let pathParams = {
        'object_type': objectType
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = ['application/json', 'text/xml', 'application/xml'];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = ObjectAttributeDefinitionSearchResult;

      return this.apiClient.callApi(
        '/system_object_definitions/{object_type}/attribute_definition_search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Searches the attribute definitions of the specified system object type.    The query attribute specifies a complex query that can be used to narrow down the search. Attributes are grouped  into different buckets.  These are the list of searchable attributes with their corresponding buckets:   Main:       id - String     display_name* - Localized String     description* - Localized String     key - boolean     mandatory - boolean     searchable - boolean     system - boolean     visible - boolean    Definition version:       localizable - boolean     site_specific - boolean     value_type - one of {string, int, double, text, html, date, image, boolean, money, quantity, datetime, email, password, set_of_string, set_of_int, set_of_double, enum_of_string, enum_of_int}    Group:       group - String     Only attributes in the same bucket can be joined using a disjunction (OR).  For instance, when joining localizable and description above, only a conjunction is allowed (AND), whereas display_name  and description can be joined using a disjunction because they are in the same bucket.  If an attribute  is used in a disjunction (OR) that violates this rule, an exception will be thrown.   * These attributes are not searchable or sortable for built in system attributes.  They work normally for non  system attributes.   Note that only searchable attributes can be used in sorting.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ObjectAttributeDefinitionSearchResult}
     */
    postSystemObjectDefinitionsByIDAttributeDefinitionSearch(body, objectType) {
      return this.postSystemObjectDefinitionsByIDAttributeDefinitionSearchWithHttpInfo(body, objectType)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Searches for attribute groups.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    id - String  display_name - Localized&lt;String&gt;  description - Localized&lt;String&gt;  position - Double  internal - Boolean     The output of the query can also be sorted. These are the list of sortable attributes:    id - String  display_name - Localized&lt;String&gt;  description - Localized&lt;String&gt;  position - Double  internal - Boolean  
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ObjectAttributeGroupSearchResult} and HTTP response
     */
    postSystemObjectDefinitionsByIDAttributeGroupSearchWithHttpInfo(body, objectType) {
      let postBody = body;

      let pathParams = {
        'object_type': objectType
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = ['application/json', 'text/xml', 'application/xml'];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = ObjectAttributeGroupSearchResult;

      return this.apiClient.callApi(
        '/system_object_definitions/{object_type}/attribute_group_search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Searches for attribute groups.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    id - String  display_name - Localized&lt;String&gt;  description - Localized&lt;String&gt;  position - Double  internal - Boolean     The output of the query can also be sorted. These are the list of sortable attributes:    id - String  display_name - Localized&lt;String&gt;  description - Localized&lt;String&gt;  position - Double  internal - Boolean  
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ObjectAttributeGroupSearchResult}
     */
    postSystemObjectDefinitionsByIDAttributeGroupSearch(body, objectType) {
      return this.postSystemObjectDefinitionsByIDAttributeGroupSearchWithHttpInfo(body, objectType)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creates a attribute definition using the information provided.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ObjectAttributeDefinition} and HTTP response
     */
    putSystemObjectDefinitionsByIDAttributeDefinitionsByIDWithHttpInfo(body, objectType, id, opts) {
      opts = opts || {};
      let postBody = body;

      let pathParams = {
        'object_type': objectType,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'x-dw-validate-existing': opts['xDwValidateExisting']
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = ['application/json', 'text/xml', 'application/xml'];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = ObjectAttributeDefinition;

      return this.apiClient.callApi(
        '/system_object_definitions/{object_type}/attribute_definitions/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Creates a attribute definition using the information provided.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ObjectAttributeDefinition}
     */
    putSystemObjectDefinitionsByIDAttributeDefinitionsByID(body, objectType, id, opts) {
      return this.putSystemObjectDefinitionsByIDAttributeDefinitionsByIDWithHttpInfo(body, objectType, id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creates a attribute group using the information provided. If a attribute group with the same unique identifier, it will be deleted and a new one will be created unless the header x-dw-validate-existing&#x3D;true is passed in with the request.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ObjectAttributeGroup} and HTTP response
     */
    putSystemObjectDefinitionsByIDAttributeGroupsByIDWithHttpInfo(body, objectType, id, opts) {
      opts = opts || {};
      let postBody = body;

      let pathParams = {
        'object_type': objectType,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'x-dw-validate-existing': opts['xDwValidateExisting']
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = ['application/json', 'text/xml', 'application/xml'];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = ObjectAttributeGroup;

      return this.apiClient.callApi(
        '/system_object_definitions/{object_type}/attribute_groups/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Creates a attribute group using the information provided. If a attribute group with the same unique identifier, it will be deleted and a new one will be created unless the header x-dw-validate-existing&#x3D;true is passed in with the request.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ObjectAttributeGroup}
     */
    putSystemObjectDefinitionsByIDAttributeGroupsByID(body, objectType, id, opts) {
      return this.putSystemObjectDefinitionsByIDAttributeGroupsByIDWithHttpInfo(body, objectType, id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Assign an attribute definition to an attribute group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    putSystemObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByIDWithHttpInfo(objectType, groupId, defId) {
      let postBody = null;

      let pathParams = {
        'object_type': objectType,
        'group_id': groupId,
        'def_id': defId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/system_object_definitions/{object_type}/attribute_groups/{group_id}/attribute_definitions/{def_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Assign an attribute definition to an attribute group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    putSystemObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID(objectType, groupId, defId) {
      return this.putSystemObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByIDWithHttpInfo(objectType, groupId, defId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}
