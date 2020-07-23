# ShopApi.CustomerProductListItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The id of this product list item. | [optional] 
**priority** | **Number** | The priority of the item. | [optional] 
**product** | [**Product**](Product.md) |  | [optional] 
**productDetailsLink** | [**ProductSimpleLink**](ProductSimpleLink.md) |  | [optional] 
**productId** | **String** | The id of the product. | [optional] 
**_public** | **Boolean** | Is this product list item available for access by other customers? | [optional] 
**purchasedQuantity** | **Number** | The quantity of products already purchased. | [optional] 
**quantity** | **Number** | The quantity of this product list item. | [optional] 
**type** | **String** | The type of the item. | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `product` (value: `"product"`)
* `gift_certificate` (value: `"gift_certificate"`)

