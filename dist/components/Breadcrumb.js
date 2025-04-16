"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBBreadcrumb = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _utils = require("./utils");
var _excluded = ["className", "color", "light", "uppercase", "bold"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var Breadcrumb = exports.MDBBreadcrumb = function Breadcrumb(props) {
  var className = props.className,
    color = props.color,
    light = props.light,
    uppercase = props.uppercase,
    bold = props.bold,
    attributes = _objectWithoutProperties(props, _excluded);
  var classes = (0, _classnames["default"])("breadcrumb", uppercase && "text-uppercase", bold && "font-up-bold", light && "white-text", color && (0, _utils.getColorClass)(color), className);
  var children;
  if (bold) {
    children = _react["default"].Children.map(props.children, function (child) {
      return /*#__PURE__*/_react["default"].cloneElement(child, {
        bold: true
      });
    });
  } else {
    children = props.children;
  }
  return /*#__PURE__*/_react["default"].createElement("nav", null, /*#__PURE__*/_react["default"].createElement("ol", _extends({}, attributes, {
    className: classes
  }), children));
};
Breadcrumb.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  color: _propTypes["default"].string,
  light: _propTypes["default"].bool,
  uppercase: _propTypes["default"].bool,
  bold: _propTypes["default"].bool
};
var _default = exports["default"] = Breadcrumb;