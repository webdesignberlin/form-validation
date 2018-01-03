import moment from 'moment';
import { info } from './messages.js';
import is from './valid-object.js';

/**
 * Current Date by moment()
 * @memberof validator
 * @type {*}
 */
const today = moment();
/**
 * Min Age for Trial Workout
 * @memberof validator
 * @type {number}
 */
const MIN_AGE = 15;

/**
 * Age Validation
 * @memberof validator
 * @param {string} birthdate - Birthdate as "DD-MM-YYYY"
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
const validateAge = (birthdate) => {
  /**
   * Year Difference between Current Date amd Birthdate, eg. 15
   * @type {number}
   */
  const yearDifference = moment(today).diff(birthdate, 'years');
  if (yearDifference >= MIN_AGE) {
    return info('', '', is.VALID);
  }
  return info('birthdateMinAge', yearDifference, is.INVALID);
};

/**
 * Birthdate Validation
 * @memberof validator
 * @param {string} birthdate - Birthdate as "DD-MM-YYYY"
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
export default function validateBirthdate(birthdate) {
  if (!birthdate) {
    return info('birthdateIsRequired', '', is.INVALID);
  }

  if (moment(birthdate, 'DD-MM-YYYY').isValid()) {
    return validateAge(birthdate);
  }
  return info('birthdateIsInvalid', birthdate, is.INVALID);
}
