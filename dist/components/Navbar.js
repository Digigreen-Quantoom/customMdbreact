"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBNavbar = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _excluded = ["expand", "light", "dark", "sticky", "fixed", "scrolling", "color", "className", "scrollingNavbarOffset", "tag", "double", "transparent"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
var getExpandClass = function getExpandClass(expand) {
  if (expand === false) {
    return false;
  } else if (expand === true || expand === "xs") {
    return "navbar-expand";
  }
  return "navbar-expand-".concat(expand);
};
var Navbar = exports.MDBNavbar = /*#__PURE__*/function (_Component) {
  function Navbar(props) {
    var _this;
    _classCallCheck(this, Navbar);
    _this = _callSuper(this, Navbar, [props]);
    _defineProperty(_this, "handleScroll", function () {
      var scrollingNavbarOffset = _this.props.scrollingNavbarOffset || 50;
      if (window.pageYOffset > scrollingNavbarOffset) {
        _this.setState({
          isCollapsed: true
        });
      } else {
        _this.setState({
          isCollapsed: false
        });
      }
    });
    _this.state = {
      isCollapsed: false
    };
    return _this;
  }
  _inherits(Navbar, _Component);
  return _createClass(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.scrolling || this.props.scrollingNavbarOffset) {
        window.addEventListener("scroll", this.handleScroll);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.scrolling || this.props.scrollingNavbarOffset) {
        window.removeEventListener("scroll", this.handleScroll);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        expand = _this$props.expand,
        light = _this$props.light,
        dark = _this$props.dark,
        sticky = _this$props.sticky,
        fixed = _this$props.fixed,
        scrolling = _this$props.scrolling,
        color = _this$props.color,
        className = _this$props.className,
        scrollingNavbarOffset = _this$props.scrollingNavbarOffset,
        Tag = _this$props.tag,
        _double = _this$props["double"],
        transparent = _this$props.transparent,
        attributes = _objectWithoutProperties(_this$props, _excluded);
      var classes = (0, _classnames["default"])("navbar", light ? "navbar-light" : "", dark ? "navbar-dark" : "", sticky ? "sticky-" + sticky : "", fixed ? "fixed-" + fixed : "", getExpandClass(expand), scrolling || scrollingNavbarOffset ? "scrolling-navbar" : "", this.state.isCollapsed ? "top-nav-collapse" : "", color ? transparent ? this.state.isCollapsed ? color : "" : color : "", _double ? "double-nav" : "", className);
      return /*#__PURE__*/_react["default"].createElement(Tag, _extends({}, attributes, {
        className: classes,
        role: "navigation"
      }));
    }
  }]);
}(_react.Component);
Navbar.propTypes = {
  light: _propTypes["default"].bool,
  dark: _propTypes["default"].bool,
  "double": _propTypes["default"].bool,
  fixed: _propTypes["default"].string,
  sticky: _propTypes["default"].string,
  scrolling: _propTypes["default"].bool,
  scrollingNavbarOffset: _propTypes["default"].number,
  color: _propTypes["default"].string,
  tag: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]),
  className: _propTypes["default"].string,
  expand: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string]),
  transparent: _propTypes["default"].bool
};
Navbar.defaultProps = {
  tag: "nav",
  expand: false,
  scrolling: false
};
var _default = exports["default"] = Navbar;