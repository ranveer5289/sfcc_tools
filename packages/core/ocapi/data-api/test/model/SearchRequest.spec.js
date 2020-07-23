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
    instance = new DataApi.SearchRequest();
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

  describe('SearchRequest', function() {
    it('should create an instance of SearchRequest', function() {
      // uncomment below and update the code to test SearchRequest
      //var instane = new DataApi.SearchRequest();
      //expect(instance).to.be.a(DataApi.SearchRequest);
    });

    it('should have the property count (base name: "count")', function() {
      // uncomment below and update the code to test the property count
      //var instane = new DataApi.SearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property dbStartRecord_ (base name: "db_start_record_")', function() {
      // uncomment below and update the code to test the property dbStartRecord_
      //var instane = new DataApi.SearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property expand (base name: "expand")', function() {
      // uncomment below and update the code to test the property expand
      //var instane = new DataApi.SearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property query (base name: "query")', function() {
      // uncomment below and update the code to test the property query
      //var instane = new DataApi.SearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property select (base name: "select")', function() {
      // uncomment below and update the code to test the property select
      //var instane = new DataApi.SearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property sorts (base name: "sorts")', function() {
      // uncomment below and update the code to test the property sorts
      //var instane = new DataApi.SearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property start (base name: "start")', function() {
      // uncomment below and update the code to test the property start
      //var instane = new DataApi.SearchRequest();
      //expect(instance).to.be();
    });

  });

}));
