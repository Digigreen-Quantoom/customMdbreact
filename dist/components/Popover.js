"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBPopover = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactPopper = require("react-popper");
var _reactDom = require("react-dom");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Transitions.css");
var _reactTransitionGroup = require("react-transition-group");
var _outy = _interopRequireDefault(require("outy"));
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
var Popover = exports.MDBPopover = /*#__PURE__*/function (_React$Component) {
  function Popover(props) {
    var _this;
    _classCallCheck(this, Popover);
    _this = _callSuper(this, Popover, [props]);
    _this.state = {
      isOpen: false
    };
    _this._handleTargetClick = _this._handleTargetClick.bind(_this);
    _this._setOusideTap = _this._setOusideTap.bind(_this);
    _this._handleOutsideTap = _this._handleOutsideTap.bind(_this);
    return _this;
  }
  _inherits(Popover, _React$Component);
  return _createClass(Popover, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._setOusideTap();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(lastProps, lastState) {
      var _this2 = this;
      if (lastState.isOpen !== this.state.isOpen) {
        setTimeout(function () {
          return _this2._setOusideTap();
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.outsideTap.remove();
    }
  }, {
    key: "_setOusideTap",
    value: function _setOusideTap() {
      var elements = [this.target];
      if (this.popper) {
        elements.push(this.popper);
      }
      if (this.outsideTap) {
        this.outsideTap.remove();
      }
      this.outsideTap = (0, _outy["default"])(elements, ["click", "touchstart"], this._handleOutsideTap);
    }
  }, {
    key: "_handleOutsideTap",
    value: function _handleOutsideTap() {
      this.setState({
        isOpen: false
      });
    }
  }, {
    key: "_handleTargetClick",
    value: function _handleTargetClick() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props = this.props,
        placement = _this$props.placement,
        component = _this$props.component,
        componentStyle = _this$props.componentStyle,
        className = _this$props.className,
        children = _this$props.children,
        componentPopover = _this$props.componentPopover,
        popoverBody = _this$props.popoverBody,
        popoverClass = _this$props.popoverClass,
        arrowClass = _this$props.arrowClass,
        tag = _this$props.tag;
      var classes = (0, _classnames["default"])(className);
      var popoverClasses = (0, _classnames["default"])("popover", placement ? "bs-popover-" + placement : "", popoverClass);
      var arrowClasses = (0, _classnames["default"])("arrow", arrowClass);
      return /*#__PURE__*/_react["default"].createElement(_reactPopper.Manager, {
        tag: tag
      }, /*#__PURE__*/_react["default"].createElement(_reactPopper.Target, {
        innerRef: function innerRef(c) {
          return _this3.target = (0, _reactDom.findDOMNode)(c);
        },
        component: component,
        style: componentStyle,
        className: classes,
        onClick: this._handleTargetClick
      }, popoverBody), /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.CSSTransition, {
        "in": this.state.isOpen,
        appear: this.state.isOpen,
        classNames: "popover",
        unmountOnExit: true,
        timeout: {
          enter: 300,
          exit: 300
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactPopper.Popper, {
        key: "popover",
        component: componentPopover,
        innerRef: function innerRef(c) {
          _this3.popper = (0, _reactDom.findDOMNode)(c);
        },
        placement: placement,
        className: popoverClasses,
        onClick: this._handleTargetClick
      }, children, /*#__PURE__*/_react["default"].createElement(_reactPopper.Arrow, {
        className: arrowClasses
      }))));
    }
  }]);
}(_react["default"].Component);
Popover.propTypes = {
  placement: _propTypes["default"].string,
  component: _propTypes["default"].string,
  componentStyle: _propTypes["default"].string,
  componentPopover: _propTypes["default"].string,
  popoverBody: _propTypes["default"].string,
  arrowClass: _propTypes["default"].string,
  popoverClass: _propTypes["default"].string,
  children: _propTypes["default"].node,
  tag: _propTypes["default"].string,
  className: _propTypes["default"].string
};
var _default = exports["default"] = Popover;