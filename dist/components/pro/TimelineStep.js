"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBTimelineStep = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Fa = _interopRequireDefault(require("../Fa"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var TimelineStep = exports.MDBTimelineStep = function TimelineStep(props) {
  var href = props.href,
    color = props.color,
    icon = props.icon,
    iconBrand = props.iconBrand,
    iconClass = props.iconClass,
    iconLight = props.iconLight,
    iconRegular = props.iconRegular,
    iconSize = props.iconSize,
    className = props.className,
    children = props.children,
    inverted = props.inverted,
    colorful = props.colorful,
    hoverable = props.hoverable,
    label = props.label;
  var circleClasses = (0, _classnames["default"])("circle", "z-depth-1-half", color ? color : "primary-color", className);
  var stepContentClasses = (0, _classnames["default"])("step-content", "z-depth-1", "ml-xl-0", colorful ? "p-0 mt-2" : "p-4", hoverable && "hoverable");
  var liClasses = (0, _classnames["default"])(inverted && "timeline-inverted");
  return /*#__PURE__*/_react["default"].createElement("li", {
    className: liClasses
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: href
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: circleClasses
  }, icon && /*#__PURE__*/_react["default"].createElement(_Fa["default"], {
    icon: icon,
    size: iconSize,
    brand: iconBrand,
    light: iconLight,
    regular: iconRegular,
    className: iconClass
  }), label)), /*#__PURE__*/_react["default"].createElement("div", {
    className: stepContentClasses
  }, children));
};
TimelineStep.propTypes = {
  href: _propTypes["default"].string,
  color: _propTypes["default"].string,
  size: _propTypes["default"].string,
  icon: _propTypes["default"].string,
  iconBrand: _propTypes["default"].bool,
  iconClass: _propTypes["default"].string,
  iconLight: _propTypes["default"].bool,
  iconRegular: _propTypes["default"].bool,
  iconSize: _propTypes["default"].string,
  className: _propTypes["default"].string
};
TimelineStep.defaultProps = {
  href: "#"
};
var _default = exports["default"] = TimelineStep;