(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.formvalidation = factory());
}(this, (function () { 'use strict';

/**
 * Generate Message with Validation Details
 * @export
 * @param {string} [message=''] - Error Message
 * @param {string} [value=''] - current Input Value
 * @param {boolean} [status=false] - Is Valid true/false
 * @returns {{message: string, value: string, isValid: boolean}}
 */
function info() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  return {
    message: message,
    value: value,
    isValid: status
  };
}

/**
 * Is Statement for Validation
 * @memberof validator
 * @type {{VALID: boolean, INVALID: boolean}}
 * @property {boolean} VALID - Const true Statement
 * @property {boolean} INVALID - Const false Statement
 */
var is = {
  VALID: true,
  INVALID: false
};

/**
 * Is Required Validation
 * @memberof validator
 * @param {string|boolean} input - Input to validate
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
function validateIsRequired(input) {
  if (typeof input === 'boolean' && input === true) {
    return info('', '', is.VALID);
  }

  if (typeof input === 'boolean' && input === false) {
    return info('isRequired', input, is.INVALID);
  }

  if (!input) {
    return info('isRequired', '', is.INVALID);
  }

  if (input.length !== input.trim().length) {
    return info('isRequired', input, is.INVALID);
  }

  return info('isRequired', input, is.VALID);
}

/**
 * Name Validation
 * @memberof validator
 * @param {string} name - First Name or Last Name
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
function validateName(name) {
  if (!name) {
    return info('nameIsRequired', '', is.INVALID);
  }

  if (name.length !== name.trim().length) {
    return info('nameLengthIsIncorrect', name, is.INVALID);
  }

  var matches = name.match(/^((?!^-)(?!\s\s)[a-zA-Z\u00C0-\u024F\- ](?!-{2})(?!-$)){1,255}$/);
  if (matches) {
    return info('', '', is.VALID);
  }

  return info('nameValueNotMatched', name, is.INVALID);
}

/**
 * Email Validation
 * @memberof validator
 * @param {string} mail - Email String
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
function validateEmail(mail) {
  if (!mail) {
    return info('emailIsRequired', '', is.INVALID);
  }

  var emailreg = mail.match(/^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i);
  if (emailreg !== null) {
    return info('', '', is.VALID);
  }

  return info('emailWrongPattern', mail, is.INVALID);
}

/**
 * Gender Validation
 * @memberof validator
 * @param gender
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
function validateGender(gender) {
  if (!gender) {
    return info('genderIsRequired', '', is.INVALID);
  }

  if (gender === 'FEMALE' || gender === 'MALE') {
    return info('', '', is.VALID);
  }
  return info('genderIsInvalid', gender, is.INVALID);
}

/**
 * uuid Validation
 * @memberof validator
 * @param {string} uuid
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
function validateUuid(uuid) {
  if (!uuid) {
    return info('uuidIsRequired', '', is.INVALID);
  }

  if (typeof uuid !== 'string') {
    return info('uuidWrongType', uuid, is.INVALID);
  }

  if (uuid.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi)) {
    return info('', '', is.VALID);
  }

  return info('uuidWrongPattern', uuid, is.INVALID);
}

/**
 * State Validation
 * @memberof validator
 * @param {boolean|string} value - true/false as String or Bool
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
function validateState(value) {
  if (!value) {
    return info('stateIsRequired', '', is.INVALID);
  }

  if (value === 'true' || typeof value === 'boolean' && true) {
    return info('', '', is.VALID);
  }

  return info('stateIsNotTrue', value, is.INVALID);
}

/**
 * Phone Validation
 * @memberof validator
 * @param {string} phone - phone number
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
function validatePhone(phone) {
  if (!phone) {
    return info('phoneIsRequired', '', is.INVALID);
  }

  if (typeof phone !== 'string') {
    return info('phoneWrongPattern', phone, is.INVALID);
  }

  if (!phone.trim().match(/^(\+|)[0-9 ]+$/)) {
    return info('phoneWrongPattern', phone, is.INVALID);
  }

  return info('', '', is.VALID);
}

// import validateBirthdate from './validate-birthdate';
/**
 * Validator Object with Validation functions
 * @namespace
 * @type {{firstName: validateName, lastName: validateName,
 * birthdate: validateBirthdate, phone: validatePhone,
 * email: validateEmail, gender: validateGender,
 * uuid: validateUuid, state: validateState}}
 */
var validator = {
  isRequired: validateIsRequired,
  firstName: validateName,
  lastName: validateName,
  // birthdate: validateBirthdate,
  phone: validatePhone,
  email: validateEmail,
  gender: validateGender,
  uuid: validateUuid,
  state: validateState
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









































var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/**
 * Options Object of Form
 * @type {object}
 * @property {string} classHasError - Class to Display on Error
 * @property {string} classIsFine - Class to Display on Success
 * @property {string} classIgnore - Class of fields which dont be validate
 * @property {boolean} initialValidate - True if Form Validation on init
 */
var options = {
  classHasError: 'has-error',
  classIsFine: 'is-fine',
  classIgnore: 'ignore',
  initialValidate: false
};

var Form = function () {
  /**
   * Creates a new Form Handler
   * @constructs Form
   * @param {HTMLElement} form - Form Dom Node
   * @param {options|Object} config
   */
  function Form(form, config) {
    classCallCheck(this, Form);

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


  createClass(Form, [{
    key: 'init',
    value: function init() {
      // Set fallback for required fields without validation rule
      var _arr = [].concat(toConsumableArray(this.getFieldsToValidate()));

      for (var _i = 0; _i < _arr.length; _i++) {
        var element = _arr[_i];
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

  }, {
    key: 'getFieldsToValidate',


    /**
     * Get Field to Validate
     * @function
     * @memberof Form
     */
    value: function getFieldsToValidate() {
      return this.elForm.querySelectorAll('input:not(.' + this.config.classIgnore + '), select:not(.' + this.config.classIgnore + '), textarea:not(.' + this.config.classIgnore + ')');
    }

    /**
     * Get Validation Object
     * @param {HTMLElement} field
     * @returns {object}
     * @memberof Form
     */

  }, {
    key: 'getErrorObject',
    value: function getErrorObject(field) {
      var validatorRule = field.dataset.validator;
      if (validatorRule) {
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

  }, {
    key: 'fieldIsValid',
    value: function fieldIsValid(field) {
      var validatorRule = field.dataset.validator;
      if (validatorRule) {
        return validator[validatorRule](field.value).isValid;
      }

      return this.isRequiredAndEmpty(field);
    }

    /**
     * Handle Invalid Fields
     * @function
     * @memberof Form
     */

  }, {
    key: 'handleInvalidField',
    value: function handleInvalidField(field) {
      field.classList.remove(this.config.classIsFine);
      field.classList.add(this.config.classHasError);
    }

    /**
     * Handle Valid Fields
     * @function
     * @memberof Form
     */

  }, {
    key: 'handleValidField',
    value: function handleValidField(field) {
      field.classList.remove(this.config.classHasError);
      field.classList.add(this.config.classIsFine);
    }

    /**
     * Field Validation
     * @function
     * @memberof Form
     */

  }, {
    key: 'validate',
    value: function validate(field) {
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
      var validationEvent = new CustomEvent('form-validation', {
        detail: Object.assign(this.getErrorObject(field), {
          fieldIsValid: this.fieldIsValid(field),
          form: this.elForm,
          currentField: field
        })
      });

      document.dispatchEvent(validationEvent);
    }

    /**
     * Validation for all Fields
     * @function
     * @memberof Form
     */

  }, {
    key: 'validateAll',
    value: function validateAll() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var field = _step.value;

          this.validate(field);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }], [{
    key: 'isRequiredAndEmpty',
    value: function isRequiredAndEmpty(field) {
      return field.required && field.value.length <= 0;
    }
  }]);
  return Form;
}();

return Form;

})));
