/**
 * Data API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 20.8
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DataApi);
  }
}(this, function(expect, DataApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DataApi.InventoryList();
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

  describe('InventoryList', function() {
    it('should create an instance of InventoryList', function() {
      // uncomment below and update the code to test InventoryList
      //var instane = new DataApi.InventoryList();
      //expect(instance).to.be.a(DataApi.InventoryList);
    });

    it('should have the property assignedSites (base name: "assigned_sites")', function() {
      // uncomment below and update the code to test the property assignedSites
      //var instane = new DataApi.InventoryList();
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "creation_date")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instane = new DataApi.InventoryList();
      //expect(instance).to.be();
    });

    it('should have the property defaultInStock (base name: "default_in_stock")', function() {
      // uncomment below and update the code to test the property defaultInStock
      //var instane = new DataApi.InventoryList();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new DataApi.InventoryList();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new DataApi.InventoryList();
      //expect(instance).to.be();
    });

    it('should have the property lastModified (base name: "last_modified")', function() {
      // uncomment below and update the code to test the property lastModified
      //var instane = new DataApi.InventoryList();
      //expect(instance).to.be();
    });

    it('should have the property link (base name: "link")', function() {
      // uncomment below and update the code to test the property link
      //var instane = new DataApi.InventoryList();
      //expect(instance).to.be();
    });

    it('should have the property onOrderInventoryEnabled (base name: "on_order_inventory_enabled")', function() {
      // uncomment below and update the code to test the property onOrderInventoryEnabled
      //var instane = new DataApi.InventoryList();
      //expect(instance).to.be();
    });

    it('should have the property useBundleInventoryOnly (base name: "use_bundle_inventory_only")', function() {
      // uncomment below and update the code to test the property useBundleInventoryOnly
      //var instane = new DataApi.InventoryList();
      //expect(instance).to.be();
    });

  });

}));