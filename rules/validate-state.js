import Messages from './messages.js';
import is from './valid-object.js';

const messages = new Messages();

/**
 * State Validation
 * @memberOf Validator
 * @param {boolean|string} value - true/false as String or Bool
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
export default function validateState(value) {
  if (!value) {
    return messages.info(messages.defaultMessages.stateIsRequired, '', is.INVALID);
  }

  if (value === 'true' || (typeof value === 'boolean' && true)) {
    return messages.info('', '', is.VALID);
  }

  return messages.info(messages.defaultMessages.stateIsNotTrue, value, is.INVALID);
}
