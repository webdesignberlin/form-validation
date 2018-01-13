'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validateIsRequired = require('./validate-is-required.js');

var _validateIsRequired2 = _interopRequireDefault(_validateIsRequired);

var _validateName = require('./validate-name.js');

var _validateName2 = _interopRequireDefault(_validateName);

var _validateEmail = require('./validate-email.js');

var _validateEmail2 = _interopRequireDefault(_validateEmail);

var _validateGender = require('./validate-gender.js');

var _validateGender2 = _interopRequireDefault(_validateGender);

var _validateUuid = require('./validate-uuid.js');

var _validateUuid2 = _interopRequireDefault(_validateUuid);

var _validateState = require('./validate-state.js');

var _validateState2 = _interopRequireDefault(_validateState);

var _validateBirthdate = require('./validate-birthdate.js');

var _validateBirthdate2 = _interopRequireDefault(_validateBirthdate);

var _validatePhone = require('./validate-phone.js');

var _validatePhone2 = _interopRequireDefault(_validatePhone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Validator Object with Validation functions
 * @namespace
 * @type {{firstName: validateName, lastName: validateName,
 * birthdate: validateBirthdate, phone: validatePhone,
 * email: validateEmail, gender: validateGender,
 * uuid: validateUuid, state: validateState}}
 */
var validator = {
  isRequired: _validateIsRequired2.default,
  firstName: _validateName2.default,
  lastName: _validateName2.default,
  birthdate: _validateBirthdate2.default,
  phone: _validatePhone2.default,
  email: _validateEmail2.default,
  gender: _validateGender2.default,
  uuid: _validateUuid2.default,
  state: _validateState2.default
};

exports.default = validator;