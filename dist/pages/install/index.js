"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/install/index"],{

/***/ "./node_modules/.pnpm/@nutui+nutui-react-taro@2.0.20_biqbaboplfbrettd7655fr4n2y/node_modules/@nutui/nutui-react-taro/dist/esm/SearchBar/style/css.js":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@nutui+nutui-react-taro@2.0.20_biqbaboplfbrettd7655fr4n2y/node_modules/@nutui/nutui-react-taro/dist/esm/SearchBar/style/css.js ***!
  \***********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./node_modules/.pnpm/@nutui+nutui-react-taro@2.0.20_biqbaboplfbrettd7655fr4n2y/node_modules/@nutui/nutui-react-taro/dist/esm/SearchBar/style/style.css");


/***/ }),

/***/ "./node_modules/.pnpm/@nutui+nutui-react-taro@2.0.20_biqbaboplfbrettd7655fr4n2y/node_modules/@nutui/nutui-react-taro/dist/esm/VirtualList/style/css.js":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@nutui+nutui-react-taro@2.0.20_biqbaboplfbrettd7655fr4n2y/node_modules/@nutui/nutui-react-taro/dist/esm/VirtualList/style/css.js ***!
  \*************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./node_modules/.pnpm/@nutui+nutui-react-taro@2.0.20_biqbaboplfbrettd7655fr4n2y/node_modules/@nutui/nutui-react-taro/dist/esm/VirtualList/style/style.css");


/***/ }),

/***/ "./node_modules/.pnpm/@nutui+nutui-react-taro@2.0.20_biqbaboplfbrettd7655fr4n2y/node_modules/@nutui/nutui-react-taro/dist/esm/searchbar.taro-7daf43fc.js":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@nutui+nutui-react-taro@2.0.20_biqbaboplfbrettd7655fr4n2y/node_modules/@nutui/nutui-react-taro/dist/esm/searchbar.taro-7daf43fc.js ***!
  \***************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: function() { return /* binding */ SearchBar; }
/* harmony export */ });
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _nutui_icons_react_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nutui/icons-react-taro */ "./node_modules/.pnpm/@nutui+icons-react-taro@0.0.1/node_modules/@nutui/icons-react-taro/dist/es/index.es.js");
/* harmony import */ var _configprovider_taro_c5ff4877_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./configprovider.taro-c5ff4877.js */ "./node_modules/.pnpm/@nutui+nutui-react-taro@2.0.20_biqbaboplfbrettd7655fr4n2y/node_modules/@nutui/nutui-react-taro/dist/esm/configprovider.taro-c5ff4877.js");
/* harmony import */ var _typings_11d83a22_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typings-11d83a22.js */ "./node_modules/.pnpm/@nutui+nutui-react-taro@2.0.20_biqbaboplfbrettd7655fr4n2y/node_modules/@nutui/nutui-react-taro/dist/esm/typings-11d83a22.js");






var defaultProps = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _typings_11d83a22_js__WEBPACK_IMPORTED_MODULE_3__.C), {}, {
  placeholder: "",
  shape: "square",
  disabled: false,
  maxLength: 9999,
  clearable: true,
  readOnly: false,
  autoFocus: false,
  left: "",
  right: "",
  rightIn: "",
  leftIn: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_nutui_icons_react_taro__WEBPACK_IMPORTED_MODULE_1__.Search, {
    size: "12"
  })
});
var SearchBar = function SearchBar(props) {
  var classPrefix = "nut-searchbar";
  var _useConfig = (0,_configprovider_taro_c5ff4877_js__WEBPACK_IMPORTED_MODULE_4__.u)(),
    locale = _useConfig.locale;
  var searchRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
      return props.value;
    }),
    _useState2 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _defaultProps$props = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, defaultProps), props),
    placeholder = _defaultProps$props.placeholder,
    shape = _defaultProps$props.shape,
    className = _defaultProps$props.className,
    disabled = _defaultProps$props.disabled,
    maxLength = _defaultProps$props.maxLength,
    clearable = _defaultProps$props.clearable,
    readOnly = _defaultProps$props.readOnly,
    autoFocus = _defaultProps$props.autoFocus,
    right = _defaultProps$props.right,
    left = _defaultProps$props.left,
    leftIn = _defaultProps$props.leftIn,
    rightIn = _defaultProps$props.rightIn,
    onChange = _defaultProps$props.onChange,
    onFocus = _defaultProps$props.onFocus,
    onBlur = _defaultProps$props.onBlur,
    onClear = _defaultProps$props.onClear,
    onSearch = _defaultProps$props.onSearch,
    onInputClick = _defaultProps$props.onInputClick;
  var forceFocus = function forceFocus() {
    var searchSelf = searchRef.current;
    searchSelf && searchSelf.focus();
  };
  var change = function change(event) {
    var value2 = event.target.value;
    onChange && (onChange == null ? void 0 : onChange(value2, event));
    setValue(value2);
    value2 === "" && forceFocus();
  };
  var focus = function focus(event) {
    var value2 = event.target.value;
    onFocus && (onFocus == null ? void 0 : onFocus(value2, event));
  };
  var blur = function blur(event) {
    var searchSelf = searchRef.current;
    searchSelf && searchSelf.blur();
    var value2 = event.target.value;
    onBlur && (onBlur == null ? void 0 : onBlur(value2, event));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setValue(props.value);
  }, [props.value]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    autoFocus && forceFocus();
  }, [autoFocus]);
  var renderField = function renderField() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      className: "".concat(classPrefix, "__input ").concat(clearable ? "".concat(classPrefix, "__input-clear") : ""),
      ref: searchRef,
      style: (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props.style),
      value: value || "",
      placeholder: placeholder || locale.placeholder,
      disabled: disabled,
      readOnly: readOnly,
      maxLength: maxLength,
      onKeyPress: onKeypress,
      onChange: function onChange(e) {
        return change(e);
      },
      onFocus: function onFocus(e) {
        return focus(e);
      },
      onBlur: function onBlur(e) {
        return blur(e);
      },
      onClick: function onClick(e) {
        return clickInput(e);
      }
    });
  };
  var clickInput = function clickInput(e) {
    onInputClick && onInputClick(e);
  };
  var renderLeftIn = function renderLeftIn() {
    if (!leftIn) return null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "".concat(classPrefix, "__leftin ").concat(classPrefix, "__icon")
    }, leftIn);
  };
  var renderLeft = function renderLeft() {
    if (!left) return null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "".concat(classPrefix, "__left")
    }, left);
  };
  var renderRightIn = function renderRightIn() {
    if (!rightIn) return null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "".concat(classPrefix, "__rightin ").concat(classPrefix, "__icon")
    }, rightIn);
  };
  var renderRight = function renderRight() {
    if (!right) return null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "".concat(classPrefix, "__right")
    }, right);
  };
  var handleClear = function handleClear() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "".concat(classPrefix, "__clear ").concat(rightIn ? "pos-right" : ""),
      onClick: function onClick(e) {
        return clearaVal(e);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_nutui_icons_react_taro__WEBPACK_IMPORTED_MODULE_1__.CircleClose, {
      color: "#555",
      size: 12
    }));
  };
  var clearaVal = function clearaVal(event) {
    if (disabled || readOnly) {
      return;
    }
    setValue("");
    onClear && onClear(event);
    forceFocus();
  };
  var onKeypress = function onKeypress(e) {
    if (e.key === "Enter" || e.keyCode === 13) {
      if (typeof e.cancelable !== "boolean" || e.cancelable) {
        e.preventDefault();
      }
      onSearch && onSearch(value);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "".concat(classPrefix, " ").concat(disabled ? "".concat(classPrefix, "__disabled") : "", "  ").concat(className || ""),
    style: (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props.style)
  }, renderLeft(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "".concat(classPrefix, "__content ").concat(shape === "round" ? "".concat(classPrefix, "__round") : "")
  }, renderLeftIn(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "nut-searchbar__input-box"
  }, renderField()), renderRightIn(), clearable && value && handleClear()), renderRight());
};
SearchBar.defaultProps = defaultProps;
SearchBar.displayName = "NutSearchBar";


/***/ }),

/***/ "./node_modules/.pnpm/@nutui+nutui-react-taro@2.0.20_biqbaboplfbrettd7655fr4n2y/node_modules/@nutui/nutui-react-taro/dist/esm/virtuallist.taro-c75a4e71.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@nutui+nutui-react-taro@2.0.20_biqbaboplfbrettd7655fr4n2y/node_modules/@nutui/nutui-react-taro/dist/esm/virtuallist.taro-c75a4e71.js ***!
  \*****************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: function() { return /* binding */ VirtualList; }
/* harmony export */ });
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.17_hdidbuxseer5gwswpbd4f5fzyu/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/.pnpm/@tarojs+taro@3.6.17_hdidbuxseer5gwswpbd4f5fzyu/node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _typings_11d83a22_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typings-11d83a22.js */ "./node_modules/.pnpm/@nutui+nutui-react-taro@2.0.20_biqbaboplfbrettd7655fr4n2y/node_modules/@nutui/nutui-react-taro/dist/esm/typings-11d83a22.js");



var _excluded = ["list", "itemRender", "itemHeight", "itemEqual", "overscan", "key", "onScroll", "className", "containerHeight"];




var initPositinoCache = function initPositinoCache(reaItemSize) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var index = 0;
  var positions = Array(length);
  while (index < length) {
    positions[index] = {
      index: index,
      height: reaItemSize,
      width: reaItemSize,
      top: index * reaItemSize,
      bottom: (index + 1) * reaItemSize,
      left: index * reaItemSize,
      right: (index + 1) * reaItemSize
    };
    index++;
  }
  return positions;
};
var binarySearch = function binarySearch(positionsList, horizontal) {
  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var start = 0;
  var end = positionsList.length - 1;
  var tempIndex = null;
  var key = horizontal ? "right" : "bottom";
  while (start <= end) {
    var midIndex = Math.floor((start + end) / 2);
    var midValue = positionsList[midIndex][key];
    if (midValue === value) {
      return midIndex + 1;
    }
    if (midValue < value) {
      start = midIndex + 1;
    } else if (midValue > value) {
      if (tempIndex === null || tempIndex > midIndex) {
        tempIndex = midIndex;
      }
      end = midIndex - 1;
    }
  }
  tempIndex = tempIndex || 0;
  return tempIndex;
};
var updateItemSize = function updateItemSize(positions, items, sizeKey) {
  var newPos = positions.concat();
  Array.from(items).forEach(function (item) {
    var index = Number(item.getAttribute("data-index"));
    var styleVal = item.getAttribute("style");
    if (styleVal && styleVal.includes("none")) return;
    var nowSize = item.getBoundingClientRect()[sizeKey];
    var oldSize = positions[index][sizeKey];
    var dValue = oldSize - nowSize;
    if (dValue) {
      if (sizeKey === "width") {
        newPos[index].right -= dValue;
        newPos[index][sizeKey] = nowSize;
        for (var k = index + 1; k < positions.length; k++) {
          newPos[k].left = positions[k - 1].right;
          newPos[k].right -= dValue;
        }
      } else if (sizeKey === "height") {
        newPos[index].bottom -= dValue;
        newPos[index][sizeKey] = nowSize;
        for (var _k = index + 1; _k < positions.length; _k++) {
          newPos[_k].top = positions[_k - 1].bottom;
          newPos[_k].bottom -= dValue;
        }
      }
    }
  });
};
var clientHeight = (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.getSystemInfoSync)().windowHeight - 5 || 667;
var defaultProps = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _typings_11d83a22_js__WEBPACK_IMPORTED_MODULE_3__.C), {}, {
  list: [],
  containerHeight: clientHeight,
  itemHeight: 66,
  itemEqual: true,
  overscan: 2
});
var VirtualList = function VirtualList(props) {
  var _defaultProps$props = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, defaultProps), props),
    list = _defaultProps$props.list,
    itemRender = _defaultProps$props.itemRender,
    itemHeight = _defaultProps$props.itemHeight,
    itemEqual = _defaultProps$props.itemEqual,
    overscan = _defaultProps$props.overscan,
    key = _defaultProps$props.key,
    onScroll = _defaultProps$props.onScroll,
    className = _defaultProps$props.className,
    containerHeight = _defaultProps$props.containerHeight,
    rest = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_defaultProps$props, _excluded);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
    startOffset = _useState2[0],
    setStartOffset = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState3, 2),
    start = _useState4[0],
    setStart = _useState4[1];
  var scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var itemsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      index: 0,
      left: 0,
      top: 0,
      bottom: 0,
      width: 0,
      height: 0,
      right: 0
    }]),
    _useState6 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState5, 2),
    positions = _useState6[0],
    setPositions = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(containerHeight || 0),
    _useState8 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState7, 2),
    offSetSize = _useState8[0],
    setOffSetSize = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      startOffset: 0,
      startIndex: 0,
      overStart: 0,
      endIndex: 10
      // 可视区域结束索引
    }),
    _useState10 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState9, 2),
    options = _useState10[0],
    setOptions = _useState10[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setPositions(function (options2) {
      return (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, options2), {}, {
        endIndex: visibleCount()
      });
    });
  }, [itemHeight, overscan, offSetSize]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (containerHeight) return;
    setOffSetSize(getContainerHeight());
  }, [containerHeight]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var pos = initPositinoCache(itemHeight, list.length);
    setPositions(pos);
  }, [itemHeight, list]);
  var getContainerHeight = function getContainerHeight() {
    var initH = itemHeight * list.length;
    return initH < clientHeight ? initH + overscan * itemHeight - 5 : Math.min(containerHeight, clientHeight);
  };
  var visibleCount = function visibleCount() {
    return Math.ceil(getContainerHeight() / itemHeight) + overscan;
  };
  var end = function end() {
    return start + visibleCount();
  };
  var listHeight = function listHeight() {
    return list.length * itemHeight;
  };
  var visibleData = function visibleData() {
    return list.slice(start, Math.min(end(), list.length));
  };
  var updateTotalSize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (!itemsRef.current) return;
    var items = itemsRef.current.children;
    if (!items.length) return;
    updateItemSize(positions, items, "height");
  }, [positions]);
  var listScroll = function listScroll(e) {
    var scrollTop = e.detail ? e.detail.scrollTop : e.target.scrollTop;
    var scrollSize = Math.floor(scrollTop);
    var startIndex = binarySearch(positions, false, scrollSize);
    var overStart = startIndex - overscan > -1 ? startIndex - overscan : 0;
    var endIndex = end();
    if (!itemEqual) {
      updateTotalSize();
    }
    setStart(Math.floor(scrollTop / itemHeight));
    setOptions({
      startOffset: startOffset,
      startIndex: startIndex,
      overStart: overStart,
      endIndex: endIndex
    });
    if (end() > list.length - 1) {
      onScroll && onScroll();
    }
    setStartOffset(scrollTop - scrollTop % itemHeight);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
    className: className ? "".concat(className, " nut-virtualList-box") : "nut-virtualList-box"
  }, rest), {}, {
    style: {
      height: containerHeight ? "".concat(offSetSize, "px") : ""
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.ScrollView, {
    scrollY: true,
    type: "list",
    ref: scrollRef,
    className: "nut-virtuallist",
    style: {
      height: "".concat(getContainerHeight(), "px")
    },
    onScroll: listScroll
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "nut-virtuallist-phantom",
    style: {
      height: "".concat(listHeight(), "px")
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "nut-virtuallist-container",
    ref: itemsRef,
    style: {
      transform: "translate3d(0, ".concat(startOffset, "px, 0)")
    }
  }, visibleData().map(function (data, index) {
    var overStart = options.overStart;
    var dataIndex = overStart + index;
    key && data[key] ? data[key] : dataIndex;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      "data-index": "".concat(dataIndex),
      className: "nut-virtuallist-item",
      key: "".concat(data),
      style: {
        height: "".concat(itemEqual ? "".concat(itemHeight, "px") : "auto")
      }
    }, itemRender ? itemRender(data, dataIndex, index) : data);
  }))));
};
VirtualList.defaultProps = defaultProps;
VirtualList.displayName = "NutVirtualList";


/***/ }),

/***/ "./node_modules/.pnpm/babel-loader@8.2.1_qxiufrq5yurergrmrmsa5fwjoe/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/install/index.tsx":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/babel-loader@8.2.1_qxiufrq5yurergrmrmsa5fwjoe/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/install/index.tsx ***!
  \***************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _nutui_nutui_react_taro_dist_esm_VirtualList_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nutui/nutui-react-taro/dist/esm/VirtualList/style/css */ "./node_modules/.pnpm/@nutui+nutui-react-taro@2.0.20_biqbaboplfbrettd7655fr4n2y/node_modules/@nutui/nutui-react-taro/dist/esm/VirtualList/style/css.js");
/* harmony import */ var _nutui_nutui_react_taro_dist_esm_VirtualList__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @nutui/nutui-react-taro/dist/esm/VirtualList */ "./node_modules/.pnpm/@nutui+nutui-react-taro@2.0.20_biqbaboplfbrettd7655fr4n2y/node_modules/@nutui/nutui-react-taro/dist/esm/virtuallist.taro-c75a4e71.js");
/* harmony import */ var _nutui_nutui_react_taro_dist_esm_Sticky_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nutui/nutui-react-taro/dist/esm/Sticky/style/css */ "./node_modules/.pnpm/@nutui+nutui-react-taro@2.0.20_biqbaboplfbrettd7655fr4n2y/node_modules/@nutui/nutui-react-taro/dist/esm/Sticky/style/css.js");
/* harmony import */ var _nutui_nutui_react_taro_dist_esm_Sticky__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @nutui/nutui-react-taro/dist/esm/Sticky */ "./node_modules/.pnpm/@nutui+nutui-react-taro@2.0.20_biqbaboplfbrettd7655fr4n2y/node_modules/@nutui/nutui-react-taro/dist/esm/sticky.taro-2b9a5231.js");
/* harmony import */ var _nutui_nutui_react_taro_dist_esm_SearchBar_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nutui/nutui-react-taro/dist/esm/SearchBar/style/css */ "./node_modules/.pnpm/@nutui+nutui-react-taro@2.0.20_biqbaboplfbrettd7655fr4n2y/node_modules/@nutui/nutui-react-taro/dist/esm/SearchBar/style/css.js");
/* harmony import */ var _nutui_nutui_react_taro_dist_esm_SearchBar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @nutui/nutui-react-taro/dist/esm/SearchBar */ "./node_modules/.pnpm/@nutui+nutui-react-taro@2.0.20_biqbaboplfbrettd7655fr4n2y/node_modules/@nutui/nutui-react-taro/dist/esm/searchbar.taro-7daf43fc.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _nutui_nutui_react_taro_dist_esm_Button_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nutui/nutui-react-taro/dist/esm/Button/style/css */ "./node_modules/.pnpm/@nutui+nutui-react-taro@2.0.20_biqbaboplfbrettd7655fr4n2y/node_modules/@nutui/nutui-react-taro/dist/esm/Button/style/css.js");
/* harmony import */ var _nutui_nutui_react_taro_dist_esm_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nutui/nutui-react-taro/dist/esm/Button */ "./node_modules/.pnpm/@nutui+nutui-react-taro@2.0.20_biqbaboplfbrettd7655fr4n2y/node_modules/@nutui/nutui-react-taro/dist/esm/button.taro-25f559e1.js");
/* harmony import */ var _nutui_nutui_react_taro_dist_esm_Divider_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nutui/nutui-react-taro/dist/esm/Divider/style/css */ "./node_modules/.pnpm/@nutui+nutui-react-taro@2.0.20_biqbaboplfbrettd7655fr4n2y/node_modules/@nutui/nutui-react-taro/dist/esm/Divider/style/css.js");
/* harmony import */ var _nutui_nutui_react_taro_dist_esm_Divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nutui/nutui-react-taro/dist/esm/Divider */ "./node_modules/.pnpm/@nutui+nutui-react-taro@2.0.20_biqbaboplfbrettd7655fr4n2y/node_modules/@nutui/nutui-react-taro/dist/esm/divider.taro-c61ab869.js");
/* harmony import */ var _nutui_nutui_react_taro_dist_esm_Checkbox_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nutui/nutui-react-taro/dist/esm/Checkbox/style/css */ "./node_modules/.pnpm/@nutui+nutui-react-taro@2.0.20_biqbaboplfbrettd7655fr4n2y/node_modules/@nutui/nutui-react-taro/dist/esm/Checkbox/style/css.js");
/* harmony import */ var _nutui_nutui_react_taro_dist_esm_Checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nutui/nutui-react-taro/dist/esm/Checkbox */ "./node_modules/.pnpm/@nutui+nutui-react-taro@2.0.20_biqbaboplfbrettd7655fr4n2y/node_modules/@nutui/nutui-react-taro/dist/esm/checkbox.taro-22cd35c4.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.17_hdidbuxseer5gwswpbd4f5fzyu/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/.pnpm/@tarojs+taro@3.6.17_hdidbuxseer5gwswpbd4f5fzyu/node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* provided dependency */ var document = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/.pnpm/@tarojs+runtime@3.6.17/node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"];




















var Install = function Install() {
  var _document$getElementB;
  var containerTopRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);
  var tabList = [{
    title: '全部',
    key: 'all'
  }, {
    title: '设计',
    key: 'design'
  }, {
    title: '受理',
    key: 'accept'
  }, {
    title: '完成',
    key: 'finish'
  }, {
    title: '验收',
    key: 'acceptance'
  }, {
    title: '废弃',
    key: 'abandoned'
  }];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
    _useState2 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState, 2),
    searchKeyword = _useState2[0],
    setSearchKeyword = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)('all'),
    _useState4 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState3, 2),
    currentTab = _useState4[0],
    setCurrentTab = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),
    _useState6 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState5, 2),
    list = _useState6[0],
    setList = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(1),
    _useState8 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState7, 2),
    pageNo = _useState8[0],
    setPageNo = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
    _useState10 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState9, 2),
    isLoading = _useState10[0],
    setIsLoading = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),
    _useState12 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState11, 2),
    checked = _useState12[0],
    setChecked = _useState12[1];
  var onHandleSearch = function onHandleSearch(value) {
    console.log(value, 'value');
  };
  var itemVariable = function itemVariable(data, dataIndex) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "rounded-md bg-white mx-4 px-4 py-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "flex items-center justify-between gap-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_nutui_nutui_react_taro_dist_esm_Checkbox__WEBPACK_IMPORTED_MODULE_10__.C, {
          value: data
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "flex-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "flex justify-between mb-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "text-md",
              children: "\u674E\u56DB"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "flex gap-1 text-xs text-white",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "rounded-full leading-5 h-5 px-2 bg-red-500",
                children: "\u5DF2\u7B7E\u6536"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "rounded-full leading-5 h-5 px-2 bg-blue-500",
                children: "\u5F81\u4FE1\u53D7\u7406"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "flex justify-between text-xs text-slate-500",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              children: "\u5206\u914D\u5458\u5DE5\uFF1A\u5F20\u4E09"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              children: "\u88C5\u673A\u5BB9\u91CF(KW):100"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_nutui_nutui_react_taro_dist_esm_Divider__WEBPACK_IMPORTED_MODULE_11__.D, {
        className: "border-slate-50",
        style: {
          borderColor: '#e5e5e5'
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "flex justify-end gap-2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_nutui_nutui_react_taro_dist_esm_Button__WEBPACK_IMPORTED_MODULE_12__.B, {
          size: "small",
          type: "info",
          onClick: function onClick(e) {
            e.preventDefault();
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default().navigateTo({
              url: "/pages/install-form/index?id=".concat(dataIndex)
            });
          },
          children: "\u67E5\u770B\u8D44\u6599"
        })
      })]
    }, dataIndex);
  };
  var onScroll = function onScroll() {
    if (pageNo > 10 || isLoading) return;
    setIsLoading(true);
    setTimeout(function () {
      setPageNo(pageNo + 1);
      setIsLoading(false);
    }, 30);
  };
  var getData = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(function () {
    var datas = [];
    var pageSize = 90;
    for (var i = 10; i < pageSize; i++) {
      datas.push(i);
    }
    setList(function (list) {
      return [].concat((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(list), datas);
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    getData();
  }, [getData]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    ref: containerTopRef,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_nutui_nutui_react_taro_dist_esm_Sticky__WEBPACK_IMPORTED_MODULE_14__.S, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
        className: "bg-white",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_nutui_nutui_react_taro_dist_esm_SearchBar__WEBPACK_IMPORTED_MODULE_16__.S, {
          maxLength: 10,
          placeholder: "\u8BF7\u8F93\u5165\u4E1A\u4E3B\u59D3\u540D",
          right: "\u641C\u7D22",
          value: searchKeyword,
          onChange: function onChange(value) {
            console.log(value, 'value');
            setSearchKeyword(value);
          },
          onSearch: onHandleSearch
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
          className: "flex justify-center py-4 bg-white",
          children: tabList.map(function (item) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
              className: "flex-1 text-xs text-center",
              onClick: function onClick() {
                setCurrentTab(item.key);
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                className: "".concat(currentTab === item.key ? " text-blue-600 font-semibold" : 'text-slate-500', "  mb-1"),
                children: item.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                className: "".concat(currentTab === item.key ? " text-blue-600 fonts" : 'text-xs text-slate-800'),
                children: '10'
              })]
            }, item.key);
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
      id: "scrollContainer",
      style: {
        height: 'calc(100vh - 198px)'
      },
      className: "py-4 box-border bg-_hf5f6f7_",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_nutui_nutui_react_taro_dist_esm_Checkbox__WEBPACK_IMPORTED_MODULE_10__.C.Group, {
        style: {
          height: 'calc(100% - 46px)'
        },
        value: checked,
        onChange: function onChange(value) {
          // setChecked(() => value)
          setChecked(value);
          console.log(value, 'value');
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_nutui_nutui_react_taro_dist_esm_VirtualList__WEBPACK_IMPORTED_MODULE_17__.V, {
          list: list,
          itemEqual: false,
          itemRender: itemVariable,
          onScroll: onScroll,
          containerHeight: (((_document$getElementB = document.getElementById("scrollContainer")) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.offsetHeight) || 600) - 46
        })
      })
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (Install);

/***/ }),

/***/ "./src/pages/install/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/install/index.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/.pnpm/@tarojs+runtime@3.6.17/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_pnpm_babel_loader_8_2_1_qxiufrq5yurergrmrmsa5fwjoe_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/.pnpm/babel-loader@8.2.1_qxiufrq5yurergrmrmsa5fwjoe/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.tsx */ "./node_modules/.pnpm/babel-loader@8.2.1_qxiufrq5yurergrmrmsa5fwjoe/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/install/index.tsx");


var config = {"navigationBarTitleText":"电站安装","navigationBarBackgroundColor":"#fff"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_pnpm_babel_loader_8_2_1_qxiufrq5yurergrmrmsa5fwjoe_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/install/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_babel_loader_8_2_1_qxiufrq5yurergrmrmsa5fwjoe_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/.pnpm/@nutui+nutui-react-taro@2.0.20_biqbaboplfbrettd7655fr4n2y/node_modules/@nutui/nutui-react-taro/dist/esm/SearchBar/style/style.css":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@nutui+nutui-react-taro@2.0.20_biqbaboplfbrettd7655fr4n2y/node_modules/@nutui/nutui-react-taro/dist/esm/SearchBar/style/style.css ***!
  \**************************************************************************************************************************************************************/
/***/ (function() {

// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/.pnpm/@nutui+nutui-react-taro@2.0.20_biqbaboplfbrettd7655fr4n2y/node_modules/@nutui/nutui-react-taro/dist/esm/VirtualList/style/style.css":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@nutui+nutui-react-taro@2.0.20_biqbaboplfbrettd7655fr4n2y/node_modules/@nutui/nutui-react-taro/dist/esm/VirtualList/style/style.css ***!
  \****************************************************************************************************************************************************************/
/***/ (function() {

// extracted by mini-css-extract-plugin


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/install/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map