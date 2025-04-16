"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBChipsInput = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Chip = _interopRequireDefault(require("./Chip"));
var _excluded = ["className", "tag", "handleClose", "placeholder", "secondaryPlaceholder", "chipSize", "chipColor", "chipText", "chipGradient", "chipWaves"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
var ChipsInput = exports.MDBChipsInput = /*#__PURE__*/function (_Component) {
  function ChipsInput(props) {
    var _this;
    _classCallCheck(this, ChipsInput);
    _this = _callSuper(this, ChipsInput, [props]);
    _defineProperty(_this, "handleClick", function () {
      _this.setState({
        isTouched: true
      });
      _this.inputRef.current.focus();
    });
    _defineProperty(_this, "handleChange", function (e) {
      _this.setState({
        inputValue: e.target.value,
        isReadyToDelete: false
      });
    });
    _defineProperty(_this, "handleEnter", function (e) {
      // 1) get the value:
      var newChipString = _this.inputRef.current.value;

      // 2) upon pressing Enter:
      if (e.which === 13) {
        // 3) if the string is empty or consists only of spaces: return
        if (/^ *$/.test(newChipString)) {
          return;
        }

        // 3.5) of the string is already in the array, delete input value and return
        if (_this.state.chipsList.includes(newChipString)) {
          _this.setState({
            inputValue: ""
          });
          return;
        }

        // 4) else: add the input value to the array and reset it on input:
        _this.setState({
          inputValue: "",
          chipsList: [].concat(_toConsumableArray(_this.state.chipsList), [newChipString])
        });
      }

      // 5) in case the keyboard events caused the input to be empty, prepare to delete chips:
      if (_this.state.inputValue === "") {
        _this.setState({
          isReadyToDelete: true
        });
      }
    });
    _defineProperty(_this, "handleBackspace", function (e) {
      // 1) if the input is already empty (is ready to delete chips) and Backspace is pressed:
      if (_this.state.isReadyToDelete && e.which === 8) {
        // 2) grab the array
        var array = _this.state.chipsList;

        // 3) delete its last element
        // const popTheArray = array.pop();

        // 4) and update the state with the new array.
        _this.setState({
          chipsList: array
        });
      }
    });
    _defineProperty(_this, "handleClose", function (param) {
      return function (e) {
        // Close functionality:
        // 1) get the chips list from state:
        var currentChipsList = _this.state.chipsList;

        // 2) check the chip's index in the said array:
        var index = _this.state.chipsList.indexOf(param);

        // 3) delete the array item using splice:
        currentChipsList.splice(index, 1);

        // 4) update state with the new chips list.
        _this.setState({
          chipsList: currentChipsList
        });
      };
    });
    _defineProperty(_this, "handleOutsideClick", function () {
      _this.setState({
        isTouched: false
      });
    });
    _this.state = {
      chipsList: _this.props.chips,
      inputValue: "",
      isTouched: false,
      isReadyToDelete: false
    };
    _this.inputRef = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }
  _inherits(ChipsInput, _Component);
  return _createClass(ChipsInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        className = _this$props.className,
        Tag = _this$props.tag,
        handleClose = _this$props.handleClose,
        placeholder = _this$props.placeholder,
        secondaryPlaceholder = _this$props.secondaryPlaceholder,
        chipSize = _this$props.chipSize,
        chipColor = _this$props.chipColor,
        chipText = _this$props.chipText,
        chipGradient = _this$props.chipGradient,
        chipWaves = _this$props.chipWaves,
        attributes = _objectWithoutProperties(_this$props, _excluded);
      var renderedChips = this.state.chipsList.map(function (chip) {
        return /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
          close: true,
          handleClose: _this2.handleClose(chip),
          key: chip.toString(),
          size: chipSize,
          bgColor: chipColor,
          text: chipText,
          gradient: chipGradient,
          waves: chipWaves
        }, chip);
      });
      var calculatePlaceholder;
      if (this.state.chipsList.length < 1) {
        calculatePlaceholder = placeholder;
      } else {
        calculatePlaceholder = secondaryPlaceholder;
      }
      var classes = (0, _classnames["default"])("chips", this.state.isTouched && "focus", className);
      return /*#__PURE__*/_react["default"].createElement(Tag, _extends({}, attributes, {
        className: classes,
        onClick: this.handleClick,
        onKeyUp: this.handleBackspace
      }), renderedChips, /*#__PURE__*/_react["default"].createElement("input", {
        className: "input",
        type: "text",
        placeholder: calculatePlaceholder,
        ref: this.inputRef,
        onKeyUp: this.handleEnter,
        value: this.state.inputValue,
        onChange: this.handleChange,
        onBlur: this.handleOutsideClick
      }));
    }
  }]);
}(_react.Component);
ChipsInput.propTypes = {
  tag: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]),
  className: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  secondaryPlaceholder: _propTypes["default"].string,
  chipSize: _propTypes["default"].string,
  chipColor: _propTypes["default"].string,
  chipText: _propTypes["default"].string,
  chipGradient: _propTypes["default"].string
};
ChipsInput.defaultProps = {
  tag: "div",
  chips: []
};
var _default = exports["default"] = ChipsInput;