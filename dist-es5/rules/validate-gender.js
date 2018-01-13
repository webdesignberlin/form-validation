'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateGender;

var _messages = require('./messages.js');

var _validObject = require('./valid-object.js');

var _validObject2 = _interopRequireDefault(_validObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gender Validation
 * @memberof validator
 * @param gender
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
function validateGender(gender) {
  if (!gender) {
    return (0, _messages.info)('genderIsRequired', '', _validObject2.default.INVALID);
  }

  if (gender === 'FEMALE' || gender === 'MALE') {
    return (0, _messages.info)('', '', _validObject2.default.VALID);
  }
  return (0, _messages.info)('genderIsInvalid', gender, _validObject2.default.INVALID);
}