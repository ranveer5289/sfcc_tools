# DataApi.CustomObjectDefinitionsApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/data/20.8*

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

<a name="deleteCustomObjectDefinitionsByIDAttributeDefinitionsByID"></a>
# **deleteCustomObjectDefinitionsByIDAttributeDefinitionsByID**
> deleteCustomObjectDefinitionsByIDAttributeDefinitionsByID(objectType, id)



Deletes the attribute definition by ID

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomObjectDefinitionsApi();
let objectType = "objectType_example"; // String | The metadata object that contains these definitions
let id = "id_example"; // String | Attribute definition id to remove

apiInstance.deleteCustomObjectDefinitionsByIDAttributeDefinitionsByID(objectType, id).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

<a name="deleteCustomObjectDefinitionsByIDAttributeGroupsByID"></a>
# **deleteCustomObjectDefinitionsByIDAttributeGroupsByID**
> deleteCustomObjectDefinitionsByIDAttributeGroupsByID(objectType, id)



Deletes the attribute group by ID

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomObjectDefinitionsApi();
let objectType = "objectType_example"; // String | the object type id that contains this attribute gorup
let id = "id_example"; // String | One attribute group id to remove

apiInstance.deleteCustomObjectDefinitionsByIDAttributeGroupsByID(objectType, id).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

<a name="deleteCustomObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID"></a>
# **deleteCustomObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID**
> deleteCustomObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID(objectType, groupId, defId)



Un-assign an attribute definition from an attribute group.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomObjectDefinitionsApi();
let objectType = "objectType_example"; // String | The ID of the custom object that contains the attribute definition and attribute group.
let groupId = "groupId_example"; // String | The ID of the attribute group.
let defId = "defId_example"; // String | The ID of the attribute definition.

apiInstance.deleteCustomObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID(objectType, groupId, defId).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

<a name="getCustomObjectDefinitionsByIDAttributeDefinitions"></a>
# **getCustomObjectDefinitionsByIDAttributeDefinitions**
> ObjectAttributeDefinitions getCustomObjectDefinitionsByIDAttributeDefinitions(objectType, opts)



Action to get all the attribute definitions with no filtering.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomObjectDefinitionsApi();
let objectType = "objectType_example"; // String | 
let opts = { 
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getCustomObjectDefinitionsByIDAttributeDefinitions(objectType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getCustomObjectDefinitionsByIDAttributeDefinitionsByID"></a>
# **getCustomObjectDefinitionsByIDAttributeDefinitionsByID**
> ObjectAttributeDefinition getCustomObjectDefinitionsByIDAttributeDefinitionsByID(objectType, id, opts)



Action to get attribute definition information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomObjectDefinitionsApi();
let objectType = "objectType_example"; // String | The object type id that contains these definitions
let id = "id_example"; // String | The id of the requested attribute definition.
let opts = { 
  'expand': ["expand_example"], // [String] | 
  'select': "select_example" // String | 
};
apiInstance.getCustomObjectDefinitionsByIDAttributeDefinitionsByID(objectType, id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getCustomObjectDefinitionsByIDAttributeGroups"></a>
# **getCustomObjectDefinitionsByIDAttributeGroups**
> ObjectAttributeGroups getCustomObjectDefinitionsByIDAttributeGroups(objectType, opts)



Action to get all the attribute groups with no filtering.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomObjectDefinitionsApi();
let objectType = "objectType_example"; // String | 
let opts = { 
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example", // String | 
  'expand': ["expand_example"] // [String] | 
};
apiInstance.getCustomObjectDefinitionsByIDAttributeGroups(objectType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getCustomObjectDefinitionsByIDAttributeGroupsByID"></a>
# **getCustomObjectDefinitionsByIDAttributeGroupsByID**
> ObjectAttributeGroup getCustomObjectDefinitionsByIDAttributeGroupsByID(objectType, id, opts)



Action to get attribute group information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomObjectDefinitionsApi();
let objectType = "objectType_example"; // String | the object type id that contains this attribute gorup
let id = "id_example"; // String | The id of the requested attribute group.
let opts = { 
  'select': "select_example", // String | 
  'expand': ["expand_example"] // [String] | 
};
apiInstance.getCustomObjectDefinitionsByIDAttributeGroupsByID(objectType, id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="patchCustomObjectDefinitionsByIDAttributeDefinitionsByID"></a>
# **patchCustomObjectDefinitionsByIDAttributeDefinitionsByID**
> ObjectAttributeDefinition patchCustomObjectDefinitionsByIDAttributeDefinitionsByID(bodyobjectTypeid, opts)



Updates the attribute definition with the specified information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomObjectDefinitionsApi();
let body = new DataApi.ObjectAttributeDefinition(); // ObjectAttributeDefinition | 
let objectType = "objectType_example"; // String | The object type id that contains these definitions
let id = "id_example"; // String | The id of the requested attribute definition.
let opts = { 
  'ifMatch': "ifMatch_example" // String | 
};
apiInstance.patchCustomObjectDefinitionsByIDAttributeDefinitionsByID(bodyobjectTypeid, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ObjectAttributeDefinition**](ObjectAttributeDefinition.md)|  | 
 **objectType** | **String**| The object type id that contains these definitions | 
 **id** | **String**| The id of the requested attribute definition. | 
 **ifMatch** | **String**|  | [optional] 

### Return type

[**ObjectAttributeDefinition**](ObjectAttributeDefinition.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchCustomObjectDefinitionsByIDAttributeGroupsByID"></a>
# **patchCustomObjectDefinitionsByIDAttributeGroupsByID**
> ObjectAttributeGroup patchCustomObjectDefinitionsByIDAttributeGroupsByID(bodyobjectTypeid, opts)



Updates the attribute group with the specified information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomObjectDefinitionsApi();
let body = new DataApi.ObjectAttributeGroup(); // ObjectAttributeGroup | 
let objectType = "objectType_example"; // String | the object type id that contains this attribute gorup
let id = "id_example"; // String | The id of the requested attribute group.
let opts = { 
  'ifMatch': "ifMatch_example" // String | 
};
apiInstance.patchCustomObjectDefinitionsByIDAttributeGroupsByID(bodyobjectTypeid, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ObjectAttributeGroup**](ObjectAttributeGroup.md)|  | 
 **objectType** | **String**| the object type id that contains this attribute gorup | 
 **id** | **String**| The id of the requested attribute group. | 
 **ifMatch** | **String**|  | [optional] 

### Return type

[**ObjectAttributeGroup**](ObjectAttributeGroup.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postCustomObjectDefinitionsByIDAttributeDefinitionSearch"></a>
# **postCustomObjectDefinitionsByIDAttributeDefinitionSearch**
> ObjectAttributeDefinitionSearchResult postCustomObjectDefinitionsByIDAttributeDefinitionSearch(bodyobjectType)



Searches the attribute definitions of the specified custom object type.  The query attribute specifies a complex query that can be used to narrow down the search. Attributes are grouped  into different buckets.  These are the list of searchable attributes with their corresponding buckets:   Main:       id - String     display_name* - Localized String     description* - Localized String     key - boolean     mandatory - boolean     searchable - boolean     system - boolean     visible - boolean    Definition version:       localizable - boolean     site_specific - boolean     value_type - one of {string, int, double, text, html, date, image, boolean, money, quantity, datetime, email, password, set_of_string, set_of_int, set_of_double, enum_of_string, enum_of_int, unknown}     Only attributes in the same bucket can be joined using a disjunction (OR).  For instance, when joining localizable and description above, only a conjunction is allowed (AND), whereas display_name  and description can be joined using a disjunction because they are in the same bucket.  If an attribute  is used in a disjunction (OR) that violates this rule, an exception will be thrown.    Additionally, attribute definitions can also be searched by attribute group.  group - String     These attributes are not searchable or sortable for built in system attributes.  They work normally for non  system attributes.   Note that only searchable attributes can be used in sorting.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomObjectDefinitionsApi();
let body = new DataApi.SearchRequest(); // SearchRequest | 
let objectType = "objectType_example"; // String | The type of object

apiInstance.postCustomObjectDefinitionsByIDAttributeDefinitionSearch(bodyobjectType).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchRequest**](SearchRequest.md)|  | 
 **objectType** | **String**| The type of object | 

### Return type

[**ObjectAttributeDefinitionSearchResult**](ObjectAttributeDefinitionSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postCustomObjectDefinitionsByIDAttributeGroupSearch"></a>
# **postCustomObjectDefinitionsByIDAttributeGroupSearch**
> ObjectAttributeGroupSearchResult postCustomObjectDefinitionsByIDAttributeGroupSearch(bodyobjectType)



Searches for attribute groups.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    id - String  display_name - Localized &lt;String&gt;  description - Localized &lt;String&gt;  position - Double  internal - Boolean     The output of the query can also be sorted. These are the list of sortable attributes:    id - String  display_name - Localized &lt;String&gt;  description - Localized &lt;String&gt;  position - Double  internal - Boolean  

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomObjectDefinitionsApi();
let body = new DataApi.SearchRequest(); // SearchRequest | 
let objectType = "objectType_example"; // String | 

apiInstance.postCustomObjectDefinitionsByIDAttributeGroupSearch(bodyobjectType).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchRequest**](SearchRequest.md)|  | 
 **objectType** | **String**|  | 

### Return type

[**ObjectAttributeGroupSearchResult**](ObjectAttributeGroupSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putCustomObjectDefinitionsByIDAttributeDefinitionsByID"></a>
# **putCustomObjectDefinitionsByIDAttributeDefinitionsByID**
> ObjectAttributeDefinition putCustomObjectDefinitionsByIDAttributeDefinitionsByID(bodyobjectTypeid)



Creates a attribute definition using the information provided.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomObjectDefinitionsApi();
let body = new DataApi.ObjectAttributeDefinition(); // ObjectAttributeDefinition | 
let objectType = "objectType_example"; // String | The metadata object that contains these definitions
let id = "id_example"; // String | The id of the attribute definition to create.

apiInstance.putCustomObjectDefinitionsByIDAttributeDefinitionsByID(bodyobjectTypeid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ObjectAttributeDefinition**](ObjectAttributeDefinition.md)|  | 
 **objectType** | **String**| The metadata object that contains these definitions | 
 **id** | **String**| The id of the attribute definition to create. | 

### Return type

[**ObjectAttributeDefinition**](ObjectAttributeDefinition.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putCustomObjectDefinitionsByIDAttributeGroupsByID"></a>
# **putCustomObjectDefinitionsByIDAttributeGroupsByID**
> ObjectAttributeGroup putCustomObjectDefinitionsByIDAttributeGroupsByID(bodyobjectTypeid)



Creates a attribute group using the information provided.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomObjectDefinitionsApi();
let body = new DataApi.ObjectAttributeGroup(); // ObjectAttributeGroup | 
let objectType = "objectType_example"; // String | the object type id that contains this attribute gorup
let id = "id_example"; // String | The id of the attribute group to create.

apiInstance.putCustomObjectDefinitionsByIDAttributeGroupsByID(bodyobjectTypeid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ObjectAttributeGroup**](ObjectAttributeGroup.md)|  | 
 **objectType** | **String**| the object type id that contains this attribute gorup | 
 **id** | **String**| The id of the attribute group to create. | 

### Return type

[**ObjectAttributeGroup**](ObjectAttributeGroup.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putCustomObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID"></a>
# **putCustomObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID**
> putCustomObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID(objectType, groupId, defId)



Assign an attribute definition to an attribute group.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomObjectDefinitionsApi();
let objectType = "objectType_example"; // String | The ID of the custom object that contains the attribute definition and attribute group.
let groupId = "groupId_example"; // String | The ID of the attribute group.
let defId = "defId_example"; // String | The ID of the attribute definition.

apiInstance.putCustomObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID(objectType, groupId, defId).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

