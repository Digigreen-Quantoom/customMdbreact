"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBDatePicker = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _moment = _interopRequireDefault(require("@date-io/moment"));
var _materialUiPickers = require("material-ui-pickers");
var _moment2 = _interopRequireDefault(require("moment"));
require("./DatePicker.css");
var _core = require("@material-ui/core");
var _excluded = ["theme", "adornmentPosition", "allowKeyboardControl", "animateYearScrolling", "autoOk", "cancelLabel", "clearable", "clearLabel", "disableFuture", "disableOpenOnEnter", "disablePast", "emptyLabel", "initialFocusedDate", "InputAdornmentProps", "invalidDateMessage", "invalidLabel", "keyboard", "keyboardIcon", "leftArrowIcon", "mask", "maxDate", "maxDateMessage", "minDate", "minDateMessage", "okLabel", "onInputChange", "openToYearSelection", "rightArrowIcon", "showTodayButton", "TextFieldComponent", "todayLabel", "locale", "format", "className", "getValue", "value", "valueDefault", "tag"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /* eslint-disable */
var DatePicker = exports.MDBDatePicker = /*#__PURE__*/function (_Component) {
  function DatePicker(props) {
    var _this;
    _classCallCheck(this, DatePicker);
    _this = _callSuper(this, DatePicker, [props]);
    _defineProperty(_this, "handleDateChange", function (date) {
      _this.setState({
        selectedDate: date ? date._d : _this.props.value
      });
    });
    _this.state = {
      selectedDate: props.value || props.valueDefault,
      muiTheme: (0, _core.createMuiTheme)(_objectSpread(_objectSpread({}, props.theme), {}, {
        typography: {
          useNextVariants: true
        }
      }))
    };
    return _this;
  }
  _inherits(DatePicker, _Component);
  return _createClass(DatePicker, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.getValue && prevState.selectedDate !== this.state.selectedDate) {
        this.props.getValue(this.state.selectedDate);
      }
      if (this.props.value !== prevProps.value) {
        this.setState({
          selectedDate: this.props.value
        });
      }
      if (prevProps.theme !== this.props.theme) {
        this.setState({
          muiTheme: (0, _core.createMuiTheme)(this.props.theme)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        theme = _this$props.theme,
        adornmentPosition = _this$props.adornmentPosition,
        allowKeyboardControl = _this$props.allowKeyboardControl,
        animateYearScrolling = _this$props.animateYearScrolling,
        autoOk = _this$props.autoOk,
        cancelLabel = _this$props.cancelLabel,
        clearable = _this$props.clearable,
        clearLabel = _this$props.clearLabel,
        disableFuture = _this$props.disableFuture,
        disableOpenOnEnter = _this$props.disableOpenOnEnter,
        disablePast = _this$props.disablePast,
        emptyLabel = _this$props.emptyLabel,
        initialFocusedDate = _this$props.initialFocusedDate,
        InputAdornmentProps = _this$props.InputAdornmentProps,
        invalidDateMessage = _this$props.invalidDateMessage,
        invalidLabel = _this$props.invalidLabel,
        keyboard = _this$props.keyboard,
        keyboardIcon = _this$props.keyboardIcon,
        leftArrowIcon = _this$props.leftArrowIcon,
        mask = _this$props.mask,
        maxDate = _this$props.maxDate,
        maxDateMessage = _this$props.maxDateMessage,
        minDate = _this$props.minDate,
        minDateMessage = _this$props.minDateMessage,
        okLabel = _this$props.okLabel,
        onInputChange = _this$props.onInputChange,
        openToYearSelection = _this$props.openToYearSelection,
        rightArrowIcon = _this$props.rightArrowIcon,
        showTodayButton = _this$props.showTodayButton,
        TextFieldComponent = _this$props.TextFieldComponent,
        todayLabel = _this$props.todayLabel,
        locale = _this$props.locale,
        format = _this$props.format,
        className = _this$props.className,
        getValue = _this$props.getValue,
        value = _this$props.value,
        valueDefault = _this$props.valueDefault,
        Tag = _this$props.tag,
        attributes = _objectWithoutProperties(_this$props, _excluded);
      var classes = (0, _classnames["default"])('md-form', className);
      return /*#__PURE__*/_react["default"].createElement(Tag, {
        className: classes
      }, /*#__PURE__*/_react["default"].createElement(_core.MuiThemeProvider, {
        theme: this.state.muiTheme
      }, /*#__PURE__*/_react["default"].createElement(_materialUiPickers.MuiPickersUtilsProvider, {
        locale: locale,
        moment: _moment2["default"],
        utils: _moment["default"]
      }, /*#__PURE__*/_react["default"].createElement(_materialUiPickers.DatePicker, _extends({}, attributes, {
        adornmentPosition: adornmentPosition,
        allowKeyboardControl: allowKeyboardControl,
        animateYearScrolling: animateYearScrolling,
        autoOk: autoOk,
        cancelLabel: cancelLabel,
        clearable: clearable,
        clearLabel: clearLabel,
        disableFuture: disableFuture,
        disableOpenOnEnter: disableOpenOnEnter,
        disablePast: disablePast,
        emptyLabel: emptyLabel,
        initialFocusedDate: initialFocusedDate,
        InputAdornmentProps: InputAdornmentProps,
        invalidDateMessage: invalidDateMessage,
        invalidLabel: invalidLabel,
        keyboard: keyboard,
        keyboardIcon: keyboardIcon,
        leftArrowIcon: leftArrowIcon,
        mask: mask,
        maxDate: maxDate,
        maxDateMessage: maxDateMessage,
        minDate: minDate,
        minDateMessage: minDateMessage,
        okLabel: okLabel,
        onInputChange: onInputChange,
        openToYearSelection: openToYearSelection,
        rightArrowIcon: rightArrowIcon,
        showTodayButton: showTodayButton,
        TextFieldComponent: TextFieldComponent,
        todayLabel: todayLabel,
        format: format || "DD MMMM, YYYY",
        value: this.state.selectedDate,
        onChange: this.handleDateChange
      })))));
    }
  }]);
}(_react.Component);
DatePicker.propTypes = {
  theme: _propTypes["default"].object,
  adornmentPosition: _propTypes["default"].string,
  allowKeyboardControl: _propTypes["default"].bool,
  animateYearScrolling: _propTypes["default"].bool,
  autoOk: _propTypes["default"].bool,
  cancelLabel: _propTypes["default"].node,
  clearable: _propTypes["default"].bool,
  clearLabel: _propTypes["default"].node,
  disableFuture: _propTypes["default"].object,
  disableOpenOnEnter: _propTypes["default"].bool,
  disablePast: _propTypes["default"].bool,
  emptyLabel: _propTypes["default"].string,
  initialFocusedDate: _propTypes["default"].string,
  InputAdornmentProps: _propTypes["default"].object,
  invalidDateMessage: _propTypes["default"].node,
  invalidLabel: _propTypes["default"].string,
  keyboard: _propTypes["default"].bool,
  keyboardIcon: _propTypes["default"].node,
  leftArrowIcon: _propTypes["default"].node,
  mask: _propTypes["default"].any,
  maxDate: _propTypes["default"].string,
  maxDateMessage: _propTypes["default"].node,
  minDate: _propTypes["default"].string,
  minDateMessage: _propTypes["default"].node,
  okLabel: _propTypes["default"].node,
  onInputChange: _propTypes["default"].func,
  openToYearSelection: _propTypes["default"].bool,
  rightArrowIcon: _propTypes["default"].node,
  showTodayButton: _propTypes["default"].bool,
  TextFieldComponent: _propTypes["default"].string,
  todayLabel: _propTypes["default"].string,
  locale: _propTypes["default"].string,
  format: _propTypes["default"].string,
  tag: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]),
  className: _propTypes["default"].string,
  getValue: _propTypes["default"].func,
  value: _propTypes["default"].instanceOf(Date),
  valueDefault: _propTypes["default"].instanceOf(Date)
};
DatePicker.defaultProps = {
  theme: {},
  tag: 'div',
  value: null,
  valueDefault: new Date(),
  getValue: function getValue() {}
};
var _default = exports["default"] = DatePicker;