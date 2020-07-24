/**
 * Shop API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 20.8
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApproachingDiscount', 'model/ApproachingDiscountResult', 'model/AuthRequest', 'model/Basket', 'model/BasketPaymentInstrumentRequest', 'model/BasketReference', 'model/BasketsResult', 'model/BonusDiscountLineItem', 'model/BoolFilter', 'model/BoolQuery', 'model/BundledProduct', 'model/Category', 'model/CategoryResult', 'model/Content', 'model/ContentFolder', 'model/ContentFolderResult', 'model/ContentResult', 'model/ContentSearchRefinement', 'model/ContentSearchRefinementValue', 'model/ContentSearchResult', 'model/CouponItem', 'model/CustomObject', 'model/Customer', 'model/CustomerAddress', 'model/CustomerAddressLink', 'model/CustomerAddressResult', 'model/CustomerInfo', 'model/CustomerOrderResult', 'model/CustomerPaymentCardRequest', 'model/CustomerPaymentInstrument', 'model/CustomerPaymentInstrumentRequest', 'model/CustomerPaymentInstrumentResult', 'model/CustomerProductList', 'model/CustomerProductListItem', 'model/CustomerProductListItemLink', 'model/CustomerProductListItemPurchase', 'model/CustomerProductListItemPurchaseResult', 'model/CustomerProductListItemResult', 'model/CustomerProductListRegistrant', 'model/CustomerProductListResult', 'model/CustomerRegistration', 'model/Discount', 'model/DiscountRequest', 'model/FilteredQuery', 'model/GiftCertificate', 'model/GiftCertificateItem', 'model/GiftCertificateRequest', 'model/Image', 'model/ImageGroup', 'model/Inventory', 'model/Locale', 'model/Master', 'model/NestedQuery', 'model/Note', 'model/NotesResult', 'model/Option', 'model/OptionItem', 'model/OptionValue', 'model/Order', 'model/OrderAddress', 'model/OrderPaymentCardRequest', 'model/OrderPaymentInstrument', 'model/OrderPaymentInstrumentRequest', 'model/OrderSearchHit', 'model/OrderSearchRequest', 'model/OrderSearchResult', 'model/PasswordChangeRequest', 'model/PasswordReset', 'model/PaymentBankAccount', 'model/PaymentBankAccountRequest', 'model/PaymentCard', 'model/PaymentCardSpec', 'model/PaymentMethod', 'model/PaymentMethodResult', 'model/PriceAdjustment', 'model/PriceAdjustmentLimit', 'model/PriceAdjustmentLimits', 'model/PriceAdjustmentRequest', 'model/Product', 'model/ProductDetailsLink', 'model/ProductItem', 'model/ProductLink', 'model/ProductListEvent', 'model/ProductListItemReference', 'model/ProductListLink', 'model/ProductListRegistrant', 'model/ProductListShippingAddress', 'model/ProductPromotion', 'model/ProductRecommendationsResult', 'model/ProductRef', 'model/ProductResult', 'model/ProductSearchHit', 'model/ProductSearchRefinement', 'model/ProductSearchRefinementValue', 'model/ProductSearchResult', 'model/ProductSearchSortingOption', 'model/ProductSimpleLink', 'model/ProductType', 'model/Promotion', 'model/PromotionLink', 'model/PromotionResult', 'model/PublicProductList', 'model/PublicProductListItem', 'model/PublicProductListItemResult', 'model/PublicProductListLink', 'model/PublicProductListResult', 'model/QueryFilter', 'model/Range2Filter', 'model/RangeFilter', 'model/Recommendation', 'model/RecommendationType', 'model/ResetPasswordRequest', 'model/ResetPasswordTokenRequest', 'model/ResetPasswordTokenResult', 'model/ResultPage', 'model/Shipment', 'model/ShippingItem', 'model/ShippingMethod', 'model/ShippingMethodResult', 'model/ShippingPromotion', 'model/SimpleLink', 'model/Site', 'model/Sort', 'model/Status', 'model/Store', 'model/StoreResult', 'model/SuggestedCategory', 'model/SuggestedContent', 'model/SuggestedPhrase', 'model/SuggestedProduct', 'model/SuggestedTerm', 'model/SuggestedTerms', 'model/Suggestion', 'model/SuggestionResult', 'model/TermFilter', 'model/TermQuery', 'model/TextQuery', 'model/TrustedSystemAuthRequest', 'model/Variant', 'model/VariationAttribute', 'model/VariationAttributeValue', 'model/VariationGroup', 'api/AiApi', 'api/BasketsApi', 'api/CategoriesApi', 'api/ContentApi', 'api/ContentSearchApi', 'api/CustomObjectsApi', 'api/CustomersApi', 'api/FoldersApi', 'api/GiftCertificateApi', 'api/OrderSearchApi', 'api/OrdersApi', 'api/PriceAdjustmentLimitsApi', 'api/ProductListsApi', 'api/ProductSearchApi', 'api/ProductsApi', 'api/PromotionsApi', 'api/SearchSuggestionApi', 'api/SessionsApi', 'api/SiteApi', 'api/StoresApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ApproachingDiscount'), require('./model/ApproachingDiscountResult'), require('./model/AuthRequest'), require('./model/Basket'), require('./model/BasketPaymentInstrumentRequest'), require('./model/BasketReference'), require('./model/BasketsResult'), require('./model/BonusDiscountLineItem'), require('./model/BoolFilter'), require('./model/BoolQuery'), require('./model/BundledProduct'), require('./model/Category'), require('./model/CategoryResult'), require('./model/Content'), require('./model/ContentFolder'), require('./model/ContentFolderResult'), require('./model/ContentResult'), require('./model/ContentSearchRefinement'), require('./model/ContentSearchRefinementValue'), require('./model/ContentSearchResult'), require('./model/CouponItem'), require('./model/CustomObject'), require('./model/Customer'), require('./model/CustomerAddress'), require('./model/CustomerAddressLink'), require('./model/CustomerAddressResult'), require('./model/CustomerInfo'), require('./model/CustomerOrderResult'), require('./model/CustomerPaymentCardRequest'), require('./model/CustomerPaymentInstrument'), require('./model/CustomerPaymentInstrumentRequest'), require('./model/CustomerPaymentInstrumentResult'), require('./model/CustomerProductList'), require('./model/CustomerProductListItem'), require('./model/CustomerProductListItemLink'), require('./model/CustomerProductListItemPurchase'), require('./model/CustomerProductListItemPurchaseResult'), require('./model/CustomerProductListItemResult'), require('./model/CustomerProductListRegistrant'), require('./model/CustomerProductListResult'), require('./model/CustomerRegistration'), require('./model/Discount'), require('./model/DiscountRequest'), require('./model/FilteredQuery'), require('./model/GiftCertificate'), require('./model/GiftCertificateItem'), require('./model/GiftCertificateRequest'), require('./model/Image'), require('./model/ImageGroup'), require('./model/Inventory'), require('./model/Locale'), require('./model/Master'), require('./model/NestedQuery'), require('./model/Note'), require('./model/NotesResult'), require('./model/Option'), require('./model/OptionItem'), require('./model/OptionValue'), require('./model/Order'), require('./model/OrderAddress'), require('./model/OrderPaymentCardRequest'), require('./model/OrderPaymentInstrument'), require('./model/OrderPaymentInstrumentRequest'), require('./model/OrderSearchHit'), require('./model/OrderSearchRequest'), require('./model/OrderSearchResult'), require('./model/PasswordChangeRequest'), require('./model/PasswordReset'), require('./model/PaymentBankAccount'), require('./model/PaymentBankAccountRequest'), require('./model/PaymentCard'), require('./model/PaymentCardSpec'), require('./model/PaymentMethod'), require('./model/PaymentMethodResult'), require('./model/PriceAdjustment'), require('./model/PriceAdjustmentLimit'), require('./model/PriceAdjustmentLimits'), require('./model/PriceAdjustmentRequest'), require('./model/Product'), require('./model/ProductDetailsLink'), require('./model/ProductItem'), require('./model/ProductLink'), require('./model/ProductListEvent'), require('./model/ProductListItemReference'), require('./model/ProductListLink'), require('./model/ProductListRegistrant'), require('./model/ProductListShippingAddress'), require('./model/ProductPromotion'), require('./model/ProductRecommendationsResult'), require('./model/ProductRef'), require('./model/ProductResult'), require('./model/ProductSearchHit'), require('./model/ProductSearchRefinement'), require('./model/ProductSearchRefinementValue'), require('./model/ProductSearchResult'), require('./model/ProductSearchSortingOption'), require('./model/ProductSimpleLink'), require('./model/ProductType'), require('./model/Promotion'), require('./model/PromotionLink'), require('./model/PromotionResult'), require('./model/PublicProductList'), require('./model/PublicProductListItem'), require('./model/PublicProductListItemResult'), require('./model/PublicProductListLink'), require('./model/PublicProductListResult'), require('./model/QueryFilter'), require('./model/Range2Filter'), require('./model/RangeFilter'), require('./model/Recommendation'), require('./model/RecommendationType'), require('./model/ResetPasswordRequest'), require('./model/ResetPasswordTokenRequest'), require('./model/ResetPasswordTokenResult'), require('./model/ResultPage'), require('./model/Shipment'), require('./model/ShippingItem'), require('./model/ShippingMethod'), require('./model/ShippingMethodResult'), require('./model/ShippingPromotion'), require('./model/SimpleLink'), require('./model/Site'), require('./model/Sort'), require('./model/Status'), require('./model/Store'), require('./model/StoreResult'), require('./model/SuggestedCategory'), require('./model/SuggestedContent'), require('./model/SuggestedPhrase'), require('./model/SuggestedProduct'), require('./model/SuggestedTerm'), require('./model/SuggestedTerms'), require('./model/Suggestion'), require('./model/SuggestionResult'), require('./model/TermFilter'), require('./model/TermQuery'), require('./model/TextQuery'), require('./model/TrustedSystemAuthRequest'), require('./model/Variant'), require('./model/VariationAttribute'), require('./model/VariationAttributeValue'), require('./model/VariationGroup'), require('./api/AiApi'), require('./api/BasketsApi'), require('./api/CategoriesApi'), require('./api/ContentApi'), require('./api/ContentSearchApi'), require('./api/CustomObjectsApi'), require('./api/CustomersApi'), require('./api/FoldersApi'), require('./api/GiftCertificateApi'), require('./api/OrderSearchApi'), require('./api/OrdersApi'), require('./api/PriceAdjustmentLimitsApi'), require('./api/ProductListsApi'), require('./api/ProductSearchApi'), require('./api/ProductsApi'), require('./api/PromotionsApi'), require('./api/SearchSuggestionApi'), require('./api/SessionsApi'), require('./api/SiteApi'), require('./api/StoresApi'));
  }
}(function(ApiClient, ApproachingDiscount, ApproachingDiscountResult, AuthRequest, Basket, BasketPaymentInstrumentRequest, BasketReference, BasketsResult, BonusDiscountLineItem, BoolFilter, BoolQuery, BundledProduct, Category, CategoryResult, Content, ContentFolder, ContentFolderResult, ContentResult, ContentSearchRefinement, ContentSearchRefinementValue, ContentSearchResult, CouponItem, CustomObject, Customer, CustomerAddress, CustomerAddressLink, CustomerAddressResult, CustomerInfo, CustomerOrderResult, CustomerPaymentCardRequest, CustomerPaymentInstrument, CustomerPaymentInstrumentRequest, CustomerPaymentInstrumentResult, CustomerProductList, CustomerProductListItem, CustomerProductListItemLink, CustomerProductListItemPurchase, CustomerProductListItemPurchaseResult, CustomerProductListItemResult, CustomerProductListRegistrant, CustomerProductListResult, CustomerRegistration, Discount, DiscountRequest, FilteredQuery, GiftCertificate, GiftCertificateItem, GiftCertificateRequest, Image, ImageGroup, Inventory, Locale, Master, NestedQuery, Note, NotesResult, Option, OptionItem, OptionValue, Order, OrderAddress, OrderPaymentCardRequest, OrderPaymentInstrument, OrderPaymentInstrumentRequest, OrderSearchHit, OrderSearchRequest, OrderSearchResult, PasswordChangeRequest, PasswordReset, PaymentBankAccount, PaymentBankAccountRequest, PaymentCard, PaymentCardSpec, PaymentMethod, PaymentMethodResult, PriceAdjustment, PriceAdjustmentLimit, PriceAdjustmentLimits, PriceAdjustmentRequest, Product, ProductDetailsLink, ProductItem, ProductLink, ProductListEvent, ProductListItemReference, ProductListLink, ProductListRegistrant, ProductListShippingAddress, ProductPromotion, ProductRecommendationsResult, ProductRef, ProductResult, ProductSearchHit, ProductSearchRefinement, ProductSearchRefinementValue, ProductSearchResult, ProductSearchSortingOption, ProductSimpleLink, ProductType, Promotion, PromotionLink, PromotionResult, PublicProductList, PublicProductListItem, PublicProductListItemResult, PublicProductListLink, PublicProductListResult, QueryFilter, Range2Filter, RangeFilter, Recommendation, RecommendationType, ResetPasswordRequest, ResetPasswordTokenRequest, ResetPasswordTokenResult, ResultPage, Shipment, ShippingItem, ShippingMethod, ShippingMethodResult, ShippingPromotion, SimpleLink, Site, Sort, Status, Store, StoreResult, SuggestedCategory, SuggestedContent, SuggestedPhrase, SuggestedProduct, SuggestedTerm, SuggestedTerms, Suggestion, SuggestionResult, TermFilter, TermQuery, TextQuery, TrustedSystemAuthRequest, Variant, VariationAttribute, VariationAttributeValue, VariationGroup, AiApi, BasketsApi, CategoriesApi, ContentApi, ContentSearchApi, CustomObjectsApi, CustomersApi, FoldersApi, GiftCertificateApi, OrderSearchApi, OrdersApi, PriceAdjustmentLimitsApi, ProductListsApi, ProductSearchApi, ProductsApi, PromotionsApi, SearchSuggestionApi, SessionsApi, SiteApi, StoresApi) {
  'use strict';

  /**
   * JS API client generated by OpenAPI Generator.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var ShopApi = require('index'); // See note below*.
   * var xxxSvc = new ShopApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new ShopApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new ShopApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new ShopApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 20.8
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ApproachingDiscount model constructor.
     * @property {module:model/ApproachingDiscount}
     */
    ApproachingDiscount: ApproachingDiscount,
    /**
     * The ApproachingDiscountResult model constructor.
     * @property {module:model/ApproachingDiscountResult}
     */
    ApproachingDiscountResult: ApproachingDiscountResult,
    /**
     * The AuthRequest model constructor.
     * @property {module:model/AuthRequest}
     */
    AuthRequest: AuthRequest,
    /**
     * The Basket model constructor.
     * @property {module:model/Basket}
     */
    Basket: Basket,
    /**
     * The BasketPaymentInstrumentRequest model constructor.
     * @property {module:model/BasketPaymentInstrumentRequest}
     */
    BasketPaymentInstrumentRequest: BasketPaymentInstrumentRequest,
    /**
     * The BasketReference model constructor.
     * @property {module:model/BasketReference}
     */
    BasketReference: BasketReference,
    /**
     * The BasketsResult model constructor.
     * @property {module:model/BasketsResult}
     */
    BasketsResult: BasketsResult,
    /**
     * The BonusDiscountLineItem model constructor.
     * @property {module:model/BonusDiscountLineItem}
     */
    BonusDiscountLineItem: BonusDiscountLineItem,
    /**
     * The BoolFilter model constructor.
     * @property {module:model/BoolFilter}
     */
    BoolFilter: BoolFilter,
    /**
     * The BoolQuery model constructor.
     * @property {module:model/BoolQuery}
     */
    BoolQuery: BoolQuery,
    /**
     * The BundledProduct model constructor.
     * @property {module:model/BundledProduct}
     */
    BundledProduct: BundledProduct,
    /**
     * The Category model constructor.
     * @property {module:model/Category}
     */
    Category: Category,
    /**
     * The CategoryResult model constructor.
     * @property {module:model/CategoryResult}
     */
    CategoryResult: CategoryResult,
    /**
     * The Content model constructor.
     * @property {module:model/Content}
     */
    Content: Content,
    /**
     * The ContentFolder model constructor.
     * @property {module:model/ContentFolder}
     */
    ContentFolder: ContentFolder,
    /**
     * The ContentFolderResult model constructor.
     * @property {module:model/ContentFolderResult}
     */
    ContentFolderResult: ContentFolderResult,
    /**
     * The ContentResult model constructor.
     * @property {module:model/ContentResult}
     */
    ContentResult: ContentResult,
    /**
     * The ContentSearchRefinement model constructor.
     * @property {module:model/ContentSearchRefinement}
     */
    ContentSearchRefinement: ContentSearchRefinement,
    /**
     * The ContentSearchRefinementValue model constructor.
     * @property {module:model/ContentSearchRefinementValue}
     */
    ContentSearchRefinementValue: ContentSearchRefinementValue,
    /**
     * The ContentSearchResult model constructor.
     * @property {module:model/ContentSearchResult}
     */
    ContentSearchResult: ContentSearchResult,
    /**
     * The CouponItem model constructor.
     * @property {module:model/CouponItem}
     */
    CouponItem: CouponItem,
    /**
     * The CustomObject model constructor.
     * @property {module:model/CustomObject}
     */
    CustomObject: CustomObject,
    /**
     * The Customer model constructor.
     * @property {module:model/Customer}
     */
    Customer: Customer,
    /**
     * The CustomerAddress model constructor.
     * @property {module:model/CustomerAddress}
     */
    CustomerAddress: CustomerAddress,
    /**
     * The CustomerAddressLink model constructor.
     * @property {module:model/CustomerAddressLink}
     */
    CustomerAddressLink: CustomerAddressLink,
    /**
     * The CustomerAddressResult model constructor.
     * @property {module:model/CustomerAddressResult}
     */
    CustomerAddressResult: CustomerAddressResult,
    /**
     * The CustomerInfo model constructor.
     * @property {module:model/CustomerInfo}
     */
    CustomerInfo: CustomerInfo,
    /**
     * The CustomerOrderResult model constructor.
     * @property {module:model/CustomerOrderResult}
     */
    CustomerOrderResult: CustomerOrderResult,
    /**
     * The CustomerPaymentCardRequest model constructor.
     * @property {module:model/CustomerPaymentCardRequest}
     */
    CustomerPaymentCardRequest: CustomerPaymentCardRequest,
    /**
     * The CustomerPaymentInstrument model constructor.
     * @property {module:model/CustomerPaymentInstrument}
     */
    CustomerPaymentInstrument: CustomerPaymentInstrument,
    /**
     * The CustomerPaymentInstrumentRequest model constructor.
     * @property {module:model/CustomerPaymentInstrumentRequest}
     */
    CustomerPaymentInstrumentRequest: CustomerPaymentInstrumentRequest,
    /**
     * The CustomerPaymentInstrumentResult model constructor.
     * @property {module:model/CustomerPaymentInstrumentResult}
     */
    CustomerPaymentInstrumentResult: CustomerPaymentInstrumentResult,
    /**
     * The CustomerProductList model constructor.
     * @property {module:model/CustomerProductList}
     */
    CustomerProductList: CustomerProductList,
    /**
     * The CustomerProductListItem model constructor.
     * @property {module:model/CustomerProductListItem}
     */
    CustomerProductListItem: CustomerProductListItem,
    /**
     * The CustomerProductListItemLink model constructor.
     * @property {module:model/CustomerProductListItemLink}
     */
    CustomerProductListItemLink: CustomerProductListItemLink,
    /**
     * The CustomerProductListItemPurchase model constructor.
     * @property {module:model/CustomerProductListItemPurchase}
     */
    CustomerProductListItemPurchase: CustomerProductListItemPurchase,
    /**
     * The CustomerProductListItemPurchaseResult model constructor.
     * @property {module:model/CustomerProductListItemPurchaseResult}
     */
    CustomerProductListItemPurchaseResult: CustomerProductListItemPurchaseResult,
    /**
     * The CustomerProductListItemResult model constructor.
     * @property {module:model/CustomerProductListItemResult}
     */
    CustomerProductListItemResult: CustomerProductListItemResult,
    /**
     * The CustomerProductListRegistrant model constructor.
     * @property {module:model/CustomerProductListRegistrant}
     */
    CustomerProductListRegistrant: CustomerProductListRegistrant,
    /**
     * The CustomerProductListResult model constructor.
     * @property {module:model/CustomerProductListResult}
     */
    CustomerProductListResult: CustomerProductListResult,
    /**
     * The CustomerRegistration model constructor.
     * @property {module:model/CustomerRegistration}
     */
    CustomerRegistration: CustomerRegistration,
    /**
     * The Discount model constructor.
     * @property {module:model/Discount}
     */
    Discount: Discount,
    /**
     * The DiscountRequest model constructor.
     * @property {module:model/DiscountRequest}
     */
    DiscountRequest: DiscountRequest,
    /**
     * The FilteredQuery model constructor.
     * @property {module:model/FilteredQuery}
     */
    FilteredQuery: FilteredQuery,
    /**
     * The GiftCertificate model constructor.
     * @property {module:model/GiftCertificate}
     */
    GiftCertificate: GiftCertificate,
    /**
     * The GiftCertificateItem model constructor.
     * @property {module:model/GiftCertificateItem}
     */
    GiftCertificateItem: GiftCertificateItem,
    /**
     * The GiftCertificateRequest model constructor.
     * @property {module:model/GiftCertificateRequest}
     */
    GiftCertificateRequest: GiftCertificateRequest,
    /**
     * The Image model constructor.
     * @property {module:model/Image}
     */
    Image: Image,
    /**
     * The ImageGroup model constructor.
     * @property {module:model/ImageGroup}
     */
    ImageGroup: ImageGroup,
    /**
     * The Inventory model constructor.
     * @property {module:model/Inventory}
     */
    Inventory: Inventory,
    /**
     * The Locale model constructor.
     * @property {module:model/Locale}
     */
    Locale: Locale,
    /**
     * The Master model constructor.
     * @property {module:model/Master}
     */
    Master: Master,
    /**
     * The NestedQuery model constructor.
     * @property {module:model/NestedQuery}
     */
    NestedQuery: NestedQuery,
    /**
     * The Note model constructor.
     * @property {module:model/Note}
     */
    Note: Note,
    /**
     * The NotesResult model constructor.
     * @property {module:model/NotesResult}
     */
    NotesResult: NotesResult,
    /**
     * The Option model constructor.
     * @property {module:model/Option}
     */
    Option: Option,
    /**
     * The OptionItem model constructor.
     * @property {module:model/OptionItem}
     */
    OptionItem: OptionItem,
    /**
     * The OptionValue model constructor.
     * @property {module:model/OptionValue}
     */
    OptionValue: OptionValue,
    /**
     * The Order model constructor.
     * @property {module:model/Order}
     */
    Order: Order,
    /**
     * The OrderAddress model constructor.
     * @property {module:model/OrderAddress}
     */
    OrderAddress: OrderAddress,
    /**
     * The OrderPaymentCardRequest model constructor.
     * @property {module:model/OrderPaymentCardRequest}
     */
    OrderPaymentCardRequest: OrderPaymentCardRequest,
    /**
     * The OrderPaymentInstrument model constructor.
     * @property {module:model/OrderPaymentInstrument}
     */
    OrderPaymentInstrument: OrderPaymentInstrument,
    /**
     * The OrderPaymentInstrumentRequest model constructor.
     * @property {module:model/OrderPaymentInstrumentRequest}
     */
    OrderPaymentInstrumentRequest: OrderPaymentInstrumentRequest,
    /**
     * The OrderSearchHit model constructor.
     * @property {module:model/OrderSearchHit}
     */
    OrderSearchHit: OrderSearchHit,
    /**
     * The OrderSearchRequest model constructor.
     * @property {module:model/OrderSearchRequest}
     */
    OrderSearchRequest: OrderSearchRequest,
    /**
     * The OrderSearchResult model constructor.
     * @property {module:model/OrderSearchResult}
     */
    OrderSearchResult: OrderSearchResult,
    /**
     * The PasswordChangeRequest model constructor.
     * @property {module:model/PasswordChangeRequest}
     */
    PasswordChangeRequest: PasswordChangeRequest,
    /**
     * The PasswordReset model constructor.
     * @property {module:model/PasswordReset}
     */
    PasswordReset: PasswordReset,
    /**
     * The PaymentBankAccount model constructor.
     * @property {module:model/PaymentBankAccount}
     */
    PaymentBankAccount: PaymentBankAccount,
    /**
     * The PaymentBankAccountRequest model constructor.
     * @property {module:model/PaymentBankAccountRequest}
     */
    PaymentBankAccountRequest: PaymentBankAccountRequest,
    /**
     * The PaymentCard model constructor.
     * @property {module:model/PaymentCard}
     */
    PaymentCard: PaymentCard,
    /**
     * The PaymentCardSpec model constructor.
     * @property {module:model/PaymentCardSpec}
     */
    PaymentCardSpec: PaymentCardSpec,
    /**
     * The PaymentMethod model constructor.
     * @property {module:model/PaymentMethod}
     */
    PaymentMethod: PaymentMethod,
    /**
     * The PaymentMethodResult model constructor.
     * @property {module:model/PaymentMethodResult}
     */
    PaymentMethodResult: PaymentMethodResult,
    /**
     * The PriceAdjustment model constructor.
     * @property {module:model/PriceAdjustment}
     */
    PriceAdjustment: PriceAdjustment,
    /**
     * The PriceAdjustmentLimit model constructor.
     * @property {module:model/PriceAdjustmentLimit}
     */
    PriceAdjustmentLimit: PriceAdjustmentLimit,
    /**
     * The PriceAdjustmentLimits model constructor.
     * @property {module:model/PriceAdjustmentLimits}
     */
    PriceAdjustmentLimits: PriceAdjustmentLimits,
    /**
     * The PriceAdjustmentRequest model constructor.
     * @property {module:model/PriceAdjustmentRequest}
     */
    PriceAdjustmentRequest: PriceAdjustmentRequest,
    /**
     * The Product model constructor.
     * @property {module:model/Product}
     */
    Product: Product,
    /**
     * The ProductDetailsLink model constructor.
     * @property {module:model/ProductDetailsLink}
     */
    ProductDetailsLink: ProductDetailsLink,
    /**
     * The ProductItem model constructor.
     * @property {module:model/ProductItem}
     */
    ProductItem: ProductItem,
    /**
     * The ProductLink model constructor.
     * @property {module:model/ProductLink}
     */
    ProductLink: ProductLink,
    /**
     * The ProductListEvent model constructor.
     * @property {module:model/ProductListEvent}
     */
    ProductListEvent: ProductListEvent,
    /**
     * The ProductListItemReference model constructor.
     * @property {module:model/ProductListItemReference}
     */
    ProductListItemReference: ProductListItemReference,
    /**
     * The ProductListLink model constructor.
     * @property {module:model/ProductListLink}
     */
    ProductListLink: ProductListLink,
    /**
     * The ProductListRegistrant model constructor.
     * @property {module:model/ProductListRegistrant}
     */
    ProductListRegistrant: ProductListRegistrant,
    /**
     * The ProductListShippingAddress model constructor.
     * @property {module:model/ProductListShippingAddress}
     */
    ProductListShippingAddress: ProductListShippingAddress,
    /**
     * The ProductPromotion model constructor.
     * @property {module:model/ProductPromotion}
     */
    ProductPromotion: ProductPromotion,
    /**
     * The ProductRecommendationsResult model constructor.
     * @property {module:model/ProductRecommendationsResult}
     */
    ProductRecommendationsResult: ProductRecommendationsResult,
    /**
     * The ProductRef model constructor.
     * @property {module:model/ProductRef}
     */
    ProductRef: ProductRef,
    /**
     * The ProductResult model constructor.
     * @property {module:model/ProductResult}
     */
    ProductResult: ProductResult,
    /**
     * The ProductSearchHit model constructor.
     * @property {module:model/ProductSearchHit}
     */
    ProductSearchHit: ProductSearchHit,
    /**
     * The ProductSearchRefinement model constructor.
     * @property {module:model/ProductSearchRefinement}
     */
    ProductSearchRefinement: ProductSearchRefinement,
    /**
     * The ProductSearchRefinementValue model constructor.
     * @property {module:model/ProductSearchRefinementValue}
     */
    ProductSearchRefinementValue: ProductSearchRefinementValue,
    /**
     * The ProductSearchResult model constructor.
     * @property {module:model/ProductSearchResult}
     */
    ProductSearchResult: ProductSearchResult,
    /**
     * The ProductSearchSortingOption model constructor.
     * @property {module:model/ProductSearchSortingOption}
     */
    ProductSearchSortingOption: ProductSearchSortingOption,
    /**
     * The ProductSimpleLink model constructor.
     * @property {module:model/ProductSimpleLink}
     */
    ProductSimpleLink: ProductSimpleLink,
    /**
     * The ProductType model constructor.
     * @property {module:model/ProductType}
     */
    ProductType: ProductType,
    /**
     * The Promotion model constructor.
     * @property {module:model/Promotion}
     */
    Promotion: Promotion,
    /**
     * The PromotionLink model constructor.
     * @property {module:model/PromotionLink}
     */
    PromotionLink: PromotionLink,
    /**
     * The PromotionResult model constructor.
     * @property {module:model/PromotionResult}
     */
    PromotionResult: PromotionResult,
    /**
     * The PublicProductList model constructor.
     * @property {module:model/PublicProductList}
     */
    PublicProductList: PublicProductList,
    /**
     * The PublicProductListItem model constructor.
     * @property {module:model/PublicProductListItem}
     */
    PublicProductListItem: PublicProductListItem,
    /**
     * The PublicProductListItemResult model constructor.
     * @property {module:model/PublicProductListItemResult}
     */
    PublicProductListItemResult: PublicProductListItemResult,
    /**
     * The PublicProductListLink model constructor.
     * @property {module:model/PublicProductListLink}
     */
    PublicProductListLink: PublicProductListLink,
    /**
     * The PublicProductListResult model constructor.
     * @property {module:model/PublicProductListResult}
     */
    PublicProductListResult: PublicProductListResult,
    /**
     * The QueryFilter model constructor.
     * @property {module:model/QueryFilter}
     */
    QueryFilter: QueryFilter,
    /**
     * The Range2Filter model constructor.
     * @property {module:model/Range2Filter}
     */
    Range2Filter: Range2Filter,
    /**
     * The RangeFilter model constructor.
     * @property {module:model/RangeFilter}
     */
    RangeFilter: RangeFilter,
    /**
     * The Recommendation model constructor.
     * @property {module:model/Recommendation}
     */
    Recommendation: Recommendation,
    /**
     * The RecommendationType model constructor.
     * @property {module:model/RecommendationType}
     */
    RecommendationType: RecommendationType,
    /**
     * The ResetPasswordRequest model constructor.
     * @property {module:model/ResetPasswordRequest}
     */
    ResetPasswordRequest: ResetPasswordRequest,
    /**
     * The ResetPasswordTokenRequest model constructor.
     * @property {module:model/ResetPasswordTokenRequest}
     */
    ResetPasswordTokenRequest: ResetPasswordTokenRequest,
    /**
     * The ResetPasswordTokenResult model constructor.
     * @property {module:model/ResetPasswordTokenResult}
     */
    ResetPasswordTokenResult: ResetPasswordTokenResult,
    /**
     * The ResultPage model constructor.
     * @property {module:model/ResultPage}
     */
    ResultPage: ResultPage,
    /**
     * The Shipment model constructor.
     * @property {module:model/Shipment}
     */
    Shipment: Shipment,
    /**
     * The ShippingItem model constructor.
     * @property {module:model/ShippingItem}
     */
    ShippingItem: ShippingItem,
    /**
     * The ShippingMethod model constructor.
     * @property {module:model/ShippingMethod}
     */
    ShippingMethod: ShippingMethod,
    /**
     * The ShippingMethodResult model constructor.
     * @property {module:model/ShippingMethodResult}
     */
    ShippingMethodResult: ShippingMethodResult,
    /**
     * The ShippingPromotion model constructor.
     * @property {module:model/ShippingPromotion}
     */
    ShippingPromotion: ShippingPromotion,
    /**
     * The SimpleLink model constructor.
     * @property {module:model/SimpleLink}
     */
    SimpleLink: SimpleLink,
    /**
     * The Site model constructor.
     * @property {module:model/Site}
     */
    Site: Site,
    /**
     * The Sort model constructor.
     * @property {module:model/Sort}
     */
    Sort: Sort,
    /**
     * The Status model constructor.
     * @property {module:model/Status}
     */
    Status: Status,
    /**
     * The Store model constructor.
     * @property {module:model/Store}
     */
    Store: Store,
    /**
     * The StoreResult model constructor.
     * @property {module:model/StoreResult}
     */
    StoreResult: StoreResult,
    /**
     * The SuggestedCategory model constructor.
     * @property {module:model/SuggestedCategory}
     */
    SuggestedCategory: SuggestedCategory,
    /**
     * The SuggestedContent model constructor.
     * @property {module:model/SuggestedContent}
     */
    SuggestedContent: SuggestedContent,
    /**
     * The SuggestedPhrase model constructor.
     * @property {module:model/SuggestedPhrase}
     */
    SuggestedPhrase: SuggestedPhrase,
    /**
     * The SuggestedProduct model constructor.
     * @property {module:model/SuggestedProduct}
     */
    SuggestedProduct: SuggestedProduct,
    /**
     * The SuggestedTerm model constructor.
     * @property {module:model/SuggestedTerm}
     */
    SuggestedTerm: SuggestedTerm,
    /**
     * The SuggestedTerms model constructor.
     * @property {module:model/SuggestedTerms}
     */
    SuggestedTerms: SuggestedTerms,
    /**
     * The Suggestion model constructor.
     * @property {module:model/Suggestion}
     */
    Suggestion: Suggestion,
    /**
     * The SuggestionResult model constructor.
     * @property {module:model/SuggestionResult}
     */
    SuggestionResult: SuggestionResult,
    /**
     * The TermFilter model constructor.
     * @property {module:model/TermFilter}
     */
    TermFilter: TermFilter,
    /**
     * The TermQuery model constructor.
     * @property {module:model/TermQuery}
     */
    TermQuery: TermQuery,
    /**
     * The TextQuery model constructor.
     * @property {module:model/TextQuery}
     */
    TextQuery: TextQuery,
    /**
     * The TrustedSystemAuthRequest model constructor.
     * @property {module:model/TrustedSystemAuthRequest}
     */
    TrustedSystemAuthRequest: TrustedSystemAuthRequest,
    /**
     * The Variant model constructor.
     * @property {module:model/Variant}
     */
    Variant: Variant,
    /**
     * The VariationAttribute model constructor.
     * @property {module:model/VariationAttribute}
     */
    VariationAttribute: VariationAttribute,
    /**
     * The VariationAttributeValue model constructor.
     * @property {module:model/VariationAttributeValue}
     */
    VariationAttributeValue: VariationAttributeValue,
    /**
     * The VariationGroup model constructor.
     * @property {module:model/VariationGroup}
     */
    VariationGroup: VariationGroup,
    /**
     * The AiApi service constructor.
     * @property {module:api/AiApi}
     */
    AiApi: AiApi,
    /**
     * The BasketsApi service constructor.
     * @property {module:api/BasketsApi}
     */
    BasketsApi: BasketsApi,
    /**
     * The CategoriesApi service constructor.
     * @property {module:api/CategoriesApi}
     */
    CategoriesApi: CategoriesApi,
    /**
     * The ContentApi service constructor.
     * @property {module:api/ContentApi}
     */
    ContentApi: ContentApi,
    /**
     * The ContentSearchApi service constructor.
     * @property {module:api/ContentSearchApi}
     */
    ContentSearchApi: ContentSearchApi,
    /**
     * The CustomObjectsApi service constructor.
     * @property {module:api/CustomObjectsApi}
     */
    CustomObjectsApi: CustomObjectsApi,
    /**
     * The CustomersApi service constructor.
     * @property {module:api/CustomersApi}
     */
    CustomersApi: CustomersApi,
    /**
     * The FoldersApi service constructor.
     * @property {module:api/FoldersApi}
     */
    FoldersApi: FoldersApi,
    /**
     * The GiftCertificateApi service constructor.
     * @property {module:api/GiftCertificateApi}
     */
    GiftCertificateApi: GiftCertificateApi,
    /**
     * The OrderSearchApi service constructor.
     * @property {module:api/OrderSearchApi}
     */
    OrderSearchApi: OrderSearchApi,
    /**
     * The OrdersApi service constructor.
     * @property {module:api/OrdersApi}
     */
    OrdersApi: OrdersApi,
    /**
     * The PriceAdjustmentLimitsApi service constructor.
     * @property {module:api/PriceAdjustmentLimitsApi}
     */
    PriceAdjustmentLimitsApi: PriceAdjustmentLimitsApi,
    /**
     * The ProductListsApi service constructor.
     * @property {module:api/ProductListsApi}
     */
    ProductListsApi: ProductListsApi,
    /**
     * The ProductSearchApi service constructor.
     * @property {module:api/ProductSearchApi}
     */
    ProductSearchApi: ProductSearchApi,
    /**
     * The ProductsApi service constructor.
     * @property {module:api/ProductsApi}
     */
    ProductsApi: ProductsApi,
    /**
     * The PromotionsApi service constructor.
     * @property {module:api/PromotionsApi}
     */
    PromotionsApi: PromotionsApi,
    /**
     * The SearchSuggestionApi service constructor.
     * @property {module:api/SearchSuggestionApi}
     */
    SearchSuggestionApi: SearchSuggestionApi,
    /**
     * The SessionsApi service constructor.
     * @property {module:api/SessionsApi}
     */
    SessionsApi: SessionsApi,
    /**
     * The SiteApi service constructor.
     * @property {module:api/SiteApi}
     */
    SiteApi: SiteApi,
    /**
     * The StoresApi service constructor.
     * @property {module:api/StoresApi}
     */
    StoresApi: StoresApi
  };

  return exports;
}));
