# ShopApi.Order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adjustedMerchandizeTotalTax** | **Number** | The products tax after discounts applying in purchase currency.   Adjusted merchandize prices represent the sum of product prices before  services such as shipping have been added, but after adjustment from  promotions have been added. | [optional] 
**adjustedShippingTotalTax** | **Number** | The tax of all shipping line items of the line item container after  shipping adjustments have been applied. | [optional] 
**billingAddress** | [**OrderAddress**](OrderAddress.md) |  | [optional] 
**bonusDiscountLineItems** | [**[BonusDiscountLineItem]**](BonusDiscountLineItem.md) | The bonus discount line items of the line item container. | [optional] 
**channelType** | **String** | The sales channel for the order. | [optional] [readonly] 
**confirmationStatus** | **String** | The confirmation status of the order. | [optional] 
**couponItems** | [**[CouponItem]**](CouponItem.md) | The sorted array of coupon items. This array can be empty. | [optional] 
**createdBy** | **String** | The name of the user who created the order. | [optional] 
**creationDate** | **Date** | Returns the value of attribute &#39;creationDate&#39;. | [optional] [readonly] 
**currency** | **String** | The ISO 4217 mnemonic code of the currency. | [optional] 
**customerInfo** | [**CustomerInfo**](CustomerInfo.md) |  | [optional] 
**customerName** | **String** | The name of the customer associated with this order. | [optional] 
**exportStatus** | **String** | The export status of the order. | [optional] 
**externalOrderStatus** | **String** | The external status of the order. | [optional] 
**giftCertificateItems** | [**[GiftCertificateItem]**](GiftCertificateItem.md) | The sorted array of gift certificate line items. This array can be empty. | [optional] 
**globalPartyId** | **String** | globalPartyId is managed by Customer 360. Its value can be changed. | [optional] 
**lastModified** | **Date** | Returns the value of attribute &#39;lastModified&#39;. | [optional] [readonly] 
**merchandizeTotalTax** | **Number** | The products total tax in purchase currency.   Merchandize total prices represent the sum of product prices before  services such as shipping or adjustment from promotions have  been added. | [optional] 
**notes** | [**SimpleLink**](SimpleLink.md) |  | [optional] 
**orderNo** | **String** | The order number of the order. | [optional] [readonly] 
**orderPriceAdjustments** | [**[PriceAdjustment]**](PriceAdjustment.md) | The array of order level price adjustments. This array can be empty. | [optional] 
**orderToken** | **String** | The order token used to secure the lookup of an order on base of the  plain order number. The order token contains only URL safe characters. | [optional] 
**orderTotal** | **Number** | The total price of the order, including products, shipping and tax. This property is part of basket checkout  information only. | [optional] 
**paymentInstruments** | [**[OrderPaymentInstrument]**](OrderPaymentInstrument.md) | The payment instruments list for the order. | [optional] 
**paymentStatus** | **String** | The payment status of the order. | [optional] 
**productItems** | [**[ProductItem]**](ProductItem.md) | The sorted array of product items (up to a maximum of 50 items). This array can be empty. | [optional] 
**productSubTotal** | **Number** | The total price of all product items after all product discounts.  Depending on taxation policy the returned price is net or gross. | [optional] 
**productTotal** | **Number** | The total price of all product items after all product and order discounts.  Depending on taxation policy the returned price is net or gross. | [optional] 
**shipments** | [**[Shipment]**](Shipment.md) | The array of shipments. This property is part of basket checkout information only. | [optional] 
**shippingItems** | [**[ShippingItem]**](ShippingItem.md) | The sorted array of shipping items. This array can be empty. | [optional] 
**shippingStatus** | **String** | The shipping status of the order. | [optional] 
**shippingTotal** | **Number** | The total shipping price of the order after all shipping discounts. Excludes tax if taxation policy is net. Includes  tax if taxation policy is gross. This property is part of basket checkout information only. | [optional] 
**shippingTotalTax** | **Number** | The tax of all shipping line items of the line item container before  shipping adjustments have been applied. | [optional] 
**siteId** | **String** | The site where the order resides. | [optional] 
**sourceCode** | **String** | Gets the source code assigned to this basket. | [optional] 
**status** | **String** | The status of the order. | [optional] 
**taxTotal** | **Number** | The total tax amount of the order. This property is part of basket checkout information only. | [optional] 
**taxation** | **String** | The taxation the line item container is based on. | [optional] 



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





## Enum: ConfirmationStatusEnum


* `not_confirmed` (value: `"not_confirmed"`)

* `confirmed` (value: `"confirmed"`)





## Enum: ExportStatusEnum


* `not_exported` (value: `"not_exported"`)

* `exported` (value: `"exported"`)

* `ready` (value: `"ready"`)

* `failed` (value: `"failed"`)





## Enum: PaymentStatusEnum


* `not_paid` (value: `"not_paid"`)

* `part_paid` (value: `"part_paid"`)

* `paid` (value: `"paid"`)





## Enum: ShippingStatusEnum


* `not_shipped` (value: `"not_shipped"`)

* `part_shipped` (value: `"part_shipped"`)

* `shipped` (value: `"shipped"`)





## Enum: StatusEnum


* `created` (value: `"created"`)

* `new` (value: `"new"`)

* `open` (value: `"open"`)

* `completed` (value: `"completed"`)

* `cancelled` (value: `"cancelled"`)

* `replaced` (value: `"replaced"`)

* `failed` (value: `"failed"`)





## Enum: TaxationEnum


* `gross` (value: `"gross"`)

* `net` (value: `"net"`)




