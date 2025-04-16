"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBTableEditable = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
require("./DataTable.css");
var _Fa = _interopRequireDefault(require("../Fa"));
var _excluded = ["className", "small", "bordered", "striped", "hover", "data", "columns", "responsive", "responsiveSm", "responsiveMd", "responsiveLg", "responsiveXl"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var TableEditable = exports.MDBTableEditable = /*#__PURE__*/function (_React$Component) {
  function TableEditable() {
    var _this;
    _classCallCheck(this, TableEditable);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, TableEditable, [].concat(args));
    _defineProperty(_this, "state", {
      data: []
    });
    _defineProperty(_this, "componentDidMount", function () {
      _this.props.data && _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
        data: _this.props.data
      }));
    });
    _defineProperty(_this, "addRow", function () {
      var newData = _toConsumableArray(_this.state.data);
      var newRow = [];
      _this.props.columns.forEach(function () {
        newRow.push("");
      });
      newData.push(newRow);
      _this.setState(_objectSpread(_objectSpread({}, _this.state.data), {}, {
        data: newData
      }));
    });
    _defineProperty(_this, "removeRow", function (index) {
      var newData = _toConsumableArray(_this.state.data);
      newData = [].concat(_toConsumableArray(newData.slice(0, index)), _toConsumableArray(newData.slice(index + 1)));
      _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
        data: newData
      }));
    });
    _defineProperty(_this, "decreaseIndex", function (index) {
      if (index === 0) return;
      var newData = _this.changeArrayOrder(index, index - 1);
      _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
        data: newData
      }));
    });
    _defineProperty(_this, "increaseIndex", function (index) {
      if (index === _this.state.data.length - 1) return;
      var newData = _this.changeArrayOrder(index, index + 1);
      _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
        data: newData
      }));
    });
    _defineProperty(_this, "changeArrayOrder", function (oldIndex, newIndex) {
      var array = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _toConsumableArray(_this.state.data);
      var newArray = array;
      var oldIndexValue = _toConsumableArray(newArray[oldIndex]);
      var newIndexValue = _toConsumableArray(newArray[newIndex]);
      newArray.splice(oldIndex, 1, newIndexValue);
      newArray.splice(newIndex, 1, oldIndexValue);
      return newArray;
    });
    _defineProperty(_this, "onBlurHandler", function (trIndex, tdIndex, e) {
      var value = e.target.innerText;
      var newData = _toConsumableArray(_this.state.data);
      newData = newData.map(function (item, index) {
        if (index !== trIndex) {
          return item;
        }
        return item.map(function (tdItem, index) {
          if (index !== tdIndex) {
            return tdItem;
          }
          return tdItem = value;
        });
      });
      _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
        data: newData
      }));
    });
    return _this;
  }
  _inherits(TableEditable, _React$Component);
  return _createClass(TableEditable, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        className = _this$props.className,
        small = _this$props.small,
        bordered = _this$props.bordered,
        striped = _this$props.striped,
        hover = _this$props.hover,
        data = _this$props.data,
        columns = _this$props.columns,
        responsive = _this$props.responsive,
        responsiveSm = _this$props.responsiveSm,
        responsiveMd = _this$props.responsiveMd,
        responsiveLg = _this$props.responsiveLg,
        responsiveXl = _this$props.responsiveXl,
        attributes = _objectWithoutProperties(_this$props, _excluded);
      var classes = (0, _classnames["default"])("table", small && "table-sm", bordered && "table-bordered", striped && "table-striped", hover && "table-hover", className);
      var wrapperClasses = (0, _classnames["default"])("table-editable text-center", responsive && "table-responsive", responsiveSm && "table-responsive-sm", responsiveMd && "table-responsive-md", responsiveLg && "table-responsive-lg", responsiveXl && "table-responsive-xl");
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: wrapperClasses
      }, /*#__PURE__*/_react["default"].createElement("span", {
        onClick: this.addRow,
        className: "table-add float-right mb-3 mr-2"
      }, /*#__PURE__*/_react["default"].createElement("a", {
        href: "#!",
        className: "text-success"
      }, /*#__PURE__*/_react["default"].createElement(_Fa["default"], {
        icon: "plus",
        size: "2x"
      }))), /*#__PURE__*/_react["default"].createElement("table", _extends({}, attributes, {
        className: classes
      }), /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, this.props.columns && this.props.columns.map(function (th, i) {
        return /*#__PURE__*/_react["default"].createElement("th", {
          key: i
        }, th);
      }), /*#__PURE__*/_react["default"].createElement("th", null, "Sort "), /*#__PURE__*/_react["default"].createElement("th", null, "Delete "))), /*#__PURE__*/_react["default"].createElement("tbody", null, this.state.data.map(function (tr, trIndex) {
        return /*#__PURE__*/_react["default"].createElement("tr", {
          key: trIndex
        }, tr.map(function (td, tdIndex) {
          return /*#__PURE__*/_react["default"].createElement("td", {
            key: tdIndex,
            contentEditable: true,
            suppressContentEditableWarning: "true",
            onBlur: function onBlur(e) {
              return _this2.onBlurHandler(trIndex, tdIndex, e);
            }
          }, td);
        }), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("span", {
          onClick: function onClick() {
            return _this2.decreaseIndex(trIndex);
          },
          className: "table-up"
        }, /*#__PURE__*/_react["default"].createElement("a", {
          href: "#!",
          className: "indigo-text"
        }, /*#__PURE__*/_react["default"].createElement(_Fa["default"], {
          icon: "long-arrow-alt-up"
        }))), /*#__PURE__*/_react["default"].createElement("span", {
          onClick: function onClick() {
            return _this2.increaseIndex(trIndex);
          },
          className: "table-down"
        }, /*#__PURE__*/_react["default"].createElement("a", {
          href: "#!",
          className: "indigo-text"
        }, /*#__PURE__*/_react["default"].createElement(_Fa["default"], {
          icon: "long-arrow-alt-down"
        })))), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("span", {
          onClick: function onClick() {
            return _this2.removeRow(trIndex);
          },
          className: "table-remove"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          type: "button",
          className: "btn btn-danger btn-rounded btn-sm my-0"
        }, "Remove"))));
      }))));
    }
  }]);
}(_react["default"].Component);
TableEditable.propTypes = {
  className: _propTypes["default"].string,
  small: _propTypes["default"].bool,
  bordered: _propTypes["default"].bool,
  striped: _propTypes["default"].bool,
  hover: _propTypes["default"].bool,
  data: _propTypes["default"].array,
  columns: _propTypes["default"].array,
  children: _propTypes["default"].node,
  responsive: _propTypes["default"].bool,
  responsiveSm: _propTypes["default"].bool,
  responsiveMd: _propTypes["default"].bool,
  responsiveLg: _propTypes["default"].bool,
  responsiveXl: _propTypes["default"].bool
};
var _default = exports["default"] = TableEditable;