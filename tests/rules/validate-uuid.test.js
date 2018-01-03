import { expect } from 'chai';
import validate from '../../src/rules/validate-uuid';

describe('UUID Validation', () => {
  it('should return false if value is empty', () => {
    let result = validate('');
    expect(result.isValid).to.be.false;
  });

  it('should return false if provided value is not a string', function() {
    let result = validate(42);
    expect(result.isValid).to.be.false;
  });

  it('should return true if provided value passes the regex pattern', function() {
    let result = validate('550e8400-e29b-11d4-a716-446655440000');
    expect(result.isValid).to.be.true;
  });

  it('should return false if provided value does not passes the regex pattern', function() {
    let result = validate('zzzzzZZZZZzzzzz');
    expect(result.isValid).to.be.false;
  });
});
