"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBSideNav = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _reactTransitionGroup = require("react-transition-group");
require("../Transitions.css");
var _Waves = _interopRequireDefault(require("../Waves"));
var _excluded = ["bg", "breakWidth", "children", "className", "hidden", "href", "logo", "mask", "onOverlayClick", "right", "triggerOpening", "tag"];
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
var SideNav = exports.MDBSideNav = /*#__PURE__*/function (_React$Component) {
  function SideNav(props) {
    var _this;
    _classCallCheck(this, SideNav);
    _this = _callSuper(this, SideNav, [props]);
    _defineProperty(_this, "updatePredicate", function () {
      if (!_this.props.hidden) {
        _this.setState({
          isOpen: window.innerWidth > _this.props.breakWidth
        });
      }
    });
    _defineProperty(_this, "handleOverlayClick", function () {
      _this.setState({
        isOpen: false,
        showOverlay: false
      });
      if (_this.props.onOverlayClick) {
        _this.props.onOverlayClick();
      }
    });
    _defineProperty(_this, "handleClick", function (e) {
      if (!_this.props.disabled) {
        // Waves - Get Cursor Position
        var cursorPos = {
          top: e.clientY,
          left: e.clientX,
          time: Date.now()
        };
        _this.setState({
          cursorPos: cursorPos
        });
        // do the passed in callback:
        if (_this.props.onClick) {
          _this.props.onClick(e);
        }
      }
      e.stopPropagation();
    });
    _this.state = {
      isOpen: false,
      showOverlay: false,
      cursorPos: {}
    };
    return _this;
  }
  _inherits(SideNav, _React$Component);
  return _createClass(SideNav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updatePredicate();
      window.addEventListener("resize", this.updatePredicate);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.triggerOpening !== this.props.triggerOpening) {
        this.setState({
          isOpen: !this.state.isOpen,
          showOverlay: !this.state.showOverlay
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.updatePredicate);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        bg = _this$props.bg,
        breakWidth = _this$props.breakWidth,
        children = _this$props.children,
        className = _this$props.className,
        hidden = _this$props.hidden,
        href = _this$props.href,
        logo = _this$props.logo,
        mask = _this$props.mask,
        onOverlayClick = _this$props.onOverlayClick,
        right = _this$props.right,
        triggerOpening = _this$props.triggerOpening,
        Tag = _this$props.tag,
        attributes = _objectWithoutProperties(_this$props, _excluded);
      var _this$state = this.state,
        isOpen = _this$state.isOpen,
        showOverlay = _this$state.showOverlay;
      var classes = (0, _classnames["default"])("side-nav", right && "right-aligned", className);
      var overlay = /*#__PURE__*/_react["default"].createElement("div", {
        id: "sidenav-overlay",
        onClick: this.handleOverlayClick
      });
      var sidenav = /*#__PURE__*/_react["default"].createElement(Tag, _extends({}, attributes, {
        className: classes,
        style: {
          backgroundImage: "url(".concat(bg)
        }
      }), /*#__PURE__*/_react["default"].createElement("ul", {
        className: "custom-scrollbar list-unstyled"
      }, logo && /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "logo-wrapper"
      }, /*#__PURE__*/_react["default"].createElement("a", {
        href: href,
        className: "Ripple-parent",
        onClick: this.handleClick
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: logo,
        alt: "",
        className: "img-fluid flex-center d-block"
      }), /*#__PURE__*/_react["default"].createElement(_Waves["default"], {
        cursorPos: this.state.cursorPos
      })))), children), mask && /*#__PURE__*/_react["default"].createElement("div", {
        className: "sidenav-bg mask-".concat(mask)
      }));
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.CSSTransition, {
        timeout: {
          enter: 300,
          exit: 300
        },
        classNames: right ? "right-side-slide" : "side-slide",
        "in": isOpen
      }, sidenav), showOverlay && isOpen && overlay);
    }
  }]);
}(_react["default"].Component);
SideNav.propTypes = {
  bg: _propTypes["default"].string,
  breakWidth: _propTypes["default"].number,
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  hidden: _propTypes["default"].bool,
  href: _propTypes["default"].string,
  logo: _propTypes["default"].string,
  mask: _propTypes["default"].string,
  onOverlayClick: _propTypes["default"].func,
  right: _propTypes["default"].bool,
  triggerOpening: _propTypes["default"].bool,
  tag: _propTypes["default"].string
};
SideNav.defaultProps = {
  bg: '',
  breakWidth: 1400,
  className: '',
  hidden: false,
  href: "#",
  logo: '',
  mask: '',
  onOverlayClick: function onOverlayClick() {},
  right: false,
  triggerOpening: false,
  tag: "div"
};
var _default = exports["default"] = SideNav;