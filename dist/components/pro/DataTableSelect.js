"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBDataTableSelect = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Select = _interopRequireDefault(require("./Select"));
var _SelectInput = _interopRequireDefault(require("./SelectInput"));
var _SelectOptions = _interopRequireDefault(require("./SelectOptions"));
var _SelectOption = _interopRequireDefault(require("./SelectOption"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var DataTableSelect = exports.MDBDataTableSelect = function DataTableSelect(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    entries = _ref.entries,
    label = _ref.label;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dataTables_length d-flex flex-row"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "mt-4"
  }, label), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    getValue: onChange
  }, /*#__PURE__*/_react["default"].createElement(_SelectInput["default"], {
    selected: value
  }), /*#__PURE__*/_react["default"].createElement(_SelectOptions["default"], null, entries.map(function (entry, index) {
    return /*#__PURE__*/_react["default"].createElement(_SelectOption["default"], {
      checked: index === 0,
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