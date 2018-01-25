import validateIsRequired from './validate-is-required.js';
import validateName from './validate-name.js';
import validateEmail from './validate-email.js';
import validateGender from './validate-gender.js';
import validateUuid from './validate-uuid.js';
import validateState from './validate-state.js';
import validateBirthdate from './validate-birthdate.js';
import validatePhone from './validate-phone.js';
import validateText from './validate-text.js';

/**
 * Validator Object with Validation functions
 * @namespace
 * @type {{firstName: validateName, lastName: validateName,
 * birthdate: validateBirthdate, phone: validatePhone,
 * email: validateEmail, gender: validateGender,
 * uuid: validateUuid, state: validateState}}
 */
const validator = {
  isRequired: validateIsRequired,
  firstName: validateName,
  lastName: validateName,
  birthdate: validateBirthdate,
  phone: validatePhone,
  email: validateEmail,
  gender: validateGender,
  uuid: validateUuid,
  state: validateState,
  text: validateText,
};

export default validator;
