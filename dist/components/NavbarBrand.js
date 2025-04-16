"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBNavbarBrand = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _reactRouterDom = require("react-router-dom");
var _excluded = ["className", "href"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var NavbarBrand = exports.MDBNavbarBrand = function NavbarBrand(_ref) {
  var className = _ref.className,
    href = _ref.href,
    attributes = _objectWithoutProperties(_ref, _excluded);
  var classes = (0, _classnames["default"])("navbar-brand", className);
  var navbarBrand = function navbarBrand() {
    if (href) {
      return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, _extends({
        to: href
      }, attributes, {
        className: classes
      }));
    } else {
      return /*#__PURE__*/_react["default"].createElement("div", _extends({}, attributes, {
        className: classes
      }));
    }
  };
  return navbarBrand();
};
NavbarBrand.propTypes = {
  className: _propTypes["default"].string,
  href: _propTypes["default"].string
};
var _default = exports["default"] = NavbarBrand;