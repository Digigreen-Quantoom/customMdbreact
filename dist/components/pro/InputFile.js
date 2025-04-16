"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBFileInput = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
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
var InputFile = exports.MDBFileInput = /*#__PURE__*/function (_React$Component) {
  function InputFile(props) {
    var _this;
    _classCallCheck(this, InputFile);
    _this = _callSuper(this, InputFile, [props]);
    _defineProperty(_this, "onChangeHandler", function (e) {
      _this.fileChange(e.target.files);
      _this.props.getValue && _this.props.getValue(e.target.files);
    });
    _this.state = {
      files: false
    };
    _this.fileChange = _this.fileChange.bind(_this);
    return _this;
  }
  _inherits(InputFile, _React$Component);
  return _createClass(InputFile, [{
    key: "fileChange",
    value: function fileChange(files) {
      if (files.length > 0) {
        if (files.length > 1) {
          var filesNames = [];
          for (var i = 0; i < files.length; i++) {
            filesNames.push(files[i].name);
          }
          this.setState({
            files: filesNames
          });
        } else {
          this.setState({
            files: files[0].name
          });
        }
      } else {
        this.setState({
          files: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        className = _this$props.className,
        btnTitle = _this$props.btnTitle,
        btnColor = _this$props.btnColor,
        textFieldTitle = _this$props.textFieldTitle,
        multiple = _this$props.multiple;
      var btnClass = (0, _classnames["default"])("btn", "btn-" + btnColor, "btn-sm", "float-left");
      var inputFieldClass = (0, _classnames["default"])("file-path validate", this.state.files ? "valid" : false, className);
      return /*#__PURE__*/_react["default"].createElement("form", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "file-field md-form"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: btnClass
      }, /*#__PURE__*/_react["default"].createElement("span", null, btnTitle), /*#__PURE__*/_react["default"].createElement("input", {
        multiple: multiple,
        onChange: this.onChangeHandler,
        type: "file"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "file-path-wrapper"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        className: inputFieldClass,
        type: "text",
        placeholder: this.state.files ? this.state.files : textFieldTitle
      }))));
    }
  }]);
}(_react["default"].Component);
InputFile.propTypes = {
  className: _propTypes["default"].string,
  btnTitle: _propTypes["default"].string,
  btnColor: _propTypes["default"].string,
  textFieldTitle: _propTypes["default"].string,
  multiple: _propTypes["default"].bool
};
InputFile.defaultProps = {
  btnTitle: "Choose file",
  textFieldTitle: "Upload your file",
  btnColor: "primary"
};
var _default = exports["default"] = InputFile;