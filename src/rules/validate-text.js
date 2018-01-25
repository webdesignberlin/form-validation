import { info } from './messages.js';
import is from './valid-object.js';

/**
 * Text Validation
 * @memberof validator
 * @param {string} text
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
export default function validateText(text) {
  if (!text || text.length === 0) {
    return info('textIsRequired', '', is.INVALID);
  }

  if (text.length >= 1000) {
    return info('maxTextLengthExceeded', text, is.INVALID);
  }
  return info('', '', is.VALID);
}
