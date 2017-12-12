import { info } from './messages.js';
import is from './valid-object.js';


/**
 * uuid Validation
 * @memberOf Validator
 * @param {string} uuid
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
export default function validateUuid(uuid) {
  if (!uuid) {
    return info('uuidIsRequired', '', is.INVALID);
  }

  if (typeof uuid !== 'string') {
    return info('uuidWrongType', uuid, is.INVALID);
  }

  if (uuid.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi)) {
    return info('', '', is.VALID);
  }

  return info('uuidWrongPattern', uuid, is.INVALID);
}
