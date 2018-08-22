import { expect } from 'chai';
import validateObject from '../../src/rules/index';
import validateIsRequired from '../../src/rules/validate-is-required';
import validateName from '../../src/rules/validate-name';
import validateEmail from '../../src/rules/validate-email';
import validateGender from '../../src/rules/validate-gender';
import validateUuid from '../../src/rules/validate-uuid';
import validateState from '../../src/rules/validate-state';
import validateBirthdate from '../../src/rules/validate-birthdate';
import validatePhone from '../../src/rules/validate-phone';
import validateText from '../../src/rules/validate-text';
import validatePassword from '../../src/rules/validate-password';
import validateIban from '../../src/rules/validate-iban';
import validateAddress from '../../src/rules/validate-address';
import validateAddressAutoComplete from '../../src/rules/validate-address-autocomplete';
import validateAddressZip from '../../src/rules/validate-address-zip';
import validateFriendsCount from '../../src/rules/validate-friends-count';
import validateAddressFirstLine from '../../src/rules/validate-address-first-line';
import validateAddressStreetNumber from '../../src/rules/validate-address-streetnumber';

const mockObject = {
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
  address: validateAddress,
  addressAutoComplete: validateAddressAutoComplete,
  addressFirstLine: validateAddressFirstLine,
  addressStreetNumber: validateAddressStreetNumber,
  zip: validateAddressZip,
  friendsCount: validateFriendsCount,
};

describe('Validator Object', () => {
  it('should have all necessary keys', () => {
    expect(validateObject).to.has.all.keys(mockObject);
  });

  it('should have all necessary keys and according values', () => {
    expect(validateObject).to.deep.equal(mockObject);
  });

  it('keys should all return a function', () => {
    for (const i in validateObject) {
      if (Object.prototype.hasOwnProperty.call(validateObject, i)) {
        expect(validateObject[i]).to.be.a('function');
      }
    }
  });
});
