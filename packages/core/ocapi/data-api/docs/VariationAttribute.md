# DataApi.VariationAttribute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributeDefinitionId** | **String** | The id of the requested attribute definition. | 
**attributeDefinitionName** | **{String: String}** | The localized display name of the variation attribute definition. | [optional] 
**defaultValue** | **String** | default variation attribute value | [optional] 
**id** | **String** | The id of the variation attribute. | [optional] 
**link** | **String** | URL that is used to get this instance | [optional] 
**name** | **{String: String}** | The localized display name of the variation attribute. | [optional] 
**shared** | **Boolean** | Returns the value of attribute &#39;shared&#39; if attribute is local or shared | [optional] 
**slicing** | **Boolean** | Returns the value of attribute &#39;slicing&#39;. | [optional] 
**values** | [**[VariationAttributeValue]**](VariationAttributeValue.md) | The sorted array of variation values. This array can be empty. | [optional] 
**variationAttributeType** | **String** | variation attribute type | [optional] 



## Enum: VariationAttributeTypeEnum


* `string` (value: `"string"`)

* `int` (value: `"int"`)

* `unknown` (value: `"unknown"`)




