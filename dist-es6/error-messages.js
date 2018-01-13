

/**
 * Handle Error Message Translation, Translate Error Messages via given Key
 * @param {String} value
 * @param {Object} options
 */
let translate = (() => {
  var _ref = _asyncToGenerator(function* (value, options = defaultTranslationOptions) {
    let data = {};
    let parsedData = {};

    if (options.url) {
      data = yield fetch(options.url);
      parsedData = yield data.json();
    } else {
      parsedData = options.translations.json();
    }

    return parsedData[value] || value;
  });

  return function translate(_x) {
    return _ref.apply(this, arguments);
  };
})();

/**
 * Show Error Messages
 * @param {HTMLElement} targets
 * @param {*} message
 * @param {Object|Boolean} needTranslation - Initial False or Object
 */


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Translation Options
 * @type {{url: string, translations: null}}
 */
const defaultTranslationOptions = {
  url: 'validation-messages.json',
  translations: null
};export let displayErrorMessage = (() => {
  var _ref2 = _asyncToGenerator(function* (targets, message = null, needTranslation = false) {
    let errorMessage = message;
    if (needTranslation) {
      errorMessage = yield translate(message, needTranslation);
    }

    const errorElement = `<span class="error-message">${errorMessage}</span>`;

    for (const element of targets) {
      if (element.querySelectorAll('.error-message').length === 0) {
        element.insertAdjacentHTML('beforeend', errorElement);
      } else {
        element.querySelector('.error-message').innerText = errorMessage;
      }
    }
  });

  return function displayErrorMessage(_x2) {
    return _ref2.apply(this, arguments);
  };
})();

/**
 * Remove Error Messages
 * @param {HTMLElement} targets
 */
export let removeErrorMessage = (() => {
  var _ref3 = _asyncToGenerator(function* (targets) {
    for (const target of targets) {
      const errorElement = target.querySelector('.error-message');
      if (errorElement) {
        errorElement.remove();
      }
    }
  });

  return function removeErrorMessage(_x3) {
    return _ref3.apply(this, arguments);
  };
})();