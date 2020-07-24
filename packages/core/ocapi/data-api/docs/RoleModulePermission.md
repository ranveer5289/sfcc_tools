# DataApi.RoleModulePermission

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application** | **String** | The permission application (e.g. \&quot;bm\&quot;, \&quot;csc\&quot;). | 
**name** | **String** | The related menu action name of the module permission. | 
**system** | **Boolean** | Flag to indicate a system menu action. This is false for custom menu actions. | [optional] 
**type** | **String** | The permission type (\&quot;module\&quot;). | 
**value** | **String** | The non domain specific value for the module permission, e.g. ACCESS or READONLY. | [optional] 
**values** | **{String: String}** | The map of value per domain for the module permission, e.g. ACCESS or READONLY per domain name. | [optional] 


