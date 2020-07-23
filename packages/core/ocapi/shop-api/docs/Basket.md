# ShopApi.Basket

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adjustedMerchandizeTotalTax** | **Number** | The products tax after discounts applying in purchase currency.   Adjusted merchandize prices represent the sum of product prices before  services such as shipping have been added, but after adjustment from  promotions have been added. | [optional] 
**adjustedShippingTotalTax** | **Number** | The tax of all shipping line items of the line item container after  shipping adjustments have been applied. | [optional] 
**agentBasket** | **Boolean** | Is the basket created by an agent? | [optional] 
**basketId** | **String** | The unique identifier for the basket. | [optional] 
**billingAddress** | [**OrderAddress**](OrderAddress.md) |  | [optional] 
**bonusDiscountLineItems** | [**[BonusDiscountLineItem]**](BonusDiscountLineItem.md) | The bonus discount line items of the line item container. | [optional] 
**cSessionAddressBook** | **String** |  | [optional] 
**channelType** | **String** | The sales channel for the order.    This is a read-only attribute that can&#x27;t be modified by an OCAPI call. For OCAPI, the sales channel is determined  based on the client ID and token used for the OCAPI call. Usually, a customer-based authentication sets the  channel to Storefront, and an agent-based authentication sets it to CallCenter. Using applications that use other  client IDs for OCAPI calls, like Customer Service Center, will set different channel types. To modify the channel  type in OCAPI, use a hook. *   | [optional] 
**couponItems** | [**[CouponItem]**](CouponItem.md) | The sorted array of coupon items. This array can be empty. | [optional] 
**creationDate** | **Date** | Returns the value of attribute &#x27;creationDate&#x27;. | [optional] 
**currency** | **String** | The ISO 4217 mnemonic code of the currency. | [optional] 
**customerInfo** | [**CustomerInfo**](CustomerInfo.md) |  | [optional] 
**giftCertificateItems** | [**[GiftCertificateItem]**](GiftCertificateItem.md) | The sorted array of gift certificate line items. This array can be empty. | [optional] 
**inventoryReservationExpiry** | **Date** |  | [optional] 
**lastModified** | **Date** | Returns the value of attribute &#x27;lastModified&#x27;. | [optional] 
**merchandizeTotalTax** | **Number** | The products total tax in purchase currency.   Merchandize total prices represent the sum of product prices before  services such as shipping or adjustment from promotions have  been added. | [optional] 
**notes** | [**SimpleLink**](SimpleLink.md) |  | [optional] 
**orderPriceAdjustments** | [**[PriceAdjustment]**](PriceAdjustment.md) | The array of order level price adjustments. This array can be empty. | [optional] 
**orderTotal** | **Number** | The total price of the order, including products, shipping and tax. This property is part of basket checkout  information only. | [optional] 
**paymentInstruments** | [**[OrderPaymentInstrument]**](OrderPaymentInstrument.md) | The payment instruments list for the order. | [optional] 
**productItems** | [**[ProductItem]**](ProductItem.md) | The sorted array of product items (up to a maximum of 50 items). This array can be empty. | [optional] 
**productSubTotal** | **Number** | The total price of all product items after all product discounts.  Depending on taxation policy the returned price is net or gross. | [optional] 
**productTotal** | **Number** | The total price of all product items after all product and order discounts.  Depending on taxation policy the returned price is net or gross. | [optional] 
**shipments** | [**[Shipment]**](Shipment.md) | The array of shipments. This property is part of basket checkout information only. | [optional] 
**shippingItems** | [**[ShippingItem]**](ShippingItem.md) | The sorted array of shipping items. This array can be empty. | [optional] 
**shippingTotal** | **Number** | The total shipping price of the order after all shipping discounts. Excludes tax if taxation policy is net. Includes  tax if taxation policy is gross. This property is part of basket checkout information only. | [optional] 
**shippingTotalTax** | **Number** | The tax of all shipping line items of the line item container before  shipping adjustments have been applied. | [optional] 
**sourceCode** | **String** | Gets the source code assigned to this basket. | [optional] 
**taxTotal** | **Number** | The total tax amount of the order. This property is part of basket checkout information only. | [optional] 
**taxation** | **String** | The taxation the line item container is based on. | [optional] 

<a name="ChannelTypeEnum"></a>
## Enum: ChannelTypeEnum

* `storefront` (value: `"storefront"`)
* `callcenter` (value: `"callcenter"`)
* `marketplace` (value: `"marketplace"`)
* `dss` (value: `"dss"`)
* `store` (value: `"store"`)
* `pinterest` (value: `"pinterest"`)
* `twitter` (value: `"twitter"`)
* `facebookads` (value: `"facebookads"`)
* `subscriptions` (value: `"subscriptions"`)
* `onlinereservation` (value: `"onlinereservation"`)
* `customerservicecenter` (value: `"customerservicecenter"`)
* `instagramcommerce` (value: `"instagramcommerce"`)


<a name="TaxationEnum"></a>
## Enum: TaxationEnum

* `gross` (value: `"gross"`)
* `net` (value: `"net"`)

