'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validatePhone;

var _messages = require('./messages.js');

var _validObject = require('./valid-object.js');

var _validObject2 = _interopRequireDefault(_validObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Phone Validation
 * @memberof validator
 * @param {string} phone - phone number
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
function validatePhone(phone) {
  if (!phone) {
    return (0, _messages.info)('phoneIsRequired', '', _validObject2.default.INVALID);
  }

  if (typeof phone !== 'string') {
    return (0, _messages.info)('phoneWrongPattern', phone, _validObject2.default.INVALID);
  }

  if (!phone.trim().match(/^(\+|)[0-9 ]+$/)) {
    return (0, _messages.info)('phoneWrongPattern', phone, _validObject2.default.INVALID);
  }

  return (0, _messages.info)('', '', _validObject2.default.VALID);
}