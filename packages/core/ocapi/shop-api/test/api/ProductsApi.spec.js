/**
 * Shop API
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
    factory(root.expect, root.ShopApi);
  }
}(this, function(expect, ShopApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ShopApi.ProductsApi();
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

  describe('ProductsApi', function() {
    describe('getProductsByID', function() {
      it('should call getProductsByID successfully', function(done) {
        //uncomment below and update the code to test getProductsByID
        //instance.getProductsByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsByIDAvailability', function() {
      it('should call getProductsByIDAvailability successfully', function(done) {
        //uncomment below and update the code to test getProductsByIDAvailability
        //instance.getProductsByIDAvailability(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsByIDBundledProducts', function() {
      it('should call getProductsByIDBundledProducts successfully', function(done) {
        //uncomment below and update the code to test getProductsByIDBundledProducts
        //instance.getProductsByIDBundledProducts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsByIDImages', function() {
      it('should call getProductsByIDImages successfully', function(done) {
        //uncomment below and update the code to test getProductsByIDImages
        //instance.getProductsByIDImages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsByIDLinks', function() {
      it('should call getProductsByIDLinks successfully', function(done) {
        //uncomment below and update the code to test getProductsByIDLinks
        //instance.getProductsByIDLinks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsByIDOptions', function() {
      it('should call getProductsByIDOptions successfully', function(done) {
        //uncomment below and update the code to test getProductsByIDOptions
        //instance.getProductsByIDOptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsByIDPrices', function() {
      it('should call getProductsByIDPrices successfully', function(done) {
        //uncomment below and update the code to test getProductsByIDPrices
        //instance.getProductsByIDPrices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsByIDPromotions', function() {
      it('should call getProductsByIDPromotions successfully', function(done) {
        //uncomment below and update the code to test getProductsByIDPromotions
        //instance.getProductsByIDPromotions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsByIDRecommendations', function() {
      it('should call getProductsByIDRecommendations successfully', function(done) {
        //uncomment below and update the code to test getProductsByIDRecommendations
        //instance.getProductsByIDRecommendations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsByIDSetProducts', function() {
      it('should call getProductsByIDSetProducts successfully', function(done) {
        //uncomment below and update the code to test getProductsByIDSetProducts
        //instance.getProductsByIDSetProducts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsByIDShippingMethods', function() {
      it('should call getProductsByIDShippingMethods successfully', function(done) {
        //uncomment below and update the code to test getProductsByIDShippingMethods
        //instance.getProductsByIDShippingMethods(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsByIDVariations', function() {
      it('should call getProductsByIDVariations successfully', function(done) {
        //uncomment below and update the code to test getProductsByIDVariations
        //instance.getProductsByIDVariations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsByIDs', function() {
      it('should call getProductsByIDs successfully', function(done) {
        //uncomment below and update the code to test getProductsByIDs
        //instance.getProductsByIDs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
