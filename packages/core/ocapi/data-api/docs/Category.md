# DataApi.Category

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cAlternativeUrl** | [**MarkupText**](MarkupText.md) |  | [optional] 
**cBannerImage** | [**{String: MediaFile}**](MediaFile.md) |  | [optional] 
**cBannerImageMobile** | [**{String: MediaFile}**](MediaFile.md) |  | [optional] 
**cBannerText** | **{String: String}** |  | [optional] 
**cCatBannerID** | **String** | Used to define the content asset used to populate a grid page banner for a category. This value is applied to all sub-category navigation (cascading) if no specific catBannerID has been defined for  a sub-category. | [optional] 
**cCategoryVisualFilterEnabled** | **Boolean** |  | [optional] 
**cContinueText** | **{String: String}** |  | [optional] 
**cContinueUrl** | **{String: String}** | For example: https,Search-Show,cgid,intersport,prefn1,hasSalePrice,prefv1,sale | [optional] 
**cCustomCSSFile** | [**MediaFile**](MediaFile.md) |  | [optional] 
**cCustomDisplayName** | **{String: String}** | If this attribute is set, it will overwrite the auto generated title for the PLP | [optional] 
**cEnableCompare** | **Boolean** | Used to define if/when the Compare feature is to be visualized in the storefront based on navigation. If enableCompare &#x3D; FALSE, no Compare checkboxes will be displayed in the grid view. If enableCompare &#x3D; TRUE, the category (and its children) will support the Compare feature. | [optional] 
**cGoogleCategory** | **{String: String}** |  | [optional] 
**cHeaderMenuBanner** | [**MarkupText**](MarkupText.md) |  | [optional] 
**cHeaderMenuOrientation** | **String** | Which way to orient the menu and optional header menu HTML. Vertical will list all in one line. Horizontal will list in columns. | [optional] 
**cHideFromMenu** | **Boolean** |  | [optional] 
**cLink1Title** | **{String: String}** | Represent title of the link that will be rendered in category header section. If url is missing, it will be skipped. | [optional] 
**cLink1Url** | **String** | URL that will be rendered. Patterns are: [https, Search-Show, cgid, {categoryid}] | [https, Product-Show, pid, {productid}] | [https, Page-Show, cid, {contentid}] | [ _blank, http://www.google.com ] | [optional] 
**cLink2Title** | **{String: String}** | Represent title of the link that will be rendered in category header section. If url is missing, it will be skipped. | [optional] 
**cLink2Url** | **String** | URL that will be rendered. Patterns are: [https, Search-Show, cgid, {categoryid}] | [https, Product-Show, pid, {productid}] | [https, Page-Show, cid, {contentid}] | [ _blank, http://www.google.com ] | [optional] 
**cLink3Title** | **{String: String}** | Represent title of the link that will be rendered in category header section. If url is missing, it will be skipped. | [optional] 
**cLink3Url** | **String** | URL that will be rendered. Patterns are: [https, Search-Show, cgid, {categoryid}] | [https, Product-Show, pid, {productid}] | [https, Page-Show, cid, {contentid}] | [ _blank, http://www.google.com ] | [optional] 
**cLink4Title** | **{String: String}** | Represent title of the link that will be rendered in category header section. If url is missing, it will be skipped. | [optional] 
**cLink4Url** | **String** | URL that will be rendered. Patterns are: [https, Search-Show, cgid, {categoryid}] | [https, Product-Show, pid, {productid}] | [https, Page-Show, cid, {contentid}] | [ _blank, http://www.google.com ] | [optional] 
**cListerType** | **String** |  | [optional] 
**cShowInMenu** | **Boolean** | Used to indicate that a category (such as Mens -&gt; Footwear -&gt; Boots) will display in the roll-over navigation. A sub-category only shows if also the parent category is marked as showInMenu. Up to three category levels are shown in roll-over navigation. | [optional] 
**cSizeChartID** | **String** | Used to define the content asset ID of the Size Chart that is appropriate for products whose PRIMARY category is the associated category (and its children). Whenever a product detail page (or quick view) is rendered, the Size Chart link is populated based on the value of this attribute for the products primary categorization. If not defined, NO size chart link is displayed. | [optional] 
**cSizeGuide** | **{String: String}** |  | [optional] 
**cSlotBannerHtml** | [**{String: MarkupText}**](MarkupText.md) |  | [optional] 
**cSlotBannerImage** | [**MediaFile**](MediaFile.md) |  | [optional] 
**cTurntoEnableCCPinboardTeaser** | **Boolean** | Enables the checkout comments pinboard teaser on the page for this category | [optional] 
**cVisualFilterConfiguration** | **String** |  | [optional] 
**catalogId** | **String** | The id of the catalog that contains it. | [optional] 
**categories** | [**[Category]**](Category.md) | The array of sub categories for the category. | [optional] 
**creationDate** | **Date** | Returns the value of attribute &#39;creationDate&#39;. | [optional] [readonly] 
**description** | **{String: String}** | The localized description of the category. | [optional] 
**id** | **String** | The id of the category. | [optional] 
**image** | **String** | The name of the category image. The URL to the image is computed. | [optional] 
**lastModified** | **Date** | Returns the value of attribute &#39;lastModified&#39;. | [optional] [readonly] 
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



## Enum: CHeaderMenuOrientationEnum


* `Horizontal` (value: `"Horizontal"`)

* `Vertical` (value: `"Vertical"`)





## Enum: CListerTypeEnum


* `normal` (value: `"normal"`)

* `expertpicks` (value: `"expertpicks"`)

* `campaign` (value: `"campaign"`)




