# DataApi.AlertsApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/data/20.8*

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

<a name="deleteAlertsItemsByIDByIDByIDByID"></a>
# **deleteAlertsItemsByIDByIDByIDByID**
> deleteAlertsItemsByIDByIDByIDByID(applicationId, applicationContextPath, messageId, contextObjectId)



Deletes a single alert If the alert depends on a context object, the last path elemnt denotes the context object id.    If the alert is independent from a context, use - as the last path element

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.AlertsApi();
let applicationId = "applicationId_example"; // String | The application ID.
let applicationContextPath = "applicationContextPath_example"; // String | The application context path.
let messageId = "messageId_example"; // String | The message ID.
let contextObjectId = "contextObjectId_example"; // String | The context object ID. Use '-' for alerts that don't have a context object.

apiInstance.deleteAlertsItemsByIDByIDByIDByID(applicationId, applicationContextPath, messageId, contextObjectId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **String**| The application ID. | 
 **applicationContextPath** | **String**| The application context path. | 
 **messageId** | **String**| The message ID. | 
 **contextObjectId** | **String**| The context object ID. Use &#x27;-&#x27; for alerts that don&#x27;t have a context object. | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAlertsDescriptors"></a>
# **getAlertsDescriptors**
> AlertDescriptors getAlertsDescriptors()



Gets a collection of all alert descriptors

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.AlertsApi();
apiInstance.getAlertsDescriptors().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getAlertsDescriptorsByID"></a>
# **getAlertsDescriptorsByID**
> AlertDescriptors getAlertsDescriptorsByID(applicationId, opts)



Gets a collection of all alert descriptors for the given application context.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.AlertsApi();
let applicationId = "applicationId_example"; // String | The application ID.
let opts = { 
  'applicationContextPath': "applicationContextPath_example" // String | 
};
apiInstance.getAlertsDescriptorsByID(applicationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getAlertsDescriptorsByIDByIDByID"></a>
# **getAlertsDescriptorsByIDByIDByID**
> AlertDescriptor getAlertsDescriptorsByIDByIDByID(applicationId, applicationContextPath, messageId)



Gets a single alert descriptor

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.AlertsApi();
let applicationId = "applicationId_example"; // String | The application ID.
let applicationContextPath = "applicationContextPath_example"; // String | The application context path.
let messageId = "messageId_example"; // String | The message ID.

apiInstance.getAlertsDescriptorsByIDByIDByID(applicationId, applicationContextPath, messageId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getAlertsItems"></a>
# **getAlertsItems**
> AlertItems getAlertsItems()



Gets a collection of all alerts

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.AlertsApi();
apiInstance.getAlertsItems().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getAlertsItemsByID"></a>
# **getAlertsItemsByID**
> AlertItems getAlertsItemsByID(applicationId, opts)



Gets a collection of alerts for the given application context

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.AlertsApi();
let applicationId = "applicationId_example"; // String | The application ID.
let opts = { 
  'applicationContextPath': "applicationContextPath_example", // String | 
  'contextObjectId': "contextObjectId_example" // String | 
};
apiInstance.getAlertsItemsByID(applicationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getAlertsItemsByIDByIDByIDByID"></a>
# **getAlertsItemsByIDByIDByIDByID**
> AlertItem getAlertsItemsByIDByIDByIDByID(applicationId, applicationContextPath, messageId, contextObjectId)



Gets a single alert If the alert depends on a context object, the last path elemnt denotes the context object id.    If the alert is independent from a context, use - as the last path element

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.AlertsApi();
let applicationId = "applicationId_example"; // String | The application ID.
let applicationContextPath = "applicationContextPath_example"; // String | The application context path.
let messageId = "messageId_example"; // String | The message ID.
let contextObjectId = "contextObjectId_example"; // String | The context object ID. Use '-' for alerts that don't have a context object.

apiInstance.getAlertsItemsByIDByIDByIDByID(applicationId, applicationContextPath, messageId, contextObjectId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **String**| The application ID. | 
 **applicationContextPath** | **String**| The application context path. | 
 **messageId** | **String**| The message ID. | 
 **contextObjectId** | **String**| The context object ID. Use &#x27;-&#x27; for alerts that don&#x27;t have a context object. | 

### Return type

[**AlertItem**](AlertItem.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getAlertsUsersettings"></a>
# **getAlertsUsersettings**
> AlertSettings getAlertsUsersettings()



Gets the alert settings for the user.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.AlertsApi();
apiInstance.getAlertsUsersettings().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="patchAlertsDescriptorsByIDByIDByIDRevalidate"></a>
# **patchAlertsDescriptorsByIDByIDByIDRevalidate**
> patchAlertsDescriptorsByIDByIDByIDRevalidate(applicationIdapplicationContextPathmessageId)



Triggers rule validation for all described descriptors. When a validation rule for a descriptor is triggered active alerts might be deleted if the conditions are not met anymore.    Additionally, new alerts might be created if conditions of a descriptor are now met. If the alert descriptor is context-specific, a context object ID needs to be provided in the request body.    The request body can be ued to further restrict the set of descriptors that are validated.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.AlertsApi();
let applicationId = "applicationId_example"; // String | The application ID.
let applicationContextPath = "applicationContextPath_example"; // String | The application context path.
let messageId = "messageId_example"; // String | The message ID.

apiInstance.patchAlertsDescriptorsByIDByIDByIDRevalidate(applicationIdapplicationContextPathmessageId).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

<a name="patchAlertsUsersettings"></a>
# **patchAlertsUsersettings**
> AlertSettings patchAlertsUsersettings()



Changes the alert settings for the user.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.AlertsApi();

apiInstance.patchAlertsUsersettings().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

