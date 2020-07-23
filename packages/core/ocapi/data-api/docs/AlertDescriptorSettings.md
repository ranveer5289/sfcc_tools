# DataApi.AlertDescriptorSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationContextPath** | **String** | The application context path. | 
**applicationId** | **String** | The application ID. | 
**isUserOverride** | **Boolean** | Flag that indicates whether the settings for this descriptor have been changed by the user. In a PATCH request, this flag must be set to true to override the default settings. If this flag to false in a PATCH request, the default user settings for this descriptor are restored (and all other fields are ignored). | 
**messageId** | **String** | The message ID. | 
**priority** | **String** | The user priority. | 
**showInHeader** | **Boolean** | Flag that indicates whether the alert is shown in the Business Manager header. | 
**showOnHomepage** | **Boolean** | Flag that indicates whether the alert is shown on the Business Manager homepage. | 

<a name="PriorityEnum"></a>
## Enum: PriorityEnum

* `hidden` (value: `"hidden"`)
* `informational` (value: `"informational"`)
* `warning` (value: `"warning"`)
* `action_required` (value: `"action_required"`)

