import { expect } from 'chai';
import validate from '../../src/rules/validate-address-streetnumber';

describe('Address street number Validation', () => {
  it('should return false if value is empty', () => {
    expect(validate('').isValid).to.be.false;
  });

  it('should return false if string has whitespace at the beginning or end', () => {
    expect(validate('   3 3 a      ').isValid).to.be.false;
  });

  it('should return true for a valid string', () => {
    const testValues = ['11', '11a', '11A', '11-1', '11-1a', '11/1', '3 a'];
    testValues.forEach(number => expect(validate(number).isValid).to.be.true);
  });

  it('should return false for a non valid string', () => {
    const testValues = ['aa1', 'a', 'A', 'a-1', 'a/1'];
    testValues.forEach(number => expect(validate(number).isValid).to.be.false);
  });

  it('should parse to string for a non string value', () => {
    expect(validate(12).isValid).to.be.true;
  });
});
