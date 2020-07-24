# DataApi.SettingsApi

All URIs are relative to *http://demo-ocapi.demandware.net/s/-/dw/data/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSettingsLoggingCustom**](SettingsApi.md#getSettingsLoggingCustom) | **GET** /settings/logging/custom | 
[**patchSettingsLoggingCustom**](SettingsApi.md#patchSettingsLoggingCustom) | **PATCH** /settings/logging/custom | 



## getSettingsLoggingCustom

> CustomLogSettings getSettingsLoggingCustom()



Action to get custom log settings.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SettingsApi();
apiInstance.getSettingsLoggingCustom().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**CustomLogSettings**](CustomLogSettings.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## patchSettingsLoggingCustom

> CustomLogSettings patchSettingsLoggingCustom(body)



Updates the custom log settings.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SettingsApi();
var body = new DataApi.CustomLogSettings(); // CustomLogSettings | 
apiInstance.patchSettingsLoggingCustom(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomLogSettings**](CustomLogSettings.md)|  | 

### Return type

[**CustomLogSettings**](CustomLogSettings.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml

