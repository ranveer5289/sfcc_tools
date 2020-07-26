# DataApi.Product

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignedCategories** | [**[CatalogCategoryId]**](CatalogCategoryId.md) | The catalog categories that the product is assigned to | [optional] 
**ats** | **Number** | The ATS(Available To Sell) inventory value of the product. This is a calculated value. | [optional] 
**brand** | **String** | The brand of the product. | [optional] 
**bundledProducts** | [**[Product]**](Product.md) | The array of bundled products which the product includes. | [optional] 
**cEUSize** | **String** |  | [optional] 
**cIsNew** | **{String: Boolean}** | New Arrivals for sorting | [optional] 
**cOnSale** | **{String: Boolean}** |  | [optional] 
**cProductCluster** | **{String: Number}** | Group sub-categories of products within a category for sorting. | [optional] 
**cProductTypeGroup** | **{String: Number}** |  | [optional] 
**cUKSize** | **String** |  | [optional] 
**cUSSize** | **String** |  | [optional] 
**cAvailableForInStorePickup** | **Boolean** | Signals if there are inventory lists for brick-and-mortar stores associated with this product. | [optional] 
**cAvataxClassID** | **String** |  | [optional] 
**cBackOrder** | **{String: Boolean}** |  | [optional] 
**cBackgroundColor** | **String** |  | [optional] 
**cBadgeCallout** | **{String: String}** |  | [optional] 
**cBatteryLife** | **String** |  | [optional] 
**cBatteryType** | **String** |  | [optional] 
**cBindingType** | **{String: [String]}** | Binding type of the skis | [optional] 
**cBindingsIncluded** | **Boolean** | True if a ski has bindings included in the package | [optional] 
**cBootType** | **{String: [String]}** | Boot type of the bindings | [optional] 
**cBottomType** | **[String]** | Bottom type for search refinement | [optional] 
**cBraFinderImpact** | **[String]** | The value contained is used on size level to determine which impact attribute(s) belong to a sports bra | [optional] 
**cCollection** | **{String: String}** |  | [optional] 
**cColor** | **String** | Product color used for variation attribute | [optional] 
**cCommercialColor** | **{String: String}** |  | [optional] 
**cConfiguratorGroupingID** | **{String: [String]}** |  | [optional] 
**cConfiguratorSports** | **{String: [String]}** |  | [optional] 
**cConfiguratorStyle** | **{String: [String]}** |  | [optional] 
**cConfiguratorSubStyle** | **{String: [String]}** |  | [optional] 
**cConsoleWarranty** | **String** |  | [optional] 
**cContentAssetIds** | **[String]** |  | [optional] 
**cCustomCSSFile** | [**MediaFile**](MediaFile.md) |  | [optional] 
**cDigitalCameraFeatures** | **[String]** |  | [optional] 
**cDigitalCameraPixels** | **String** |  | [optional] 
**cDigitalCameraType** | **String** |  | [optional] 
**cDigitalCameraWarranty** | **String** |  | [optional] 
**cDimDepth** | **String** |  | [optional] 
**cDimHeight** | **String** |  | [optional] 
**cDimWeight** | **String** |  | [optional] 
**cDimWidth** | **String** |  | [optional] 
**cDiscountPercentage** | **{String: Number}** | The value of a discount as proportion of sale price to normal price (for example, a product that has a sale price of 90EUR and is normally 100EUR would have a discountPercentage of 10.00) | [optional] 
**cDisplaySize** | **String** |  | [optional] 
**cExpertReviewBackgroundImage** | [**{String: MediaFile}**](MediaFile.md) |  | [optional] 
**cExpertReviewBadgeText** | **{String: String}** |  | [optional] 
**cExpertReviewImage** | [**MediaFile**](MediaFile.md) |  | [optional] 
**cExpertReviewName** | **{String: String}** |  | [optional] 
**cExpertReviewQuote** | **{String: String}** |  | [optional] 
**cExpertReviewText** | [**{String: MarkupText}**](MarkupText.md) |  | [optional] 
**cExpertReviewTitle** | **{String: String}** |  | [optional] 
**cExpertReviewUSP1** | **{String: String}** |  | [optional] 
**cExpertReviewUSP2** | **{String: String}** |  | [optional] 
**cExpertReviewUSP3** | **{String: String}** |  | [optional] 
**cExpertReviewUSP4** | **{String: String}** |  | [optional] 
**cExpertReviewUSP5** | **{String: String}** |  | [optional] 
**cExpertReviewUSP6** | **{String: String}** |  | [optional] 
**cExpertReviewVideoId** | **String** |  | [optional] 
**cFbpBlockColor** | **String** |  | [optional] 
**cFbpIsEnabled** | **{String: Boolean}** |  | [optional] 
**cFbpPlayerClub** | **{String: String}** |  | [optional] 
**cFbpPlayerName** | **String** |  | [optional] 
**cFbpPlayerNumberOfAssists** | **Number** |  | [optional] 
**cFbpPlayerNumberOfGoals** | **Number** |  | [optional] 
**cFbpPlayerNumberOfMatches** | **Number** |  | [optional] 
**cFbpPlayerPortrait** | [**MediaFile**](MediaFile.md) |  | [optional] 
**cFbpStatsBackgroundImage** | [**MediaFile**](MediaFile.md) |  | [optional] 
**cFbpStatsNumberOfGoals** | **Number** |  | [optional] 
**cFbpStatsNumberOfMatches** | **Number** |  | [optional] 
**cFbpStatsNumberOfPlayers** | **Number** |  | [optional] 
**cFeatures** | **{String: String}** |  | [optional] 
**cFolderProduct** | **Boolean** |  | [optional] 
**cGameGenre** | **[String]** |  | [optional] 
**cGameRating** | **String** |  | [optional] 
**cGameSystemType** | **String** |  | [optional] 
**cGender** | **{String: [String]}** |  | [optional] 
**cGiftcardStyle** | **String** |  | [optional] 
**cGiftcardValue** | **String** |  | [optional] 
**cGoodForApparel** | **[String]** |  | [optional] 
**cGoodForConditions** | **[String]** |  | [optional] 
**cGoodForFeel** | **[String]** | Used for good feel data on PDP pages. Currently, possible values are \&quot;Longer, Faster, 24/7\&quot; | [optional] 
**cGoodForOutdoor** | **[String]** |  | [optional] 
**cGoodForOutdoorFootwear** | **[String]** |  | [optional] 
**cGoodForRunning** | **[String]** |  | [optional] 
**cGoodForType** | **[String]** |  | [optional] 
**cGoodForWintersports** | **[String]** |  | [optional] 
**cGoogleProductCategoryID** | **String** | Category ID defined on master product which is send as google-category-id in shopping feed | [optional] 
**cGpsFeatures** | **[String]** |  | [optional] 
**cGpsType** | **[String]** |  | [optional] 
**cGpsWarranty** | **String** |  | [optional] 
**cHasSalePrice** | **{String: String}** |  | [optional] 
**cHeavy** | **Boolean** |  | [optional] 
**cIicCategory** | **{String: String}** | A further refinement of a product category, used for filtering and visual navigation | [optional] 
**cImageAspectRatio** | **String** |  | [optional] 
**cIsExpertPick** | **{String: Boolean}** |  | [optional] 
**cIsNew** | **Boolean** |  | [optional] 
**cIsNewtest** | **Boolean** | This indiciates if the product is a new arrival. | [optional] 
**cIsOnlineOnly** | **{String: Boolean}** | Is the product only available online? | [optional] 
**cIsOutlet** | **{String: Boolean}** |  | [optional] 
**cIsSale** | **Boolean** | This is the help text. It is used for sorting rules. | [optional] 
**cKidsAge** | **String** | Kids Age used for search refinements | [optional] 
**cLength** | **String** | This attribute is used for mens and womens pants lengths. | [optional] 
**cLensAperture** | **String** |  | [optional] 
**cLocalSize** | **String** |  | [optional] 
**cLocalSizeFormat** | **String** |  | [optional] 
**cMaterial** | **{String: String}** |  | [optional] 
**cMaterialTest** | **[String]** |  | [optional] 
**cMediaFormat** | **[String]** | Media Format | [optional] 
**cMemorySize** | **String** | Memory Size | [optional] 
**cMemoryType** | **[String]** |  | [optional] 
**cModel** | **String** | A model of a particular product, e.g. Air Force 1 (from Nike), Ultraboost (from Adidas) | [optional] 
**cMusicStorage** | **String** |  | [optional] 
**cNoOffLoyaltyPoints** | **Number** |  | [optional] 
**cOpticalZoom** | **String** |  | [optional] 
**cOuterwearType** | **String** | Type of Outerwear for search refinement | [optional] 
**cPlayer** | **String** |  | [optional] 
**cPortableAudioType** | **[String]** |  | [optional] 
**cPrint** | **String** |  | [optional] 
**cProductAtmosphericImage** | [**{String: MediaFile}**](MediaFile.md) |  | [optional] 
**cProductCardBadgeBackgroundColor** | **String** | The field must be in hexadecimal number format colors (#000- black, #fff - white, #ec1d24 - red), If a non-hexadecimal number format for colors is given, the badge will not display. | [optional] 
**cProductCardBadgeFontColor** | **String** | The field must be in hexadecimal number format colors (#000- black, #fff - white, #ec1d24 - red), If a non-hexadecimal number format for colors is given, the badge will not display. | [optional] 
**cProductCardBadgeText** | **{String: String}** | If the field is empty, the badge will not display. | [optional] 
**cProductGroup** | **String** |  | [optional] 
**cProductSetPriceText** | **{String: String}** |  | [optional] 
**cProductType** | **{String: String}** |  | [optional] 
**cProductVideo** | **String** |  | [optional] 
**cProductVideoThumbnail** | [**MediaFile**](MediaFile.md) |  | [optional] 
**cProductVideoType** | **String** |  | [optional] 
**cPronation** | **{String: String}** | An attribute used for shoes in order to describe the walking/running motion it promotes | [optional] 
**cRefinementColor** | **String** |  | [optional] 
**cResolution** | **String** |  | [optional] 
**cRunningShoeCushioning** | **[String]** |  | [optional] 
**cRunningShoeSupport** | **[String]** |  | [optional] 
**cRunningShoeSurface** | **[String]** |  | [optional] 
**cSandalType** | **String** | Type of Sandal for search refinement | [optional] 
**cSheets** | **[String]** | test attribute | [optional] 
**cShoeType** | **String** | Type of Shoe for search refinements | [optional] 
**cSize** | **String** | This attribute is used for all footwear, apparel and accessory sizing for men, women and kids products. | [optional] 
**cSizeGuide** | **{String: String}** |  | [optional] 
**cSkinConcern** | **[String]** |  | [optional] 
**cSpecifications** | **{String: String}** |  | [optional] 
**cSpecificationsArchType** | **{String: String}** |  | [optional] 
**cSpecificationsFit** | **{String: String}** |  | [optional] 
**cSpecificationsHeight** | **{String: String}** |  | [optional] 
**cSpecificationsLength** | **{String: String}** |  | [optional] 
**cSpecificationsWeight** | **{String: String}** |  | [optional] 
**cSports** | **{String: [String]}** |  | [optional] 
**cStyleNumber** | **String** |  | [optional] 
**cSubbrand** | **String** |  | [optional] 
**cSurface** | **{String: String}** |  | [optional] 
**cTabDescription** | [**MarkupText**](MarkupText.md) |  | [optional] 
**cTabDetails** | [**MarkupText**](MarkupText.md) |  | [optional] 
**cTaxClassId** | **{String: String}** |  | [optional] 
**cTeam** | **{String: String}** |  | [optional] 
**cTest** | [**MarkupText**](MarkupText.md) |  | [optional] 
**cTestDate** | **Date** |  | [optional] 
**cTopType** | **String** | Type of tops in clothing | [optional] 
**cTurntoAverageRating** | **{String: String}** | Average TurnTo rating score for the product | [optional] 
**cTurntoCommentCount** | **{String: Number}** | Number of comments for the product | [optional] 
**cTurntoDisableCategoryCommentTeaser** | **Boolean** | Disables the number of buyer comments for this product on the category and search pages | [optional] 
**cTurntoDisableCategoryReviewTeaser** | **Boolean** | Disables the number of reviews for this product on the category and search pages | [optional] 
**cTurntoRelatedReviewCount** | **{String: Number}** | Number of related reviews for the product | [optional] 
**cTurntoReviewCount** | **{String: Number}** | Number of reviews for the product | [optional] 
**cTurntoUserGeneratedContent** | **{String: String}** | User Generated Content for the product, imported from the feed | [optional] 
**cTvSignalFormat** | **String** |  | [optional] 
**cTvSize** | **String** |  | [optional] 
**cTvType** | **String** |  | [optional] 
**cTvWarranty** | **String** |  | [optional] 
**cUspBullet1** | **{String: String}** |  | [optional] 
**cUspBullet2** | **{String: String}** |  | [optional] 
**cUspBullet3** | **{String: String}** |  | [optional] 
**cUspBullet4** | **{String: String}** |  | [optional] 
**cUspBullet5** | **{String: String}** |  | [optional] 
**cUspBullet6** | **{String: String}** |  | [optional] 
**cUspImage1Desktop** | [**MediaFile**](MediaFile.md) |  | [optional] 
**cUspImage1Mobile** | [**MediaFile**](MediaFile.md) |  | [optional] 
**cUspImage2Desktop** | [**MediaFile**](MediaFile.md) |  | [optional] 
**cUspImage2Mobile** | [**MediaFile**](MediaFile.md) |  | [optional] 
**cUspText1** | **{String: String}** |  | [optional] 
**cUspText2** | **{String: String}** |  | [optional] 
**cVideoStorage** | **String** |  | [optional] 
**cWaist** | **String** | Attribute used for apparel waist sizing. | [optional] 
**cWashingInstructions** | **{String: String}** |  | [optional] 
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
**upc** | **String** | The Universal Product Code of the product. | [optional] 
**validFrom** | **{String: Date}** | The time when product is valid from. | [optional] 
**validTo** | **{String: Date}** | The time when product is valid to. | [optional] 
**variants** | [**[Variant]**](Variant.md) | The array of variants of the product. This is applicable for product types \&quot;master\&quot; and \&quot;variation_group\&quot; only. | [optional] 
**variationAttributes** | [**[VariationAttribute]**](VariationAttribute.md) | The sorted array of variation attributes assigned to the product. This is applicable for product types \&quot;master\&quot;,  \&quot;variation_group\&quot; and \&quot;variant\&quot; only. | [optional] 
**variationGroups** | [**[VariationGroup]**](VariationGroup.md) | The array of variation groups in the product. This is applicable for product type \&quot;master\&quot; only. | [optional] 
**variationValues** | **{String: String}** | The variation values selected for the product in variation attribute id and value pairs. This is applicable for product types \&quot;variant\&quot; and  \&quot;variation_group\&quot; only. | [optional] 



## Enum: {String: Number}


* `1` (value: `1`)

* `2` (value: `2`)

* `3` (value: `3`)

* `4` (value: `4`)

* `5` (value: `5`)

* `6` (value: `6`)

* `7` (value: `7`)

* `8` (value: `8`)

* `9` (value: `9`)

* `10` (value: `10`)





## Enum: CBackgroundColorEnum


* `white` (value: `"white"`)

* `gray` (value: `"gray"`)





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





## Enum: CFbpBlockColorEnum


* `black` (value: `"black"`)

* `blue` (value: `"blue"`)

* `gray` (value: `"gray"`)

* `red` (value: `"red"`)





## Enum: {String: String}


* `bayernmunchen` (value: `"bayernmunchen"`)





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





## Enum: CProductVideoTypeEnum


* `youtube` (value: `"youtube"`)

* `vimeo` (value: `"vimeo"`)





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




