"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBStep = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Tooltip = _interopRequireDefault(require("../Tooltip"));
var _Waves = _interopRequireDefault(require("../Waves"));
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
var Step = exports.MDBStep = /*#__PURE__*/function (_React$Component) {
  function Step(props) {
    var _this;
    _classCallCheck(this, Step);
    _this = _callSuper(this, Step, [props]);
    _this.state = {
      cursorPos: {}
    };
    return _this;
  }
  _inherits(Step, _React$Component);
  return _createClass(Step, [{
    key: "handleClick",
    value: function handleClick(e) {
      // Get Cursor Position
      e.preventDefault();
      var cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      this.setState({
        cursorPos: cursorPos
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        Tag = _this$props.tag,
        form = _this$props.form,
        icon = _this$props.icon,
        stepName = _this$props.stepName,
        vertical = _this$props.vertical;
      var iconClass = (0, _classnames["default"])("fa fa-" + icon, "Ripple-parent");
      var stepClass = (0, _classnames["default"])(form ? "steps-step" : icon && vertical ? "steps-step-3" : icon && !vertical ? "steps-step-2" : null, this.props.className);
      var step;
      if (form) {
        step = /*#__PURE__*/_react["default"].createElement(Tag, {
          className: stepClass
        }, this.props.children);
      } else if (icon && !vertical) {
        step = /*#__PURE__*/_react["default"].createElement(Tag, {
          className: stepClass,
          onClick: this.props.onClick
        }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
          placement: "top",
          componentClass: "btn btn-circle-2 btn-blue-grey waves-effect",
          tag: "a",
          type: "button",
          component: "div",
          tooltipContent: stepName
        }, /*#__PURE__*/_react["default"].createElement("i", {
          className: iconClass,
          onTouchStart: this.handleClick.bind(this),
          onMouseDown: this.handleClick.bind(this)
        }), /*#__PURE__*/_react["default"].createElement(_Waves["default"], {
          cursorPos: this.state.cursorPos,
          dark: true
        })));
      } else if (icon && vertical) {
        step = /*#__PURE__*/_react["default"].createElement(Tag, {
          className: stepClass,
          onClick: this.props.onClick
        }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
          placement: "top",
          componentClass: "btn btn-circle-3 btn-blue-grey waves-effect",
          tag: "a",
          type: "button",
          component: "div",
          tooltipContent: stepName
        }, /*#__PURE__*/_react["default"].createElement("i", {
          className: iconClass,
          onTouchStart: this.handleClick.bind(this),
          onMouseDown: this.handleClick.bind(this)
        }), /*#__PURE__*/_react["default"].createElement(_Waves["default"], {
          cursorPos: this.state.cursorPos,
          dark: true
        })));
      } else {
        step = /*#__PURE__*/_react["default"].createElement("li", {
          className: stepClass
        }, this.props.children);
      }
      return step;
    }
  }]);
}(_react["default"].Component);
Step.defaultProps = {
  tag: "div",
  form: false,
  vertical: false
};
var _default = exports["default"] = Step;