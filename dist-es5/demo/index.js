'use strict';

var _index = require('../index.js');

var _index2 = _interopRequireDefault(_index);

var _eventHandling = require('../event-handling.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var $form = document.getElementById('form-1');
var form = new _index2.default($form);

var $form2 = document.getElementById('form-2');
var form2 = new _index2.default($form2);

/**
 * Global init for all Form Events
 */
(0, _eventHandling.eventInit)();

/* const helperFunc = (event, formClass) => {
  handleSubmit(event, formClass);
}; */

/**
 * Handle Form 1
 */
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = $form.querySelectorAll('.js-submit')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var submitButton = _step.value;

    submitButton.addEventListener('click', _eventHandling.handleSubmit.bind(form));
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

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = form.getFieldsToValidate()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var field = _step2.value;

    field.addEventListener('keydown', _eventHandling.handleInputKeyDown.bind(form));
    field.addEventListener('change', _eventHandling.handleInputChange.bind(form));
  }

  /**
   * Handle Form 2
   */
  // Example for multiple Submit Buttons, include Buttons outside from scoped form
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

var _arr = [].concat(_toConsumableArray($form2.querySelectorAll('.js-submit')), _toConsumableArray(document.querySelectorAll('button[form="' + $form2.id + '"]')));

for (var _i = 0; _i < _arr.length; _i++) {
  var _submitButton = _arr[_i];
  _submitButton.addEventListener('click', _eventHandling.handleSubmit.bind(form2));
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  for (var _iterator3 = form2.getFieldsToValidate()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    var _field = _step3.value;

    _field.addEventListener('keydown', _eventHandling.handleInputKeyDown.bind(form2));
    _field.addEventListener('change', _eventHandling.handleInputChange.bind(form2));
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