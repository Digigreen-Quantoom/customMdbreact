"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBDataTableSearch = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _DataTableInput = _interopRequireDefault(require("../pro/DataTableInput"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// PRO-START

/*
// PRO-END
import DataTableInput from './DataTableInput';
// PRO-START
*/
// PRO-END

var DataTableSearch = exports.MDBDataTableSearch = function DataTableSearch(props) {
  var handleSearchChange = props.handleSearchChange,
    search = props.search,
    searching = props.searching,
    label = props.label;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-sm-12 col-md-6"
  }, searching && /*#__PURE__*/_react["default"].createElement(_DataTableInput["default"], {
    value: search,
    onChange: handleSearchChange,
    label: label
  }));
};
DataTableSearch.propTypes = {
  handleSearchChange: _propTypes["default"].func.isRequired,
  search: _propTypes["default"].string.isRequired,
  searching: _propTypes["default"].bool.isRequired,
  label: _propTypes["default"].string
};
var _default = exports["default"] = DataTableSearch;