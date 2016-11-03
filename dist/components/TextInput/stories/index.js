'use strict';

var _preact = require('preact');

var _storybook = require('@kadira/storybook');

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('TextInput', module).addWithInfo('default', function () {
  return (0, _preact.h)(_2.default, { name: 'default' });
}).addWithInfo('default value', function () {
  return (0, _preact.h)(_2.default, { name: 'default-value', defaultValue: 'default value' });
}).addWithInfo('fail', function () {
  return (0, _preact.h)(_2.default, { name: 'fail', pattern: 'not-fail', defaultValue: 'fail' });
}).addWithInfo('disabled', function () {
  return (0, _preact.h)(_2.default, { name: 'disabled', disabled: true });
});