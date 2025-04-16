"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBDropdownMenuComponent = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var DropdownMenuComponent = exports.MDBDropdownMenuComponent = function DropdownMenuComponent(props) {
  var d_tag = props.d_tag,
    d_tabIndex = props.d_tabIndex,
    d_role = props.d_role,
    d_attributes = props.d_attributes,
    d_aria = props.d_aria,
    d_classes = props.d_classes,
    d_key = props.d_key,
    children = props.children;
  var Tag = d_tag;
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(Tag, _extends({
    tabIndex: d_tabIndex,
    role: d_role
  }, d_attributes, {
    "aria-hidden": d_aria,
    className: d_classes,
    key: d_key
  }), children));
};
DropdownMenuComponent.propTypes = {
  d_aria: _propTypes["default"].bool.isRequired,
  d_attributes: _propTypes["default"].object.isRequired,
  d_key: _propTypes["default"].string.isRequired,
  d_role: _propTypes["default"].string.isRequired,
  d_tabIndex: _propTypes["default"].string.isRequired,
  d_tag: _propTypes["default"].any.isRequired,
  children: _propTypes["default"].node.isRequired,
  d_classes: _propTypes["default"].string
};
DropdownMenuComponent.defaultProps = {
  d_classes: ""
};
var _default = exports["default"] = DropdownMenuComponent;