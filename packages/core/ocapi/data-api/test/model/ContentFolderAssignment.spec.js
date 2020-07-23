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
    instance = new DataApi.ContentFolderAssignment();
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

  describe('ContentFolderAssignment', function() {
    it('should create an instance of ContentFolderAssignment', function() {
      // uncomment below and update the code to test ContentFolderAssignment
      //var instane = new DataApi.ContentFolderAssignment();
      //expect(instance).to.be.a(DataApi.ContentFolderAssignment);
    });

    it('should have the property contentId (base name: "content_id")', function() {
      // uncomment below and update the code to test the property contentId
      //var instane = new DataApi.ContentFolderAssignment();
      //expect(instance).to.be();
    });

    it('should have the property contentLink (base name: "content_link")', function() {
      // uncomment below and update the code to test the property contentLink
      //var instane = new DataApi.ContentFolderAssignment();
      //expect(instance).to.be();
    });

    it('should have the property _default (base name: "default")', function() {
      // uncomment below and update the code to test the property _default
      //var instane = new DataApi.ContentFolderAssignment();
      //expect(instance).to.be();
    });

    it('should have the property folderId (base name: "folder_id")', function() {
      // uncomment below and update the code to test the property folderId
      //var instane = new DataApi.ContentFolderAssignment();
      //expect(instance).to.be();
    });

    it('should have the property folderLink (base name: "folder_link")', function() {
      // uncomment below and update the code to test the property folderLink
      //var instane = new DataApi.ContentFolderAssignment();
      //expect(instance).to.be();
    });

    it('should have the property position (base name: "position")', function() {
      // uncomment below and update the code to test the property position
      //var instane = new DataApi.ContentFolderAssignment();
      //expect(instance).to.be();
    });

  });

}));
