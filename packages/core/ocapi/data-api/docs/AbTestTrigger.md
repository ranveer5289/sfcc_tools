# DataApi.AbTestTrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | **[String]** | The list of categories. This is a modifiable attribute when trigger type is &#39;category_page_view&#39; only | [optional] 
**isPipelineBased** | **Boolean** | The flag indicating if the trigger is based on pipelines. This is a computed attribute and cannot be modified | [optional] 
**pipelineCalls** | **[String]** | The list of pipeline name and start node combinations (for example, Account-Show). This is a modifiable attribute when trigger type is &#39;pipeline_calls&#39; only | [optional] 
**triggerType** | **String** | The type of the trigger. Defaults to &#39;immediately&#39; if not specified on create | [optional] 



## Enum: TriggerTypeEnum


* `immediately` (value: `"immediately"`)

* `category_page_view` (value: `"category_page_view"`)

* `home_page_view` (value: `"home_page_view"`)

* `pipeline_call` (value: `"pipeline_call"`)




