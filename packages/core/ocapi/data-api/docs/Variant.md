# DataApi.Variant

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ats** | **Number** | Inventory \&quot;Available to Sell\&quot; of the product. | [optional] 
**defaultProductVariation** | **Boolean** |  | [optional] 
**image** | [**MediaFile**](MediaFile.md) |  | [optional] 
**inStock** | **Boolean** | true if the product is in stock, or false if not. | [optional] 
**link** | **String** | The URL addressing the product. | [optional] 
**online** | **Boolean** | If the product is currently online.  true if online  false if not | [optional] 
**orderable** | **Boolean** | A flag indicating whether the variant is orderable. | [optional] 
**price** | **Number** | The sales price of the variant. | [optional] 
**priceCurrency** | **String** | Currency code for the price of the product. | [optional] 
**pricePerUnit** | **Number** | The sales price of the variant. | [optional] 
**productId** | **String** | The id (SKU) of the variant. | 
**searchable** | **{String: Boolean}** |  | [optional] 
**variationAttributes** | [**[VariationAttribute]**](VariationAttribute.md) | variation attributes | [optional] 
**variationValues** | **{String: String}** | The actual variation attribute id - value pairs. | [optional] 
