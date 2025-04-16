"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBModal = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("./utils");
var _reactTransitionGroup = require("react-transition-group");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
var Modal = exports.MDBModal = /*#__PURE__*/function (_Component) {
  function Modal() {
    var _this;
    _classCallCheck(this, Modal);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Modal, [].concat(args));
    _defineProperty(_this, "state", {
      isOpen: _this.props.isOpen || false
    });
    _defineProperty(_this, "componentDidMount", function () {
      document.body.classList.add("modal-open");
    });
    _defineProperty(_this, "componentWillUnmount", function () {
      document.body.classList.remove("modal-open");
    });
    _defineProperty(_this, "componentDidUpdate", function (prevProps, prevState) {
      if (prevState.isOpen !== _this.props.isOpen) {
        _this.setState({
          isOpen: _this.props.isOpen
        });
      }
    });
    _defineProperty(_this, "handleOnEntered", function (type, node) {
      if (type === "backdrop" && _this.props.fade === false) {
        return;
      }
      node.classList.add("show");
      _this.props.autoFocus && node.focus();
      if (type === "modal") {
        _this.props.showModal && _this.props.showModal();
      }
    });
    _defineProperty(_this, "handleOnExit", function (type, node) {
      if (type === "backdrop" && _this.props.fade === false) {
        return;
      }
      node.classList.remove("show");
      if (type === "modal") {
        _this.props.hideModal && _this.props.hideModal();
      }
    });
    _defineProperty(_this, "handleOnExited", function (node) {
      _this.props.hiddenModal && _this.props.hiddenModal();
    });
    _defineProperty(_this, "handleBackdropClick", function (e) {
      if (!_this.props.backdrop) return;
      if (!_this.modalContent.contains(e.target)) {
        _this.props.toggle();
      }
    });
    _defineProperty(_this, "handleEscape", function (e) {
      if (e.keyCode === 27) {
        e.preventDefault();
        _this.props.toggle();
      }
    });
    return _this;
  }
  _inherits(Modal, _Component);
  return _createClass(Modal, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        children = _this$props.children,
        backdrop = _this$props.backdrop,
        backdropClassName = _this$props.backdropClassName,
        contentClassName = _this$props.contentClassName,
        className = _this$props.className,
        size = _this$props.size,
        side = _this$props.side,
        fullHeight = _this$props.fullHeight,
        frame = _this$props.frame,
        centered = _this$props.centered,
        position = _this$props.position,
        cascading = _this$props.cascading,
        modalStyle = _this$props.modalStyle,
        wrapClassName = _this$props.wrapClassName,
        animation = _this$props.animation,
        fade = _this$props.fade,
        tabIndex = _this$props.tabIndex,
        role = _this$props.role,
        id = _this$props.id,
        inline = _this$props.inline;
      var timeout = fade ? 300 : 0;
      var modalDialogClasses = (0, _classnames["default"])("modal-dialog", className, size && "modal-".concat(size), side && "modal-side", fullHeight && "modal-full-height", frame && "modal-frame", centered && "modal-dialog-centered", position && "modal-".concat(this.props.position), cascading && "cascading-modal", modalStyle && "modal-notify white-text modal-".concat(this.props.modalStyle));
      var wrapperClasses = (0, _classnames["default"])(inline ? false : "modal", fade && "fade", wrapClassName, fade && (animation || position && position.split("-").slice(-1)[0] || "top"));
      var backdropClasses = (0, _classnames["default"])("modal-backdrop", fade ? "fade" : "show", backdropClassName);
      var contentClasses = (0, _classnames["default"])("modal-content", contentClassName);
      var modalAttributes = (0, _utils.returnAttributes)({
        style: {
          display: "block"
        },
        id: id || undefined,
        tabIndex: tabIndex,
        role: role,
        "aria-hidden": "true"
      });
      return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, backdrop && /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.Transition, {
        timeout: timeout,
        "in": this.state.isOpen,
        appear: this.state.isOpen,
        mountOnEnter: true,
        unmountOnExit: true,
        onEntered: function onEntered(node) {
          return _this2.handleOnEntered("backdrop", node);
        },
        onExit: function onExit(node) {
          return _this2.handleOnExit("backdrop", node);
        },
        onExited: this.handleOnExited
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: backdropClasses
      })), /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.Transition, {
        timeout: timeout,
        "in": this.state.isOpen,
        appear: this.state.isOpen,
        mountOnEnter: true,
        unmountOnExit: true,
        onClick: this.handleBackdropClick,
        onEntered: function onEntered(node) {
          return _this2.handleOnEntered("modal", node);
        },
        onExit: function onExit(node) {
          return _this2.handleOnExit("modal", node);
        }
      }, /*#__PURE__*/_react["default"].createElement("div", _extends({
        onKeyUp: this.handleEscape,
        className: wrapperClasses
      }, modalAttributes), /*#__PURE__*/_react["default"].createElement("div", {
        className: modalDialogClasses,
        role: "document"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        ref: function ref(elem) {
          return _this2.modalContent = elem;
        },
        className: contentClasses
      }, children)))));
    }
  }]);
}(_react.Component);
Modal.defaultProps = {
  backdrop: true,
  fade: true,
  isOpen: false,
  autoFocus: true,
  role: "dialog",
  zIndex: 1050,
  modalTransitionTimeout: 300,
  backdropTransitionTimeout: 150,
  tabIndex: "-1"
};
Modal.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  backdrop: _propTypes["default"].bool,
  backdropClassName: _propTypes["default"].string,
  contentClassName: _propTypes["default"].string,
  modalClassName: _propTypes["default"].string,
  size: _propTypes["default"].string,
  side: _propTypes["default"].bool,
  fullHeight: _propTypes["default"].bool,
  frame: _propTypes["default"].bool,
  centered: _propTypes["default"].bool,
  position: _propTypes["default"].string,
  cascading: _propTypes["default"].bool,
  modalStyle: _propTypes["default"].string,
  wrapClassName: _propTypes["default"].string,
  animation: _propTypes["default"].string,
  fade: _propTypes["default"].bool,
  id: _propTypes["default"].string,
  role: _propTypes["default"].string,
  tabIndex: _propTypes["default"].string,
  showModal: _propTypes["default"].func,
  hiddenModal: _propTypes["default"].func,
  hideModal: _propTypes["default"].func
};
var _default = exports["default"] = Modal;