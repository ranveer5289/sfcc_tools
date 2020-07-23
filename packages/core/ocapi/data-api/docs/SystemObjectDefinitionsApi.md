# DataApi.SystemObjectDefinitionsApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/data/20.8*

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

<a name="deleteSystemObjectDefinitionsByIDAttributeDefinitionsByID"></a>
# **deleteSystemObjectDefinitionsByIDAttributeDefinitionsByID**
> deleteSystemObjectDefinitionsByIDAttributeDefinitionsByID(objectType, id)



Deletes the attribute definition by ID

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SystemObjectDefinitionsApi();
let objectType = "objectType_example"; // String | The metadata object that contains these definitions
let id = "id_example"; // String | Attribute definition id to remove

apiInstance.deleteSystemObjectDefinitionsByIDAttributeDefinitionsByID(objectType, id).then(() => {
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

<a name="deleteSystemObjectDefinitionsByIDAttributeGroupsByID"></a>
# **deleteSystemObjectDefinitionsByIDAttributeGroupsByID**
> deleteSystemObjectDefinitionsByIDAttributeGroupsByID(objectType, id)



Deletes the attribute group by ID

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SystemObjectDefinitionsApi();
let objectType = "objectType_example"; // String | the object type id that contains this attribute gorup
let id = "id_example"; // String | One attribute group id to remove

apiInstance.deleteSystemObjectDefinitionsByIDAttributeGroupsByID(objectType, id).then(() => {
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

<a name="deleteSystemObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID"></a>
# **deleteSystemObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID**
> deleteSystemObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID(objectType, groupId, defId)



Un-assign an attribute definition from an attribute group.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SystemObjectDefinitionsApi();
let objectType = "objectType_example"; // String | The ID of the system object that contains the attribute definition and attribute group.
let groupId = "groupId_example"; // String | The ID of the attribute group.
let defId = "defId_example"; // String | The ID of the attribute definition.

apiInstance.deleteSystemObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID(objectType, groupId, defId).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

<a name="getSystemObjectDefinitions"></a>
# **getSystemObjectDefinitions**
> ObjectTypeDefinitions getSystemObjectDefinitions(opts)



Action to get all the system objects with no filtering.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SystemObjectDefinitionsApi();
let opts = { 
  'start': 56, // Number | Optional start index for retrieving the items from a given index (default 0).
  'count': 56, // Number | Optional count for retrieving only a subset of the items (default is 25).
  'select': "select_example" // String | The property selector.
};
apiInstance.getSystemObjectDefinitions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getSystemObjectDefinitionsByID"></a>
# **getSystemObjectDefinitionsByID**
> ObjectTypeDefinition getSystemObjectDefinitionsByID(objectType)



Action to get system object information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SystemObjectDefinitionsApi();
let objectType = "objectType_example"; // String | The id of the object type for the requested system object.

apiInstance.getSystemObjectDefinitionsByID(objectType).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getSystemObjectDefinitionsByIDAttributeDefinitions"></a>
# **getSystemObjectDefinitionsByIDAttributeDefinitions**
> ObjectAttributeDefinitions getSystemObjectDefinitionsByIDAttributeDefinitions(objectType, opts)



Action to get all the attribute definitions with no filtering.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SystemObjectDefinitionsApi();
let objectType = "objectType_example"; // String | 
let opts = { 
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getSystemObjectDefinitionsByIDAttributeDefinitions(objectType, opts).then((data) => {
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

<a name="getSystemObjectDefinitionsByIDAttributeDefinitionsByID"></a>
# **getSystemObjectDefinitionsByIDAttributeDefinitionsByID**
> ObjectAttributeDefinition getSystemObjectDefinitionsByIDAttributeDefinitionsByID(objectType, id, opts)



Action to get attribute definition information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SystemObjectDefinitionsApi();
let objectType = "objectType_example"; // String | The object type id that contains these definitions
let id = "id_example"; // String | The id of the requested attribute definition.
let opts = { 
  'select': "select_example", // String | 
  'expand': ["expand_example"] // [String] | 
};
apiInstance.getSystemObjectDefinitionsByIDAttributeDefinitionsByID(objectType, id, opts).then((data) => {
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
 **select** | **String**|  | [optional] 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**ObjectAttributeDefinition**](ObjectAttributeDefinition.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSystemObjectDefinitionsByIDAttributeGroups"></a>
# **getSystemObjectDefinitionsByIDAttributeGroups**
> ObjectAttributeGroups getSystemObjectDefinitionsByIDAttributeGroups(objectType, opts)



Action to get all the attribute groups with no filtering.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SystemObjectDefinitionsApi();
let objectType = "objectType_example"; // String | 
let opts = { 
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example", // String | 
  'expand': ["expand_example"] // [String] | 
};
apiInstance.getSystemObjectDefinitionsByIDAttributeGroups(objectType, opts).then((data) => {
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

<a name="getSystemObjectDefinitionsByIDAttributeGroupsByID"></a>
# **getSystemObjectDefinitionsByIDAttributeGroupsByID**
> ObjectAttributeGroup getSystemObjectDefinitionsByIDAttributeGroupsByID(objectType, id, opts)



Action to get attribute group information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SystemObjectDefinitionsApi();
let objectType = "objectType_example"; // String | the object type id that contains this attribute group
let id = "id_example"; // String | The id of the requested attribute group.
let opts = { 
  'select': "select_example", // String | 
  'expand': ["expand_example"] // [String] | 
};
apiInstance.getSystemObjectDefinitionsByIDAttributeGroupsByID(objectType, id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="patchSystemObjectDefinitionsByIDAttributeDefinitionsByID"></a>
# **patchSystemObjectDefinitionsByIDAttributeDefinitionsByID**
> ObjectAttributeDefinition patchSystemObjectDefinitionsByIDAttributeDefinitionsByID(bodyobjectTypeid, opts)



Updates the attribute definition with the specified information. The request must include the If-Match header, which holds  the last known base-point information. The value of this header is an \&quot;ETag\&quot; representing the attribute definition state. If  the request does not contain an If-Match header with the current server customer \&quot;ETag\&quot;, a 409 (IfMatchRequiredException)  fault is returned. If the If-Match header does not match the current server attribute definition \&quot;ETag\&quot;, a 412 (InvalidIfMatchException)  fault is returned.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SystemObjectDefinitionsApi();
let body = new DataApi.ObjectAttributeDefinition(); // ObjectAttributeDefinition | 
let objectType = "objectType_example"; // String | The object type id that contains these definitions
let id = "id_example"; // String | The id of the requested attribute definition.
let opts = { 
  'ifMatch': "ifMatch_example" // String | 
};
apiInstance.patchSystemObjectDefinitionsByIDAttributeDefinitionsByID(bodyobjectTypeid, opts).then((data) => {
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

<a name="patchSystemObjectDefinitionsByIDAttributeGroupsByID"></a>
# **patchSystemObjectDefinitionsByIDAttributeGroupsByID**
> ObjectAttributeGroup patchSystemObjectDefinitionsByIDAttributeGroupsByID(bodyobjectTypeid, opts)



Updates the attribute group with the specified information. The request must include the If-Match header, which holds  the last known base-point information. The value of this header is an \&quot;ETag\&quot; representing the attribute group state. If  the request does not contain an If-Match header with the current server customer \&quot;ETag\&quot;, a 409 (IfMatchRequiredException)  fault is returned. If the If-Match header does not match the current server attribute group \&quot;ETag\&quot;, a 412 (InvalidIfMatchException)  fault is returned.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SystemObjectDefinitionsApi();
let body = new DataApi.ObjectAttributeGroup(); // ObjectAttributeGroup | 
let objectType = "objectType_example"; // String | the object type id that contains this attribute gorup
let id = "id_example"; // String | The id of the requested attribute group.
let opts = { 
  'ifMatch': "ifMatch_example" // String | 
};
apiInstance.patchSystemObjectDefinitionsByIDAttributeGroupsByID(bodyobjectTypeid, opts).then((data) => {
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

<a name="postSystemObjectDefinitionsByIDAttributeDefinitionSearch"></a>
# **postSystemObjectDefinitionsByIDAttributeDefinitionSearch**
> ObjectAttributeDefinitionSearchResult postSystemObjectDefinitionsByIDAttributeDefinitionSearch(bodyobjectType)



Searches the attribute definitions of the specified system object type.    The query attribute specifies a complex query that can be used to narrow down the search. Attributes are grouped  into different buckets.  These are the list of searchable attributes with their corresponding buckets:   Main:       id - String     display_name* - Localized String     description* - Localized String     key - boolean     mandatory - boolean     searchable - boolean     system - boolean     visible - boolean    Definition version:       localizable - boolean     site_specific - boolean     value_type - one of {string, int, double, text, html, date, image, boolean, money, quantity, datetime, email, password, set_of_string, set_of_int, set_of_double, enum_of_string, enum_of_int}    Group:       group - String     Only attributes in the same bucket can be joined using a disjunction (OR).  For instance, when joining localizable and description above, only a conjunction is allowed (AND), whereas display_name  and description can be joined using a disjunction because they are in the same bucket.  If an attribute  is used in a disjunction (OR) that violates this rule, an exception will be thrown.   * These attributes are not searchable or sortable for built in system attributes.  They work normally for non  system attributes.   Note that only searchable attributes can be used in sorting.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SystemObjectDefinitionsApi();
let body = new DataApi.SearchRequest(); // SearchRequest | 
let objectType = "objectType_example"; // String | The object type id that contains these definitions

apiInstance.postSystemObjectDefinitionsByIDAttributeDefinitionSearch(bodyobjectType).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchRequest**](SearchRequest.md)|  | 
 **objectType** | **String**| The object type id that contains these definitions | 

### Return type

[**ObjectAttributeDefinitionSearchResult**](ObjectAttributeDefinitionSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postSystemObjectDefinitionsByIDAttributeGroupSearch"></a>
# **postSystemObjectDefinitionsByIDAttributeGroupSearch**
> ObjectAttributeGroupSearchResult postSystemObjectDefinitionsByIDAttributeGroupSearch(bodyobjectType)



Searches for attribute groups.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    id - String  display_name - Localized&lt;String&gt;  description - Localized&lt;String&gt;  position - Double  internal - Boolean     The output of the query can also be sorted. These are the list of sortable attributes:    id - String  display_name - Localized&lt;String&gt;  description - Localized&lt;String&gt;  position - Double  internal - Boolean  

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SystemObjectDefinitionsApi();
let body = new DataApi.SearchRequest(); // SearchRequest | 
let objectType = "objectType_example"; // String | 

apiInstance.postSystemObjectDefinitionsByIDAttributeGroupSearch(bodyobjectType).then((data) => {
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

<a name="putSystemObjectDefinitionsByIDAttributeDefinitionsByID"></a>
# **putSystemObjectDefinitionsByIDAttributeDefinitionsByID**
> ObjectAttributeDefinition putSystemObjectDefinitionsByIDAttributeDefinitionsByID(bodyobjectTypeid, opts)



Creates a attribute definition using the information provided.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SystemObjectDefinitionsApi();
let body = new DataApi.ObjectAttributeDefinition(); // ObjectAttributeDefinition | 
let objectType = "objectType_example"; // String | The metadata object that contains these definitions
let id = "id_example"; // String | The id of the attribute definition to create.
let opts = { 
  'xDwValidateExisting': true // Boolean | 
};
apiInstance.putSystemObjectDefinitionsByIDAttributeDefinitionsByID(bodyobjectTypeid, opts).then((data) => {
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
 **xDwValidateExisting** | **Boolean**|  | [optional] 

### Return type

[**ObjectAttributeDefinition**](ObjectAttributeDefinition.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putSystemObjectDefinitionsByIDAttributeGroupsByID"></a>
# **putSystemObjectDefinitionsByIDAttributeGroupsByID**
> ObjectAttributeGroup putSystemObjectDefinitionsByIDAttributeGroupsByID(bodyobjectTypeid, opts)



Creates a attribute group using the information provided. If a attribute group with the same unique identifier, it will be deleted and a new one will be created unless the header x-dw-validate-existing&#x3D;true is passed in with the request.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SystemObjectDefinitionsApi();
let body = new DataApi.ObjectAttributeGroup(); // ObjectAttributeGroup | 
let objectType = "objectType_example"; // String | the object type id that contains this attribute gorup
let id = "id_example"; // String | The id of the attribute group to create.
let opts = { 
  'xDwValidateExisting': true // Boolean | 
};
apiInstance.putSystemObjectDefinitionsByIDAttributeGroupsByID(bodyobjectTypeid, opts).then((data) => {
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
 **xDwValidateExisting** | **Boolean**|  | [optional] 

### Return type

[**ObjectAttributeGroup**](ObjectAttributeGroup.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putSystemObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID"></a>
# **putSystemObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID**
> putSystemObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID(objectType, groupId, defId)



Assign an attribute definition to an attribute group.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SystemObjectDefinitionsApi();
let objectType = "objectType_example"; // String | The ID of the system object that contains the attribute definition and attribute group.
let groupId = "groupId_example"; // String | The ID of the attribute group.
let defId = "defId_example"; // String | The ID of the attribute definition.

apiInstance.putSystemObjectDefinitionsByIDAttributeGroupsByIDAttributeDefinitionsByID(objectType, groupId, defId).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

