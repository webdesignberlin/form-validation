'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateUuid;

var _messages = require('./messages.js');

var _validObject = require('./valid-object.js');

var _validObject2 = _interopRequireDefault(_validObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * uuid Validation
 * @memberof validator
 * @param {string} uuid
 * @returns {{message: string, value: string, isValid: boolean}|*|{}}
 */
function validateUuid(uuid) {
  if (!uuid) {
    return (0, _messages.info)('uuidIsRequired', '', _validObject2.default.INVALID);
  }

  if (typeof uuid !== 'string') {
    return (0, _messages.info)('uuidWrongType', uuid, _validObject2.default.INVALID);
  }

  if (uuid.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi)) {
    return (0, _messages.info)('', '', _validObject2.default.VALID);
  }

  return (0, _messages.info)('uuidWrongPattern', uuid, _validObject2.default.INVALID);
}