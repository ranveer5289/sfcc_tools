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
    //instance = new ShopApi.Locale();
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

  describe('Locale', function() {
    it('should create an instance of Locale', function() {
      // uncomment below and update the code to test Locale
      //var instance = new ShopApi.Locale();
      //expect(instance).to.be.a(ShopApi.Locale);
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new ShopApi.Locale();
      //expect(instance).to.be();
    });

    it('should have the property _default (base name: "default")', function() {
      // uncomment below and update the code to test the property _default
      //var instance = new ShopApi.Locale();
      //expect(instance).to.be();
    });

    it('should have the property displayCountry (base name: "display_country")', function() {
      // uncomment below and update the code to test the property displayCountry
      //var instance = new ShopApi.Locale();
      //expect(instance).to.be();
    });

    it('should have the property displayLanguage (base name: "display_language")', function() {
      // uncomment below and update the code to test the property displayLanguage
      //var instance = new ShopApi.Locale();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "display_name")', function() {
      // uncomment below and update the code to test the property displayName
      //var instance = new ShopApi.Locale();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new ShopApi.Locale();
      //expect(instance).to.be();
    });

    it('should have the property iso3Country (base name: "iso3_country")', function() {
      // uncomment below and update the code to test the property iso3Country
      //var instance = new ShopApi.Locale();
      //expect(instance).to.be();
    });

    it('should have the property iso3Language (base name: "iso3_language")', function() {
      // uncomment below and update the code to test the property iso3Language
      //var instance = new ShopApi.Locale();
      //expect(instance).to.be();
    });

    it('should have the property language (base name: "language")', function() {
      // uncomment below and update the code to test the property language
      //var instance = new ShopApi.Locale();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new ShopApi.Locale();
      //expect(instance).to.be();
    });

  });

}));
