"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBDataTableTableScroll = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Table = _interopRequireDefault(require("../Table"));
var _DataTableHead = _interopRequireDefault(require("./DataTableHead"));
var _TableBody = _interopRequireDefault(require("../TableBody"));
var _excluded = ["autoWidth", "bordered", "borderless", "btn", "children", "columns", "dark", "fixed", "hover", "handleSort", "handleTableBodyScroll", "maxHeight", "responsive", "responsiveSm", "responsiveMd", "responsiveLg", "responsiveXl", "rows", "scrollX", "scrollY", "small", "sortable", "striped", "tbodyColor", "tbodyTextWhite", "theadColor", "theadTextWhite", "translateScrollHead"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var DataTableTableScroll = exports.MDBDataTableTableScroll = function DataTableTableScroll(props) {
  var autoWidth = props.autoWidth,
    bordered = props.bordered,
    borderless = props.borderless,
    btn = props.btn,
    children = props.children,
    columns = props.columns,
    dark = props.dark,
    fixed = props.fixed,
    hover = props.hover,
    handleSort = props.handleSort,
    handleTableBodyScroll = props.handleTableBodyScroll,
    maxHeight = props.maxHeight,
    responsive = props.responsive,
    responsiveSm = props.responsiveSm,
    responsiveMd = props.responsiveMd,
    responsiveLg = props.responsiveLg,
    responsiveXl = props.responsiveXl,
    rows = props.rows,
    scrollX = props.scrollX,
    scrollY = props.scrollY,
    small = props.small,
    sortable = props.sortable,
    striped = props.striped,
    tbodyColor = props.tbodyColor,
    tbodyTextWhite = props.tbodyTextWhite,
    theadColor = props.theadColor,
    theadTextWhite = props.theadTextWhite,
    translateScrollHead = props.translateScrollHead,
    attributes = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-sm-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "dataTables_scroll"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "dataTables_scrollHead",
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "dataTables_scrollHeadInner",
    style: {
      position: "relative",
      transform: "translateX(-".concat(translateScrollHead, "px)"),
      boxSizing: "content-box",
      paddingRight: "15px",
      minWidth: "".concat(scrollX ? columns.map(function (col) {
        return col.width;
      }).reduce(function (prev, curr) {
        return prev + curr;
      }, 0) + "px" : "auto")
    }
  }, /*#__PURE__*/_react["default"].createElement(_Table["default"], _extends({
    autoWidth: autoWidth,
    bordered: bordered,
    borderless: borderless,
    btn: btn,
    dark: dark,
    fixed: fixed,
    hover: hover,
    responsive: responsive,
    responsiveSm: responsiveSm,
    responsiveMd: responsiveMd,
    responsiveLg: responsiveLg,
    responsiveXl: responsiveXl,
    small: small,
    striped: striped,
    className: "dataTable"
  }, attributes), /*#__PURE__*/_react["default"].createElement(_DataTableHead["default"], {
    color: theadColor,
    textWhite: theadTextWhite,
    columns: columns,
    handleSort: handleSort,
    scrollX: scrollX,
    scrollY: scrollY,
    sortable: sortable
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dataTable_scrollBody",
    style: {
      overflow: "auto"
    },
    onScroll: handleTableBodyScroll
  }, /*#__PURE__*/_react["default"].createElement(_Table["default"], _extends({
    style: {
      minWidth: "".concat(scrollX ? columns.map(function (col) {
        return col.width;
      }).reduce(function (prev, curr) {
        return prev + curr;
      }, 0) + "px" : "auto")
    },
    autoWidth: autoWidth,
    bordered: bordered,
    borderless: borderless,
    btn: btn,
    dark: dark,
    fixed: fixed,
    hover: hover,
    maxHeight: maxHeight,
    responsive: responsive,
    responsiveSm: responsiveSm,
    responsiveMd: responsiveMd,
    responsiveLg: responsiveLg,
    responsiveXl: responsiveXl,
    scrollY: scrollY,
    small: small,
    striped: striped,
    className: "dataTable"
  }, attributes), /*#__PURE__*/_react["default"].createElement("colgroup", null, columns.map(function (col) {
    return /*#__PURE__*/_react["default"].createElement("col", {
      key: col.field,
      style: {
        width: "".concat(col.width, "px") || "auto",
        minWidth: "".concat(col.width, "px") || "auto"
      }
    });
  })), /*#__PURE__*/_react["default"].createElement(_TableBody["default"], {
    color: tbodyColor,
    textWhite: tbodyTextWhite,
    rows: rows
  }), children))));
};
DataTableTableScroll.propTypes = {
  autoWidth: _propTypes["default"].bool.isRequired,
  bordered: _propTypes["default"].bool.isRequired,
  borderless: _propTypes["default"].bool.isRequired,
  btn: _propTypes["default"].bool.isRequired,
  dark: _propTypes["default"].bool.isRequired,
  fixed: _propTypes["default"].bool.isRequired,
  hover: _propTypes["default"].bool.isRequired,
  handleSort: _propTypes["default"].func.isRequired,
  handleTableBodyScroll: _propTypes["default"].func.isRequired,
  responsive: _propTypes["default"].bool.isRequired,
  responsiveSm: _propTypes["default"].bool.isRequired,
  responsiveMd: _propTypes["default"].bool.isRequired,
  responsiveLg: _propTypes["default"].bool.isRequired,
  responsiveXl: _propTypes["default"].bool.isRequired,
  sortable: _propTypes["default"].bool.isRequired,
  small: _propTypes["default"].bool.isRequired,
  striped: _propTypes["default"].bool.isRequired,
  theadColor: _propTypes["default"].string.isRequired,
  theadTextWhite: _propTypes["default"].bool.isRequired,
  tbodyColor: _propTypes["default"].string.isRequired,
  tbodyTextWhite: _propTypes["default"].bool.isRequired,
  translateScrollHead: _propTypes["default"].number.isRequired,
  columns: _propTypes["default"].arrayOf(_propTypes["default"].object),
  rows: _propTypes["default"].arrayOf(_propTypes["default"].object),
  children: _propTypes["default"].node,
  maxHeight: _propTypes["default"].string,
  scrollX: _propTypes["default"].bool,
  scrollY: _propTypes["default"].bool
};
var _default = exports["default"] = DataTableTableScroll;