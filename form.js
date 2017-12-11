import Validator from './rules/index.js';

const options = {
  classHasError: 'has-error',
  classIsFine: 'is-fine',
  ignoreField: 'ignore',
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
   * @param {Object} config
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
   * @memberOf Form
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
