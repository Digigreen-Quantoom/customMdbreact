"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _TimpiePickerClockHand = _interopRequireDefault(require("./TimpiePickerClockHand"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
var propTypes = {
  className: _propTypes["default"].string.isRequired,
  handleChange: _propTypes["default"].func.isRequired,
  max: _propTypes["default"].number.isRequired,
  min: _propTypes["default"].number.isRequired,
  rotate: _propTypes["default"].number.isRequired,
  step: _propTypes["default"].number.isRequired,
  startFromInner: _propTypes["default"].bool.isRequired,
  allowedValues: _propTypes["default"].arrayOf(_propTypes["default"].number),
  autoSwitch: _propTypes["default"].bool,
  color: _propTypes["default"].string,
  "double": _propTypes["default"].bool,
  handleModeChange: _propTypes["default"].func,
  size: _propTypes["default"].number,
  value: _propTypes["default"].number
};
var defaultProps = {
  allowedValues: [],
  autoSwitch: false,
  color: 'priamry',
  "double": false,
  handleModeChange: function handleModeChange() {},
  size: 270,
  value: 0
};
var TimePickerClock = /*#__PURE__*/function (_Component) {
  function TimePickerClock(props) {
    var _this;
    _classCallCheck(this, TimePickerClock);
    _this = _callSuper(this, TimePickerClock, [props]);
    _defineProperty(_this, "buildComponentState", function () {
      var _this$props = _this.props,
        size = _this$props.size,
        max = _this$props.max,
        min = _this$props.min,
        _double = _this$props["double"],
        rotate = _this$props.rotate,
        value = _this$props.value;
      var clockRadius = size / 2;
      var digitsAmount = max - min + 1;
      var digitsInRound = _double ? digitsAmount / 2 : digitsAmount;
      var degreesPerUnit = 360 / digitsInRound;
      var outerRadius = clockRadius - 4;
      var innerRadius = clockRadius - Math.max(clockRadius * 0.2, 40); // cant be lower than 40
      var degrees = degreesPerUnit * Math.PI / 180;
      var handAngle = rotate + degreesPerUnit * (value - min);
      _this.setState({
        clockRadius: clockRadius,
        degrees: degrees,
        degreesPerUnit: degreesPerUnit,
        digitsInRound: digitsInRound,
        handAngle: handAngle,
        innerRadius: innerRadius,
        outerRadius: outerRadius,
        value: value
      }, function () {
        return _this.setState({
          handScale: _this.getScale(value)
        });
      });
    });
    _defineProperty(_this, "getScale", function (value) {
      if (_this.props.startFromInner && _this.props["double"]) {
        return value - _this.props.min >= _this.state.digitsInRound ? _this.state.outerRadius / _this.state.clockRadius : _this.state.innerRadius / _this.state.clockRadius;
      }
      return value - _this.props.min >= _this.state.digitsInRound ? _this.state.innerRadius / _this.state.clockRadius : _this.state.outerRadius / _this.state.clockRadius;
    });
    _defineProperty(_this, "getAngle", function (center, p1) {
      var value = 2 * Math.atan2(p1.y - center.y - _this.euclidean(center, p1), p1.x - center.x);
      return Math.abs(value * 180 / Math.PI);
    });
    _defineProperty(_this, "getCoords", function (e) {
      var _this$clockRef$curren = _this.clockRef.current.getBoundingClientRect(),
        width = _this$clockRef$curren.width,
        top = _this$clockRef$curren.top,
        left = _this$clockRef$curren.left;
      var _ref = 'touches' in e ? e.touches[0] : e,
        clientX = _ref.clientX,
        clientY = _ref.clientY;
      var center = {
        x: width / 2,
        y: -width / 2
      };
      var coords = {
        x: clientX - left,
        y: top - clientY
      };
      return {
        center: center,
        coords: coords
      };
    });
    _defineProperty(_this, "setPosition", function (value) {
      var radius = (_this.state.clockRadius - 24) * _this.getScale(value);
      var rotateRadians = _this.props.rotate * Math.PI / 180;
      return {
        x: Math.round(Math.sin((value - _this.props.min) * _this.state.degrees + rotateRadians) * radius),
        y: Math.round(-Math.cos((value - _this.props.min) * _this.state.degrees + rotateRadians) * radius)
      };
    });
    _defineProperty(_this, "isValueAllowed", function (value) {
      return _this.props.allowedValues.length ? _this.props.allowedValues.find(function (item) {
        return item === value;
      }) : value >= _this.props.min && value <= _this.props.max;
    });
    _defineProperty(_this, "isOnInner", function (center, coords) {
      var centerDistance = _this.euclidean(center, coords);
      var betweenRadiusDistance = (_this.state.outerRadius + _this.state.innerRadius) / 2 - 16;
      if (_this.props["double"]) {
        return _this.props.startFromInner ? centerDistance > betweenRadiusDistance : centerDistance < betweenRadiusDistance;
      }
      return false;
    });
    _defineProperty(_this, "computeTimeNumber", function (number) {
      return number < 10 ? "0".concat(number.toString()) : "".concat(number.toString());
    });
    _defineProperty(_this, "computeHandAngle", function (exactAngle) {
      if (360 % _this.props.max !== 0) {
        return exactAngle >= 360 - _this.state.degreesPerUnit / 2 ? 0 : exactAngle;
      }
      return exactAngle <= _this.state.degreesPerUnit / 2 ? 360 : exactAngle;
    });
    _defineProperty(_this, "euclidean", function (p0, p1) {
      var dx = p1.x - p0.x;
      var dy = p1.y - p0.y;
      return Math.sqrt(dx * dx + dy * dy);
    });
    _defineProperty(_this, "transformPosition", function (value) {
      var _this$setPosition = _this.setPosition(value),
        x = _this$setPosition.x,
        y = _this$setPosition.y;
      return {
        transform: "translate(".concat(x, "px, ").concat(y, "px)")
      };
    });
    _defineProperty(_this, "genClockDigits", function () {
      var children = [];
      var _loop = function _loop(value) {
        var classes = (0, _classnames["default"])('clockpicker-tick', value === _this.state.value && 'active', !_this.isValueAllowed(value) && 'disabled');
        children.push(/*#__PURE__*/_react["default"].createElement("span", {
          className: classes,
          style: Object.assign(_this.transformPosition(value), {
            fontSize: !_this.props["double"] ? '140%' : _this.props.startFromInner ? value <= 12 ? '120%' : '100%' : value > 12 ? '120%' : '100%'
          }),
          key: value,
          onMouseDown: function onMouseDown(e) {
            return _this.onMouseDown(e, value);
          },
          onTouchStart: function onTouchStart(e) {
            return _this.onMouseDown(e, value);
          }
        }, _this.props.max > 24 ? _this.computeTimeNumber(value) : value === 24 ? '00' : value));
      };
      for (var value = _this.props.min; value <= _this.props.max; value += _this.props.step) {
        _loop(value);
      }
      return children;
    });
    _defineProperty(_this, "onMouseDown", function (e, value) {
      e.preventDefault();
      _this.setState({
        isDragging: true
      });
      var handAngle = _this.props.rotate + _this.state.degreesPerUnit * (value - _this.props.min);
      var handScale = _this.getScale(value);
      if (_this.state.value !== value && _this.isValueAllowed(value)) {
        _this.updateValue(value, handAngle, handScale);
      }
    });
    _defineProperty(_this, "onMouseUp", function (e) {
      e.preventDefault();
      if (_this.state.isDragging) {
        _this.setState({
          isDragging: false
        });
        if (_this.props.autoSwitch) _this.props.handleModeChange('m');
      }
    });
    _defineProperty(_this, "onMouseLeave", function (e) {
      e.preventDefault();
      if (_this.state.isDragging) _this.setState({
        isDragging: false
      });
    });
    _defineProperty(_this, "onDragMove", function (e) {
      e.preventDefault();
      if (!_this.state.isDragging && e.type !== 'click') return;
      var _this$getCoords = _this.getCoords(e),
        center = _this$getCoords.center,
        coords = _this$getCoords.coords;
      var isOnInner = _this.isOnInner(center, coords);
      var exactHandAngle = _this.getAngle(center, coords);
      var computedHandAngle = _this.computeHandAngle(exactHandAngle);
      var value = Math.round((computedHandAngle - _this.props.rotate) / _this.state.degreesPerUnit) + _this.props.min + (isOnInner ? _this.state.digitsInRound : 0);
      var handAngle = _this.props.rotate + _this.state.degreesPerUnit * (value - _this.props.min);
      var handScale = _this.getScale(value);
      if (_this.state.value !== value && _this.isValueAllowed(value)) {
        _this.updateValue(value, handAngle, handScale);
      }
    });
    _defineProperty(_this, "updateValue", function (value, handAngle, handScale) {
      _this.props.handleChange(value);
      _this.setState({
        value: value,
        handAngle: handAngle,
        handScale: handScale
      });
    });
    _this.state = {
      clockRadius: 135,
      degrees: 30,
      digitsInRound: 12,
      degreesPerUnit: 30,
      handAngle: 0,
      handScale: 1,
      isDragging: false,
      innerRadius: 120,
      outerRadius: 266,
      value: 0
    };
    _this.clockRef = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }
  _inherits(TimePickerClock, _Component);
  return _createClass(TimePickerClock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.buildComponentState();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.max !== this.props.max || prevProps.min !== this.props.min || this.state.value !== this.props.value) {
        this.buildComponentState();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var classes = (0, _classnames["default"])('time-picker-clock', 'clockpicker-dial', this.props.className, this.state.value === null && 'time-picker-clock--indeterminate');
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: classes,
        style: {
          height: "".concat(this.props.size, "px"),
          width: "".concat(this.props.size, "px"),
          visibility: 'visible'
        },
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onMouseLeave: this.onMouseLeave,
        onTouchStart: this.onMouseDown,
        onTouchEnd: this.onMouseUp,
        onMouseMove: this.onDragMove,
        onTouchMove: this.onDragMove,
        ref: this.clockRef
      }, /*#__PURE__*/_react["default"].createElement(_TimpiePickerClockHand["default"], {
        between: this.state.value % this.props.step !== 0,
        color: this.props.color,
        angle: this.state.handAngle,
        scale: this.state.handScale
      }), this.genClockDigits());
    }
  }]);
}(_react.Component);
TimePickerClock.propTypes = propTypes;
TimePickerClock.defaultProps = defaultProps;
var _default = exports["default"] = TimePickerClock;