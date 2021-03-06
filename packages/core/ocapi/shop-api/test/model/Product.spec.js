/**
 * Shop API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 20.8
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 5.0.0-beta
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ShopApi);
  }
}(this, function(expect, ShopApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    // create a new instance
    //instance = new ShopApi.Product();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Product', function() {
    it('should create an instance of Product', function() {
      // uncomment below and update the code to test Product
      //var instance = new ShopApi.Product();
      //expect(instance).to.be.a(ShopApi.Product);
    });

    it('should have the property brand (base name: "brand")', function() {
      // uncomment below and update the code to test the property brand
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property bundledProducts (base name: "bundled_products")', function() {
      // uncomment below and update the code to test the property bundledProducts
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cAvailableForInStorePickup (base name: "c_availableForInStorePickup")', function() {
      // uncomment below and update the code to test the property cAvailableForInStorePickup
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cBatteryLife (base name: "c_batteryLife")', function() {
      // uncomment below and update the code to test the property cBatteryLife
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cBatteryType (base name: "c_batteryType")', function() {
      // uncomment below and update the code to test the property cBatteryType
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cBootType (base name: "c_bootType")', function() {
      // uncomment below and update the code to test the property cBootType
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cBottomType (base name: "c_bottomType")', function() {
      // uncomment below and update the code to test the property cBottomType
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cColor (base name: "c_color")', function() {
      // uncomment below and update the code to test the property cColor
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cConsoleWarranty (base name: "c_consoleWarranty")', function() {
      // uncomment below and update the code to test the property cConsoleWarranty
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cCustomCSSFile (base name: "c_customCSSFile")', function() {
      // uncomment below and update the code to test the property cCustomCSSFile
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cDigitalCameraFeatures (base name: "c_digitalCameraFeatures")', function() {
      // uncomment below and update the code to test the property cDigitalCameraFeatures
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cDigitalCameraPixels (base name: "c_digitalCameraPixels")', function() {
      // uncomment below and update the code to test the property cDigitalCameraPixels
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cDigitalCameraType (base name: "c_digitalCameraType")', function() {
      // uncomment below and update the code to test the property cDigitalCameraType
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cDigitalCameraWarranty (base name: "c_digitalCameraWarranty")', function() {
      // uncomment below and update the code to test the property cDigitalCameraWarranty
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cDimDepth (base name: "c_dimDepth")', function() {
      // uncomment below and update the code to test the property cDimDepth
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cDimHeight (base name: "c_dimHeight")', function() {
      // uncomment below and update the code to test the property cDimHeight
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cDimWeight (base name: "c_dimWeight")', function() {
      // uncomment below and update the code to test the property cDimWeight
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cDimWidth (base name: "c_dimWidth")', function() {
      // uncomment below and update the code to test the property cDimWidth
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cDisplaySize (base name: "c_displaySize")', function() {
      // uncomment below and update the code to test the property cDisplaySize
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cGameGenre (base name: "c_gameGenre")', function() {
      // uncomment below and update the code to test the property cGameGenre
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cGameRating (base name: "c_gameRating")', function() {
      // uncomment below and update the code to test the property cGameRating
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cGameSystemType (base name: "c_gameSystemType")', function() {
      // uncomment below and update the code to test the property cGameSystemType
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cGpsFeatures (base name: "c_gpsFeatures")', function() {
      // uncomment below and update the code to test the property cGpsFeatures
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cGpsType (base name: "c_gpsType")', function() {
      // uncomment below and update the code to test the property cGpsType
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cGpsWarranty (base name: "c_gpsWarranty")', function() {
      // uncomment below and update the code to test the property cGpsWarranty
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cImageAspectRatio (base name: "c_imageAspectRatio")', function() {
      // uncomment below and update the code to test the property cImageAspectRatio
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cIsNew (base name: "c_isNew")', function() {
      // uncomment below and update the code to test the property cIsNew
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cIsNewtest (base name: "c_isNewtest")', function() {
      // uncomment below and update the code to test the property cIsNewtest
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cIsSale (base name: "c_isSale")', function() {
      // uncomment below and update the code to test the property cIsSale
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cKidsAge (base name: "c_kidsAge")', function() {
      // uncomment below and update the code to test the property cKidsAge
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cLength (base name: "c_length")', function() {
      // uncomment below and update the code to test the property cLength
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cLensAperture (base name: "c_lensAperture")', function() {
      // uncomment below and update the code to test the property cLensAperture
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cMaterialTest (base name: "c_materialTest")', function() {
      // uncomment below and update the code to test the property cMaterialTest
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cMediaFormat (base name: "c_mediaFormat")', function() {
      // uncomment below and update the code to test the property cMediaFormat
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cMemorySize (base name: "c_memorySize")', function() {
      // uncomment below and update the code to test the property cMemorySize
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cMemoryType (base name: "c_memoryType")', function() {
      // uncomment below and update the code to test the property cMemoryType
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cMusicStorage (base name: "c_musicStorage")', function() {
      // uncomment below and update the code to test the property cMusicStorage
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cOpticalZoom (base name: "c_opticalZoom")', function() {
      // uncomment below and update the code to test the property cOpticalZoom
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cOuterwearType (base name: "c_outerwearType")', function() {
      // uncomment below and update the code to test the property cOuterwearType
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cPortableAudioType (base name: "c_portableAudioType")', function() {
      // uncomment below and update the code to test the property cPortableAudioType
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cRefinementColor (base name: "c_refinementColor")', function() {
      // uncomment below and update the code to test the property cRefinementColor
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cResolution (base name: "c_resolution")', function() {
      // uncomment below and update the code to test the property cResolution
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cSandalType (base name: "c_sandalType")', function() {
      // uncomment below and update the code to test the property cSandalType
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cSheets (base name: "c_sheets")', function() {
      // uncomment below and update the code to test the property cSheets
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cShoeType (base name: "c_shoeType")', function() {
      // uncomment below and update the code to test the property cShoeType
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cSize (base name: "c_size")', function() {
      // uncomment below and update the code to test the property cSize
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cSkinConcern (base name: "c_skinConcern")', function() {
      // uncomment below and update the code to test the property cSkinConcern
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cStyleNumber (base name: "c_styleNumber")', function() {
      // uncomment below and update the code to test the property cStyleNumber
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cTabDescription (base name: "c_tabDescription")', function() {
      // uncomment below and update the code to test the property cTabDescription
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cTabDetails (base name: "c_tabDetails")', function() {
      // uncomment below and update the code to test the property cTabDetails
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cTest (base name: "c_test")', function() {
      // uncomment below and update the code to test the property cTest
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cTopType (base name: "c_topType")', function() {
      // uncomment below and update the code to test the property cTopType
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cTvSignalFormat (base name: "c_tvSignalFormat")', function() {
      // uncomment below and update the code to test the property cTvSignalFormat
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cTvSize (base name: "c_tvSize")', function() {
      // uncomment below and update the code to test the property cTvSize
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cTvType (base name: "c_tvType")', function() {
      // uncomment below and update the code to test the property cTvType
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cTvWarranty (base name: "c_tvWarranty")', function() {
      // uncomment below and update the code to test the property cTvWarranty
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cVideoStorage (base name: "c_videoStorage")', function() {
      // uncomment below and update the code to test the property cVideoStorage
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cWaist (base name: "c_waist")', function() {
      // uncomment below and update the code to test the property cWaist
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property cWidth (base name: "c_width")', function() {
      // uncomment below and update the code to test the property cWidth
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property ean (base name: "ean")', function() {
      // uncomment below and update the code to test the property ean
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property fetchDate (base name: "fetch_date")', function() {
      // uncomment below and update the code to test the property fetchDate
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property imageGroups (base name: "image_groups")', function() {
      // uncomment below and update the code to test the property imageGroups
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property inventories (base name: "inventories")', function() {
      // uncomment below and update the code to test the property inventories
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property inventory (base name: "inventory")', function() {
      // uncomment below and update the code to test the property inventory
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property longDescription (base name: "long_description")', function() {
      // uncomment below and update the code to test the property longDescription
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property manufacturerName (base name: "manufacturer_name")', function() {
      // uncomment below and update the code to test the property manufacturerName
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property manufacturerSku (base name: "manufacturer_sku")', function() {
      // uncomment below and update the code to test the property manufacturerSku
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property master (base name: "master")', function() {
      // uncomment below and update the code to test the property master
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property minOrderQuantity (base name: "min_order_quantity")', function() {
      // uncomment below and update the code to test the property minOrderQuantity
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property options (base name: "options")', function() {
      // uncomment below and update the code to test the property options
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property pageDescription (base name: "page_description")', function() {
      // uncomment below and update the code to test the property pageDescription
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property pageKeywords (base name: "page_keywords")', function() {
      // uncomment below and update the code to test the property pageKeywords
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property pageTitle (base name: "page_title")', function() {
      // uncomment below and update the code to test the property pageTitle
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property priceMax (base name: "price_max")', function() {
      // uncomment below and update the code to test the property priceMax
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property pricePerUnit (base name: "price_per_unit")', function() {
      // uncomment below and update the code to test the property pricePerUnit
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property pricePerUnitMax (base name: "price_per_unit_max")', function() {
      // uncomment below and update the code to test the property pricePerUnitMax
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property prices (base name: "prices")', function() {
      // uncomment below and update the code to test the property prices
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property primaryCategoryId (base name: "primary_category_id")', function() {
      // uncomment below and update the code to test the property primaryCategoryId
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property productLinks (base name: "product_links")', function() {
      // uncomment below and update the code to test the property productLinks
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property productPromotions (base name: "product_promotions")', function() {
      // uncomment below and update the code to test the property productPromotions
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property recommendations (base name: "recommendations")', function() {
      // uncomment below and update the code to test the property recommendations
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property setProducts (base name: "set_products")', function() {
      // uncomment below and update the code to test the property setProducts
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property shortDescription (base name: "short_description")', function() {
      // uncomment below and update the code to test the property shortDescription
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property stepQuantity (base name: "step_quantity")', function() {
      // uncomment below and update the code to test the property stepQuantity
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property unit (base name: "unit")', function() {
      // uncomment below and update the code to test the property unit
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property unitMeasure (base name: "unit_measure")', function() {
      // uncomment below and update the code to test the property unitMeasure
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property unitQuantity (base name: "unit_quantity")', function() {
      // uncomment below and update the code to test the property unitQuantity
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property upc (base name: "upc")', function() {
      // uncomment below and update the code to test the property upc
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property validFrom (base name: "valid_from")', function() {
      // uncomment below and update the code to test the property validFrom
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property validTo (base name: "valid_to")', function() {
      // uncomment below and update the code to test the property validTo
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property variants (base name: "variants")', function() {
      // uncomment below and update the code to test the property variants
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property variationAttributes (base name: "variation_attributes")', function() {
      // uncomment below and update the code to test the property variationAttributes
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property variationGroups (base name: "variation_groups")', function() {
      // uncomment below and update the code to test the property variationGroups
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property variationValues (base name: "variation_values")', function() {
      // uncomment below and update the code to test the property variationValues
      //var instance = new ShopApi.Product();
      //expect(instance).to.be();
    });

  });

}));
