"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBBtn = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Waves = _interopRequireDefault(require("./Waves"));
var _excluded = ["active", "block", "circle", "className", "color", "disabled", "download", "outline", "size", "rounded", "gradient", "floating", "flat", "role", "type", "social", "action", "tag", "target", "innerRef"];
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
var Button = exports.MDBBtn = /*#__PURE__*/function (_React$Component) {
  function Button(props) {
    var _this;
    _classCallCheck(this, Button);
    _this = _callSuper(this, Button, [props]);
    _defineProperty(_this, "handleClick", function (e) {
      e.stopPropagation();
      // Waves - Get Cursor Position
      var cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      _this.setState({
        cursorPos: cursorPos
      });
    });
    _this.state = {
      cursorPos: {}
    };
    return _this;
  }
  _inherits(Button, _React$Component);
  return _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        active = _this$props.active,
        block = _this$props.block,
        circle = _this$props.circle,
        className = _this$props.className,
        color = _this$props.color,
        disabled = _this$props.disabled,
        download = _this$props.download,
        outline = _this$props.outline,
        size = _this$props.size,
        rounded = _this$props.rounded,
        gradient = _this$props.gradient,
        floating = _this$props.floating,
        flat = _this$props.flat,
        role = _this$props.role,
        type = _this$props.type,
        social = _this$props.social,
        action = _this$props.action,
        Tag = _this$props.tag,
        target = _this$props.target,
        innerRef = _this$props.innerRef,
        attributes = _objectWithoutProperties(_this$props, _excluded);
      var classes = (0, _classnames["default"])(floating ? "btn-floating btn" : "btn", flat ? "btn-flat" : gradient ? "".concat(gradient, "-gradient") : "btn".concat(outline ? "-outline" : "", "-").concat(color), size ? "btn-".concat(size) : false, rounded ? "btn-rounded" : false, circle && "btn-circle", block ? "btn-block" : false, social ? "btn-" + social : false, action ? "btn-action" : false, "Ripple-parent", className, {
        active: active,
        disabled: disabled
      });
      if (attributes.href && Tag === "button") {
        Tag = "a";
      }
      return /*#__PURE__*/_react["default"].createElement(Tag, _extends({
        type: Tag === "button" && !type ? "button" : type,
        target: target,
        role: Tag === "a" && !role ? "button" : role,
        className: classes,
        ref: innerRef,
        onMouseUp: this.handleClick,
        onTouchStart: this.handleClick
      }, attributes, {
        download: download,
        disabled: disabled
      }), this.props.children, this.props.disabled ? false : /*#__PURE__*/_react["default"].createElement(_Waves["default"], {
        cursorPos: this.state.cursorPos,
        outline: outline,
        flat: flat
      }));
    }
  }]);
}(_react["default"].Component);
Button.defaultProps = {
  color: "default",
  tag: "button"
};
Button.propTypes = {
  active: _propTypes["default"].bool,
  action: _propTypes["default"].bool,
  block: _propTypes["default"].bool,
  color: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  download: _propTypes["default"].string,
  gradient: _propTypes["default"].string,
  role: _propTypes["default"].string,
  type: _propTypes["default"].string,
  outline: _propTypes["default"].bool,
  rounded: _propTypes["default"].bool,
  circle: _propTypes["default"].bool,
  floating: _propTypes["default"].bool,
  flat: _propTypes["default"].bool,
  innerRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]),
  onClick: _propTypes["default"].func,
  size: _propTypes["default"].string,
  social: _propTypes["default"].string,
  children: _propTypes["default"].node,
  tag: _propTypes["default"].string,
  target: _propTypes["default"].string,
  className: _propTypes["default"].string
};
var _default = exports["default"] = Button;