import { info } from './messages.js';
import is from './valid-object.js';

/**
 * State Validation
 * @memberOf Validator
 * @param {boolean|string} value - true/false as String or Bool
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
export default function validateState(value) {
  if (!value) {
    return info('stateIsRequired', '', is.INVALID);
  }

  if (value === 'true' || (typeof value === 'boolean' && true)) {
    return info('', '', is.VALID);
  }

  return info('stateIsNotTrue', value, is.INVALID);
}
