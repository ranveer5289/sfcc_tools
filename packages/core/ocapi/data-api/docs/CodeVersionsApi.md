# DataApi.CodeVersionsApi

All URIs are relative to *http://demo-ocapi.demandware.net/s/-/dw/data/20.4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCodeVersionsByID**](CodeVersionsApi.md#deleteCodeVersionsByID) | **DELETE** /code_versions/{code_version_id} | 
[**getCodeVersions**](CodeVersionsApi.md#getCodeVersions) | **GET** /code_versions | 
[**getCodeVersionsByID**](CodeVersionsApi.md#getCodeVersionsByID) | **GET** /code_versions/{code_version_id} | 
[**patchCodeVersionsByID**](CodeVersionsApi.md#patchCodeVersionsByID) | **PATCH** /code_versions/{code_version_id} | 
[**putCodeVersionsByID**](CodeVersionsApi.md#putCodeVersionsByID) | **PUT** /code_versions/{code_version_id} | 



## deleteCodeVersionsByID

> deleteCodeVersionsByID(codeVersionId)



Delete a code version.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CodeVersionsApi();
var codeVersionId = "codeVersionId_example"; // String | The id of the code version.
apiInstance.deleteCodeVersionsByID(codeVersionId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **codeVersionId** | **String**| The id of the code version. | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCodeVersions

> CodeVersionResult getCodeVersions()



Read all existing code versions.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CodeVersionsApi();
apiInstance.getCodeVersions().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**CodeVersionResult**](CodeVersionResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCodeVersionsByID

> CodeVersion getCodeVersionsByID(codeVersionId, opts)



Read a code version.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CodeVersionsApi();
var codeVersionId = "codeVersionId_example"; // String | The id of the code version.
var opts = {
  'expand': ["null"] // [String] | 
};
apiInstance.getCodeVersionsByID(codeVersionId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **codeVersionId** | **String**| The id of the code version. | 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**CodeVersion**](CodeVersion.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## patchCodeVersionsByID

> CodeVersion patchCodeVersionsByID(codeVersionId, body)



Update an existing code version.     Only an inactive code version can be updated.   Only the active flag and the id can be changed. The active flag can therefore only set to \&quot;true\&quot;.    To set the active flag to \&quot;false\&quot; will not work.  

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CodeVersionsApi();
var codeVersionId = "codeVersionId_example"; // String | The id of the code version.
var body = new DataApi.CodeVersion(); // CodeVersion | 
apiInstance.patchCodeVersionsByID(codeVersionId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **codeVersionId** | **String**| The id of the code version. | 
 **body** | [**CodeVersion**](CodeVersion.md)|  | 

### Return type

[**CodeVersion**](CodeVersion.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putCodeVersionsByID

> CodeVersion putCodeVersionsByID(codeVersionId)



Create a new code version.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CodeVersionsApi();
var codeVersionId = "codeVersionId_example"; // String | The id of the code version.
apiInstance.putCodeVersionsByID(codeVersionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **codeVersionId** | **String**| The id of the code version. | 

### Return type

[**CodeVersion**](CodeVersion.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml

