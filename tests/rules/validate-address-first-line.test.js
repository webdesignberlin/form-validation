import { expect } from 'chai';
import validate from '../../src/rules/validate-address-first-line';

describe('Address First Line Validation', () => {
  it('should return false if value is empty', () => {
    expect(validate('').isValid).to.be.false;
  });

  it('should return false for an invalid address line', () => {
    const examples = [
      'Gehweg',
      '3a',
      'Gehweg Gehweg',
      '!!!!!333aaaa',
      '12345',
      'AA',
      'Gehweg AA',
      '12345gehweg333',
      '   12345gehweg333   ',
      '   Gehweg 3333   ',
    ];
    examples.forEach(item => expect(validate(item).isValid).to.be.false);
  });

  it('should return true for a valid address line', () => {
    const examples = [
      'Gehweg 3',
      'Gehweg 3A',
      'Gehweg 3a',
      'Gehweg a3',
      'Gehweg A3',
      'Gehweg 3-3/1',
      'Gehweg 3333',
    ];
    examples.forEach(item => expect(validate(item).isValid).to.be.true);
  });
});
