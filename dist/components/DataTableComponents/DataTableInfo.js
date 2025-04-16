"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBDataTableInfo = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var DataTableInfo = exports.MDBDataTableInfo = function DataTableInfo(props) {
  var activePage = props.activePage,
    entries = props.entries,
    filteredRows = props.filteredRows,
    info = props.info,
    pages = props.pages,
    label = props.label;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-sm-12 col-md-5"
  }, info && /*#__PURE__*/_react["default"].createElement("div", {
    className: "dataTables_info",
    role: "status",
    "aria-live": "polite"
  }, label[0], " ", activePage > 0 ? activePage * entries + 1 : activePage + 1, " ", label[1], " ", pages.length - 1 > activePage ? pages[activePage].length * (activePage + 1) : filteredRows.length, " ", label[2], " ", filteredRows.length, " ", label[3]));
};
DataTableInfo.propTypes = {
  activePage: _propTypes["default"].number.isRequired,
  entries: _propTypes["default"].number.isRequired,
  filteredRows: _propTypes["default"].array.isRequired,
  info: _propTypes["default"].bool.isRequired,
  pages: _propTypes["default"].array.isRequired,
  label: _propTypes["default"].arrayOf(_propTypes["default"].string)
};
DataTableInfo.defaultProps = {
  label: ["Showing", "to", "of", "entries"]
};
var _default = exports["default"] = DataTableInfo;