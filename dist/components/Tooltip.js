"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBTooltip = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactPopper = require("react-popper");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
var Tooltip = exports.MDBTooltip = /*#__PURE__*/function (_React$Component) {
  function Tooltip(props) {
    var _this;
    _classCallCheck(this, Tooltip);
    _this = _callSuper(this, Tooltip, [props]);
    _this.state = {
      visible: false
    };
    _this.show = _this.show.bind(_this);
    _this.hide = _this.hide.bind(_this);
    _this.setVisibility = _this.setVisibility.bind(_this);
    return _this;
  }
  _inherits(Tooltip, _React$Component);
  return _createClass(Tooltip, [{
    key: "show",
    value: function show() {
      this.setVisibility(true);
    }
  }, {
    key: "hide",
    value: function hide() {
      this.setVisibility(false);
    }
  }, {
    key: "setVisibility",
    value: function setVisibility(visible) {
      this.setState(Object.assign({}, this.state, {
        visible: visible
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        placement = _this$props.placement,
        component = _this$props.component,
        componentStyle = _this$props.componentStyle,
        className = _this$props.className,
        children = _this$props.children,
        tooltipContent = _this$props.tooltipContent,
        tooltipClass = _this$props.tooltipClass,
        arrowClass = _this$props.arrowClass,
        componentTooltip = _this$props.componentTooltip,
        componentClass = _this$props.componentClass,
        wrapperStyle = _this$props.wrapperStyle,
        tag = _this$props.tag;
      var classes = (0, _classnames["default"])(className);
      var componentClasses = (0, _classnames["default"])(componentClass);
      var tooltipClasses = (0, _classnames["default"])("tooltip fade", placement ? "bs-tooltip-" + placement : "", this.state.visible ? "show" : "", tooltipClass);
      var wrapperStyles = wrapperStyle ? wrapperStyle : {};
      var arrowClasses = (0, _classnames["default"])("arrow", arrowClass);
      return /*#__PURE__*/_react["default"].createElement(_reactPopper.Manager, {
        tag: tag,
        className: classes,
        style: wrapperStyles
      }, /*#__PURE__*/_react["default"].createElement(_reactPopper.Target, {
        component: component,
        style: componentStyle,
        className: componentClasses,
        onMouseEnter: this.show,
        onMouseLeave: this.hide,
        onTouchStart: this.show,
        onTouchEnd: this.hide
      }, children), this.state.visible && /*#__PURE__*/_react["default"].createElement(_reactPopper.Popper, {
        placement: placement,
        component: componentTooltip
      }, function (_ref) {
        var popperProps = _ref.popperProps;
        return /*#__PURE__*/_react["default"].createElement("div", _extends({}, popperProps, {
          className: tooltipClasses
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: "tooltip-inner"
        }, tooltipContent), /*#__PURE__*/_react["default"].createElement(_reactPopper.Arrow, null, function (_ref2) {
          var arrowProps = _ref2.arrowProps;
          return /*#__PURE__*/_react["default"].createElement("span", _extends({}, arrowProps, {
            className: arrowClasses
          }));
        }));
      }));
    }
  }]);
}(_react["default"].Component);
Tooltip.propTypes = {
  placement: _propTypes["default"].string,
  component: _propTypes["default"].string,
  componentStyle: _propTypes["default"].string,
  tooltipContent: _propTypes["default"].string,
  tooltipClass: _propTypes["default"].string,
  arrowClass: _propTypes["default"].string,
  componentTooltip: _propTypes["default"].string,
  componentClass: _propTypes["default"].string,
  children: _propTypes["default"].node,
  tag: _propTypes["default"].string,
  className: _propTypes["default"].string,
  wrapperStyle: _propTypes["default"].object
};
var _default = exports["default"] = Tooltip;