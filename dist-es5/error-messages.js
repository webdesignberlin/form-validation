'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayErrorMessage = displayErrorMessage;
exports.removeErrorMessage = removeErrorMessage;
/**
 * Translation Options
 * @type {{url: string, translations: null}}
 */
var defaultTranslationOptions = {
  url: 'validation-messages.json',
  translations: null
};

/**
 * Handle Error Message Translation, Translate Error Messages via given Key
 * @param {String} value
 * @param {Object} options
 */
async function translate(value) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultTranslationOptions;

  var data = {};
  var parsedData = {};

  if (options.url) {
    data = await fetch(options.url);
    parsedData = await data.json();
  } else {
    parsedData = options.translations.json();
  }

  return parsedData[value] || value;
}

/**
 * Show Error Messages
 * @param {HTMLElement} targets
 * @param {*} message
 * @param {Object|Boolean} needTranslation - Initial False or Object
 */
async function displayErrorMessage(targets) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var needTranslation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var errorMessage = message;
  if (needTranslation) {
    errorMessage = await translate(message, needTranslation);
  }

  var errorElement = '<span class="error-message">' + errorMessage + '</span>';

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = targets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var element = _step.value;

      if (element.querySelectorAll('.error-message').length === 0) {
        element.insertAdjacentHTML('beforeend', errorElement);
      } else {
        element.querySelector('.error-message').innerText = errorMessage;
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
 * Remove Error Messages
 * @param {HTMLElement} targets
 */
async function removeErrorMessage(targets) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = targets[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var target = _step2.value;

      var errorElement = target.querySelector('.error-message');
      if (errorElement) {
        errorElement.remove();
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
}