# DataApi.JobStepExecution

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chunkSize** | **Number** | The chunk size for a chunk oriented step execution, otherwise null. | [optional] 
**duration** | **Number** | Time in milliseconds, the job needed to be finished. | [optional] 
**endTime** | **Date** | Timestamp, when execution was finished. | [optional] 
**executionScope** | **String** | The ID of the scope this step is or was executed for. | [optional] 
**executionStatus** | **String** | Current execution status. If the execution is running &#39;running&#39; is returned. If the execution is pending  &#39;pending&#39; is returned. If the execution is finished &#39;finished&#39; is returned. | [optional] 
**exitStatus** | [**Status**](Status.md) |  | [optional] 
**id** | **String** | ID of the execution object. | [optional] 
**includeStepsFromJobId** | **String** | ID of the job the step of this step execution was included from, if the step was included from another job. | [optional] 
**isChunkOriented** | **Boolean** | True if this execution represents a chunk oriented step execution. | [optional] 
**itemFilterCount** | **Number** | The current number of items that have been filtered for a chunk oriented step execution, otherwise null. | [optional] 
**itemWriteCount** | **Number** | The current number of items that have been written for a chunk oriented step execution, otherwise null. | [optional] 
**modificationTime** | **Date** | Timestamp of the last modification time for the execution. | [optional] 
**startTime** | **Date** | Timestamp, when execution was started. | [optional] 
**status** | **String** | Current status. If the execution is running &#39;running&#39; is returned. If the execution is pending &#39;pending&#39; is  returned. If the execution is finished the exit status code of the execution is returned. | [optional] 
**statusMetadata** | [**StatusMetadata**](StatusMetadata.md) |  | [optional] 
**stepDescription** | **String** | Description of the step, this execution belongs to.ID of the step | [optional] 
**stepId** | **String** | ID of the step, this execution belongs to.ID of the step | [optional] 
**stepTypeId** | **String** | ID of the step&#39;s type at the time it is or was executed. | [optional] 
**stepTypeInfo** | **String** | Additional information regarding the step&#39;s type at the time it is or was executed (e.g. name of a script module  and function). | [optional] 
**totalItemCount** | **Number** | The total number of items that will be processed for a chunk oriented step execution (null if unknown), otherwise  null. | [optional] 



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




