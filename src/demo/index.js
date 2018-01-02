import { Form } from '../index.js';
import { eventInit, handleSubmit, handleInputChange, handleInputKeyDown } from '../event-handling.js';

const $form = document.getElementById('form-1');
const form = new Form($form);

const $form2 = document.getElementById('form-2');
const form2 = new Form($form2);

/**
 * Global init for all Form Events
 */
eventInit();

/* const helperFunc = (event, formClass) => {
  handleSubmit(event, formClass);
}; */


/**
 * Handle Form 1
 */
for (const submitButton of $form.querySelectorAll('.js-submit')) {
  submitButton.addEventListener('click', handleSubmit.bind(form));
}

for (const field of form.getFieldsToValidate()) {
  field.addEventListener('keydown', handleInputKeyDown.bind(form));
  field.addEventListener('change', handleInputChange.bind(form));
}


/**
 * Handle Form 2
 */
// Example for multiple Submit Buttons, include Buttons outside from scoped form
for (const submitButton of [...$form2.querySelectorAll('.js-submit'), ...document.querySelectorAll(`button[form="${$form2.id}"]`)]) {
  submitButton.addEventListener('click', handleSubmit.bind(form2));
}

for (const field of form2.getFieldsToValidate()) {
  field.addEventListener('keydown', handleInputKeyDown.bind(form2));
  field.addEventListener('change', handleInputChange.bind(form2));
}
