import { info } from './messages.js';
import is from './valid-object.js';

/**
 * Gender Validation
 * @memberof validator
 * @param friendsCount
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
export default function validateFriendsCount(friendsCount) {
  if (!friendsCount) {
    return info('friendsCountIsRequired', '', is.INVALID);
  }

  if (friendsCount === '0' || friendsCount === '1' || friendsCount === '2') {
    return info('', '', is.VALID);
  }
  return info('friendsCountIsInvalid', friendsCount, is.INVALID);
}
