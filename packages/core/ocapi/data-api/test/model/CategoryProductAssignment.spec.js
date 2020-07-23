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
    instance = new DataApi.CategoryProductAssignment();
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

  describe('CategoryProductAssignment', function() {
    it('should create an instance of CategoryProductAssignment', function() {
      // uncomment below and update the code to test CategoryProductAssignment
      //var instane = new DataApi.CategoryProductAssignment();
      //expect(instance).to.be.a(DataApi.CategoryProductAssignment);
    });

    it('should have the property catalogId (base name: "catalog_id")', function() {
      // uncomment below and update the code to test the property catalogId
      //var instane = new DataApi.CategoryProductAssignment();
      //expect(instance).to.be();
    });

    it('should have the property categoryId (base name: "category_id")', function() {
      // uncomment below and update the code to test the property categoryId
      //var instane = new DataApi.CategoryProductAssignment();
      //expect(instance).to.be();
    });

    it('should have the property link (base name: "link")', function() {
      // uncomment below and update the code to test the property link
      //var instane = new DataApi.CategoryProductAssignment();
      //expect(instance).to.be();
    });

    it('should have the property owningCatalogName (base name: "owning_catalog_name")', function() {
      // uncomment below and update the code to test the property owningCatalogName
      //var instane = new DataApi.CategoryProductAssignment();
      //expect(instance).to.be();
    });

    it('should have the property position (base name: "position")', function() {
      // uncomment below and update the code to test the property position
      //var instane = new DataApi.CategoryProductAssignment();
      //expect(instance).to.be();
    });

    it('should have the property product (base name: "product")', function() {
      // uncomment below and update the code to test the property product
      //var instane = new DataApi.CategoryProductAssignment();
      //expect(instance).to.be();
    });

    it('should have the property productId (base name: "product_id")', function() {
      // uncomment below and update the code to test the property productId
      //var instane = new DataApi.CategoryProductAssignment();
      //expect(instance).to.be();
    });

    it('should have the property productName (base name: "product_name")', function() {
      // uncomment below and update the code to test the property productName
      //var instane = new DataApi.CategoryProductAssignment();
      //expect(instance).to.be();
    });

  });

}));
