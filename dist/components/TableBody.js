"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBTableBody = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _excluded = ["children", "color", "rows", "textWhite"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var TableBody = exports.MDBTableBody = function TableBody(props) {
  var children = props.children,
    color = props.color,
    rows = props.rows,
    textWhite = props.textWhite,
    attributes = _objectWithoutProperties(props, _excluded);
  var classes = (0, _classnames["default"])(color, {
    "text-white": textWhite
  });
  return /*#__PURE__*/_react["default"].createElement("tbody", _extends({}, attributes, {
    className: classes || undefined
  }), rows && rows.map(function (row, index) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      onClick: row.hasOwnProperty("clickEvent") ? row.clickEvent : undefined,
      key: index
    }, Object.keys(row).map(function (key, index, array) {
      if (key === "clickEvent") return null;
      if (key !== "colspan") {
        return array[index + 1] !== "colspan" ? /*#__PURE__*/_react["default"].createElement("td", {
          key: key
        }, row[key]) : null;
      } else {
        return /*#__PURE__*/_react["default"].createElement("td", {
          key: key,
          colSpan: row[key]
        }, row[array[index - 1]]);
      }
    }));
  }), children);
};
TableBody.propTypes = {
  children: _propTypes["default"].node,
  color: _propTypes["default"].string,
  rows: _propTypes["default"].arrayOf(_propTypes["default"].object),
  textWhite: _propTypes["default"].bool
};
TableBody.defaultProps = {
  textWhite: false
};
var _default = exports["default"] = TableBody;