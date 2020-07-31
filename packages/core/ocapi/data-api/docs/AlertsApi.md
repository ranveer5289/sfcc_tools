# DataApi.AlertsApi

All URIs are relative to *http://demo-ocapi.demandware.net/s/-/dw/data/20.4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAlertsItemsByIDByIDByIDByID**](AlertsApi.md#deleteAlertsItemsByIDByIDByIDByID) | **DELETE** /alerts/items/{application_id}/{application_context_path}/{message_id}/{context_object_id} | 
[**getAlertsDescriptors**](AlertsApi.md#getAlertsDescriptors) | **GET** /alerts/descriptors | 
[**getAlertsDescriptorsByID**](AlertsApi.md#getAlertsDescriptorsByID) | **GET** /alerts/descriptors/{application_id} | 
[**getAlertsDescriptorsByIDByIDByID**](AlertsApi.md#getAlertsDescriptorsByIDByIDByID) | **GET** /alerts/descriptors/{application_id}/{application_context_path}/{message_id} | 
[**getAlertsItems**](AlertsApi.md#getAlertsItems) | **GET** /alerts/items | 
[**getAlertsItemsByID**](AlertsApi.md#getAlertsItemsByID) | **GET** /alerts/items/{application_id} | 
[**getAlertsItemsByIDByIDByIDByID**](AlertsApi.md#getAlertsItemsByIDByIDByIDByID) | **GET** /alerts/items/{application_id}/{application_context_path}/{message_id}/{context_object_id} | 
[**getAlertsUsersettings**](AlertsApi.md#getAlertsUsersettings) | **GET** /alerts/usersettings | 
[**patchAlertsDescriptorsByIDByIDByIDRevalidate**](AlertsApi.md#patchAlertsDescriptorsByIDByIDByIDRevalidate) | **PATCH** /alerts/descriptors/{application_id}/{application_context_path}/{message_id}/revalidate | 
[**patchAlertsUsersettings**](AlertsApi.md#patchAlertsUsersettings) | **PATCH** /alerts/usersettings | 



## deleteAlertsItemsByIDByIDByIDByID

> deleteAlertsItemsByIDByIDByIDByID(applicationId, applicationContextPath, messageId, contextObjectId)



Deletes a single alert If the alert depends on a context object, the last path elemnt denotes the context object id.    If the alert is independent from a context, use - as the last path element

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.AlertsApi();
var applicationId = "applicationId_example"; // String | The application ID.
var applicationContextPath = "applicationContextPath_example"; // String | The application context path.
var messageId = "messageId_example"; // String | The message ID.
var contextObjectId = "contextObjectId_example"; // String | The context object ID. Use '-' for alerts that don't have a context object.
apiInstance.deleteAlertsItemsByIDByIDByIDByID(applicationId, applicationContextPath, messageId, contextObjectId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **String**| The application ID. | 
 **applicationContextPath** | **String**| The application context path. | 
 **messageId** | **String**| The message ID. | 
 **contextObjectId** | **String**| The context object ID. Use &#39;-&#39; for alerts that don&#39;t have a context object. | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAlertsDescriptors

> AlertDescriptors getAlertsDescriptors()



Gets a collection of all alert descriptors

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.AlertsApi();
apiInstance.getAlertsDescriptors().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AlertDescriptors**](AlertDescriptors.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getAlertsDescriptorsByID

> AlertDescriptors getAlertsDescriptorsByID(applicationId, opts)



Gets a collection of all alert descriptors for the given application context.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.AlertsApi();
var applicationId = "applicationId_example"; // String | The application ID.
var opts = {
  'applicationContextPath': "applicationContextPath_example" // String | 
};
apiInstance.getAlertsDescriptorsByID(applicationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **String**| The application ID. | 
 **applicationContextPath** | **String**|  | [optional] 

### Return type

[**AlertDescriptors**](AlertDescriptors.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getAlertsDescriptorsByIDByIDByID

> AlertDescriptor getAlertsDescriptorsByIDByIDByID(applicationId, applicationContextPath, messageId)



Gets a single alert descriptor

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.AlertsApi();
var applicationId = "applicationId_example"; // String | The application ID.
var applicationContextPath = "applicationContextPath_example"; // String | The application context path.
var messageId = "messageId_example"; // String | The message ID.
apiInstance.getAlertsDescriptorsByIDByIDByID(applicationId, applicationContextPath, messageId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **String**| The application ID. | 
 **applicationContextPath** | **String**| The application context path. | 
 **messageId** | **String**| The message ID. | 

### Return type

[**AlertDescriptor**](AlertDescriptor.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getAlertsItems

> AlertItems getAlertsItems()



Gets a collection of all alerts

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.AlertsApi();
apiInstance.getAlertsItems().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AlertItems**](AlertItems.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getAlertsItemsByID

> AlertItems getAlertsItemsByID(applicationId, opts)



Gets a collection of alerts for the given application context

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.AlertsApi();
var applicationId = "applicationId_example"; // String | The application ID.
var opts = {
  'applicationContextPath': "applicationContextPath_example", // String | 
  'contextObjectId': "contextObjectId_example" // String | 
};
apiInstance.getAlertsItemsByID(applicationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **String**| The application ID. | 
 **applicationContextPath** | **String**|  | [optional] 
 **contextObjectId** | **String**|  | [optional] 

### Return type

[**AlertItems**](AlertItems.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getAlertsItemsByIDByIDByIDByID

> AlertItem getAlertsItemsByIDByIDByIDByID(applicationId, applicationContextPath, messageId, contextObjectId)



Gets a single alert If the alert depends on a context object, the last path elemnt denotes the context object id.    If the alert is independent from a context, use - as the last path element

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.AlertsApi();
var applicationId = "applicationId_example"; // String | The application ID.
var applicationContextPath = "applicationContextPath_example"; // String | The application context path.
var messageId = "messageId_example"; // String | The message ID.
var contextObjectId = "contextObjectId_example"; // String | The context object ID. Use '-' for alerts that don't have a context object.
apiInstance.getAlertsItemsByIDByIDByIDByID(applicationId, applicationContextPath, messageId, contextObjectId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **String**| The application ID. | 
 **applicationContextPath** | **String**| The application context path. | 
 **messageId** | **String**| The message ID. | 
 **contextObjectId** | **String**| The context object ID. Use &#39;-&#39; for alerts that don&#39;t have a context object. | 

### Return type

[**AlertItem**](AlertItem.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getAlertsUsersettings

> AlertSettings getAlertsUsersettings()



Gets the alert settings for the user.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.AlertsApi();
apiInstance.getAlertsUsersettings().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AlertSettings**](AlertSettings.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## patchAlertsDescriptorsByIDByIDByIDRevalidate

> patchAlertsDescriptorsByIDByIDByIDRevalidate(applicationId, applicationContextPath, messageId, opts)



Triggers rule validation for all described descriptors. When a validation rule for a descriptor is triggered active alerts might be deleted if the conditions are not met anymore.    Additionally, new alerts might be created if conditions of a descriptor are now met. If the alert descriptor is context-specific, a context object ID needs to be provided in the request body.    The request body can be ued to further restrict the set of descriptors that are validated.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.AlertsApi();
var applicationId = "applicationId_example"; // String | The application ID.
var applicationContextPath = "applicationContextPath_example"; // String | The application context path.
var messageId = "messageId_example"; // String | The message ID.
var opts = {
  'body': new DataApi.AlertDescriptorsRevalidationRequest() // AlertDescriptorsRevalidationRequest | 
};
apiInstance.patchAlertsDescriptorsByIDByIDByIDRevalidate(applicationId, applicationContextPath, messageId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **String**| The application ID. | 
 **applicationContextPath** | **String**| The application context path. | 
 **messageId** | **String**| The message ID. | 
 **body** | [**AlertDescriptorsRevalidationRequest**](AlertDescriptorsRevalidationRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: Not defined


## patchAlertsUsersettings

> AlertSettings patchAlertsUsersettings(opts)



Changes the alert settings for the user.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.AlertsApi();
var opts = {
  'body': new DataApi.AlertSettings() // AlertSettings | 
};
apiInstance.patchAlertsUsersettings(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AlertSettings**](AlertSettings.md)|  | [optional] 

### Return type

[**AlertSettings**](AlertSettings.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml

