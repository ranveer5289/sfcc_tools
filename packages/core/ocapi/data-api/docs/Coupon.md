# DataApi.Coupon

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**couponId** | **String** | The id of the coupon. | [optional] [readonly] 
**creationDate** | **Date** | Returns the value of attribute &#39;creationDate&#39;. | [optional] [readonly] 
**description** | **String** | The description of the coupon. | [optional] 
**enabled** | **Boolean** | A flag indicating whether the coupon is enabled. | [optional] 
**exportedCodeCount** | **Number** | The number of coupon codes attached to the coupon that have been issued (request search only). | [optional] 
**lastModified** | **Date** | Returns the value of attribute &#39;lastModified&#39;. | [optional] [readonly] 
**link** | **String** | A link to the coupon. | [optional] 
**redemptionCount** | **Number** | The number of times the coupon has been redeemed (request search only). | [optional] 
**redemptionLimits** | [**RedemptionLimits**](RedemptionLimits.md) |  | [optional] 
**singleCode** | **String** | Single coupon code, only valid for Single Code type | [optional] 
**systemCodesConfig** | [**CouponSystemCodeConfig**](CouponSystemCodeConfig.md) |  | [optional] 
**totalCodesCount** | **Number** | The total number of coupon codes associated with this coupon | [optional] 
**type** | **String** | The type of the coupon code. | [optional] [readonly] 



## Enum: TypeEnum


* `single_code` (value: `"single_code"`)

* `multiple_codes` (value: `"multiple_codes"`)

* `system_codes` (value: `"system_codes"`)




