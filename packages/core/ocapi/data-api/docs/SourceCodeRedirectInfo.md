# DataApi.SourceCodeRedirectInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **String** | The location of redirect, based on the type, this can be a product location, category location, home page, content page, or just a URL | [optional] 
**locationType** | **String** | The type of redirect location, e.g. product (for a product page), category (a category page), home (for home page), page (for content), url (for a URL location) | [optional] 

<a name="LocationTypeEnum"></a>
## Enum: LocationTypeEnum

* `default` (value: `"default"`)
* `home` (value: `"home"`)
* `product` (value: `"product"`)
* `category` (value: `"category"`)
* `page` (value: `"page"`)
* `url` (value: `"url"`)

