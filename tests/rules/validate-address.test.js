import { expect } from 'chai';
import validate from '../../src/rules/validate-address';

describe('Address Validation', () => {
  it('should return false if value is empty', () => {
    expect(validate('').isValid).to.be.false;
  });

  it('should return false if string has whitespace at the beginning or end', () => {
    expect(validate('   Hallo Welt      ').isValid).to.be.false;
  });

  it('should return true for a valid string', () => {
    expect(validate('John').isValid).to.be.true;
  });

  it('should parse to string for a non string value', () => {
    expect(validate(12345).isValid).to.be.true;
  });
});
