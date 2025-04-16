"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBSpinner = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
var Spinner = exports.MDBSpinner = /*#__PURE__*/function (_Component) {
  function Spinner() {
    _classCallCheck(this, Spinner);
    return _callSuper(this, Spinner, arguments);
  }
  _inherits(Spinner, _Component);
  return _createClass(Spinner, [{
    key: "theChosenColorSpinner",
    value: function theChosenColorSpinner(spinnerClasses) {
      if (this.props.multicolor) {
        var theSpinnerItself = /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "spinner-layer spinner-blue"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "circle-clipper left"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "circle"
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "gap-patch"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "circle"
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "circle-clipper right"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "circle"
        }))), /*#__PURE__*/_react["default"].createElement("div", {
          className: "spinner-layer spinner-red"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "circle-clipper left"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "circle"
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "gap-patch"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "circle"
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "circle-clipper right"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "circle"
        }))), /*#__PURE__*/_react["default"].createElement("div", {
          className: "spinner-layer spinner-yellow"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "circle-clipper left"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "circle"
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "gap-patch"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "circle"
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "circle-clipper right"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "circle"
        }))), /*#__PURE__*/_react["default"].createElement("div", {
          className: "spinner-layer spinner-green"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "circle-clipper left"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "circle"
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "gap-patch"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "circle"
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "circle-clipper right"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "circle"
        }))));
        return theSpinnerItself;
      } else {
        var _theSpinnerItself = /*#__PURE__*/_react["default"].createElement("div", {
          className: spinnerClasses
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "circle-clipper left"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "circle"
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "gap-patch"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "circle"
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "circle-clipper right"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "circle"
        })));
        return _theSpinnerItself;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        className = _this$props.className,
        big = _this$props.big,
        small = _this$props.small,
        red = _this$props.red,
        green = _this$props.green,
        yellow = _this$props.yellow;
      var wrapperClasses = (0, _classnames["default"])("preloader-wrapper", "active", big ? "big" : false, small ? "small" : false, className);
      var spinnerClasses = (0, _classnames["default"])("spinner-layer", red ? "spinner-red-only" : false, green ? "spinner-green-only" : false, yellow ? "spinner-yellow-only" : "spinner-blue-only", className);
      if (this.props.crazy) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: wrapperClasses
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: wrapperClasses
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: wrapperClasses
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: wrapperClasses
        }, this.theChosenColorSpinner(spinnerClasses)))));
      } else {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: wrapperClasses
        }, this.theChosenColorSpinner(spinnerClasses));
      }
    }
  }]);
}(_react.Component);
Spinner.propTypes = {
  className: _propTypes["default"].string,
  big: _propTypes["default"].bool,
  small: _propTypes["default"].bool,
  crazy: _propTypes["default"].bool,
  red: _propTypes["default"].bool,
  green: _propTypes["default"].bool,
  yellow: _propTypes["default"].bool,
  multicolor: _propTypes["default"].bool
};
Spinner.defaultProps = {
  tag: "div"
};
var _default = exports["default"] = Spinner;