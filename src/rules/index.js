import validateIsRequired from './validate-is-required.js';
import validateName from './validate-name.js';
import validateEmail from './validate-email.js';
import validateGender from './validate-gender.js';
import validateUuid from './validate-uuid.js';
import validateState from './validate-state.js';
import validateBirthdate from './validate-birthdate.js';
import validatePhone from './validate-phone.js';
import validateText from './validate-text.js';
import validateFriendsCount from './validate-friends-count.js';
import validatePassword from './validate-password';
import validateIban from './validate-iban';
import validateAddress from './validate-address';
import validateAddressAutoComplete from './validate-address-autocomplete';
import validateAddressZip from './validate-address-zip';
import validateAddressFirstLine from './validate-address-first-line';
import validateAddressStreetNumber from './validate-address-streetnumber';

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
  friendsCount: validateFriendsCount,
  text: validateText,
  password: validatePassword,
  iban: validateIban,
  address: validateAddress,
  addressAutoComplete: validateAddressAutoComplete,
  addressFirstLine: validateAddressFirstLine,
  addressStreetNumber: validateAddressStreetNumber,
  zip: validateAddressZip,
};

export default validator;
