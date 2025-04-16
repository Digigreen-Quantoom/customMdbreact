"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBTable = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
require("./Table.css");
var _excluded = ["autoWidth", "bordered", "borderless", "btn", "children", "dark", "fixed", "theadColor", "hover", "maxHeight", "responsive", "responsiveSm", "responsiveMd", "responsiveLg", "responsiveXl", "scrollY", "small", "striped", "className"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var Table = exports.MDBTable = /*#__PURE__*/function (_React$Component) {
  function Table() {
    _classCallCheck(this, Table);
    return _callSuper(this, Table, arguments);
  }
  _inherits(Table, _React$Component);
  return _createClass(Table, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        autoWidth = _this$props.autoWidth,
        bordered = _this$props.bordered,
        borderless = _this$props.borderless,
        btn = _this$props.btn,
        children = _this$props.children,
        dark = _this$props.dark,
        fixed = _this$props.fixed,
        theadColor = _this$props.theadColor,
        hover = _this$props.hover,
        maxHeight = _this$props.maxHeight,
        responsive = _this$props.responsive,
        responsiveSm = _this$props.responsiveSm,
        responsiveMd = _this$props.responsiveMd,
        responsiveLg = _this$props.responsiveLg,
        responsiveXl = _this$props.responsiveXl,
        scrollY = _this$props.scrollY,
        small = _this$props.small,
        striped = _this$props.striped,
        className = _this$props.className,
        attributes = _objectWithoutProperties(_this$props, _excluded);
      var tableClasses = (0, _classnames["default"])("table", {
        "w-auto": autoWidth,
        "table-bordered": bordered,
        "table-borderless": borderless,
        "btn-table": btn,
        "table-fixed": fixed,
        "table-hover": hover,
        "table-sm": small,
        "table-striped": striped
      }, className);
      var wrapperClasses = (0, _classnames["default"])({
        "table-dark": dark,
        "table-responsive": responsive,
        "table-responsive-sm": responsiveSm,
        "table-responsive-md": responsiveMd,
        "table-responsive-lg": responsiveLg,
        "table-responsive-xl": responsiveXl,
        "table-wrapper-scroll-y": scrollY
      });
      var wrapperStyles = {
        maxHeight: maxHeight ? "".concat(maxHeight) : null
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: wrapperClasses,
        style: wrapperStyles
      }, /*#__PURE__*/_react["default"].createElement("table", _extends({}, attributes, {
        className: tableClasses
      }), children));
    }
  }]);
}(_react["default"].Component);
Table.propTypes = {
  autoWidth: _propTypes["default"].bool,
  bordered: _propTypes["default"].bool,
  borderless: _propTypes["default"].bool,
  btn: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  dark: _propTypes["default"].bool,
  fixed: _propTypes["default"].bool,
  theadColor: _propTypes["default"].string,
  hover: _propTypes["default"].bool,
  maxHeight: _propTypes["default"].string,
  responsive: _propTypes["default"].bool,
  responsiveSm: _propTypes["default"].bool,
  responsiveMd: _propTypes["default"].bool,
  responsiveLg: _propTypes["default"].bool,
  responsiveXl: _propTypes["default"].bool,
  scrollY: _propTypes["default"].bool,
  small: _propTypes["default"].bool,
  striped: _propTypes["default"].bool,
  className: _propTypes["default"].string
};
var _default = exports["default"] = Table;