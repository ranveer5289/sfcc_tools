# DataApi.GiftCertificate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**Money**](Money.md) |  | [optional] 
**balance** | [**Money**](Money.md) |  | [optional] 
**creationDate** | **Date** | Returns the value of attribute &#x27;creationDate&#x27;. | [optional] 
**description** | **String** | The description of the gift certificate. | [optional] 
**enabled** | **Boolean** | The enabled flag of the gift certificate. | [optional] 
**lastModified** | **Date** | Returns the value of attribute &#x27;lastModified&#x27;. | [optional] 
**link** | **String** | The URL to get the gift certificate.  This is a computed attribute and cannot be modified. | [optional] 
**maskedGiftCertificateCode** | **String** | The masked gift certificate code with all but the  last 4 characters replaced with a &#x27;*&#x27; character.  This is a computed attribute and cannot be modified. | [optional] 
**merchantId** | **String** | The merchant ID of the gift certificate.  This is a unique attribute.  This is a computed attribute and cannot be modified.  This is used to get, update and the delete gift certificates. | [optional] 
**message** | **String** | The message to the recipient of the gift certificate. | [optional] 
**orderNo** | **String** | The order number of the gift certificate. | [optional] 
**recipientEmail** | **String** | The email address of the recipient of the gift certificate. | [optional] 
**recipientName** | **String** | The recipient of the gift certificate. | [optional] 
**senderName** | **String** | The sender of the gift certificate. | [optional] 
**status** | **String** | The status of the gift certificate.  While creating a gift certificate, user can set the status  to either \&quot;pending\&quot; or \&quot;issued\&quot; only. | [optional] 
**transactions** | [**[AccountTransaction]**](AccountTransaction.md) | The transactions of the gift certificate | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `issued` (value: `"issued"`)
* `partially_redeemed` (value: `"partially_redeemed"`)
* `pending` (value: `"pending"`)
* `redeemed` (value: `"redeemed"`)

