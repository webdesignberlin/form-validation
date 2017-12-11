/**
 * Is Statement for Validation
 * @memberOf Validator
 * @type {{VALID: boolean, INVALID: boolean}}
 * @property {boolean} VALID - Const true Statement
 * @property {boolean} INVALID - Const false Statement
 */
const is = {
  VALID: true,
  INVALID: false,
};

class Log {
  /**
   * Creates a mew Log
   * @constructs Log
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

const logger = new Log();

function validateName(name) {
  if (!name) {
    return logger.info('logger.defaultMessages.nameIsRequired', '', is.INVALID);
  }

  if (name.length !== name.trim().length) {
    return logger.info('logger.defaultMessages.nameLengthIsIncorrect', name, is.INVALID);
  }

  const matches = name.match(/^((?!^-)(?!\s\s)[a-zA-Z\u00C0-\u024F\- ](?!-{2})(?!-$)){1,255}$/);
  if (matches) {
    return logger.info('', '', is.VALID);
  }
  return logger.info('logger.defaultMessages.nameValueNotMatched', name, is.INVALID);
}

const Validator = {
  firstName: validateName,
  lastName: validateName,
};

/*************************************** */

export class Form {
  /**
   * Creates a new Form Handler
   * @constructs Form
   * @param {HTMLElement} form - Form Dom Node.
   * @param {HTMLElement|NodeList|Array} fields
   * @param {HTMLElement|NodeList|Array} submitBtns
   * @param {Object} config
   */
  constructor(form, config) {
    this.elForm = form;
    this.config = config || {
      classHasError: 'has-error',
      classIsFine: 'is-fine',
      ignoreField: 'ignore',
      classSubmitDisabled: 'is-disabled',
    };
    this.fields = this.getFieldsToValidate();
    // this.init();
  }

  /**
   * Init Function
   * @function
   * @memberOf Form
   */
  init() {
    console.log('init', this.fields);
  }

  /**
   * Get Field to Validate
   * @function
   * @memberOf Form
   */
  getFieldsToValidate() {
    return this.elForm.querySelectorAll('input:not(.ignore)');
  }

  /**
   * Single Field Validation
   * @function
   * @memberOf Form
   * @param {HTMLElement} field - Dom Element to validate
   * @returns {boolean}
   */
  fieldIsValid(field) {
    const validatorRule = field.dataset.validator;
    return Validator[validatorRule](field.value).isValid;
  }

  /**
   * Hanlde Invalid Fields
   * @function
   * @memberOf Form
   */
  handleInvalidField(field) {
    field.classList.remove(this.config.classIsFine);
    field.classList.add(this.config.classHasError);
  }

  /**
   * Hanlde Valid Fields
   * @function
   * @memberOf Form
   */
  handleValidField(field) {
    field.classList.remove(this.config.classHasError);
    field.classList.add(this.config.classIsFine);
  }

  /**
   * Field Validation
   * @function
   * @memberOf Form
   */
  validate(field) {
    if (this.fieldIsValid(field)) {
      this.handleValidField(field);
    } else {
      this.handleInvalidField(field);
    }
  }

  /**
   * Validation for all Fields
   * @function
   * @memberOf Form
   */
  validateAll() {
    for (const field of this.fields) {
      this.validate(field);
    }
  }
}
