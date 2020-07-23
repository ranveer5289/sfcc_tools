# ShopApi.Customer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**[CustomerAddress]**](CustomerAddress.md) | The customer&#x27;s addresses. | [optional] 
**authType** | **String** | The customer&#x27;s authorization type (indicates if the customer is a guest  or a registered customer). | [optional] 
**birthday** | **Date** | The customer&#x27;s birthday. | [optional] 
**cFamilyStatus** | **String** |  | [optional] 
**companyName** | **String** | The customer&#x27;s company name. | [optional] 
**creationDate** | **Date** | Returns the value of attribute &#x27;creationDate&#x27;. | [optional] 
**customerId** | **String** | The customer&#x27;s number (id). Both registered and guest customers have a  customer id. | [optional] 
**customerNo** | **String** | The customer&#x27;s number (id). Only a registered customer has a customer  number. | [optional] 
**email** | **String** | The customer&#x27;s email address. | [optional] 
**enabled** | **Boolean** | A flag indicating whether this customer is is enabled and can log in. | [optional] 
**fax** | **String** | The customer&#x27;s fax number. The length is restricted to 32 characters. | [optional] 
**firstName** | **String** | The customer&#x27;s first name. | [optional] 
**gender** | **Number** | The customer&#x27;s gender. | [optional] 
**jobTitle** | **String** | The customer&#x27;s job title. | [optional] 
**lastLoginTime** | **Date** | The time when the customer last logged in. | [optional] 
**lastModified** | **Date** | Returns the value of attribute &#x27;lastModified&#x27;. | [optional] 
**lastName** | **String** | The customer&#x27;s last name. | [optional] 
**lastVisitTime** | **Date** | The time when the customer last visited. | [optional] 
**login** | **String** | The customer&#x27;s login. | [optional] 
**note** | **String** | The customer&#x27;s note. | [optional] 
**paymentInstruments** | [**[CustomerPaymentInstrument]**](CustomerPaymentInstrument.md) | The customer&#x27;s payment instruments. | [optional] 
**phoneBusiness** | **String** | The customer&#x27;s business phone number. | [optional] 
**phoneHome** | **String** | The customer&#x27;s home phone number. | [optional] 
**phoneMobile** | **String** | The customer&#x27;s mobile phone number. | [optional] 
**preferredLocale** | **String** | The customer&#x27;s preferred locale. | [optional] 
**previousLoginTime** | **Date** | The time when the customer logged in previously. | [optional] 
**previousVisitTime** | **Date** | The time when the customer last visited the store. | [optional] 
**salutation** | **String** | The salutation to use for the customer. | [optional] 
**secondName** | **String** | The customer&#x27;s second name. | [optional] 
**suffix** | **String** | The customer&#x27;s suffix (for example, \&quot;Jr.\&quot; or \&quot;Sr.\&quot;). | [optional] 
**title** | **String** | The customer&#x27;s title (for example, \&quot;Mrs\&quot; or \&quot;Mr\&quot;). | [optional] 

<a name="AuthTypeEnum"></a>
## Enum: AuthTypeEnum

* `guest` (value: `"guest"`)
* `registered` (value: `"registered"`)


<a name="GenderEnum"></a>
## Enum: GenderEnum

* `1` (value: `1`)
* `2` (value: `2`)

