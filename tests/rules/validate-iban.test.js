import { expect } from 'chai';
import validate from '../../src/rules/validate-iban';

const mock = [
  'DE27100777770209299700',
  'DE11520513735120710131',
  'DE12500105170648489890'];

const emptyMock = ['', '', ''];

const invalidChecksumMock = [
  'DE27100771234556299700',
  'DE12345678912345678912',
  'DE00000000000000000000',
];

const invalidmMock = [
  'ferwfer556299700',
  'DE12DE12DE12DE12DE12',
  'DE0000000000',
];

const checkIban = (element, index, array) => validate(element).isValid === true;

describe('IBAN Validation', () => {
  it('should return true if provided value passes the regex pattern', () => {
    expect(mock.every(checkIban)).to.be.true;
  });

  it('should return false if value is empty', () => {
    expect(emptyMock.every(checkIban)).to.be.false;
  });

  it('should return false if provided IBAN checksum is not valid', () => {
    let result = validate(42);
    expect(invalidChecksumMock.every(checkIban)).to.be.false;
  });

  it('should return false for invalid IBAN values', () => {
    expect(invalidmMock.every(checkIban)).to.be.false;
  });
});
