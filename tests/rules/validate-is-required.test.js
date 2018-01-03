import { expect } from 'chai';
import validate from '../../src/rules/validate-is-required';

describe('Is Required Validation', () => {
  it('should return false if value is empty', () => {
    const result = validate('');
    expect(result.isValid).to.be.false;
  });

  it('should return false if value contains only whitespaces', () => {
    const result = validate('  ');
    expect(result.isValid).to.be.false;
  });

  it('should return false if value contains a bool with false', () => {
    const result = validate(false);
    expect(result.isValid).to.be.false;
  });

  it('should return true if value contains a bool with true', () => {
    const result = validate(true);
    expect(result.isValid).to.be.true;
  });

  it('should return false if value is empty', () => {
    const result = validate('');
    expect(result.isValid).to.be.false;
  });

  it('should return true for a valid value', () => {
    const result = validate('Lorem');
    expect(result.isValid).to.be.true;
  });
});
