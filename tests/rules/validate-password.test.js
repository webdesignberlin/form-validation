import { expect } from 'chai';
import validate from '../../src/rules/validate-password';

describe('Password Validation', () => {
  it('should return true for min 8 characters', () => {
    const result = validate('password123');
    expect(result.isValid).to.be.true;
  });

  it('should return false for less than 8 characters', () => {
    const result = validate('abc');
    expect(result.isValid).to.be.false;
  });

  it('should return false if email value is empty', () => {
    const result = validate('');
    expect(result.isValid).to.be.false;
  });
});
