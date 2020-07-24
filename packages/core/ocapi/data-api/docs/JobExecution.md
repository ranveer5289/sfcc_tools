# DataApi.JobExecution

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientId** | **String** | When the execution was started by a client, this represents the client&#39;s id. | [optional] 
**duration** | **Number** | Time in milliseconds, the job needed to be finished. | [optional] 
**effectiveDuration** | **Number** | Time in milliseconds, the job has done work. Paused times are evicted. | [optional] 
**endTime** | **Date** | Timestamp, when execution was finished. | [optional] 
**executionScopes** | **[String]** | Sorted set of all execution scopes, used by individual steps. | [optional] 
**executionStatus** | **String** | Current execution status. If the execution is running &#39;running&#39; is returned. If the execution is pending  &#39;pending&#39; is returned. If the execution is finished &#39;finished&#39; is returned. | [optional] 
**exitStatus** | [**Status**](Status.md) |  | [optional] 
**id** | **String** | ID of the execution object. | [optional] 
**isLogFileExisting** | **Boolean** | True if the log file exists, otherwise false. | [optional] 
**isRestart** | **Boolean** | True if this execution represents a job restart. | [optional] 
**jobDescription** | **String** | Description of the job, this execution belongs to. | [optional] 
**jobId** | **String** | ID of the job, this execution belongs to. | [optional] 
**logFileName** | **String** | Name of the log file, containing execution log. | [optional] 
**modificationTime** | **Date** | Timestamp of the last modification time for the execution. | [optional] 
**parameters** | [**[JobExecutionParameter]**](JobExecutionParameter.md) | List of all job execution parameters. | [optional] 
**startTime** | **Date** | Timestamp, when execution was started. | [optional] 
**status** | **String** | Current status. If the execution is running &#39;running&#39; is returned. If the execution is pending &#39;pending&#39; is  returned. If the execution is finished the exit status code of the execution is returned. | [optional] 
**statusMetadata** | [**StatusMetadata**](StatusMetadata.md) |  | [optional] 
**stepExecutions** | [**[JobStepExecution]**](JobStepExecution.md) | List of all steps, called for job execution. | [optional] 
**userLogin** | **String** | When the execution was started by a registered user, this represents the user&#39;s login. | [optional] 



## Enum: ExecutionStatusEnum


* `pending` (value: `"pending"`)

* `running` (value: `"running"`)

* `pausing` (value: `"pausing"`)

* `paused` (value: `"paused"`)

* `resuming` (value: `"resuming"`)

* `resumed` (value: `"resumed"`)

* `restarting` (value: `"restarting"`)

* `restarted` (value: `"restarted"`)

* `aborting` (value: `"aborting"`)

* `aborted` (value: `"aborted"`)

* `finished` (value: `"finished"`)




