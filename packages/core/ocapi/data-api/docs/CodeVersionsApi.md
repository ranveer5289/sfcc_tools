# DataApi.CodeVersionsApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/data/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCodeVersionsByID**](CodeVersionsApi.md#deleteCodeVersionsByID) | **DELETE** /code_versions/{code_version_id} | 
[**getCodeVersions**](CodeVersionsApi.md#getCodeVersions) | **GET** /code_versions | 
[**getCodeVersionsByID**](CodeVersionsApi.md#getCodeVersionsByID) | **GET** /code_versions/{code_version_id} | 
[**patchCodeVersionsByID**](CodeVersionsApi.md#patchCodeVersionsByID) | **PATCH** /code_versions/{code_version_id} | 
[**putCodeVersionsByID**](CodeVersionsApi.md#putCodeVersionsByID) | **PUT** /code_versions/{code_version_id} | 

<a name="deleteCodeVersionsByID"></a>
# **deleteCodeVersionsByID**
> deleteCodeVersionsByID(codeVersionId)



Delete a code version.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CodeVersionsApi();
let codeVersionId = "codeVersionId_example"; // String | The id of the code version.

apiInstance.deleteCodeVersionsByID(codeVersionId).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

<a name="getCodeVersions"></a>
# **getCodeVersions**
> CodeVersionResult getCodeVersions()



Read all existing code versions.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CodeVersionsApi();
apiInstance.getCodeVersions().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getCodeVersionsByID"></a>
# **getCodeVersionsByID**
> CodeVersion getCodeVersionsByID(codeVersionId, opts)



Read a code version.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CodeVersionsApi();
let codeVersionId = "codeVersionId_example"; // String | The id of the code version.
let opts = { 
  'expand': ["expand_example"] // [String] | 
};
apiInstance.getCodeVersionsByID(codeVersionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="patchCodeVersionsByID"></a>
# **patchCodeVersionsByID**
> CodeVersion patchCodeVersionsByID(bodycodeVersionId)



Update an existing code version.     Only an inactive code version can be updated.   Only the active flag and the id can be changed. The active flag can therefore only set to \&quot;true\&quot;.    To set the active flag to \&quot;false\&quot; will not work.  

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CodeVersionsApi();
let body = new DataApi.CodeVersion(); // CodeVersion | 
let codeVersionId = "codeVersionId_example"; // String | The id of the code version.

apiInstance.patchCodeVersionsByID(bodycodeVersionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CodeVersion**](CodeVersion.md)|  | 
 **codeVersionId** | **String**| The id of the code version. | 

### Return type

[**CodeVersion**](CodeVersion.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putCodeVersionsByID"></a>
# **putCodeVersionsByID**
> CodeVersion putCodeVersionsByID(codeVersionId)



Create a new code version.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CodeVersionsApi();
let codeVersionId = "codeVersionId_example"; // String | The id of the code version.

apiInstance.putCodeVersionsByID(codeVersionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

