import { expect } from 'chai';
import info from '../../src/rules/messages';

describe('Validation Messages', () => {
  it('should return correct values', () => {
    const result = info('test', 'test', true);
    const mock = { message: 'test', value: 'test', isValid: true };
    expect(result).to.deep.equal(mock);
  });

  it('should return all necessary keys', () => {
    const result = info('test', 'test', true);
    const mock = { message: 'test', value: 'test', isValid: true };
    expect(result).to.has.all.keys(mock);
  });

  it('should work without message param', () => {
    const result = info(undefined, 'test', true);
    const mock = { message: '', value: 'test', isValid: true };
    expect(result).to.deep.equal(mock);
  });

  it('should work without value param', () => {
    const result = info('test', undefined, true);
    const mock = { message: 'test', value: '', isValid: true };
    expect(result).to.deep.equal(mock);
  });

  it('should work without any params', () => {
    const result = info();
    const mock = { message: '', value: '', isValid: false };
    expect(result).to.deep.equal(mock);
  });
});
