"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBWaves = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Waves.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var Waves = exports.MDBWaves = /*#__PURE__*/function (_React$Component) {
  function Waves(props) {
    var _this;
    _classCallCheck(this, Waves);
    _this = _callSuper(this, Waves, [props]);
    _this.state = {
      animate: false,
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      cursorPos: props.cursorPos
    };
    return _this;
  }
  _inherits(Waves, _React$Component);
  return _createClass(Waves, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;
      if (prevState.cursorPos.time !== this.props.cursorPos.time) {
        if (prevState.animate) {
          this.setState({
            animate: false,
            cursorPos: this.props.cursorPos
          }, function () {
            _this2.reppling();
          });
        } else this.reppling();
      }
    }
  }, {
    key: "reppling",
    value: function reppling() {
      // Get the element
      var $ripple = _reactDom["default"].findDOMNode(this);
      var $button = $ripple.parentNode;
      var buttonPos = $button.getBoundingClientRect();
      var buttonWidth = $button.offsetWidth;
      var buttonHeight = $button.offsetHeight;

      // Make a Square Ripple
      var rippleWidthShouldBe = Math.max(buttonHeight, buttonWidth);

      // Make Ripple Position to be center
      var centerize = rippleWidthShouldBe / 2;
      this.setState({
        animate: true,
        width: rippleWidthShouldBe,
        height: rippleWidthShouldBe,
        top: this.state.cursorPos.top - buttonPos.top - centerize,
        left: this.state.cursorPos.left - buttonPos.left - centerize
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: 'Ripple ' + (this.props.outline || this.props.flat || this.props.dark ? 'Ripple-outline ' : '') + (this.state.animate ? 'is-reppling' : ''),
        style: {
          top: this.state.top + 'px',
          left: this.state.left + 'px',
          width: this.state.width + 'px',
          height: this.state.height + 'px'
        }
      });
    }
  }]);
}(_react["default"].Component);
Waves.propTypes = {
  outline: _propTypes["default"].bool,
  flat: _propTypes["default"].bool,
  animate: _propTypes["default"].bool,
  cursorPos: _propTypes["default"].object,
  children: _propTypes["default"].node
};
var _default = exports["default"] = Waves;