# DataApi.CategoryLink

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastModified** | **Date** | The date the link was last modified | [optional] 
**link** | **String** | URL that is used to get this instance | [optional] 
**position** | **Number** | The position in the source catalog / category for this link relative to the other links in the same category. | [optional] 
**sourceCatalogId** | **String** | The source catalog for the link | [optional] 
**sourceCatalogName** | **{String: String}** | The name of the source catalog | [optional] 
**sourceCategoryId** | **String** | The source category for the link | [optional] 
**sourceCategoryName** | **{String: String}** | The name of the source category | [optional] 
**targetCatalogId** | **String** | The target category for the link | [optional] 
**targetCatalogName** | **{String: String}** | The name of the target catalog | [optional] 
**targetCategoryId** | **String** | The target category for the link | [optional] 
**targetCategoryName** | **{String: String}** | The name of the target category | [optional] 
**type** | **String** | The link type | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `other` (value: `"other"`)
* `accessories` (value: `"accessories"`)
* `cross_selling` (value: `"cross_selling"`)
* `up_selling` (value: `"up_selling"`)
* `spare_parts` (value: `"spare_parts"`)

