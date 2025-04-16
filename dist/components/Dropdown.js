"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBDropdown = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _reactPopper = require("react-popper");
var _classnames = _interopRequireDefault(require("classnames"));
var _utils = require("./utils");
var _excluded = ["className", "dropup", "group", "size"];
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
var Dropdown = exports.MDBDropdown = /*#__PURE__*/function (_React$Component) {
  function Dropdown(props) {
    var _this;
    _classCallCheck(this, Dropdown);
    _this = _callSuper(this, Dropdown, [props]);
    _defineProperty(_this, "toggle", function () {
      _this.setState({
        isOpen: !_this.state.isOpen
      });
    });
    _this.state = {
      isOpen: false
    };
    _this.addEvents = _this.addEvents.bind(_this);
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.removeEvents = _this.removeEvents.bind(_this);
    return _this;
  }
  _inherits(Dropdown, _React$Component);
  return _createClass(Dropdown, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        isOpen: this.state.isOpen,
        dropup: this.props.dropup,
        toggle: this.toggle
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleEventsBinding();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeEvents();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.handleEventsBinding();
    }
  }, {
    key: "handleEventsBinding",
    value: function handleEventsBinding() {
      if (this.state.isOpen) {
        this.addEvents();
      } else {
        this.removeEvents();
      }
    }
  }, {
    key: "getContainer",
    value: function getContainer() {
      return _reactDom["default"].findDOMNode(this);
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      var _this2 = this;
      ["click", "touchstart", "keyup"].forEach(function (event) {
        return document.addEventListener(event, _this2.handleDocumentClick, true);
      });
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      var _this3 = this;
      ["click", "touchstart", "keyup"].forEach(function (event) {
        return document.removeEventListener(event, _this3.handleDocumentClick, true);
      });
    }
  }, {
    key: "handleDocumentClick",
    value: function handleDocumentClick(e) {
      if (e && (e.which === 3 || e.type === "keyup" && e.which !== _utils.keyCodes.tab)) return;
      var container = this.getContainer();
      if (container.contains(e.target) && container !== e.target && (e.type !== "keyup" || e.which === _utils.keyCodes.tab)) {
        return;
      }
      this.toggle(e);
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e) {
      if ([_utils.keyCodes.esc, _utils.keyCodes.up, _utils.keyCodes.down, _utils.keyCodes.space].indexOf(e.which) === -1 || /button/i.test(e.target.tagName) && e.which === _utils.keyCodes.space || /input|textarea/i.test(e.target.tagName)) {
        return;
      }
      e.preventDefault();
      if (this.props.disabled) return;
      var container = this.getContainer();
      if (e.which === _utils.keyCodes.space && this.state.isOpen && container !== e.target) {
        e.target.click();
      }
      if (e.which === _utils.keyCodes.esc || !this.state.isOpen) {
        this.toggle(e);
        container.querySelector("[aria-expanded]").focus();
        return;
      }
      var menuClass = "dropdown-menu";
      var itemClass = "dropdown-item";
      var disabledClass = "disabled";
      var items = container.querySelectorAll(".".concat(menuClass, " .").concat(itemClass, ":not(.").concat(disabledClass, ")"));
      if (!items.length) return;
      var index = -1;
      for (var i = 0; i < items.length; i += 1) {
        if (items[i] === e.target) {
          index = i;
          break;
        }
      }
      if (e.which === _utils.keyCodes.up && index > 0) {
        index -= 1;
      }
      if (e.which === _utils.keyCodes.down && index < items.length - 1) {
        index += 1;
      }
      if (index < 0) {
        index = 0;
      }
      items[index].focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _omit = (0, _utils.omit)(this.props, ["toggle", "disabled"]),
        className = _omit.className,
        dropup = _omit.dropup,
        group = _omit.group,
        size = _omit.size,
        attrs = _objectWithoutProperties(_omit, _excluded);
      var classes = (0, _classnames["default"])(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
        "btn-group": group
      }, "btn-group-".concat(size), !!size), "dropdown", !group), "show", this.state.isOpen), "dropup", dropup), className);
      return /*#__PURE__*/_react["default"].createElement(_reactPopper.Manager, _extends({}, attrs, {
        className: classes,
        onKeyDown: this.handleKeyDown
      }));
    }
  }]);
}(_react["default"].Component);
Dropdown.propTypes = {
  disabled: _propTypes["default"].bool,
  dropup: _propTypes["default"].bool,
  group: _propTypes["default"].bool,
  size: _propTypes["default"].string,
  tag: _propTypes["default"].string,
  toggle: _propTypes["default"].func,
  children: _propTypes["default"].node,
  className: _propTypes["default"].string
};
Dropdown.defaultProps = {
  dropup: false,
  tag: "div"
};
Dropdown.childContextTypes = {
  toggle: _propTypes["default"].func.isRequired,
  isOpen: _propTypes["default"].bool.isRequired,
  dropup: _propTypes["default"].bool.isRequired
};
var _default = exports["default"] = Dropdown;