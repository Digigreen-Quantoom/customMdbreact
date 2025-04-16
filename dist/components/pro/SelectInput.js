"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBSelectInput = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _SelectContext = _interopRequireDefault(require("./SelectContext"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SelectInput = exports.MDBSelectInput = function SelectInput(_ref) {
  var attributes = _ref.attributes,
    className = _ref.className,
    context = _ref.context,
    selected = _ref.selected;
  var classes = (0, _classnames["default"])("select-dropdown", className);
  return /*#__PURE__*/_react["default"].createElement("input", _extends({
    type: "text",
    readOnly: true,
    value: context.state.selectTextContent ? context.state.selectTextContent : selected
  }, attributes, {
    className: classes
  }));
};
SelectInput.propTypes = {
  context: _propTypes["default"].object.isRequired,
  className: _propTypes["default"].string,
  selected: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
SelectInput.defaultProps = {
  className: "",
  selected: "Choose your option"
};
var _default = exports["default"] = exports.MDBSelectInput = SelectInput = (0, _SelectContext["default"])(SelectInput);