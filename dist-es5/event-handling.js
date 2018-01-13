'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.eventInit = eventInit;
exports.handleInputKeyDown = handleInputKeyDown;
exports.handleInputChange = handleInputChange;
exports.handleSubmit = handleSubmit;

var _errorMessages = require('./error-messages.js');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* for(const field of formHandling.getFieldsToValidate()) {
  formHandling.validate(field);
} */

function eventInit() {
  /**
   * Show or remove Error Messages if validation Event is fired
   */
  document.addEventListener('form-validation', async function (e) {
    var inputId = e.detail.currentField.id;
    var targets = document.querySelectorAll('[for="' + inputId + '"]');
    var form = e.detail.form;

    if (e.detail.currentField.type === 'radio') {
      targets = form.querySelectorAll('#' + e.detail.currentField.name);
    }

    if (e.detail.fieldIsValid) {
      await (0, _errorMessages.removeErrorMessage)(targets);
    } else {
      await (0, _errorMessages.displayErrorMessage)(targets, e.detail.message, {
        url: 'validation-messages.json'
      });
    }
  });
}

/**
 * Focus next Input in Form
 * @param {HTMLElement} currentField - Node of current Element
 * @param {NodeList} inputs - List of Fields inclusive currentField
 */
function handleFocusonValid(currentField, inputs) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = inputs.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          index = _step$value[0],
          element = _step$value[1];

      if (element === currentField && index < inputs.length) {
        inputs[index + 1].focus();
        // inputs[index + 1].select();
      }
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

/**
 * Handle Form Inputs by KeyDown Events
 * @param {*} event
 */
function handleInputKeyDown(event) {
  var formHandling = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;

  var field = event.target;
  var form = formHandling.elForm;
  var inputs = [].concat(_toConsumableArray(form.querySelectorAll('input, select')));
  // listen on enter/return key
  if (event.keyCode === 13) {
    event.preventDefault();
    if (!formHandling.fieldIsValid(field)) {
      field.focus();
    } else {
      // focus next element for ux on ios
      handleFocusonValid(field, inputs);
    }
  }
}

/**
 * Handle Form Input Events
 * @param event
 * @param formHandling
 */
function handleInputChange(event) {
  var formHandling = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;

  var field = event.target;
  // trimWhitespace(this);
  formHandling.validate(field);
}

/**
 * Handle Submit Events
 * @param {*} event
 */
function handleSubmit(event) {
  var formHandling = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;

  event.preventDefault();
  formHandling.validateAll();
}