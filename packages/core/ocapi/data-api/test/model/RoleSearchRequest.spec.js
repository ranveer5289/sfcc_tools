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
    //instance = new DataApi.RoleSearchRequest();
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

  describe('RoleSearchRequest', function() {
    it('should create an instance of RoleSearchRequest', function() {
      // uncomment below and update the code to test RoleSearchRequest
      //var instance = new DataApi.RoleSearchRequest();
      //expect(instance).to.be.a(DataApi.RoleSearchRequest);
    });

    it('should have the property count (base name: "count")', function() {
      // uncomment below and update the code to test the property count
      //var instance = new DataApi.RoleSearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property dbStartRecord (base name: "db_start_record_")', function() {
      // uncomment below and update the code to test the property dbStartRecord
      //var instance = new DataApi.RoleSearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property expand (base name: "expand")', function() {
      // uncomment below and update the code to test the property expand
      //var instance = new DataApi.RoleSearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property permissions (base name: "permissions")', function() {
      // uncomment below and update the code to test the property permissions
      //var instance = new DataApi.RoleSearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property query (base name: "query")', function() {
      // uncomment below and update the code to test the property query
      //var instance = new DataApi.RoleSearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property select (base name: "select")', function() {
      // uncomment below and update the code to test the property select
      //var instance = new DataApi.RoleSearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property sorts (base name: "sorts")', function() {
      // uncomment below and update the code to test the property sorts
      //var instance = new DataApi.RoleSearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property start (base name: "start")', function() {
      // uncomment below and update the code to test the property start
      //var instance = new DataApi.RoleSearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new DataApi.RoleSearchRequest();
      //expect(instance).to.be();
    });

  });

}));
