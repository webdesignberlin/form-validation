import moment from 'moment';
import Messages from './messages.js';
import is from './valid-object.js';

const message = new Messages();
/**
 * Current Date by moment()
 * @memberOf Validator
 * @type {*}
 */
const today = moment();
/**
 * Min Age for Trial Workout
 * @memberOf Validator
 * @type {number}
 */
const MIN_AGE = 15;

/**
 * Age Validation
 * @memberOf Validator
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
    return message.info('', '', is.VALID);
  }
  return message.info(message.defaultMessages.birthdateMinAge, yearDifference, is.INVALID);
};

/**
 * Birthdate Validation
 * @memberOf Validator
 * @param {string} birthdate - Birthdate as "DD-MM-YYYY"
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
export default function validateBirthdate(birthdate) {
  if (!birthdate) {
    return message.info(message.defaultMessages.birthdateIsRequired, '', is.INVALID);
  }

  if (moment(birthdate, 'DD-MM-YYYY').isValid()) {
    return validateAge(birthdate);
  }
  return message.info(message.defaultMessages.birthdateIsInvalid, birthdate, is.INVALID);
}
