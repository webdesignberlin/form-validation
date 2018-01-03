import { expect } from 'chai';
import validate from '../../src/rules/validate-gender';

describe('Gender Validation', () => {
  it('should return true for MALE', function() {
    let result = validate('MALE');
    expect(result.isValid).to.be.true;
  });

  it('should return true for FEMALE', () => {
    let result = validate('FEMALE');
    expect(result.isValid).to.be.true;
  });

  it('should return false for an invalid value', () => {
    let result = validate('WHATEVER');
    expect(result.isValid).to.be.false;
  });

  it('should return false if name value is empty', () => {
    let result = validate('');
    expect(result.isValid).to.be.false;
  });
});
