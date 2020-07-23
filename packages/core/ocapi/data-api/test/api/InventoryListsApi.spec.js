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
    instance = new DataApi.InventoryListsApi();
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

  describe('InventoryListsApi', function() {
    describe('deleteInventoryListsByID', function() {
      it('should call deleteInventoryListsByID successfully', function(done) {
        //uncomment below and update the code to test deleteInventoryListsByID
        //instance.deleteInventoryListsByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteInventoryListsByIDProductInventoryRecordsByID', function() {
      it('should call deleteInventoryListsByIDProductInventoryRecordsByID successfully', function(done) {
        //uncomment below and update the code to test deleteInventoryListsByIDProductInventoryRecordsByID
        //instance.deleteInventoryListsByIDProductInventoryRecordsByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInventoryLists', function() {
      it('should call getInventoryLists successfully', function(done) {
        //uncomment below and update the code to test getInventoryLists
        //instance.getInventoryLists(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInventoryListsByID', function() {
      it('should call getInventoryListsByID successfully', function(done) {
        //uncomment below and update the code to test getInventoryListsByID
        //instance.getInventoryListsByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInventoryListsByIDProductInventoryRecords', function() {
      it('should call getInventoryListsByIDProductInventoryRecords successfully', function(done) {
        //uncomment below and update the code to test getInventoryListsByIDProductInventoryRecords
        //instance.getInventoryListsByIDProductInventoryRecords(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInventoryListsByIDProductInventoryRecordsByID', function() {
      it('should call getInventoryListsByIDProductInventoryRecordsByID successfully', function(done) {
        //uncomment below and update the code to test getInventoryListsByIDProductInventoryRecordsByID
        //instance.getInventoryListsByIDProductInventoryRecordsByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchInventoryListsByID', function() {
      it('should call patchInventoryListsByID successfully', function(done) {
        //uncomment below and update the code to test patchInventoryListsByID
        //instance.patchInventoryListsByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchInventoryListsByIDProductInventoryRecordsByID', function() {
      it('should call patchInventoryListsByIDProductInventoryRecordsByID successfully', function(done) {
        //uncomment below and update the code to test patchInventoryListsByIDProductInventoryRecordsByID
        //instance.patchInventoryListsByIDProductInventoryRecordsByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putInventoryListsByID', function() {
      it('should call putInventoryListsByID successfully', function(done) {
        //uncomment below and update the code to test putInventoryListsByID
        //instance.putInventoryListsByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putInventoryListsByIDProductInventoryRecordsByID', function() {
      it('should call putInventoryListsByIDProductInventoryRecordsByID successfully', function(done) {
        //uncomment below and update the code to test putInventoryListsByIDProductInventoryRecordsByID
        //instance.putInventoryListsByIDProductInventoryRecordsByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
