import { info } from './messages.js';
import is from './valid-object.js';

/**
 * Address First Line Validation checks for correct street and number
 * @memberOf Validator
 * @param {string} name - Currently Address Fields like Number, Street
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
export default function validateAddressFirstLine(name) {
  let addressValue = name;

  if (!addressValue) {
    return info('addressIsRequired', '', is.INVALID);
  }

  if (addressValue.length !== addressValue.trim().length) {
    return info('addressLengthIsIncorrect', addressValue, is.INVALID);
  }

  const addressReg = addressValue.match(/^[a-zA-Z0-9\u00C0-\u024F-´'._ ]+\s*?,?\s+[a-zA-Z]?\d+\s?[a-zA-Z]?(\s?-\s?\d+)?(\s?\/\s?\d+)?\s?[a-zA-Z]?$/i);
  if (addressReg !== null) {
    return info('', '', is.VALID);
  }

  return info('', '', is.INVALID);
}
