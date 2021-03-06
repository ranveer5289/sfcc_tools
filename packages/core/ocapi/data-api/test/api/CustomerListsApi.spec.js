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
    instance = new DataApi.CustomerListsApi();
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

  describe('CustomerListsApi', function() {
    describe('deleteCustomerListsByIDCustomersByID', function() {
      it('should call deleteCustomerListsByIDCustomersByID successfully', function(done) {
        //uncomment below and update the code to test deleteCustomerListsByIDCustomersByID
        //instance.deleteCustomerListsByIDCustomersByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCustomerListsByIDCustomersByIDAddressesByID', function() {
      it('should call deleteCustomerListsByIDCustomersByIDAddressesByID successfully', function(done) {
        //uncomment below and update the code to test deleteCustomerListsByIDCustomersByIDAddressesByID
        //instance.deleteCustomerListsByIDCustomersByIDAddressesByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerListsByID', function() {
      it('should call getCustomerListsByID successfully', function(done) {
        //uncomment below and update the code to test getCustomerListsByID
        //instance.getCustomerListsByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerListsByIDCustomersByID', function() {
      it('should call getCustomerListsByIDCustomersByID successfully', function(done) {
        //uncomment below and update the code to test getCustomerListsByIDCustomersByID
        //instance.getCustomerListsByIDCustomersByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerListsByIDCustomersByIDAddresses', function() {
      it('should call getCustomerListsByIDCustomersByIDAddresses successfully', function(done) {
        //uncomment below and update the code to test getCustomerListsByIDCustomersByIDAddresses
        //instance.getCustomerListsByIDCustomersByIDAddresses(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerListsByIDCustomersByIDAddressesByID', function() {
      it('should call getCustomerListsByIDCustomersByIDAddressesByID successfully', function(done) {
        //uncomment below and update the code to test getCustomerListsByIDCustomersByIDAddressesByID
        //instance.getCustomerListsByIDCustomersByIDAddressesByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchCustomerListsByIDCustomersByID', function() {
      it('should call patchCustomerListsByIDCustomersByID successfully', function(done) {
        //uncomment below and update the code to test patchCustomerListsByIDCustomersByID
        //instance.patchCustomerListsByIDCustomersByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchCustomerListsByIDCustomersByIDAddressesByID', function() {
      it('should call patchCustomerListsByIDCustomersByIDAddressesByID successfully', function(done) {
        //uncomment below and update the code to test patchCustomerListsByIDCustomersByIDAddressesByID
        //instance.patchCustomerListsByIDCustomersByIDAddressesByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postCustomerListsByIDCustomerSearch', function() {
      it('should call postCustomerListsByIDCustomerSearch successfully', function(done) {
        //uncomment below and update the code to test postCustomerListsByIDCustomerSearch
        //instance.postCustomerListsByIDCustomerSearch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postCustomerListsByIDCustomers', function() {
      it('should call postCustomerListsByIDCustomers successfully', function(done) {
        //uncomment below and update the code to test postCustomerListsByIDCustomers
        //instance.postCustomerListsByIDCustomers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postCustomerListsByIDCustomersByIDAddresses', function() {
      it('should call postCustomerListsByIDCustomersByIDAddresses successfully', function(done) {
        //uncomment below and update the code to test postCustomerListsByIDCustomersByIDAddresses
        //instance.postCustomerListsByIDCustomersByIDAddresses(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putCustomerListsByIDCustomersByID', function() {
      it('should call putCustomerListsByIDCustomersByID successfully', function(done) {
        //uncomment below and update the code to test putCustomerListsByIDCustomersByID
        //instance.putCustomerListsByIDCustomersByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
