# DataApi.CustomerGroup

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creationDate** | **Date** | Returns the value of attribute &#x27;creationDate&#x27;. | [optional] 
**description** | **String** | The description for the customer group.  This property is read-only for system groups. | [optional] 
**id** | **String** | The user specific identifier for the customer group, which must be unique across the organization.  Property  is read-only. | [optional] 
**inDeletion** | **Boolean** | The deletion status of this customer group. | [optional] 
**lastModified** | **Date** | Returns the value of attribute &#x27;lastModified&#x27;. | [optional] 
**link** | **String** | URL that is used to get this instance.  This property is computed and cannot be modified. | [optional] 
**memberCount** | **Number** | The number of members in this customer group. | [optional] 
**rule** | [**Rule**](Rule.md) |  | [optional] 
**type** | **String** | The type of the customer group.  This property is read-only. | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `system` (value: `"system"`)
* `dynamic` (value: `"dynamic"`)
* `static` (value: `"static"`)

