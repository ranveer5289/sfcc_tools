# DataApi.SlotConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignmentInformation** | [**SlotConfigurationAssignmentInformation**](SlotConfigurationAssignmentInformation.md) |  | [optional] 
**calloutMsg** | [**{String: MarkupText}**](MarkupText.md) | The call out message. | [optional] 
**configurationId** | **String** | The id of this configuration. | 
**context** | **String** | The context of the slot. Ignored in input documents. | 
**contextId** | **String** | When the context is category, this is a category_id; when  the context is folder, this is a folder_id; and when the  context is global, this is obsolete. This is ignored in input documents. | [optional] 
**creationDate** | **Date** | Returns the value of attribute &#39;creationDate&#39;. | [optional] [readonly] 
**customerGroups** | **[String]** | The customer groups ids. | [optional] 
**_default** | **Boolean** | A flag indicating whether the configuration is the default one for the slot. | [optional] 
**description** | **String** | The configuration description. | [optional] 
**enabled** | **Boolean** | A flag indicating whether the slot is enabled. | [optional] 
**lastModified** | **Date** | Returns the value of attribute &#39;lastModified&#39;. | [optional] [readonly] 
**link** | **String** | The link. | [optional] 
**rank** | **Number** | The rank of the slot configuration on its slot. This rank has nothing to do with the rank  on any campaign-assignment, because these are completely different objects. These must be  updated separately. | [optional] 
**schedule** | [**Schedule**](Schedule.md) |  | [optional] 
**slotContent** | [**SlotContent**](SlotContent.md) |  | 
**slotId** | **String** | The ID of the slot. Ignored in input documents. | 
**template** | **String** | The template. | [optional] 
**uuid** | **String** | The uuid of the slot configuration. This property cannot be written  and is ignored in input documents. | [optional] [readonly] 



## Enum: ContextEnum


* `global` (value: `"global"`)

* `category` (value: `"category"`)

* `folder` (value: `"folder"`)





## Enum: RankEnum


* `10` (value: `10`)

* `20` (value: `20`)

* `30` (value: `30`)

* `40` (value: `40`)

* `50` (value: `50`)

* `60` (value: `60`)

* `70` (value: `70`)

* `80` (value: `80`)

* `90` (value: `90`)

* `100` (value: `100`)




