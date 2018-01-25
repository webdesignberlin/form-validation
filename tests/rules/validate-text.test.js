import { expect } from 'chai';
import validate from '../../src/rules/validate-text';

const longText = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed 
diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et 
justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu fe`;

describe('Text Validation', () => {
  it('should return false if textarea is empty', () => {
    const result = validate('');
    expect(result.isValid).to.be.false;
  });

  it('should return false if textarea is null', () => {
    const result = validate();
    expect(result.isValid).to.be.false;
  });

  it('should return true if textarea is < 1000', () => {
    const result = validate('Hall i bims 1 trainer');
    expect(result.isValid).to.be.true;
  });

  it('should return false if textarea is > 1000', () => {
    const result = validate(longText);
    expect(result.isValid).to.be.false;
  });
});
