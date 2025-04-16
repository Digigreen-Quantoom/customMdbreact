"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Fa = _interopRequireDefault(require("../Fa"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var MDBStreak = function MDBStreak(_ref) {
  var children = _ref.children,
    by = _ref.by,
    byClass = _ref.byClass,
    wrapperClass = _ref.wrapperClass,
    size = _ref.size,
    quoteClass = _ref.quoteClass,
    photo = _ref.photo,
    overlayClass = _ref.overlayClass;
  var byClasses = (0, _classnames["default"])("text-center", "font-italic", "mb-0", byClass);
  var wrapperClasses = (0, _classnames["default"])("streak", photo && "streak-photo", size && "streak-".concat(size), wrapperClass);
  var quoteClasses = (0, _classnames["default"])("h2-responsive", quoteClass);
  var overlayClasses = (0, _classnames["default"])("flex-center", overlayClass);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: wrapperClasses,
    style: {
      backgroundImage: "url(\"".concat(photo, "\")"),
      backgroundAttachment: "fixed"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: overlayClasses
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "mb-0 list-unstyled"
  }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("h2", {
    className: quoteClasses
  }, /*#__PURE__*/_react["default"].createElement(_Fa["default"], {
    icon: "quote-left"
  }), " ", children, " ", /*#__PURE__*/_react["default"].createElement(_Fa["default"], {
    icon: "quote-right"
  }))), /*#__PURE__*/_react["default"].createElement("li", {
    className: "mb-0"
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: byClasses
  }, "~ ", by)))));
};
MDBStreak.propTypes = {
  size: _propTypes["default"].oneOf(['lg', 'md']),
  by: _propTypes["default"].string,
  wrapperClass: _propTypes["default"].string,
  byClass: _propTypes["default"].string,
  quoteClass: _propTypes["default"].string,
  photo: _propTypes["default"].string,
  overlayClass: _propTypes["default"].string
};
MDBStreak.defaultProps = {
  wrapperClass: "grey lighten-3"
};
var _default = exports["default"] = MDBStreak;