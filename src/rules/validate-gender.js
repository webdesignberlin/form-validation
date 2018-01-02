import { info } from './messages.js';
import is from './valid-object.js';

/**
 * Gender Validation
 * @memberOf Validator
 * @param gender
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
export default function validateGender(gender) {
  if (!gender) {
    return info('genderIsRequired', '', is.INVALID);
  }

  if (gender === 'FEMALE' || gender === 'MALE') {
    return info('', '', is.VALID);
  }
  return info('genderIsInvalid', gender, is.INVALID);
}
