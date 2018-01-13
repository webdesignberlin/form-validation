'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateIsRequired;

var _messages = require('./messages.js');

var _validObject = require('./valid-object.js');

var _validObject2 = _interopRequireDefault(_validObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Is Required Validation
 * @memberof validator
 * @param {string|boolean} input - Input to validate
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
function validateIsRequired(input) {
  if (typeof input === 'boolean' && input === true) {
    return (0, _messages.info)('', '', _validObject2.default.VALID);
  }

  if (typeof input === 'boolean' && input === false) {
    return (0, _messages.info)('isRequired', input, _validObject2.default.INVALID);
  }

  if (!input) {
    return (0, _messages.info)('isRequired', '', _validObject2.default.INVALID);
  }

  if (input.length !== input.trim().length) {
    return (0, _messages.info)('isRequired', input, _validObject2.default.INVALID);
  }

  return (0, _messages.info)('isRequired', input, _validObject2.default.VALID);
}