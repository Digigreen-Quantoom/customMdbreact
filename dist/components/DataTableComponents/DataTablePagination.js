"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBDataTablePagination = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Pagination = _interopRequireDefault(require("../Pagination"));
var _PageItem = _interopRequireDefault(require("../PageItem"));
var _PageLink = _interopRequireDefault(require("../PageLink"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
var DataTablePagination = exports.MDBDataTablePagination = /*#__PURE__*/function (_Component) {
  function DataTablePagination(props) {
    var _this;
    _classCallCheck(this, DataTablePagination);
    _this = _callSuper(this, DataTablePagination, [props]);
    _defineProperty(_this, "componentDidUpdate", function (prevProps) {
      if (prevProps.pages !== _this.props.pages) {
        _this.setState({
          pages: _this.props.pages
        }, function () {
          return _this.groupPages();
        });
      }
    });
    _defineProperty(_this, "pagesIndexify", function () {
      var mutablePages = _toConsumableArray(_this.state.pages);
      mutablePages.forEach(function (page, index) {
        return page.index = index;
      });
      return mutablePages;
    });
    _defineProperty(_this, "groupPages", function () {
      var pGroups = [];
      var pages = _this.pagesIndexify();
      while (pages.length > 0) {
        pGroups.push(pages.splice(0, _this.props.pagesAmount));
      }
      _this.setState({
        pGroups: pGroups
      });
    });
    _defineProperty(_this, "choosePagesGroup", function () {
      var pGroupNumber = Math.floor(_this.props.activePage / _this.props.pagesAmount);
      return _this.state.pGroups.length ? _this.state.pGroups[pGroupNumber] : [];
    });
    _this.state = {
      pages: props.pages,
      pGroups: []
    };
    return _this;
  }
  _inherits(DataTablePagination, _Component);
  return _createClass(DataTablePagination, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.groupPages();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        activePage = _this$props.activePage,
        changeActivePage = _this$props.changeActivePage,
        pages = _this$props.pages,
        label = _this$props.label;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-sm-12 col-md-7"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "dataTables_paginate"
      }, /*#__PURE__*/_react["default"].createElement(_Pagination["default"], null, /*#__PURE__*/_react["default"].createElement(_PageItem["default"], {
        disabled: activePage === 0
      }, /*#__PURE__*/_react["default"].createElement(_PageLink["default"], {
        className: "page-link",
        "aria-label": label[0],
        onClick: function onClick() {
          return changeActivePage(activePage - 1);
        }
      }, /*#__PURE__*/_react["default"].createElement("span", null, label[0]))), this.choosePagesGroup().map(function (page) {
        return /*#__PURE__*/_react["default"].createElement(_PageItem["default"], {
          key: Object.keys(page[0])[0] + page.index,
          active: page.index === activePage
        }, /*#__PURE__*/_react["default"].createElement(_PageLink["default"], {
          className: "page-link",
          onClick: function onClick() {
            return changeActivePage(page.index);
          }
        }, page.index + 1, " ", page.index === activePage && /*#__PURE__*/_react["default"].createElement("span", {
          className: "sr-only"
        }, "(current)")));
      }), /*#__PURE__*/_react["default"].createElement(_PageItem["default"], {
        disabled: activePage === pages.length - 1
      }, /*#__PURE__*/_react["default"].createElement(_PageLink["default"], {
        className: "page-link",
        "aria-label": label[1],
        onClick: function onClick() {
          return changeActivePage(activePage + 1);
        }
      }, /*#__PURE__*/_react["default"].createElement("span", null, label[1]))))));
    }
  }]);
}(_react.Component);
DataTablePagination.propTypes = {
  activePage: _propTypes["default"].number.isRequired,
  changeActivePage: _propTypes["default"].func.isRequired,
  pages: _propTypes["default"].array.isRequired,
  pagesAmount: _propTypes["default"].number.isRequired,
  label: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired
};
var _default = exports["default"] = DataTablePagination;