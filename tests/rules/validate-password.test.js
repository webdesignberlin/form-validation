import { expect } from 'chai';
import validate from '../../src/rules/validate-password';

const mock = [
  '12345678',
  '-.,T34Fkp0)',
  'test123456789'];

const emptyMock = ['', '', ''];

const invalidmMock = [
  '1234567',
  'ab4!as2',
  '-.,[1K',
];

const checkPassword = (element, index, array) => validate(element).isValid === true;

describe('Password Validation', () => {
  it('should return true if provided value passes the length pattern', () => {
    expect(mock.every(checkPassword)).to.be.true;
  });

  it('should return false if value is empty', () => {
    expect(emptyMock.every(checkPassword)).to.be.false;
  });

  it('should return false for invalid Password values', () => {
    expect(invalidmMock.every(checkPassword)).to.be.false;
  });
});

