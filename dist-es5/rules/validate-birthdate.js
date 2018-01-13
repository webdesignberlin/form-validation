'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateBirthdate;

var _messages = require('./messages.js');

var _validObject = require('./valid-object.js');

var _validObject2 = _interopRequireDefault(_validObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Age Validation
 * @memberof validator
 * @param {string} birthdate - Birthdate as "DD-MM-YYYY"
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
var validateAge = function validateAge(birthdate) {
  if (checkForMinAge(birthdate)) {
    return (0, _messages.info)('', '', _validObject2.default.VALID);
  }
  return (0, _messages.info)('birthdateMinAge', birthdate, _validObject2.default.INVALID);
};

/**
 * Birthdate Validation
 * @memberof validator
 * @param {string} birthdate - Birthdate as YYYY-MM-DD
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
function validateBirthdate(birthdate) {
  if (!birthdate) {
    return (0, _messages.info)('birthdateIsRequired', '', _validObject2.default.INVALID);
  }
  if (checkDateString(birthdate)) {
    return validateAge(birthdate);
  }
  return (0, _messages.info)('birthdateIsInvalid', birthdate, _validObject2.default.INVALID);
}

/**
 * check for min age
 * @param birthdate
 * @param minAge
 * @returns {boolean}
 */
function checkForMinAge(birthdate) {
  var minAge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 15;

  var today = new Date();
  var inputDate = new Date(birthdate);
  var diffInDays = dateDiffInDays(inputDate, today);
  var minDate = new Date();
  var myYear = minDate.getFullYear() - minAge;
  minDate.setFullYear(myYear);
  var minDiffInDays = dateDiffInDays(minDate, today);
  return diffInDays >= minDiffInDays;
}

/**
 * returns diff of dates in days
 * @param a
 * @param b
 * @returns {number}
 */
function dateDiffInDays(a, b) {
  var msPerDay = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utc2 - utc1) / msPerDay);
}

/**
 * check if input date string is in correct format e.g. YYYY-MM-DD
 * @param date
 * @returns {boolean}
 */
function checkDateString(date) {
  var testDateArray = [];
  try {
    testDateArray = date.split('-');
  } catch (error) {
    return false;
  }
  return testDateArray.length === 3;
}