# DataApi.Site

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cartridges** | **String** | The cartridge Path of the site | [optional] 
**customerListLink** | [**CustomerListLink**](CustomerListLink.md) |  | [optional] 
**description** | **{String: String}** | The description of this site. | [optional] 
**displayName** | **{String: String}** | The display name entered by the user. | [optional] 
**id** | **String** | The id of this site. | 
**inDeletion** | **Boolean** | The deletion status of this site, true if in deletion | [optional] 
**link** | **String** | A link directly to the site | [optional] 
**storefrontStatus** | **String** |  | [optional] 

<a name="StorefrontStatusEnum"></a>
## Enum: StorefrontStatusEnum

* `online` (value: `"online"`)
* `maintenance` (value: `"maintenance"`)
* `to_be_deleted` (value: `"to_be_deleted"`)
* `protected` (value: `"protected"`)

