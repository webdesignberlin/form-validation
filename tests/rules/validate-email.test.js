import { expect } from 'chai';
import validate from '../../src/rules/validate-email';

describe('Email Validation', () => {
  it('should return true for an valid email', () => {
    const result = validate('test@test.de');
    expect(result.isValid).to.be.true;
  });

  it('should return false for an invalid email pattern', () => {
    const result = validate('test.de');
    expect(result.isValid).to.be.false;
  });

  it('should return false if email value is empty', () => {
    const result = validate('');
    expect(result.isValid).to.be.false;
  });
});
