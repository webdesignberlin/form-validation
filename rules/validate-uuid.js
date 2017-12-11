import Messages from './messages.js';
import is from './valid-object.js';

const messages = new Messages();

/**
 * uuid Validation
 * @memberOf Validator
 * @param {string} uuid
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
export default function validateUuid(uuid) {
  if (!uuid) {
    return messages.info(messages.defaultMessages.uuidIsRequired, '', is.INVALID);
  }

  if (typeof uuid !== 'string') {
    return messages.info(messages.defaultMessages.uuidWrongType, uuid, is.INVALID);
  }

  if (uuid.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi)) {
    return messages.info('', '', is.VALID);
  }

  return messages.info(messages.defaultMessages.uuidWrongPattern, uuid, is.INVALID);
}
