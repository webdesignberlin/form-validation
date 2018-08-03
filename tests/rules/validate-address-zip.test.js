import { expect } from 'chai';
import validate from '../../src/rules/validate-address-zip';
import {info} from "../../src/rules/messages";
import is from "../../src/rules/valid-object";

describe('Address Zip Validation', () => {
  it('should return false if value is empty', () => {
    expect(validate('').isValid).to.be.false;
  });

  it('should return false if string has whitespace at the beginning or end', () => {
    expect(validate('   0000      ').isValid).to.be.false;
  });

  it('should return true for a valid string', () => {
    expect(validate('10247').isValid).to.be.true;
  });

  it('should parse to string for a non string value', () => {
    expect(validate(10247).isValid).to.be.true;
  });
});




/*
export default function validateAddressZip(zip) {
  const zipValue = zip;

  if (!zipValue) {
    return info('zipIsRequired', '', is.INVALID);
  }

  if (typeof zipValue !== 'string') {
    return info('zipWrongPattern', 'zipValue', is.INVALID);
  }

  if (zipValue.length !== zipValue.trim().length) {
    return info('zipLengthIsIncorrect', zipValue, is.INVALID);
  }

  if (!zipValue.trim().match(/^([0]{1}[1-9]{1}|[1-9]{1}[0-9]{1})[0-9]{3}$/)) {
    return info('zipWrongPattern', zipValue, is.INVALID);
  }

  return info('', '', is.VALID);
}
*/
