/**
 * Data API
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
    factory(root.expect, root.DataApi);
  }
}(this, function(expect, DataApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    // create a new instance
    //instance = new DataApi.CategoryLink();
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

  describe('CategoryLink', function() {
    it('should create an instance of CategoryLink', function() {
      // uncomment below and update the code to test CategoryLink
      //var instance = new DataApi.CategoryLink();
      //expect(instance).to.be.a(DataApi.CategoryLink);
    });

    it('should have the property lastModified (base name: "last_modified")', function() {
      // uncomment below and update the code to test the property lastModified
      //var instance = new DataApi.CategoryLink();
      //expect(instance).to.be();
    });

    it('should have the property link (base name: "link")', function() {
      // uncomment below and update the code to test the property link
      //var instance = new DataApi.CategoryLink();
      //expect(instance).to.be();
    });

    it('should have the property position (base name: "position")', function() {
      // uncomment below and update the code to test the property position
      //var instance = new DataApi.CategoryLink();
      //expect(instance).to.be();
    });

    it('should have the property sourceCatalogId (base name: "source_catalog_id")', function() {
      // uncomment below and update the code to test the property sourceCatalogId
      //var instance = new DataApi.CategoryLink();
      //expect(instance).to.be();
    });

    it('should have the property sourceCatalogName (base name: "source_catalog_name")', function() {
      // uncomment below and update the code to test the property sourceCatalogName
      //var instance = new DataApi.CategoryLink();
      //expect(instance).to.be();
    });

    it('should have the property sourceCategoryId (base name: "source_category_id")', function() {
      // uncomment below and update the code to test the property sourceCategoryId
      //var instance = new DataApi.CategoryLink();
      //expect(instance).to.be();
    });

    it('should have the property sourceCategoryName (base name: "source_category_name")', function() {
      // uncomment below and update the code to test the property sourceCategoryName
      //var instance = new DataApi.CategoryLink();
      //expect(instance).to.be();
    });

    it('should have the property targetCatalogId (base name: "target_catalog_id")', function() {
      // uncomment below and update the code to test the property targetCatalogId
      //var instance = new DataApi.CategoryLink();
      //expect(instance).to.be();
    });

    it('should have the property targetCatalogName (base name: "target_catalog_name")', function() {
      // uncomment below and update the code to test the property targetCatalogName
      //var instance = new DataApi.CategoryLink();
      //expect(instance).to.be();
    });

    it('should have the property targetCategoryId (base name: "target_category_id")', function() {
      // uncomment below and update the code to test the property targetCategoryId
      //var instance = new DataApi.CategoryLink();
      //expect(instance).to.be();
    });

    it('should have the property targetCategoryName (base name: "target_category_name")', function() {
      // uncomment below and update the code to test the property targetCategoryName
      //var instance = new DataApi.CategoryLink();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new DataApi.CategoryLink();
      //expect(instance).to.be();
    });

  });

}));
