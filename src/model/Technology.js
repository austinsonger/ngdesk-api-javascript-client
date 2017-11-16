/**
 * ngDesk_Operations
 * ngDesk_Operations
 *
 * OpenAPI spec version: 2.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.NgDeskOperations) {
      root.NgDeskOperations = {};
    }
    root.NgDeskOperations.Technology = factory(root.NgDeskOperations.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Technology model module.
   * @module model/Technology
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>Technology</code>.
   * @alias module:model/Technology
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Technology</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Technology} obj Optional instance to populate.
   * @return {module:model/Technology} The populated <code>Technology</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TechnologyId')) {
        obj['TechnologyId'] = ApiClient.convertToType(data['TechnologyId'], 'Number');
      }
      if (data.hasOwnProperty('TechnologyName')) {
        obj['TechnologyName'] = ApiClient.convertToType(data['TechnologyName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} TechnologyId
   */
  exports.prototype['TechnologyId'] = undefined;
  /**
   * @member {String} TechnologyName
   */
  exports.prototype['TechnologyName'] = undefined;



  return exports;
}));


