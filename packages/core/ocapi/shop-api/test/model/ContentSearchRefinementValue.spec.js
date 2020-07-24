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
    //instance = new ShopApi.ContentSearchRefinementValue();
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

  describe('ContentSearchRefinementValue', function() {
    it('should create an instance of ContentSearchRefinementValue', function() {
      // uncomment below and update the code to test ContentSearchRefinementValue
      //var instance = new ShopApi.ContentSearchRefinementValue();
      //expect(instance).to.be.a(ShopApi.ContentSearchRefinementValue);
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new ShopApi.ContentSearchRefinementValue();
      //expect(instance).to.be();
    });

    it('should have the property hitCount (base name: "hit_count")', function() {
      // uncomment below and update the code to test the property hitCount
      //var instance = new ShopApi.ContentSearchRefinementValue();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instance = new ShopApi.ContentSearchRefinementValue();
      //expect(instance).to.be();
    });

    it('should have the property presentationId (base name: "presentation_id")', function() {
      // uncomment below and update the code to test the property presentationId
      //var instance = new ShopApi.ContentSearchRefinementValue();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new ShopApi.ContentSearchRefinementValue();
      //expect(instance).to.be();
    });

    it('should have the property values (base name: "values")', function() {
      // uncomment below and update the code to test the property values
      //var instance = new ShopApi.ContentSearchRefinementValue();
      //expect(instance).to.be();
    });

  });

}));
