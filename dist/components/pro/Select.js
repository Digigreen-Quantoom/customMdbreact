"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SelectContext = exports.MDBSelect = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _ControlledSelectInput = _interopRequireDefault(require("./ControlledSelect/ControlledSelectInput"));
var _ControlledSelectOptions = _interopRequireDefault(require("./ControlledSelect/ControlledSelectOptions"));
var _excluded = ["className", "color", "children", "getTextContent", "getValue", "multiple", "search", "searchLabel", "searchId", "selected"];
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
var SelectContext = exports.SelectContext = /*#__PURE__*/_react["default"].createContext();
var Select = exports.MDBSelect = /*#__PURE__*/function (_React$Component) {
  function Select(props) {
    var _this;
    _classCallCheck(this, Select);
    _this = _callSuper(this, Select, [props]);
    _defineProperty(_this, "computeValuesAndText", function (options) {
      var checkedOptions = options.filter(function (option) {
        return option.checked;
      }).map(function (option) {
        return {
          value: option.value,
          text: option.text ? option.text : option.value
        };
      });
      var checkedValues = checkedOptions.map(function (opt) {
        return opt.value;
      });
      var checkedTexts = checkedOptions.map(function (opt) {
        return opt.text ? opt.text : opt.value;
      });
      return {
        selectValue: checkedValues,
        selectTextContent: checkedTexts.length ? checkedTexts.join(", ") : _this.props.selected,
        options: options
      };
    });
    _defineProperty(_this, "renderPreselectedOptions", function () {
      return _this.setState(function (prevState) {
        return _this.computeValuesAndText(_toConsumableArray(prevState.options));
      });
    });
    _defineProperty(_this, "triggerOptionChange", function (value, text) {
      Array.isArray(text) && (text = text.join(", "));
      _this.setState({
        selectValue: value,
        selectTextContent: text
      });
    });
    // close all select dropdown (unless it has multiple property or search input)
    // open nieghbour ul of clicked input
    _defineProperty(_this, "onClick", function (e) {
      if (e.target.dataset.multiple === "true" || e.target.dataset.search === "true") return;
      _this.closeDropdowns();
      e.target.nextElementSibling && e.target.nextElementSibling.classList.add("fadeIn");
    });
    _defineProperty(_this, "closeDropdowns", function () {
      var dropdowns = document.querySelectorAll(".dropdown-content");
      dropdowns.forEach(function (dropdown) {
        return dropdown.classList.contains("fadeIn") && dropdown.classList.remove("fadeIn");
      });
    });
    _defineProperty(_this, "selectOneOption", function (value) {
      _this.setState(function (prevState) {
        var options = _toConsumableArray(prevState.options);
        var optionIndex = options.findIndex(function (option) {
          return option.value === value;
        });
        options[optionIndex].checked = true;
        options.forEach(function (option, index) {
          return index !== optionIndex ? option.checked = false : false;
        });
        return {
          selectValue: [options[optionIndex].value],
          selectTextContent: options[optionIndex].text ? options[optionIndex].text : options[optionIndex].value,
          options: options
        };
      });
    });
    _defineProperty(_this, "selectMultipleOptions", function (value) {
      _this.setState(function (prevState) {
        var options = _toConsumableArray(prevState.options);
        var optionIndex = options.findIndex(function (option) {
          return option.value === value;
        });
        options[optionIndex].checked = !prevState.options[optionIndex].checked;
        return _this.computeValuesAndText(options);
      });
    });
    _defineProperty(_this, "selectOption", function (value) {
      if (_this.props.multiple) {
        _this.selectMultipleOptions(value);
      } else {
        _this.selectOneOption(value);
      }
    });
    _defineProperty(_this, "returnComponentContent", function () {
      var _this$props = _this.props,
        className = _this$props.className,
        color = _this$props.color,
        children = _this$props.children,
        getTextContent = _this$props.getTextContent,
        getValue = _this$props.getValue,
        multiple = _this$props.multiple,
        search = _this$props.search,
        searchLabel = _this$props.searchLabel,
        searchId = _this$props.searchId,
        selected = _this$props.selected,
        attributes = _objectWithoutProperties(_this$props, _excluded);
      var classes = (0, _classnames["default"])("select-wrapper md-form", _this.props.color ? "colorful-select dropdown-" + _this.props.color : "", className);
      if (!_this.props.children) {
        return /*#__PURE__*/_react["default"].createElement("div", _extends({}, attributes, {
          "data-color": color,
          "data-multiple": multiple,
          className: classes
        }), /*#__PURE__*/_react["default"].createElement("span", {
          className: "caret"
        }, "\u25BC"), /*#__PURE__*/_react["default"].createElement(_ControlledSelectInput["default"], {
          value: _this.state.selectTextContent
        }), /*#__PURE__*/_react["default"].createElement(_ControlledSelectOptions["default"], {
          multiple: multiple,
          options: _this.state.options,
          search: search,
          searchLabel: searchLabel,
          selected: selected,
          selectOption: _this.selectOption
        }));
      } else {
        return /*#__PURE__*/_react["default"].createElement(SelectContext.Provider, {
          value: {
            state: _this.state,
            multiple: _this.props.multiple,
            triggerOptionChange: _this.triggerOptionChange
          }
        }, /*#__PURE__*/_react["default"].createElement("div", _extends({}, attributes, {
          "data-color": color,
          "data-multiple": multiple,
          className: classes
        }), /*#__PURE__*/_react["default"].createElement("span", {
          className: "caret"
        }, "\u25BC"), children));
      }
    });
    _this.state = {
      selectValue: [],
      selectTextContent: "",
      options: _this.props.options || []
    };
    return _this;
  }
  _inherits(Select, _React$Component);
  return _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("click", this.onClick);
      if (this.state.options.length) {
        this.renderPreselectedOptions();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.selectValue !== this.state.selectValue) {
        if (typeof this.props.getValue === "function") {
          this.props.getValue(this.state.selectValue);
        }
        if (typeof this.props.getTextContent === "function") {
          this.props.getTextContent(this.state.selectTextContent);
        }
      }
      if (this.props.options !== prevProps.options) {
        this.setState({
          options: this.props.options
        }, this.renderPreselectedOptions);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("click", this.onClick);
    }
  }, {
    key: "render",
    value: function render() {
      return this.returnComponentContent();
    }
  }]);
}(_react["default"].Component);
Select.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  color: _propTypes["default"].string,
  getTextContent: _propTypes["default"].func,
  getValue: _propTypes["default"].func,
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
  searchId: _propTypes["default"].string,
  selected: _propTypes["default"].string
};
var _default = exports["default"] = Select;