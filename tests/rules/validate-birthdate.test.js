import { expect } from 'chai';
import moment from 'moment';

import validate from '../../src/rules/validate-birthdate';

const today = moment();

describe('Birthdate Validation', () => {
  it('should return true for valid date format', () => {
    const result = '2000-01-01';
    expect(moment(result).isValid()).to.be.true &&
    expect(validate(result).isValid).to.be.true;
  });

  it('should return false for valid date format but underaged', () => {
    const result = today;
    expect(moment(result).isValid()).to.be.true &&
    expect(validate(result).isValid).to.be.false;
  });

  it('should return false for empty value', () => {
    const result = validate('');
    expect(result.isValid).to.be.false;
  });

  it('should return false for underaged person', () => {
    const result = validate('2200-12-12');
    expect(result.isValid).to.be.false;
  });

  it('should return false for invalid date format', () => {
    const result = validate('test');
    expect(result.isValid).to.be.false;
  });

});
