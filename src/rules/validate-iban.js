import { info } from './messages.js';
import is from './valid-object.js';

/*
 * Returns 1 if the IBAN is valid
 * Returns FALSE if the IBAN's length is not as should be
 * (for CY the IBAN Should be 28 chars long starting with CY )
 * Returns any other number (checksum) when the IBAN is invalid
 * (check digits do not match)
 */
export default function isValidIBANNumber(input) {
  const codeLength = 22;

  const iban = String(input).toUpperCase().replace(/\s/g, ''); // keep only alphanumeric characters
  const code = iban.match(/^(DE)(\d{2})([\d]+)$/); // match and capture (1) the country code, (2) the check digits, and (3) the rest

  // check syntax and length
  if (code === null || iban.length !== codeLength) {
    return info('ibanWrongPattern', '', is.INVALID);
  }
  // rearrange country code and check digits, and convert chars to ints
  const digits = (code[3] + code[1] + code[2]).replace(/[A-Z]/g, letter => letter.charCodeAt(0) - 55);
  // final check
  return mod97(digits);
}

function mod97(string) {
  let checksum = string.slice(0, 2);
  for (let offset = 2; offset < string.length; offset += 7) {
    const fragment = String(checksum) + string.substring(offset, offset + 7);
    checksum = parseInt(fragment, 10) % 97;
  }
  if (checksum === 1) {
    return info('', '', is.VALID);
  }
  return info('ibanWrongChecksum', '', is.INVALID);
}
