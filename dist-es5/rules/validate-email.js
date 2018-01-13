'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateEmail;

var _messages = require('./messages.js');

var _validObject = require('./valid-object.js');

var _validObject2 = _interopRequireDefault(_validObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Email Validation
 * @memberof validator
 * @param {string} mail - Email String
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
function validateEmail(mail) {
  if (!mail) {
    return (0, _messages.info)('emailIsRequired', '', _validObject2.default.INVALID);
  }

  var emailreg = mail.match(/^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i);
  if (emailreg !== null) {
    return (0, _messages.info)('', '', _validObject2.default.VALID);
  }

  return (0, _messages.info)('emailWrongPattern', mail, _validObject2.default.INVALID);
}