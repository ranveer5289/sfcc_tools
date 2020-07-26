# DataApi.OcapiConfigsApi

All URIs are relative to *http://dev14-global-iic.demandware.net/s/-/dw/data/20.4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteOcapiConfigsByID**](OcapiConfigsApi.md#deleteOcapiConfigsByID) | **DELETE** /ocapi_configs/{clientId} | 
[**getOcapiConfigsByID**](OcapiConfigsApi.md#getOcapiConfigsByID) | **GET** /ocapi_configs/{clientId} | 
[**postOcapiConfigsByID**](OcapiConfigsApi.md#postOcapiConfigsByID) | **POST** /ocapi_configs/{clientId} | 
[**putOcapiConfigsByID**](OcapiConfigsApi.md#putOcapiConfigsByID) | **PUT** /ocapi_configs/{clientId} | 



## deleteOcapiConfigsByID

> deleteOcapiConfigsByID(clientId)



Delete a client.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.OcapiConfigsApi();
var clientId = "clientId_example"; // String | Id of the client to be deleted.
apiInstance.deleteOcapiConfigsByID(clientId).then(function() {
  console.log('API called successfully.');
}, function(error) {
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


## getOcapiConfigsByID

> OcapiConfigsApiResponse getOcapiConfigsByID(clientId)



Get all allowed resources for the client.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.OcapiConfigsApi();
var clientId = "clientId_example"; // String | client ID
apiInstance.getOcapiConfigsByID(clientId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## postOcapiConfigsByID

> OcapiConfigsApiResponse postOcapiConfigsByID(clientId, body)



Add a client to existing OCAPI configurations. Return errors when client already exists.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.OcapiConfigsApi();
var clientId = "clientId_example"; // String | client ID
var body = new DataApi.OcapiConfigsApiRequest(); // OcapiConfigsApiRequest | 
apiInstance.postOcapiConfigsByID(clientId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| client ID | 
 **body** | [**OcapiConfigsApiRequest**](OcapiConfigsApiRequest.md)|  | 

### Return type

[**OcapiConfigsApiResponse**](OcapiConfigsApiResponse.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putOcapiConfigsByID

> OcapiConfigsApiResponse putOcapiConfigsByID(clientId, body)



Add a client to existing OCAPI configurations. Overwrite config if the client already exists.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.OcapiConfigsApi();
var clientId = "clientId_example"; // String | client ID
var body = new DataApi.OcapiConfigsApiRequest(); // OcapiConfigsApiRequest | 
apiInstance.putOcapiConfigsByID(clientId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| client ID | 
 **body** | [**OcapiConfigsApiRequest**](OcapiConfigsApiRequest.md)|  | 

### Return type

[**OcapiConfigsApiResponse**](OcapiConfigsApiResponse.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml

