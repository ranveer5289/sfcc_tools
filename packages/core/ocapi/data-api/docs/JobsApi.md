# DataApi.JobsApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/data/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteJobsByIDExecutionsByID**](JobsApi.md#deleteJobsByIDExecutionsByID) | **DELETE** /jobs/{job_id}/executions/{id} | 
[**getJobsByIDExecutionsByID**](JobsApi.md#getJobsByIDExecutionsByID) | **GET** /jobs/{job_id}/executions/{id} | 
[**postJobsByIDExecutions**](JobsApi.md#postJobsByIDExecutions) | **POST** /jobs/{job_id}/executions | 

<a name="deleteJobsByIDExecutionsByID"></a>
# **deleteJobsByIDExecutionsByID**
> deleteJobsByIDExecutionsByID(jobId, id)



Deletes job execution information using the specified ID for the job having the specified job ID.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.JobsApi();
let jobId = "jobId_example"; // String | the ID of the job.
let id = "id_example"; // String | the ID of the job execution

apiInstance.deleteJobsByIDExecutionsByID(jobId, id).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

<a name="getJobsByIDExecutionsByID"></a>
# **getJobsByIDExecutionsByID**
> JobExecution getJobsByIDExecutionsByID(jobId, id)



Returns job execution information using the specified ID for the job having the specified job ID.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.JobsApi();
let jobId = "jobId_example"; // String | the ID of the job.
let id = "id_example"; // String | the ID of the job execution

apiInstance.getJobsByIDExecutionsByID(jobId, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="postJobsByIDExecutions"></a>
# **postJobsByIDExecutions**
> JobExecution postJobsByIDExecutions(jobId)



Executes the job with the given job ID by creating and returning a job execution for it. The job might still be  executed when the job execution is returned. Note that this resource is also intended for running system jobs.    See Global Jobs for information on available system jobs.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.JobsApi();
let jobId = "jobId_example"; // String | The ID of the job to execute.

apiInstance.postJobsByIDExecutions(jobId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

