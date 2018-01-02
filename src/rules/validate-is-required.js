import { info } from './messages.js';
import is from './valid-object.js';

/**
 * Is Required Validation
 * @memberof Validator
 * @param {string|boolean} input - Input to validate
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
export default function validateIsRequired(input) {
  if (!input) {
    return info('isRequired', '', is.INVALID);
  }

  if (input.length !== input.trim().length) {
    return info('isRequired', input, is.INVALID);
  }

  if (typeof input === 'boolean') {
    if (input) {
      return info('', '', is.VALID);
    }
    return info('isRequired', input, is.INVALID);
  }

  return info('isRequired', '', is.INVALID);
}
