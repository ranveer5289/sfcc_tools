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
    //instance = new DataApi.ImageGroup();
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

  describe('ImageGroup', function() {
    it('should create an instance of ImageGroup', function() {
      // uncomment below and update the code to test ImageGroup
      //var instance = new DataApi.ImageGroup();
      //expect(instance).to.be.a(DataApi.ImageGroup);
    });

    it('should have the property images (base name: "images")', function() {
      // uncomment below and update the code to test the property images
      //var instance = new DataApi.ImageGroup();
      //expect(instance).to.be();
    });

    it('should have the property variationAttributes (base name: "variation_attributes")', function() {
      // uncomment below and update the code to test the property variationAttributes
      //var instance = new DataApi.ImageGroup();
      //expect(instance).to.be();
    });

    it('should have the property viewType (base name: "view_type")', function() {
      // uncomment below and update the code to test the property viewType
      //var instance = new DataApi.ImageGroup();
      //expect(instance).to.be();
    });

  });

}));
