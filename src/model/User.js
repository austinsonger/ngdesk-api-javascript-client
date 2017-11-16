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
    root.NgDeskOperations.User = factory(root.NgDeskOperations.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The User model module.
   * @module model/User
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('UserId')) {
        obj['UserId'] = ApiClient.convertToType(data['UserId'], 'Number');
      }
      if (data.hasOwnProperty('Username')) {
        obj['Username'] = ApiClient.convertToType(data['Username'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} UserId
   */
  exports.prototype['UserId'] = undefined;
  /**
   * @member {String} Username
   */
  exports.prototype['Username'] = undefined;



  return exports;
}));


