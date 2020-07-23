# DataApi.InventoryList

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignedSites** | **[String]** | The list of sites this inventory list is assigned to.  The assigned sites is a computed attribute, and cannot be  directly modified. | [optional] 
**creationDate** | **Date** | Returns the value of attribute &#x27;creationDate&#x27;. | [optional] 
**defaultInStock** | **Boolean** | True if the default for the inventory list is to be in stock. THe default value is false if not specified. | [optional] 
**description** | **String** | The user supplied description of this instance. | [optional] 
**id** | **String** | The id for the inventory list, which is required and must be unique. | [optional] 
**lastModified** | **Date** | Returns the value of attribute &#x27;lastModified&#x27;. | [optional] 
**link** | **String** | URL that is used to get this instance.  The URL is a computed attribute, and cannot be modified. | [optional] 
**onOrderInventoryEnabled** | **Boolean** | True if the on order flag is enabled.  The default value is false if not specified. | [optional] 
**useBundleInventoryOnly** | **Boolean** | True if the inventory list is used in bundle inventory only.  The default value is false if not specified. | [optional] 
