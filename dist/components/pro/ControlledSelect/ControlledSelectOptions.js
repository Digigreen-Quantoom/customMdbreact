"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Input = _interopRequireDefault(require("../../Input"));
var _ControlledSelectOption = _interopRequireDefault(require("./ControlledSelectOption"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
var ControlledSelectOptions = /*#__PURE__*/function (_Component) {
  function ControlledSelectOptions(props) {
    var _this;
    _classCallCheck(this, ControlledSelectOptions);
    _this = _callSuper(this, ControlledSelectOptions, [props]);
    _defineProperty(_this, "search", function (value) {
      var filteredOptions = _this.state.options.filter(function (option) {
        if (option.text) {
          return option.text.toLowerCase().match(value.toLowerCase());
        } else {
          return option.value.toLowerCase().match(value.toLowerCase());
        }
      });
      _this.setState({
        filteredOptions: filteredOptions
      });
    });
    _this.state = {
      filteredOptions: _this.props.options || [],
      options: _this.props.options || [],
      searchValue: ""
    };
    return _this;
  }
  _inherits(ControlledSelectOptions, _Component);
  return _createClass(ControlledSelectOptions, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options !== this.props.options) {
        this.setState({
          filteredOptions: this.props.options,
          options: this.props.options
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        multiple = _this$props.multiple,
        search = _this$props.search,
        searchLabel = _this$props.searchLabel,
        searchId = _this$props.searchId,
        selected = _this$props.selected,
        selectOption = _this$props.selectOption;
      var classes = (0, _classnames["default"])("dropdown-content", "select-dropdown", "fadeElement");
      return /*#__PURE__*/_react["default"].createElement("ul", {
        className: classes
      }, search && /*#__PURE__*/_react["default"].createElement(_Input["default"], {
        label: searchLabel,
        id: searchId,
        getValue: this.search,
        "data-search": "true"
      }), /*#__PURE__*/_react["default"].createElement(_ControlledSelectOption["default"], {
        checked: false,
        disabled: true,
        icon: null,
        value: selected
      }), this.state.filteredOptions.map(function (option, index) {
        return /*#__PURE__*/_react["default"].createElement(_ControlledSelectOption["default"], {
          key: "".concat(option.value, "-").concat(index),
          checked: option.checked,
          disabled: option.disabled,
          multiple: multiple,
          icon: option.icon,
          text: option.text,
          value: option.value,
          selectOption: selectOption
        });
      }));
    }
  }]);
}(_react.Component);
ControlledSelectOptions.propTypes = {
  selected: _propTypes["default"].string.isRequired,
  selectOption: _propTypes["default"].func.isRequired,
  multiple: _propTypes["default"].bool,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    checked: _propTypes["default"].bool,
    disabled: _propTypes["default"].bool,
    icon: _propTypes["default"].string,
    text: _propTypes["default"].string,
    value: _propTypes["default"].string
  })),
  search: _propTypes["default"].bool,
  searchLabel: _propTypes["default"].string,
  searchId: _propTypes["default"].string
};
ControlledSelectOptions.defaultProps = {
  multiple: false,
  options: [],
  search: false,
  searchLabel: "Search",
  searchId: "selectSearchInput"
};
var _default = exports["default"] = ControlledSelectOptions;