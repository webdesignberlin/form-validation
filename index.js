import { Form } from './form.js';
import { displayErrorMessage, removeErrorMessage } from './error-messages.js';

const form1 = document.getElementById('form-1');
const formHandling = new Form(form1);


/**
 * Show or remove Error Messages if validation Event is fired
 */
document.addEventListener('form-validation', function (e) { 
  const inputId = e.detail.currentField.id;
  const target = document.querySelector(`[for="${inputId}"]`);

  if (e.detail.isValid) {
    removeErrorMessage(target);
  } else {
    displayErrorMessage(target, e.detail.message)
  }
});

/* for(const field of formHandling.getFieldsToValidate()) {
  formHandling.validate(field);
} */

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
function handleInputKeyDown(event) {
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
 * @param {*} event - Event
 */
function handleInputChange(event) {
  const field = event.target;
  // trimWhitespace(this);
  formHandling.validate(field);
}

/**
 * Handle Submit Events
 * @param {*} event 
 */
function handleSubmit(event) {
  event.preventDefault();
  formHandling.validateAll();
}

for (const submitButton of document.querySelectorAll('.js-submit')) {
  submitButton.addEventListener('click', handleSubmit);
}

for (const field of formHandling.getFieldsToValidate()) {
  field.addEventListener('keydown', handleInputKeyDown);
  field.addEventListener('change', handleInputChange);
}

/* for (let i = 0; i < formHandling.getFieldsToValidate().length; i += 1) {
  // formHandling.getFieldsToValidate()[i].addEventListener('change', handleInputChange);
  formHandling.getFieldsToValidate()[i].addEventListener('keydown', handleInputKeyDown);
} */
