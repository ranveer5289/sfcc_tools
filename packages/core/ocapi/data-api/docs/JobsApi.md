# DataApi.JobsApi

All URIs are relative to *http://demo-ocapi.demandware.net/s/-/dw/data/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteJobsByIDExecutionsByID**](JobsApi.md#deleteJobsByIDExecutionsByID) | **DELETE** /jobs/{job_id}/executions/{id} | 
[**getJobsByIDExecutionsByID**](JobsApi.md#getJobsByIDExecutionsByID) | **GET** /jobs/{job_id}/executions/{id} | 
[**postJobsByIDExecutions**](JobsApi.md#postJobsByIDExecutions) | **POST** /jobs/{job_id}/executions | 



## deleteJobsByIDExecutionsByID

> deleteJobsByIDExecutionsByID(jobId, id)



Deletes job execution information using the specified ID for the job having the specified job ID.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.JobsApi();
var jobId = "jobId_example"; // String | the ID of the job.
var id = "id_example"; // String | the ID of the job execution
apiInstance.deleteJobsByIDExecutionsByID(jobId, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **String**| the ID of the job. | 
 **id** | **String**| the ID of the job execution | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getJobsByIDExecutionsByID

> JobExecution getJobsByIDExecutionsByID(jobId, id)



Returns job execution information using the specified ID for the job having the specified job ID.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.JobsApi();
var jobId = "jobId_example"; // String | the ID of the job.
var id = "id_example"; // String | the ID of the job execution
apiInstance.getJobsByIDExecutionsByID(jobId, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **String**| the ID of the job. | 
 **id** | **String**| the ID of the job execution | 

### Return type

[**JobExecution**](JobExecution.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## postJobsByIDExecutions

> JobExecution postJobsByIDExecutions(jobId, opts)



Executes the job with the given job ID by creating and returning a job execution for it. The job might still be  executed when the job execution is returned. Note that this resource is also intended for running system jobs.    See Global Jobs for information on available system jobs.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.JobsApi();
var jobId = "jobId_example"; // String | The ID of the job to execute.
var opts = {
  'body': new DataApi.JobExecutionRequest() // JobExecutionRequest | 
};
apiInstance.postJobsByIDExecutions(jobId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **String**| The ID of the job to execute. | 
 **body** | [**JobExecutionRequest**](JobExecutionRequest.md)|  | [optional] 

### Return type

[**JobExecution**](JobExecution.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml

