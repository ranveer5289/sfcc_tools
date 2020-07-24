# DataApi.SystemObjectDefinitionsApi

All URIs are relative to *http://demo-ocapi.demandware.net/s/-/dw/data/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSystemObjectDefinitionsByIDAttributeDefinitionsByID**](SystemObjectDefinitionsApi.md#deleteSystemObjectDefinitionsByIDAttributeDefinitionsByID) | **DELETE** /system_object_definitions/{object_type}/attribute_definitions/{id} | 
[**deleteSystemObjectDefinitionsByIDAttributeGroupsByID**](SystemObjectDefinitionsApi.md#deleteSystemObjectDefinitionsByIDAttributeGroupsByID) | **DELETE** /system_object_definitions/{object_type}/attribute_groups/{id} | 
[**deleteSystemObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID**](SystemObjectDefinitionsApi.md#deleteSystemObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID) | **DELETE** /system_object_definitions/{object_type}/attribute_groups/{group_id}/attribute_definitions/{def_id} | 
[**getSystemObjectDefinitions**](SystemObjectDefinitionsApi.md#getSystemObjectDefinitions) | **GET** /system_object_definitions | 
[**getSystemObjectDefinitionsByID**](SystemObjectDefinitionsApi.md#getSystemObjectDefinitionsByID) | **GET** /system_object_definitions/{object_type} | 
[**getSystemObjectDefinitionsByIDAttributeDefinitions**](SystemObjectDefinitionsApi.md#getSystemObjectDefinitionsByIDAttributeDefinitions) | **GET** /system_object_definitions/{object_type}/attribute_definitions | 
[**getSystemObjectDefinitionsByIDAttributeDefinitionsByID**](SystemObjectDefinitionsApi.md#getSystemObjectDefinitionsByIDAttributeDefinitionsByID) | **GET** /system_object_definitions/{object_type}/attribute_definitions/{id} | 
[**getSystemObjectDefinitionsByIDAttributeGroups**](SystemObjectDefinitionsApi.md#getSystemObjectDefinitionsByIDAttributeGroups) | **GET** /system_object_definitions/{object_type}/attribute_groups | 
[**getSystemObjectDefinitionsByIDAttributeGroupsByID**](SystemObjectDefinitionsApi.md#getSystemObjectDefinitionsByIDAttributeGroupsByID) | **GET** /system_object_definitions/{object_type}/attribute_groups/{id} | 
[**patchSystemObjectDefinitionsByIDAttributeDefinitionsByID**](SystemObjectDefinitionsApi.md#patchSystemObjectDefinitionsByIDAttributeDefinitionsByID) | **PATCH** /system_object_definitions/{object_type}/attribute_definitions/{id} | 
[**patchSystemObjectDefinitionsByIDAttributeGroupsByID**](SystemObjectDefinitionsApi.md#patchSystemObjectDefinitionsByIDAttributeGroupsByID) | **PATCH** /system_object_definitions/{object_type}/attribute_groups/{id} | 
[**postSystemObjectDefinitionsByIDAttributeDefinitionSearch**](SystemObjectDefinitionsApi.md#postSystemObjectDefinitionsByIDAttributeDefinitionSearch) | **POST** /system_object_definitions/{object_type}/attribute_definition_search | 
[**postSystemObjectDefinitionsByIDAttributeGroupSearch**](SystemObjectDefinitionsApi.md#postSystemObjectDefinitionsByIDAttributeGroupSearch) | **POST** /system_object_definitions/{object_type}/attribute_group_search | 
[**putSystemObjectDefinitionsByIDAttributeDefinitionsByID**](SystemObjectDefinitionsApi.md#putSystemObjectDefinitionsByIDAttributeDefinitionsByID) | **PUT** /system_object_definitions/{object_type}/attribute_definitions/{id} | 
[**putSystemObjectDefinitionsByIDAttributeGroupsByID**](SystemObjectDefinitionsApi.md#putSystemObjectDefinitionsByIDAttributeGroupsByID) | **PUT** /system_object_definitions/{object_type}/attribute_groups/{id} | 
[**putSystemObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID**](SystemObjectDefinitionsApi.md#putSystemObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID) | **PUT** /system_object_definitions/{object_type}/attribute_groups/{group_id}/attribute_definitions/{def_id} | 



## deleteSystemObjectDefinitionsByIDAttributeDefinitionsByID

> deleteSystemObjectDefinitionsByIDAttributeDefinitionsByID(objectType, id)



Deletes the attribute definition by ID

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SystemObjectDefinitionsApi();
var objectType = "objectType_example"; // String | The metadata object that contains these definitions
var id = "id_example"; // String | Attribute definition id to remove
apiInstance.deleteSystemObjectDefinitionsByIDAttributeDefinitionsByID(objectType, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | **String**| The metadata object that contains these definitions | 
 **id** | **String**| Attribute definition id to remove | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteSystemObjectDefinitionsByIDAttributeGroupsByID

> deleteSystemObjectDefinitionsByIDAttributeGroupsByID(objectType, id)



Deletes the attribute group by ID

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SystemObjectDefinitionsApi();
var objectType = "objectType_example"; // String | the object type id that contains this attribute gorup
var id = "id_example"; // String | One attribute group id to remove
apiInstance.deleteSystemObjectDefinitionsByIDAttributeGroupsByID(objectType, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | **String**| the object type id that contains this attribute gorup | 
 **id** | **String**| One attribute group id to remove | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteSystemObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID

> deleteSystemObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID(objectType, groupId, defId)



Un-assign an attribute definition from an attribute group.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SystemObjectDefinitionsApi();
var objectType = "objectType_example"; // String | The ID of the system object that contains the attribute definition and attribute group.
var groupId = "groupId_example"; // String | The ID of the attribute group.
var defId = "defId_example"; // String | The ID of the attribute definition.
apiInstance.deleteSystemObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID(objectType, groupId, defId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | **String**| The ID of the system object that contains the attribute definition and attribute group. | 
 **groupId** | **String**| The ID of the attribute group. | 
 **defId** | **String**| The ID of the attribute definition. | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getSystemObjectDefinitions

> ObjectTypeDefinitions getSystemObjectDefinitions(opts)



Action to get all the system objects with no filtering.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SystemObjectDefinitionsApi();
var opts = {
  'start': 56, // Number | Optional start index for retrieving the items from a given index (default 0).
  'count': 56, // Number | Optional count for retrieving only a subset of the items (default is 25).
  'select': "select_example" // String | The property selector.
};
apiInstance.getSystemObjectDefinitions(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **Number**| Optional start index for retrieving the items from a given index (default 0). | [optional] 
 **count** | **Number**| Optional count for retrieving only a subset of the items (default is 25). | [optional] 
 **select** | **String**| The property selector. | [optional] 

### Return type

[**ObjectTypeDefinitions**](ObjectTypeDefinitions.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getSystemObjectDefinitionsByID

> ObjectTypeDefinition getSystemObjectDefinitionsByID(objectType)



Action to get system object information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SystemObjectDefinitionsApi();
var objectType = "objectType_example"; // String | The id of the object type for the requested system object.
apiInstance.getSystemObjectDefinitionsByID(objectType).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | **String**| The id of the object type for the requested system object. | 

### Return type

[**ObjectTypeDefinition**](ObjectTypeDefinition.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getSystemObjectDefinitionsByIDAttributeDefinitions

> ObjectAttributeDefinitions getSystemObjectDefinitionsByIDAttributeDefinitions(objectType, opts)



Action to get all the attribute definitions with no filtering.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SystemObjectDefinitionsApi();
var objectType = "objectType_example"; // String | 
var opts = {
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getSystemObjectDefinitionsByIDAttributeDefinitions(objectType, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | **String**|  | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 
 **select** | **String**|  | [optional] 

### Return type

[**ObjectAttributeDefinitions**](ObjectAttributeDefinitions.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getSystemObjectDefinitionsByIDAttributeDefinitionsByID

> ObjectAttributeDefinition getSystemObjectDefinitionsByIDAttributeDefinitionsByID(objectType, id, opts)



Action to get attribute definition information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SystemObjectDefinitionsApi();
var objectType = "objectType_example"; // String | The object type id that contains these definitions
var id = "id_example"; // String | The id of the requested attribute definition.
var opts = {
  'select': "select_example", // String | 
  'expand': ["null"] // [String] | 
};
apiInstance.getSystemObjectDefinitionsByIDAttributeDefinitionsByID(objectType, id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | **String**| The object type id that contains these definitions | 
 **id** | **String**| The id of the requested attribute definition. | 
 **select** | **String**|  | [optional] 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**ObjectAttributeDefinition**](ObjectAttributeDefinition.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getSystemObjectDefinitionsByIDAttributeGroups

> ObjectAttributeGroups getSystemObjectDefinitionsByIDAttributeGroups(objectType, opts)



Action to get all the attribute groups with no filtering.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SystemObjectDefinitionsApi();
var objectType = "objectType_example"; // String | 
var opts = {
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example", // String | 
  'expand': ["null"] // [String] | 
};
apiInstance.getSystemObjectDefinitionsByIDAttributeGroups(objectType, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | **String**|  | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 
 **select** | **String**|  | [optional] 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**ObjectAttributeGroups**](ObjectAttributeGroups.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getSystemObjectDefinitionsByIDAttributeGroupsByID

> ObjectAttributeGroup getSystemObjectDefinitionsByIDAttributeGroupsByID(objectType, id, opts)



Action to get attribute group information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SystemObjectDefinitionsApi();
var objectType = "objectType_example"; // String | the object type id that contains this attribute group
var id = "id_example"; // String | The id of the requested attribute group.
var opts = {
  'select': "select_example", // String | 
  'expand': ["null"] // [String] | 
};
apiInstance.getSystemObjectDefinitionsByIDAttributeGroupsByID(objectType, id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | **String**| the object type id that contains this attribute group | 
 **id** | **String**| The id of the requested attribute group. | 
 **select** | **String**|  | [optional] 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**ObjectAttributeGroup**](ObjectAttributeGroup.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## patchSystemObjectDefinitionsByIDAttributeDefinitionsByID

> ObjectAttributeDefinition patchSystemObjectDefinitionsByIDAttributeDefinitionsByID(objectType, id, body, opts)



Updates the attribute definition with the specified information. The request must include the If-Match header, which holds  the last known base-point information. The value of this header is an \&quot;ETag\&quot; representing the attribute definition state. If  the request does not contain an If-Match header with the current server customer \&quot;ETag\&quot;, a 409 (IfMatchRequiredException)  fault is returned. If the If-Match header does not match the current server attribute definition \&quot;ETag\&quot;, a 412 (InvalidIfMatchException)  fault is returned.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SystemObjectDefinitionsApi();
var objectType = "objectType_example"; // String | The object type id that contains these definitions
var id = "id_example"; // String | The id of the requested attribute definition.
var body = new DataApi.ObjectAttributeDefinition(); // ObjectAttributeDefinition | 
var opts = {
  'ifMatch': "ifMatch_example" // String | 
};
apiInstance.patchSystemObjectDefinitionsByIDAttributeDefinitionsByID(objectType, id, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | **String**| The object type id that contains these definitions | 
 **id** | **String**| The id of the requested attribute definition. | 
 **body** | [**ObjectAttributeDefinition**](ObjectAttributeDefinition.md)|  | 
 **ifMatch** | **String**|  | [optional] 

### Return type

[**ObjectAttributeDefinition**](ObjectAttributeDefinition.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchSystemObjectDefinitionsByIDAttributeGroupsByID

> ObjectAttributeGroup patchSystemObjectDefinitionsByIDAttributeGroupsByID(objectType, id, body, opts)



Updates the attribute group with the specified information. The request must include the If-Match header, which holds  the last known base-point information. The value of this header is an \&quot;ETag\&quot; representing the attribute group state. If  the request does not contain an If-Match header with the current server customer \&quot;ETag\&quot;, a 409 (IfMatchRequiredException)  fault is returned. If the If-Match header does not match the current server attribute group \&quot;ETag\&quot;, a 412 (InvalidIfMatchException)  fault is returned.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SystemObjectDefinitionsApi();
var objectType = "objectType_example"; // String | the object type id that contains this attribute gorup
var id = "id_example"; // String | The id of the requested attribute group.
var body = new DataApi.ObjectAttributeGroup(); // ObjectAttributeGroup | 
var opts = {
  'ifMatch': "ifMatch_example" // String | 
};
apiInstance.patchSystemObjectDefinitionsByIDAttributeGroupsByID(objectType, id, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | **String**| the object type id that contains this attribute gorup | 
 **id** | **String**| The id of the requested attribute group. | 
 **body** | [**ObjectAttributeGroup**](ObjectAttributeGroup.md)|  | 
 **ifMatch** | **String**|  | [optional] 

### Return type

[**ObjectAttributeGroup**](ObjectAttributeGroup.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postSystemObjectDefinitionsByIDAttributeDefinitionSearch

> ObjectAttributeDefinitionSearchResult postSystemObjectDefinitionsByIDAttributeDefinitionSearch(objectType, body)



Searches the attribute definitions of the specified system object type.    The query attribute specifies a complex query that can be used to narrow down the search. Attributes are grouped  into different buckets.  These are the list of searchable attributes with their corresponding buckets:   Main:       id - String     display_name* - Localized String     description* - Localized String     key - boolean     mandatory - boolean     searchable - boolean     system - boolean     visible - boolean    Definition version:       localizable - boolean     site_specific - boolean     value_type - one of {string, int, double, text, html, date, image, boolean, money, quantity, datetime, email, password, set_of_string, set_of_int, set_of_double, enum_of_string, enum_of_int}    Group:       group - String     Only attributes in the same bucket can be joined using a disjunction (OR).  For instance, when joining localizable and description above, only a conjunction is allowed (AND), whereas display_name  and description can be joined using a disjunction because they are in the same bucket.  If an attribute  is used in a disjunction (OR) that violates this rule, an exception will be thrown.   * These attributes are not searchable or sortable for built in system attributes.  They work normally for non  system attributes.   Note that only searchable attributes can be used in sorting.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SystemObjectDefinitionsApi();
var objectType = "objectType_example"; // String | The object type id that contains these definitions
var body = new DataApi.SearchRequest(); // SearchRequest | 
apiInstance.postSystemObjectDefinitionsByIDAttributeDefinitionSearch(objectType, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | **String**| The object type id that contains these definitions | 
 **body** | [**SearchRequest**](SearchRequest.md)|  | 

### Return type

[**ObjectAttributeDefinitionSearchResult**](ObjectAttributeDefinitionSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postSystemObjectDefinitionsByIDAttributeGroupSearch

> ObjectAttributeGroupSearchResult postSystemObjectDefinitionsByIDAttributeGroupSearch(objectType, body)



Searches for attribute groups.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    id - String  display_name - Localized&lt;String&gt;  description - Localized&lt;String&gt;  position - Double  internal - Boolean     The output of the query can also be sorted. These are the list of sortable attributes:    id - String  display_name - Localized&lt;String&gt;  description - Localized&lt;String&gt;  position - Double  internal - Boolean  

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SystemObjectDefinitionsApi();
var objectType = "objectType_example"; // String | 
var body = new DataApi.SearchRequest(); // SearchRequest | 
apiInstance.postSystemObjectDefinitionsByIDAttributeGroupSearch(objectType, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | **String**|  | 
 **body** | [**SearchRequest**](SearchRequest.md)|  | 

### Return type

[**ObjectAttributeGroupSearchResult**](ObjectAttributeGroupSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putSystemObjectDefinitionsByIDAttributeDefinitionsByID

> ObjectAttributeDefinition putSystemObjectDefinitionsByIDAttributeDefinitionsByID(objectType, id, body, opts)



Creates a attribute definition using the information provided.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SystemObjectDefinitionsApi();
var objectType = "objectType_example"; // String | The metadata object that contains these definitions
var id = "id_example"; // String | The id of the attribute definition to create.
var body = new DataApi.ObjectAttributeDefinition(); // ObjectAttributeDefinition | 
var opts = {
  'xDwValidateExisting': true // Boolean | 
};
apiInstance.putSystemObjectDefinitionsByIDAttributeDefinitionsByID(objectType, id, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | **String**| The metadata object that contains these definitions | 
 **id** | **String**| The id of the attribute definition to create. | 
 **body** | [**ObjectAttributeDefinition**](ObjectAttributeDefinition.md)|  | 
 **xDwValidateExisting** | **Boolean**|  | [optional] 

### Return type

[**ObjectAttributeDefinition**](ObjectAttributeDefinition.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putSystemObjectDefinitionsByIDAttributeGroupsByID

> ObjectAttributeGroup putSystemObjectDefinitionsByIDAttributeGroupsByID(objectType, id, body, opts)



Creates a attribute group using the information provided. If a attribute group with the same unique identifier, it will be deleted and a new one will be created unless the header x-dw-validate-existing&#x3D;true is passed in with the request.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SystemObjectDefinitionsApi();
var objectType = "objectType_example"; // String | the object type id that contains this attribute gorup
var id = "id_example"; // String | The id of the attribute group to create.
var body = new DataApi.ObjectAttributeGroup(); // ObjectAttributeGroup | 
var opts = {
  'xDwValidateExisting': true // Boolean | 
};
apiInstance.putSystemObjectDefinitionsByIDAttributeGroupsByID(objectType, id, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | **String**| the object type id that contains this attribute gorup | 
 **id** | **String**| The id of the attribute group to create. | 
 **body** | [**ObjectAttributeGroup**](ObjectAttributeGroup.md)|  | 
 **xDwValidateExisting** | **Boolean**|  | [optional] 

### Return type

[**ObjectAttributeGroup**](ObjectAttributeGroup.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putSystemObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID

> putSystemObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID(objectType, groupId, defId)



Assign an attribute definition to an attribute group.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SystemObjectDefinitionsApi();
var objectType = "objectType_example"; // String | The ID of the system object that contains the attribute definition and attribute group.
var groupId = "groupId_example"; // String | The ID of the attribute group.
var defId = "defId_example"; // String | The ID of the attribute definition.
apiInstance.putSystemObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID(objectType, groupId, defId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | **String**| The ID of the system object that contains the attribute definition and attribute group. | 
 **groupId** | **String**| The ID of the attribute group. | 
 **defId** | **String**| The ID of the attribute definition. | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

