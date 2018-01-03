import { info } from './messages.js';
import is from './valid-object.js';

/**
 * Is Required Validation
 * @memberof validator
 * @param {string|boolean} input - Input to validate
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
export default function validateIsRequired(input) {
  if (typeof input === 'boolean' && input === true) {
    return info('', '', is.VALID);
  }

  if (typeof input === 'boolean' && input === false) {
    return info('isRequired', input, is.INVALID);
  }

  if (!input) {
    return info('isRequired', '', is.INVALID);
  }

  if (input.length !== input.trim().length) {
    return info('isRequired', input, is.INVALID);
  }

  return info('isRequired', input, is.VALID);
}
