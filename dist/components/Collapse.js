"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBCollapse = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _excluded = ["navbar", "children", "className", "isOpen", "delay", "onOpened", "onClosed"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
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
var SHOW = "SHOW";
var SHOWN = "SHOWN";
var HIDE = "HIDE";
var HIDDEN = "HIDDEN";
var DEFAULT_DELAYS = {
  show: 350,
  hide: 350
};
var Collapse = exports.MDBCollapse = /*#__PURE__*/function (_Component) {
  function Collapse(props) {
    var _this;
    _classCallCheck(this, Collapse);
    _this = _callSuper(this, Collapse, [props]);
    _defineProperty(_this, "openCollapse", function () {
      _this.setState({
        collapse: SHOW
      }, function () {
        _this.setState({
          height: _this.getHeight()
        });
        _this.transitionTag = setTimeout(function () {
          _this.setState({
            collapse: SHOWN,
            height: null
          }, _this.props.onOpened());
        }, _this.getDelay("show"));
      });
    });
    _defineProperty(_this, "closeCollapse", function () {
      _this.setState({
        height: _this.getHeight()
      }, function () {
        _this.setState({
          collapse: HIDE,
          height: _this.getHeight()
        }, function () {
          _this.setState({
            height: 0
          });
        });
      });
      _this.transitionTag = setTimeout(function () {
        _this.setState({
          collapse: HIDDEN,
          height: null
        }, _this.props.onClosed());
      }, _this.getDelay("hide"));
    });
    _this.state = {
      id: props.id,
      collapse: HIDDEN,
      height: null
    };
    _this.element = null;
    return _this;
  }
  _inherits(Collapse, _Component);
  return _createClass(Collapse, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ((this.props.isOpen === this.state.id || this.props.isOpen === true) && this.state.collapse === HIDDEN) {
        this.openCollapse();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var collapse = prevState.collapse;
      var willOpen = typeof this.props.isOpen !== "boolean" ? this.props.isOpen === prevState.id : this.props.isOpen;
      if (willOpen && this.state.collapse === HIDDEN) {
        this.openCollapse();
      } else if (!willOpen && collapse === SHOWN) {
        this.closeCollapse();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.transitionTag);
    }
  }, {
    key: "getDelay",
    value: function getDelay(key) {
      var delay = this.props.delay;
      if (_typeof(delay) === "object") {
        return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
      }
      return delay;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.element.scrollHeight;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        navbar = _this$props.navbar,
        children = _this$props.children,
        className = _this$props.className,
        isOpen = _this$props.isOpen,
        delay = _this$props.delay,
        onOpened = _this$props.onOpened,
        onClosed = _this$props.onClosed,
        attributes = _objectWithoutProperties(_this$props, _excluded);
      var _this$state = this.state,
        collapse = _this$state.collapse,
        height = _this$state.height;
      var collapseClass;
      switch (collapse) {
        case SHOW:
          collapseClass = "collapsing";
          break;
        case SHOWN:
          collapseClass = "collapse show";
          break;
        case HIDE:
          collapseClass = "collapsing";
          break;
        case HIDDEN:
          collapseClass = "collapse";
          break;
        default:
          // HIDDEN
          collapseClass = "collapse";
      }
      var classes = (0, _classnames["default"])(collapseClass, navbar ? "navbar-collapse" : false, className);
      var style = height === null ? null : {
        height: height
      };
      return /*#__PURE__*/_react["default"].createElement("div", _extends({}, attributes, {
        style: _objectSpread(_objectSpread({}, attributes.style), style),
        className: classes,
        ref: function ref(c) {
          _this2.element = c;
        }
      }), children);
    }
  }]);
}(_react.Component);
Collapse.propTypes = {
  isOpen: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].bool]),
  id: _propTypes["default"].string,
  className: _propTypes["default"].node,
  children: _propTypes["default"].node,
  navbar: _propTypes["default"].bool,
  delay: _propTypes["default"].oneOfType([_propTypes["default"].shape({
    show: _propTypes["default"].number,
    hide: _propTypes["default"].number
  }), _propTypes["default"].number]),
  onOpened: _propTypes["default"].func,
  onClosed: _propTypes["default"].func
};
Collapse.defaultProps = {
  isOpen: "",
  delay: DEFAULT_DELAYS,
  onOpened: function onOpened() {},
  onClosed: function onClosed() {}
};
var _default = exports["default"] = Collapse;