"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBDataTableEntries = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _DataTableSelect = _interopRequireDefault(require("../pro/DataTableSelect"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// PRO-START

/*
// PRO-END
import DataTableSelect from './DataTableSelect';
// PRO-START
*/
// PRO-END

var DataTableEntries = exports.MDBDataTableEntries = function DataTableEntries(props) {
  var handleEntriesChange = props.handleEntriesChange,
    entries = props.entries,
    entriesArr = props.entriesArr,
    paging = props.paging,
    label = props.label;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-sm-12 col-md-6"
  }, paging && /*#__PURE__*/_react["default"].createElement(_DataTableSelect["default"], {
    value: entries,
    onChange: handleEntriesChange,
    entries: entriesArr,
    label: label
  }));
};
DataTableEntries.propTypes = {
  handleEntriesChange: _propTypes["default"].func.isRequired,
  entries: _propTypes["default"].number.isRequired,
  entriesArr: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  paging: _propTypes["default"].bool.isRequired,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].object]).isRequired
};
var _default = exports["default"] = DataTableEntries;