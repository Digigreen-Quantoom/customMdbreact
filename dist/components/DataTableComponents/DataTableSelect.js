"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBDataTableSelect = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var DataTableSelect = exports.MDBDataTableSelect = function DataTableSelect(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    entries = _ref.entries,
    label = _ref.label;
  var getValue = function getValue(e) {
    var value = parseInt(e.target.value, 10);
    onChange(value);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dataTables_length bs-select"
  }, /*#__PURE__*/_react["default"].createElement("label", null, label, /*#__PURE__*/_react["default"].createElement("select", {
    value: value,
    onChange: getValue,
    className: "custom-select custom-select-sm form-control form-control-sm"
  }, entries.map(function (entry) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: entry,
      value: entry
    }, entry);
  }))));
};
DataTableSelect.propTypes = {
  entries: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].object]).isRequired,
  onChange: _propTypes["default"].func.isRequired,
  value: _propTypes["default"].number.isRequired
};
var _default = exports["default"] = DataTableSelect;