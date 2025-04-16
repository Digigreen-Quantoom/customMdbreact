"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBInput = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Fa = _interopRequireDefault(require("./Fa"));
var _excluded = ["children", "className", "containerClass", "disabled", "error", "filled", "gap", "getValue", "group", "hint", "icon", "iconBrand", "iconClass", "iconLight", "iconRegular", "iconSize", "id", "inputRef", "outline", "label", "labelClass", "size", "success", "tag", "type", "validate", "value", "valueDefault"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
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
var Input = exports.MDBInput = /*#__PURE__*/function (_React$Component) {
  function Input(props) {
    var _this;
    _classCallCheck(this, Input);
    _this = _callSuper(this, Input, [props]);
    _defineProperty(_this, "onBlur", function (event) {
      event.stopPropagation();
      _this.setState({
        isFocused: false
      });
      _this.props.onBlur && _this.props.onBlur(event);
    });
    _defineProperty(_this, "onFocus", function (event) {
      event.stopPropagation();
      _this.setState({
        isFocused: true
      });
      _this.props.onFocus && _this.props.onFocus(event);
    });
    _defineProperty(_this, "onChange", function (event) {
      event.stopPropagation();
      if (_this.props.type !== "checkbox" && _this.props.type !== "radio") {
        _this.setState({
          innerValue: event.target.value,
          isPristine: false
        });
      }
      _this.props.onChange && _this.props.onChange(event);
      _this.props.getValue && _this.props.getValue(event.target.value);
    });
    _defineProperty(_this, "onInput", function (event) {
      event.stopPropagation();
      if (_this.props.type !== "checkbox" && _this.props.type !== "radio") {
        _this.setState({
          innerValue: event.target.value,
          isPristine: false
        });
      }
      _this.props.onInput && _this.props.onInput(event);
      _this.props.getValue && _this.props.getValue(event.target.value);
    });
    _defineProperty(_this, "setFocus", function () {
      _this.inputElementRef.current.focus();
    });
    _this.state = {
      innerValue: props.value || props.valueDefault,
      isFocused: false,
      isPristine: true
    };
    _this.inputElementRef = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }
  _inherits(Input, _React$Component);
  return _createClass(Input, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // User wants to access the input ref, but we have to use it intenrally to.
      // Return Ref instance to share ref with parent
      // then user sets ref as a callback -> inputRef={ref => this.myInputRef = ref}
      this.props.inputRef && this.props.inputRef(this.inputElementRef.current);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        containerClass = _this$props.containerClass,
        disabled = _this$props.disabled,
        error = _this$props.error,
        filled = _this$props.filled,
        gap = _this$props.gap,
        getValue = _this$props.getValue,
        group = _this$props.group,
        hint = _this$props.hint,
        icon = _this$props.icon,
        iconBrand = _this$props.iconBrand,
        iconClass = _this$props.iconClass,
        iconLight = _this$props.iconLight,
        iconRegular = _this$props.iconRegular,
        iconSize = _this$props.iconSize,
        id = _this$props.id,
        inputRef = _this$props.inputRef,
        outline = _this$props.outline,
        label = _this$props.label,
        labelClass = _this$props.labelClass,
        size = _this$props.size,
        success = _this$props.success,
        tag = _this$props.tag,
        type = _this$props.type,
        validate = _this$props.validate,
        value = _this$props.value,
        valueDefault = _this$props.valueDefault,
        attributes = _objectWithoutProperties(_this$props, _excluded);
      var isNotEmpty = !!this.state.innerValue || !!hint || this.state.isFocused;
      var Tag = "";
      var formControlClass = "";
      if (type === "textarea") {
        formControlClass = outline ? "form-control" : "md-textarea form-control";
        Tag = "textarea";
      } else {
        formControlClass = "form-control";
        Tag = "input";
        attributes.type = type;
      }
      attributes.disabled = disabled;
      var classes = (0, _classnames["default"])(formControlClass, size ? "form-control-".concat(size) : false, validate ? "validate" : false, filled ? "filled-in" : false, gap ? "with-gap" : false, type === "checkbox" ? gap ? false : "form-check-input" : false, type === "radio" ? "form-check-input" : false, className);
      var containerClassFix = (0, _classnames["default"])(type === "checkbox" || type === "radio" ? "form-check my-3" : "md-form", group ? "form-group" : false, size ? "form-".concat(size) : false, outline && 'md-outline', containerClass);
      var iconClassFix = (0, _classnames["default"])(isNotEmpty && this.state.isFocused ? "active" : false, iconClass, "prefix");
      var labelClassFix = (0, _classnames["default"])(isNotEmpty ? "active" : false, disabled ? "disabled" : false, type === "checkbox" ? "form-check-label mr-5" : false, type === "radio" ? "form-check-label mr-5" : false, labelClass);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: containerClassFix
      }, icon && /*#__PURE__*/_react["default"].createElement(_Fa["default"], {
        icon: icon,
        size: iconSize,
        brand: iconBrand,
        light: iconLight,
        regular: iconRegular,
        className: iconClassFix,
        onClick: this.setFocus
      }), /*#__PURE__*/_react["default"].createElement(Tag, _extends({}, attributes, {
        className: classes,
        id: id,
        placeholder: hint,
        ref: this.inputElementRef,
        value: this.state.innerValue,
        onBlur: this.onBlur,
        onChange: this.onChange,
        onInput: this.onInput,
        onFocus: this.onFocus
      })), label && /*#__PURE__*/_react["default"].createElement("label", {
        className: labelClassFix,
        htmlFor: id,
        "data-error": error,
        "data-success": success,
        id: id,
        onClick: this.setFocus
      }, label), children);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.value !== prevState.value) {
        return {
          innerValue: nextProps.value
        };
      }
      return null;
    }
  }]);
}(_react["default"].Component);
Input.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  containerClass: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  error: _propTypes["default"].string,
  filled: _propTypes["default"].bool,
  gap: _propTypes["default"].bool,
  getValue: _propTypes["default"].func,
  group: _propTypes["default"].bool,
  hint: _propTypes["default"].string,
  icon: _propTypes["default"].string,
  iconBrand: _propTypes["default"].bool,
  iconClass: _propTypes["default"].string,
  iconLight: _propTypes["default"].bool,
  iconRegular: _propTypes["default"].bool,
  iconSize: _propTypes["default"].string,
  id: _propTypes["default"].string,
  inputRef: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].object]),
  labelClass: _propTypes["default"].string,
  onBlur: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onInput: _propTypes["default"].func,
  outline: _propTypes["default"].bool,
  size: _propTypes["default"].string,
  success: _propTypes["default"].string,
  tag: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]),
  type: _propTypes["default"].string,
  validate: _propTypes["default"].bool,
  value: _propTypes["default"].string,
  valueDefault: _propTypes["default"].string
};
Input.defaultProps = {
  className: "",
  containerClass: "",
  disabled: false,
  error: "",
  filled: false,
  gap: false,
  group: false,
  hint: undefined,
  icon: "",
  iconBrand: false,
  iconClass: "",
  iconLight: false,
  iconRegular: false,
  iconSize: undefined,
  id: undefined,
  outline: false,
  label: "",
  labelClass: "",
  size: "",
  success: "",
  tag: "input",
  type: "text",
  validate: false,
  valueDefault: ""
};
var _default = exports["default"] = Input;