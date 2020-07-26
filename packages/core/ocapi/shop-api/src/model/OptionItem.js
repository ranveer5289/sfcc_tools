/**
 * Shop API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 20.4
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PriceAdjustment', 'model/ProductItem', 'model/ProductListItemReference'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PriceAdjustment'), require('./ProductItem'), require('./ProductListItemReference'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.OptionItem = factory(root.ShopApi.ApiClient, root.ShopApi.PriceAdjustment, root.ShopApi.ProductItem, root.ShopApi.ProductListItemReference);
  }
}(this, function(ApiClient, PriceAdjustment, ProductItem, ProductListItemReference) {
  'use strict';



  /**
   * The OptionItem model module.
   * @module model/OptionItem
   * @version 20.4
   */

  /**
   * Constructs a new <code>OptionItem</code>.
   * Document representing an option item.
   * @alias module:model/OptionItem
   * @class
   * @param optionId {String} The id of the option.
   * @param optionValueId {String} The id of the option value.
   */
  var exports = function(optionId, optionValueId) {
    var _this = this;

    _this['option_id'] = optionId;
    _this['option_value_id'] = optionValueId;
  };

  /**
   * Constructs a <code>OptionItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OptionItem} obj Optional instance to populate.
   * @return {module:model/OptionItem} The populated <code>OptionItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('adjusted_tax')) {
        obj['adjusted_tax'] = ApiClient.convertToType(data['adjusted_tax'], 'Number');
      }
      if (data.hasOwnProperty('base_price')) {
        obj['base_price'] = ApiClient.convertToType(data['base_price'], 'Number');
      }
      if (data.hasOwnProperty('bonus_discount_line_item_id')) {
        obj['bonus_discount_line_item_id'] = ApiClient.convertToType(data['bonus_discount_line_item_id'], 'String');
      }
      if (data.hasOwnProperty('bonus_product_line_item')) {
        obj['bonus_product_line_item'] = ApiClient.convertToType(data['bonus_product_line_item'], 'Boolean');
      }
      if (data.hasOwnProperty('bundled_product_items')) {
        obj['bundled_product_items'] = ApiClient.convertToType(data['bundled_product_items'], [ProductItem]);
      }
      if (data.hasOwnProperty('gift')) {
        obj['gift'] = ApiClient.convertToType(data['gift'], 'Boolean');
      }
      if (data.hasOwnProperty('gift_message')) {
        obj['gift_message'] = ApiClient.convertToType(data['gift_message'], 'String');
      }
      if (data.hasOwnProperty('inventory_id')) {
        obj['inventory_id'] = ApiClient.convertToType(data['inventory_id'], 'String');
      }
      if (data.hasOwnProperty('item_id')) {
        obj['item_id'] = ApiClient.convertToType(data['item_id'], 'String');
      }
      if (data.hasOwnProperty('item_text')) {
        obj['item_text'] = ApiClient.convertToType(data['item_text'], 'String');
      }
      if (data.hasOwnProperty('option_id')) {
        obj['option_id'] = ApiClient.convertToType(data['option_id'], 'String');
      }
      if (data.hasOwnProperty('option_items')) {
        obj['option_items'] = ApiClient.convertToType(data['option_items'], [OptionItem]);
      }
      if (data.hasOwnProperty('option_value_id')) {
        obj['option_value_id'] = ApiClient.convertToType(data['option_value_id'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('price_adjustments')) {
        obj['price_adjustments'] = ApiClient.convertToType(data['price_adjustments'], [PriceAdjustment]);
      }
      if (data.hasOwnProperty('price_after_item_discount')) {
        obj['price_after_item_discount'] = ApiClient.convertToType(data['price_after_item_discount'], 'Number');
      }
      if (data.hasOwnProperty('price_after_order_discount')) {
        obj['price_after_order_discount'] = ApiClient.convertToType(data['price_after_order_discount'], 'Number');
      }
      if (data.hasOwnProperty('product_id')) {
        obj['product_id'] = ApiClient.convertToType(data['product_id'], 'String');
      }
      if (data.hasOwnProperty('product_list_item')) {
        obj['product_list_item'] = ProductListItemReference.constructFromObject(data['product_list_item']);
      }
      if (data.hasOwnProperty('product_name')) {
        obj['product_name'] = ApiClient.convertToType(data['product_name'], 'String');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('shipment_id')) {
        obj['shipment_id'] = ApiClient.convertToType(data['shipment_id'], 'String');
      }
      if (data.hasOwnProperty('shipping_item_id')) {
        obj['shipping_item_id'] = ApiClient.convertToType(data['shipping_item_id'], 'String');
      }
      if (data.hasOwnProperty('tax')) {
        obj['tax'] = ApiClient.convertToType(data['tax'], 'Number');
      }
      if (data.hasOwnProperty('tax_basis')) {
        obj['tax_basis'] = ApiClient.convertToType(data['tax_basis'], 'Number');
      }
      if (data.hasOwnProperty('tax_class_id')) {
        obj['tax_class_id'] = ApiClient.convertToType(data['tax_class_id'], 'String');
      }
      if (data.hasOwnProperty('tax_rate')) {
        obj['tax_rate'] = ApiClient.convertToType(data['tax_rate'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The tax of the product item after adjustments applying.
   * @member {Number} adjusted_tax
   */
  exports.prototype['adjusted_tax'] = undefined;
  /**
   * The base price for the line item, which is the  price of the unit before applying adjustments, in the purchase  currency. The base price may be net or gross of tax depending  on the configured taxation policy.
   * @member {Number} base_price
   */
  exports.prototype['base_price'] = undefined;
  /**
   * The id of the bonus discount line item this bonus product relates to.
   * @member {String} bonus_discount_line_item_id
   */
  exports.prototype['bonus_discount_line_item_id'] = undefined;
  /**
   * A flag indicating whether the product item is a bonus.
   * @member {Boolean} bonus_product_line_item
   */
  exports.prototype['bonus_product_line_item'] = undefined;
  /**
   * The array of bundled product items. Can be empty.
   * @member {Array.<module:model/ProductItem>} bundled_product_items
   */
  exports.prototype['bundled_product_items'] = undefined;
  /**
   * Returns true if the item is a gift.
   * @member {Boolean} gift
   */
  exports.prototype['gift'] = undefined;
  /**
   * The gift message.
   * @member {String} gift_message
   */
  exports.prototype['gift_message'] = undefined;
  /**
   * The inventory list id associated with this item.
   * @member {String} inventory_id
   */
  exports.prototype['inventory_id'] = undefined;
  /**
   * The item identifier. Use this to identify an item when updating the item quantity or creating a custom price  adjustment for an item.
   * @member {String} item_id
   */
  exports.prototype['item_id'] = undefined;
  /**
   * The text describing the item in more detail.
   * @member {String} item_text
   */
  exports.prototype['item_text'] = undefined;
  /**
   * The id of the option.
   * @member {String} option_id
   */
  exports.prototype['option_id'] = undefined;
  /**
   * The array of option items. This array can be empty.
   * @member {Array.<module:model/OptionItem>} option_items
   */
  exports.prototype['option_items'] = undefined;
  /**
   * The id of the option value.
   * @member {String} option_value_id
   */
  exports.prototype['option_value_id'] = undefined;
  /**
   * The price of the line item before applying any adjustments. If the line item is based on net pricing  then the net price is returned. If the line item is based on gross  pricing then the gross price is returned.
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * Array of price adjustments. Can be empty.
   * @member {Array.<module:model/PriceAdjustment>} price_adjustments
   */
  exports.prototype['price_adjustments'] = undefined;
  /**
   * The price of the product line item after applying all product-level  adjustments. For net pricing the adjusted net price is returned. For gross pricing, the adjusted  gross price is returned.
   * @member {Number} price_after_item_discount
   */
  exports.prototype['price_after_item_discount'] = undefined;
  /**
   * The price of this product line item after considering all  dependent price adjustments and prorating all order-level  price adjustments. For net pricing the net price is returned. For gross  pricing, the gross price is returned.
   * @member {Number} price_after_order_discount
   */
  exports.prototype['price_after_order_discount'] = undefined;
  /**
   * 
   * @member {String} product_id
   */
  exports.prototype['product_id'] = undefined;
  /**
   * @member {module:model/ProductListItemReference} product_list_item
   */
  exports.prototype['product_list_item'] = undefined;
  /**
   * The name of the product.
   * @member {String} product_name
   */
  exports.prototype['product_name'] = undefined;
  /**
   * The quantity of the products represented by this item.
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * The id of the shipment which includes the product item.
   * @member {String} shipment_id
   */
  exports.prototype['shipment_id'] = undefined;
  /**
   * The reference to the related shipping item if it exists. This is the case if for example when a surcharge is  defined for individual products using a particular a shipping method.
   * @member {String} shipping_item_id
   */
  exports.prototype['shipping_item_id'] = undefined;
  /**
   * The tax of the product item before adjustments applying.
   * @member {Number} tax
   */
  exports.prototype['tax'] = undefined;
  /**
   * The price used to calculate the tax for this product item.
   * @member {Number} tax_basis
   */
  exports.prototype['tax_basis'] = undefined;
  /**
   * The tax class ID for the product item or null  if no tax class ID is associated with the product item.
   * @member {String} tax_class_id
   */
  exports.prototype['tax_class_id'] = undefined;
  /**
   * The tax rate, which is the decimal tax rate to be applied  to the product represented by this item.
   * @member {Number} tax_rate
   */
  exports.prototype['tax_rate'] = undefined;



  return exports;
}));


