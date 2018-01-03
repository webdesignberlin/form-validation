import { info } from './messages.js';
import is from './valid-object.js';

/**
 * Email Validation
 * @memberof validator
 * @param {string} mail - Email String
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
export default function validateEmail(mail) {
  if (!mail) {
    return info('emailIsRequired', '', is.INVALID);
  }

  const emailreg = mail.match(/^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i);
  if (emailreg !== null) {
    return info('', '', is.VALID);
  }

  return info('emailWrongPattern', mail, is.INVALID);
}
