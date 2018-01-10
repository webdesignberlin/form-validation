/**
 * Helper to set checkbox values by :checked state
 * @param {HTMLElement} field
 * @returns {Promise<void>}
 */
export default async function prepareCheckbox(field) {
  const checkbox = field;
  if (checkbox.type === 'checkbox') {
    checkbox.value = field.checked || false;
  }
}
