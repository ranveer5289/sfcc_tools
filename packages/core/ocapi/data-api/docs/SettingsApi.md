# DataApi.SettingsApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/data/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSettingsLoggingCustom**](SettingsApi.md#getSettingsLoggingCustom) | **GET** /settings/logging/custom | 
[**patchSettingsLoggingCustom**](SettingsApi.md#patchSettingsLoggingCustom) | **PATCH** /settings/logging/custom | 

<a name="getSettingsLoggingCustom"></a>
# **getSettingsLoggingCustom**
> CustomLogSettings getSettingsLoggingCustom()



Action to get custom log settings.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SettingsApi();
apiInstance.getSettingsLoggingCustom().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="patchSettingsLoggingCustom"></a>
# **patchSettingsLoggingCustom**
> CustomLogSettings patchSettingsLoggingCustom(body)



Updates the custom log settings.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SettingsApi();
let body = new DataApi.CustomLogSettings(); // CustomLogSettings | 

apiInstance.patchSettingsLoggingCustom(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

