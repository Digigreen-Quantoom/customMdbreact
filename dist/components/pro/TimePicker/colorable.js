"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _default = exports["default"] = {
  name: 'colorable',
  props: {
    color: String,
    dark: Boolean,
    light: Boolean
  },
  data: function data() {
    return {
      defaultColor: null
    };
  },
  computed: {
    computedColor: function computedColor() {
      return this.color || this.defaultColor;
    },
    themeClasses: function themeClasses() {
      return {
        'theme--light': this.light,
        'theme--dark': this.dark
      };
    }
  },
  methods: {
    addBackgroundColorClassChecks: function addBackgroundColorClassChecks() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.computedColor;
      var classes = Object.assign({}, obj);
      if (color) {
        classes[color] = true;
      }
      return classes;
    },
    addTextColorClassChecks: function addTextColorClassChecks() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.computedColor;
      var classes = Object.assign({}, obj);
      if (color) {
        var _color$trim$split = color.trim().split(' '),
          _color$trim$split2 = _slicedToArray(_color$trim$split, 2),
          colorName = _color$trim$split2[0],
          colorModifier = _color$trim$split2[1];
        classes[colorName + '--text'] = true;
        colorModifier && (classes['text--' + colorModifier] = true);
      }
      return classes;
    }
  }
};