"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBProgress = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Progress = exports.MDBProgress = function Progress(_ref) {
  var animated = _ref.animated,
    barClassName = _ref.barClassName,
    children = _ref.children,
    className = _ref.className,
    color = _ref.color,
    height = _ref.height,
    material = _ref.material,
    max = _ref.max,
    min = _ref.min,
    preloader = _ref.preloader,
    striped = _ref.striped,
    wrapperStyle = _ref.wrapperStyle,
    value = _ref.value,
    attributes = _ref.attributes;
  var percent = (value - min) / (max - min) * 100;
  var progressClasses = (0, _classnames["default"])("progress", material && "md-progress", preloader && (color ? color + "-color" : "primary-color") + "-dark", className);
  var progressBarClasses = (0, _classnames["default"])(preloader ? "indeterminate" : "progress-bar", barClassName ? barClassName : null, animated ? "progress-bar-animated" : null, color ? "bg-".concat(color) : null, striped || animated ? "progress-bar-striped" : null);
  var computedHeight = height ? height : children && "1rem";
  var computedWrapperStyle = _objectSpread(_objectSpread({}, wrapperStyle), {}, {
    height: computedHeight
  });
  return /*#__PURE__*/_react["default"].createElement("div", _extends({}, attributes, {
    className: progressClasses,
    style: computedWrapperStyle
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: progressBarClasses,
    style: {
      width: "".concat(percent, "%"),
      height: computedHeight
    },
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": min,
    "aria-valuemax": max
  }, children));
};
Progress.propTypes = {
  animated: _propTypes["default"].bool,
  barClassName: _propTypes["default"].string,
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  color: _propTypes["default"].string,
  height: _propTypes["default"].string,
  material: _propTypes["default"].bool,
  max: _propTypes["default"].number,
  min: _propTypes["default"].number,
  preloader: _propTypes["default"].bool,
  striped: _propTypes["default"].bool,
  wrapperStyle: _propTypes["default"].object,
  value: _propTypes["default"].number
};
Progress.defaultProps = {
  animated: false,
  barClassName: "",
  className: "",
  color: "indigo",
  height: "",
  material: false,
  max: 100,
  min: 0,
  preloader: false,
  striped: false,
  wrapperStyle: {},
  value: 0
};
var _default = exports["default"] = Progress;