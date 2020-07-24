# DataApi.EcdnLogFetchResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | ID of the log fetch request | [optional] 
**link** | **String** | HTTPS Download link to the fetched log file, which has a lifetime of 30 minutes. This link will only appear, if the current status of the log fetching is &#39;finished&#39;. | [optional] 
**status** | **String** | Current status of the log fetch request | [optional] 



## Enum: StatusEnum


* `pending` (value: `"pending"`)

* `running` (value: `"running"`)

* `finished` (value: `"finished"`)




