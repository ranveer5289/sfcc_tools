# DataApi.Category

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cAlternativeUrl** | [**MarkupText**](MarkupText.md) |  | [optional] 
**cCatBannerID** | **String** | Used to define the content asset used to populate a grid page banner for a category. This value is applied to all sub-category navigation (cascading) if no specific catBannerID has been defined for  a sub-category. | [optional] 
**cCustomCSSFile** | [**MediaFile**](MediaFile.md) |  | [optional] 
**cEnableCompare** | **Boolean** | Used to define if/when the Compare feature is to be visualized in the storefront based on navigation. If enableCompare &#x3D; FALSE, no Compare checkboxes will be displayed in the grid view. If enableCompare &#x3D; TRUE, the category (and its children) will support the Compare feature. | [optional] 
**cHeaderMenuBanner** | [**MarkupText**](MarkupText.md) |  | [optional] 
**cHeaderMenuOrientation** | **String** | Which way to orient the menu and optional header menu HTML. Vertical will list all in one line. Horizontal will list in columns. | [optional] 
**cShowInMenu** | **Boolean** | Used to indicate that a category (such as Mens -&gt; Footwear -&gt; Boots) will display in the roll-over navigation. A sub-category only shows if also the parent category is marked as showInMenu. Up to three category levels are shown in roll-over navigation. | [optional] 
**cSizeChartID** | **String** | Used to define the content asset ID of the Size Chart that is appropriate for products whose PRIMARY category is the associated category (and its children). Whenever a product detail page (or quick view) is rendered, the Size Chart link is populated based on the value of this attribute for the products primary categorization. If not defined, NO size chart link is displayed. | [optional] 
**cSlotBannerHtml** | [**{String: MarkupText}**](MarkupText.md) |  | [optional] 
**cSlotBannerImage** | [**MediaFile**](MediaFile.md) |  | [optional] 
**catalogId** | **String** | The id of the catalog that contains it. | [optional] 
**categories** | [**[Category]**](Category.md) | The array of sub categories for the category. | [optional] 
**creationDate** | **Date** | Returns the value of attribute &#x27;creationDate&#x27;. | [optional] 
**description** | **{String: String}** | The localized description of the category. | [optional] 
**id** | **String** | The id of the category. | [optional] 
**image** | **String** | The name of the category image. The URL to the image is computed. | [optional] 
**lastModified** | **Date** | Returns the value of attribute &#x27;lastModified&#x27;. | [optional] 
**link** | **String** | The URL to get the category. This is a computed attribute and cannot be modified. | [optional] 
**name** | **{String: String}** | The localized name of the category. | [optional] 
**online** | **Boolean** | The online status of the category determines if it is visible in the storefront. Defaults to false if not specified on create. | [optional] 
**pageDescription** | **{String: String}** | The localized page description of the category. | [optional] 
**pageKeywords** | **{String: String}** | The localized page keywords for the category. | [optional] 
**pageTitle** | **{String: String}** | The localized page title of the category. | [optional] 
**parentCategoryId** | **String** | The id of the parent category. Defaults to root if not specified on create. | [optional] 
**paths** | [**[PathRecord]**](PathRecord.md) |  | [optional] 
**position** | **Number** | The position of the category determines the display order in the storefront. | [optional] 
**sortingRules** | [**[SortingRule]**](SortingRule.md) |  | [optional] 
**thumbnail** | **String** | The name of the category thumbnail. The URL to the thumbnail is computed. | [optional] 

<a name="CHeaderMenuOrientationEnum"></a>
## Enum: CHeaderMenuOrientationEnum

* `Horizontal` (value: `"Horizontal"`)
* `Vertical` (value: `"Vertical"`)

