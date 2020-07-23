# DataApi.LogRequestsApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/data/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLogRequestsEcdnByID**](LogRequestsApi.md#getLogRequestsEcdnByID) | **GET** /log_requests/ecdn/{id} | 
[**postLogRequestsEcdn**](LogRequestsApi.md#postLogRequestsEcdn) | **POST** /log_requests/ecdn | 

<a name="getLogRequestsEcdnByID"></a>
# **getLogRequestsEcdnByID**
> EcdnLogFetchResponse getLogRequestsEcdnByID(id)



Retrieves the current execution status of the log file fetching.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.LogRequestsApi();
let id = "id_example"; // String | ID of the log fetching execution

apiInstance.getLogRequestsEcdnByID(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the log fetching execution | 

### Return type

[**EcdnLogFetchResponse**](EcdnLogFetchResponse.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="postLogRequestsEcdn"></a>
# **postLogRequestsEcdn**
> EcdnLogFetchResponse postLogRequestsEcdn(body)



Requests a LogFile-Fetching for the passed zone and time frame.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.LogRequestsApi();
let body = new DataApi.EcdnLogFetchRequest(); // EcdnLogFetchRequest | 

apiInstance.postLogRequestsEcdn(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EcdnLogFetchRequest**](EcdnLogFetchRequest.md)|  | 

### Return type

[**EcdnLogFetchResponse**](EcdnLogFetchResponse.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

