"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBCarousel = void 0;
var _react = _interopRequireWildcard(require("react"));
var _CarouselControl = _interopRequireDefault(require("./CarouselControl"));
var _CarouselIndicators = _interopRequireDefault(require("./CarouselIndicators"));
var _CarouselIndicator = _interopRequireDefault(require("./CarouselIndicator"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
require("./Carousel.css");
var _excluded = ["activeItem", "children", "className", "multiItem", "slide", "thumbnails", "interval", "testimonial", "tag", "length", "showControls", "showIndicators"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
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
var Carousel = exports.MDBCarousel = /*#__PURE__*/function (_Component) {
  function Carousel(props) {
    var _this;
    _classCallCheck(this, Carousel);
    _this = _callSuper(this, Carousel, [props]);
    _defineProperty(_this, "restartInterval", function () {
      if (_this.props.interval !== false) {
        clearInterval(_this.cycleInterval);
        _this.cycleInterval = setInterval(_this.next, _this.props.interval);
      }
    });
    _defineProperty(_this, "next", function () {
      var nextItem = _this.state.activeItem + 1;
      if (nextItem > _this.state.length) {
        _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
          activeItem: 1
        }));
      } else {
        _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
          activeItem: nextItem
        }));
      }
      _this.restartInterval();
    });
    _defineProperty(_this, "prev", function () {
      var prevItem = _this.state.activeItem - 1;
      if (prevItem < 1) {
        _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
          activeItem: _this.state.length
        }));
      } else {
        _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
          activeItem: prevItem
        }));
      }
      _this.restartInterval();
    });
    _defineProperty(_this, "componentDidMount", function () {
      if (_this.props.interval === false) {
        return;
      }
      _this.cycleInterval = setInterval(_this.next, _this.props.interval);

      // get images src atr
      if (_this.props.thumbnails) {
        var CarouselItemsArray = _this.carouselRef.current.querySelectorAll('.carousel-item img');
        var srcArray = Array.prototype.map.call(CarouselItemsArray, function (item) {
          return item.src;
        });
        _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
          srcArray: srcArray
        }));
      }
    });
    _this.state = {
      activeItem: _this.props.activeItem,
      length: _this.props.length,
      slide: _this.props.slide,
      srcArray: []
    };
    _this.carouselRef = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }
  _inherits(Carousel, _Component);
  return _createClass(Carousel, [{
    key: "goToIndex",
    value: function goToIndex(item) {
      if (this.state.activeItem !== item) {
        this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
          activeItem: item
        }));
      }
      this.restartInterval();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.interval === false) {
        return;
      }
      clearInterval(this.cycleInterval);
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      return {
        activeItem: this.state.activeItem,
        length: this.state.length,
        slide: this.state.slide
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        activeItem = _this$props.activeItem,
        children = _this$props.children,
        className = _this$props.className,
        multiItem = _this$props.multiItem,
        slide = _this$props.slide,
        thumbnails = _this$props.thumbnails,
        interval = _this$props.interval,
        testimonial = _this$props.testimonial,
        Tag = _this$props.tag,
        length = _this$props.length,
        showControls = _this$props.showControls,
        showIndicators = _this$props.showIndicators,
        attributes = _objectWithoutProperties(_this$props, _excluded);
      var ariaLabel = 'carousel';
      var classes = (0, _classnames["default"])('carousel', multiItem ? 'carousel-multi-item' : 'carousel-fade', thumbnails ? 'carousel-thumbnails' : '', testimonial ? 'testimonial-carousel' : '', className);
      var CarouselIndicatorsArray = [];
      var _loop = function _loop(i) {
        CarouselIndicatorsArray.push(/*#__PURE__*/_react["default"].createElement(_CarouselIndicator["default"], {
          img: thumbnails ? _this2.state.srcArray[i - 1] : null,
          key: i,
          active: _this2.state.activeItem === i ? true : false,
          onClick: function onClick() {
            _this2.goToIndex(i);
          }
        }));
      };
      for (var i = 1; i <= this.state.length; i++) {
        _loop(i);
      }
      return /*#__PURE__*/_react["default"].createElement(Tag, _extends({
        ref: this.carouselRef
      }, attributes, {
        className: classes,
        "aria-label": ariaLabel
      }), showControls && multiItem && /*#__PURE__*/_react["default"].createElement("div", {
        className: "controls-top"
      }, /*#__PURE__*/_react["default"].createElement(_CarouselControl["default"], {
        testimonial: testimonial ? true : false,
        multiItem: multiItem ? true : false,
        iconLeft: true,
        className: "btn-floating",
        direction: "prev",
        role: "button",
        onClick: this.prev
      }), /*#__PURE__*/_react["default"].createElement(_CarouselControl["default"], {
        testimonial: testimonial ? true : false,
        multiItem: multiItem ? true : false,
        iconRight: true,
        className: "btn-floating",
        direction: "next",
        role: "button",
        onClick: this.next
      })), children, showControls && !multiItem && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_CarouselControl["default"], {
        testimonial: testimonial ? true : false,
        multiItem: multiItem ? true : false,
        direction: "prev",
        role: "button",
        onClick: this.prev
      }), /*#__PURE__*/_react["default"].createElement(_CarouselControl["default"], {
        testimonial: testimonial ? true : false,
        multiItem: multiItem ? true : false,
        direction: "next",
        role: "button",
        onClick: this.next
      })), /*#__PURE__*/_react["default"].createElement(_CarouselIndicators["default"], null, showIndicators && CarouselIndicatorsArray));
    }
  }]);
}(_react.Component);
Carousel.propTypes = {
  activeItem: _propTypes["default"].number,
  tag: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]),
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  multiItem: _propTypes["default"].bool,
  interval: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].bool]),
  thumbnails: _propTypes["default"].bool,
  testimonial: _propTypes["default"].bool,
  showControls: _propTypes["default"].bool,
  showIndicators: _propTypes["default"].bool,
  slide: _propTypes["default"].bool,
  length: _propTypes["default"].number
};
Carousel.defaultProps = {
  tag: 'div',
  interval: 6000,
  showControls: true,
  showIndicators: true
};
Carousel.childContextTypes = {
  activeItem: _propTypes["default"].any,
  length: _propTypes["default"].any,
  slide: _propTypes["default"].any
};
var _default = exports["default"] = Carousel;