import Validator from './rules/index.js';

/**
 * Options Object of Form
 * @type {object}
 * @property {string} classHasError - Class to Display on Error
 * @property {string} classIsFine - Class to Display on Success
 * @property {string} classIgnore - Class of fields which dont be validate
 * @property {string} classSubmitDisabled - Class for disabled Buttons
 * @property {boolean} initialValidate - True if Form Validation on init
 */
const options = {
  classHasError: 'has-error',
  classIsFine: 'is-fine',
  classIgnore: 'ignore',
  classSubmitDisabled: 'is-disabled',
  initialValidate: false,
};

export class Form {
  /**
   * Creates a new Form Handler
   * @constructs Form
   * @param {HTMLElement} form - Form Dom Node.
   * @param {HTMLElement|NodeList|Array} fields
   * @param {HTMLElement|NodeList|Array} submitBtns
   * @param {configOptions|Object} config
   */
  constructor(form, config) {
    this.elForm = form;
    this.config = Object.assign(options, config);
    this.fields = this.getFieldsToValidate();
    this.init();
  }

  /**
   * Init Function
   * @function
   * @memberof Form
   */
  init() {
    console.log(this.config);
    if (this.config.initialValidate) {
      this.validateAll()
    }
  }

  /**
   * Get Field to Validate
   * @function
   * @memberof Form
   */ 
  getFieldsToValidate() {
    return this.elForm.querySelectorAll(`input:not(.${this.config.classIgnore})`);
  }

  /**
   * Get Validation Message
   * @param {HTMLElement} field
   * @returns {string}
   * @memberof Form
   */
  getErrorMessage(field) {
    const validatorRule = field.dataset.validator;
    return Validator[validatorRule](field.value).message;
  }

  /**
   * Get Validation Object
   * @param {HTMLElement} field
   * @returns {object}
   * @memberof Form
   */
  getErrorObject(field) {
    const validatorRule = field.dataset.validator;
    return Validator[validatorRule](field.value);
  }

  /**
   * Single Field Validation
   * @function
   * @memberof Form
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
   * @memberof Form
   */
  handleInvalidField(field) {
    field.classList.remove(this.config.classIsFine);
    field.classList.add(this.config.classHasError);
  }

  /**
   * Hanlde Valid Fields
   * @function
   * @memberof Form
   */
  handleValidField(field) {
    field.classList.remove(this.config.classHasError);
    field.classList.add(this.config.classIsFine);
  }

  /**
   * Field Validation
   * @function
   * @memberof Form
   */
  validate(field) {
    if (this.fieldIsValid(field)) {
      this.handleValidField(field);
    } else {
      this.handleInvalidField(field);
    }

    const validationEvent = new CustomEvent('form-validation', {
      detail: Object.assign(this.getErrorObject(field), {
        fieldIsValid: this.fieldIsValid(field),
        form: this.elForm,
        currentField: field,
      })
    });

    document.dispatchEvent(validationEvent);
  }

  /**
   * Validation for all Fields
   * @function
   * @memberof Form
   */
  validateAll() {
    for (const field of this.fields) {
      this.validate(field);
    }
  }
}
