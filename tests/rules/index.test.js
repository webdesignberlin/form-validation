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

const mockObject = {
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
