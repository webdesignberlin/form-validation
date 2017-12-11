export default class Messages {
  /**
   * Create mew Messages
   * @constructs Messages
   */
  constructor() {
    this.errorObj = {};
    this.defaultMessages = {
      nameIsRequired: 'nameIsRequired',
      nameLengthIsIncorrect: 'nameLengthIsIncorrect',
      nameValueNotMatched: 'nameValueNotMatched',

      birthdateMinAge: 'birthdateMinAge',
      birthdateIsRequired: 'birthdateIsRequired',
      birthdateIsInvalid: 'birthdateIsInvalid',

      genderIsRequired: 'genderIsRequired',
      genderIsInvalid: 'genderIsInvalid',

      uuidIsRequired: 'uuidIsRequired',
      uuidWrongType: 'uuidWrongType',
      uuidWrongPattern: 'uuidWrongPattern',

      stateIsRequired: 'stateIsRequired',
      stateIsNotTrue: 'stateIsNotTrue',

      emailIsRequired: 'emailIsRequired',
      emailWrongPattern: 'emailWrongPattern',

      phoneIsRequired: 'phoneIsRequired',
      phoneWrongPattern: 'phoneWrongPattern',
    };
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
