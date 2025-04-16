"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var propTypes = {
  angle: _propTypes["default"].number.isRequired,
  color: _propTypes["default"].string.isRequired,
  scale: _propTypes["default"].number.isRequired
};
var TimpiePickerClockHand = function TimpiePickerClockHand(_ref) {
  var angle = _ref.angle,
    between = _ref.between,
    color = _ref.color,
    scale = _ref.scale;
  var classes = (0, _classnames["default"])('time-picker-clock__hand', color, between && 'between');
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes,
    style: {
      transform: "rotate(".concat(angle, "deg)"),
      height: "calc((50% - 28px) * ".concat(scale, ")")
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "time-picker-clock__hand--ring"
  }));
};
TimpiePickerClockHand.propTypes = propTypes;
var _default = exports["default"] = TimpiePickerClockHand;