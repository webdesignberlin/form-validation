import { expect } from 'chai';
import { JSDOM } from 'jsdom';

import validate from '../../src/rules/validate-address-autocomplete';

describe('Address autocomplete Validation', () => {
  it('should return false if value is empty', () => {
    const dom = new JSDOM(`<!DOCTYPE html><div id="address"><input id="street_number" value=""><input value="">
    <input value=""></div>`);

    global.window = dom.window;
    global.document = dom.window.document;

    expect(validate('').isValid).to.be.false;
  });

  it('should return false if some fallback inputs are empty', () => {
    const dom = new JSDOM(`<!DOCTYPE html><div id="address"><input id="street_number" value="test"><input value="">
    <input value=""></div>`);

    global.window = dom.window;
    global.document = dom.window.document;

    expect(validate('Gehweg').isValid).to.be.false;
  });

  it('should return false if streetnumber is empty', () => {
    const dom = new JSDOM(`<!DOCTYPE html><div id="address"><input id="street_number" value=""><input value="whatever">
    <input value="whatever"></div>`);

    global.window = dom.window;
    global.document = dom.window.document;

    expect(validate('Gehweg').isValid).to.be.false;
  });

  it('should return true if all fallback inputs are filled', () => {
    const dom = new JSDOM(`<!DOCTYPE html><div id="address"><input id="street_number" value=12"><input value="whatever">
    <input value="whatever"></div>`);

    global.window = dom.window;
    global.document = dom.window.document;

    expect(validate('Gehweg').isValid).to.be.true;
  });
});
