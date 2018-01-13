'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.info = info;
/**
 * Generate Message with Validation Details
 * @export
 * @param {string} [message=''] - Error Message
 * @param {string} [value=''] - current Input Value
 * @param {boolean} [status=false] - Is Valid true/false
 * @returns {{message: string, value: string, isValid: boolean}}
 */
function info() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  return {
    message: message,
    value: value,
    isValid: status
  };
}

exports.default = info;