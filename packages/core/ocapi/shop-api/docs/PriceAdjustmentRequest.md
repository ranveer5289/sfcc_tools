# ShopApi.PriceAdjustmentRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discount** | [**DiscountRequest**](DiscountRequest.md) |  | [optional] 
**itemId** | **String** | The item to which the price adjustment should be added, depending on the specified level.  If the level is &#x27;order&#x27;, you need not specify an item id. If &#x27;shipping&#x27;, specify the uuid  of the shipping item. If &#x27;product&#x27;, specify the uuid of the product item. | [optional] 
**itemText** | **String** | The text describing the item in more detail. | [optional] 
**level** | **String** | The level at which the adjustment is applied. When a product or shipping  level is specified, you must also specify the item id. | 
**promotionId** | **String** | The id of the related promotion. Custom price adjustments  can be assigned any promotion id so long it is not  used by a price adjustment belonging to the same item  and is not used by promotion defined in the promotion engine.  If not specified, a promotion id is generated. | [optional] 
**reasonCode** | **String** | The reason why this price adjustment was made. | [optional] 

<a name="LevelEnum"></a>
## Enum: LevelEnum

* `product` (value: `"product"`)
* `shipping` (value: `"shipping"`)
* `order` (value: `"order"`)


<a name="ReasonCodeEnum"></a>
## Enum: ReasonCodeEnum

* `PRICE_MATCH` (value: `"PRICE_MATCH"`)
* `BACKORDER` (value: `"BACKORDER"`)
* `EVEN_EXCHANGE` (value: `"EVEN_EXCHANGE"`)

