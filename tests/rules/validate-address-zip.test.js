import { expect } from 'chai';
import validate from '../../src/rules/validate-address-zip';

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

  it('should return false for a non valid string', () => {
    expect(validate('1024789112345').isValid).to.be.false;
  });

  it('should parse to string for a non string value', () => {
    expect(validate(10247).isValid).to.be.true;
  });
});
