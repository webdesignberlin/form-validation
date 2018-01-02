/**
 * Handle Error Message Translation, Translate Error Messages via given Key
 * @param {String} value
 */
async function translate(value) {
  let data = await fetch('validation-messages.json');
  let parsedData = await data.json();

  return parsedData[value] || value;
}

/**
 * Show Error Messages
 * @param {HTMLElement} target
 * @param {*} message
 */
export async function displayErrorMessage(target, message = null) {
  const translatedMessage = await translate(message);
  const errorElement = `<span class="error-message">${translatedMessage}</span>`;
  const element = target;

  if (element.querySelectorAll('.error-message').length === 0) {
    element.insertAdjacentHTML('beforeend', errorElement);
  } else {
    element.querySelector('.error-message').innerText = translatedMessage;
  }
}

/**
 * Remove Error Messages
 * @param {HTMLElement} target
 */
export async function removeErrorMessage(target) {
  const errorElement = target.querySelector('.error-message');
  if (errorElement) {
    errorElement.remove();
  }
}
