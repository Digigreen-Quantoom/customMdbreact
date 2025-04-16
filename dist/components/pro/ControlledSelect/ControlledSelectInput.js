"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ControlledSelectInput = function ControlledSelectInput(_ref) {
  var value = _ref.value;
  return /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    readOnly: true,
    value: value,
    className: "select-dropdown"
  });
};
ControlledSelectInput.propTypes = {
  value: _propTypes["default"].string
};
var _default = exports["default"] = ControlledSelectInput;