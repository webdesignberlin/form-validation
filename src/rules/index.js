import validateIsRequired from './validate-is-required.js';
import validateName from './validate-name.js';
import validateEmail from './validate-email.js';
import validateGender from './validate-gender.js';
import validateUuid from './validate-uuid.js';
import validateState from './validate-state.js';
import validateBirthdate from './validate-birthdate.js';
import validatePhone from './validate-phone.js';
import validateText from './validate-text.js';
import validatePassword from './validate-password';
import validateIban from './validate-iban';

/**
  * Validator Object with Validation functions
  */
const validator = {
  isRequired: validateIsRequired,
  firstName: validateName,
  lastName: validateName,
  name: validateName,
  birthdate: validateBirthdate,
  phone: validatePhone,
  email: validateEmail,
  gender: validateGender,
  uuid: validateUuid,
  state: validateState,
  text: validateText,
  password: validatePassword,
  iban: validateIban,
};

export default validator;
