# DataApi.ProductOption

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customName** | **{String: String}** | The localized custom name of the product option. | [optional] 
**defaultProductOptionValue** | **String** | The default product option value. | [optional] 
**description** | **{String: String}** | The localized description of the product option. | [optional] 
**id** | **String** | The object attribute definition id which is also the identifier for the product option. | [optional] 
**image** | [**MediaFile**](MediaFile.md) |  | [optional] 
**link** | **String** | The URL link to the product option. | [optional] 
**name** | **String** | The name of the object attribute definition. | [optional] 
**selectedOptionValue** | **String** | The selected option value of the product option. | [optional] 
**shared** | **Boolean** | The flag that indicates if the product option is shared or local. | [optional] 
**sortingMode** | **String** | The sorting mode for the product option values. | [optional] 
**values** | [**[ProductOptionValue]**](ProductOptionValue.md) | The sorted array of values of the product option. | [optional] 



## Enum: SortingModeEnum


* `byexplicitorder` (value: `"byexplicitorder"`)

* `byoptionprice` (value: `"byoptionprice"`)




