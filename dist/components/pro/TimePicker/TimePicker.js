"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBTimePicker = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./clock.css");
var _TimePickerDisplay = _interopRequireDefault(require("./TimePickerDisplay"));
var _TimePickerClock = _interopRequireDefault(require("./TimePickerClock"));
var _TimePickerAmPmBlock = _interopRequireDefault(require("./TimePickerAmPmBlock"));
var _TimePickerFooter = _interopRequireDefault(require("./TimePickerFooter"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var propTypes = {
  id: _propTypes["default"].string.isRequired,
  allowedValues: _propTypes["default"].arrayOf(_propTypes["default"].number),
  autoSwitch: _propTypes["default"].bool,
  cancelable: _propTypes["default"].bool,
  cancelText: _propTypes["default"].string,
  clearable: _propTypes["default"].bool,
  clearText: _propTypes["default"].string,
  closeOnCancel: _propTypes["default"].bool,
  color: _propTypes["default"].string,
  doneText: _propTypes["default"].string,
  getValue: _propTypes["default"].func,
  hours: _propTypes["default"].number,
  hoursFormat: _propTypes["default"].number,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].object]),
  minutes: _propTypes["default"].number,
  placeholder: _propTypes["default"].string,
  startFromInner: _propTypes["default"].bool
};
var defaultProps = {
  allowedValues: [],
  autoSwitch: true,
  cancelable: false,
  cancelText: 'Cancel',
  clearable: false,
  clearText: 'Clear',
  closeOnCancel: false,
  color: 'primary',
  doneText: 'Done',
  getValue: function getValue() {},
  hours: 12,
  hoursFormat: 12,
  label: '',
  minutes: 0,
  placeholder: '',
  startFromInner: true
};
var TimePicker = exports.MDBTimePicker = /*#__PURE__*/function (_Component) {
  function TimePicker(props) {
    var _this;
    _classCallCheck(this, TimePicker);
    _this = _callSuper(this, TimePicker, [props]);
    _defineProperty(_this, "setInputText", function () {
      var value = '';
      if (_this.state.hours !== null && _this.state.minutes !== null) {
        value = _this.props.hoursFormat === 12 ? "".concat(_this.state.computedHours, ":").concat(_this.state.computedMinutes).concat(_this.state.dayTime.toUpperCase()) : "".concat(_this.state.computedHours, ":").concat(_this.state.computedMinutes);
      }
      _this.setState({
        value: value,
        unitsMode: 'h'
      });
    });
    _defineProperty(_this, "computeTimeNumber", function (number) {
      if (number !== null) {
        number = _this.state.unitsMode === 'h' && number === 24 ? 0 : number;
        return number < 10 ? "0".concat(number.toString()) : "".concat(number.toString());
      }
      return '';
    });
    _defineProperty(_this, "handlePickerDialogOpen", function () {
      return _this.setState({
        pickerDialogOpen: !_this.state.pickerDialogOpen
      });
    });
    _defineProperty(_this, "handleModeChange", function (unitsMode) {
      return _this.setState({
        unitsMode: unitsMode
      });
    });
    _defineProperty(_this, "handleDayTimeChange", function (dayTime) {
      return _this.setState({
        dayTime: dayTime
      });
    });
    _defineProperty(_this, "handleMinutesChange", function (minutes) {
      return _this.setState({
        minutes: minutes
      });
    });
    _defineProperty(_this, "handleHoursChange", function (hours) {
      _this.setState({
        hours: hours
      });
    });
    _defineProperty(_this, "handleBackdropClick", function (e) {
      if (e.target.classList.value === 'picker__holder') {
        _this.handlePickerDialogOpen();
      }
    });
    _defineProperty(_this, "handleDoneClick", function () {
      _this.setInputText();
      _this.handlePickerDialogOpen();
    });
    _defineProperty(_this, "handleClearClick", function () {
      _this.handleHoursChange(null);
      _this.handleMinutesChange(null);
      _this.handleModeChange('h');
      _this.handleDayTimeChange('am');
    });
    _defineProperty(_this, "handleCancelClick", function () {
      _this.handleHoursChange(_this.props.hours);
      _this.handleMinutesChange(_this.props.minutes);
      _this.handleModeChange('h');
      _this.handleDayTimeChange('am');
      if (_this.props.closeOnCancel) {
        _this.handlePickerDialogOpen();
      }
    });
    _this.state = {
      allowedValues: [],
      computedHours: '',
      computedMinutes: '',
      dayTime: 'am',
      hours: _this.props.hours,
      minutes: _this.props.minutes,
      pickerDialogOpen: false,
      unitsMode: 'h',
      value: ''
    };
    return _this;
  }
  _inherits(TimePicker, _Component);
  return _createClass(TimePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.setState({
        computedHours: this.computeTimeNumber(this.state.hours),
        computedMinutes: this.computeTimeNumber(this.state.minutes)
      }, function () {
        return _this2.setInputText();
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.minutes !== this.state.minutes) {
        this.setState({
          computedMinutes: this.computeTimeNumber(this.state.minutes)
        });
      }
      if (prevState.hours !== this.state.hours) {
        this.setState({
          computedHours: this.computeTimeNumber(this.state.hours)
        });
      }
      if (prevState.value !== this.state.value) {
        this.props.getValue(this.state.value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
        computedHours = _this$state.computedHours,
        computedMinutes = _this$state.computedMinutes,
        dayTime = _this$state.dayTime,
        hours = _this$state.hours,
        minutes = _this$state.minutes,
        pickerDialogOpen = _this$state.pickerDialogOpen,
        unitsMode = _this$state.unitsMode,
        value = _this$state.value;
      var _this$props = this.props,
        allowedValues = _this$props.allowedValues,
        autoSwitch = _this$props.autoSwitch,
        cancelable = _this$props.cancelable,
        cancelText = _this$props.cancelText,
        clearable = _this$props.clearable,
        clearText = _this$props.clearText,
        color = _this$props.color,
        doneText = _this$props.doneText,
        hoursFormat = _this$props.hoursFormat,
        id = _this$props.id,
        label = _this$props.label,
        placeholder = _this$props.placeholder,
        startFromInner = _this$props.startFromInner;
      var inputClasses = (0, _classnames["default"])("form-control", "timepicker", pickerDialogOpen && "picker__input picker__input--active");
      var clockClasses = (0, _classnames["default"])("clockpicker", "picker", pickerDialogOpen && "picker--opened");
      var hoursClasses = (0, _classnames["default"])("clockpicker-hours", unitsMode !== "h" && "clockpicker-dial-out");
      var minutesClasses = (0, _classnames["default"])("clockpicker-minutes", unitsMode !== "m" && "clockpicker-dial-out");
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "md-form"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        placeholder: placeholder,
        id: id,
        className: inputClasses,
        value: value,
        onClick: this.handlePickerDialogOpen,
        readOnly: true
      }), /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: id,
        className: "active"
      }, label), pickerDialogOpen && /*#__PURE__*/_react["default"].createElement("div", {
        className: clockClasses
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "picker__holder",
        onClick: this.handleBackdropClick
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "picker__frame"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "picker__wrap"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "picker__box"
      }, /*#__PURE__*/_react["default"].createElement(_TimePickerDisplay["default"], {
        color: color,
        hours: computedHours,
        minutes: computedMinutes,
        dayTime: dayTime,
        unitsMode: unitsMode,
        handleModeChange: this.handleModeChange,
        hoursFormat: hoursFormat
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "picker__calendar-container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "clockpicker-plate"
      }, unitsMode === 'h' ? /*#__PURE__*/_react["default"].createElement(_TimePickerClock["default"], {
        allowedValues: allowedValues,
        autoSwitch: autoSwitch,
        className: hoursClasses,
        color: color,
        "double": hoursFormat === 24,
        handleChange: this.handleHoursChange,
        handleModeChange: this.handleModeChange,
        min: 1,
        max: hoursFormat,
        step: 1,
        rotate: 30,
        startFromInner: startFromInner,
        value: hours
      }) : /*#__PURE__*/_react["default"].createElement(_TimePickerClock["default"], {
        className: minutesClasses,
        color: color,
        handleChange: this.handleMinutesChange,
        min: 0,
        max: 59,
        step: 5,
        rotate: 0,
        startFromInner: startFromInner,
        value: minutes
      })), hoursFormat === 12 && /*#__PURE__*/_react["default"].createElement(_TimePickerAmPmBlock["default"], {
        color: color,
        dayTime: dayTime,
        handleDayTimeChange: this.handleDayTimeChange
      })), /*#__PURE__*/_react["default"].createElement(_TimePickerFooter["default"], {
        cancelText: cancelText,
        clearText: clearText,
        doneText: doneText,
        cancelable: cancelable,
        clearable: clearable,
        handleCancelClick: this.handleCancelClick,
        handleClearClick: this.handleClearClick,
        handleDoneClick: this.handleDoneClick
      })))))));
    }
  }]);
}(_react.Component);
TimePicker.propTypes = propTypes;
TimePicker.defaultProps = defaultProps;
var _default = exports["default"] = TimePicker;