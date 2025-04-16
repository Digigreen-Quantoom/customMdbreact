"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBDataTableHead = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Fa = _interopRequireDefault(require("../Fa"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var DataTableHead = exports.MDBDataTableHead = function DataTableHead(props) {
  var color = props.color,
    columns = props.columns,
    handleSort = props.handleSort,
    scrollX = props.scrollX,
    scrollY = props.scrollY,
    sortable = props.sortable,
    textWhite = props.textWhite;
  var theadClasses = (0, _classnames["default"])(color && (color !== "dark" && color !== "light" ? color : "thead-".concat(color)), textWhite && "text-white");
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, (scrollY || scrollX) && /*#__PURE__*/_react["default"].createElement("colgroup", null, columns.map(function (col) {
    return /*#__PURE__*/_react["default"].createElement("col", {
      key: col.field,
      style: {
        width: "".concat(col.width, "px") || "auto",
        minWidth: "".concat(col.width, "px") || "auto"
      }
    });
  })), /*#__PURE__*/_react["default"].createElement("thead", {
    className: theadClasses || undefined
  }, /*#__PURE__*/_react["default"].createElement("tr", null, columns.map(function (col) {
    return /*#__PURE__*/_react["default"].createElement("th", _extends({
      onClick: function onClick() {
        return sortable && handleSort(col.field, col.sort);
      },
      key: col.field,
      className: col.hasOwnProperty("minimal") ? "th-".concat(col.minimal) : undefined
    }, col.attributes), col.label, sortable && col.sort !== 'disabled' && /*#__PURE__*/_react["default"].createElement(_Fa["default"], {
      icon: "sort",
      className: "float-right",
      "aria-hidden": "true"
    }));
  }))));
};
DataTableHead.propTypes = {
  color: _propTypes["default"].string,
  columns: _propTypes["default"].arrayOf(_propTypes["default"].object),
  handleSort: _propTypes["default"].func,
  scrollX: _propTypes["default"].bool,
  scrollY: _propTypes["default"].bool,
  sortable: _propTypes["default"].bool,
  textWhite: _propTypes["default"].bool
};
DataTableHead.defaultProps = {
  scrollX: false,
  scrollY: false,
  sortable: true,
  textWhite: false
};
var _default = exports["default"] = DataTableHead;