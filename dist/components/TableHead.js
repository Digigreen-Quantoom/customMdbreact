"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBTableHead = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _excluded = ["children", "color", "columns", "textWhite"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var TableHead = exports.MDBTableHead = function TableHead(props) {
  var children = props.children,
    color = props.color,
    columns = props.columns,
    textWhite = props.textWhite,
    attributes = _objectWithoutProperties(props, _excluded);
  var classes = (0, _classnames["default"])(color !== "dark" && color !== "light" ? color : "thead-".concat(color), {
    "text-white": textWhite
  });
  return /*#__PURE__*/_react["default"].createElement("thead", _extends({}, attributes, {
    className: classes
  }), columns && /*#__PURE__*/_react["default"].createElement("tr", null, columns.map(function (col) {
    return /*#__PURE__*/_react["default"].createElement("th", {
      key: col.field,
      className: col.hasOwnProperty("minimal") ? "th-".concat(col.minimal) : ""
    }, col.label);
  })), children);
};
TableHead.propTypes = {
  children: _propTypes["default"].node,
  color: _propTypes["default"].string,
  columns: _propTypes["default"].arrayOf(_propTypes["default"].object),
  textWhite: _propTypes["default"].bool
};
TableHead.defaultProps = {
  textWhite: false
};
var _default = exports["default"] = TableHead;