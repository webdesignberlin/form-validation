import { Form } from './form.js';
import { eventInit, handleSubmit, handleInputChange, handleInputKeyDown } from './event-handling.js';

const form1 = document.getElementById('form-1');
const formHandling = new Form(form1);

eventInit();

/* const helperFunc = (event, formClass) => {
  handleSubmit(event, formClass);
}; */

for (const submitButton of document.querySelectorAll('.js-submit')) {
  submitButton.addEventListener('click', handleSubmit.bind(formHandling));
}

for (const field of formHandling.getFieldsToValidate()) {
  field.addEventListener('keydown', handleInputKeyDown.bind(formHandling));
  field.addEventListener('change', handleInputChange.bind(formHandling));
}

/* for (let i = 0; i < formHandling.getFieldsToValidate().length; i += 1) {
  // formHandling.getFieldsToValidate()[i].addEventListener('change', handleInputChange);
  formHandling.getFieldsToValidate()[i].addEventListener('keydown', handleInputKeyDown);
} */
