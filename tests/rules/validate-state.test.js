import { expect } from 'chai';
import validate from '../../src/rules/validate-state';

describe('State Validation', () => {
  it('should return false if value is empty', () => {
    let result = validate('');
    expect(result.isValid).to.be.false;
  });

  it('should return true for true value', function() {
    let result = validate('true');
    expect(result.isValid).to.be.true;
  });

  it('should return false for false value', () => {
    let result = validate('false');
    expect(result.isValid).to.be.false;
  });
});
