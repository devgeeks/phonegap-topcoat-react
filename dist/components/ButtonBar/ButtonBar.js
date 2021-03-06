'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _preact = require('preact');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ButtonBar = function ButtonBar(props) {
  var _props$clickHandler = props.clickHandler,
      clickHandler = _props$clickHandler === undefined ? function () {} : _props$clickHandler,
      _props$full = props.full,
      full = _props$full === undefined ? false : _props$full,
      _props$large = props.large,
      large = _props$large === undefined ? false : _props$large,
      rest = _objectWithoutProperties(props, ['clickHandler', 'full', 'large']);

  var classNameModifier = large ? '--large' : '';
  var cx = (0, _classnames2.default)({
    full: full,
    'topcoat-button-bar': true
  });
  var tabs = props.children.map(function (child) {
    return (0, _preact.h)(
      'div',
      { key: child.key, className: 'topcoat-button-bar__item' },
      (0, _preact.h)(
        'button',
        {
          className: 'topcoat-button-bar__button' + classNameModifier,
          onClick: function onClick() {
            return clickHandler(child.key);
          }
        },
        child
      )
    );
  });
  return (0, _preact.h)(
    'div',
    _extends({ className: cx }, rest),
    tabs
  );
};

ButtonBar.displayName = 'ButtonBar';

exports.default = ButtonBar;