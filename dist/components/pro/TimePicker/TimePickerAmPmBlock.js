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
  dayTime: _propTypes["default"].string.isRequired,
  handleDayTimeChange: _propTypes["default"].func.isRequired
};
var TimePickerAmPmBlock = function TimePickerAmPmBlock(_ref) {
  var color = _ref.color,
    dayTime = _ref.dayTime,
    handleDayTimeChange = _ref.handleDayTimeChange;
  var classesAM = (0, _classnames["default"])('btn-floating', 'btn-flat', 'clockpicker-button', 'am-button', dayTime === 'am' && 'active', "btn-".concat(color));
  var classesPM = (0, _classnames["default"])('btn-floating', 'btn-flat', 'clockpicker-button', 'pm-button', dayTime === 'pm' && 'active', "btn-".concat(color));
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "clockpicker-am-pm-block d-flex justify-content-between"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: classesAM,
    onClick: function onClick() {
      return handleDayTimeChange('am');
    }
  }, "AM"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: classesPM,
    onClick: function onClick() {
      return handleDayTimeChange('pm');
    }
  }, "PM"));
};
TimePickerAmPmBlock.propTypes = propTypes;
var _default = exports["default"] = TimePickerAmPmBlock;