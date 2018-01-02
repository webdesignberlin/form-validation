import { expect } from 'chai';
import validate from '../../rules/validate-name';

describe('Name Validation', () => {
  it('should return true for a valid name', () => {
    const result = validate('John');
    expect(result.isValid).to.be.true;
  });

  it('should return false for an invalid name pattern', () => {
    const result = validate('Jo hn!');
    expect(result.isValid).to.be.false;
  });

  it('should return false for a name with trailing whitespace', () => {
    const result = validate('John  ');
    expect(result.isValid).to.be.false;
  });

  it('should return false if name value is empty', () => {
    const result = validate('');
    expect(result.isValid).to.be.false;
  });
});
