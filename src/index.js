import validator from './rules/index.js';

/**
 * Options Object of Form
 * @type {object}
 * @property {string} classHasError - Class to Display on Error
 * @property {string} classIsFine - Class to Display on Success
 * @property {string} classIgnore - Class of fields which dont be validate
 * @property {boolean} initialValidate - True if Form Validation on init
 */
const options = {
  classHasError: 'has-error',
  classIsFine: 'is-fine',
  classIgnore: 'ignore',
  initialValidate: false,
};

export default class Form {
  /**
   * Creates a new Form Handler
   * @constructs Form
   * @param {HTMLElement} form - Form Dom Node
   * @param {options|Object} config
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
    // Set fallback for required fields without validation rule
    for (const element of [...this.getFieldsToValidate()]) {
      if (!element.dataset.validator) {
        element.dataset.validator = 'isRequired';
      }
    }

    if (this.config.initialValidate) {
      this.validateAll();
    }
  }

  /**
   * Handle Required Fields without Content and Validation Rule
   * @param {HTMLElement} field
   * @returns {boolean}
   * @memberof Form
   */
  isRequiredAndEmpty(field) {
    return (field.required && field.value.length <= 0);
  }

  /**
   * Get Field to Validate
   * @function
   * @memberof Form
   */
  getFieldsToValidate() {
    return this.elForm.querySelectorAll(`input:not(.${this.config.classIgnore}), select:not(.${this.config.classIgnore}), textarea:not(.${this.config.classIgnore})`);
  }

  /**
   * Get Validation Object
   * @param {HTMLElement} field
   * @returns {object}
   * @memberof Form
   */
  getErrorObject(field) {
    const validatorRule = field.dataset.validator;
    if (validator[validatorRule]) {
      return validator[validatorRule](field.value);
    }

    if (this.isRequiredAndEmpty(field)) {
      return validator.isRequired(field.value);
    }

    return {};
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
    if (validator[validatorRule]) {
      return validator[validatorRule](field.value).isValid;
    }

    return this.isRequiredAndEmpty(field);
  }

  /**
   * Handle Invalid Fields
   * @function
   * @memberof Form
   */
  handleInvalidField(field) {
    field.classList.remove(this.config.classIsFine);
    field.classList.add(this.config.classHasError);
  }

  /**
   * Handle Valid Fields
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

    /**
     * Form Validation Event
     * Event with Form Field Information (fieldIsValid, form, currentField)
     * @type {CustomEvent}
     */
    const validationEvent = new CustomEvent('form-validation', {
      detail: Object.assign(this.getErrorObject(field), {
        fieldIsValid: this.fieldIsValid(field),
        form: this.elForm,
        currentField: field,
      }),
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
