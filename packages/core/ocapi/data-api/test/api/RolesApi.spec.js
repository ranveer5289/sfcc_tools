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
    instance = new DataApi.RolesApi();
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

  describe('RolesApi', function() {
    describe('deleteRolesByID', function() {
      it('should call deleteRolesByID successfully', function(done) {
        //uncomment below and update the code to test deleteRolesByID
        //instance.deleteRolesByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRolesByIDUsersByID', function() {
      it('should call deleteRolesByIDUsersByID successfully', function(done) {
        //uncomment below and update the code to test deleteRolesByIDUsersByID
        //instance.deleteRolesByIDUsersByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRoles', function() {
      it('should call getRoles successfully', function(done) {
        //uncomment below and update the code to test getRoles
        //instance.getRoles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRolesByID', function() {
      it('should call getRolesByID successfully', function(done) {
        //uncomment below and update the code to test getRolesByID
        //instance.getRolesByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRolesByIDPermissions', function() {
      it('should call getRolesByIDPermissions successfully', function(done) {
        //uncomment below and update the code to test getRolesByIDPermissions
        //instance.getRolesByIDPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRolesByIDUsers', function() {
      it('should call getRolesByIDUsers successfully', function(done) {
        //uncomment below and update the code to test getRolesByIDUsers
        //instance.getRolesByIDUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postRolesByIDUserSearch', function() {
      it('should call postRolesByIDUserSearch successfully', function(done) {
        //uncomment below and update the code to test postRolesByIDUserSearch
        //instance.postRolesByIDUserSearch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putRolesByID', function() {
      it('should call putRolesByID successfully', function(done) {
        //uncomment below and update the code to test putRolesByID
        //instance.putRolesByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putRolesByIDPermissions', function() {
      it('should call putRolesByIDPermissions successfully', function(done) {
        //uncomment below and update the code to test putRolesByIDPermissions
        //instance.putRolesByIDPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putRolesByIDUsersByID', function() {
      it('should call putRolesByIDUsersByID successfully', function(done) {
        //uncomment below and update the code to test putRolesByIDUsersByID
        //instance.putRolesByIDUsersByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
