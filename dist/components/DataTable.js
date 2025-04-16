"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MDBDataTable = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _DataTableTable = _interopRequireDefault(require("./DataTableComponents/DataTableTable"));
var _DataTableTableScroll = _interopRequireDefault(require("./DataTableComponents/DataTableTableScroll"));
var _DataTableEntries = _interopRequireDefault(require("./DataTableComponents/DataTableEntries"));
var _DataTableSearch = _interopRequireDefault(require("./DataTableComponents/DataTableSearch"));
var _DataTableInfo = _interopRequireDefault(require("./DataTableComponents/DataTableInfo"));
var _DataTablePagination = _interopRequireDefault(require("./DataTableComponents/DataTablePagination"));
var _ExportToCSV = _interopRequireDefault(require("./pro/ExportToCSV"));
var _excluded = ["autoWidth", "bordered", "borderless", "btn", "children", "dark", "data", "entriesOptions", "entriesLabel", "exportToCSV", "fixed", "hover", "info", "infoLabel", "maxHeight", "order", "pagesAmount", "paging", "paginationLabel", "responsive", "responsiveSm", "responsiveMd", "responsiveLg", "responsiveXl", "searching", "searchLabel", "scrollX", "scrollY", "small", "sortable", "striped", "tbodyColor", "tbodyTextWhite", "theadColor", "theadTextWhite"];
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
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // PRO-START
// PRO-END
var DataTable = exports.MDBDataTable = /*#__PURE__*/function (_Component) {
  function DataTable(props) {
    var _this;
    _classCallCheck(this, DataTable);
    _this = _callSuper(this, DataTable, [props]);
    _defineProperty(_this, "fetchData", function (link) {
      fetch(link).then(function (res) {
        return res.json();
      }).then(function (json) {
        _this.setState({
          columns: json.columns,
          filteredRows: json.rows,
          rows: json.rows
        });
      })["catch"](function (err) {
        return console.log(err);
      });
    });
    _defineProperty(_this, "paginateRowsInitialy", function () {
      // findout how many pages there are need to be, then slice rows into pages
      var pagesAmount = Math.ceil(_this.state.rows.length / _this.state.entries);
      for (var i = 1; i <= pagesAmount; i++) {
        var pageEndIndex = i * _this.state.entries;
        _this.state.pages.push(_this.state.rows.slice(pageEndIndex - _this.state.entries, pageEndIndex));
      }
    });
    _defineProperty(_this, "handleEntriesChange", function (value) {
      _this.setState({
        entries: Array.isArray(value) ? value[0] : value
      }, function () {
        return _this.paginateRows();
      });
    });
    _defineProperty(_this, "handleSearchChange", function (e) {
      _this.setState({
        search: e.target.value
      }, function () {
        return _this.filterRows();
      });
    });
    _defineProperty(_this, "handleSort", function (field, sort) {
      if (sort !== "disabled") {
        _this.setState(function (prevState) {
          // asc by default
          switch (sort) {
            case "desc":
              prevState.rows.sort(function (a, b) {
                return a[field] > b[field] ? -1 : 1;
              });
              break;
            default:
              prevState.rows.sort(function (a, b) {
                return a[field] > b[field] ? 1 : -1;
              });
          }
          prevState.columns[prevState.columns.findIndex(function (column) {
            return column.field === field;
          })].sort = sort === "asc" ? "desc" : "asc";
          return {
            rows: prevState.rows,
            columns: prevState.columns
          };
        }, function () {
          return _this.filterRows();
        });
      } else return;
    });
    _defineProperty(_this, "filterRows", function () {
      _this.setState(function (prevState) {
        var filteredRows = prevState.rows.filter(function (row) {
          for (var key in row) {
            if (Object.prototype.hasOwnProperty.call(row, key)) {
              var stringValue = row[key] !== null ? row[key].toString() : '';
              if (stringValue.toLowerCase().match(_this.state.search.toLowerCase())) return true;
            }
          }
          return false;
        });
        if (filteredRows.length === 0) filteredRows.push({
          message: 'No matching records found',
          colspan: prevState.columns.length
        });
        return {
          filteredRows: filteredRows,
          activePage: 0
        };
      }, function () {
        return _this.paginateRows();
      });
    });
    _defineProperty(_this, "paginateRows", function () {
      // findout how many pages there are need to be, then slice rows into pages
      var pagesAmount = Math.ceil(_this.state.filteredRows.length / _this.state.entries);
      _this.setState(function (prevState) {
        prevState.pages = [];
        if (_this.props.paging) {
          for (var i = 1; i <= pagesAmount; i++) {
            var pageEndIndex = i * prevState.entries;
            prevState.pages.push(prevState.filteredRows.slice(pageEndIndex - prevState.entries, pageEndIndex));
          }
          prevState.activePage = prevState.activePage < prevState.pages.length || prevState.activePage === 0 ? prevState.activePage : prevState.pages.length - 1;
        } else {
          prevState.pages.push(prevState.filteredRows);
          prevState.activePage = 0;
        }
        return _objectSpread({}, prevState);
      });
    });
    _defineProperty(_this, "changeActivePage", function (page) {
      _this.setState({
        activePage: page
      });
    });
    _defineProperty(_this, "handleTableBodyScroll", function (e) {
      _this.setState({
        translateScrollHead: e.target.scrollLeft
      });
    });
    _this.state = {
      activePage: 0,
      columns: props.data.columns || [],
      entries: props.entries,
      filteredRows: props.data.rows || [],
      pages: [],
      rows: props.data.rows || [],
      search: '',
      translateScrollHead: 0,
      order: props.order || []
    };
    if (_this.props.paging) {
      _this.paginateRowsInitialy();
    } else {
      _this.state.pages.push(_this.state.rows);
    }
    return _this;
  }
  _inherits(DataTable, _Component);
  return _createClass(DataTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof this.props.data === 'string') {
        this.fetchData(this.props.data);
      }
      this.state.order.length && this.handleSort(this.state.order[0], this.state.order[1]);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.data !== this.props.data) {
        if (typeof this.props.data === 'string') {
          this.fetchData(this.props.data);
        } else {
          this.setState({
            columns: this.props.data.columns || [],
            filteredRows: this.props.data.rows || [],
            rows: this.props.data.rows || []
          });
        }
      }
      if (prevState.pages !== this.state.pages || prevState.rows !== this.state.rows) {
        this.paginateRows();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        autoWidth = _this$props.autoWidth,
        bordered = _this$props.bordered,
        borderless = _this$props.borderless,
        btn = _this$props.btn,
        children = _this$props.children,
        dark = _this$props.dark,
        data = _this$props.data,
        entriesOptions = _this$props.entriesOptions,
        entriesLabel = _this$props.entriesLabel,
        exportToCSV = _this$props.exportToCSV,
        fixed = _this$props.fixed,
        hover = _this$props.hover,
        info = _this$props.info,
        infoLabel = _this$props.infoLabel,
        maxHeight = _this$props.maxHeight,
        order = _this$props.order,
        pagesAmount = _this$props.pagesAmount,
        paging = _this$props.paging,
        paginationLabel = _this$props.paginationLabel,
        responsive = _this$props.responsive,
        responsiveSm = _this$props.responsiveSm,
        responsiveMd = _this$props.responsiveMd,
        responsiveLg = _this$props.responsiveLg,
        responsiveXl = _this$props.responsiveXl,
        searching = _this$props.searching,
        searchLabel = _this$props.searchLabel,
        scrollX = _this$props.scrollX,
        scrollY = _this$props.scrollY,
        small = _this$props.small,
        sortable = _this$props.sortable,
        striped = _this$props.striped,
        tbodyColor = _this$props.tbodyColor,
        tbodyTextWhite = _this$props.tbodyTextWhite,
        theadColor = _this$props.theadColor,
        theadTextWhite = _this$props.theadTextWhite,
        attributes = _objectWithoutProperties(_this$props, _excluded);
      var _this$state = this.state,
        columns = _this$state.columns,
        entries = _this$state.entries,
        filteredRows = _this$state.filteredRows,
        pages = _this$state.pages,
        activePage = _this$state.activePage,
        search = _this$state.search,
        translateScrollHead = _this$state.translateScrollHead;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "dataTables_wrapper dt-bootstrap4"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement(_DataTableEntries["default"], {
        paging: paging,
        entries: entries,
        handleEntriesChange: this.handleEntriesChange,
        entriesArr: entriesOptions,
        label: entriesLabel
      }), /*#__PURE__*/_react["default"].createElement(_DataTableSearch["default"], {
        handleSearchChange: this.handleSearchChange,
        search: search,
        searching: searching,
        label: searchLabel
      })), !scrollY && !scrollX && /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement(_DataTableTable["default"], _extends({
        autoWidth: autoWidth,
        bordered: bordered,
        borderless: borderless,
        btn: btn,
        dark: dark,
        fixed: fixed,
        hover: hover,
        responsive: responsive,
        responsiveSm: responsiveSm,
        responsiveMd: responsiveMd,
        responsiveLg: responsiveLg,
        responsiveXl: responsiveXl,
        small: small,
        striped: striped,
        theadColor: theadColor,
        theadTextWhite: theadTextWhite,
        columns: columns,
        handleSort: this.handleSort,
        sortable: sortable,
        tbodyColor: tbodyColor,
        tbodyTextWhite: tbodyTextWhite,
        rows: pages[activePage]
      }, attributes))), (scrollY || scrollX) && /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement(_DataTableTableScroll["default"], _extends({
        autoWidth: autoWidth,
        bordered: bordered,
        borderless: borderless,
        btn: btn,
        dark: dark,
        fixed: fixed,
        handleTableBodyScroll: this.handleTableBodyScroll,
        hover: hover,
        maxHeight: maxHeight,
        responsive: responsive,
        responsiveSm: responsiveSm,
        responsiveMd: responsiveMd,
        responsiveLg: responsiveLg,
        responsiveXl: responsiveXl,
        scrollX: scrollX,
        scrollY: scrollY,
        small: small,
        striped: striped,
        theadColor: theadColor,
        theadTextWhite: theadTextWhite,
        columns: columns,
        handleSort: this.handleSort,
        sortable: sortable,
        tbodyColor: tbodyColor,
        tbodyTextWhite: tbodyTextWhite,
        rows: pages[activePage],
        translateScrollHead: translateScrollHead
      }, attributes))), paging && /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement(_DataTableInfo["default"], {
        activePage: activePage,
        entries: entries,
        filteredRows: filteredRows,
        info: info,
        pages: pages,
        label: infoLabel
      }), /*#__PURE__*/_react["default"].createElement(_DataTablePagination["default"], {
        activePage: activePage,
        changeActivePage: this.changeActivePage,
        pages: pages,
        pagesAmount: pagesAmount,
        label: paginationLabel
      })), exportToCSV && /*#__PURE__*/_react["default"].createElement("div", {
        className: "row justify-content-end"
      }, /*#__PURE__*/_react["default"].createElement(_ExportToCSV["default"], {
        columns: columns,
        data: pages,
        color: "primary"
      }, "Download CSV")));
    }
  }]);
}(_react.Component);
DataTable.propTypes = {
  autoWidth: _propTypes["default"].bool,
  bordered: _propTypes["default"].bool,
  borderless: _propTypes["default"].bool,
  btn: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  dark: _propTypes["default"].bool,
  data: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  entries: _propTypes["default"].number,
  entriesLabel: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].object]),
  entriesOptions: _propTypes["default"].arrayOf(_propTypes["default"].number),
  exportToCSV: _propTypes["default"].bool,
  fixed: _propTypes["default"].bool,
  hover: _propTypes["default"].bool,
  info: _propTypes["default"].bool,
  infoLabel: _propTypes["default"].arrayOf(_propTypes["default"].string),
  maxHeight: _propTypes["default"].string,
  order: _propTypes["default"].arrayOf(_propTypes["default"].string),
  pagesAmount: _propTypes["default"].number,
  paging: _propTypes["default"].bool,
  paginationLabel: _propTypes["default"].arrayOf(_propTypes["default"].string),
  responsive: _propTypes["default"].bool,
  responsiveSm: _propTypes["default"].bool,
  responsiveMd: _propTypes["default"].bool,
  responsiveLg: _propTypes["default"].bool,
  responsiveXl: _propTypes["default"].bool,
  searching: _propTypes["default"].bool,
  searchLabel: _propTypes["default"].string,
  scrollX: _propTypes["default"].bool,
  scrollY: _propTypes["default"].bool,
  sortable: _propTypes["default"].bool,
  small: _propTypes["default"].bool,
  striped: _propTypes["default"].bool,
  theadColor: _propTypes["default"].string,
  theadTextWhite: _propTypes["default"].bool,
  tbodyColor: _propTypes["default"].string,
  tbodyTextWhite: _propTypes["default"].bool
};
DataTable.defaultProps = {
  autoWidth: false,
  bordered: false,
  borderless: false,
  btn: false,
  dark: false,
  data: {},
  entries: 10,
  entriesLabel: "Show entries",
  entriesOptions: [10, 20, 50, 100],
  exportToCSV: false,
  fixed: false,
  hover: false,
  info: true,
  infoLabel: ["Showing", "to", "of", "entries"],
  order: [],
  pagesAmount: 8,
  paging: true,
  paginationLabel: ["Previous", "Next"],
  responsive: false,
  responsiveSm: false,
  responsiveMd: false,
  responsiveLg: false,
  responsiveXl: false,
  searching: true,
  searchLabel: "Search",
  scrollX: false,
  scrollY: false,
  sortable: true,
  small: false,
  striped: false,
  theadColor: '',
  theadTextWhite: false,
  tbodyColor: '',
  tbodyTextWhite: false
};
var _default = exports["default"] = DataTable;