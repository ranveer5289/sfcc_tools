# DataApi.Product

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignedCategories** | [**[CatalogCategoryId]**](CatalogCategoryId.md) | The catalog categories that the product is assigned to | [optional] 
**ats** | **Number** | The ATS(Available To Sell) inventory value of the product. This is a calculated value. | [optional] 
**brand** | **String** | The brand of the product. | [optional] 
**bundledProducts** | [**[Product]**](Product.md) | The array of bundled products which the product includes. | [optional] 
**cAvailableForInStorePickup** | **Boolean** | Signals if there are inventory lists for brick-and-mortar stores associated with this product. | [optional] 
**cBatteryLife** | **String** |  | [optional] 
**cBatteryType** | **String** |  | [optional] 
**cBootType** | **[String]** | Type of Boot for search refinement. | [optional] 
**cBottomType** | **[String]** | Bottom type for search refinement | [optional] 
**cColor** | **String** | Product color used for variation attribute | [optional] 
**cConsoleWarranty** | **String** |  | [optional] 
**cCustomCSSFile** | [**MediaFile**](MediaFile.md) |  | [optional] 
**cDigitalCameraFeatures** | **[String]** |  | [optional] 
**cDigitalCameraPixels** | **String** |  | [optional] 
**cDigitalCameraType** | **String** |  | [optional] 
**cDigitalCameraWarranty** | **String** |  | [optional] 
**cDimDepth** | **String** |  | [optional] 
**cDimHeight** | **String** |  | [optional] 
**cDimWeight** | **String** |  | [optional] 
**cDimWidth** | **String** |  | [optional] 
**cDisplaySize** | **String** |  | [optional] 
**cGameGenre** | **[String]** |  | [optional] 
**cGameRating** | **String** |  | [optional] 
**cGameSystemType** | **String** |  | [optional] 
**cGpsFeatures** | **[String]** |  | [optional] 
**cGpsType** | **[String]** |  | [optional] 
**cGpsWarranty** | **String** |  | [optional] 
**cImageAspectRatio** | **String** |  | [optional] 
**cIsNew** | **Boolean** |  | [optional] 
**cIsNewtest** | **Boolean** | This indiciates if the product is a new arrival. | [optional] 
**cIsSale** | **Boolean** | This is the help text. It is used for sorting rules. | [optional] 
**cKidsAge** | **String** | Kids Age used for search refinements | [optional] 
**cLength** | **String** | This attribute is used for mens and womens pants lengths. | [optional] 
**cLensAperture** | **String** |  | [optional] 
**cMaterialTest** | **[String]** |  | [optional] 
**cMediaFormat** | **[String]** | Media Format | [optional] 
**cMemorySize** | **String** | Memory Size | [optional] 
**cMemoryType** | **[String]** |  | [optional] 
**cMusicStorage** | **String** |  | [optional] 
**cOpticalZoom** | **String** |  | [optional] 
**cOuterwearType** | **String** | Type of Outerwear for search refinement | [optional] 
**cPortableAudioType** | **[String]** |  | [optional] 
**cRefinementColor** | **String** |  | [optional] 
**cResolution** | **String** |  | [optional] 
**cSandalType** | **String** | Type of Sandal for search refinement | [optional] 
**cSheets** | **[String]** | test attribute | [optional] 
**cShoeType** | **String** | Type of Shoe for search refinements | [optional] 
**cSize** | **String** | This attribute is used for all footwear, apparel and accessory sizing for men, women and kids products. | [optional] 
**cSkinConcern** | **[String]** |  | [optional] 
**cStyleNumber** | **String** |  | [optional] 
**cTabDescription** | [**MarkupText**](MarkupText.md) |  | [optional] 
**cTabDetails** | [**MarkupText**](MarkupText.md) |  | [optional] 
**cTest** | [**MarkupText**](MarkupText.md) |  | [optional] 
**cTopType** | **String** | Type of tops in clothing | [optional] 
**cTvSignalFormat** | **String** |  | [optional] 
**cTvSize** | **String** |  | [optional] 
**cTvType** | **String** |  | [optional] 
**cTvWarranty** | **String** |  | [optional] 
**cVideoStorage** | **String** |  | [optional] 
**cWaist** | **String** | Attribute used for apparel waist sizing. | [optional] 
**cWidth** | **String** | This attribute is used for shoe widths for mens, womens and kids. | [optional] 
**classificationCategory** | [**CatalogCategoryId**](CatalogCategoryId.md) |  | [optional] 
**creationDate** | **Date** | Returns the value of attribute &#39;creationDate&#39;. | [optional] [readonly] 
**defaultVariantId** | **String** | The ID of the product&#39;s default variant. | [optional] 
**ean** | **String** | The European Article Number of the product. | [optional] 
**id** | **String** | The ID (SKU) of the product. | [optional] 
**image** | [**MediaFile**](MediaFile.md) |  | [optional] 
**imageGroups** | [**[ImageGroup]**](ImageGroup.md) | The array of product image groups. | [optional] 
**inStock** | **Boolean** | The flag that indicates if the product is in stock, or not. This is a calculated value. | [optional] 
**lastModified** | **Date** | Returns the value of attribute &#39;lastModified&#39;. | [optional] [readonly] 
**link** | **String** | A link to the product. | [optional] 
**localizedTaxClassId** | **{String: String}** |  | [optional] 
**longDescription** | [**{String: MarkupText}**](MarkupText.md) | The localized long description of the product. | [optional] 
**manufacturerName** | **String** | The name of the product&#39;s manufacturer. | [optional] 
**manufacturerSku** | **String** | The SKU of the product&#39;s manufacturer. | [optional] 
**master** | [**Master**](Master.md) |  | [optional] 
**name** | **{String: String}** | The localized name of the product. | [optional] 
**online** | **Boolean** | The flag that indicates if the product is online, or not. This is a calculated value. | [optional] 
**onlineFlag** | **{String: Boolean}** | The site specific online status of the product. | [optional] 
**owningCatalogId** | **String** | The ID of the catalog that owns the product. | [optional] 
**owningCatalogName** | **{String: String}** | The localized name of the catalog that owns the product. | [optional] 
**pageDescription** | **{String: String}** | The localized page description of the product. | [optional] 
**pageKeywords** | **{String: String}** | The localized page keywords of the product. | [optional] 
**pageTitle** | **{String: String}** | The localized page title of the product. | [optional] 
**price** | **Number** | The price of the product. | [optional] 
**priceCurrency** | **String** | The currency code for product&#39;s price. | [optional] 
**pricePerUnit** | **Number** | The price per unit of the product | [optional] 
**primaryCategories** | [**[CatalogCategoryId]**](CatalogCategoryId.md) | The catalog categories that are primary for the product | [optional] 
**primaryCategoryId** | **String** | The id of the products primary category. | [optional] 
**productBundles** | [**[Product]**](Product.md) | The array of product bundles which the product belongs to. | [optional] 
**productOptions** | [**[ProductOption]**](ProductOption.md) | The array of product options. This is applicable for products of type \&quot;option\&quot;. | [optional] 
**productSets** | [**[Product]**](Product.md) | The array of product sets which the product belongs to. | [optional] 
**searchable** | **{String: Boolean}** | The site specific searchable status of the product. | [optional] 
**setProducts** | [**[Product]**](Product.md) | The array of set products which the product includes. | [optional] 
**shortDescription** | [**{String: MarkupText}**](MarkupText.md) | The localized short description of the product. | [optional] 
**taxClassId** | **String** | The catalog categories that the product is assigned to | [optional] 
**type** | [**ProductType**](ProductType.md) |  | [optional] 
**unit** | **String** | The sales unit of the product. | [optional] 
**unitMeasure** | **String** | The unitMeasure of the product. | [optional] 
**unitQuantity** | **Number** | The unitQuantity of the product. | [optional] 
**upc** | **String** | The Universal Product Code of the product. | [optional] 
**validFrom** | **{String: Date}** | The time when product is valid from. | [optional] 
**validTo** | **{String: Date}** | The time when product is valid to. | [optional] 
**variants** | [**[Variant]**](Variant.md) | The array of variants of the product. This is applicable for product types \&quot;master\&quot; and \&quot;variation_group\&quot; only. | [optional] 
**variationAttributes** | [**[VariationAttribute]**](VariationAttribute.md) | The sorted array of variation attributes assigned to the product. This is applicable for product types \&quot;master\&quot;,  \&quot;variation_group\&quot; and \&quot;variant\&quot; only. | [optional] 
**variationGroups** | [**[VariationGroup]**](VariationGroup.md) | The array of variation groups in the product. This is applicable for product type \&quot;master\&quot; only. | [optional] 
**variationValues** | **{String: String}** | The variation values selected for the product in variation attribute id and value pairs. This is applicable for product types \&quot;variant\&quot; and  \&quot;variation_group\&quot; only. | [optional] 



## Enum: [CBootTypeEnum]


* `0010` (value: `"0010"`)

* `0020` (value: `"0020"`)

* `0030` (value: `"0030"`)

* `0040` (value: `"0040"`)

* `0050` (value: `"0050"`)

* `0060` (value: `"0060"`)

* `0070` (value: `"0070"`)





## Enum: [CBottomTypeEnum]


* `0010` (value: `"0010"`)

* `0020` (value: `"0020"`)

* `0030` (value: `"0030"`)

* `0040` (value: `"0040"`)

* `0050` (value: `"0050"`)

* `0060` (value: `"0060"`)

* `0070` (value: `"0070"`)

* `0080` (value: `"0080"`)





## Enum: [CDigitalCameraFeaturesEnum]


* `0010` (value: `"0010"`)

* `0020` (value: `"0020"`)

* `0030` (value: `"0030"`)

* `0040` (value: `"0040"`)

* `0050` (value: `"0050"`)

* `0060` (value: `"0060"`)

* `0070` (value: `"0070"`)

* `0080` (value: `"0080"`)

* `0090` (value: `"0090"`)

* `0100` (value: `"0100"`)

* `0110` (value: `"0110"`)

* `0120` (value: `"0120"`)

* `0130` (value: `"0130"`)

* `0140` (value: `"0140"`)

* `0150` (value: `"0150"`)

* `0160` (value: `"0160"`)

* `0170` (value: `"0170"`)

* `0180` (value: `"0180"`)

* `0190` (value: `"0190"`)

* `0200` (value: `"0200"`)

* `0210` (value: `"0210"`)

* `0220` (value: `"0220"`)

* `0230` (value: `"0230"`)

* `0240` (value: `"0240"`)

* `0250` (value: `"0250"`)

* `0260` (value: `"0260"`)

* `0270` (value: `"0270"`)

* `0280` (value: `"0280"`)





## Enum: [CGameGenreEnum]


* `Action` (value: `"Action"`)

* `Educational` (value: `"Educational"`)

* `Kids` (value: `"Kids"`)

* `Racing` (value: `"Racing"`)

* `Role-Playing` (value: `"Role-Playing"`)

* `Sports` (value: `"Sports"`)

* `Strategy` (value: `"Strategy"`)





## Enum: [CGpsFeaturesEnum]


* `0010` (value: `"0010"`)

* `0020` (value: `"0020"`)

* `0030` (value: `"0030"`)

* `0040` (value: `"0040"`)

* `0050` (value: `"0050"`)

* `0060` (value: `"0060"`)

* `0070` (value: `"0070"`)

* `0080` (value: `"0080"`)

* `0090` (value: `"0090"`)

* `0100` (value: `"0100"`)

* `0110` (value: `"0110"`)

* `0120` (value: `"0120"`)

* `0130` (value: `"0130"`)

* `0140` (value: `"0140"`)

* `0150` (value: `"0150"`)

* `0160` (value: `"0160"`)

* `0170` (value: `"0170"`)

* `0180` (value: `"0180"`)

* `0190` (value: `"0190"`)

* `0200` (value: `"0200"`)

* `0210` (value: `"0210"`)

* `0230` (value: `"0230"`)





## Enum: [CGpsTypeEnum]


* `0010` (value: `"0010"`)

* `0020` (value: `"0020"`)

* `0030` (value: `"0030"`)

* `0040` (value: `"0040"`)





## Enum: CKidsAgeEnum


* `0010` (value: `"0010"`)

* `0020` (value: `"0020"`)

* `0030` (value: `"0030"`)

* `0040` (value: `"0040"`)

* `0050` (value: `"0050"`)

* `0060` (value: `"0060"`)

* `0070` (value: `"0070"`)





## Enum: [CMaterialTestEnum]


* `cotton` (value: `"cotton"`)

* `wool` (value: `"wool"`)

* `polyester` (value: `"polyester"`)





## Enum: [CMediaFormatEnum]


* `0010` (value: `"0010"`)

* `0020` (value: `"0020"`)

* `0030` (value: `"0030"`)

* `0040` (value: `"0040"`)

* `0050` (value: `"0050"`)

* `0060` (value: `"0060"`)

* `0070` (value: `"0070"`)

* `0080` (value: `"0080"`)

* `0090` (value: `"0090"`)

* `0100` (value: `"0100"`)





## Enum: [CMemoryTypeEnum]


* `0010` (value: `"0010"`)

* `0020` (value: `"0020"`)

* `0030` (value: `"0030"`)

* `0040` (value: `"0040"`)

* `0050` (value: `"0050"`)

* `0060` (value: `"0060"`)

* `0070` (value: `"0070"`)

* `0080` (value: `"0080"`)

* `0090` (value: `"0090"`)





## Enum: COuterwearTypeEnum


* `0010` (value: `"0010"`)

* `0020` (value: `"0020"`)

* `0030` (value: `"0030"`)

* `0040` (value: `"0040"`)

* `0050` (value: `"0050"`)

* `0060` (value: `"0060"`)

* `0070` (value: `"0070"`)

* `0080` (value: `"0080"`)





## Enum: [CPortableAudioTypeEnum]


* `0010` (value: `"0010"`)

* `0020` (value: `"0020"`)

* `0030` (value: `"0030"`)





## Enum: CRefinementColorEnum


* `black` (value: `"black"`)

* `blue` (value: `"blue"`)

* `green` (value: `"green"`)

* `red` (value: `"red"`)

* `orange` (value: `"orange"`)

* `pink` (value: `"pink"`)

* `purple` (value: `"purple"`)

* `white` (value: `"white"`)

* `yellow` (value: `"yellow"`)

* `grey` (value: `"grey"`)

* `beige` (value: `"beige"`)

* `miscellaneous` (value: `"miscellaneous"`)

* `brown` (value: `"brown"`)

* `navy` (value: `"navy"`)





## Enum: CSandalTypeEnum


* `0010` (value: `"0010"`)

* `0020` (value: `"0020"`)

* `0030` (value: `"0030"`)





## Enum: [CSheetsEnum]


* `value1` (value: `"value1"`)

* `value2` (value: `"value2"`)

* `value3` (value: `"value3"`)





## Enum: CShoeTypeEnum


* `0010` (value: `"0010"`)

* `0020` (value: `"0020"`)

* `0030` (value: `"0030"`)

* `0040` (value: `"0040"`)

* `0050` (value: `"0050"`)

* `0060` (value: `"0060"`)

* `0070` (value: `"0070"`)

* `0080` (value: `"0080"`)

* `0090` (value: `"0090"`)

* `0100` (value: `"0100"`)

* `0110` (value: `"0110"`)





## Enum: [CSkinConcernEnum]


* `dryTight` (value: `"dryTight"`)

* `comprehensive` (value: `"comprehensive"`)

* `liftingLossFirm` (value: `"liftingLossFirm"`)





## Enum: CTvTypeEnum


* `0010` (value: `"0010"`)

* `0020` (value: `"0020"`)

* `0030` (value: `"0030"`)

* `0040` (value: `"0040"`)




