"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBSelectOption = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _SelectContext = _interopRequireDefault(require("./SelectContext"));
var _excluded = ["className", "children", "disabled", "icon", "triggerOptionClick", "value"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
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
var Option = exports.MDBSelectOption = /*#__PURE__*/function (_React$Component) {
  function Option(props) {
    var _this;
    _classCallCheck(this, Option);
    _this = _callSuper(this, Option, [props]);
    _defineProperty(_this, "selectOption", function () {
      if (!_this.props.disabled) {
        var selectedOption = _this.optionRef.current;
        var value = [];
        var text;
        var options = selectedOption.parentNode.children;
        if (_this.state.multiple) {
          text = [];
          if (selectedOption.classList.contains("active")) {
            selectedOption.classList.remove("active");
            _this.setState({
              checked: false
            });
          } else {
            selectedOption.classList.add("active");
            _this.setState({
              checked: true
            });
          }

          // iterate throught child nodes options and add checked to arr
          Array.from(options).forEach(function (option) {
            if (option.classList.contains("active")) {
              text.push(option.textContent);
              option.getElementsByTagName("input")[0].value ? value.push(option.getElementsByTagName("input")[0].value) : value.push(option.textContent);
            }
          });
          if (text.length === 0) {
            text = "Choose your option";
          }
        } else {
          Array.from(selectedOption.children).forEach(function (child) {
            if (child.nodeName === "SPAN") {
              text = child.textContent;
              _this.props.value ? value.push(_this.props.value) : value.push(text);
            }
          });
          Array.from(options).forEach(function (option) {
            return option.classList.remove("active");
          });
          selectedOption.classList.add("active");
        }
        _this.props.context.triggerOptionChange(value, text);
      }
    });
    _this.state = {
      multiple: _this.props.context.multiple || false,
      checked: _this.props.checked || _this.props.selected || false
    };
    _this.optionRef = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }
  _inherits(Option, _React$Component);
  return _createClass(Option, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.state.multiple) {
        this.state.checked && this.optionRef.current.click();
      } else {
        if (!this.props.disabled) {
          !this.state.checked && this.optionRef.current.classList.add("active");
          this.selectOption();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        disabled = _this$props.disabled,
        icon = _this$props.icon,
        triggerOptionClick = _this$props.triggerOptionClick,
        value = _this$props.value,
        attributes = _objectWithoutProperties(_this$props, _excluded);
      var classes = (0, _classnames["default"])(disabled ? "disabled" : "", className);
      var input = null;
      var label = null;
      if (this.state.multiple) {
        if (!disabled) {
          input = /*#__PURE__*/_react["default"].createElement("input", {
            type: "checkbox",
            value: value,
            onChange: function onChange() {
              return false;
            },
            className: "form-check-input",
            checked: this.state.checked
          });
          label = /*#__PURE__*/_react["default"].createElement("label", {
            style: {
              height: "10px"
            },
            "data-multiple": this.state.multiple
          });
        } else {
          input = /*#__PURE__*/_react["default"].createElement("input", {
            type: "checkbox",
            className: "form-check-input",
            disabled: true
          });
          label = /*#__PURE__*/_react["default"].createElement("label", {
            style: {
              height: "10px"
            },
            "data-multiple": this.state.multiple
          });
        }
      }
      return /*#__PURE__*/_react["default"].createElement("li", _extends({
        ref: this.optionRef
      }, attributes, {
        "data-multiple": this.state.multiple,
        className: classes,
        onClick: this.selectOption
      }), icon && /*#__PURE__*/_react["default"].createElement("img", {
        src: this.props.icon,
        alt: "icon",
        className: "rounded-circle"
      }), /*#__PURE__*/_react["default"].createElement("span", {
        "data-multiple": this.state.multiple,
        className: "filtrable"
      }, input, label, children));
    }
  }]);
}(_react["default"].Component);
Option.propTypes = {
  children: _propTypes["default"].node,
  checked: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  icon: _propTypes["default"].string,
  triggerOptionClick: _propTypes["default"].func,
  value: _propTypes["default"].any
};
Option.defaultProps = {
  children: "span",
  checked: false,
  className: "",
  disabled: false,
  icon: "",
  triggerOptionClick: function triggerOptionClick() {},
  value: ""
};
var _default = exports["default"] = exports.MDBSelectOption = Option = (0, _SelectContext["default"])(Option);