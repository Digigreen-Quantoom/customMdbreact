"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Button = _interopRequireDefault(require("../../Button"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var propTypes = {
  cancelable: _propTypes["default"].bool.isRequired,
  cancelText: _propTypes["default"].string.isRequired,
  clearable: _propTypes["default"].bool.isRequired,
  clearText: _propTypes["default"].string.isRequired,
  doneText: _propTypes["default"].string.isRequired,
  handleCancelClick: _propTypes["default"].func.isRequired,
  handleClearClick: _propTypes["default"].func.isRequired,
  handleDoneClick: _propTypes["default"].func.isRequired
};
var TimePickerFooter = function TimePickerFooter(_ref) {
  var cancelable = _ref.cancelable,
    cancelText = _ref.cancelText,
    clearable = _ref.clearable,
    clearText = _ref.clearText,
    doneText = _ref.doneText,
    handleCancelClick = _ref.handleCancelClick,
    handleClearClick = _ref.handleClearClick,
    handleDoneClick = _ref.handleDoneClick;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "picker__footer"
  }, clearable && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    flat: true,
    className: "clockpicker-button",
    tabIndex: "0",
    onClick: handleClearClick
  }, clearText), cancelable && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    flat: true,
    className: "clockpicker-button",
    tabIndex: "0",
    onClick: handleCancelClick
  }, cancelText), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    flat: true,
    className: "clockpicker-button",
    tabIndex: "0",
    onClick: handleDoneClick
  }, doneText));
};
TimePickerFooter.propTypes = propTypes;
var _default = exports["default"] = TimePickerFooter;