import { expect } from 'chai';
import validate from '../../src/rules/validate-iban';

describe('IBAN Validation', () => {
  it('should return true for an valid IBAN', () => {
    const result = validate('DE27100777770209299700');
    expect(result.isValid).to.be.true;
  });

  it('should return false for an invalid IBAN pattern', () => {
    const result = validate('DE00000000000000000000');
    expect(result.isValid).to.be.false;
  });

  it('should return false if IBAN value is empty', () => {
    const result = validate('');
    expect(result.isValid).to.be.false;
  });
});
