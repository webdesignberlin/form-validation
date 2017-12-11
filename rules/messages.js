export default class Messages {
  /**
   * Create mew Messages
   * @constructs Messages
   */
  constructor() {
    this.errorObj = {};
  }

  /**
   * Info Message with Validation Object
   * @param {string} message - defaultMessages Key as String
   * @param {string|number} value - current Input Value
   * @param {boolean} status - Is Valid true/false
   * @returns {{message: string, value: string, isValid: boolean}|*|{}}
   */
  info(message = '', value = '', status = false) {
    this.errorObj = {
      message,
      value,
      isValid: status,
    };
    return this.errorObj;
  }
}
