# DataApi.CustomObjectDefinitionsApi

All URIs are relative to *http://demo-ocapi.demandware.net/s/-/dw/data/20.4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCustomObjectDefinitionsByIDAttributeDefinitionsByID**](CustomObjectDefinitionsApi.md#deleteCustomObjectDefinitionsByIDAttributeDefinitionsByID) | **DELETE** /custom_object_definitions/{object_type}/attribute_definitions/{id} | 
[**deleteCustomObjectDefinitionsByIDAttributeGroupsByID**](CustomObjectDefinitionsApi.md#deleteCustomObjectDefinitionsByIDAttributeGroupsByID) | **DELETE** /custom_object_definitions/{object_type}/attribute_groups/{id} | 
[**deleteCustomObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID**](CustomObjectDefinitionsApi.md#deleteCustomObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID) | **DELETE** /custom_object_definitions/{object_type}/attribute_groups/{group_id}/attribute_definitions/{def_id} | 
[**getCustomObjectDefinitionsByIDAttributeDefinitions**](CustomObjectDefinitionsApi.md#getCustomObjectDefinitionsByIDAttributeDefinitions) | **GET** /custom_object_definitions/{object_type}/attribute_definitions | 
[**getCustomObjectDefinitionsByIDAttributeDefinitionsByID**](CustomObjectDefinitionsApi.md#getCustomObjectDefinitionsByIDAttributeDefinitionsByID) | **GET** /custom_object_definitions/{object_type}/attribute_definitions/{id} | 
[**getCustomObjectDefinitionsByIDAttributeGroups**](CustomObjectDefinitionsApi.md#getCustomObjectDefinitionsByIDAttributeGroups) | **GET** /custom_object_definitions/{object_type}/attribute_groups | 
[**getCustomObjectDefinitionsByIDAttributeGroupsByID**](CustomObjectDefinitionsApi.md#getCustomObjectDefinitionsByIDAttributeGroupsByID) | **GET** /custom_object_definitions/{object_type}/attribute_groups/{id} | 
[**patchCustomObjectDefinitionsByIDAttributeDefinitionsByID**](CustomObjectDefinitionsApi.md#patchCustomObjectDefinitionsByIDAttributeDefinitionsByID) | **PATCH** /custom_object_definitions/{object_type}/attribute_definitions/{id} | 
[**patchCustomObjectDefinitionsByIDAttributeGroupsByID**](CustomObjectDefinitionsApi.md#patchCustomObjectDefinitionsByIDAttributeGroupsByID) | **PATCH** /custom_object_definitions/{object_type}/attribute_groups/{id} | 
[**postCustomObjectDefinitionsByIDAttributeDefinitionSearch**](CustomObjectDefinitionsApi.md#postCustomObjectDefinitionsByIDAttributeDefinitionSearch) | **POST** /custom_object_definitions/{object_type}/attribute_definition_search | 
[**postCustomObjectDefinitionsByIDAttributeGroupSearch**](CustomObjectDefinitionsApi.md#postCustomObjectDefinitionsByIDAttributeGroupSearch) | **POST** /custom_object_definitions/{object_type}/attribute_group_search | 
[**putCustomObjectDefinitionsByIDAttributeDefinitionsByID**](CustomObjectDefinitionsApi.md#putCustomObjectDefinitionsByIDAttributeDefinitionsByID) | **PUT** /custom_object_definitions/{object_type}/attribute_definitions/{id} | 
[**putCustomObjectDefinitionsByIDAttributeGroupsByID**](CustomObjectDefinitionsApi.md#putCustomObjectDefinitionsByIDAttributeGroupsByID) | **PUT** /custom_object_definitions/{object_type}/attribute_groups/{id} | 
[**putCustomObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID**](CustomObjectDefinitionsApi.md#putCustomObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID) | **PUT** /custom_object_definitions/{object_type}/attribute_groups/{group_id}/attribute_definitions/{def_id} | 



## deleteCustomObjectDefinitionsByIDAttributeDefinitionsByID

> deleteCustomObjectDefinitionsByIDAttributeDefinitionsByID(objectType, id)



Deletes the attribute definition by ID

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CustomObjectDefinitionsApi();
var objectType = "objectType_example"; // String | The metadata object that contains these definitions
var id = "id_example"; // String | Attribute definition id to remove
apiInstance.deleteCustomObjectDefinitionsByIDAttributeDefinitionsByID(objectType, id).then(function() {
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


## deleteCustomObjectDefinitionsByIDAttributeGroupsByID

> deleteCustomObjectDefinitionsByIDAttributeGroupsByID(objectType, id)



Deletes the attribute group by ID

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CustomObjectDefinitionsApi();
var objectType = "objectType_example"; // String | the object type id that contains this attribute gorup
var id = "id_example"; // String | One attribute group id to remove
apiInstance.deleteCustomObjectDefinitionsByIDAttributeGroupsByID(objectType, id).then(function() {
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


## deleteCustomObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID

> deleteCustomObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID(objectType, groupId, defId)



Un-assign an attribute definition from an attribute group.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CustomObjectDefinitionsApi();
var objectType = "objectType_example"; // String | The ID of the custom object that contains the attribute definition and attribute group.
var groupId = "groupId_example"; // String | The ID of the attribute group.
var defId = "defId_example"; // String | The ID of the attribute definition.
apiInstance.deleteCustomObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID(objectType, groupId, defId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | **String**| The ID of the custom object that contains the attribute definition and attribute group. | 
 **groupId** | **String**| The ID of the attribute group. | 
 **defId** | **String**| The ID of the attribute definition. | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCustomObjectDefinitionsByIDAttributeDefinitions

> ObjectAttributeDefinitions getCustomObjectDefinitionsByIDAttributeDefinitions(objectType, opts)



Action to get all the attribute definitions with no filtering.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CustomObjectDefinitionsApi();
var objectType = "objectType_example"; // String | 
var opts = {
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getCustomObjectDefinitionsByIDAttributeDefinitions(objectType, opts).then(function(data) {
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


## getCustomObjectDefinitionsByIDAttributeDefinitionsByID

> ObjectAttributeDefinition getCustomObjectDefinitionsByIDAttributeDefinitionsByID(objectType, id, opts)



Action to get attribute definition information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CustomObjectDefinitionsApi();
var objectType = "objectType_example"; // String | The object type id that contains these definitions
var id = "id_example"; // String | The id of the requested attribute definition.
var opts = {
  'expand': ["null"], // [String] | 
  'select': "select_example" // String | 
};
apiInstance.getCustomObjectDefinitionsByIDAttributeDefinitionsByID(objectType, id, opts).then(function(data) {
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
 **expand** | [**[String]**](String.md)|  | [optional] 
 **select** | **String**|  | [optional] 

### Return type

[**ObjectAttributeDefinition**](ObjectAttributeDefinition.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCustomObjectDefinitionsByIDAttributeGroups

> ObjectAttributeGroups getCustomObjectDefinitionsByIDAttributeGroups(objectType, opts)



Action to get all the attribute groups with no filtering.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CustomObjectDefinitionsApi();
var objectType = "objectType_example"; // String | 
var opts = {
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example", // String | 
  'expand': ["null"] // [String] | 
};
apiInstance.getCustomObjectDefinitionsByIDAttributeGroups(objectType, opts).then(function(data) {
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


## getCustomObjectDefinitionsByIDAttributeGroupsByID

> ObjectAttributeGroup getCustomObjectDefinitionsByIDAttributeGroupsByID(objectType, id, opts)



Action to get attribute group information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CustomObjectDefinitionsApi();
var objectType = "objectType_example"; // String | the object type id that contains this attribute gorup
var id = "id_example"; // String | The id of the requested attribute group.
var opts = {
  'select': "select_example", // String | 
  'expand': ["null"] // [String] | 
};
apiInstance.getCustomObjectDefinitionsByIDAttributeGroupsByID(objectType, id, opts).then(function(data) {
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
 **select** | **String**|  | [optional] 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**ObjectAttributeGroup**](ObjectAttributeGroup.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## patchCustomObjectDefinitionsByIDAttributeDefinitionsByID

> ObjectAttributeDefinition patchCustomObjectDefinitionsByIDAttributeDefinitionsByID(objectType, id, body, opts)



Updates the attribute definition with the specified information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CustomObjectDefinitionsApi();
var objectType = "objectType_example"; // String | The object type id that contains these definitions
var id = "id_example"; // String | The id of the requested attribute definition.
var body = new DataApi.ObjectAttributeDefinition(); // ObjectAttributeDefinition | 
var opts = {
  'ifMatch': "ifMatch_example" // String | 
};
apiInstance.patchCustomObjectDefinitionsByIDAttributeDefinitionsByID(objectType, id, body, opts).then(function(data) {
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


## patchCustomObjectDefinitionsByIDAttributeGroupsByID

> ObjectAttributeGroup patchCustomObjectDefinitionsByIDAttributeGroupsByID(objectType, id, body, opts)



Updates the attribute group with the specified information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CustomObjectDefinitionsApi();
var objectType = "objectType_example"; // String | the object type id that contains this attribute gorup
var id = "id_example"; // String | The id of the requested attribute group.
var body = new DataApi.ObjectAttributeGroup(); // ObjectAttributeGroup | 
var opts = {
  'ifMatch': "ifMatch_example" // String | 
};
apiInstance.patchCustomObjectDefinitionsByIDAttributeGroupsByID(objectType, id, body, opts).then(function(data) {
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


## postCustomObjectDefinitionsByIDAttributeDefinitionSearch

> ObjectAttributeDefinitionSearchResult postCustomObjectDefinitionsByIDAttributeDefinitionSearch(objectType, body)



Searches the attribute definitions of the specified custom object type.  The query attribute specifies a complex query that can be used to narrow down the search. Attributes are grouped  into different buckets.  These are the list of searchable attributes with their corresponding buckets:   Main:       id - String     display_name* - Localized String     description* - Localized String     key - boolean     mandatory - boolean     searchable - boolean     system - boolean     visible - boolean    Definition version:       localizable - boolean     site_specific - boolean     value_type - one of {string, int, double, text, html, date, image, boolean, money, quantity, datetime, email, password, set_of_string, set_of_int, set_of_double, enum_of_string, enum_of_int, unknown}     Only attributes in the same bucket can be joined using a disjunction (OR).  For instance, when joining localizable and description above, only a conjunction is allowed (AND), whereas display_name  and description can be joined using a disjunction because they are in the same bucket.  If an attribute  is used in a disjunction (OR) that violates this rule, an exception will be thrown.    Additionally, attribute definitions can also be searched by attribute group.  group - String     These attributes are not searchable or sortable for built in system attributes.  They work normally for non  system attributes.   Note that only searchable attributes can be used in sorting.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CustomObjectDefinitionsApi();
var objectType = "objectType_example"; // String | The type of object
var body = new DataApi.SearchRequest(); // SearchRequest | 
apiInstance.postCustomObjectDefinitionsByIDAttributeDefinitionSearch(objectType, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | **String**| The type of object | 
 **body** | [**SearchRequest**](SearchRequest.md)|  | 

### Return type

[**ObjectAttributeDefinitionSearchResult**](ObjectAttributeDefinitionSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postCustomObjectDefinitionsByIDAttributeGroupSearch

> ObjectAttributeGroupSearchResult postCustomObjectDefinitionsByIDAttributeGroupSearch(objectType, body)



Searches for attribute groups.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    id - String  display_name - Localized &lt;String&gt;  description - Localized &lt;String&gt;  position - Double  internal - Boolean     The output of the query can also be sorted. These are the list of sortable attributes:    id - String  display_name - Localized &lt;String&gt;  description - Localized &lt;String&gt;  position - Double  internal - Boolean  

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CustomObjectDefinitionsApi();
var objectType = "objectType_example"; // String | 
var body = new DataApi.SearchRequest(); // SearchRequest | 
apiInstance.postCustomObjectDefinitionsByIDAttributeGroupSearch(objectType, body).then(function(data) {
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


## putCustomObjectDefinitionsByIDAttributeDefinitionsByID

> ObjectAttributeDefinition putCustomObjectDefinitionsByIDAttributeDefinitionsByID(objectType, id, body)



Creates a attribute definition using the information provided.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CustomObjectDefinitionsApi();
var objectType = "objectType_example"; // String | The metadata object that contains these definitions
var id = "id_example"; // String | The id of the attribute definition to create.
var body = new DataApi.ObjectAttributeDefinition(); // ObjectAttributeDefinition | 
apiInstance.putCustomObjectDefinitionsByIDAttributeDefinitionsByID(objectType, id, body).then(function(data) {
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

### Return type

[**ObjectAttributeDefinition**](ObjectAttributeDefinition.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putCustomObjectDefinitionsByIDAttributeGroupsByID

> ObjectAttributeGroup putCustomObjectDefinitionsByIDAttributeGroupsByID(objectType, id, body)



Creates a attribute group using the information provided.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CustomObjectDefinitionsApi();
var objectType = "objectType_example"; // String | the object type id that contains this attribute gorup
var id = "id_example"; // String | The id of the attribute group to create.
var body = new DataApi.ObjectAttributeGroup(); // ObjectAttributeGroup | 
apiInstance.putCustomObjectDefinitionsByIDAttributeGroupsByID(objectType, id, body).then(function(data) {
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

### Return type

[**ObjectAttributeGroup**](ObjectAttributeGroup.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putCustomObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID

> putCustomObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID(objectType, groupId, defId)



Assign an attribute definition to an attribute group.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CustomObjectDefinitionsApi();
var objectType = "objectType_example"; // String | The ID of the custom object that contains the attribute definition and attribute group.
var groupId = "groupId_example"; // String | The ID of the attribute group.
var defId = "defId_example"; // String | The ID of the attribute definition.
apiInstance.putCustomObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID(objectType, groupId, defId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | **String**| The ID of the custom object that contains the attribute definition and attribute group. | 
 **groupId** | **String**| The ID of the attribute group. | 
 **defId** | **String**| The ID of the attribute definition. | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

