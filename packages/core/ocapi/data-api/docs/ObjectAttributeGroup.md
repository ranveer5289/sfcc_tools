# DataApi.ObjectAttributeGroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributeDefinitions** | [**[ObjectAttributeDefinition]**](ObjectAttributeDefinition.md) | Attributes with the group displayed when expand&#x3D;definition | [optional] 
**attributeDefinitionsCount** | **Number** | The count of the attributes within the group.  This is a computed attribute and is read-only | [optional] 
**description** | **{String: String}** | The free-form text description of the group by locale | [optional] 
**displayName** | **{String: String}** | The name used to display the group by locale. | [optional] 
**id** | **String** | The group&#39;s user specified identifier, used to retrieve the group | [optional] 
**internal** | **Boolean** | True if the group is meant only for internal use, false otherwise.  This property is read-only. | [optional] 
**link** | **String** | URL that is used to get this instance.  This is a computed attribute and is read-only | [optional] 
**position** | **Number** | The position of the group relative to other groups. | [optional] 


