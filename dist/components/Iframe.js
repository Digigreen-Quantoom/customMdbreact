"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBIframe = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _utils = require("./utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
var Iframe = exports.MDBIframe = /*#__PURE__*/function (_Component) {
  function Iframe() {
    var _this;
    _classCallCheck(this, Iframe);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Iframe, [].concat(args));
    _defineProperty(_this, "state", {
      width: "",
      height: "",
      ratio: ""
    });
    _defineProperty(_this, "componentDidMount", function () {
      var width = _this.props.width;
      var height = _this.props.height;
      var ratio = 9 / 16;
      if (_this.props.ratio) {
        var newRatio = _this.props.ratio.split("by")[0] / _this.props.ratio.split("by")[1];
        if (typeof ratio === "number") ratio = newRatio;
      }
      if (_this.props.width && _this.props.height) {
        return;
      } else if (_this.props.width) {
        height = _this.props.width * ratio;
      } else if (_this.props.height) {
        width = _this.props.height * (1 / ratio);
      }
      _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
        width: width,
        height: height,
        ratio: ratio
      }));
    });
    return _this;
  }
  _inherits(Iframe, _Component);
  return _createClass(Iframe, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        allowFullScreen = _this$props.allowFullScreen,
        className = _this$props.className,
        id = _this$props.id,
        name = _this$props.name,
        onMouseOver = _this$props.onMouseOver,
        onMouseOut = _this$props.onMouseOut,
        onLoad = _this$props.onLoad,
        sandbox = _this$props.sandbox,
        src = _this$props.src,
        style = _this$props.style,
        title = _this$props.title,
        ratio = _this$props.ratio,
        height = _this$props.height,
        width = _this$props.width;
      var classes = (0, _classnames["default"])("embed-responsive-item", className);
      var wrapperClasses = (0, _classnames["default"])(!(height || width) && "embed-responsive", ratio ? "embed-responsive-".concat(ratio) : "embed-responsive-16by9", className);
      var iframeAttributes = {
        src: src,
        id: id || false,
        frameBorder: "0",
        target: "_parent",
        allowFullScreen: allowFullScreen || true,
        height: this.state.height || "100%",
        name: name || undefined,
        width: this.state.width || "100%",
        onLoad: onLoad || undefined,
        onMouseOver: onMouseOver || undefined,
        onMouseOut: onMouseOut || undefined,
        sandbox: sandbox || undefined,
        style: style || undefined
      };
      iframeAttributes = (0, _utils.returnAttributes)(iframeAttributes);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: wrapperClasses
      }, /*#__PURE__*/_react["default"].createElement("iframe", _extends({
        title: title || "",
        className: classes
      }, iframeAttributes)));
    }
  }]);
}(_react.Component);
Iframe.propTypes = {
  allowFullScreen: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  height: _propTypes["default"].number,
  id: _propTypes["default"].string,
  name: _propTypes["default"].string,
  onMouseOver: _propTypes["default"].func,
  onMouseOut: _propTypes["default"].func,
  onLoad: _propTypes["default"].func,
  ratio: _propTypes["default"].string,
  sandbox: _propTypes["default"].string,
  src: _propTypes["default"].string.isRequired,
  styles: _propTypes["default"].object,
  width: _propTypes["default"].number,
  title: _propTypes["default"].string
};
var _default = exports["default"] = Iframe;