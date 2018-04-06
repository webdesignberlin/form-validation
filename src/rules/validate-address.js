import { info } from './messages.js';
import is from './valid-object.js';

/**
 * Address Validation checks if empty
 * @memberOf Validator
 * @param {string} name - Currently Address Fields like Number, Street, Zip, City
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
export default function validateAddress(name) {
  let addressValue = name;

  if (!addressValue) {
    return info('addressIsRequired', '', is.INVALID);
  }

  if (typeof addressValue !== 'string') {
    addressValue = addressValue.toString();
  }

  if (addressValue.length !== addressValue.trim().length) {
    return info('addressLengthIsIncorrect', addressValue, is.INVALID);
  }

  return info('', '', is.VALID);
}
