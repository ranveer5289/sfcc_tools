# DataApi.ProductInventoryRecord

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocation** | [**ProductInventoryRecordAllocation**](ProductInventoryRecordAllocation.md) |  | [optional] 
**ats** | **Number** | The quantity of items available to sell (ATS). This is calculated as the  allocation plus the preorderBackorderAllocation minus the turnover. | [optional] 
**creationDate** | **Date** | Returns the value of attribute &#x27;creationDate&#x27;. | [optional] 
**inStockDate** | **Date** | The date that the item is expected to be in stock. | [optional] 
**inventoryListId** | **String** | The user supplied ID of the inventory list. | [optional] 
**inventoryTurnover** | **Number** | The sum of all inventory transactions (decrements and increments)  that have been recorded subsequent to the allocation was reset date.  The quantity value can be negative due to higher quantity of inventory decrements than increments. | [optional] 
**lastModified** | **Date** | Returns the value of attribute &#x27;lastModified&#x27;. | [optional] 
**link** | **String** | The URL that is used to get this instance. | [optional] 
**perpetualFlag** | **Boolean** | The flag that determines if the product is perpetually in stock. | [optional] 
**preOrderBackOrderAllocation** | **Number** | The quantity of items that are allocated for sale, beyond the initial stock allocation. | [optional] 
**preOrderBackOrderHandling** | **String** | The enum holding the records pre-backorder-handling configuration.  Possible values are NONE, PREORDER and BACKORDER.  Method returns NONE in case the record pre-backorder-handling-code is null or unknown. | [optional] 
**productId** | **String** | The user supplied ID of the product. | [optional] 
**productName** | **String** | The name of the product. | [optional] 
**quantityOnOrder** | **Number** | The on order quantity, the quantity of all transactions for  this record since the allocation reset date. | [optional] 
**stockLevel** | **Number** | The current stock level. This is calculated as the allocation minus the turnover. | [optional] 

<a name="PreOrderBackOrderHandlingEnum"></a>
## Enum: PreOrderBackOrderHandlingEnum

* `none` (value: `"none"`)
* `preorder` (value: `"preorder"`)
* `backorder` (value: `"backorder"`)

