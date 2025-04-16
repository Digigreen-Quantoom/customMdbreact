"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBSimpleChart = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SimpleChart = exports.MDBSimpleChart = function SimpleChart(props) {
  var polarToCartesian = function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
    };
  };
  var describeArc = function describeArc(x, y, radius, startAngle, endAngle) {
    if (!x || !y) console.error('x or y missing to describeArc');
    var start = polarToCartesian(x, y, radius, endAngle),
      end = polarToCartesian(x, y, radius, startAngle),
      arcSweep = endAngle - startAngle <= 180 ? "0" : "1";
    return ["M", start.x, start.y, "A", radius, radius, 0, arcSweep, 0, end.x, end.y].join(" ");
  };
  var percent = Math.min(props.percent || 0, 100),
    radius = props.width / 2 - props.strokeWidth / 2 - props.padding,
    center = radius + props.strokeWidth / 2 + props.padding,
    startAngle = 0,
    endAngle = 3.6 * percent,
    label = "".concat(percent, "%"),
    labelLeftOffset = label.length === 3 || label.length === 4 ? -0.95 : -0.6,
    arc = describeArc(center, center, radius, startAngle, endAngle - .001);
  return /*#__PURE__*/_react["default"].createElement("svg", {
    className: "react-chart ".concat(props.type),
    width: props.width,
    style: _objectSpread({
      overflow: 'visible',
      border: props.border
    }, props.style),
    height: props.height
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: center,
    cy: center,
    r: radius,
    fill: props.fillColor,
    stroke: props.railColor,
    strokeWidth: props.strokeWidth
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: props.fillColor,
    stroke: props.strokeColor,
    strokeWidth: props.strokeWidth,
    d: arc
  }), /*#__PURE__*/_react["default"].createElement("text", {
    x: center,
    y: center,
    dx: "".concat(labelLeftOffset, "em"),
    dy: ".35em",
    fill: props.labelColor,
    fontWeight: props.labelFontWeight,
    fontSize: props.labelFontSize
  }, label));
};
SimpleChart.defaultProps = {
  width: 150,
  height: 150,
  border: 'none',
  strokeWidth: 10,
  style: {},
  labelColor: '#408AE5',
  labelFontSize: '1.2em',
  labelFontWeight: 'bold',
  strokeColor: '#408AE5',
  railColor: '#f5f5f5',
  fillColor: 'none',
  percent: 70,
  padding: 0
};
SimpleChart.propTypes = {
  width: _propTypes["default"].number,
  height: _propTypes["default"].number,
  strokeWidth: _propTypes["default"].number,
  strokeColor: _propTypes["default"].string,
  labelFontWeight: _propTypes["default"].string,
  labelFontSize: _propTypes["default"].string,
  fillColor: _propTypes["default"].string,
  startAngle: _propTypes["default"].number,
  endAngle: _propTypes["default"].number,
  radius: _propTypes["default"].number,
  style: _propTypes["default"].object
};
var _default = exports["default"] = SimpleChart;