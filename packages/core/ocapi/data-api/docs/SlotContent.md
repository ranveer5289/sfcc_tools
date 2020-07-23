# DataApi.SlotContent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | [**{String: MarkupText}**](MarkupText.md) | The HTML body (valid only for type &#x27;html&#x27;). | [optional] 
**categoryIds** | **[String]** | The category ids (valid only for type &#x27;categories&#x27;). | [optional] 
**contentAssetIds** | **[String]** | The content asset ids (valid only for type &#x27;content_assets&#x27;). | [optional] 
**productIds** | **[String]** | The product ids (valid only for type &#x27;products&#x27;). | [optional] 
**type** | **String** | The type of content in the slot. | 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `products` (value: `"products"`)
* `categories` (value: `"categories"`)
* `content_assets` (value: `"content_assets"`)
* `html` (value: `"html"`)
* `recommended_products` (value: `"recommended_products"`)

