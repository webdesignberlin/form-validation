'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateState;

var _messages = require('./messages.js');

var _validObject = require('./valid-object.js');

var _validObject2 = _interopRequireDefault(_validObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * State Validation
 * @memberof validator
 * @param {boolean|string} value - true/false as String or Bool
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
function validateState(value) {
  if (!value) {
    return (0, _messages.info)('stateIsRequired', '', _validObject2.default.INVALID);
  }

  if (value === 'true' || typeof value === 'boolean' && true) {
    return (0, _messages.info)('', '', _validObject2.default.VALID);
  }

  return (0, _messages.info)('stateIsNotTrue', value, _validObject2.default.INVALID);
}