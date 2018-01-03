import { info } from './messages.js';
import is from './valid-object.js';

/**
 * Phone Validation
 * @memberof validator
 * @param {string} phone - phone number
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
export default function validatePhone(phone) {
  if (!phone) {
    return info('phoneIsRequired', '', is.INVALID);
  }

  if (typeof phone !== 'string') {
    return info('phoneWrongPattern', phone, is.INVALID);
  }

  if (!phone.trim().match(/^(\+|)[0-9 ]+$/)) {
    return info('phoneWrongPattern', phone, is.INVALID);
  }

  return info('', '', is.VALID);
}
