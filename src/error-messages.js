/**
 * Translation Options
 * @type {{url: string, translations: null}}
 */
const defaultTranslationOptions = {
  url: 'validation-messages.json',
  translations: null,
};

/**
 * Handle Error Message Translation, Translate Error Messages via given Key
 * @param {String} value
 * @param {Object} options
 */
async function translate(value, options = defaultTranslationOptions) {
  let data = {};
  let parsedData = {};

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
export async function displayErrorMessage(targets, message = null, needTranslation = false) {
  let errorMessage = message;
  if (needTranslation) {
    errorMessage = await translate(message, needTranslation);
  }

  const errorElement = `<span class="error-message">${errorMessage}</span>`;
  
  for (const element of targets) {
    if (element.querySelectorAll('.error-message').length === 0) {
      element.insertAdjacentHTML('beforeend', errorElement);
    } else {
      element.querySelector('.error-message').innerText = errorMessage;
    }
  }
}

/**
 * Remove Error Messages
 * @param {HTMLElement} targets
 */
export async function removeErrorMessage(targets) {
  for (const target of targets) {
    const errorElement = target.querySelector('.error-message');
    if (errorElement) {
      errorElement.remove();
    }
  }
}
