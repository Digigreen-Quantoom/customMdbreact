"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBBreadcrumbItem = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Fa = _interopRequireDefault(require("./Fa"));
require("./Breadcrumb.css");
var _excluded = ["active", "appendIcon", "children", "className", "bold", "icon", "iconBrand", "iconClassName", "iconLight", "iconRegular", "iconSize"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var BreadcrumbItem = exports.MDBBreadcrumbItem = function BreadcrumbItem(props) {
  var active = props.active,
    appendIcon = props.appendIcon,
    children = props.children,
    className = props.className,
    bold = props.bold,
    icon = props.icon,
    iconBrand = props.iconBrand,
    iconClassName = props.iconClassName,
    iconLight = props.iconLight,
    iconRegular = props.iconRegular,
    iconSize = props.iconSize,
    attributes = _objectWithoutProperties(props, _excluded);
  var classes = (0, _classnames["default"])(active ? "active" : false, icon && "bc-icons", "breadcrumb-item", className);
  var iconClasses = (0, _classnames["default"])(appendIcon ? "mx-2" : "mr-2", iconClassName);
  var WithBold = function WithBold(_ref) {
    var children = _ref.children;
    return bold ? /*#__PURE__*/_react["default"].createElement("strong", null, children) : children;
  };
  var WithIcon = function WithIcon() {
    if (icon) {
      return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, appendIcon && children, /*#__PURE__*/_react["default"].createElement(_Fa["default"], {
        brand: iconBrand,
        className: iconClasses,
        icon: icon,
        light: iconLight,
        regular: iconRegular,
        size: iconSize
      }), !appendIcon && children);
    }
    return children;
  };
  return /*#__PURE__*/_react["default"].createElement("li", _extends({}, attributes, {
    className: classes
  }), /*#__PURE__*/_react["default"].createElement(WithBold, null, /*#__PURE__*/_react["default"].createElement(WithIcon, null)));
};
BreadcrumbItem.propTypes = {
  active: _propTypes["default"].bool,
  appendIcon: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  bold: _propTypes["default"].bool,
  icon: _propTypes["default"].string,
  iconBrand: _propTypes["default"].bool,
  iconClassName: _propTypes["default"].string,
  iconLight: _propTypes["default"].bool,
  iconRegular: _propTypes["default"].bool,
  iconSize: _propTypes["default"].string
};
BreadcrumbItem.defaultProps = {
  active: false,
  appendIcon: false,
  className: "",
  bold: false,
  icon: "",
  iconBrand: false,
  iconClassName: "",
  iconLight: false,
  iconRegular: false,
  iconSize: ""
};
var _default = exports["default"] = BreadcrumbItem;