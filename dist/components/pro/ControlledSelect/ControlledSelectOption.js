"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ControlledSelectOption = function ControlledSelectOption(_ref) {
  var checked = _ref.checked,
    disabled = _ref.disabled,
    icon = _ref.icon,
    multiple = _ref.multiple,
    selectOption = _ref.selectOption,
    text = _ref.text,
    value = _ref.value;
  var classes = (0, _classnames["default"])(disabled && "disabled", checked && "active");
  return /*#__PURE__*/_react["default"].createElement("li", {
    "data-multiple": multiple,
    className: classes,
    onClick: function onClick() {
      return selectOption(value);
    }
  }, icon && /*#__PURE__*/_react["default"].createElement("img", {
    src: icon,
    alt: "",
    className: "rounded-circle"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    "data-multiple": multiple,
    className: "filtrable"
  }, multiple && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    value: value,
    className: "form-check-input",
    checked: checked,
    disabled: disabled,
    onChange: function onChange() {}
  }), /*#__PURE__*/_react["default"].createElement("label", {
    style: {
      height: "10px"
    },
    "data-multiple": multiple
  })), text ? text : value));
};
ControlledSelectOption.propTypes = {
  checked: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  icon: _propTypes["default"].string,
  multiple: _propTypes["default"].bool,
  selectOption: _propTypes["default"].func,
  text: _propTypes["default"].string,
  value: _propTypes["default"].string
};
var _default = exports["default"] = ControlledSelectOption;