'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Helper to set checkbox values by :checked state
 * @param {HTMLElement} field
 * @returns {Promise<void>}
 */
exports.default = async function prepareCheckbox(field) {
  var checkbox = field;
  if (checkbox.type === 'checkbox') {
    checkbox.value = field.checked || false;
  }
  return true;
};