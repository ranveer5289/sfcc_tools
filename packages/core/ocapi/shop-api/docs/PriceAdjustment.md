# ShopApi.PriceAdjustment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appliedDiscount** | [**Discount**](Discount.md) |  | [optional] 
**couponCode** | **String** | The coupon code that triggered the promotion, provided  the price adjustment was created as the result of a promotion  being triggered by a coupon. | [optional] 
**createdBy** | **String** | The user who created the price adjustment. | [optional] 
**creationDate** | **Date** | Returns the value of attribute &#x27;creationDate&#x27;. | [optional] 
**custom** | **Boolean** | A flag indicating whether this price adjustment was created by custom logic. This flag is  set to true unless the price adjustment was created by the promotion engine. | [optional] 
**itemText** | **String** | The text describing the item in more detail. | [optional] 
**lastModified** | **Date** | Returns the value of attribute &#x27;lastModified&#x27;. | [optional] 
**manual** | **Boolean** | A flag indicating whether this price adjustment was created in a manual process.    For custom price adjustments created using the shop API, this always  returns true. Using the scripting API, however, it is possible to set this to true  or false, according to the use case. | [optional] 
**price** | **Number** | The adjustment price. | [optional] 
**priceAdjustmentId** | **String** | The price adjustment id (uuid). | [optional] 
**promotionId** | **String** | The id of the related promotion. Custom price adjustments  can be assigned any promotion id so long it is not  used by a price adjustment belonging to the same item  and is not used by promotion defined in the promotion engine.  If not specified, a promotion id is generated. | [optional] 
**promotionLink** | **String** | The URL addressing the related promotion. | [optional] 
**reasonCode** | **String** | The reason why this price adjustment was made. | [optional] 

<a name="ReasonCodeEnum"></a>
## Enum: ReasonCodeEnum

* `PRICE_MATCH` (value: `"PRICE_MATCH"`)
* `BACKORDER` (value: `"BACKORDER"`)
* `EVEN_EXCHANGE` (value: `"EVEN_EXCHANGE"`)

