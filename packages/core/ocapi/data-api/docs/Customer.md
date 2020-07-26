# DataApi.Customer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**birthday** | **Date** | The customer&#39;s birthday. | [optional] 
**cCreatedInSalesforce** | **Boolean** |  | [optional] 
**cExternalPassword** | **String** |  | [optional] 
**cExternalPasswordDate** | **Date** |  | [optional] 
**cExternalPasswordSalesForceDate** | **Date** |  | [optional] 
**cFamilyStatus** | **String** |  | [optional] 
**cLastModifiedTime** | **Date** |  | [optional] 
**cMemberNr** | **String** |  | [optional] 
**cMemberNrIndex** | **String** |  | [optional] 
**cMigratedUser** | **Boolean** |  | [optional] 
**cReadyToExport** | **Boolean** | IN-5452: Indicates whether a profile has changed and the updated data is ready to be exported to a 3rd-party account management system. | [optional] 
**cSalt** | **String** |  | [optional] 
**cSynchedUserWithoutPassword** | **Boolean** |  | [optional] 
**companyName** | **String** | The customer&#39;s company name. | [optional] 
**creationDate** | **Date** | Returns the value of attribute &#39;creationDate&#39;. | [optional] [readonly] 
**credentials** | [**Credentials**](Credentials.md) |  | [optional] 
**customerId** | **String** | The customer&#39;s id. Both registered and guest customers have a  customer id. | [optional] 
**customerNo** | **String** | The customer&#39;s number. | [optional] 
**email** | **String** | The customer&#39;s email address. | [optional] 
**fax** | **String** | The fax number to use for the customer.  The length is restricted to 32 characters. | [optional] 
**firstName** | **String** | The customer&#39;s first name. | [optional] 
**gender** | **Number** | The customer&#39;s gender. | [optional] 
**globalPartyId** | **String** | The Global Party ID is set by Customer 360 and identifies a person across multiple systems. | [optional] 
**jobTitle** | **String** | The customer&#39;s job title. | [optional] 
**lastLoginTime** | **Date** | The last login time of the customer. | [optional] [readonly] 
**lastModified** | **Date** | Returns the value of attribute &#39;lastModified&#39;. | [optional] [readonly] 
**lastName** | **String** | The customer&#39;s last name. | [optional] 
**lastVisitTime** | **Date** | The last visit time of the customer. | [optional] [readonly] 
**phoneBusiness** | **String** | The customer&#39;s business phone number. | [optional] 
**phoneHome** | **String** | The customer&#39;s home phone number. | [optional] 
**phoneMobile** | **String** | The customer&#39;s mobile phone number. | [optional] 
**preferredLocale** | **String** | The customer&#39;s preferred locale, formatted with a hyphen. (For example: en-US)  If the request uses an underscore, as with the Java locale format, the stored value is converted to a hyphen.  (For example: en_US is stored as en-US) | [optional] [readonly] 
**previousLoginTime** | **Date** | The time when the customer logged in previously. | [optional] 
**previousVisitTime** | **Date** | The time when the customer previously visited the store. | [optional] 
**primaryAddress** | [**CustomerAddress**](CustomerAddress.md) |  | [optional] 
**salutation** | **String** | The customer&#39;s salutation. | [optional] 
**secondName** | **String** | The customer&#39;s second name. | [optional] 
**suffix** | **String** | The customer&#39;s suffix (for example, \&quot;Jr.\&quot; or \&quot;Sr.\&quot;). | [optional] 
**title** | **String** | The customer&#39;s title (for example, \&quot;Mrs\&quot; or \&quot;Mr\&quot;). | [optional] 



## Enum: GenderEnum


* `1` (value: `1`)

* `2` (value: `2`)




