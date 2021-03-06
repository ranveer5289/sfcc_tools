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
    //instance = new DataApi.ContentAsset();
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

  describe('ContentAsset', function() {
    it('should create an instance of ContentAsset', function() {
      // uncomment below and update the code to test ContentAsset
      //var instance = new DataApi.ContentAsset();
      //expect(instance).to.be.a(DataApi.ContentAsset);
    });

    it('should have the property cYear (base name: "c_Year")', function() {
      // uncomment below and update the code to test the property cYear
      //var instance = new DataApi.ContentAsset();
      //expect(instance).to.be();
    });

    it('should have the property cBody (base name: "c_body")', function() {
      // uncomment below and update the code to test the property cBody
      //var instance = new DataApi.ContentAsset();
      //expect(instance).to.be();
    });

    it('should have the property cCustomCSSFile (base name: "c_customCSSFile")', function() {
      // uncomment below and update the code to test the property cCustomCSSFile
      //var instance = new DataApi.ContentAsset();
      //expect(instance).to.be();
    });

    it('should have the property classificationFolderId (base name: "classification_folder_id")', function() {
      // uncomment below and update the code to test the property classificationFolderId
      //var instance = new DataApi.ContentAsset();
      //expect(instance).to.be();
    });

    it('should have the property classificationFolderLink (base name: "classification_folder_link")', function() {
      // uncomment below and update the code to test the property classificationFolderLink
      //var instance = new DataApi.ContentAsset();
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "creation_date")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instance = new DataApi.ContentAsset();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new DataApi.ContentAsset();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new DataApi.ContentAsset();
      //expect(instance).to.be();
    });

    it('should have the property lastModified (base name: "last_modified")', function() {
      // uncomment below and update the code to test the property lastModified
      //var instance = new DataApi.ContentAsset();
      //expect(instance).to.be();
    });

    it('should have the property link (base name: "link")', function() {
      // uncomment below and update the code to test the property link
      //var instance = new DataApi.ContentAsset();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new DataApi.ContentAsset();
      //expect(instance).to.be();
    });

    it('should have the property online (base name: "online")', function() {
      // uncomment below and update the code to test the property online
      //var instance = new DataApi.ContentAsset();
      //expect(instance).to.be();
    });

    it('should have the property pageDescription (base name: "page_description")', function() {
      // uncomment below and update the code to test the property pageDescription
      //var instance = new DataApi.ContentAsset();
      //expect(instance).to.be();
    });

    it('should have the property pageKeywords (base name: "page_keywords")', function() {
      // uncomment below and update the code to test the property pageKeywords
      //var instance = new DataApi.ContentAsset();
      //expect(instance).to.be();
    });

    it('should have the property pageTitle (base name: "page_title")', function() {
      // uncomment below and update the code to test the property pageTitle
      //var instance = new DataApi.ContentAsset();
      //expect(instance).to.be();
    });

    it('should have the property pageUrl (base name: "page_url")', function() {
      // uncomment below and update the code to test the property pageUrl
      //var instance = new DataApi.ContentAsset();
      //expect(instance).to.be();
    });

    it('should have the property searchable (base name: "searchable")', function() {
      // uncomment below and update the code to test the property searchable
      //var instance = new DataApi.ContentAsset();
      //expect(instance).to.be();
    });

    it('should have the property siteMapChangeFrequency (base name: "site_map_change_frequency")', function() {
      // uncomment below and update the code to test the property siteMapChangeFrequency
      //var instance = new DataApi.ContentAsset();
      //expect(instance).to.be();
    });

    it('should have the property siteMapIncluded (base name: "site_map_included")', function() {
      // uncomment below and update the code to test the property siteMapIncluded
      //var instance = new DataApi.ContentAsset();
      //expect(instance).to.be();
    });

    it('should have the property siteMapPriority (base name: "site_map_priority")', function() {
      // uncomment below and update the code to test the property siteMapPriority
      //var instance = new DataApi.ContentAsset();
      //expect(instance).to.be();
    });

    it('should have the property template (base name: "template")', function() {
      // uncomment below and update the code to test the property template
      //var instance = new DataApi.ContentAsset();
      //expect(instance).to.be();
    });

  });

}));
