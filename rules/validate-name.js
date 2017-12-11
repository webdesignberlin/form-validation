import Messages from './messages.js';
import is from './valid-object.js';

const messages = new Messages();

/**
 * Name Validation
 * @memberOf Validator
 * @param {string} name - First Name or Last Name
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
export default function validateName(name) {
  if (!name) {
    return messages.info(messages.defaultMessages.nameIsRequired, '', is.INVALID);
  }

  if (name.length !== name.trim().length) {
    return messages.info(messages.defaultMessages.nameLengthIsIncorrect, name, is.INVALID);
  }

  const matches = name.match(/^((?!^-)(?!\s\s)[a-zA-Z\u00C0-\u024F\- ](?!-{2})(?!-$)){1,255}$/);
  if (matches) {
    return messages.info('', '', is.VALID);
  }
  return messages.info(messages.defaultMessages.nameValueNotMatched, name, is.INVALID);
}
