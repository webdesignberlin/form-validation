import { expect } from 'chai';
import validate from '../../src/rules/validate-phone';

describe('Phone Validation', () => {
  it('should return true for a valid pattern', () => {
    const result = validate('110');
    expect(result.isValid).to.be.true;
  });

  it('should return false for an invalid pattern', () => {
    const result = validate('1Fll3002');
    expect(result.isValid).to.be.false;
  });

  it('should return false if value is empty', () => {
    const result = validate('');
    expect(result.isValid).to.be.false;
  });

  it('should return false if value is not a string', () => {
    const result = validate(1234);
    expect(result.isValid).to.be.false;
  });
});
