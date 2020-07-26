# ShopApi.Category

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cAlternativeUrl** | **String** | Renders an alternative URL in main navigation. Uses Commerce Cloud content url notation. For example: $url(&#39;Account-Show&#39;)$ or normal URL http://xchange.demandware.com | [optional] 
**cBannerImage** | **String** |  | [optional] 
**cBannerImageMobile** | **String** |  | [optional] 
**cBannerText** | **String** |  | [optional] 
**cCatBannerID** | **String** | Used to define the content asset used to populate a grid page banner for a category. This value is applied to all sub-category navigation (cascading) if no specific catBannerID has been defined for  a sub-category. | [optional] 
**cCategoryVisualFilterEnabled** | **Boolean** |  | [optional] 
**cContinueText** | **String** |  | [optional] 
**cContinueUrl** | **String** | For example: https,Search-Show,cgid,intersport,prefn1,hasSalePrice,prefv1,sale | [optional] 
**cCustomCSSFile** | **String** | Use this attribute to apply custom styles for this category. | [optional] 
**cCustomDisplayName** | **String** | If this attribute is set, it will overwrite the auto generated title for the PLP | [optional] 
**cEnableCompare** | **Boolean** | Used to define if/when the Compare feature is to be visualized in the storefront based on navigation. If enableCompare &#x3D; FALSE, no Compare checkboxes will be displayed in the grid view. If enableCompare &#x3D; TRUE, the category (and its children) will support the Compare feature. | [optional] 
**cGoogleCategory** | **String** |  | [optional] 
**cHeaderMenuBanner** | **String** |  | [optional] 
**cHeaderMenuOrientation** | **String** | Which way to orient the menu and optional header menu HTML. Vertical will list all in one line. Horizontal will list in columns. | [optional] 
**cHideFromMenu** | **Boolean** |  | [optional] 
**cLink1Title** | **String** | Represent title of the link that will be rendered in category header section. If url is missing, it will be skipped. | [optional] 
**cLink1Url** | **String** | URL that will be rendered. Patterns are: [https, Search-Show, cgid, {categoryid}] | [https, Product-Show, pid, {productid}] | [https, Page-Show, cid, {contentid}] | [ _blank, http://www.google.com ] | [optional] 
**cLink2Title** | **String** | Represent title of the link that will be rendered in category header section. If url is missing, it will be skipped. | [optional] 
**cLink2Url** | **String** | URL that will be rendered. Patterns are: [https, Search-Show, cgid, {categoryid}] | [https, Product-Show, pid, {productid}] | [https, Page-Show, cid, {contentid}] | [ _blank, http://www.google.com ] | [optional] 
**cLink3Title** | **String** | Represent title of the link that will be rendered in category header section. If url is missing, it will be skipped. | [optional] 
**cLink3Url** | **String** | URL that will be rendered. Patterns are: [https, Search-Show, cgid, {categoryid}] | [https, Product-Show, pid, {productid}] | [https, Page-Show, cid, {contentid}] | [ _blank, http://www.google.com ] | [optional] 
**cLink4Title** | **String** | Represent title of the link that will be rendered in category header section. If url is missing, it will be skipped. | [optional] 
**cLink4Url** | **String** | URL that will be rendered. Patterns are: [https, Search-Show, cgid, {categoryid}] | [https, Product-Show, pid, {productid}] | [https, Page-Show, cid, {contentid}] | [ _blank, http://www.google.com ] | [optional] 
**cListerType** | **String** |  | [optional] 
**cShowInMenu** | **Boolean** | Used to indicate that a category (such as Mens -&gt; Footwear -&gt; Boots) will display in the roll-over navigation. A sub-category only shows if also the parent category is marked as showInMenu. Up to three category levels are shown in roll-over navigation. | [optional] 
**cSizeChartID** | **String** | Used to define the content asset ID of the Size Chart that is appropriate for products whose PRIMARY category is the associated category (and its children). Whenever a product detail page (or quick view) is rendered, the Size Chart link is populated based on the value of this attribute for the products primary categorization. If not defined, NO size chart link is displayed. | [optional] 
**cSizeGuide** | **String** |  | [optional] 
**cSlotBannerHtml** | **String** |  | [optional] 
**cSlotBannerImage** | **String** | Image used on either the top or bottom slot on the category landing pages. | [optional] 
**cTurntoEnableCCPinboardTeaser** | **Boolean** | Enables the checkout comments pinboard teaser on the page for this category | [optional] 
**cVisualFilterConfiguration** | **String** |  | [optional] 
**categories** | [**[Category]**](Category.md) | Array of subcategories. Can be empty. | [optional] 
**description** | **String** | The localized description of the category. | [optional] 
**id** | **String** | The id of the category. | [optional] 
**image** | **String** | The URL to the category image. | [optional] 
**name** | **String** | The localized name of the category. | [optional] 
**pageDescription** | **String** | The localized page description of the category. | [optional] 
**pageKeywords** | **String** | The localized page keywords of the category. | [optional] 
**pageTitle** | **String** | The localized page title of the category. | [optional] 
**parentCategoryId** | **String** | The id of the parent category. | [optional] 
**thumbnail** | **String** | The URL to the category thumbnail. | [optional] 



## Enum: CHeaderMenuOrientationEnum


* `Horizontal` (value: `"Horizontal"`)

* `Vertical` (value: `"Vertical"`)





## Enum: CListerTypeEnum


* `normal` (value: `"normal"`)

* `expertpicks` (value: `"expertpicks"`)

* `campaign` (value: `"campaign"`)




