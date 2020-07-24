# DataApi.SlotContent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | [**{String: MarkupText}**](MarkupText.md) | The HTML body (valid only for type &#39;html&#39;). | [optional] 
**categoryIds** | **[String]** | The category ids (valid only for type &#39;categories&#39;). | [optional] 
**contentAssetIds** | **[String]** | The content asset ids (valid only for type &#39;content_assets&#39;). | [optional] 
**productIds** | **[String]** | The product ids (valid only for type &#39;products&#39;). | [optional] 
**type** | **String** | The type of content in the slot. | 



## Enum: TypeEnum


* `products` (value: `"products"`)

* `categories` (value: `"categories"`)

* `content_assets` (value: `"content_assets"`)

* `html` (value: `"html"`)

* `recommended_products` (value: `"recommended_products"`)




