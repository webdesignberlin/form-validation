'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('./rules/index.js');

var _index2 = _interopRequireDefault(_index);

var _prepareCheckbox = require('./helpers/prepare-checkbox.js');

var _prepareCheckbox2 = _interopRequireDefault(_prepareCheckbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
    _classCallCheck(this, Form);

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


  _createClass(Form, [{
    key: 'init',
    value: function init() {
      // Set fallback for required fields without validation rule
      var _arr = [].concat(_toConsumableArray(this.getFieldsToValidate()));

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
    key: 'isRequiredAndEmpty',
    value: function isRequiredAndEmpty(field) {
      return field.required && field.value.length <= 0;
    }

    /**
     * Get Field to Validate
     * @function
     * @memberof Form
     */

  }, {
    key: 'getFieldsToValidate',
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
      if (field.type === 'radio') {
        return _index2.default.isRequired(field.value);
      }
      if (_index2.default[validatorRule]) {
        return _index2.default[validatorRule](field.value);
      }

      if (this.isRequiredAndEmpty(field)) {
        return _index2.default.isRequired(field.value);
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
      (0, _prepareCheckbox2.default)(field);
      /*if (field.type === 'radio' && !field.checked) {
        return false;
      }*/
      if (field.type === 'radio') {
        var elsSameName = this.elForm.querySelectorAll('[name="' + field.name + '"]');
        var elsSameNameChecked = this.elForm.querySelectorAll('[name="' + field.name + '"]:checked');

        /**
         * Handle Radio Buttons with same name as Same Validation Element
         */
        if (elsSameNameChecked.length <= 0) {
          return false;
        }
      }

      var validatorRule = field.dataset.validator;
      if (_index2.default[validatorRule]) {
        return _index2.default[validatorRule](field.value).isValid;
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
      var silent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (field.type === 'radio') {
        var elsSameName = this.elForm.querySelectorAll('[name="' + field.name + '"]');
        var elsSameNameChecked = this.elForm.querySelectorAll('[name="' + field.name + '"]:checked');

        /**
         * Handle Radio Buttons with same name as Same Validation Element
         */
        if (elsSameNameChecked.length > 0) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = elsSameName[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var radioButton = _step.value;

              this.handleValidField(radioButton);
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
      }

      if (silent) {
        var _validationEvent = new CustomEvent('form-validation-silent', {
          detail: Object.assign(this.getErrorObject(field), {
            fieldIsValid: this.fieldIsValid(field),
            form: this.elForm,
            formIsValid: this.formIsValid(),
            currentField: field
          })
        });

        document.dispatchEvent(_validationEvent);
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
      var validationEvent = new CustomEvent('form-validation', {
        detail: Object.assign(this.getErrorObject(field), {
          fieldIsValid: this.fieldIsValid(field),
          form: this.elForm,
          formIsValid: this.formIsValid(),
          currentField: field
        })
      });

      document.dispatchEvent(validationEvent);
    }

    /**
     * Get current Form Status
     * @returns {{validFields: Array, inValidFields: Array}}
     */

  }, {
    key: 'getFormStatus',
    value: function getFormStatus() {
      var formFields = {
        validFields: [],
        inValidFields: []
      };

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.fields[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var field = _step2.value;

          if (this.fieldIsValid(field)) {
            formFields.validFields.push(field);
          } else {
            formFields.inValidFields.push(field);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return formFields;
    }

    /**
     * Check if Form is Valid
     * @returns {boolean}
     */

  }, {
    key: 'formIsValid',
    value: function formIsValid() {
      return this.getFormStatus().inValidFields.length === 0;
    }

    /**
     * Validation for all Fields
     * @function
     * @memberof Form
     */

  }, {
    key: 'validateAll',
    value: function validateAll() {
      var silent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.fields[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var field = _step3.value;

          this.validate(field, silent);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }]);

  return Form;
}();

exports.default = Form;