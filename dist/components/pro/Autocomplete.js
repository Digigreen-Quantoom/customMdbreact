"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBAutocomplete = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _reactAutosuggest = _interopRequireDefault(require("react-autosuggest"));
var _Fa = _interopRequireDefault(require("../Fa"));
var _excluded = ["className", "clear", "clearClass", "data", "disabled", "getValue", "id", "label", "labelClass", "icon", "iconBrand", "iconClass", "iconLight", "iconRegular", "iconSize", "placeholder", "search"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
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
var theme = {
  container: "md-form",
  containerOpen: "react-autosuggest__container--open",
  input: "mdb-autocomplete form-control",
  inputOpen: "react-autosuggest__input--open",
  inputFocused: "react-autosuggest__input--focused",
  suggestionsContainer: "react-autosuggest__suggestions-container",
  suggestionsContainerOpen: "react-autosuggest__suggestions-container--open",
  suggestionsList: "mdb-autocomplete-wrap",
  suggestion: "react-autosuggest__suggestion",
  suggestionFirst: "react-autosuggest__suggestion--first",
  suggestionHighlighted: "react-autosuggest__suggestion--highlighted",
  sectionContainer: "react-autosuggest__section-container",
  sectionContainerFirst: "react-autosuggest__section-container--first",
  sectionTitle: "react-autosuggest__section-title"
};
var Autocomplete = exports.MDBAutocomplete = /*#__PURE__*/function (_Component) {
  function Autocomplete(props) {
    var _this;
    _classCallCheck(this, Autocomplete);
    _this = _callSuper(this, Autocomplete, [props]);
    _defineProperty(_this, "onSuggestionsFetchRequested", function (_ref) {
      var value = _ref.value;
      if (_this.props.search) {
        return;
      }
      _this.setState({
        suggestions: _this.getSuggestions(value)
      });
    });
    _defineProperty(_this, "getSuggestions", function (value) {
      var inputValue = value.toLowerCase();
      var inputLength = inputValue.length;
      return inputLength === 0 ? [] : _this.props.data.filter(function (data) {
        return data.toLowerCase().includes(inputValue);
      });
    });
    _defineProperty(_this, "getSuggestionValue", function (suggestion) {
      if (_this.props.getValue) {
        _this.props.getValue(suggestion);
      }
      return suggestion;
    });
    _defineProperty(_this, "renderSuggestion", function (suggestion) {
      return /*#__PURE__*/_react["default"].createElement("div", null, suggestion);
    });
    _defineProperty(_this, "onChange", function (event, _ref2) {
      var newValue = _ref2.newValue;
      _this.setState({
        value: newValue
      });
      if (_this.props.search) {
        _this.props.search(newValue, _reactDom["default"].findDOMNode(_this).parentNode.parentNode.querySelectorAll("li"));
      }
    });
    _defineProperty(_this, "onSuggestionsClearRequested", function () {
      _this.setState({
        suggestions: []
      });
    });
    _this.state = {
      value: "",
      suggestions: [],
      isTouched: false
    };
    _this.onChange = _this.onChange.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    _this.blurCallback = _this.blurCallback.bind(_this);
    _this.triggerFocus = _this.triggerFocus.bind(_this);
    _this.handleClear = _this.handleClear.bind(_this);
    return _this;
  }
  _inherits(Autocomplete, _Component);
  return _createClass(Autocomplete, [{
    key: "onClick",
    value: function onClick(ev) {
      this.setState({
        isTouched: true
      });
    }
  }, {
    key: "blurCallback",
    value: function blurCallback(ev) {
      this.setState({
        isTouched: false
      });
    }
  }, {
    key: "handleClear",
    value: function handleClear() {
      this.setState({
        value: ""
      });
    }
  }, {
    key: "triggerFocus",
    value: function triggerFocus() {
      var input = document.getElementById(this.props.id);
      input.focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$state = this.state,
        value = _this$state.value,
        suggestions = _this$state.suggestions;
      var _this$props = this.props,
        className = _this$props.className,
        clear = _this$props.clear,
        clearClass = _this$props.clearClass,
        data = _this$props.data,
        disabled = _this$props.disabled,
        getValue = _this$props.getValue,
        id = _this$props.id,
        label = _this$props.label,
        labelClass = _this$props.labelClass,
        icon = _this$props.icon,
        iconBrand = _this$props.iconBrand,
        iconClass = _this$props.iconClass,
        iconLight = _this$props.iconLight,
        iconRegular = _this$props.iconRegular,
        iconSize = _this$props.iconSize,
        placeholder = _this$props.placeholder,
        search = _this$props.search,
        attributes = _objectWithoutProperties(_this$props, _excluded);
      if (disabled) {
        attributes.disabled = true;
      }

      // needed for rendering custom input
      var inputProps = {
        placeholder: placeholder,
        value: value,
        onChange: this.onChange,
        onBlur: this.blurCallback,
        onClick: this.onClick,
        onFocus: this.onFocus,
        id: this.props.id
      };

      // the main variable for classFixes
      var isNotEmpty = Boolean(this.state.value) || placeholder || this.state.isTouched;

      // classFixes:
      var labelClassFix = (0, _classnames["default"])(isNotEmpty && "active", disabled && "disabled", labelClass);
      var iconClassFix = (0, _classnames["default"])("prefix", this.state.isTouched && "active", iconClass);
      var clearClassFix = (0, _classnames["default"])(clearClass);
      var isclearVisible = function isclearVisible() {
        var hiddenOrNot = "hidden";
        if (_this2.state.value) {
          hiddenOrNot = "visible";
        }
        return hiddenOrNot;
      };
      var clearStyleFix = {
        position: "absolute",
        zIndex: 2,
        top: ".85rem",
        right: 0,
        border: "none",
        background: "0 0",
        visibility: isclearVisible()
      };
      var renderInputComponent = function renderInputComponent(inputProps) {
        return /*#__PURE__*/_react["default"].createElement("div", null, icon && /*#__PURE__*/_react["default"].createElement(_Fa["default"], {
          icon: icon,
          size: iconSize,
          brand: iconBrand,
          light: iconLight,
          regular: iconRegular,
          className: iconClassFix
        }), /*#__PURE__*/_react["default"].createElement("input", _extends({
          type: "text",
          id: id,
          className: "form-control"
        }, inputProps, attributes, {
          onFocus: function onFocus(ev, val) {
            _this2.onClick();
            inputProps.onFocus(ev, val);
          }
        })), /*#__PURE__*/_react["default"].createElement("label", {
          htmlFor: id,
          id: "label for ".concat(id),
          onClick: _this2.triggerFocus,
          className: labelClassFix
        }, label), clear && /*#__PURE__*/_react["default"].createElement(_Fa["default"], {
          icon: "close",
          onClick: _this2.handleClear,
          style: clearStyleFix,
          className: clearClassFix
        }));
      };
      return /*#__PURE__*/_react["default"].createElement(_reactAutosuggest["default"], _extends({
        suggestions: suggestions,
        onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
        onSuggestionsClearRequested: this.onSuggestionsClearRequested,
        getSuggestions: this.getSuggestions,
        getSuggestionValue: this.getSuggestionValue,
        onSuggestionSelected: this.blurCallback,
        renderSuggestion: this.renderSuggestion,
        inputProps: inputProps,
        onChange: this.onChange,
        theme: theme,
        renderInputComponent: renderInputComponent,
        focusInputOnSuggestionClick: false
      }, attributes));
    }
  }]);
}(_react.Component);
Autocomplete.propTypes = {
  className: _propTypes["default"].string,
  clear: _propTypes["default"].bool,
  clearClass: _propTypes["default"].string,
  data: _propTypes["default"].arrayOf(_propTypes["default"].string),
  disabled: _propTypes["default"].bool,
  getValue: _propTypes["default"].func,
  id: _propTypes["default"].string,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].object]),
  labelClass: _propTypes["default"].string,
  icon: _propTypes["default"].string,
  iconBrand: _propTypes["default"].bool,
  iconClass: _propTypes["default"].string,
  iconLight: _propTypes["default"].bool,
  iconRegular: _propTypes["default"].bool,
  iconSize: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  search: _propTypes["default"].func
};
Autocomplete.defaultProps = {
  className: "",
  clear: false,
  clearClass: "",
  data: [],
  disabled: false,
  getValue: function getValue() {},
  id: "",
  label: "",
  labelClass: "",
  icon: "",
  iconBrand: false,
  iconClass: "",
  iconLight: false,
  iconRegular: false,
  iconSize: "",
  placeholder: ""
};
var _default = exports["default"] = Autocomplete;