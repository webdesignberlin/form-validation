import { expect } from 'chai';
import validate from '../../src/rules/validate-gender';

describe('Gender Validation', () => {
  it('should return true for MALE', () => {
    const result = validate('MALE');
    expect(result.isValid).to.be.true;
  });

  it('should return true for FEMALE', () => {
    const result = validate('FEMALE');
    expect(result.isValid).to.be.true;
  });

  it('should return false for an invalid value', () => {
    const result = validate('WHATEVER');
    expect(result.isValid).to.be.false;
  });

  it('should return false if name value is empty', () => {
    const result = validate('');
    expect(result.isValid).to.be.false;
  });
});
