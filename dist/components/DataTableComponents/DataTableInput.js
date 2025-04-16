"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBDataTableInput = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var DataTableInput = exports.MDBDataTableInput = function DataTableInput(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    label = _ref.label;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dataTables_filter"
  }, /*#__PURE__*/_react["default"].createElement("label", null, label || "Search", /*#__PURE__*/_react["default"].createElement("input", {
    value: value,
    onChange: onChange,
    type: "search",
    className: "form-control form-control-sm",
    placeholder: label || "Search"
  })));
};
DataTableInput.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].object]),
  onChange: _propTypes["default"].func,
  value: _propTypes["default"].string
};
var _default = exports["default"] = DataTableInput;