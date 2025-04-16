"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBTimeline = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Timeline.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Timeline = exports.MDBTimeline = function Timeline(props) {
  var children = props.children;
  return /*#__PURE__*/_react["default"].createElement("ul", {
    className: "stepper stepper-vertical timeline pl-0"
  }, children);
};
var _default = exports["default"] = Timeline;