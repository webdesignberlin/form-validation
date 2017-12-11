import { Form } from './form.js';

async function translate(value) {
  /* const catalog = {
    nameLengthIsIncorrect: 'Leerzeichen sind nicht möglich',
    nameIsRequired: 'Pflichtfeld',
    nameValueNotMatched: 'darf keine Sonderzeichen enthalten',

    birthdateMinAge: 'Mindestalter 15 Jahre',
    birthdateIsRequired: 'Pflichtfeld',
    birthdateIsInvalid: 'hat ein falsches Format (DD-MM-YYYY)',

    genderIsRequired: 'Pflichtfeld',
    genderIsInvalid: 'Fehlerhafte Eingabe. Geschlecht erwartet "FEMALE" oder "MALE"',

    stateIsRequired: 'muss naktiviert sein',
    stateIsNotTrue: 'muss bestätigt werden',

    emailIsRequired: 'Pflichtfeld',
    emailWrongPattern: 'Bitte gib eine gültige E-Mail-Adresse an.',

    phoneIsRequired: 'Pflichtfeld',
    phoneWrongPattern: 'Bitte gib eine gültige Teefonnummer an.',
  }; */

  /* function getTranslation(key) {
    return catalog[key] || key;
  } */

  async function getTranslation(key) {
    try {
      let data = await fetch('validation-messages.json');
      let parsedData = await data.json();

      return parsedData[key] || key;
    } catch (error) {
      console.log(error);
    }
  }

  return getTranslation(value);
}

const form1 = document.getElementById('form-1');
const formHandling = new Form(form1);

document.addEventListener('form-validation', function (e) { 
  displayErrorMessage(e.detail.currentField, e.detail.message)
  console.log(e.detail);
});

/* for(const field of formHandling.getFieldsToValidate()) {
  formHandling.validate(field);
} */

/**
 * Focus next Input in Form
 * @param currentField - Node of current Element
 * @param inputs - List of Fields inclusive currentField
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
 * @param event
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

async function displayErrorMessage(target, message = null) {
  const errorElement = `<span class="error-message">${await translate(message)}</span>`;
  const element = target;

  if (element.querySelectorAll('.error-message').length === 0) {
    element.insertAdjacentHTML('afterend', errorElement);
  } else {
    element.querySelector('.error-message').innerText = message;
  }
}


/**
 * Handle Form Input Events
 * @param event - Event
 */
function handleInputChange(event) {
  const field = event.target;
  // trimWhitespace(this);
  formHandling.validate(field);
}

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
