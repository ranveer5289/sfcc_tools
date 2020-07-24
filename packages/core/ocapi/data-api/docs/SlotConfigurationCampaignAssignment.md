# DataApi.SlotConfigurationCampaignAssignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign** | [**Campaign**](Campaign.md) |  | [optional] 
**campaignId** | **String** | The id of the campaign that has the slot configuration assigned to it. | [optional] 
**context** | **String** | The slot context. | 
**customerGroups** | **[String]** | The list of customer groups. | [optional] 
**description** | **String** | The description of the slot configuration. | [optional] 
**enabled** | **Boolean** | True if the assignment resource is enabled | [optional] 
**link** | **String** | The URL to the slot configuration-campaign assignment. | [optional] 
**rank** | **Number** | The rank of the slot confiuration-campaign assignment.  This is different than the rank of the slot configuration. | [optional] 
**schedule** | [**Schedule**](Schedule.md) |  | [optional] 
**slotConfiguration** | [**SlotConfiguration**](SlotConfiguration.md) |  | [optional] 
**slotConfigurationId** | **String** | The ID of the slot configuration. | 
**slotConfigurationUuid** | **String** | The UUID of the slot configuration. | [optional] 
**slotContextId** | **String** | The ID of the slot&#39;s context, for example, the category ID for a slot with category context. | [optional] 
**slotId** | **String** | The ID of the slot. | 



## Enum: ContextEnum


* `global` (value: `"global"`)

* `category` (value: `"category"`)

* `folder` (value: `"folder"`)




