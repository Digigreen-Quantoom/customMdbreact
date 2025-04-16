"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBRangeInput = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
require("./InputRange.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
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
var InputRange = exports.MDBRangeInput = /*#__PURE__*/function (_React$Component) {
  function InputRange(props) {
    var _this;
    _classCallCheck(this, InputRange);
    _this = _callSuper(this, InputRange, [props]);
    _defineProperty(_this, "componentDidMount", function () {
      var input = _this.inputRef.current;
      var inputWidth = input.offsetWidth;
      var oneStep = inputWidth / (_this.props.max - _this.props.min);
      _this.setState({
        value: _this.props.value,
        leftPosition: oneStep * _this.props.value - oneStep * _this.props.min,
        oneStep: oneStep
      });
    });
    _defineProperty(_this, "rangeChange", function (e) {
      var newValue = e.target.value;
      _this.setState({
        value: newValue,
        leftPosition: _this.state.oneStep * newValue - _this.state.oneStep * _this.props.min
      });
      _this.props.getValue && _this.props.getValue(e.target.value);
    });
    _defineProperty(_this, "rangeFocus", function () {
      _this.setState({
        thumbActive: true,
        thumbHeight: '30px',
        thumbWidth: '30px',
        thumbTop: '-20px',
        thumbMarginLeft: '-15px'
      });
    });
    _defineProperty(_this, "rangeMouseLeave", function () {
      var input = _this.inputRef.current;
      input.blur();
      _this.setState({
        thumbActive: false,
        thumbHeight: 0,
        thumbWidth: 0,
        thumbTop: '10px',
        thumbMarginLeft: '-6px'
      });
    });
    _this.state = {
      value: false,
      leftPosition: false,
      thumbActive: false,
      thumbHeight: 0,
      thumbWidth: 0,
      thumbTop: '10px',
      thumbMarginLeft: '-6px',
      input: 'input',
      oneStep: ''
    };
    _this.inputRef = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }
  _inherits(InputRange, _React$Component);
  return _createClass(InputRange, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        className = _this$props.className,
        formClassName = _this$props.formClassName,
        min = _this$props.min,
        max = _this$props.max;
      var inputClass = (0, _classnames["default"])(className);
      var formClass = (0, _classnames["default"])('range-field', formClassName);
      var thumbClass = (0, _classnames["default"])('thumb', this.state.thumbActive ? 'active' : false);
      return /*#__PURE__*/_react["default"].createElement("form", {
        className: formClass
      }, /*#__PURE__*/_react["default"].createElement("input", {
        ref: this.inputRef,
        className: inputClass,
        min: min,
        max: max,
        value: this.state.value,
        type: "range",
        onChange: this.rangeChange,
        onFocus: this.rangeFocus,
        onMouseLeave: this.rangeMouseLeave
      }), /*#__PURE__*/_react["default"].createElement("span", {
        className: thumbClass,
        style: {
          left: this.state.leftPosition,
          height: this.state.thumbHeight,
          width: this.state.thumbWidth,
          top: this.state.thumbTop,
          marginLeft: this.state.thumbMarginLeft
        }
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "value"
      }, this.state.value)));
    }
  }]);
}(_react["default"].Component);
InputRange.propTypes = {
  className: _propTypes["default"].string,
  min: _propTypes["default"].number,
  max: _propTypes["default"].number,
  value: _propTypes["default"].number,
  getValue: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].bool])
};
InputRange.defaultProps = {
  min: 0,
  max: 100,
  value: 50,
  getValue: false
};
var _default = exports["default"] = InputRange;