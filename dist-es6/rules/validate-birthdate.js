import { info } from './messages.js';
import is from './valid-object.js';

/**
 * Age Validation
 * @memberof validator
 * @param {string} birthdate - Birthdate as "DD-MM-YYYY"
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
const validateAge = birthdate => {
  if (checkForMinAge(birthdate)) {
    return info('', '', is.VALID);
  }
  return info('birthdateMinAge', birthdate, is.INVALID);
};

/**
 * Birthdate Validation
 * @memberof validator
 * @param {string} birthdate - Birthdate as YYYY-MM-DD
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
export default function validateBirthdate(birthdate) {
  if (!birthdate) {
    return info('birthdateIsRequired', '', is.INVALID);
  }
  if (checkDateString(birthdate)) {
    return validateAge(birthdate);
  }
  return info('birthdateIsInvalid', birthdate, is.INVALID);
}

/**
 * check for min age
 * @param birthdate
 * @param minAge
 * @returns {boolean}
 */
function checkForMinAge(birthdate, minAge = 15) {
  const today = new Date();
  const inputDate = new Date(birthdate);
  const diffInDays = dateDiffInDays(inputDate, today);
  const minDate = new Date();
  const myYear = minDate.getFullYear() - minAge;
  minDate.setFullYear(myYear);
  const minDiffInDays = dateDiffInDays(minDate, today);
  return diffInDays >= minDiffInDays;
}

/**
 * returns diff of dates in days
 * @param a
 * @param b
 * @returns {number}
 */
function dateDiffInDays(a, b) {
  const msPerDay = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utc2 - utc1) / msPerDay);
}

/**
 * check if input date string is in correct format e.g. YYYY-MM-DD
 * @param date
 * @returns {boolean}
 */
function checkDateString(date) {
  let testDateArray = [];
  try {
    testDateArray = date.split('-');
  } catch (error) {
    return false;
  }
  return testDateArray.length === 3;
}