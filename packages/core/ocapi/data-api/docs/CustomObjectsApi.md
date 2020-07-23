# DataApi.CustomObjectsApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/data/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCustomObjectsByIDByID**](CustomObjectsApi.md#deleteCustomObjectsByIDByID) | **DELETE** /custom_objects/{object_type}/{key} | 
[**getCustomObjectsByIDByID**](CustomObjectsApi.md#getCustomObjectsByIDByID) | **GET** /custom_objects/{object_type}/{key} | 
[**patchCustomObjectsByIDByID**](CustomObjectsApi.md#patchCustomObjectsByIDByID) | **PATCH** /custom_objects/{object_type}/{key} | 
[**putCustomObjectsByIDByID**](CustomObjectsApi.md#putCustomObjectsByIDByID) | **PUT** /custom_objects/{object_type}/{key} | 

<a name="deleteCustomObjectsByIDByID"></a>
# **deleteCustomObjectsByIDByID**
> deleteCustomObjectsByIDByID(objectType, key)



Deletes a global Custom Object. If the Custom Object does not exist, this will do nothing. Note that the customization scripts are only called, if the Custom Object does exist.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomObjectsApi();
let objectType = "objectType_example"; // String | the ID of the object type
let key = "key_example"; // String | the key attribute value of the Custom Object

apiInstance.deleteCustomObjectsByIDByID(objectType, key).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | **String**| the ID of the object type | 
 **key** | **String**| the key attribute value of the Custom Object | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomObjectsByIDByID"></a>
# **getCustomObjectsByIDByID**
> CustomObject getCustomObjectsByIDByID(objectType, key)



Reads a global Custom Object with a given object type ID and a value for the key attribute of the object which represents its unique identifier.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomObjectsApi();
let objectType = "objectType_example"; // String | the ID of the object type
let key = "key_example"; // String | the key attribute value of the Custom Object

apiInstance.getCustomObjectsByIDByID(objectType, key).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | **String**| the ID of the object type | 
 **key** | **String**| the key attribute value of the Custom Object | 

### Return type

[**CustomObject**](CustomObject.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="patchCustomObjectsByIDByID"></a>
# **patchCustomObjectsByIDByID**
> CustomObject patchCustomObjectsByIDByID(bodyobjectTypekey)



Updates a global Custom Object with information from request body. Note that only mentioned attributes will be updated and the key attribute is ignored. All other attributes will be left unattended.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomObjectsApi();
let body = new DataApi.CustomObject(); // CustomObject | 
let objectType = "objectType_example"; // String | the ID of the object type
let key = "key_example"; // String | the key attribute value of the Custom Object

apiInstance.patchCustomObjectsByIDByID(bodyobjectTypekey).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomObject**](CustomObject.md)|  | 
 **objectType** | **String**| the ID of the object type | 
 **key** | **String**| the key attribute value of the Custom Object | 

### Return type

[**CustomObject**](CustomObject.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putCustomObjectsByIDByID"></a>
# **putCustomObjectsByIDByID**
> CustomObject putCustomObjectsByIDByID(objectTypekey)



Creates a global Custom Object from request body. Note that an existing global Custom Object with the same key will be overwritten by this action.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomObjectsApi();
let objectType = "objectType_example"; // String | the ID of the object type
let key = "key_example"; // String | the key attribute value of the Custom Object

apiInstance.putCustomObjectsByIDByID(objectTypekey).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | **String**| the ID of the object type | 
 **key** | **String**| the key attribute value of the Custom Object | 
 **body** | [**CustomObject**](CustomObject.md)|  | [optional] 

### Return type

[**CustomObject**](CustomObject.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

