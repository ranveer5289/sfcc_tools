# DataApi.OcapiConfigsApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/data/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteOcapiConfigsByID**](OcapiConfigsApi.md#deleteOcapiConfigsByID) | **DELETE** /ocapi_configs/{clientId} | 
[**getOcapiConfigsByID**](OcapiConfigsApi.md#getOcapiConfigsByID) | **GET** /ocapi_configs/{clientId} | 
[**postOcapiConfigsByID**](OcapiConfigsApi.md#postOcapiConfigsByID) | **POST** /ocapi_configs/{clientId} | 
[**putOcapiConfigsByID**](OcapiConfigsApi.md#putOcapiConfigsByID) | **PUT** /ocapi_configs/{clientId} | 

<a name="deleteOcapiConfigsByID"></a>
# **deleteOcapiConfigsByID**
> deleteOcapiConfigsByID(clientId)



Delete a client.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.OcapiConfigsApi();
let clientId = "clientId_example"; // String | Id of the client to be deleted.

apiInstance.deleteOcapiConfigsByID(clientId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Id of the client to be deleted. | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getOcapiConfigsByID"></a>
# **getOcapiConfigsByID**
> OcapiConfigsApiResponse getOcapiConfigsByID(clientId)



Get all allowed resources for the client.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.OcapiConfigsApi();
let clientId = "clientId_example"; // String | client ID

apiInstance.getOcapiConfigsByID(clientId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| client ID | 

### Return type

[**OcapiConfigsApiResponse**](OcapiConfigsApiResponse.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="postOcapiConfigsByID"></a>
# **postOcapiConfigsByID**
> OcapiConfigsApiResponse postOcapiConfigsByID(bodyclientId)



Add a client to existing OCAPI configurations. Return errors when client already exists.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.OcapiConfigsApi();
let body = new DataApi.OcapiConfigsApiRequest(); // OcapiConfigsApiRequest | 
let clientId = "clientId_example"; // String | client ID

apiInstance.postOcapiConfigsByID(bodyclientId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OcapiConfigsApiRequest**](OcapiConfigsApiRequest.md)|  | 
 **clientId** | **String**| client ID | 

### Return type

[**OcapiConfigsApiResponse**](OcapiConfigsApiResponse.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putOcapiConfigsByID"></a>
# **putOcapiConfigsByID**
> OcapiConfigsApiResponse putOcapiConfigsByID(bodyclientId)



Add a client to existing OCAPI configurations. Overwrite config if the client already exists.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.OcapiConfigsApi();
let body = new DataApi.OcapiConfigsApiRequest(); // OcapiConfigsApiRequest | 
let clientId = "clientId_example"; // String | client ID

apiInstance.putOcapiConfigsByID(bodyclientId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OcapiConfigsApiRequest**](OcapiConfigsApiRequest.md)|  | 
 **clientId** | **String**| client ID | 

### Return type

[**OcapiConfigsApiResponse**](OcapiConfigsApiResponse.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

