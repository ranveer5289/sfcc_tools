# DataApi.JobExecutionSearchApi

All URIs are relative to *http://dev14-global-iic.demandware.net/s/-/dw/data/20.4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postJobExecutionSearch**](JobExecutionSearchApi.md#postJobExecutionSearch) | **POST** /job_execution_search | 



## postJobExecutionSearch

> JobExecutionSearchResult postJobExecutionSearch(body)



Searches for job executions.    The query attribute specifies a complex query that can be used to narrow down the search. This is the list of  searchable attributes:    id - String  job_id - String  start_time - Date  end_time - Date  status - String    This is the list of sortable attributes:    job_id - String  start_time - Date  end_time - Date  status - String  

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.JobExecutionSearchApi();
var body = new DataApi.SearchRequest(); // SearchRequest | 
apiInstance.postJobExecutionSearch(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

