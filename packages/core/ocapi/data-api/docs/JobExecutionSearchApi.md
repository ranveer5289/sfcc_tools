# DataApi.JobExecutionSearchApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/data/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postJobExecutionSearch**](JobExecutionSearchApi.md#postJobExecutionSearch) | **POST** /job_execution_search | 

<a name="postJobExecutionSearch"></a>
# **postJobExecutionSearch**
> JobExecutionSearchResult postJobExecutionSearch(body)



Searches for job executions.    The query attribute specifies a complex query that can be used to narrow down the search. This is the list of  searchable attributes:    id - String  job_id - String  start_time - Date  end_time - Date  status - String    This is the list of sortable attributes:    job_id - String  start_time - Date  end_time - Date  status - String  

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.JobExecutionSearchApi();
let body = new DataApi.SearchRequest(); // SearchRequest | 

apiInstance.postJobExecutionSearch(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchRequest**](SearchRequest.md)|  | 

### Return type

[**JobExecutionSearchResult**](JobExecutionSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

