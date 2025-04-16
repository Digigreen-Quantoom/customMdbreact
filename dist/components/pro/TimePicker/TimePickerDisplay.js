"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var propTypes = {
  color: _propTypes["default"].string.isRequired,
  hours: _propTypes["default"].string.isRequired,
  minutes: _propTypes["default"].string.isRequired,
  dayTime: _propTypes["default"].string.isRequired,
  unitsMode: _propTypes["default"].string.isRequired,
  handleModeChange: _propTypes["default"].func.isRequired,
  hoursFormat: _propTypes["default"].number.isRequired
};
var TimePickerDisplay = function TimePickerDisplay(_ref) {
  var color = _ref.color,
    hours = _ref.hours,
    minutes = _ref.minutes,
    dayTime = _ref.dayTime,
    unitsMode = _ref.unitsMode,
    handleModeChange = _ref.handleModeChange,
    hoursFormat = _ref.hoursFormat;
  var displayClasses = (0, _classnames["default"])('picker__date-display', "btn-".concat(color));
  var hourClasses = (0, _classnames["default"])('clockpicker-span-hours', unitsMode === 'h' && 'text-primary');
  var minuteClasses = (0, _classnames["default"])('clockpicker-span-minutes', unitsMode === 'm' && 'text-primary');
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: displayClasses
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "clockpicker-display"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "clockpicker-display-column"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: hourClasses,
    onClick: function onClick() {
      return handleModeChange('h');
    }
  }, hours !== '' ? hours : "--"), ":", /*#__PURE__*/_react["default"].createElement("span", {
    className: minuteClasses,
    onClick: function onClick() {
      return handleModeChange('m');
    }
  }, minutes !== '' ? minutes : "--")), hoursFormat === 12 && /*#__PURE__*/_react["default"].createElement("div", {
    className: "clockpicker-display-column clockpicker-display-am-pm"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "clockpicker-span-am-pm"
  }, dayTime.toUpperCase()))));
};
TimePickerDisplay.propTypes = propTypes;
var _default = exports["default"] = TimePickerDisplay;