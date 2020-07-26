# ShopApi.ShippingMethod

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cDeliveryTime** | **String** |  | [optional] 
**cEstimatedArrivalTime** | **String** | Estimated days until delivery | [optional] 
**cExcludeProductAttribute** | **String** |  | [optional] 
**cExcludeProductAttributeValue** | **String** |  | [optional] 
**cExcludedPaymentMethods** | **[String]** |  | [optional] 
**cFulfilmentCode** | **String** |  | 
**cIsBusinessShipping** | **Boolean** |  | [optional] 
**cPickupPointType** | **String** |  | [optional] 
**cStorePickupEnabled** | **Boolean** |  | [optional] 
**description** | **String** | The localized description of the shipping method. | [optional] 
**externalShippingMethod** | **String** | The external shipping method. | [optional] 
**id** | **String** | The shipping method id. | 
**name** | **String** | The localized name of the shipping method. | [optional] 
**price** | **Number** | The shipping cost total, including shipment level costs and  product level fix and surcharge costs. | [optional] 
**shippingPromotions** | [**[ShippingPromotion]**](ShippingPromotion.md) | The array of active customer shipping promotions for this shipping  method. This array can be empty. | [optional] 



## Enum: CPickupPointTypeEnum


* `GLS` (value: `"GLS"`)

* `Redyser` (value: `"Redyser"`)

* `PostNord` (value: `"PostNord"`)




