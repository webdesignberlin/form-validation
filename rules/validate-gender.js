import Messages from './messages.js';
import is from './valid-object.js';

const message = new Messages();

/**
 * Gender Validation
 * @memberOf Validator
 * @param gender
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
export default function validateGender(gender) {
  if (!gender) {
    return message.info(message.defaultMessages.genderIsRequired, '', is.INVALID);
  }

  if (gender === 'FEMALE' || gender === 'MALE') {
    return message.info('', '', is.VALID);
  }
  return message.info(message.defaultMessages.genderIsInvalid, gender, is.INVALID);
}
