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
    //instance = new DataApi.Store();
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

  describe('Store', function() {
    it('should create an instance of Store', function() {
      // uncomment below and update the code to test Store
      //var instance = new DataApi.Store();
      //expect(instance).to.be.a(DataApi.Store);
    });

    it('should have the property address1 (base name: "address1")', function() {
      // uncomment below and update the code to test the property address1
      //var instance = new DataApi.Store();
      //expect(instance).to.be();
    });

    it('should have the property address2 (base name: "address2")', function() {
      // uncomment below and update the code to test the property address2
      //var instance = new DataApi.Store();
      //expect(instance).to.be();
    });

    it('should have the property cTestAttribute (base name: "c_TestAttribute")', function() {
      // uncomment below and update the code to test the property cTestAttribute
      //var instance = new DataApi.Store();
      //expect(instance).to.be();
    });

    it('should have the property cCountryCodeValue (base name: "c_countryCodeValue")', function() {
      // uncomment below and update the code to test the property cCountryCodeValue
      //var instance = new DataApi.Store();
      //expect(instance).to.be();
    });

    it('should have the property cInventoryListId (base name: "c_inventoryListId")', function() {
      // uncomment below and update the code to test the property cInventoryListId
      //var instance = new DataApi.Store();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new DataApi.Store();
      //expect(instance).to.be();
    });

    it('should have the property countryCode (base name: "country_code")', function() {
      // uncomment below and update the code to test the property countryCode
      //var instance = new DataApi.Store();
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "creation_date")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instance = new DataApi.Store();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new DataApi.Store();
      //expect(instance).to.be();
    });

    it('should have the property fax (base name: "fax")', function() {
      // uncomment below and update the code to test the property fax
      //var instance = new DataApi.Store();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new DataApi.Store();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instance = new DataApi.Store();
      //expect(instance).to.be();
    });

    it('should have the property inventoryId (base name: "inventory_id")', function() {
      // uncomment below and update the code to test the property inventoryId
      //var instance = new DataApi.Store();
      //expect(instance).to.be();
    });

    it('should have the property lastModified (base name: "last_modified")', function() {
      // uncomment below and update the code to test the property lastModified
      //var instance = new DataApi.Store();
      //expect(instance).to.be();
    });

    it('should have the property latitude (base name: "latitude")', function() {
      // uncomment below and update the code to test the property latitude
      //var instance = new DataApi.Store();
      //expect(instance).to.be();
    });

    it('should have the property link (base name: "link")', function() {
      // uncomment below and update the code to test the property link
      //var instance = new DataApi.Store();
      //expect(instance).to.be();
    });

    it('should have the property longitude (base name: "longitude")', function() {
      // uncomment below and update the code to test the property longitude
      //var instance = new DataApi.Store();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new DataApi.Store();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instance = new DataApi.Store();
      //expect(instance).to.be();
    });

    it('should have the property posEnabled (base name: "pos_enabled")', function() {
      // uncomment below and update the code to test the property posEnabled
      //var instance = new DataApi.Store();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postal_code")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instance = new DataApi.Store();
      //expect(instance).to.be();
    });

    it('should have the property stateCode (base name: "state_code")', function() {
      // uncomment below and update the code to test the property stateCode
      //var instance = new DataApi.Store();
      //expect(instance).to.be();
    });

    it('should have the property storeEvents (base name: "store_events")', function() {
      // uncomment below and update the code to test the property storeEvents
      //var instance = new DataApi.Store();
      //expect(instance).to.be();
    });

    it('should have the property storeHours (base name: "store_hours")', function() {
      // uncomment below and update the code to test the property storeHours
      //var instance = new DataApi.Store();
      //expect(instance).to.be();
    });

    it('should have the property storeLocatorEnabled (base name: "store_locator_enabled")', function() {
      // uncomment below and update the code to test the property storeLocatorEnabled
      //var instance = new DataApi.Store();
      //expect(instance).to.be();
    });

  });

}));
