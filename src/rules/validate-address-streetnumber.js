import { info } from './messages.js';
import is from './valid-object.js';

/**
 * Address Streetnumber Validation checks if valid
 * @memberOf Validator
 * @param {string} name - Address fields streetnumber
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
export default function validateAddressStreetNumber(number) {
  let numberValue = number;

  if (!numberValue) {
    return info('streetNumberIsRequired', '', is.INVALID);
  }

  if (typeof numberValue !== 'string') {
    numberValue = numberValue.toString();
    console.log(typeof numberValue);
  }

  if (numberValue.length !== numberValue.trim().length) {
    return info('streetNumberLengthIsIncorrect', numberValue, is.INVALID);
  }

  if (!numberValue.trim().match(/^[0-9]/)) {
    return info('streetNumberWrongPattern', numberValue, is.INVALID);
  }

  return info('', '', is.VALID);
}
