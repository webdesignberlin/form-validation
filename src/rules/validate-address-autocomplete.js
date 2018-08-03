import { info } from './messages.js';
import is from './valid-object.js';

/**
 * Name Validation
 * @memberOf Validator
 * @param {string} value - Address
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
export default function validateMapsAuto(value) {
  const streetNumberFormField = document.getElementById('street_number');
  const fallbackFormFields = document.querySelectorAll('#address input');

  /**
   * Check if some of the Fallback Inputs are Empty
   * @returns {boolean}
   */
  function fallbackFormFieldsValid() {
    for (const fallbackFormField of fallbackFormFields) {
      if (fallbackFormField.value <= 0) {
        return false;
      }
    }
    return true;
  }

  /**
   * Check if Empty
   */
  if (!value) {
    return info('addressIsRequired', '', is.INVALID);
  }

  /**
   * Check if Fallback Inputs are Filled
   */
  if (fallbackFormFieldsValid()) {
    return info('', '', is.VALID);
  }

  /**
   * Check if Street Number is Empty
   */
  if (streetNumberFormField.value.length <= 0) {
    return info('addressMissingStreetNumber', '', is.INVALID);
  }

  /**
   * Fallback
   */
  return info('addressIsRequired', '', is.INVALID);
}
