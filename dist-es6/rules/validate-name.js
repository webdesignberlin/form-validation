import { info } from './messages.js';
import is from './valid-object.js';

/**
 * Name Validation
 * @memberof validator
 * @param {string} name - First Name or Last Name
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
export default function validateName(name) {
  if (!name) {
    return info('nameIsRequired', '', is.INVALID);
  }

  if (name.length !== name.trim().length) {
    return info('nameLengthIsIncorrect', name, is.INVALID);
  }

  const matches = name.match(/^((?!^-)(?!\s\s)[a-zA-Z\u00C0-\u024F\- ](?!-{2})(?!-$)){1,255}$/);
  if (matches) {
    return info('', '', is.VALID);
  }

  return info('nameValueNotMatched', name, is.INVALID);
}