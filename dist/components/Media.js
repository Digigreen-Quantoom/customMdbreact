"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBMedia = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _excluded = ["body", "bottom", "className", "heading", "left", "list", "middle", "object", "right", "round", "thumbnail", "figure", "figImg", "figCap", "figCapRight", "figCapLeft", "tag", "top"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
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
var Media = exports.MDBMedia = /*#__PURE__*/function (_React$Component) {
  function Media() {
    _classCallCheck(this, Media);
    return _callSuper(this, Media, arguments);
  }
  _inherits(Media, _React$Component);
  return _createClass(Media, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        body = _this$props.body,
        bottom = _this$props.bottom,
        className = _this$props.className,
        heading = _this$props.heading,
        left = _this$props.left,
        list = _this$props.list,
        middle = _this$props.middle,
        object = _this$props.object,
        right = _this$props.right,
        round = _this$props.round,
        thumbnail = _this$props.thumbnail,
        figure = _this$props.figure,
        figImg = _this$props.figImg,
        figCap = _this$props.figCap,
        figCapRight = _this$props.figCapRight,
        figCapLeft = _this$props.figCapLeft,
        tag = _this$props.tag,
        top = _this$props.top,
        attributes = _objectWithoutProperties(_this$props, _excluded);
      var defaultTag;
      if (heading) {
        defaultTag = "h4";
      } else if (left || right) {
        defaultTag = "a";
      } else if (object || figImg) {
        defaultTag = "img";
      } else if (list) {
        defaultTag = "ul";
      } else if (figure) {
        defaultTag = "figure";
      } else if (figCap || figCapRight || figCapLeft) {
        defaultTag = "figcaption";
      } else {
        defaultTag = "div";
      }
      var Tag = tag || defaultTag;
      var classes = (0, _classnames["default"])(body ? "media-body" : false, heading ? "mt-0" : false, left ? "media-left" : false, right ? "media-right" : false, top ? "align-self-start" : false, middle ? "align-self-center" : false, bottom ? "align-self-end" : false, object ? "media-object" : false, thumbnail ? "img-thumbnail" : false, list ? "media-list" : false, figure ? "figure" : false, figImg ? "figure-img" : false, figCap ? "figure-caption text-center" : false, figCapRight ? "figure-caption text-right" : false, figCapLeft ? "figure-caption text-left" : false, round ? "rounded-circle z-depth-1-half" : false, !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list && !figCap && !figCapRight && !figCapRight && !figImg && !figure ? "media" : false, className);
      return /*#__PURE__*/_react["default"].createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);
}(_react["default"].Component);
Media.propTypes = {
  body: _propTypes["default"].bool,
  bottom: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  heading: _propTypes["default"].bool,
  figure: _propTypes["default"].bool,
  figImg: _propTypes["default"].bool,
  figCap: _propTypes["default"].bool,
  figCapRight: _propTypes["default"].bool,
  figCapLeft: _propTypes["default"].bool,
  left: _propTypes["default"].bool,
  list: _propTypes["default"].bool,
  middle: _propTypes["default"].bool,
  object: _propTypes["default"].bool,
  thumbnail: _propTypes["default"].bool,
  round: _propTypes["default"].bool,
  right: _propTypes["default"].bool,
  tag: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]),
  top: _propTypes["default"].bool
};
var _default = exports["default"] = Media;