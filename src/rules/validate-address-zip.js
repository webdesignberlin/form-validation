import { info } from './messages.js';
import is from './valid-object.js';

/**
 * Address Zip Validation checks if valid
 * @memberOf Validator
 * @param {string} name - Address fields Zip
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
export default function validateAddressZip(zip) {
  let zipValue = zip;

  if (!zipValue) {
    return info('zipIsRequired', '', is.INVALID);
  }

  if (typeof zipValue !== 'string') {
    zipValue = zipValue.toString();
  }

  if (zipValue.length !== zipValue.trim().length) {
    return info('zipLengthIsIncorrect', zipValue, is.INVALID);
  }

  if (!zipValue.trim().match(/^([0]{1}[1-9]{1}|[1-9]{1}[0-9]{1})[0-9]{3}$/)) {
    return info('zipWrongPattern', zipValue, is.INVALID);
  }

  return info('', '', is.VALID);
}
