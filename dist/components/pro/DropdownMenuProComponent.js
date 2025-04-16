"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBDropdownMenuProComponent = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactTransitionGroup = require("react-transition-group");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var DropdownMenuProComponent = exports.MDBDropdownMenuProComponent = function DropdownMenuProComponent(props) {
  var isOpen = props.isOpen,
    d_tag = props.d_tag,
    d_tabIndex = props.d_tabIndex,
    d_role = props.d_role,
    d_attributes = props.d_attributes,
    d_aria = props.d_aria,
    d_classes = props.d_classes,
    d_key = props.d_key,
    children = props.children;
  var Tag = d_tag;
  return /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.CSSTransition, {
    "in": isOpen,
    appear: isOpen,
    classNames: "popover",
    unmountOnExit: true,
    timeout: {
      enter: 300,
      exit: 300
    }
  }, /*#__PURE__*/_react["default"].createElement(Tag, _extends({
    tabIndex: d_tabIndex,
    role: d_role
  }, d_attributes, {
    "aria-hidden": d_aria,
    className: d_classes,
    key: d_key
  }), children));
};
DropdownMenuProComponent.propTypes = {
  d_aria: _propTypes["default"].bool.isRequired,
  d_attributes: _propTypes["default"].object.isRequired,
  d_key: _propTypes["default"].string.isRequired,
  d_role: _propTypes["default"].string.isRequired,
  d_tabIndex: _propTypes["default"].string.isRequired,
  d_tag: _propTypes["default"].any.isRequired,
  isOpen: _propTypes["default"].bool.isRequired,
  children: _propTypes["default"].node.isRequired,
  d_classes: _propTypes["default"].string
};
DropdownMenuProComponent.defaultProps = {
  d_classes: ""
};
var _default = exports["default"] = DropdownMenuProComponent;