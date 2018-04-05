import { info } from './messages.js';
import is from './valid-object.js';

/**
 * Password Validation
 * @memberOf Validator
 * @param {string} password - User Password
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
export default function validatePassword(password) {
  if (password.length >= 8) {
    return info('', '', is.VALID);
  }
  return info('passwordLength', password, is.INVALID);
}
