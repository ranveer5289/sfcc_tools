# DataApi.ContentAsset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cYear** | **String** |  | [optional] 
**cAlternativeUrl** | **{String: String}** |  | [optional] 
**cBlockColor** | **String** |  | [optional] 
**cBlockColor1** | **String** |  | [optional] 
**cBlockColorCustom** | **String** |  | [optional] 
**cBlockColorReduced** | **String** | Reduced number of colors compared to the other blockColor attributes. | [optional] 
**cBody** | [**{String: MarkupText}**](MarkupText.md) |  | [optional] 
**cBrand** | **String** |  | [optional] 
**cBrand1** | **String** |  | [optional] 
**cBrand2** | **String** |  | [optional] 
**cBrands** | **{String: [String]}** |  | [optional] 
**cComponentBlockIds** | **String** |  | [optional] 
**cCustomCSSFile** | [**MediaFile**](MediaFile.md) |  | [optional] 
**cDesktopImage** | [**{String: MediaFile}**](MediaFile.md) |  | [optional] 
**cDesktopImage1** | [**{String: MediaFile}**](MediaFile.md) |  | [optional] 
**cDesktopImage2** | [**{String: MediaFile}**](MediaFile.md) |  | [optional] 
**cDesktopImage3** | [**{String: MediaFile}**](MediaFile.md) |  | [optional] 
**cDesktopImageRatio** | **{String: String}** |  | [optional] 
**cDesktopImageRatio1** | **{String: String}** |  | [optional] 
**cDesktopImageRatio2** | **{String: String}** |  | [optional] 
**cDesktopImageRatio3** | **{String: String}** |  | [optional] 
**cDesktopVideo1Autoplay** | **Boolean** |  | [optional] 
**cDesktopVideo1Background** | **Boolean** |  | [optional] 
**cDesktopVideo1Loop** | **Boolean** |  | [optional] 
**cDesktopVideo1Url** | **{String: String}** |  | [optional] 
**cDesktopVideo1allowfullscreen** | **Boolean** |  | [optional] 
**cDesktopVideo2Autoplay** | **Boolean** |  | [optional] 
**cDesktopVideo2Background** | **Boolean** |  | [optional] 
**cDesktopVideo2Loop** | **Boolean** |  | [optional] 
**cDesktopVideo2Url** | **{String: String}** |  | [optional] 
**cDesktopVideo2allowfullscreen** | **Boolean** |  | [optional] 
**cDesktopVideoRatio1** | **{String: String}** |  | [optional] 
**cDesktopVideoRatio2** | **{String: String}** |  | [optional] 
**cEmptySearchFlyoutBannerImage** | [**{String: MediaFile}**](MediaFile.md) | Display the image for the content asset on the empty search flyout | [optional] 
**cEmptySearchFlyoutBannerText** | **{String: String}** | Display the text for the content asset on the empty search flyout | [optional] 
**cEmptySearchFlyoutBannerURL** | **{String: String}** | Set&#39;s the redirect URL for the empty search flyout | [optional] 
**cEmptySearchFlyoutImage** | [**{String: MediaFile}**](MediaFile.md) | Display the image for the content asset on the empty search flyout | [optional] 
**cEmptySearchFlyoutText** | **{String: String}** | Display the text for the content asset on the empty search flyout | [optional] 
**cEmptySearchFlyoutURL** | **{String: String}** | Set&#39;s the redirect URL for the empty search flyout | [optional] 
**cExtraFlyoutNavbarUrl** | **{String: String}** | This is the link that users will be sent to if they click on this extra flyout menu&#39;s navbar entry. It is optional, and is only taken into account for extra flyout menu assets (i.e. those conforming to the ID scheme \&quot;header-flyout-extra{number}\&quot;) | [optional] 
**cExtraFlyoutNumberOfColumns** | **{String: Number}** |  | [optional] 
**cExtraFlyoutNumberOfRows** | **{String: Number}** |  | [optional] 
**cFormFields** | **{String: String}** | Example:  [{   \&quot;label\&quot;: \&quot;Full name\&quot;  },  {   \&quot;label\&quot;: \&quot;Zip code\&quot;,   \&quot;class\&quot;: \&quot;postal\&quot;  },  {   \&quot;label\&quot;: \&quot;Phone number\&quot;,   \&quot;class\&quot;: \&quot;phone\&quot;,   \&quot;required\&quot;: false  },  {   \&quot;label\&quot;: \&quot;Email address\&quot;,   \&quot;class\&quot;: \&quot;email\&quot;  },  {   \&quot;label\&quot;: \&quot;Comment\&quot;,   \&quot;type\&quot;: \&quot;textarea\&quot;  }] | [optional] 
**cFormIntersportEmailText** | **{String: String}** |  | [optional] 
**cFormSubject** | **{String: String}** |  | [optional] 
**cFormSubmitButtonText** | **{String: String}** |  | [optional] 
**cFormToEmail** | **{String: String}** |  | [optional] 
**cHeader** | **{String: String}** |  | [optional] 
**cHideMenu** | **Boolean** |  | [optional] 
**cIcon** | [**MediaFile**](MediaFile.md) |  | [optional] 
**cIconClass** | **String** |  | [optional] 
**cIconClass1** | **String** |  | [optional] 
**cIconClass2** | **String** |  | [optional] 
**cLink1Class** | **{String: String}** | Type of button | [optional] 
**cLink1Icon** | **String** |  | [optional] 
**cLink1Position** | **{String: String}** |  | [optional] 
**cLink1Title** | **{String: String}** |  | [optional] 
**cLink1Url** | **{String: String}** | Searchpage: https,Search-Show,cgid,[catid], Product: https,Product-Show,pid,[productid], Content: https,Page-Show,cid,[contentid], Landing: https,Search-ShowContent,fdid,[landingpageid], _blank,http://www.external.com | [optional] 
**cLink2Class** | **{String: String}** | Type of button | [optional] 
**cLink2Position** | **{String: String}** |  | [optional] 
**cLink2Title** | **{String: String}** |  | [optional] 
**cLink2Url** | **{String: String}** | For example https,Search-Show,cgid,[categoryid] or https,Product-Show,pid,[productid] or https,Page-Show,cid,[contentid] or https,Search-ShowContent,fdid,[landingpageid] | [optional] 
**cLink3Class** | **{String: String}** |  | [optional] 
**cLink3Position** | **{String: String}** |  | [optional] 
**cLink3Title** | **{String: String}** |  | [optional] 
**cLink3Url** | **{String: String}** | For example https,Search-Show,cgid,[categoryid] or https,Product-Show,pid,[productid] or https,Page-Show,cid,[contentid] or https,Search-ShowContent,fdid,[landingpageid] | [optional] 
**cLink4Title** | **{String: String}** |  | [optional] 
**cLink4Url** | **String** | For example https,Search-Show,cgid,[categoryid] or https,Product-Show,pid,[productid] or https,Page-Show,cid,[contentid] or https,Search-ShowContent,fdid,[landingpageid] | [optional] 
**cLinkNames** | **{String: [String]}** |  | [optional] 
**cLinkNames1** | **{String: [String]}** |  | [optional] 
**cLinkNames2** | **{String: [String]}** |  | [optional] 
**cLinkNames3** | **{String: [String]}** |  | [optional] 
**cLinkNames4** | **{String: [String]}** |  | [optional] 
**cLinkOnImageUrl1** | **{String: String}** |  | [optional] 
**cLinkOnImageUrl2** | **{String: String}** |  | [optional] 
**cLinkTitle** | **{String: String}** |  | [optional] 
**cLinkUrl** | **{String: String}** | For example https,Search-Show,cgid,[categoryid] or https,Product-Show,pid,[productid] or https,Page-Show,cid,[contentid] or https,Search-ShowContent,fdid,[landingpageid] | [optional] 
**cLinkUrls** | **{String: [String]}** |  | [optional] 
**cLinkUrls1** | **{String: [String]}** |  | [optional] 
**cLinkUrls2** | **{String: [String]}** |  | [optional] 
**cLinkUrls3** | **{String: [String]}** |  | [optional] 
**cLinkUrls4** | **{String: [String]}** |  | [optional] 
**cLocalBannerCallout** | **{String: String}** |  | [optional] 
**cLocalBannerCallout1** | **{String: String}** |  | [optional] 
**cLocalBannerCalloutColor** | **{String: String}** |  | [optional] 
**cLocalBannerCalloutColor1** | **{String: String}** |  | [optional] 
**cLocalBannerNote** | **{String: String}** |  | [optional] 
**cLocalBannerNote1** | **{String: String}** |  | [optional] 
**cLocalBannerNoteColor** | **{String: String}** |  | [optional] 
**cLocalBannerNoteColor1** | **{String: String}** |  | [optional] 
**cLocalBannerPosition** | **{String: String}** |  | [optional] 
**cLocalBannerPosition1** | **{String: String}** |  | [optional] 
**cLocalBannerPrice** | **{String: String}** |  | [optional] 
**cLocalBannerPrice1** | **{String: String}** |  | [optional] 
**cLocalBannerPriceColor** | **{String: String}** |  | [optional] 
**cLocalBannerPriceColor1** | **{String: String}** |  | [optional] 
**cMargins** | **Boolean** |  | [optional] 
**cMobileImage** | [**{String: MediaFile}**](MediaFile.md) |  | [optional] 
**cMobileImage1** | [**{String: MediaFile}**](MediaFile.md) |  | [optional] 
**cMobileImage2** | [**{String: MediaFile}**](MediaFile.md) |  | [optional] 
**cMobileImage3** | [**{String: MediaFile}**](MediaFile.md) |  | [optional] 
**cMobileImageRatio** | **{String: String}** |  | [optional] 
**cMobileImageRatio1** | **{String: String}** |  | [optional] 
**cMobileImageRatio2** | **{String: String}** |  | [optional] 
**cMobileImageRatio3** | **{String: String}** |  | [optional] 
**cMobileVideo1Autoplay** | **Boolean** |  | [optional] 
**cMobileVideo1Backround** | **Boolean** |  | [optional] 
**cMobileVideo1Loop** | **Boolean** |  | [optional] 
**cMobileVideo1Url** | **{String: String}** |  | [optional] 
**cMobileVideo1allowfullscreen** | **Boolean** |  | [optional] 
**cMobileVideo2Autoplay** | **Boolean** |  | [optional] 
**cMobileVideo2Backround** | **Boolean** |  | [optional] 
**cMobileVideo2Loop** | **Boolean** |  | [optional] 
**cMobileVideo2Url** | **{String: String}** |  | [optional] 
**cMobileVideo2allowfullscreen** | **Boolean** |  | [optional] 
**cMobileVideoRatio1** | **{String: String}** |  | [optional] 
**cMobileVideoRatio2** | **{String: String}** |  | [optional] 
**cPosition** | **{String: String}** |  | [optional] 
**cPosition1** | **{String: String}** |  | [optional] 
**cPosition2** | **{String: String}** |  | [optional] 
**cProductIds** | **{String: [String]}** | Enter one or multiple product ids. The product(s) with the most availability will be shown. | [optional] 
**cProductList** | **{String: [String]}** |  | [optional] 
**cProductList1** | **{String: [String]}** |  | [optional] 
**cProductList2** | **{String: [String]}** |  | [optional] 
**cRichText** | [**{String: MarkupText}**](MarkupText.md) |  | [optional] 
**cSearchLink1Title** | **{String: String}** |  | [optional] 
**cSearchLink2Title** | **{String: String}** |  | [optional] 
**cSearchLink3Title** | **{String: String}** |  | [optional] 
**cSearchWord1** | **{String: String}** |  | [optional] 
**cSearchWord2** | **{String: String}** |  | [optional] 
**cSearchWord3** | **{String: String}** |  | [optional] 
**cSubTitle** | **{String: String}** |  | [optional] 
**cSubTitle1** | **{String: String}** |  | [optional] 
**cSubTitle2** | **{String: String}** |  | [optional] 
**cTab1Title** | **{String: String}** |  | [optional] 
**cTab2Title** | **{String: String}** |  | [optional] 
**cTab3Title** | **{String: String}** |  | [optional] 
**cTabTitle** | **{String: String}** |  | [optional] 
**cText** | **{String: String}** |  | [optional] 
**cText2** | **{String: String}** |  | [optional] 
**cTextColor** | **{String: String}** |  | [optional] 
**cTextColor1** | **{String: String}** |  | [optional] 
**cTextlist1** | **{String: [String]}** |  | [optional] 
**cTextlist2** | **{String: [String]}** |  | [optional] 
**cTitle** | **{String: String}** |  | [optional] 
**cTitle1** | **{String: String}** |  | [optional] 
**cTitle2** | **{String: String}** |  | [optional] 
**cTitle3** | **{String: String}** |  | [optional] 
**cTitle4** | **{String: String}** |  | [optional] 
**cUpdatedAt** | **String** |  | [optional] 
**cVideoPopupProductIds** | **{String: [String]}** |  | [optional] 
**cVideoPopupTitle** | **{String: String}** |  | [optional] 
**cVideoPopupVideoId** | **{String: String}** |  | [optional] 
**cVideoPopupVideoThumbnail** | [**{String: MediaFile}**](MediaFile.md) |  | [optional] 
**classificationFolderId** | **String** | The ID of the classification folder. It is only part of the response, if the assignment from  this content asset to the folder is marked as &#39;default&#39;. The property is read-only. To  set the classification folder just create/update an assignment between this content asset and  a folder and mark it as &#39;default&#39;. See details in  /libraries/{library_id}/folder_assignments/{content_id}/{folder_id} resource. | [optional] 
**classificationFolderLink** | **String** | The link to the classification folder. It is only part of the response, if the assignment from  this content asset to the folder is marked as &#39;default&#39;. The property is read-only. To  set the classification folder just create/update an assignment between this content asset and  a folder and mark it as &#39;default&#39;. See details in  /libraries/{library_id}/folder_assignments/{content_id}/{folder_id} resource. | [optional] 
**creationDate** | **Date** | Returns the value of attribute &#39;creationDate&#39;. | [optional] [readonly] 
**description** | **{String: String}** | The localized content asset description. | [optional] 
**id** | **String** | The id of the content asset. | [optional] 
**lastModified** | **Date** | Returns the value of attribute &#39;lastModified&#39;. | [optional] [readonly] 
**link** | **String** | The link to the content asset resource. | [optional] 
**name** | **{String: String}** | The localized content asset name. | [optional] 
**online** | **{String: Boolean}** | Is the asset online? | [optional] 
**pageDescription** | **{String: String}** | The localized content asset page description. | [optional] 
**pageKeywords** | **{String: String}** | The localized content asset page keywords. | [optional] 
**pageTitle** | **{String: String}** | The localized content asset page title. | [optional] 
**pageUrl** | **{String: String}** | The localized content asset page url. | [optional] 
**searchable** | **{String: Boolean}** | Is the asset searchable? | [optional] 
**siteMapChangeFrequency** | **{String: String}** | The content assets change frequency needed for the sitemap creation  (always, hourly, daily, weekly, monthly, yearly, never). | [optional] 
**siteMapIncluded** | **{String: Number}** | The status if the content asset is included into the sitemap (either 0 or  1). | [optional] 
**siteMapPriority** | **{String: Number}** | The content assets priority needed for the sitemap creation (0.0 for no  priority defined). | [optional] 
**template** | **String** | The rendering template. | [optional] 



## Enum: CBlockColorEnum


* `white` (value: `"white"`)

* `black` (value: `"black"`)

* `black-light` (value: `"black-light"`)

* `red` (value: `"red"`)

* `gray` (value: `"gray"`)

* `gray-light` (value: `"gray-light"`)

* `blue` (value: `"blue"`)

* `blue-dark` (value: `"blue-dark"`)

* `blue-light` (value: `"blue-light"`)

* `green` (value: `"green"`)

* `green-dark` (value: `"green-dark"`)

* `green-light` (value: `"green-light"`)

* `purple` (value: `"purple"`)

* `purple-light` (value: `"purple-light"`)

* `salmon` (value: `"salmon"`)

* `salmon-light` (value: `"salmon-light"`)

* `salmon-dark` (value: `"salmon-dark"`)

* `yellow` (value: `"yellow"`)

* `yellow-light` (value: `"yellow-light"`)





## Enum: CBlockColor1Enum


* `white` (value: `"white"`)

* `black` (value: `"black"`)

* `black-light` (value: `"black-light"`)

* `red` (value: `"red"`)

* `gray` (value: `"gray"`)

* `gray-light` (value: `"gray-light"`)

* `blue` (value: `"blue"`)

* `blue-dark` (value: `"blue-dark"`)

* `blue-light` (value: `"blue-light"`)

* `green` (value: `"green"`)

* `green-dark` (value: `"green-dark"`)

* `green-light` (value: `"green-light"`)

* `purple` (value: `"purple"`)

* `purple-light` (value: `"purple-light"`)

* `salmon` (value: `"salmon"`)

* `yellow` (value: `"yellow"`)

* `yellow-light` (value: `"yellow-light"`)





## Enum: CBlockColorReducedEnum


* `yellow` (value: `"yellow"`)

* `blue` (value: `"blue"`)

* `red` (value: `"red"`)





## Enum: {String: String}


* `1-1` (value: `"1-1"`)

* `2-1` (value: `"2-1"`)

* `3-1` (value: `"3-1"`)

* `3-2` (value: `"3-2"`)

* `3-4` (value: `"3-4"`)

* `4-1` (value: `"4-1"`)

* `4-3` (value: `"4-3"`)

* `5-1` (value: `"5-1"`)

* `5-2` (value: `"5-2"`)

* `6-1` (value: `"6-1"`)

* `8-5` (value: `"8-5"`)

* `10-14` (value: `"10-14"`)

* `10-22` (value: `"10-22"`)

* `16-9` (value: `"16-9"`)

* `20-3` (value: `"20-3"`)





## Enum: {String: String}


* `1-1` (value: `"1-1"`)

* `2-1` (value: `"2-1"`)

* `3-1` (value: `"3-1"`)

* `3-2` (value: `"3-2"`)

* `3-4` (value: `"3-4"`)

* `4-1` (value: `"4-1"`)

* `4-3` (value: `"4-3"`)

* `5-1` (value: `"5-1"`)

* `5-2` (value: `"5-2"`)

* `6-1` (value: `"6-1"`)

* `8-5` (value: `"8-5"`)

* `10-14` (value: `"10-14"`)

* `10-22` (value: `"10-22"`)

* `16-9` (value: `"16-9"`)

* `20-3` (value: `"20-3"`)





## Enum: {String: String}


* `1-1` (value: `"1-1"`)

* `2-1` (value: `"2-1"`)

* `3-1` (value: `"3-1"`)

* `3-2` (value: `"3-2"`)

* `3-4` (value: `"3-4"`)

* `4-1` (value: `"4-1"`)

* `4-3` (value: `"4-3"`)

* `5-1` (value: `"5-1"`)

* `5-2` (value: `"5-2"`)

* `6-1` (value: `"6-1"`)

* `8-5` (value: `"8-5"`)

* `10-14` (value: `"10-14"`)

* `10-22` (value: `"10-22"`)

* `16-9` (value: `"16-9"`)

* `20-3` (value: `"20-3"`)





## Enum: {String: String}


* `1-1` (value: `"1-1"`)

* `2-1` (value: `"2-1"`)

* `3-1` (value: `"3-1"`)

* `3-2` (value: `"3-2"`)

* `3-4` (value: `"3-4"`)

* `4-1` (value: `"4-1"`)

* `4-3` (value: `"4-3"`)

* `5-1` (value: `"5-1"`)

* `5-2` (value: `"5-2"`)

* `6-1` (value: `"6-1"`)

* `8-5` (value: `"8-5"`)

* `10-14` (value: `"10-14"`)

* `10-22` (value: `"10-22"`)

* `16-9` (value: `"16-9"`)

* `20-3` (value: `"20-3"`)





## Enum: {String: String}


* `1-1` (value: `"1-1"`)

* `2-1` (value: `"2-1"`)

* `3-1` (value: `"3-1"`)

* `3-2` (value: `"3-2"`)

* `3-4` (value: `"3-4"`)

* `4-1` (value: `"4-1"`)

* `4-3` (value: `"4-3"`)

* `5-1` (value: `"5-1"`)

* `5-2` (value: `"5-2"`)

* `8-5` (value: `"8-5"`)

* `10-14` (value: `"10-14"`)

* `10-22` (value: `"10-22"`)

* `16-9` (value: `"16-9"`)





## Enum: {String: String}


* `1-1` (value: `"1-1"`)

* `2-1` (value: `"2-1"`)

* `3-1` (value: `"3-1"`)

* `3-2` (value: `"3-2"`)

* `3-4` (value: `"3-4"`)

* `4-1` (value: `"4-1"`)

* `4-3` (value: `"4-3"`)

* `5-1` (value: `"5-1"`)

* `5-2` (value: `"5-2"`)

* `8-5` (value: `"8-5"`)

* `10-14` (value: `"10-14"`)

* `10-22` (value: `"10-22"`)

* `16-9` (value: `"16-9"`)





## Enum: {String: String}


* `btn-lined` (value: `"btn-lined"`)

* `btn-lined-white` (value: `"btn-lined-white"`)

* `line-btn` (value: `"line-btn"`)

* `line-btn-white` (value: `"line-btn-white"`)





## Enum: CLink1IconEnum


* `video` (value: `"video"`)





## Enum: {String: String}


* `bottom` (value: `"bottom"`)

* `top` (value: `"top"`)





## Enum: {String: String}


* `btn-lined` (value: `"btn-lined"`)

* `btn-lined-white` (value: `"btn-lined-white"`)

* `line-btn` (value: `"line-btn"`)

* `line-btn-white` (value: `"line-btn-white"`)





## Enum: {String: String}


* `bottom` (value: `"bottom"`)

* `top` (value: `"top"`)





## Enum: {String: String}


* `btn-lined` (value: `"btn-lined"`)

* `btn-lined-white` (value: `"btn-lined-white"`)

* `line-btn` (value: `"line-btn"`)

* `line-btn-white` (value: `"line-btn-white"`)





## Enum: {String: String}


* `black` (value: `"black"`)

* `red` (value: `"red"`)





## Enum: {String: String}


* `black` (value: `"black"`)

* `red` (value: `"red"`)





## Enum: {String: String}


* `black` (value: `"black"`)

* `red` (value: `"red"`)





## Enum: {String: String}


* `black` (value: `"black"`)

* `red` (value: `"red"`)





## Enum: {String: String}


* `left` (value: `"left"`)

* `right` (value: `"right"`)





## Enum: {String: String}


* `left` (value: `"left"`)

* `right` (value: `"right"`)





## Enum: {String: String}


* `black` (value: `"black"`)

* `red` (value: `"red"`)





## Enum: {String: String}


* `black` (value: `"black"`)

* `red` (value: `"red"`)





## Enum: {String: String}


* `1-1` (value: `"1-1"`)

* `2-1` (value: `"2-1"`)

* `3-1` (value: `"3-1"`)

* `3-2` (value: `"3-2"`)

* `3-4` (value: `"3-4"`)

* `4-1` (value: `"4-1"`)

* `4-3` (value: `"4-3"`)

* `5-1` (value: `"5-1"`)

* `5-2` (value: `"5-2"`)

* `6-1` (value: `"6-1"`)

* `8-5` (value: `"8-5"`)

* `10-14` (value: `"10-14"`)

* `10-22` (value: `"10-22"`)

* `16-9` (value: `"16-9"`)

* `20-3` (value: `"20-3"`)





## Enum: {String: String}


* `1-1` (value: `"1-1"`)

* `2-1` (value: `"2-1"`)

* `3-1` (value: `"3-1"`)

* `3-2` (value: `"3-2"`)

* `3-4` (value: `"3-4"`)

* `4-1` (value: `"4-1"`)

* `4-3` (value: `"4-3"`)

* `5-1` (value: `"5-1"`)

* `5-2` (value: `"5-2"`)

* `6-1` (value: `"6-1"`)

* `8-5` (value: `"8-5"`)

* `10-14` (value: `"10-14"`)

* `10-22` (value: `"10-22"`)

* `16-9` (value: `"16-9"`)

* `20-3` (value: `"20-3"`)





## Enum: {String: String}


* `1-1` (value: `"1-1"`)

* `2-1` (value: `"2-1"`)

* `3-1` (value: `"3-1"`)

* `3-2` (value: `"3-2"`)

* `3-4` (value: `"3-4"`)

* `4-1` (value: `"4-1"`)

* `4-3` (value: `"4-3"`)

* `5-1` (value: `"5-1"`)

* `5-2` (value: `"5-2"`)

* `6-1` (value: `"6-1"`)

* `8-5` (value: `"8-5"`)

* `10-14` (value: `"10-14"`)

* `10-22` (value: `"10-22"`)

* `16-9` (value: `"16-9"`)

* `20-3` (value: `"20-3"`)





## Enum: {String: String}


* `1-1` (value: `"1-1"`)

* `2-1` (value: `"2-1"`)

* `3-1` (value: `"3-1"`)

* `3-2` (value: `"3-2"`)

* `3-4` (value: `"3-4"`)

* `4-1` (value: `"4-1"`)

* `4-3` (value: `"4-3"`)

* `5-1` (value: `"5-1"`)

* `5-2` (value: `"5-2"`)

* `6-1` (value: `"6-1"`)

* `8-5` (value: `"8-5"`)

* `10-14` (value: `"10-14"`)

* `10-22` (value: `"10-22"`)

* `16-9` (value: `"16-9"`)

* `20-3` (value: `"20-3"`)





## Enum: {String: String}


* `1-1` (value: `"1-1"`)

* `2-1` (value: `"2-1"`)

* `3-1` (value: `"3-1"`)

* `3-2` (value: `"3-2"`)

* `3-4` (value: `"3-4"`)

* `4-1` (value: `"4-1"`)

* `4-3` (value: `"4-3"`)

* `5-2` (value: `"5-2"`)

* `8-5` (value: `"8-5"`)

* `10-14` (value: `"10-14"`)

* `10-22` (value: `"10-22"`)

* `16-9` (value: `"16-9"`)





## Enum: {String: String}


* `1-1` (value: `"1-1"`)

* `2-1` (value: `"2-1"`)

* `3-1` (value: `"3-1"`)

* `3-2` (value: `"3-2"`)

* `3-4` (value: `"3-4"`)

* `4-1` (value: `"4-1"`)

* `4-3` (value: `"4-3"`)

* `5-2` (value: `"5-2"`)

* `8-5` (value: `"8-5"`)

* `10-14` (value: `"10-14"`)

* `10-22` (value: `"10-22"`)

* `16-9` (value: `"16-9"`)





## Enum: {String: String}


* `left` (value: `"left"`)

* `right` (value: `"right"`)

* `center` (value: `"center"`)





## Enum: {String: String}


* `left` (value: `"left"`)

* `right` (value: `"right"`)





## Enum: {String: String}


* `left` (value: `"left"`)

* `right` (value: `"right"`)

* `center` (value: `"center"`)





## Enum: {String: String}


* `dark` (value: `"dark"`)

* `white` (value: `"white"`)





## Enum: {String: String}


* `dark` (value: `"dark"`)

* `white` (value: `"white"`)





## Enum: {String: String}


* `always` (value: `"always"`)

* `hourly` (value: `"hourly"`)

* `daily` (value: `"daily"`)

* `weekly` (value: `"weekly"`)

* `monthly` (value: `"monthly"`)

* `yearly` (value: `"yearly"`)

* `never` (value: `"never"`)





## Enum: {String: Number}


* `1` (value: `1`)

* `0` (value: `0`)




