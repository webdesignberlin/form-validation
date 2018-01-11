import { info } from './rules/messages.js';
import validator from './rules/index.js';
import prepareCheckbox from './helpers/prepare-checkbox.js';

function isInvalidRadio(field) {
  return (field.type === 'radio' && !field.checked);
}

function isValidRadio(field) {
  if (field.type === 'radio') {
    const elsSameName = document.querySelectorAll(`[name="${field.name}"]`);
    const elsSameNameChecked = document.querySelectorAll(`[name="${field.name}"]:checked`);
    
    return elsSameNameChecked.length > 0;
  }
}

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
    console.log(field, validator[validatorRule] && !isInvalidRadio(field));
    if (validator[validatorRule] && !isInvalidRadio(field)) {
      return validator[validatorRule](field.value);
    }

    if (this.isRequiredAndEmpty(field) && !isInvalidRadio(field)) {
      return validator.isRequired(field.value);
    }

    if (isInvalidRadio(field)) {
      return info('radioIsRequired');  
    }

    return info('error');
  }

  /**
   * Single Field Validation
   * @function
   * @memberof Form
   * @param {HTMLElement} field - Dom Element to validate
   * @returns {boolean}
   */
  fieldIsValid(field) {
    prepareCheckbox(field);
    if (isInvalidRadio(field)) {
      // return isValidRadio(field);  
      if (field.type === 'radio') {
        const validatorRule = field.dataset.validator;
        const elsSameName = document.querySelectorAll(`[name="${field.name}"]`);
        const elsSameNameChecked = document.querySelectorAll(`[name="${field.name}"]:checked`);

        if (elsSameNameChecked.length > 0) {
          console.log('valid', field);
          if (validator[validatorRule]) {
            return validator[validatorRule](field.value).isValid;
          }
          return true;
        } else {
          return false;
        }
      }
      return false;
    }
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
  validate(field, silent = false) {
    if (silent) {
      const validationEvent = new CustomEvent('form-validation-silent', {
        detail: Object.assign(this.getErrorObject(field), {
          fieldIsValid: this.fieldIsValid(field),
          form: this.elForm,
          formIsValid: this.formIsValid(),
          currentField: field,
        }),
      });

      document.dispatchEvent(validationEvent);
      return;
    }

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
    console.log(this.getErrorObject(field));
    const validationEvent = new CustomEvent('form-validation', {
      detail: Object.assign(this.getErrorObject(field), {
        fieldIsValid: this.fieldIsValid(field),
        form: this.elForm,
        formIsValid: this.formIsValid(),
        currentField: field,
      }),
    });

    document.dispatchEvent(validationEvent);
  }

  /**
   * Get current Form Status
   * @returns {{validFields: Array, inValidFields: Array}}
   */
  getFormStatus() {
    const formFields = {
      validFields: [],
      inValidFields: [],
    };

    for (const field of this.fields) {
      if (this.fieldIsValid(field)) {
        formFields.validFields.push(field);
      } else {
        formFields.inValidFields.push(field);
      }
    }

    return formFields;
  }

  /**
   * Check if Form is Valid
   * @returns {boolean}
   */
  formIsValid() {
    return this.getFormStatus().inValidFields.length === 0;
  }

  /**
   * Validation for all Fields
   * @function
   * @memberof Form
   */
  validateAll(silent = false) {
    for (const field of this.fields) {
      this.validate(field, silent);
    }
  }
}
