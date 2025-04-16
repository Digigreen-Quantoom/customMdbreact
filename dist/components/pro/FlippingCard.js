"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDBRotatingCard = RotatingCard;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _excluded = ["className", "tag", "innerTag", "flipped"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function RotatingCard(props) {
  var className = props.className,
    Tag = props.tag,
    InnerTag = props.innerTag,
    flipped = props.flipped,
    attributes = _objectWithoutProperties(props, _excluded);
  var classes = (0, _classnames["default"])("card-rotating effect__click", props.flipped && "flipped", className);
  return /*#__PURE__*/_react["default"].createElement(Tag, _extends({}, attributes, {
    className: "card-wrapper"
  }), /*#__PURE__*/_react["default"].createElement(InnerTag, {
    className: classes
  }, props.children));
}
RotatingCard.propTypes = {
  tag: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]),
  innerTag: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]),
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  flipped: _propTypes["default"].bool
};
RotatingCard.defaultProps = {
  tag: "div",
  innerTag: "div",
  flipped: false
};
var _default = exports["default"] = RotatingCard;