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
    //instance = new DataApi.ObjectTypeDefinition();
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

  describe('ObjectTypeDefinition', function() {
    it('should create an instance of ObjectTypeDefinition', function() {
      // uncomment below and update the code to test ObjectTypeDefinition
      //var instance = new DataApi.ObjectTypeDefinition();
      //expect(instance).to.be.a(DataApi.ObjectTypeDefinition);
    });

    it('should have the property attributeDefinitionCount (base name: "attribute_definition_count")', function() {
      // uncomment below and update the code to test the property attributeDefinitionCount
      //var instance = new DataApi.ObjectTypeDefinition();
      //expect(instance).to.be();
    });

    it('should have the property attributeGroupCount (base name: "attribute_group_count")', function() {
      // uncomment below and update the code to test the property attributeGroupCount
      //var instance = new DataApi.ObjectTypeDefinition();
      //expect(instance).to.be();
    });

    it('should have the property contentObject (base name: "content_object")', function() {
      // uncomment below and update the code to test the property contentObject
      //var instance = new DataApi.ObjectTypeDefinition();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new DataApi.ObjectTypeDefinition();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "display_name")', function() {
      // uncomment below and update the code to test the property displayName
      //var instance = new DataApi.ObjectTypeDefinition();
      //expect(instance).to.be();
    });

    it('should have the property link (base name: "link")', function() {
      // uncomment below and update the code to test the property link
      //var instance = new DataApi.ObjectTypeDefinition();
      //expect(instance).to.be();
    });

    it('should have the property objectType (base name: "object_type")', function() {
      // uncomment below and update the code to test the property objectType
      //var instance = new DataApi.ObjectTypeDefinition();
      //expect(instance).to.be();
    });

    it('should have the property queryable (base name: "queryable")', function() {
      // uncomment below and update the code to test the property queryable
      //var instance = new DataApi.ObjectTypeDefinition();
      //expect(instance).to.be();
    });

    it('should have the property readOnly (base name: "read_only")', function() {
      // uncomment below and update the code to test the property readOnly
      //var instance = new DataApi.ObjectTypeDefinition();
      //expect(instance).to.be();
    });

  });

}));
