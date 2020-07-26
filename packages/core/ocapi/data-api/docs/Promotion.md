# DataApi.Promotion

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived** | **Boolean** | Determines whether or not this promotion is archived. This attribute is allowed to be updated when using the Open  Commerce API to update multiple promotions at once. | [optional] 
**assignmentInformation** | [**PromotionAssignmentInformation**](PromotionAssignmentInformation.md) |  | [optional] 
**cDontApplyLoyalty** | **Boolean** |  | [optional] 
**calloutMsg** | [**{String: MarkupText}**](MarkupText.md) | The localized callout message of the promotion. | [optional] 
**creationDate** | **Date** | Returns the value of attribute &#39;creationDate&#39;. | [optional] [readonly] 
**currencyCode** | **String** | The ISO 4217 mnemonic code of the currency this promotion is restricted to. If not populated, then there is no  currency restriction on the promotion. | [optional] 
**disableGloballyExcluded** | **Boolean** | Determines whether or not this promotion ignores the global product exclusions for promotions. | [optional] 
**enabled** | **Boolean** | Determines whether or not this promotion is enabled. This attribute is allowed to be updated when using the Open  Commerce API to update multiple promotions at once. | [optional] 
**exclusivity** | **String** | Determines if the promotion can be combined with other promotions of the same promotion class or if it cannot be  combined with any other promotions. This attribute is allowed to be updated when using the Open Commerce API to  update multiple promotions at once. | [optional] 
**id** | **String** | The id for the promotion. | [optional] 
**lastModified** | **Date** | Returns the value of attribute &#39;lastModified&#39;. | [optional] [readonly] 
**link** | **String** | A URL that is used to get the details of this promotion. | [optional] 
**name** | **{String: String}** | The user supplied name of this promotion, which can be localized | [optional] 
**promotionClass** | **String** | The class of the promotion. If the promotion class is modified, then the promotion rule and all of its values,  such as whether or not to disable global product exclusions, will be reset. | [optional] 
**tags** | [**[Tag]**](Tag.md) | Returns the list of tags assigned to this promotion. If used to set the tags on a promotion, the promotion will  only have the tags passed in the input. Any existing tags will be removed. | [optional] 



## Enum: ExclusivityEnum


* `no` (value: `"no"`)

* `class` (value: `"class"`)

* `global` (value: `"global"`)





## Enum: PromotionClassEnum


* `product` (value: `"product"`)

* `shipping` (value: `"shipping"`)

* `order` (value: `"order"`)




