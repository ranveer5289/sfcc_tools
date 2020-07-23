# DataApi.Store

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address1** | **String** | Returns the first address. | [optional] 
**address2** | **String** | Returns the second address value. | [optional] 
**cTestAttribute** | **[String]** |  | [optional] 
**cCountryCodeValue** | **String** | Country Code Value - for the form values | [optional] 
**cInventoryListId** | **String** | Store Inventory List ID | [optional] 
**city** | **String** | Returns the city. | [optional] 
**countryCode** | **String** | The two-character country code per ISO 3166-1 alpha-2. | [optional] 
**creationDate** | **Date** | Returns the value of attribute &#x27;creationDate&#x27;. | [optional] 
**email** | **String** | Email address to contact the store | [optional] 
**fax** | **String** | Returns the fax number . | [optional] 
**id** | **String** | The id for the store | [optional] 
**image** | [**MediaFile**](MediaFile.md) |  | [optional] 
**inventoryId** | **String** | The inventory list associated with the store | [optional] 
**lastModified** | **Date** | Returns the value of attribute &#x27;lastModified&#x27;. | [optional] 
**latitude** | **Number** | The latitude of the store | [optional] 
**link** | **String** | a URL that is used to get this instance.  The property is computed and cannot be changed. | [optional] 
**longitude** | **Number** | The longitude of the store | [optional] 
**name** | **String** | The name of the store | [optional] 
**phone** | **String** | Returns the phone number. | [optional] 
**posEnabled** | **Boolean** | Whether this store uses our Store product for Point-of-Sale | [optional] 
**postalCode** | **String** | The postal code for the store | [optional] 
**stateCode** | **String** | Returns the customer&#x27;s state. | [optional] 
**storeEvents** | [**{String: MarkupText}**](MarkupText.md) | The store events (localized) | [optional] 
**storeHours** | [**{String: MarkupText}**](MarkupText.md) | The store opening hours (localized) | [optional] 
**storeLocatorEnabled** | **Boolean** | Whether this store should appear in store locator searches | [optional] 

<a name="CountryCodeEnum"></a>
## Enum: CountryCodeEnum

* `US` (value: `"US"`)
* `CA` (value: `"CA"`)
* `DE` (value: `"DE"`)

