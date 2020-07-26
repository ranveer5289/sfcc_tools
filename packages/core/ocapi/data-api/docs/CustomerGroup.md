# DataApi.CustomerGroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cPriceBookID** | **String** | Member Pricebook ID assigned to the Customer Group | [optional] 
**cPriceBookIds** | **[String]** |  | [optional] 
**creationDate** | **Date** | Returns the value of attribute &#39;creationDate&#39;. | [optional] [readonly] 
**description** | **String** | The description for the customer group.  This property is read-only for system groups. | [optional] 
**id** | **String** | The user specific identifier for the customer group, which must be unique across the organization.  Property  is read-only. | [optional] [readonly] 
**inDeletion** | **Boolean** | The deletion status of this customer group. | [optional] 
**lastModified** | **Date** | Returns the value of attribute &#39;lastModified&#39;. | [optional] [readonly] 
**link** | **String** | URL that is used to get this instance.  This property is computed and cannot be modified. | [optional] 
**memberCount** | **Number** | The number of members in this customer group. | [optional] 
**rule** | [**Rule**](Rule.md) |  | [optional] 
**type** | **String** | The type of the customer group.  This property is read-only. | [optional] 



## Enum: TypeEnum


* `system` (value: `"system"`)

* `dynamic` (value: `"dynamic"`)

* `static` (value: `"static"`)




