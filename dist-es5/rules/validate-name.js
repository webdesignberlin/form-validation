'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateName;

var _messages = require('./messages.js');

var _validObject = require('./valid-object.js');

var _validObject2 = _interopRequireDefault(_validObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Name Validation
 * @memberof validator
 * @param {string} name - First Name or Last Name
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
function validateName(name) {
  if (!name) {
    return (0, _messages.info)('nameIsRequired', '', _validObject2.default.INVALID);
  }

  if (name.length !== name.trim().length) {
    return (0, _messages.info)('nameLengthIsIncorrect', name, _validObject2.default.INVALID);
  }

  var matches = name.match(/^((?!^-)(?!\s\s)[a-zA-Z\u00C0-\u024F\- ](?!-{2})(?!-$)){1,255}$/);
  if (matches) {
    return (0, _messages.info)('', '', _validObject2.default.VALID);
  }

  return (0, _messages.info)('nameValueNotMatched', name, _validObject2.default.INVALID);
}