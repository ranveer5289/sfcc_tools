# DataApi.Customer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**birthday** | **Date** | The customer&#x27;s birthday. | [optional] 
**cFamilyStatus** | **String** |  | [optional] 
**companyName** | **String** | The customer&#x27;s company name. | [optional] 
**creationDate** | **Date** | Returns the value of attribute &#x27;creationDate&#x27;. | [optional] 
**credentials** | [**Credentials**](Credentials.md) |  | [optional] 
**customerId** | **String** | The customer&#x27;s id. Both registered and guest customers have a  customer id. | [optional] 
**customerNo** | **String** | The customer&#x27;s number. | [optional] 
**email** | **String** | The customer&#x27;s email address. | [optional] 
**fax** | **String** | The fax number to use for the customer.  The length is restricted to 32 characters. | [optional] 
**firstName** | **String** | The customer&#x27;s first name. | [optional] 
**gender** | **Number** | The customer&#x27;s gender. | [optional] 
**globalPartyId** | **String** | The Global Party ID is set by Customer 360 and identifies a person across multiple systems. | [optional] 
**jobTitle** | **String** | The customer&#x27;s job title. | [optional] 
**lastLoginTime** | **Date** | The last login time of the customer. | [optional] 
**lastModified** | **Date** | Returns the value of attribute &#x27;lastModified&#x27;. | [optional] 
**lastName** | **String** | The customer&#x27;s last name. | [optional] 
**lastVisitTime** | **Date** | The last visit time of the customer. | [optional] 
**phoneBusiness** | **String** | The customer&#x27;s business phone number. | [optional] 
**phoneHome** | **String** | The customer&#x27;s home phone number. | [optional] 
**phoneMobile** | **String** | The customer&#x27;s mobile phone number. | [optional] 
**preferredLocale** | **String** | The customer&#x27;s preferred locale, formatted with a hyphen. (For example: en-US)  If the request uses an underscore, as with the Java locale format, the stored value is converted to a hyphen.  (For example: en_US is stored as en-US) | [optional] 
**previousLoginTime** | **Date** | The time when the customer logged in previously. | [optional] 
**previousVisitTime** | **Date** | The time when the customer previously visited the store. | [optional] 
**primaryAddress** | [**CustomerAddress**](CustomerAddress.md) |  | [optional] 
**salutation** | **String** | The customer&#x27;s salutation. | [optional] 
**secondName** | **String** | The customer&#x27;s second name. | [optional] 
**suffix** | **String** | The customer&#x27;s suffix (for example, \&quot;Jr.\&quot; or \&quot;Sr.\&quot;). | [optional] 
**title** | **String** | The customer&#x27;s title (for example, \&quot;Mrs\&quot; or \&quot;Mr\&quot;). | [optional] 

<a name="GenderEnum"></a>
## Enum: GenderEnum

* `1` (value: `1`)
* `2` (value: `2`)

