import { displayErrorMessage, removeErrorMessage } from './error-messages.js';

/* for(const field of formHandling.getFieldsToValidate()) {
  formHandling.validate(field);
} */

export function eventInit() {
  /**
   * Show or remove Error Messages if validation Event is fired
   */
  document.addEventListener('form-validation', async function (e) {
    const inputId = e.detail.currentField.id;
    const target = document.querySelector(`[for="${inputId}"]`);

    if (e.detail.isValid) {
      await removeErrorMessage(target);
    } else {
      await displayErrorMessage(target, e.detail.message)
    }
  });
}

/**
 * Focus next Input in Form
 * @param {HTMLElement} currentField - Node of current Element
 * @param {NodeList} inputs - List of Fields inclusive currentField
 */
function handleFocusonValid(currentField, inputs) {
  for (let [index, element] of inputs.entries()) {
    if (element === currentField && index < inputs.length) {
      inputs[index + 1].focus();
      // inputs[index + 1].select();
    }
  }
}

/**
 * Handle Form Inputs by KeyDown Events
 * @param {*} event
 */
export function handleInputKeyDown(event, formHandling = this) {
  const field = event.target;
  const form = formHandling.elForm;
  const inputs = [...form.querySelectorAll('input, select')];
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
export function handleInputChange(event, formHandling = this) {
  const field = event.target;
  // trimWhitespace(this);
  formHandling.validate(field);
}

/**
 * Handle Submit Events
 * @param {*} event
 */
export function handleSubmit(event, formHandling = this) {
  event.preventDefault();
  formHandling.validateAll();
}
