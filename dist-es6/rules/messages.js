/**
 * Generate Message with Validation Details
 * @export
 * @param {string} [message=''] - Error Message
 * @param {string} [value=''] - current Input Value
 * @param {boolean} [status=false] - Is Valid true/false
 * @returns {{message: string, value: string, isValid: boolean}}
 */
export function info(message = '', value = '', status = false) {
  return {
    message,
    value,
    isValid: status
  };
}

export default info;