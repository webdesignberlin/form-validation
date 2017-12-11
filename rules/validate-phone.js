import Messages from './messages.js';
import is from './valid-object.js';

const messages = new Messages();

/**
 * Phone Validation
 * @memberOf Validator
 * @param {string} phone - phone number
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
export default function validatePhone(phone) {
  if (!phone) {
    return messages.info('phoneIsRequired', '', is.INVALID);
  }

  if (typeof phone !== 'string') {
    return messages.info('phoneWrongPattern', phone, is.INVALID);
  }

  if (!phone.trim().match(/^(\+|)[0-9 ]+$/)) {
    return messages.info('phoneWrongPattern', phone, is.INVALID);
  }

  return messages.info('', '', is.VALID);
}
