"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBSideNavCat = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Collapse = _interopRequireDefault(require("../Collapse"));
var _Waves = _interopRequireDefault(require("../Waves"));
var _Fa = _interopRequireDefault(require("../Fa"));
var _excluded = ["tag", "children", "className", "name", "icon", "iconBrand", "iconLight", "iconRegular", "iconSize", "onClick", "disabled", "isOpen", "isOpenID", "id"];
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
var SideNavCat = exports.MDBSideNavCat = /*#__PURE__*/function (_React$Component) {
  function SideNavCat(props) {
    var _this;
    _classCallCheck(this, SideNavCat);
    _this = _callSuper(this, SideNavCat, [props]);
    _this.state = {
      cursorPos: {},
      isOpenID: ""
    };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }
  _inherits(SideNavCat, _React$Component);
  return _createClass(SideNavCat, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.isOpen !== this.props.isOpen) {
        this.setState({
          isOpenID: this.props.isOpen ? this.props.id : ""
        });
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(e, id) {
      if (!this.props.disabled) {
        // Waves - Get Cursor Position
        var cursorPos = {
          top: e.clientY,
          left: e.clientX,
          time: Date.now()
        };
        this.setState({
          cursorPos: cursorPos
        });
        // do the passed in callback:
        if (this.props.onClick) {
          this.props.onClick(id);
        }
        e.stopPropagation();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        Tag = _this$props.tag,
        children = _this$props.children,
        className = _this$props.className,
        name = _this$props.name,
        icon = _this$props.icon,
        iconBrand = _this$props.iconBrand,
        iconLight = _this$props.iconLight,
        iconRegular = _this$props.iconRegular,
        iconSize = _this$props.iconSize,
        onClick = _this$props.onClick,
        disabled = _this$props.disabled,
        isOpen = _this$props.isOpen,
        isOpenID = _this$props.isOpenID,
        id = _this$props.id,
        attributes = _objectWithoutProperties(_this$props, _excluded);
      var classes = (0, _classnames["default"])("collapsible-header", "Ripple-parent", "arrow-r", isOpen && "active", disabled && "disabled", className);
      return /*#__PURE__*/_react["default"].createElement(Tag, null, /*#__PURE__*/_react["default"].createElement("a", _extends({
        className: classes,
        onClick: function onClick(e) {
          return _this2.handleClick(e, id);
        }
      }, attributes), icon && /*#__PURE__*/_react["default"].createElement(_Fa["default"], {
        icon: icon,
        brand: iconBrand,
        light: iconLight,
        regular: iconRegular,
        size: iconSize,
        className: "mr-2"
      }), name, /*#__PURE__*/_react["default"].createElement(_Fa["default"], {
        icon: "angle-down",
        className: "rotate-icon"
      }), /*#__PURE__*/_react["default"].createElement(_Waves["default"], {
        cursorPos: this.state.cursorPos
      })), /*#__PURE__*/_react["default"].createElement(_Collapse["default"], {
        id: id,
        isOpen: this.state.isOpenID
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "collapsible-body",
        style: {
          display: "block"
        }
      }, /*#__PURE__*/_react["default"].createElement("ul", null, children))));
    }
  }]);
}(_react["default"].Component);
_defineProperty(SideNavCat, "displayName", "SideNavCat");
SideNavCat.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  icon: _propTypes["default"].string,
  iconBrand: _propTypes["default"].bool,
  iconLight: _propTypes["default"].bool,
  iconRegular: _propTypes["default"].bool,
  iconSize: _propTypes["default"].string,
  id: _propTypes["default"].string,
  isOpen: _propTypes["default"].bool,
  isOpenID: _propTypes["default"].string,
  name: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  tag: _propTypes["default"].string
};
SideNavCat.defaultProps = {
  className: "",
  disabled: false,
  icon: "",
  iconBrand: false,
  iconLight: false,
  iconRegular: false,
  iconSize: "",
  id: "",
  isOpen: false,
  isOpenID: "",
  name: "",
  onClick: function onClick() {},
  tag: "li"
};
var _default = exports["default"] = SideNavCat;