(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["taro"],{

/***/ "./node_modules/.pnpm/@tarojs+api@3.6.17/node_modules/@tarojs/api/dist/index.esm.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tarojs+api@3.6.17/node_modules/@tarojs/api/dist/index.esm.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Taro; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/.pnpm/@tarojs+runtime@3.6.17/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/shared */ "./node_modules/.pnpm/@tarojs+shared@3.6.17/node_modules/@tarojs/shared/dist/shared.esm.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js");







function isFunction(x) {
  return typeof x === 'function';
}
function isUndefined(x) {
  return typeof x === 'undefined';
}
function isObject(x) {
  return x && (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(x) === 'object';
}
var isBadObj = function isBadObj(x) {
  return !isObject(x);
};
function throwTypeError(s) {
  throw new TypeError(s);
}
if (!isFunction(Object.assign)) {
  // Must be writable: true, enumerable: false, configurable: true
  Object.assign = function (target) {
    // .length of function is 2
    if (target == null) {
      // TypeError if undefined or null
      throwTypeError('Cannot convert undefined or null to object');
    }
    var to = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];
      if (nextSource != null) {
        // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  };
}
if (!isFunction(Object.defineProperties)) {
  Object.defineProperties = function (obj, properties) {
    function convertToDescriptor(desc) {
      function hasProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }
      if (isBadObj(desc)) {
        throwTypeError('bad desc');
      }
      var d = {};
      if (hasProperty(desc, 'enumerable')) d.enumerable = !!desc.enumerable;
      if (hasProperty(desc, 'configurable')) {
        d.configurable = !!desc.configurable;
      }
      if (hasProperty(desc, 'value')) d.value = desc.value;
      if (hasProperty(desc, 'writable')) d.writable = !!desc.writable;
      if (hasProperty(desc, 'get')) {
        var g = desc.get;
        if (!isFunction(g) && !isUndefined(g)) {
          throwTypeError('bad get');
        }
        d.get = g;
      }
      if (hasProperty(desc, 'set')) {
        var s = desc.set;
        if (!isFunction(s) && !isUndefined(s)) {
          throwTypeError('bad set');
        }
        d.set = s;
      }
      if (('get' in d || 'set' in d) && ('value' in d || 'writable' in d)) {
        throwTypeError('identity-confused descriptor');
      }
      return d;
    }
    if (isBadObj(obj)) throwTypeError('bad obj');
    properties = Object(properties);
    var keys = Object.keys(properties);
    var descs = [];
    for (var i = 0; i < keys.length; i++) {
      descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);
    }
    for (var _i = 0; _i < descs.length; _i++) {
      Object.defineProperty(obj, descs[_i][0], descs[_i][1]);
    }
    return obj;
  };
}
var ENV_TYPE = {
  WEAPP: 'WEAPP',
  SWAN: 'SWAN',
  ALIPAY: 'ALIPAY',
  TT: 'TT',
  QQ: 'QQ',
  JD: 'JD',
  WEB: 'WEB',
  RN: 'RN',
  HARMONY: 'HARMONY',
  QUICKAPP: 'QUICKAPP'
};
var isWeb = (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__.isWebPlatform)();
function getEnv() {
  if (true) {
    return ENV_TYPE.WEAPP;
  } else {}
}
var Chain = /*#__PURE__*/function () {
  function Chain(requestParams, interceptors, index) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Chain);
    this.index = index || 0;
    this.requestParams = requestParams;
    this.interceptors = interceptors || [];
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Chain, [{
    key: "proceed",
    value: function proceed(requestParams) {
      this.requestParams = requestParams;
      if (this.index >= this.interceptors.length) {
        throw new Error('chain 参数错误, 请勿直接修改 request.chain');
      }
      var nextInterceptor = this._getNextInterceptor();
      var nextChain = this._getNextChain();
      var p = nextInterceptor(nextChain);
      var res = p.catch(function (err) {
        return Promise.reject(err);
      });
      Object.keys(p).forEach(function (k) {
        return isFunction(p[k]) && (res[k] = p[k]);
      });
      return res;
    }
  }, {
    key: "_getNextInterceptor",
    value: function _getNextInterceptor() {
      return this.interceptors[this.index];
    }
  }, {
    key: "_getNextChain",
    value: function _getNextChain() {
      return new Chain(this.requestParams, this.interceptors, this.index + 1);
    }
  }]);
  return Chain;
}();
var Link = /*#__PURE__*/function () {
  function Link(interceptor) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Link);
    this.taroInterceptor = interceptor;
    this.chain = new Chain();
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Link, [{
    key: "request",
    value: function request(requestParams) {
      var chain = this.chain;
      var taroInterceptor = this.taroInterceptor;
      chain.interceptors = chain.interceptors.filter(function (interceptor) {
        return interceptor !== taroInterceptor;
      }).concat(taroInterceptor);
      return chain.proceed((0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, requestParams));
    }
  }, {
    key: "addInterceptor",
    value: function addInterceptor(interceptor) {
      this.chain.interceptors.push(interceptor);
    }
  }, {
    key: "cleanInterceptors",
    value: function cleanInterceptors() {
      this.chain = new Chain();
    }
  }]);
  return Link;
}();
function interceptorify(promiseifyApi) {
  return new Link(function (chain) {
    return promiseifyApi(chain.requestParams);
  });
}
function timeoutInterceptor(chain) {
  var requestParams = chain.requestParams;
  var p;
  var res = new Promise(function (resolve, reject) {
    var timeout = setTimeout(function () {
      timeout = null;
      reject(new Error('网络链接超时,请稍后再试！'));
    }, requestParams && requestParams.timeout || 60000);
    p = chain.proceed(requestParams);
    p.then(function (res) {
      if (!timeout) return;
      clearTimeout(timeout);
      resolve(res);
    }).catch(function (err) {
      timeout && clearTimeout(timeout);
      reject(err);
    });
  });
  if (!isUndefined(p) && isFunction(p.abort)) res.abort = p.abort;
  return res;
}
function logInterceptor(chain) {
  var requestParams = chain.requestParams;
  var method = requestParams.method,
    data = requestParams.data,
    url = requestParams.url;

  // eslint-disable-next-line no-console
  console.log("http ".concat(method || 'GET', " --> ").concat(url, " data: "), data);
  var p = chain.proceed(requestParams);
  var res = p.then(function (res) {
    // eslint-disable-next-line no-console
    console.log("http <-- ".concat(url, " result:"), res);
    return res;
  });
  if (isFunction(p.abort)) res.abort = p.abort;
  return res;
}
var interceptors = /*#__PURE__*/Object.freeze({
  __proto__: null,
  timeoutInterceptor: timeoutInterceptor,
  logInterceptor: logInterceptor
});
function Behavior(options) {
  return options;
}
function getPreload(current) {
  return function (key, val) {
    current.preloadData = isObject(key) ? key : (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, key, val);
  };
}
var defaultDesignWidth = 750;
var defaultDesignRatio = {
  640: 2.34 / 2,
  750: 1,
  828: 1.81 / 2
};
var defaultBaseFontSize = 20;
var defaultUnitPrecision = 5;
var defaultTargetUnit = 'rpx';
function getInitPxTransform(taro) {
  return function (config) {
    var _config$designWidth = config.designWidth,
      designWidth = _config$designWidth === void 0 ? defaultDesignWidth : _config$designWidth,
      _config$deviceRatio = config.deviceRatio,
      deviceRatio = _config$deviceRatio === void 0 ? defaultDesignRatio : _config$deviceRatio,
      _config$baseFontSize = config.baseFontSize,
      baseFontSize = _config$baseFontSize === void 0 ? defaultBaseFontSize : _config$baseFontSize,
      _config$targetUnit = config.targetUnit,
      targetUnit = _config$targetUnit === void 0 ? defaultTargetUnit : _config$targetUnit,
      _config$unitPrecision = config.unitPrecision,
      unitPrecision = _config$unitPrecision === void 0 ? defaultUnitPrecision : _config$unitPrecision;
    taro.config = taro.config || {};
    taro.config.designWidth = designWidth;
    taro.config.deviceRatio = deviceRatio;
    taro.config.baseFontSize = baseFontSize;
    taro.config.targetUnit = targetUnit;
    taro.config.unitPrecision = unitPrecision;
  };
}
function getPxTransform(taro) {
  return function (size) {
    var config = taro.config || {};
    var baseFontSize = config.baseFontSize;
    var deviceRatio = config.deviceRatio || defaultDesignRatio;
    var designWidth = function () {
      var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return isFunction(config.designWidth) ? config.designWidth(input) : config.designWidth || defaultDesignWidth;
    }(size);
    if (!(designWidth in deviceRatio)) {
      throw new Error("deviceRatio \u914D\u7F6E\u4E2D\u4E0D\u5B58\u5728 ".concat(designWidth, " \u7684\u8BBE\u7F6E\uFF01"));
    }
    var targetUnit = config.targetUnit || defaultTargetUnit;
    var unitPrecision = config.unitPrecision || defaultUnitPrecision;
    var formatSize = ~~size;
    var rootValue = 1 / deviceRatio[designWidth];
    switch (targetUnit) {
      case 'rem':
        rootValue *= baseFontSize * 2;
        break;
      case 'px':
        rootValue *= 2;
        break;
    }
    var val = formatSize / rootValue;
    if (unitPrecision >= 0 && unitPrecision <= 100) {
      val = Number(val.toFixed(unitPrecision));
    }
    return val + targetUnit;
  };
}

/* eslint-disable camelcase */
var Taro = {
  Behavior: Behavior,
  getEnv: getEnv,
  ENV_TYPE: ENV_TYPE,
  Link: Link,
  interceptors: interceptors,
  Current: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.Current,
  getCurrentInstance: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance,
  options: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.options,
  nextTick: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.nextTick,
  eventCenter: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.eventCenter,
  Events: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.Events,
  getInitPxTransform: getInitPxTransform,
  interceptorify: interceptorify
};
Taro.initPxTransform = getInitPxTransform(Taro);
Taro.preload = getPreload(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.Current);
Taro.pxTransform = getPxTransform(Taro);


/***/ }),

/***/ "./node_modules/.pnpm/@tarojs+plugin-framework-react@3.6.17_aqybhsjoaeiiy7hjuh6e6fbd4i/node_modules/@tarojs/plugin-framework-react/dist/runtime.js":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tarojs+plugin-framework-react@3.6.17_aqybhsjoaeiiy7hjuh6e6fbd4i/node_modules/@tarojs/plugin-framework-react/dist/runtime.js ***!
  \*********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createReactApp: function() { return /* binding */ createReactApp; }
/* harmony export */ });
/* unused harmony exports connectReactPage, createNativeComponentConfig, createNativePageConfig, setReconciler, useAddToFavorites, useDidHide, useDidShow, useError, useLaunch, useLoad, useOptionMenuClick, usePageNotFound, usePageScroll, usePullDownRefresh, usePullIntercept, useReachBottom, useReady, useResize, useRouter, useSaveExitState, useScope, useShareAppMessage, useShareTimeline, useTabItemTap, useTitleClick, useUnhandledRejection, useUnload */
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/shared */ "./node_modules/.pnpm/@tarojs+shared@3.6.17/node_modules/@tarojs/shared/dist/shared.esm.js");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/.pnpm/@tarojs+runtime@3.6.17/node_modules/@tarojs/runtime/dist/runtime.esm.js");










var reactMeta = {
  PageContext: _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.EMPTY_OBJ,
  R: _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.EMPTY_OBJ
};
var HOOKS_APP_ID = 'taro-app';
function isClassComponent(R, component) {
  var _a;
  var prototype = component.prototype;
  // For React Redux
  if ((_a = component.displayName) === null || _a === void 0 ? void 0 : _a.includes('Connect')) return false;
  return (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(component.render) || !!(prototype === null || prototype === void 0 ? void 0 : prototype.isReactComponent) || prototype instanceof R.Component // compat for some others react-like library
  ;
}

function ensureIsArray(item) {
  if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(item)) {
    return item;
  } else {
    return item ? [item] : [];
  }
}
/**
 * set writable, enumerable to true
 */
function setDefaultDescriptor(obj) {
  obj.writable = true;
  obj.enumerable = true;
  return obj;
}
/**
 * 设置入口的路由参数
 * @param options 小程序传入的参数
 */
function setRouterParams(options) {
  _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.router = Object.assign({
    params: options === null || options === void 0 ? void 0 : options.query
  }, options);
}
var createTaroHook = function createTaroHook(lifecycle) {
  return function (fn) {
    var React = reactMeta.R,
      PageContext = reactMeta.PageContext;
    var id = React.useContext(PageContext) || HOOKS_APP_ID;
    var instRef = React.useRef();
    // hold fn ref and keep up to date
    var fnRef = React.useRef(fn);
    if (fnRef.current !== fn) fnRef.current = fn;
    React.useLayoutEffect(function () {
      var inst = instRef.current = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.getPageInstance)(id);
      var first = false;
      if (!inst) {
        first = true;
        instRef.current = Object.create(null);
        inst = instRef.current;
      }
      // callback is immutable but inner function is up to date
      var callback = function callback() {
        return fnRef.current.apply(fnRef, arguments);
      };
      if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(inst[lifecycle])) {
        inst[lifecycle] = [inst[lifecycle], callback];
      } else {
        inst[lifecycle] = [].concat((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(inst[lifecycle] || []), [callback]);
      }
      if (first) {
        (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.injectPageInstance)(inst, id);
      }
      return function () {
        var inst = instRef.current;
        if (!inst) return;
        var list = inst[lifecycle];
        if (list === callback) {
          inst[lifecycle] = undefined;
        } else if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(list)) {
          inst[lifecycle] = list.filter(function (item) {
            return item !== callback;
          });
        }
        instRef.current = undefined;
      };
    }, []);
  };
};
/** LifeCycle */
var useDidHide = createTaroHook('componentDidHide');
var useDidShow = createTaroHook('componentDidShow');
/** App */
var useError = createTaroHook('onError');
var useUnhandledRejection = createTaroHook('onUnhandledRejection');
var useLaunch = createTaroHook('onLaunch');
var usePageNotFound = createTaroHook('onPageNotFound');
/** Page */
var useLoad = createTaroHook('onLoad');
var usePageScroll = createTaroHook('onPageScroll');
var usePullDownRefresh = createTaroHook('onPullDownRefresh');
var usePullIntercept = createTaroHook('onPullIntercept');
var useReachBottom = createTaroHook('onReachBottom');
var useResize = createTaroHook('onResize');
var useUnload = createTaroHook('onUnload');
/** Mini-Program */
var useAddToFavorites = createTaroHook('onAddToFavorites');
var useOptionMenuClick = createTaroHook('onOptionMenuClick');
var useSaveExitState = createTaroHook('onSaveExitState');
var useShareAppMessage = createTaroHook('onShareAppMessage');
var useShareTimeline = createTaroHook('onShareTimeline');
var useTitleClick = createTaroHook('onTitleClick');
/** Router */
var useReady = createTaroHook('onReady');
var useRouter = function useRouter() {
  var dynamic = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var React = reactMeta.R;
  return dynamic ? _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.router : React.useMemo(function () {
    return _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.router;
  }, []);
};
var useTabItemTap = createTaroHook('onTabItemTap');
var useScope = function useScope() {
  return undefined;
};
var taroHooks = /*#__PURE__*/Object.freeze({
  __proto__: null,
  useAddToFavorites: useAddToFavorites,
  useDidHide: useDidHide,
  useDidShow: useDidShow,
  useError: useError,
  useLaunch: useLaunch,
  useLoad: useLoad,
  useOptionMenuClick: useOptionMenuClick,
  usePageNotFound: usePageNotFound,
  usePageScroll: usePageScroll,
  usePullDownRefresh: usePullDownRefresh,
  usePullIntercept: usePullIntercept,
  useReachBottom: useReachBottom,
  useReady: useReady,
  useResize: useResize,
  useRouter: useRouter,
  useSaveExitState: useSaveExitState,
  useScope: useScope,
  useShareAppMessage: useShareAppMessage,
  useShareTimeline: useShareTimeline,
  useTabItemTap: useTabItemTap,
  useTitleClick: useTitleClick,
  useUnhandledRejection: useUnhandledRejection,
  useUnload: useUnload
});
var h$1;
var ReactDOM$1;
var Fragment;
var pageKeyId = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.incrementId)();
var isWeb = (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isWebPlatform)();
function setReconciler(ReactDOM) {
  _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.tap('getLifecycle', function (instance, lifecycle) {
    lifecycle = lifecycle.replace(/^on(Show|Hide)$/, 'componentDid$1');
    return instance[lifecycle];
  });
  _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.tap('modifyMpEvent', function (event) {
    // Note: ohos 上事件没有设置 type 类型 setter 方法导致报错
    Object.defineProperty(event, 'type', {
      value: event.type.replace(/-/g, '')
    });
  });
  _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.tap('batchedEventUpdates', function (cb) {
    ReactDOM.unstable_batchedUpdates(cb);
  });
  _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.tap('mergePageInstance', function (prev, next) {
    if (!prev || !next) return;
    // 子组件使用 lifecycle hooks 注册了生命周期后，会存在 prev，里面是注册的生命周期回调。
    // prev 使用 Object.create(null) 创建，H5 的 fast-refresh 可能也会导致存在 prev，要排除这些意外产生的 prev
    if ('constructor' in prev) return;
    Object.keys(prev).forEach(function (item) {
      var prevList = prev[item];
      var nextList = ensureIsArray(next[item]);
      next[item] = nextList.concat(prevList);
    });
  });
  if (isWeb) {
    _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.tap('createPullDownComponent', function (el, _, R, customWrapper) {
      var isReactComponent = isClassComponent(R, el);
      return R.forwardRef(function (props, ref) {
        var newProps = Object.assign({}, props);
        var refs = isReactComponent ? {
          ref: ref
        } : {
          forwardedRef: ref,
          // 兼容 react-redux 7.20.1+
          reactReduxForwardedRef: ref
        };
        return h$1(customWrapper || 'taro-pull-to-refresh', null, h$1(el, Object.assign(Object.assign({}, newProps), refs)));
      });
    });
    _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.tap('getDOMNode', function (inst) {
      return ReactDOM.findDOMNode(inst);
    });
  }
}
function connectReactPage(R, id) {
  return function (Page) {
    // eslint-disable-next-line dot-notation
    var isReactComponent = isClassComponent(R, Page);
    var inject = function inject(node) {
      return node && (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.injectPageInstance)(node, id);
    };
    var refs = isReactComponent ? {
      ref: inject
    } : {
      forwardedRef: inject,
      // 兼容 react-redux 7.20.1+
      reactReduxForwardedRef: inject
    };
    if (reactMeta.PageContext === _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.EMPTY_OBJ) {
      reactMeta.PageContext = R.createContext('');
    }
    return /*#__PURE__*/function (_R$Component) {
      (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__["default"])(PageWrapper, _R$Component);
      var _super = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(PageWrapper);
      function PageWrapper() {
        var _this;
        (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this, PageWrapper);
        _this = _super.apply(this, arguments);
        _this.state = {
          hasError: false
        };
        return _this;
      }
      (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__["default"])(PageWrapper, [{
        key: "componentDidCatch",
        value:
        // React 16 uncaught error 会导致整个应用 crash，
        // 目前把错误缩小到页面
        function componentDidCatch(error, info) {
          if (true) {
            console.warn(error);
            console.error(info.componentStack);
          }
        }
      }, {
        key: "render",
        value: function render() {
          var children = this.state.hasError ? [] : h$1(reactMeta.PageContext.Provider, {
            value: id
          }, h$1(Page, Object.assign(Object.assign({}, this.props), refs)));
          if (isWeb) {
            return h$1('div', {
              id: id,
              className: 'taro_page'
            }, children);
          } else {
            return h$1('root', {
              id: id
            }, children);
          }
        }
      }], [{
        key: "getDerivedStateFromError",
        value: function getDerivedStateFromError(error) {
          var _a, _b;
          (_b = (_a = _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.app) === null || _a === void 0 ? void 0 : _a.onError) === null || _b === void 0 ? void 0 : _b.call(_a, error.message + error.stack);
          return {
            hasError: true
          };
        }
      }]);
      return PageWrapper;
    }(R.Component);
  };
}
/**
 * 桥接小程序 App 构造器和 React 渲染流程
 * @param App 用户编写的入口组件
 * @param react 框架
 * @param dom 框架渲染器
 * @param config 入口组件配置 app.config.js 的内容
 * @returns 传递给 App 构造器的对象 obj ：App(obj)
 */
function createReactApp(App, react, dom, config) {
  var _Object$create;
  if (true) {
    (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.ensure)(!!dom, '构建 React/Nerv 项目请把 process.env.FRAMEWORK 设置为 \'react\'/\'nerv\' ');
  }
  reactMeta.R = react;
  h$1 = react.createElement;
  ReactDOM$1 = dom;
  Fragment = react.Fragment;
  var appInstanceRef = react.createRef();
  var isReactComponent = isClassComponent(react, App);
  var appWrapper;
  var appWrapperResolver;
  var appWrapperPromise = new Promise(function (resolve) {
    return appWrapperResolver = resolve;
  });
  setReconciler(ReactDOM$1);
  function getAppInstance() {
    return appInstanceRef.current;
  }
  function waitAppWrapper(cb) {
    appWrapper ? cb() : appWrapperPromise.then(function () {
      return cb();
    });
  }
  function renderReactRoot() {
    var _a, _b;
    var appId = 'app';
    if (isWeb) {
      appId = (config === null || config === void 0 ? void 0 : config.appId) || appId;
    }
    var container = _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.document.getElementById(appId);
    if ((react.version || '').startsWith('18')) {
      var root = ReactDOM$1.createRoot(container);
      (_a = root.render) === null || _a === void 0 ? void 0 : _a.call(root, h$1(AppWrapper));
    } else {
      (_b = ReactDOM$1.render) === null || _b === void 0 ? void 0 : _b.call(ReactDOM$1, h$1(AppWrapper), container);
    }
  }
  var AppWrapper = /*#__PURE__*/function (_react$Component) {
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__["default"])(AppWrapper, _react$Component);
    var _super2 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(AppWrapper);
    function AppWrapper(props) {
      var _this2;
      (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this, AppWrapper);
      _this2 = _super2.call(this, props);
      // run createElement() inside the render function to make sure that owner is right
      _this2.pages = [];
      _this2.elements = [];
      appWrapper = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this2);
      appWrapperResolver((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this2));
      return _this2;
    }
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__["default"])(AppWrapper, [{
      key: "mount",
      value: function mount(pageComponent, id, cb) {
        var pageWrapper = connectReactPage(react, id)(pageComponent);
        var key = id + pageKeyId();
        var page = function page() {
          return h$1(pageWrapper, {
            key: key,
            tid: id
          });
        };
        this.pages.push(page);
        this.forceUpdate(cb);
      }
    }, {
      key: "unmount",
      value: function unmount(id, cb) {
        var elements = this.elements;
        var idx = elements.findIndex(function (item) {
          return item.props.tid === id;
        });
        elements.splice(idx, 1);
        this.forceUpdate(cb);
      }
    }, {
      key: "render",
      value: function render() {
        var pages = this.pages,
          elements = this.elements;
        while (pages.length > 0) {
          var page = pages.pop();
          elements.push(page());
        }
        var props = null;
        if (isReactComponent) {
          props = {
            ref: appInstanceRef
          };
        }
        return h$1(App, props, isWeb ? h$1(Fragment !== null && Fragment !== void 0 ? Fragment : 'div', null, elements.slice()) : elements.slice());
      }
    }]);
    return AppWrapper;
  }(react.Component);
  if (!isWeb) {
    renderReactRoot();
  }
  var _hooks$call$app = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('getMiniLifecycleImpl').app, 3),
    ONLAUNCH = _hooks$call$app[0],
    ONSHOW = _hooks$call$app[1],
    ONHIDE = _hooks$call$app[2];
  var appObj = Object.create({
    render: function render(cb) {
      appWrapper.forceUpdate(cb);
    },
    mount: function mount(component, id, cb) {
      if (appWrapper) {
        appWrapper.mount(component, id, cb);
      } else {
        appWrapperPromise.then(function (appWrapper) {
          return appWrapper.mount(component, id, cb);
        });
      }
    },
    unmount: function unmount(id, cb) {
      appWrapper.unmount(id, cb);
    }
  }, (_Object$create = {
    config: setDefaultDescriptor({
      configurable: true,
      value: config
    })
  }, (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_Object$create, ONLAUNCH, setDefaultDescriptor({
    value: function value(options) {
      var _this3 = this;
      setRouterParams(options);
      if (isWeb) {
        // 由于 H5 路由初始化的时候会清除 app 下的 dom 元素，所以需要在路由初始化后执行 render
        renderReactRoot();
      }
      var onLaunch = function onLaunch() {
        var _a;
        // 用户编写的入口组件实例
        var app = getAppInstance();
        _this3.$app = app;
        if (app) {
          // 把 App Class 上挂载的额外属性同步到全局 app 对象中
          if (app.taroGlobalData) {
            var globalData = app.taroGlobalData;
            var keys = Object.keys(globalData);
            var descriptors = Object.getOwnPropertyDescriptors(globalData);
            keys.forEach(function (key) {
              Object.defineProperty(_this3, key, {
                configurable: true,
                enumerable: true,
                get: function get() {
                  return globalData[key];
                },
                set: function set(value) {
                  globalData[key] = value;
                }
              });
            });
            Object.defineProperties(_this3, descriptors);
          }
          (_a = app.onLaunch) === null || _a === void 0 ? void 0 : _a.call(app, options);
        }
        triggerAppHook('onLaunch', options);
      };
      waitAppWrapper(onLaunch);
    }
  })), (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_Object$create, ONSHOW, setDefaultDescriptor({
    value: function value(options) {
      setRouterParams(options);
      var onShow = function onShow() {
        var _a;
        /**
        * trigger lifecycle
        */
        var app = getAppInstance();
        // class component, componentDidShow
        (_a = app === null || app === void 0 ? void 0 : app.componentDidShow) === null || _a === void 0 ? void 0 : _a.call(app, options);
        // functional component, useDidShow
        triggerAppHook('onShow', options);
      };
      waitAppWrapper(onShow);
    }
  })), (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_Object$create, ONHIDE, setDefaultDescriptor({
    value: function value() {
      var onHide = function onHide() {
        var _a;
        /**
         * trigger lifecycle
         */
        var app = getAppInstance();
        // class component, componentDidHide
        (_a = app === null || app === void 0 ? void 0 : app.componentDidHide) === null || _a === void 0 ? void 0 : _a.call(app);
        // functional component, useDidHide
        triggerAppHook('onHide');
      };
      waitAppWrapper(onHide);
    }
  })), (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_Object$create, "onError", setDefaultDescriptor({
    value: function value(error) {
      var onError = function onError() {
        var _a;
        var app = getAppInstance();
        (_a = app === null || app === void 0 ? void 0 : app.onError) === null || _a === void 0 ? void 0 : _a.call(app, error);
        triggerAppHook('onError', error);
        if ( true && (error === null || error === void 0 ? void 0 : error.includes('Minified React error'))) {
          console.warn('React 出现报错，请打开编译配置 mini.debugReact 查看报错详情：https://docs.taro.zone/docs/config-detail#minidebugreact');
        }
      };
      waitAppWrapper(onError);
    }
  })), (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_Object$create, "onUnhandledRejection", setDefaultDescriptor({
    value: function value(res) {
      var onUnhandledRejection = function onUnhandledRejection() {
        var _a;
        var app = getAppInstance();
        (_a = app === null || app === void 0 ? void 0 : app.onUnhandledRejection) === null || _a === void 0 ? void 0 : _a.call(app, res);
        triggerAppHook('onUnhandledRejection', res);
      };
      waitAppWrapper(onUnhandledRejection);
    }
  })), (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_Object$create, "onPageNotFound", setDefaultDescriptor({
    value: function value(res) {
      var onPageNotFound = function onPageNotFound() {
        var _a;
        var app = getAppInstance();
        (_a = app === null || app === void 0 ? void 0 : app.onPageNotFound) === null || _a === void 0 ? void 0 : _a.call(app, res);
        triggerAppHook('onPageNotFound', res);
      };
      waitAppWrapper(onPageNotFound);
    }
  })), _Object$create));
  function triggerAppHook(lifecycle) {
    for (var _len = arguments.length, option = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      option[_key - 1] = arguments[_key];
    }
    var instance = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.getPageInstance)(HOOKS_APP_ID);
    if (instance) {
      var app = getAppInstance();
      var func = _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('getLifecycle', instance, lifecycle);
      if (Array.isArray(func)) {
        func.forEach(function (cb) {
          return cb.apply(app, option);
        });
      }
    }
  }
  _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.app = appObj;
  return appObj;
}
var getNativeCompId = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.incrementId)();
var h;
var ReactDOM;
var nativeComponentApp;
function initNativeComponentEntry(params) {
  var R = params.R,
    ReactDOM = params.ReactDOM,
    cb = params.cb,
    _params$isDefaultEntr = params.isDefaultEntryDom,
    isDefaultEntryDom = _params$isDefaultEntr === void 0 ? true : _params$isDefaultEntr;
  var NativeComponentWrapper = /*#__PURE__*/function (_R$Component2) {
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__["default"])(NativeComponentWrapper, _R$Component2);
    var _super3 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(NativeComponentWrapper);
    function NativeComponentWrapper() {
      var _this4;
      (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NativeComponentWrapper);
      _this4 = _super3.apply(this, arguments);
      _this4.root = R.createRef();
      _this4.ctx = _this4.props.getCtx();
      return _this4;
    }
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__["default"])(NativeComponentWrapper, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.ctx.component = this;
        var rootElement = this.root.current;
        rootElement.ctx = this.ctx;
        rootElement.performUpdate(true);
      }
    }, {
      key: "render",
      value: function render() {
        return h('root', {
          ref: this.root,
          id: this.props.compId
        }, this.props.renderComponent(this.ctx));
      }
    }]);
    return NativeComponentWrapper;
  }(R.Component);
  var Entry = /*#__PURE__*/function (_R$Component3) {
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Entry, _R$Component3);
    var _super4 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Entry);
    function Entry() {
      var _this5;
      (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Entry);
      _this5 = _super4.apply(this, arguments);
      _this5.state = {
        components: []
      };
      return _this5;
    }
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__["default"])(Entry, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (isDefaultEntryDom) {
          _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.app = this;
        } else {
          nativeComponentApp = this;
        }
        cb && cb();
      }
    }, {
      key: "mount",
      value: function mount(Component, compId, getCtx, cb) {
        var isReactComponent = isClassComponent(R, Component);
        var inject = function inject(node) {
          return node && (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.injectPageInstance)(node, compId);
        };
        var refs = isReactComponent ? {
          ref: inject
        } : {
          forwardedRef: inject,
          reactReduxForwardedRef: inject
        };
        if (reactMeta.PageContext === _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.EMPTY_OBJ) {
          reactMeta.PageContext = R.createContext('');
        }
        var item = {
          compId: compId,
          element: h(NativeComponentWrapper, {
            key: compId,
            compId: compId,
            getCtx: getCtx,
            renderComponent: function renderComponent(ctx) {
              return h(reactMeta.PageContext.Provider, {
                value: compId
              }, h(Component, Object.assign(Object.assign(Object.assign({}, (ctx.data || (ctx.data = {})).props), refs), {
                $scope: ctx
              })));
            }
          })
        };
        this.setState({
          components: [].concat((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.state.components), [item])
        }, function () {
          return cb && cb();
        });
      }
    }, {
      key: "unmount",
      value: function unmount(compId, cb) {
        var components = this.state.components;
        var index = components.findIndex(function (item) {
          return item.compId === compId;
        });
        var next = [].concat((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(components.slice(0, index)), (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(components.slice(index + 1)));
        this.setState({
          components: next
        }, function () {
          (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.removePageInstance)(compId);
          cb && cb();
        });
      }
    }, {
      key: "render",
      value: function render() {
        var components = this.state.components;
        return components.map(function (_ref) {
          var element = _ref.element;
          return element;
        });
      }
    }]);
    return Entry;
  }(R.Component);
  setReconciler(ReactDOM);
  var app = _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.document.getElementById('app');
  if (!isDefaultEntryDom && !nativeComponentApp) {
    // create
    var nativeApp = _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.document.createElement('nativeComponent');
    // insert
    app.appendChild(nativeApp);
    app = nativeApp;
  }
  ReactDOM.render(h(Entry, {}), app);
}
function createNativePageConfig(Component, pageName, data, react, reactdom, pageConfig) {
  var _pageObj;
  reactMeta.R = react;
  h = react.createElement;
  ReactDOM = reactdom;
  setReconciler(ReactDOM);
  var _hooks$call$page = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('getMiniLifecycleImpl').page, 7),
    ONLOAD = _hooks$call$page[0],
    ONUNLOAD = _hooks$call$page[1],
    ONREADY = _hooks$call$page[2],
    ONSHOW = _hooks$call$page[3],
    ONHIDE = _hooks$call$page[4],
    LIFECYCLES = _hooks$call$page[5],
    SIDE_EFFECT_LIFECYCLES = _hooks$call$page[6];
  var unmounting = false;
  var prepareMountList = [];
  var pageElement = null;
  var loadResolver;
  var hasLoaded;
  var id = pageName !== null && pageName !== void 0 ? pageName : "taro_page_".concat(getNativeCompId());
  function setCurrentRouter(page) {
    var router = page.route || page.__route__ || page.$taroPath;
    _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.router = {
      params: page.$taroParams,
      path: (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.addLeadingSlash)(router),
      $taroPath: page.$taroPath,
      onReady: (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.getOnReadyEventKey)(id),
      onShow: (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.getOnShowEventKey)(id),
      onHide: (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.getOnHideEventKey)(id)
    };
    if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(page.exitState)) {
      _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.router.exitState = page.exitState;
    }
  }
  var pageObj = (_pageObj = {
    options: pageConfig
  }, (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_pageObj, ONLOAD, function () {
    var _this6 = this;
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var cb = arguments.length > 1 ? arguments[1] : undefined;
    hasLoaded = new Promise(function (resolve) {
      loadResolver = resolve;
    });
    _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.page = this;
    this.config = pageConfig || {};
    // this.$taroPath 是页面唯一标识
    var uniqueOptions = Object.assign({}, options, {
      $taroTimestamp: Date.now()
    });
    var $taroPath = this.$taroPath = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.getPath)(id, uniqueOptions);
    // this.$taroParams 作为暴露给开发者的页面参数对象，可以被随意修改
    if (this.$taroParams == null) {
      this.$taroParams = uniqueOptions;
    }
    setCurrentRouter(this);
    _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.window.trigger(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.CONTEXT_ACTIONS.INIT, $taroPath);
    var mountCallback = function mountCallback() {
      pageElement = _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.document.getElementById($taroPath);
      (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.ensure)(pageElement !== null, '没有找到页面实例。');
      (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.safeExecute)($taroPath, ONLOAD, _this6.$taroParams);
      loadResolver();
      pageElement.ctx = _this6;
      pageElement.performUpdate(true, cb);
    };
    var mount = function mount() {
      if (!_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.app) {
        initNativeComponentEntry({
          R: react,
          ReactDOM: ReactDOM,
          cb: function cb() {
            _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.app.mount(Component, $taroPath, function () {
              return _this6;
            }, mountCallback);
          }
        });
      } else {
        _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.app.mount(Component, $taroPath, function () {
          return _this6;
        }, mountCallback);
      }
    };
    if (unmounting) {
      prepareMountList.push(mount);
    } else {
      mount();
    }
  }), (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_pageObj, ONUNLOAD, function () {
    var $taroPath = this.$taroPath;
    // 销毁当前页面的上下文信息
    _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.window.trigger(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.CONTEXT_ACTIONS.DESTORY, $taroPath);
    // 触发onUnload生命周期
    (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.safeExecute)($taroPath, ONUNLOAD);
    resetCurrent();
    unmounting = true;
    _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.app.unmount($taroPath, function () {
      unmounting = false;
      (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.removePageInstance)($taroPath);
      if (pageElement) {
        pageElement.ctx = null;
        pageElement = null;
      }
      if (prepareMountList.length) {
        prepareMountList.forEach(function (fn) {
          return fn();
        });
        prepareMountList = [];
      }
    });
  }), (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_pageObj, ONREADY, function () {
    var _this7 = this;
    hasLoaded.then(function () {
      // 触发生命周期
      (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.safeExecute)(_this7.$taroPath, _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.ON_READY);
      // 通过事件触发子组件的生命周期
      (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.requestAnimationFrame)(function () {
        return _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.eventCenter.trigger((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.getOnReadyEventKey)(id));
      });
      _this7.onReady.called = true;
    });
  }), (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_pageObj, ONSHOW, function () {
    var _this8 = this;
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    hasLoaded.then(function () {
      // 设置 Current 的 page 和 router
      _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.page = _this8;
      setCurrentRouter(_this8);
      // 恢复上下文信息
      _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.window.trigger(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.CONTEXT_ACTIONS.RECOVER, _this8.$taroPath);
      // 触发生命周期
      (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.safeExecute)(_this8.$taroPath, _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.ON_SHOW, options);
      // 通过事件触发子组件的生命周期
      (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.requestAnimationFrame)(function () {
        return _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.eventCenter.trigger((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.getOnShowEventKey)(id));
      });
    });
  }), (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_pageObj, ONHIDE, function () {
    // 缓存当前页面上下文信息
    _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.window.trigger(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.CONTEXT_ACTIONS.RESTORE, this.$taroPath);
    // 设置 Current 的 page 和 router
    if (_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.page === this) {
      _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.page = null;
      _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.router = null;
    }
    // 触发生命周期
    (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.safeExecute)(this.$taroPath, _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.ON_HIDE);
    // 通过事件触发子组件的生命周期
    _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.eventCenter.trigger((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.getOnHideEventKey)(id));
  }), _pageObj);
  function resetCurrent() {
    // 小程序插件页面卸载之后返回到宿主页面时，需重置Current页面和路由。否则引发插件组件二次加载异常 fix:#11991
    _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.page = null;
    _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.router = null;
  }
  LIFECYCLES.forEach(function (lifecycle) {
    pageObj[lifecycle] = function () {
      return _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.safeExecute.apply(void 0, [this.$taroPath, lifecycle].concat(Array.prototype.slice.call(arguments)));
    };
  });
  // onShareAppMessage 和 onShareTimeline 一样，会影响小程序右上方按钮的选项，因此不能默认注册。
  SIDE_EFFECT_LIFECYCLES.forEach(function (lifecycle) {
    var _a;
    if (Component[lifecycle] || ((_a = Component.prototype) === null || _a === void 0 ? void 0 : _a[lifecycle]) || Component[lifecycle.replace(/^on/, 'enable')]) {
      pageObj[lifecycle] = function () {
        var _a;
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        var target = (_a = args[0]) === null || _a === void 0 ? void 0 : _a.target;
        if (target === null || target === void 0 ? void 0 : target.id) {
          var _id = target.id;
          var element = _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.document.getElementById(_id);
          if (element) {
            target.dataset = element.dataset;
          }
        }
        return _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.safeExecute.apply(void 0, [this.$taroPath, lifecycle].concat(args));
      };
    }
  });
  pageObj.eh = _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.eventHandler;
  if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(data)) {
    pageObj.data = data;
  }
  _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('modifyPageObject', pageObj);
  return pageObj;
}
function createNativeComponentConfig(Component, react, reactdom, componentConfig) {
  var _a, _b;
  reactMeta.R = react;
  h = react.createElement;
  ReactDOM = reactdom;
  setReconciler(ReactDOM);
  var isNewBlended = componentConfig.isNewBlended;
  var componentObj = {
    options: componentConfig,
    properties: {
      props: {
        type: null,
        value: null,
        observer: function observer(_newVal, oldVal) {
          var _a;
          oldVal && ((_a = this.component) === null || _a === void 0 ? void 0 : _a.forceUpdate());
        }
      }
    },
    created: function created() {
      var app = isNewBlended ? nativeComponentApp : _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.app;
      if (!app) {
        initNativeComponentEntry({
          R: react,
          ReactDOM: ReactDOM,
          isDefaultEntryDom: !isNewBlended
        });
      }
    },
    attached: function attached() {
      var _this9 = this;
      var compId = this.compId = getNativeCompId();
      setCurrent(compId);
      this.config = componentConfig;
      var app = isNewBlended ? nativeComponentApp : _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.app;
      app.mount(Component, compId, function () {
        return _this9;
      }, function () {
        var instance = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.getPageInstance)(compId);
        if (instance && instance.node) {
          var el = _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.document.getElementById(instance.node.uid);
          if (el) {
            el.ctx = _this9;
          }
        }
      });
    },
    ready: function ready() {
      (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.safeExecute)(this.compId, 'onReady');
    },
    detached: function detached() {
      resetCurrent();
      var app = isNewBlended ? nativeComponentApp : _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.app;
      app.unmount(this.compId);
    },
    pageLifetimes: {
      show: function show(options) {
        (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.safeExecute)(this.compId, 'onShow', options);
      },
      hide: function hide() {
        (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.safeExecute)(this.compId, 'onHide');
      }
    },
    methods: {
      eh: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.eventHandler,
      onLoad: function onLoad(options) {
        (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.safeExecute)(this.compId, 'onLoad', options);
      },
      onUnload: function onUnload() {
        (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.safeExecute)(this.compId, 'onUnload');
      }
    }
  };
  function resetCurrent() {
    // 小程序插件页面卸载之后返回到宿主页面时，需重置Current页面和路由。否则引发插件组件二次加载异常 fix:#11991
    _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.page = null;
    _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.router = null;
  }
  // onShareAppMessage 和 onShareTimeline 一样，会影响小程序右上方按钮的选项，因此不能默认注册。
  if (Component.onShareAppMessage || ((_a = Component.prototype) === null || _a === void 0 ? void 0 : _a.onShareAppMessage) || Component.enableShareAppMessage) {
    componentObj.methods.onShareAppMessage = function (options) {
      var target = options === null || options === void 0 ? void 0 : options.target;
      if (target) {
        var id = target.id;
        var element = _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.document.getElementById(id);
        if (element) {
          target.dataset = element.dataset;
        }
      }
      return (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.safeExecute)(this.compId, 'onShareAppMessage', options);
    };
  }
  if (Component.onShareTimeline || ((_b = Component.prototype) === null || _b === void 0 ? void 0 : _b.onShareTimeline) || Component.enableShareTimeline) {
    componentObj.methods.onShareTimeline = function () {
      return (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.safeExecute)(this.compId, 'onShareTimeline');
    };
  }
  return componentObj;
}
function setCurrent(compId) {
  if (!getCurrentPages || typeof getCurrentPages !== 'function') return;
  var pages = getCurrentPages();
  var currentPage = pages[pages.length - 1];
  if (_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.page === currentPage) return;
  _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.page = currentPage;
  var route = currentPage.route || currentPage.__route__;
  var router = {
    params: currentPage.options || {},
    path: (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.addLeadingSlash)(route),
    $taroPath: compId,
    onReady: '',
    onHide: '',
    onShow: ''
  };
  _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.router = router;
  if (!currentPage.options) {
    // 例如在微信小程序中，页面 options 的设置时机比组件 attached 慢
    Object.defineProperty(currentPage, 'options', {
      enumerable: true,
      configurable: true,
      get: function get() {
        return this._optionsValue;
      },
      set: function set(value) {
        router.params = value;
        this._optionsValue = value;
      }
    });
  }
}
_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.tap('initNativeApi', function (taro) {
  for (var hook in taroHooks) {
    taro[hook] = taroHooks[hook];
  }
});
if (false) { var oldDiffedHook, oldVNodeHook, options; }



/***/ }),

/***/ "./node_modules/.pnpm/@tarojs+plugin-html@3.6.17_hdidbuxseer5gwswpbd4f5fzyu/node_modules/@tarojs/plugin-html/dist/runtime.js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tarojs+plugin-html@3.6.17_hdidbuxseer5gwswpbd4f5fzyu/node_modules/@tarojs/plugin-html/dist/runtime.js ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/shared */ "./node_modules/.pnpm/@tarojs+shared@3.6.17/node_modules/@tarojs/shared/dist/shared.esm.js");



function genAttrMapFnFromDir(dir) {
  var fn = function fn(key, value) {
    var lowerKey = key.toLowerCase();
    if (lowerKey in dir) {
      var res = dir[lowerKey];
      if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(res)) {
        key = res;
      } else {
        key = res[0];
        value = res[1][value] || value;
      }
    }
    return [key, value];
  };
  return fn;
}
var inlineElements = new Set(["i", "abbr", "select", "acronym", "small", "bdi", "kbd", "strong", "big", "sub", "sup", "br", "mark", "meter", "template", "cite", "object", "time", "code", "output", "u", "data", "picture", "tt", "datalist", "var", "dfn", "del", "q", "em", "s", "embed", "samp", "b"]);
var blockElements = new Set(["body", "svg", "address", "fieldset", "li", "span", "article", "figcaption", "main", "aside", "figure", "nav", "blockquote", "footer", "ol", "details", "p", "dialog", "h1", "h2", "h3", "h4", "h5", "h6", "pre", "dd", "header", "section", "div", "hgroup", "table", "dl", "hr", "ul", "dt", "view", "view-block"]);
var specialElements = new Map([['slot', 'slot'], ['form', 'form'], ['iframe', 'web-view'], ['img', 'image'], ['audio', 'audio'], ['video', 'video'], ['canvas', 'canvas'], ['a', {
  mapName: function mapName(props) {
    if (props.as && (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(props.as)) return props.as.toLowerCase();
    return !props.href || /^javascript/.test(props.href) ? 'view' : 'navigator';
  },
  mapNameCondition: ['href'],
  mapAttr: genAttrMapFnFromDir({
    href: 'url',
    target: ['openType', {
      _blank: 'navigate',
      _self: 'redirect'
    }]
  })
}], ['input', {
  mapName: function mapName(props) {
    if (props.type === 'checkbox') {
      return 'checkbox';
    } else if (props.type === 'radio') {
      return 'radio';
    }
    return 'input';
  },
  mapNameCondition: ['type'],
  mapAttr: function mapAttr(key, value, props) {
    var htmlKey = key.toLowerCase();
    if (htmlKey === 'autofocus') {
      key = 'focus';
    } else if (htmlKey === 'readonly') {
      if (props.disabled === true) {
        value = true;
      }
      key = 'disabled';
    } else if (htmlKey === 'type') {
      if (value === 'password') {
        key = 'password';
        value = true;
      } else if (value === 'tel') {
        value = 'number';
      }
    } else if (htmlKey === 'maxlength') {
      key = 'maxlength';
    }
    return [key, value];
  }
}], ['label', {
  mapName: 'label',
  mapAttr: genAttrMapFnFromDir({
    htmlfor: 'for'
  })
}], ['textarea', {
  mapName: 'textarea',
  mapAttr: genAttrMapFnFromDir({
    autofocus: 'focus',
    readonly: 'disabled',
    maxlength: 'maxlength'
  })
}], ['progress', {
  mapName: 'progress',
  mapAttr: function mapAttr(key, value, props) {
    if (key === 'value') {
      var max = props.max || 1;
      key = 'percent';
      value = Math.round(value / max * 100);
    }
    return [key, value];
  }
}], ['button', {
  mapName: 'button',
  mapAttr: function mapAttr(key, value) {
    if (key === 'type' && (value === 'submit' || value === 'reset')) {
      key = 'formType';
    }
    return [key, value];
  }
}]]);
function isHtmlTags(nodeName) {
  if (inlineElements.has(nodeName) || blockElements.has(nodeName) || specialElements.has(nodeName)) {
    return true;
  }
  return false;
}
function getMappedType(nodeName, rawProps) {
  if (inlineElements.has(nodeName)) {
    return 'text';
  } else if (specialElements.has(nodeName)) {
    var mapping = specialElements.get(nodeName);
    if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(mapping)) {
      return mapping;
    }
    var mapName = mapping.mapName;
    return (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(mapName) ? mapName(rawProps) : mapName;
  } else {
    return 'view';
  }
}
function getAttrMapFn(nodeName) {
  var mapping = specialElements.get(nodeName);
  if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(mapping)) {
    return mapping === null || mapping === void 0 ? void 0 : mapping.mapAttr;
  }
}
function getMapNameByCondition(nodeName, attr, props) {
  var mapping = specialElements.get(nodeName);
  if (!mapping || (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(mapping)) return;
  var mapName = mapping.mapName,
    mapNameCondition = mapping.mapNameCondition;
  if (!mapNameCondition) return;
  if (mapNameCondition.indexOf(attr) > -1 && !(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(mapName)) {
    return mapName(props);
  }
}
function mapNameByContion(nodeName, key, element, componentsAlias) {
  var mapName = getMapNameByCondition(nodeName, key, element.props);
  if (mapName) {
    var mapNameAlias = componentsAlias[mapName]._num;
    element.enqueueUpdate({
      path: "".concat(element._path, ".", "nn" /* Shortcuts.NodeName */),
      value: mapNameAlias
    });
  }
}
function ensureHtmlClass(tagName) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var classList = className.split(' ');
  var htmlClass = "h5-".concat(tagName);
  if (classList.indexOf(htmlClass) === -1) {
    classList.unshift(htmlClass);
  }
  return classList.join(' ');
}
function ensureRect(props) {
  var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var cssText = style;
  var width = props.width,
    height = props.height;
  if (width) {
    cssText = "width: ".concat(width, ";").concat(cssText);
  }
  if (height) {
    cssText = "height: ".concat(height, ";").concat(cssText);
  }
  return cssText;
}
function defineMappedProp(obj, propName, mapName) {
  Object.defineProperty(obj, propName, {
    enumerable: true,
    configurable: true,
    get: function get() {
      return obj[mapName];
    },
    set: function set(val) {
      obj[mapName] = val;
    }
  });
}
_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.tap('modifyHydrateData', function (data) {
  var nodeName = data["nn" /* Shortcuts.NodeName */];
  if (!isHtmlTags(nodeName)) return;
   true && (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.warn)(data["nn" /* Shortcuts.NodeName */] === 'select', '请使用 Picker 组件代替 <select>');
  // map nodeName
  data["nn" /* Shortcuts.NodeName */] = getMappedType(nodeName, data);
  // map attr Key/Value
  var attrMapFn = getAttrMapFn(nodeName);
  if (attrMapFn) {
    for (var key in data) {
      var value = data[key];
      var _attrMapFn = attrMapFn(key, value, data),
        _attrMapFn2 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_attrMapFn, 2),
        mapKey = _attrMapFn2[0],
        mapValue = _attrMapFn2[1];
      if (key !== mapKey) {
        delete data[key];
        data[mapKey] = mapValue;
      } else if (value !== mapValue) {
        data[key] = mapValue;
      }
    }
  }
  if (nodeName === 'br') {
    var _ref;
    data["cn" /* Shortcuts.Childnodes */] = [(_ref = {}, (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, "nn" /* Shortcuts.NodeName */, '#text'), (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, "v", '\n'), _ref)];
  }
  data["cl" /* Shortcuts.Class */] = ensureHtmlClass(nodeName, data["cl" /* Shortcuts.Class */]);
  data["st" /* Shortcuts.Style */] = ensureRect(data, data["st" /* Shortcuts.Style */]);
});

_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.tap('modifySetAttrPayload', function (element, key, payload, componentsAlias) {
  var nodeName = element.nodeName,
    _path = element._path,
    props = element.props;
  if (!isHtmlTags(nodeName)) return;
  // map nodeName
  mapNameByContion(nodeName, key, element, componentsAlias);
  var mapName = getMappedType(nodeName, props);
  var alias = componentsAlias[mapName];
  // map attr Key/Value
  var attrMapFn = getAttrMapFn(nodeName);
  if (attrMapFn) {
    var value = payload.value;
    var _attrMapFn3 = attrMapFn(key, value, props),
      _attrMapFn4 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_attrMapFn3, 2),
      mapKey = _attrMapFn4[0],
      mapValue = _attrMapFn4[1];
    payload.path = "".concat(_path, ".").concat(alias[mapKey] || mapKey);
    payload.value = mapValue;
  } else if (alias[key] && alias[key] !== key) {
    payload.path = "".concat(_path, ".").concat((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.toCamelCase)(alias[key]));
  }
  if (key === "cl" /* Shortcuts.Class */) {
    payload.value = ensureHtmlClass(nodeName, payload.value);
  } else if (key === "st" /* Shortcuts.Style */ || key === 'width' || key === 'height') {
    payload.path = "".concat(_path, ".", "st" /* Shortcuts.Style */);
    payload.value = ensureRect(props, element.style.cssText);
  }
});
_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.tap('modifyRmAttrPayload', function (element, key, payload, componentsAlias) {
  var nodeName = element.nodeName,
    _path = element._path,
    props = element.props;
  if (!isHtmlTags(nodeName)) return;
  // map nodeName
  mapNameByContion(nodeName, key, element, componentsAlias);
  var mapName = getMappedType(nodeName, props);
  var alias = componentsAlias[mapName];
  // map attr Key/Value
  var attrMapFn = getAttrMapFn(nodeName);
  if (attrMapFn) {
    var value = payload[key];
    var _attrMapFn5 = attrMapFn(key, value, props),
      _attrMapFn6 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_attrMapFn5, 1),
      mapKey = _attrMapFn6[0];
    payload.path = "".concat(_path, ".").concat(alias[mapKey] || mapKey);
  } else if (alias[key] && alias[key] !== key) {
    payload.path = "".concat(_path, ".").concat((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.toCamelCase)(alias[key]));
  }
  if (key === "cl" /* Shortcuts.Class */) {
    payload.value = ensureHtmlClass(nodeName, payload.value);
  } else if (key === "st" /* Shortcuts.Style */ || key === 'width' || key === 'height') {
    payload.path = "".concat(_path, ".", "st" /* Shortcuts.Style */);
    payload.value = ensureRect(props, element.style.cssText);
  }
});
_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.tap('onAddEvent', function (type, _handler, _options, node) {
  node = node;
  if (!isHtmlTags(node.nodeName)) return;
  if (type === 'click') {
    defineMappedProp(node.__handlers, type, 'tap');
  } else if (node.nodeName === 'input') {
    if (type === 'change') {
      if (node.props.type === 'checkbox' || node.props.type === 'radio') {
        defineMappedProp(node.__handlers, type, 'tap');
      } else {
        defineMappedProp(node.__handlers, type, 'input');
      }
    } else if (type === 'keypress') {
      defineMappedProp(node.__handlers, type, 'confirm');
    }
  }
});
_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.tap('modifyTaroEvent', function (event, element) {
  var nodeName = element.nodeName,
    props = element.props;
  if (nodeName === 'input' && event.type === 'tap') {
    if (props.type === 'checkbox') {
      props.checked = !props.checked;
    } else if (props.type === 'radio' && !props.checked) {
      props.checked = true;
    }
    if (event.mpEvent) {
      var _event$mpEvent = event.mpEvent,
        currentTarget = _event$mpEvent.currentTarget,
        target = _event$mpEvent.target;
      currentTarget.checked = props.checked;
      if (target.id === currentTarget.id) {
        target.checked = props.checked;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.17_hdidbuxseer5gwswpbd4f5fzyu/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.17_hdidbuxseer5gwswpbd4f5fzyu/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js ***!
  \****************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Image: function() { return /* binding */ Image; },
/* harmony export */   Input: function() { return /* binding */ Input; },
/* harmony export */   PickerView: function() { return /* binding */ PickerView; },
/* harmony export */   PickerViewColumn: function() { return /* binding */ PickerViewColumn; },
/* harmony export */   ScrollView: function() { return /* binding */ ScrollView; },
/* harmony export */   Textarea: function() { return /* binding */ Textarea; },
/* harmony export */   View: function() { return /* binding */ View; }
/* harmony export */ });
/* unused harmony exports Ad, AdCustom, Audio, Block, Button, Camera, Canvas, ChannelLive, ChannelVideo, Checkbox, CheckboxGroup, CoverImage, CoverView, CustomWrapper, Editor, Form, FunctionalPageNavigator, GridView, Icon, KeyboardAccessory, Label, ListView, LivePlayer, LivePusher, Map, MatchMedia, MovableArea, MovableView, NativeSlot, NavigationBar, Navigator, OfficialAccount, OpenData, PageContainer, PageMeta, Picker, Progress, Radio, RadioGroup, RichText, RootPortal, ShareElement, Slider, Slot, Snapshot, StickyHeader, StickySection, Swiper, SwiperItem, Switch, Text, Video, VoipRoom, WebView */
var View = 'view';
var Icon = 'icon';
var Progress = 'progress';
var RichText = 'rich-text';
var Text = 'text';
var Button = 'button';
var Checkbox = 'checkbox';
var CheckboxGroup = 'checkbox-group';
var Form = 'form';
var Input = 'input';
var Label = 'label';
var Picker = 'picker';
var PickerView = 'picker-view';
var PickerViewColumn = 'picker-view-column';
var Radio = 'radio';
var RadioGroup = 'radio-group';
var Slider = 'slider';
var Switch = 'switch';
var CoverImage = 'cover-image';
var Textarea = 'textarea';
var CoverView = 'cover-view';
var MovableArea = 'movable-area';
var MovableView = 'movable-view';
var ScrollView = 'scroll-view';
var Swiper = 'swiper';
var SwiperItem = 'swiper-item';
var Navigator = 'navigator';
var Audio = 'audio';
var Camera = 'camera';
var Image = 'image';
var LivePlayer = 'live-player';
var Video = 'video';
var Canvas = 'canvas';
var Ad = 'ad';
var WebView = 'web-view';
var Block = 'block';
var Map = 'map';
var Slot = 'slot';
var NativeSlot = 'native-slot';
var CustomWrapper = 'custom-wrapper';

// For React.createElement's type
var Editor = 'editor';
var MatchMedia = 'match-media';
var FunctionalPageNavigator = 'functional-page-navigator';
var LivePusher = 'live-pusher';
var OfficialAccount = 'official-account';
var OpenData = 'open-data';
var NavigationBar = 'navigation-bar';
var PageMeta = 'page-meta';
var VoipRoom = 'voip-room';
var AdCustom = 'ad-custom';
var PageContainer = 'page-container';
var ShareElement = 'share-element';
var KeyboardAccessory = 'keyboard-accessory';
var RootPortal = 'root-portal';
var ChannelLive = 'channel-live';
var ChannelVideo = 'channel-video';
var ListView = 'list-view';
var GridView = 'grid-view';
var StickyHeader = 'sticky-header';
var StickySection = 'sticky-section';
var Snapshot = 'snapshot';


/***/ }),

/***/ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.17_hdidbuxseer5gwswpbd4f5fzyu/node_modules/@tarojs/plugin-platform-weapp/dist/runtime.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.17_hdidbuxseer5gwswpbd4f5fzyu/node_modules/@tarojs/plugin-platform-weapp/dist/runtime.js ***!
  \*******************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/shared */ "./node_modules/.pnpm/@tarojs+shared@3.6.17/node_modules/@tarojs/shared/dist/shared.esm.js");

var needPromiseApis = new Set(['addFileToFavorites', 'addVideoToFavorites', 'authPrivateMessage', 'checkIsAddedToMyMiniProgram', 'chooseContact', 'cropImage', 'disableAlertBeforeUnload', 'editImage', 'enableAlertBeforeUnload', 'getBackgroundFetchData', 'getChannelsLiveInfo', 'getChannelsLiveNoticeInfo', 'getFuzzyLocation', 'getGroupEnterInfo', 'getLocalIPAddress', 'getShareInfo', 'getUserProfile', 'getWeRunData', 'join1v1Chat', 'openChannelsActivity', 'openChannelsEvent', 'openChannelsLive', 'openChannelsUserProfile', 'openCustomerServiceChat', 'openVideoEditor', 'saveFileToDisk', 'scanItem', 'setEnable1v1Chat', 'setWindowSize', 'sendBizRedPacket', 'startFacialRecognitionVerify']);
function initNativeApi(taro) {
  (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.processApis)(taro, wx, {
    needPromiseApis: needPromiseApis,
    modifyApis: function modifyApis(apis) {
      // fix https://github.com/NervJS/taro/issues/9899
      apis.delete('lanDebug');
    },
    transformMeta: function transformMeta(api, options) {
      var _a;
      if (api === 'showShareMenu') {
        options.menus = (_a = options.showShareItems) === null || _a === void 0 ? void 0 : _a.map(function (item) {
          return item === 'wechatFriends' ? 'shareAppMessage' : item === 'wechatMoment' ? 'shareTimeline' : item;
        });
      }
      return {
        key: api,
        options: options
      };
    }
  });
  taro.cloud = wx.cloud;
  taro.getTabBar = function (pageCtx) {
    var _a;
    if (typeof (pageCtx === null || pageCtx === void 0 ? void 0 : pageCtx.getTabBar) === 'function') {
      return (_a = pageCtx.getTabBar()) === null || _a === void 0 ? void 0 : _a.$taroInstances;
    }
  };
  taro.getRenderer = function () {
    var _a, _b, _c;
    return (_c = (_b = (_a = taro.getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.page) === null || _b === void 0 ? void 0 : _b.renderer) !== null && _c !== void 0 ? _c : 'webview';
  };
}
var _true = 'true';
var _false = 'false';
var _empty = '';
var _zero = '0';
var components = {
  // ======== 调整属性 ========
  Progress: {
    'border-radius': _zero,
    'font-size': '16',
    duration: '30',
    bindActiveEnd: _empty
  },
  RichText: {
    space: _empty,
    'user-select': _false
  },
  Text: {
    'user-select': _false
  },
  Map: {
    polygons: '[]',
    subkey: _empty,
    rotate: _zero,
    skew: _zero,
    'max-scale': '20',
    'min-scale': '3',
    'enable-3D': _false,
    'show-compass': _false,
    'show-scale': _false,
    'enable-overlooking': _false,
    'enable-zoom': _true,
    'enable-scroll': _true,
    'enable-rotate': _false,
    'enable-satellite': _false,
    'enable-traffic': _false,
    'enable-poi': _true,
    'enable-building': _true,
    setting: '[]',
    bindLabelTap: _empty,
    bindRegionChange: _empty,
    bindPoiTap: _empty,
    bindAnchorPointTap: _empty
  },
  Button: {
    lang: 'en',
    'session-from': _empty,
    'send-message-title': _empty,
    'send-message-path': _empty,
    'send-message-img': _empty,
    'app-parameter': _empty,
    'show-message-card': _false,
    'business-id': _empty,
    bindGetUserInfo: _empty,
    bindContact: _empty,
    bindGetPhoneNumber: _empty,
    bindGetRealTimePhoneNumber: _empty,
    bindChooseAvatar: _empty,
    bindError: _empty,
    bindOpenSetting: _empty,
    bindLaunchApp: _empty,
    bindAgreePrivacyAuthorization: _empty
  },
  Form: {
    'report-submit-timeout': _zero
  },
  Input: {
    'always-embed': _false,
    'adjust-position': _true,
    'hold-keyboard': _false,
    'safe-password-cert-path': '',
    'safe-password-length': '',
    'safe-password-time-stamp': '',
    'safe-password-nonce': '',
    'safe-password-salt': '',
    'safe-password-custom-hash': '',
    'auto-fill': _empty,
    bindKeyboardHeightChange: _empty,
    bindNicknameReview: _empty
  },
  Picker: {
    'header-text': _empty,
    'level': 'region'
  },
  PickerView: {
    'immediate-change': _false,
    bindPickStart: _empty,
    bindPickEnd: _empty
  },
  Slider: {
    color: "'#e9e9e9'",
    'selected-color': "'#1aad19'"
  },
  Textarea: {
    'show-confirm-bar': _true,
    'adjust-position': _true,
    'hold-keyboard': _false,
    'disable-default-padding': _false,
    'confirm-type': "'return'",
    'confirm-hold': _false,
    bindKeyboardHeightChange: _empty
  },
  ScrollView: {
    'enable-flex': _false,
    'scroll-anchoring': _false,
    enhanced: _false,
    'paging-enabled': _false,
    'enable-passive': _false,
    'refresher-enabled': _false,
    'refresher-threshold': '45',
    'refresher-default-style': "'black'",
    'refresher-background': "'#FFF'",
    'refresher-triggered': _false,
    bounces: _true,
    'show-scrollbar': _true,
    'fast-deceleration': _false,
    type: "'list'",
    reverse: _false,
    clip: _true,
    'enable-back-to-top': _false,
    'cache-extent': _empty,
    'min-drag-distance': '18',
    'scroll-into-view-within-extent': _false,
    'scroll-into-view-alignment': "'start'",
    padding: '[0,0,0,0]',
    'refresher-two-level-enabled': _false,
    'refresher-two-level-triggered': _false,
    'refresher-two-level-threshold': '150',
    'refresher-two-level-close-threshold': '80',
    'refresher-two-level-scroll-enabled': _false,
    'refresher-ballistic-refresh-enabled': _false,
    'refresher-two-level-pinned': _false,
    bindDragStart: _empty,
    bindDragging: _empty,
    bindDragEnd: _empty,
    bindRefresherPulling: _empty,
    bindRefresherRefresh: _empty,
    bindRefresherRestore: _empty,
    bindRefresherAbort: _empty,
    bindScrollStart: _empty,
    bindScrollEnd: _empty,
    bindRefresherWillRefresh: _empty,
    bindRefresherStatusChange: _empty
  },
  StickySection: {
    'push-pinned-header': _true
  },
  GridView: {
    type: "'aligned'",
    'cross-axis-count': '2',
    'max-cross-axis-extent': _zero,
    'main-axis-gap': _zero,
    'cross-axis-gap': _zero
  },
  ListView: {},
  StickyHeader: {},
  Swiper: {
    'snap-to-edge': _false,
    'easing-function': "'default'"
  },
  SwiperItem: {
    'skip-hidden-item-layout': _false
  },
  Navigator: {
    target: "'self'",
    'app-id': _empty,
    path: _empty,
    'extra-data': _empty,
    version: "'version'"
  },
  Camera: {
    mode: "'normal'",
    resolution: "'medium'",
    'frame-size': "'medium'",
    bindInitDone: _empty,
    bindScanCode: _empty
  },
  Image: {
    webp: _false,
    'show-menu-by-longpress': _false
  },
  LivePlayer: {
    mode: "'live'",
    'sound-mode': "'speaker'",
    'auto-pause-if-navigate': _true,
    'auto-pause-if-open-native': _true,
    'picture-in-picture-mode': '[]',
    bindstatechange: _empty,
    bindfullscreenchange: _empty,
    bindnetstatus: _empty,
    bindAudioVolumeNotify: _empty,
    bindEnterPictureInPicture: _empty,
    bindLeavePictureInPicture: _empty
  },
  Video: {
    title: _empty,
    'play-btn-position': "'bottom'",
    'enable-play-gesture': _false,
    'auto-pause-if-navigate': _true,
    'auto-pause-if-open-native': _true,
    'vslide-gesture': _false,
    'vslide-gesture-in-fullscreen': _true,
    'show-bottom-progress': _true,
    'ad-unit-id': _empty,
    'poster-for-crawler': _empty,
    'show-casting-button': _false,
    'picture-in-picture-mode': '[]',
    // picture-in-picture-show-progress 属性先注释掉的原因如下：
    // 该属性超过了 wxml 属性的长度限制，实际无法使用且导致编译报错。可等微信官方修复后再放开。
    // 参考1：https://developers.weixin.qq.com/community/develop/doc/000a429beb87f0eac07acc0fc5b400
    // 参考2: https://developers.weixin.qq.com/community/develop/doc/0006883619c48054286a4308258c00?_at=vyxqpllafi
    // 'picture-in-picture-show-progress': 'false',
    'enable-auto-rotation': _false,
    'show-screen-lock-button': _false,
    'show-snapshot-button': _false,
    'show-background-playback-button': _false,
    'background-poster': _empty,
    'referrer-policy': "'no-referrer'",
    'is-drm': _false,
    'is-live': _false,
    'provision-url': _empty,
    'certificate-url': _empty,
    'license-url': _empty,
    'preferred-peak-bit-rate': _empty,
    bindProgress: _empty,
    bindLoadedMetadata: _empty,
    bindControlsToggle: _empty,
    bindEnterPictureInPicture: _empty,
    bindLeavePictureInPicture: _empty,
    bindSeekComplete: _empty,
    bindCastingUserSelect: _empty,
    bindCastingStateChange: _empty,
    bindCastingInterrupt: _empty,
    bindAdLoad: _empty,
    bindAdError: _empty,
    bindAdClose: _empty,
    bindAdPlay: _empty
  },
  Canvas: {
    type: _empty
  },
  Ad: {
    'ad-type': "'banner'",
    'ad-theme': "'white'"
  },
  CoverView: {
    'marker-id': _empty,
    slot: _empty
  },
  // ======== 额外组件 ========
  Editor: {
    'read-only': _false,
    placeholder: _empty,
    'show-img-size': _false,
    'show-img-toolbar': _false,
    'show-img-resize': _false,
    focus: _false,
    bindReady: _empty,
    bindFocus: _empty,
    bindBlur: _empty,
    bindInput: _empty,
    bindStatusChange: _empty,
    name: _empty
  },
  MatchMedia: {
    'min-width': _empty,
    'max-width': _empty,
    width: _empty,
    'min-height': _empty,
    'max-height': _empty,
    height: _empty,
    orientation: _empty
  },
  FunctionalPageNavigator: {
    version: "'release'",
    name: _empty,
    args: _empty,
    bindSuccess: _empty,
    bindFail: _empty,
    bindCancel: _empty
  },
  LivePusher: {
    url: _empty,
    mode: "'RTC'",
    autopush: _false,
    muted: _false,
    'enable-camera': _true,
    'auto-focus': _true,
    orientation: "'vertical'",
    beauty: _zero,
    whiteness: _zero,
    aspect: "'9:16'",
    'min-bitrate': '200',
    'max-bitrate': '1000',
    'audio-quality': "'high'",
    'waiting-image': _empty,
    'waiting-image-hash': _empty,
    zoom: _false,
    'device-position': "'front'",
    'background-mute': _false,
    mirror: _false,
    'remote-mirror': _false,
    'local-mirror': _false,
    'audio-reverb-type': _zero,
    'enable-mic': _true,
    'enable-agc': _false,
    'enable-ans': _false,
    'audio-volume-type': "'voicecall'",
    'video-width': '360',
    'video-height': '640',
    'beauty-style': "'smooth'",
    filter: "'standard'",
    'picture-in-picture-mode': '[]',
    animation: _empty,
    bindStateChange: _empty,
    bindNetStatus: _empty,
    bindBgmStart: _empty,
    bindBgmProgress: _empty,
    bindBgmComplete: _empty,
    bindAudioVolumeNotify: _empty
  },
  OfficialAccount: {
    bindLoad: _empty,
    bindError: _empty
  },
  OpenData: {
    type: _empty,
    'open-gid': _empty,
    lang: "'en'",
    'default-text': _empty,
    'default-avatar': _empty,
    bindError: _empty
  },
  NavigationBar: {
    title: _empty,
    loading: _false,
    'front-color': _empty,
    'background-color': _empty,
    'color-animation-duration': _zero,
    'color-animation-timing-func': "'linear'"
  },
  PageMeta: {
    'background-text-style': _empty,
    'background-color': _empty,
    'background-color-top': _empty,
    'background-color-bottom': _empty,
    'scroll-top': "''",
    'scroll-duration': '300',
    'page-style': "''",
    'root-font-size': "''",
    bindResize: _empty,
    bindScroll: _empty,
    bindScrollDone: _empty
  },
  VoipRoom: {
    openid: _empty,
    mode: "'camera'",
    'device-position': "'front'",
    bindError: _empty
  },
  AdCustom: {
    'unit-id': _empty,
    'ad-intervals': _empty,
    bindLoad: _empty,
    bindError: _empty
  },
  PageContainer: {
    show: _false,
    duration: '300',
    'z-index': '100',
    overlay: _true,
    position: "'bottom'",
    round: _false,
    'close-on-slide-down': _false,
    'overlay-style': _empty,
    'custom-style': _empty,
    bindBeforeEnter: _empty,
    bindEnter: _empty,
    bindAfterEnter: _empty,
    bindBeforeLeave: _empty,
    bindLeave: _empty,
    bindAfterLeave: _empty,
    bindClickOverlay: _empty
  },
  ShareElement: {
    mapkey: _empty,
    transform: _false,
    duration: '300',
    'easing-function': "'ease-out'"
  },
  KeyboardAccessory: {},
  RootPortal: {},
  ChannelLive: {
    feedId: _empty,
    finderUserName: _empty
  },
  ChannelVideo: {
    feedId: _empty,
    finderUserName: _empty,
    autoplay: _false,
    loop: _false,
    muted: _false,
    objectFit: "'contain'",
    bindError: _empty
  },
  Snapshot: {}
};
var hostConfig = {
  initNativeApi: initNativeApi,
  getMiniLifecycle: function getMiniLifecycle(config) {
    var methods = config.page[5];
    if (methods.indexOf('onSaveExitState') === -1) {
      methods.push('onSaveExitState');
    }
    return config;
  }
};
(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.mergeReconciler)(hostConfig);
(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.mergeInternalComponents)(components);

/***/ }),

/***/ "./node_modules/.pnpm/@tarojs+react@3.6.17_react@18.2.0/node_modules/@tarojs/react/dist/react.esm.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tarojs+react@3.6.17_react@18.2.0/node_modules/@tarojs/react/dist/react.esm.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPortal: function() { return /* binding */ createPortal; },
/* harmony export */   "default": function() { return /* binding */ index; }
/* harmony export */ });
/* unused harmony exports createRoot, findDOMNode, render, unmountComponentAtNode, unstable_batchedUpdates */
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/shared */ "./node_modules/.pnpm/@tarojs+shared@3.6.17/node_modules/@tarojs/shared/dist/shared.esm.js");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/.pnpm/@tarojs+runtime@3.6.17/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var react_reconciler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reconciler */ "./node_modules/.pnpm/react-reconciler@0.27.0_react@18.2.0/node_modules/react-reconciler/cjs/react-reconciler.production.min.js");
/* harmony import */ var react_reconciler__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reconciler__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_reconciler_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reconciler/constants */ "./node_modules/.pnpm/react-reconciler@0.27.0_react@18.2.0/node_modules/react-reconciler/constants.js");







var supportedInputTypes = {
  color: true,
  date: true,
  datetime: true,
  'datetime-local': true,
  email: true,
  month: true,
  number: true,
  password: true,
  range: true,
  search: true,
  tel: true,
  text: true,
  time: true,
  url: true,
  week: true
};
var SyncLane = 1;
var InputContinuousLane = 4;
var DefaultLane = 16;
var DiscreteEventPriority = SyncLane;
var ContinuousEventPriority = InputContinuousLane;
var DefaultEventPriority = DefaultLane;
function getEventPriority(domEventName) {
  switch (domEventName) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'input':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'reset':
    case 'resize':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'change':
    case 'blur':
    case 'focus':
    case 'select':
    case 'selectstart':
      return DiscreteEventPriority;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'pointerenter':
    case 'pointerleave':
      return ContinuousEventPriority;
    default:
      return DefaultEventPriority;
  }
}
var randomKey = Math.random().toString(36).slice(2);
var internalPropsKey = '__reactProps$' + randomKey;
var internalInstanceKey = '__reactFiber$' + randomKey;
var internalContainerInstanceKey = '__reactContainer$' + randomKey;
// const internalEventHandlersKey = '__reactEvents$' + randomKey
// const internalEventHandlerListenersKey = '__reactListeners$' + randomKey
// const internalEventHandlesSetKey = '__reactHandles$' + randomKey

var HostRoot = 3; // Root of a host tree. Could be nested inside another node.
var HostComponent = 5;
var HostText = 6;
var SuspenseComponent = 13;

/**
 * 给 TaroElement 绑定 react fiber、react props 等属性
 * 提供 fiber -> element、element -> fiber、element -> props 的方法
*/
function precacheFiberNode(hostInst, node) {
  node[internalInstanceKey] = hostInst;
}
function markContainerAsRoot(hostRoot, node) {
  node[internalContainerInstanceKey] = hostRoot;
}
/**
 * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
 * instance, or null if the node was not rendered by this React.
 */
function getInstanceFromNode(node) {
  var inst = node[internalInstanceKey] || node[internalContainerInstanceKey];
  if (inst) {
    if (inst.tag === HostComponent || inst.tag === HostText || inst.tag === SuspenseComponent || inst.tag === HostRoot) {
      return inst;
    } else {
      return null;
    }
  }
  return null;
}
/**
 * Given a ReactDOMComponent or ReactDOMTextComponent, return the corresponding
 * DOM node.
 */
function getNodeFromInstance(inst) {
  if (inst.tag === HostComponent || inst.tag === HostText) {
    // In Fiber this, is just the state node right now. We assume it will be
    // a host component or host text.
    return inst.stateNode;
  }
}
function getFiberCurrentPropsFromNode(node) {
  return node[internalPropsKey] || null;
}
function updateFiberProps(node, props) {
  node[internalPropsKey] = props;
}

// 从 props 中，更新 input 组件的 value 值
function updateInputWrapper(element, oldValue, props) {
  var node = element;
  var checked = props.checked;
  if (checked != null) {
    console.warn('updateCheck 未实现', node);
    return;
  }
  updateWrapper(element, oldValue, props);
  updateNamedCousins(element, props);
}
// react 中原本处理 type=radio 的逻辑，这里留个空，暂时不处理
function updateNamedCousins(rootNode, props) {
  var name = props.name;
  if (props.type === 'radio' && name != null) {
    console.warn('radio updateNamedCousins 未实现', rootNode, props);
  }
}
function getToStringValue(value) {
  var isEmptyType = typeof value === 'function' || (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value) === 'symbol';
  return isEmptyType ? '' : value;
}
function toString(value) {
  return '' + value;
}
function updateWrapper(element, oldValue, props) {
  var node = element;
  var value = getToStringValue(props.value);
  var type = props.type;
  setNodeValue(node, oldValue, value, type);
}
// oldValue 为 event.detail.value，value 为 fiber.props.value
// 如果 oldValue 和 value 不相等，代表受控组件需要更新
// 更新的原则为，fiber.props.value 永远为用户所需要的值，因此 node.value = toString(value)
function setNodeValue(node, oldValue, value) {
  var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'string';
  if (value != null) {
    if (type === 'number') {
      if (value === 0 && node.value === '' ||
      // We explicitly want to coerce to number here if possible.
      // eslint-disable-next-line
      oldValue != value) {
        node.value = toString(value);
      }
    } else if (oldValue !== toString(value)) {
      node.value = toString(value);
    }
  } else if (type === 'submit' || type === 'reset') {
    // Submit/reset inputs need the attribute removed completely to avoid
    // blank-text buttons.
    node.removeAttribute('value');
  }
}
// 判断当前 TaroElement 是否为 supportedInputTypes input 或 textarea
function isTextInputElement(elem) {
  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
  if (nodeName === 'input') {
    var type = elem.type;
    return !type || !!supportedInputTypes[type];
  }
  if (nodeName === 'textarea') {
    return true;
  }
  return false;
}
var ReactDOMTextareaRestoreControlledState = updateWrapper;
var ReactDOMInputRestoreControlledState = updateInputWrapper;
function isCheckable(elem) {
  var type = elem.type;
  var nodeName = elem.nodeName;
  return nodeName && nodeName.toLowerCase() === 'input' && (type === 'checkbox' || type === 'radio');
}
function getTracker(node) {
  return node._valueTracker;
}
function detachTracker(node) {
  node._valueTracker = null;
}
// 之所以单独创建一个 tacker，是为了统一监听不同 type 的 input 值
// 比如 type=checkbox 或者 type=radio，就需要监听 checked，而不是 value
// 虽然目前还未实现 checkbox 和 radio 的 finishEventHandle，但后续不好说，所以先统一和 react 一样的写法
// 需要特别注意的是，tracker 初始化时的值为 node 的初始值，但后续会变更为事件的 detail.value 值
function trackValueOnNode(node) {
  var valueField = isCheckable(node) ? 'checked' : 'value';
  var descriptor = Object.getOwnPropertyDescriptor(node.constructor.prototype, valueField);
  var currentValue = '' + node[valueField];
  if (node.hasOwnProperty(valueField) || typeof descriptor === 'undefined' || typeof descriptor.get !== 'function' || typeof descriptor.set !== 'function') {
    return;
  }
  var _get = descriptor.get,
    _set = descriptor.set;
  Object.defineProperty(node, valueField, {
    configurable: true,
    enumerable: descriptor.enumerable,
    get: function get() {
      return _get.call(this);
    },
    set: function set(value) {
      currentValue = '' + value;
      _set.call(this, value);
    }
  });
  var tracker = {
    getValue: function getValue() {
      return currentValue;
    },
    setValue: function setValue(value) {
      currentValue = '' + value;
    },
    stopTracking: function stopTracking() {
      detachTracker(node);
      delete node[valueField];
    }
  };
  return tracker;
}
function track(node) {
  if (getTracker(node)) {
    return;
  }
  node._valueTracker = trackValueOnNode(node);
}
function updateValueIfChanged(node, nextValue) {
  if (!node) {
    return false;
  }
  var tracker = getTracker(node);
  if (!tracker) {
    return true;
  }
  var lastValue = tracker.getValue();
  if (nextValue !== lastValue) {
    tracker.setValue(nextValue);
    return true;
  }
  return false;
}
function isEventName(s) {
  return s[0] === 'o' && s[1] === 'n';
}
var IS_NON_DIMENSIONAL = /aspect|acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function updateProps(dom, oldProps, newProps) {
  var updatePayload = getUpdatePayload(dom, oldProps, newProps);
  if (updatePayload) {
    updatePropsByPayload(dom, oldProps, updatePayload);
  }
}
function updatePropsByPayload(dom, oldProps, updatePayload) {
  for (var i = 0; i < updatePayload.length; i += 2) {
    // key, value 成对出现
    var key = updatePayload[i];
    var newProp = updatePayload[i + 1];
    var oldProp = oldProps[key];
    setProperty(dom, key, newProp, oldProp);
  }
}
function getUpdatePayload(dom, oldProps, newProps) {
  var i;
  var updatePayload = null;
  for (i in oldProps) {
    if (!(i in newProps)) {
      (updatePayload = updatePayload || []).push(i, null);
    }
  }
  var isFormElement = dom instanceof _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.FormElement;
  for (i in newProps) {
    if (oldProps[i] !== newProps[i] || isFormElement && i === 'value') {
      (updatePayload = updatePayload || []).push(i, newProps[i]);
    }
  }
  return updatePayload;
}
// function eventProxy (e: CommonEvent) {
//   const el = document.getElementById(e.currentTarget.id)
//   const handlers = el!.__handlers[e.type]
//   handlers[0](e)
// }
function setEvent(dom, name, value, oldValue) {
  var isCapture = name.endsWith('Capture');
  var eventName = name.toLowerCase().slice(2);
  if (isCapture) {
    eventName = eventName.slice(0, -7);
  }
  var compName = (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.capitalize)((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.toCamelCase)(dom.tagName.toLowerCase()));
  if (eventName === 'click' && compName in _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.internalComponents) {
    eventName = 'tap';
  }
  if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value)) {
    if (oldValue) {
      dom.removeEventListener(eventName, oldValue, false);
      dom.addEventListener(eventName, value, {
        isCapture: isCapture,
        sideEffect: false
      });
    } else {
      dom.addEventListener(eventName, value, isCapture);
    }
  } else {
    dom.removeEventListener(eventName, oldValue);
  }
}
function setStyle(style, key, value) {
  if (key[0] === '-') {
    style.setProperty(key, value.toString());
    // css variables need not further judgment
    return;
  }
  style[key] = (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isNumber)(value) && IS_NON_DIMENSIONAL.test(key) === false ? value + 'px' : value == null ? '' : value;
}
function setProperty(dom, name, value, oldValue) {
  var _a, _b;
  name = name === 'className' ? 'class' : name;
  if (name === 'key' || name === 'children' || name === 'ref') ;else if (name === 'style') {
    var style = dom.style;
    if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(value)) {
      style.cssText = value;
    } else {
      if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(oldValue)) {
        style.cssText = '';
        oldValue = null;
      }
      if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(oldValue)) {
        for (var i in oldValue) {
          if (!(value && i in value)) {
            setStyle(style, i, '');
          }
        }
      }
      if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(value)) {
        for (var _i in value) {
          if (!oldValue || value[_i] !== oldValue[_i]) {
            setStyle(style, _i, value[_i]);
          }
        }
      }
    }
  } else if (isEventName(name)) {
    setEvent(dom, name, value, oldValue);
  } else if (name === 'dangerouslySetInnerHTML') {
    var newHtml = (_a = value === null || value === void 0 ? void 0 : value.__html) !== null && _a !== void 0 ? _a : '';
    var oldHtml = (_b = oldValue === null || oldValue === void 0 ? void 0 : oldValue.__html) !== null && _b !== void 0 ? _b : '';
    if (newHtml || oldHtml) {
      if (oldHtml !== newHtml) {
        dom.innerHTML = newHtml;
      }
    }
  } else if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value)) {
    if (value == null) {
      dom.removeAttribute(name);
    } else {
      dom.setAttribute(name, value);
    }
  }
}

/* eslint-disable @typescript-eslint/indent */
var hostConfig = {
  // below keys order by {React ReactFiberHostConfig.custom.js}, convenient for comparing each other.
  // -------------------
  // required by @types/react-reconciler
  // -------------------
  getPublicInstance: function getPublicInstance(inst) {
    return inst;
  },
  getRootHostContext: function getRootHostContext() {
    return {};
  },
  getChildHostContext: function getChildHostContext(parentHostContext) {
    return parentHostContext;
  },
  prepareForCommit: function prepareForCommit() {
    return null;
  },
  resetAfterCommit: _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
  createInstance: function createInstance(type, props, _rootContainerInstance, _hostContext, internalInstanceHandle) {
    var element = _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.document.createElement(type);
    precacheFiberNode(internalInstanceHandle, element);
    updateFiberProps(element, props);
    return element;
  },
  appendInitialChild: function appendInitialChild(parent, child) {
    parent.appendChild(child);
  },
  finalizeInitialChildren: function finalizeInitialChildren(dom, type, props) {
    updateProps(dom, {}, props); // 提前执行更新属性操作，Taro 在 Page 初始化后会立即从 dom 读取必要信息
    if (type === 'input' || type === 'textarea') {
      track(dom);
    }
    return false;
  },
  prepareUpdate: function prepareUpdate(instance, _, oldProps, newProps) {
    return getUpdatePayload(instance, oldProps, newProps);
  },
  shouldSetTextContent: function shouldSetTextContent() {
    return false;
  },
  createTextInstance: function createTextInstance(text, _rootContainerInstance, _hostContext, internalInstanceHandle) {
    var textNode = _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.document.createTextNode(text);
    precacheFiberNode(internalInstanceHandle, textNode);
    return textNode;
  },
  scheduleTimeout: setTimeout,
  cancelTimeout: clearTimeout,
  noTimeout: -1,
  isPrimaryRenderer: true,
  warnsIfNotActing: true,
  supportsMutation: true,
  supportsPersistence: false,
  supportsHydration: false,
  getInstanceFromNode: function getInstanceFromNode() {
    return null;
  },
  beforeActiveInstanceBlur: _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
  afterActiveInstanceBlur: _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
  preparePortalMount: _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
  prepareScopeUpdate: _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
  getInstanceFromScope: function getInstanceFromScope() {
    return null;
  },
  getCurrentEventPriority: function getCurrentEventPriority() {
    return react_reconciler_constants__WEBPACK_IMPORTED_MODULE_3__.DefaultEventPriority;
  },
  detachDeletedInstance: _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
  // -------------------
  //      Microtasks
  //     (optional)
  // -------------------
  supportsMicrotasks: true,
  scheduleMicrotask: (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(Promise) ? setTimeout : function (callback) {
    return Promise.resolve(null).then(callback).catch(function (error) {
      setTimeout(function () {
        throw error;
      });
    });
  },
  // -------------------
  //      Mutation
  //     (required if supportsMutation is true)
  // -------------------
  appendChild: function appendChild(parent, child) {
    parent.appendChild(child);
  },
  appendChildToContainer: function appendChildToContainer(parent, child) {
    parent.appendChild(child);
  },
  commitTextUpdate: function commitTextUpdate(textInst, _, newText) {
    textInst.nodeValue = newText;
  },
  commitMount: _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
  commitUpdate: function commitUpdate(dom, updatePayload, _, oldProps, newProps) {
    updatePropsByPayload(dom, oldProps, updatePayload);
    updateFiberProps(dom, newProps);
  },
  insertBefore: function insertBefore(parent, child, refChild) {
    parent.insertBefore(child, refChild);
  },
  insertInContainerBefore: function insertInContainerBefore(parent, child, refChild) {
    parent.insertBefore(child, refChild);
  },
  removeChild: function removeChild(parent, child) {
    parent.removeChild(child);
  },
  removeChildFromContainer: function removeChildFromContainer(parent, child) {
    parent.removeChild(child);
  },
  resetTextContent: _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
  hideInstance: function hideInstance(instance) {
    var style = instance.style;
    style.setProperty('display', 'none');
  },
  hideTextInstance: function hideTextInstance(textInstance) {
    textInstance.nodeValue = '';
  },
  unhideInstance: function unhideInstance(instance, props) {
    var styleProp = props.style;
    var display = (styleProp === null || styleProp === void 0 ? void 0 : styleProp.hasOwnProperty('display')) ? styleProp.display : null;
    display = display == null || (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(display) || display === '' ? '' : ('' + display).trim();
    // eslint-disable-next-line dot-notation
    instance.style['display'] = display;
  },
  unhideTextInstance: function unhideTextInstance(textInstance, text) {
    textInstance.nodeValue = text;
  },
  clearContainer: function clearContainer(element) {
    if (element.childNodes.length > 0) {
      element.textContent = '';
    }
  }
};
var TaroReconciler = react_reconciler__WEBPACK_IMPORTED_MODULE_2___default()(hostConfig);
if (true) {
  var foundDevTools = TaroReconciler.injectIntoDevTools({
    bundleType: 1,
    version: '18.0.0',
    rendererPackageName: 'taro-react'
  });
  if (!foundDevTools) {
    // eslint-disable-next-line no-console
    console.info('%cDownload the React DevTools ' + 'for a better development experience: ' + 'https://reactjs.org/link/react-devtools', 'font-weight:bold');
  }
}
var restoreQueue = null;
// 对比 TaroElement tracker 下的 value 和事件下的 value，判断 element 的值是否存在更改
function getTargetInstForInputOrChangeEvent(e, node) {
  var _a, _b;
  var targetInst = getInstanceFromNode(node);
  var domEventName = e.type;
  if (!targetInst || !isTextInputElement(node)) return;
  if (domEventName === 'input' || domEventName === 'change') {
    var nextValue = toString((_b = (_a = e.mpEvent) === null || _a === void 0 ? void 0 : _a.detail) === null || _b === void 0 ? void 0 : _b.value);
    return getInstIfValueChanged(targetInst, nextValue);
  }
}
function getInstIfValueChanged(targetInst, nextValue) {
  var targetNode = getNodeFromInstance(targetInst);
  if (!targetNode) return false;
  if (updateValueIfChanged(targetNode, nextValue)) {
    return targetInst;
  }
}
// 把 target 塞入更新队列中
function enqueueStateRestore(target) {
  if (restoreQueue) {
    restoreQueue.push(target);
  } else {
    restoreQueue = [target];
  }
}
// 判断是否需要恢复 target（input、textarea） 的状态
function needsStateRestore() {
  return restoreQueue !== null;
}
function finishEventHandler() {
  var controlledComponentsHavePendingUpdates = needsStateRestore();
  if (controlledComponentsHavePendingUpdates) {
    TaroReconciler.flushSync();
    restoreStateIfNeeded();
  }
}
// 遍历 restoreQueue、restoreTarget，恢复其状态
function restoreStateIfNeeded() {
  if (!restoreQueue) {
    return;
  }
  var queuedTargets = restoreQueue;
  restoreQueue = null;
  for (var i = 0; i < queuedTargets.length; i++) {
    restoreStateOfTarget(queuedTargets[i]);
  }
}
function restoreImpl(domElement, tag, oldValue, props) {
  switch (tag) {
    case 'input':
      ReactDOMInputRestoreControlledState(domElement, oldValue, props);
      break;
    case 'textarea':
      ReactDOMTextareaRestoreControlledState(domElement, oldValue, props);
      break;
  }
}
function restoreStateOfTarget(item) {
  var internalInstance = getInstanceFromNode(item.target);
  if (!internalInstance) return;
  var stateNode = internalInstance.stateNode,
    type = internalInstance.type;
  if (stateNode) {
    var props = getFiberCurrentPropsFromNode(stateNode);
    restoreImpl(stateNode, type, item.value, props);
  }
}
var ContainerMap = new WeakMap();
var Root = /*#__PURE__*/function () {
  function Root(renderer, domContainer, options) {
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Root);
    this.renderer = renderer;
    this.initInternalRoot(renderer, domContainer, options);
  }
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__["default"])(Root, [{
    key: "initInternalRoot",
    value: function initInternalRoot(renderer, domContainer, options) {
      // Since react-reconciler v0.27, createContainer need more parameters
      // @see:https://github.com/facebook/react/blob/0b974418c9a56f6c560298560265dcf4b65784bc/packages/react-reconciler/src/ReactFiberReconciler.js#L248
      var containerInfo = domContainer;
      if (options) {
        var tag = 1; // ConcurrentRoot
        var concurrentUpdatesByDefaultOverride = false;
        var isStrictMode = false;
        var identifierPrefix = '';
        var onRecoverableError = function onRecoverableError(error) {
          return console.error(error);
        };
        var transitionCallbacks = null;
        if (options.unstable_strictMode === true) {
          isStrictMode = true;
        }
        if (options.identifierPrefix !== undefined) {
          identifierPrefix = options.identifierPrefix;
        }
        if (options.onRecoverableError !== undefined) {
          onRecoverableError = options.onRecoverableError;
        }
        if (options.unstable_transitionCallbacks !== undefined) {
          transitionCallbacks = options.unstable_transitionCallbacks;
        }
        this.internalRoot = renderer.createContainer(containerInfo, tag, null,
        // hydrationCallbacks
        isStrictMode, concurrentUpdatesByDefaultOverride, identifierPrefix, onRecoverableError, transitionCallbacks);
      } else {
        var _tag = 0; // LegacyRoot
        this.internalRoot = renderer.createContainer(containerInfo, _tag, null,
        // hydrationCallbacks
        false,
        // isStrictMode
        false,
        // concurrentUpdatesByDefaultOverride,
        '',
        // identifierPrefix
        function () {},
        // onRecoverableError, this isn't reachable because onRecoverableError isn't called in the legacy API.
        null // transitionCallbacks
        );
      }
    }
  }, {
    key: "render",
    value: function render(children, cb) {
      var renderer = this.renderer,
        internalRoot = this.internalRoot;
      renderer.updateContainer(children, internalRoot, null, cb);
      return renderer.getPublicRootInstance(internalRoot);
    }
  }, {
    key: "unmount",
    value: function unmount(cb) {
      this.renderer.updateContainer(null, this.internalRoot, null, cb);
    }
  }]);
  return Root;
}();
function render(element, domContainer, cb) {
  var oldRoot = ContainerMap.get(domContainer);
  if (oldRoot != null) {
    return oldRoot.render(element, cb);
  }
  var root = new Root(TaroReconciler, domContainer);
  ContainerMap.set(domContainer, root);
  return root.render(element, cb);
}
function createRoot(domContainer) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _a;
  var oldRoot = ContainerMap.get(domContainer);
  if (oldRoot != null) {
    return oldRoot;
  }
  // options should be an object
  var root = new Root(TaroReconciler, domContainer, options);
  ContainerMap.set(domContainer, root);
  markContainerAsRoot((_a = root === null || root === void 0 ? void 0 : root.internalRoot) === null || _a === void 0 ? void 0 : _a.current, domContainer);
  _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.hooks.tap('dispatchTaroEvent', function (e, node) {
    var eventPriority = getEventPriority(e.type);
    TaroReconciler.runWithPriority(eventPriority, function () {
      node.dispatchEvent(e);
    });
  });
  // 对比 event.detail.value 和 node.tracker.value，判断 value 值是否有变动，存在变动则塞入队列中
  _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.hooks.tap('modifyTaroEvent', function (e, node) {
    var _a, _b;
    var inst = getTargetInstForInputOrChangeEvent(e, node);
    if (!inst) return;
    // 这里塞入的是 event.detail.value，也就是事件的值，在受控组件中，你可以理解为需要被变更的值
    // 后续会在 finishEventHandler 中，使用最新的 fiber.props.value 来与其比较
    // 如果不一致，则表示需要更新，会执行 node.value = fiber.props.value 的更新操作
    var nextValue = (_b = (_a = e.mpEvent) === null || _a === void 0 ? void 0 : _a.detail) === null || _b === void 0 ? void 0 : _b.value;
    enqueueStateRestore({
      target: node,
      value: nextValue
    });
  });
  return root;
}
var isInsideEventHandler = false;
// 重新包裹 batchedUpdates，使其可以在触发事件后执行 finishEventHandler
var unstable_batchedUpdates = function unstable_batchedUpdates(fn, a) {
  if (isInsideEventHandler) {
    return fn(a);
  }
  isInsideEventHandler = true;
  try {
    return TaroReconciler.batchedUpdates(fn, a);
  } finally {
    isInsideEventHandler = false;
    finishEventHandler();
  }
};
function unmountComponentAtNode(dom) {
  (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.ensure)(dom && [1, 8, 9, 11].includes(dom.nodeType), 'unmountComponentAtNode(...): Target container is not a DOM element.');
  var root = ContainerMap.get(dom);
  if (!root) return false;
  unstable_batchedUpdates(function () {
    root.unmount(function () {
      ContainerMap.delete(dom);
    });
  }, null);
  return true;
}
function findDOMNode(comp) {
  if (comp == null) {
    return null;
  }
  var nodeType = comp.nodeType;
  if (nodeType === 1 || nodeType === 3) {
    return comp;
  }
  return TaroReconciler.findHostInstance(comp);
}
var portalType = (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(Symbol) && Symbol.for ? Symbol.for('react.portal') : 0xeaca;
function createPortal(children, containerInfo, key) {
  return {
    $$typeof: portalType,
    key: key == null ? null : String(key),
    children: children,
    containerInfo: containerInfo,
    implementation: null
  };
}
var index = {
  render: render,
  createRoot: createRoot,
  unstable_batchedUpdates: unstable_batchedUpdates,
  unmountComponentAtNode: unmountComponentAtNode,
  findDOMNode: findDOMNode,
  createPortal: createPortal
};


/***/ }),

/***/ "./node_modules/.pnpm/@tarojs+runtime@3.6.17/node_modules/@tarojs/runtime/dist/runtime.esm.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tarojs+runtime@3.6.17/node_modules/@tarojs/runtime/dist/runtime.esm.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ A; },
/* harmony export */   APP: function() { return /* binding */ APP; },
/* harmony export */   BEHAVIORS: function() { return /* binding */ BEHAVIORS; },
/* harmony export */   BODY: function() { return /* binding */ BODY; },
/* harmony export */   CATCHMOVE: function() { return /* binding */ CATCHMOVE; },
/* harmony export */   CATCH_VIEW: function() { return /* binding */ CATCH_VIEW; },
/* harmony export */   CHANGE: function() { return /* binding */ CHANGE; },
/* harmony export */   CLASS: function() { return /* binding */ CLASS; },
/* harmony export */   COMMENT: function() { return /* binding */ COMMENT; },
/* harmony export */   CONFIRM: function() { return /* binding */ CONFIRM; },
/* harmony export */   CONTAINER: function() { return /* binding */ CONTAINER; },
/* harmony export */   CONTEXT_ACTIONS: function() { return /* binding */ CONTEXT_ACTIONS; },
/* harmony export */   CURRENT_TARGET: function() { return /* binding */ CURRENT_TARGET; },
/* harmony export */   CUSTOM_WRAPPER: function() { return /* binding */ CUSTOM_WRAPPER; },
/* harmony export */   Current: function() { return /* binding */ Current; },
/* harmony export */   DATASET: function() { return /* binding */ DATASET; },
/* harmony export */   DATE: function() { return /* binding */ DATE; },
/* harmony export */   DOCUMENT_ELEMENT_NAME: function() { return /* binding */ DOCUMENT_ELEMENT_NAME; },
/* harmony export */   DOCUMENT_FRAGMENT: function() { return /* binding */ DOCUMENT_FRAGMENT; },
/* harmony export */   EVENT_CALLBACK_RESULT: function() { return /* binding */ EVENT_CALLBACK_RESULT; },
/* harmony export */   EXTERNAL_CLASSES: function() { return /* binding */ EXTERNAL_CLASSES; },
/* harmony export */   Events: function() { return /* reexport safe */ _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.Events; },
/* harmony export */   FOCUS: function() { return /* binding */ FOCUS; },
/* harmony export */   FormElement: function() { return /* binding */ FormElement; },
/* harmony export */   HEAD: function() { return /* binding */ HEAD; },
/* harmony export */   HOOKS_APP_ID: function() { return /* binding */ HOOKS_APP_ID; },
/* harmony export */   HTML: function() { return /* binding */ HTML; },
/* harmony export */   History: function() { return /* binding */ History; },
/* harmony export */   ID: function() { return /* binding */ ID; },
/* harmony export */   INPUT: function() { return /* binding */ INPUT; },
/* harmony export */   KEY_CODE: function() { return /* binding */ KEY_CODE; },
/* harmony export */   Location: function() { return /* binding */ Location; },
/* harmony export */   MutationObserver: function() { return /* binding */ MutationObserver; },
/* harmony export */   OBJECT: function() { return /* binding */ OBJECT; },
/* harmony export */   ON_HIDE: function() { return /* binding */ ON_HIDE; },
/* harmony export */   ON_LOAD: function() { return /* binding */ ON_LOAD; },
/* harmony export */   ON_READY: function() { return /* binding */ ON_READY; },
/* harmony export */   ON_SHOW: function() { return /* binding */ ON_SHOW; },
/* harmony export */   OPTIONS: function() { return /* binding */ OPTIONS; },
/* harmony export */   PAGE_INIT: function() { return /* binding */ PAGE_INIT; },
/* harmony export */   PROPERTY_THRESHOLD: function() { return /* binding */ PROPERTY_THRESHOLD; },
/* harmony export */   PROPS: function() { return /* binding */ PROPS; },
/* harmony export */   PURE_VIEW: function() { return /* binding */ PURE_VIEW; },
/* harmony export */   ROOT_STR: function() { return /* binding */ ROOT_STR; },
/* harmony export */   SET_DATA: function() { return /* binding */ SET_DATA; },
/* harmony export */   SET_TIMEOUT: function() { return /* binding */ SET_TIMEOUT; },
/* harmony export */   STATIC_VIEW: function() { return /* binding */ STATIC_VIEW; },
/* harmony export */   STYLE: function() { return /* binding */ STYLE; },
/* harmony export */   SVGElement: function() { return /* binding */ SVGElement; },
/* harmony export */   Style: function() { return /* binding */ Style; },
/* harmony export */   TARGET: function() { return /* binding */ TARGET; },
/* harmony export */   TARO_RUNTIME: function() { return /* binding */ TARO_RUNTIME; },
/* harmony export */   TIME_STAMP: function() { return /* binding */ TIME_STAMP; },
/* harmony export */   TOUCHMOVE: function() { return /* binding */ TOUCHMOVE; },
/* harmony export */   TYPE: function() { return /* binding */ TYPE; },
/* harmony export */   TaroElement: function() { return /* binding */ TaroElement; },
/* harmony export */   TaroEvent: function() { return /* binding */ TaroEvent; },
/* harmony export */   TaroNode: function() { return /* binding */ TaroNode; },
/* harmony export */   TaroRootElement: function() { return /* binding */ TaroRootElement; },
/* harmony export */   TaroText: function() { return /* binding */ TaroText; },
/* harmony export */   UID: function() { return /* binding */ UID; },
/* harmony export */   URL: function() { return /* binding */ URL; },
/* harmony export */   URLSearchParams: function() { return /* binding */ URLSearchParams; },
/* harmony export */   VALUE: function() { return /* binding */ VALUE; },
/* harmony export */   VIEW: function() { return /* binding */ VIEW; },
/* harmony export */   addLeadingSlash: function() { return /* binding */ addLeadingSlash; },
/* harmony export */   cancelAnimationFrame: function() { return /* binding */ _caf; },
/* harmony export */   createComponentConfig: function() { return /* binding */ createComponentConfig; },
/* harmony export */   createEvent: function() { return /* binding */ createEvent; },
/* harmony export */   createPageConfig: function() { return /* binding */ createPageConfig; },
/* harmony export */   createRecursiveComponentConfig: function() { return /* binding */ createRecursiveComponentConfig; },
/* harmony export */   document: function() { return /* binding */ document$1; },
/* harmony export */   env: function() { return /* binding */ env; },
/* harmony export */   eventCenter: function() { return /* binding */ eventCenter; },
/* harmony export */   eventHandler: function() { return /* binding */ eventHandler; },
/* harmony export */   eventSource: function() { return /* binding */ eventSource; },
/* harmony export */   getComputedStyle: function() { return /* binding */ getComputedStyle; },
/* harmony export */   getCurrentInstance: function() { return /* binding */ getCurrentInstance; },
/* harmony export */   getOnHideEventKey: function() { return /* binding */ getOnHideEventKey; },
/* harmony export */   getOnReadyEventKey: function() { return /* binding */ getOnReadyEventKey; },
/* harmony export */   getOnShowEventKey: function() { return /* binding */ getOnShowEventKey; },
/* harmony export */   getPageInstance: function() { return /* binding */ getPageInstance; },
/* harmony export */   getPath: function() { return /* binding */ getPath; },
/* harmony export */   history: function() { return /* binding */ history; },
/* harmony export */   hooks: function() { return /* reexport safe */ _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks; },
/* harmony export */   hydrate: function() { return /* binding */ hydrate; },
/* harmony export */   incrementId: function() { return /* binding */ incrementId; },
/* harmony export */   injectPageInstance: function() { return /* binding */ injectPageInstance; },
/* harmony export */   location: function() { return /* binding */ location; },
/* harmony export */   navigator: function() { return /* binding */ nav; },
/* harmony export */   nextTick: function() { return /* binding */ nextTick; },
/* harmony export */   now: function() { return /* binding */ now; },
/* harmony export */   options: function() { return /* binding */ options; },
/* harmony export */   parseUrl: function() { return /* binding */ parseUrl; },
/* harmony export */   removePageInstance: function() { return /* binding */ removePageInstance; },
/* harmony export */   requestAnimationFrame: function() { return /* binding */ _raf; },
/* harmony export */   safeExecute: function() { return /* binding */ safeExecute; },
/* harmony export */   stringify: function() { return /* binding */ stringify; },
/* harmony export */   window: function() { return /* binding */ window$1; }
/* harmony export */ });
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/get.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_set_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/set.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/set.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_toArray_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/toArray.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/toArray.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_wrapNativeSuper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/shared */ "./node_modules/.pnpm/@tarojs+shared@3.6.17/node_modules/@tarojs/shared/dist/shared.esm.js");
/* provided dependency */ var window = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/.pnpm/@tarojs+runtime@3.6.17/node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"];
/* provided dependency */ var document = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/.pnpm/@tarojs+runtime@3.6.17/node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"];
/* provided dependency */ var requestAnimationFrame = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/.pnpm/@tarojs+runtime@3.6.17/node_modules/@tarojs/runtime/dist/runtime.esm.js")["requestAnimationFrame"];
/* provided dependency */ var cancelAnimationFrame = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/.pnpm/@tarojs+runtime@3.6.17/node_modules/@tarojs/runtime/dist/runtime.esm.js")["cancelAnimationFrame"];
















var PROPERTY_THRESHOLD = 2046;
var TARO_RUNTIME = 'Taro runtime';
var HOOKS_APP_ID = 'taro-app';
var SET_DATA = '小程序 setData';
var PAGE_INIT = '页面初始化';
var ROOT_STR = 'root';
var HTML = 'html';
var HEAD = 'head';
var BODY = 'body';
var APP = 'app';
var CONTAINER = 'container';
var DOCUMENT_ELEMENT_NAME = '#document';
var DOCUMENT_FRAGMENT = 'document-fragment';
var ID = 'id';
var UID = 'uid';
var CLASS = 'class';
var STYLE = 'style';
var FOCUS = 'focus';
var VIEW = 'view';
var STATIC_VIEW = 'static-view';
var PURE_VIEW = 'pure-view';
var PROPS = 'props';
var DATASET = 'dataset';
var OBJECT = 'object';
var VALUE = 'value';
var INPUT = 'input';
var CHANGE = 'change';
var CUSTOM_WRAPPER = 'custom-wrapper';
var TARGET = 'target';
var CURRENT_TARGET = 'currentTarget';
var TYPE = 'type';
var CONFIRM = 'confirm';
var TIME_STAMP = 'timeStamp';
var KEY_CODE = 'keyCode';
var TOUCHMOVE = 'touchmove';
var DATE = 'Date';
var SET_TIMEOUT = 'setTimeout';
var CATCHMOVE = 'catchMove';
var CATCH_VIEW = 'catch-view';
var COMMENT = 'comment';
var ON_LOAD = 'onLoad';
var ON_READY = 'onReady';
var ON_SHOW = 'onShow';
var ON_HIDE = 'onHide';
var OPTIONS = 'options';
var EXTERNAL_CLASSES = 'externalClasses';
var EVENT_CALLBACK_RESULT = 'e_result';
var BEHAVIORS = 'behaviors';
var A = 'a';
/**
 * 页面上下文切换时的行为
 */
var CONTEXT_ACTIONS;
(function (CONTEXT_ACTIONS) {
  CONTEXT_ACTIONS["INIT"] = "0";
  CONTEXT_ACTIONS["RESTORE"] = "1";
  CONTEXT_ACTIONS["RECOVER"] = "2";
  CONTEXT_ACTIONS["DESTORY"] = "3";
})(CONTEXT_ACTIONS || (CONTEXT_ACTIONS = {}));
var observers = [];
/**
 * The MutationObserver provides the ability
 * to watch for changes being made to the DOM tree.
 * It will invoke a specified callback function
 * when DOM changes occur.
 * @see https://dom.spec.whatwg.org/#mutationobserver
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
 */
var MutationObserverImpl = /*#__PURE__*/function () {
  function MutationObserverImpl(callback) {
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MutationObserverImpl);
    this.records = [];
    this.callback = callback;
  }
  /**
   * Configures the MutationObserver
   * to begin receiving notifications
   * through its callback function
   * when DOM changes matching the given options occur.
   *
   * Options matching is to be implemented.
   */
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(MutationObserverImpl, [{
    key: "observe",
    value: function observe(target, options) {
      this.disconnect();
      this.target = target;
      this.options = options || {};
      observers.push(this);
    }
    /**
     * Stop the MutationObserver instance
     * from receiving further notifications
     * until and unless observe() is called again.
     */
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.target = null;
      var index = observers.indexOf(this);
      if (index >= 0) {
        observers.splice(index, 1);
      }
    }
    /**
     * Removes all pending notifications
     * from the MutationObserver's notification queue
     * and returns them in a new Array of MutationRecord objects.
     */
  }, {
    key: "takeRecords",
    value: function takeRecords() {
      return this.records.splice(0, this.records.length);
    }
  }]);
  return MutationObserverImpl;
}();
/** Match two TaroNodes by sid. */
var sidMatches = function sidMatches(observerTarget, target) {
  return !!observerTarget && observerTarget.sid === (target === null || target === void 0 ? void 0 : target.sid);
};
var isConcerned = function isConcerned(record, options) {
  var characterData = options.characterData,
    characterDataOldValue = options.characterDataOldValue,
    attributes = options.attributes,
    attributeOldValue = options.attributeOldValue,
    childList = options.childList;
  switch (record.type) {
    case "characterData" /* MutationRecordType.CHARACTER_DATA */:
      if (characterData) {
        if (!characterDataOldValue) record.oldValue = null;
        return true;
      }
      return false;
    case "attributes" /* MutationRecordType.ATTRIBUTES */:
      if (attributes) {
        if (!attributeOldValue) record.oldValue = null;
        return true;
      }
      return false;
    case "childList" /* MutationRecordType.CHILD_LIST */:
      if (childList) {
        return true;
      }
      return false;
  }
};
var pendingMuatations = false;
function logMutation(observer, record) {
  observer.records.push(record);
  if (!pendingMuatations) {
    pendingMuatations = true;
    Promise.resolve().then(function () {
      pendingMuatations = false;
      observers.forEach(function (observer) {
        return observer.callback(observer.takeRecords());
      });
    });
  }
}
function recordMutation(record) {
  observers.forEach(function (observer) {
    var options = observer.options;
    for (var t = record.target; t; t = t.parentNode) {
      if (sidMatches(observer.target, t) && isConcerned(record, options)) {
        logMutation(observer, record);
        break;
      }
      if (!options.subtree) break;
    }
  });
}
var MutationObserver = /*#__PURE__*/function () {
  function MutationObserver(callback) {
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MutationObserver);
    if (false) {} else {
      if (true) {
        console.warn('[Taro Warning] 若要使用 MutationObserver，请在 Taro 编译配置中设置 \'mini.enableMutationObserver: true\'');
      }
      this.core = {
        observe: _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
        disconnect: _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
        takeRecords: _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.noop
      };
    }
  }
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(MutationObserver, [{
    key: "observe",
    value: function observe() {
      var _this$core;
      (_this$core = this.core).observe.apply(_this$core, arguments);
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.core.disconnect();
    }
  }, {
    key: "takeRecords",
    value: function takeRecords() {
      return this.core.takeRecords();
    }
  }], [{
    key: "record",
    value: function record(_record) {
      recordMutation(_record);
    }
  }]);
  return MutationObserver;
}();
var incrementId = function incrementId() {
  var chatCodes = [];
  // A-Z
  for (var i = 65; i <= 90; i++) {
    chatCodes.push(i);
  }
  // a-z
  for (var _i = 97; _i <= 122; _i++) {
    chatCodes.push(_i);
  }
  var chatCodesLen = chatCodes.length - 1;
  var list = [0, 0];
  return function () {
    var target = list.map(function (item) {
      return chatCodes[item];
    });
    var res = String.fromCharCode.apply(String, (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(target));
    var tailIdx = list.length - 1;
    list[tailIdx]++;
    while (list[tailIdx] > chatCodesLen) {
      list[tailIdx] = 0;
      tailIdx = tailIdx - 1;
      if (tailIdx < 0) {
        list.push(0);
        break;
      }
      list[tailIdx]++;
    }
    return res;
  };
};
function isElement(node) {
  return node.nodeType === 1 /* NodeType.ELEMENT_NODE */;
}

function isText(node) {
  return node.nodeType === 3 /* NodeType.TEXT_NODE */;
}

function isComment(node) {
  return node.nodeName === COMMENT;
}
function isHasExtractProp(el) {
  var res = Object.keys(el.props).find(function (prop) {
    return !(/^(class|style|id)$/.test(prop) || prop.startsWith('data-'));
  });
  return Boolean(res);
}
/**
 * 往上寻找组件树直到 root，寻找是否有祖先组件绑定了同类型的事件
 * @param node 当前组件
 * @param type 事件类型
 */
function isParentBinded(node, type) {
  var _a;
  var res = false;
  while ((node === null || node === void 0 ? void 0 : node.parentElement) && node.parentElement._path !== ROOT_STR) {
    if ((_a = node.parentElement.__handlers[type]) === null || _a === void 0 ? void 0 : _a.length) {
      res = true;
      break;
    }
    node = node.parentElement;
  }
  return res;
}
function shortcutAttr(key) {
  switch (key) {
    case STYLE:
      return "st" /* Shortcuts.Style */;
    case ID:
      return UID;
    case CLASS:
      return "cl" /* Shortcuts.Class */;
    default:
      return key;
  }
}
var customWrapperCache = new Map();
function _extend(ctor, methodName, options) {
  if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(options)) {
    options = {
      value: options
    };
  }
  Object.defineProperty(ctor.prototype, methodName, Object.assign({
    configurable: true,
    enumerable: true
  }, options));
}
var componentsAlias$1;
function getComponentsAlias() {
  if (!componentsAlias$1) {
    componentsAlias$1 = (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.getComponentsAlias)(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.internalComponents);
  }
  return componentsAlias$1;
}
var ClassList = /*#__PURE__*/function () {
  function ClassList(className, el) {
    var _this = this;
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ClassList);
    this.tokenList = [];
    this.el = el;
    className.trim().split(/\s+/).forEach(function (token) {
      return _this.tokenList.push(token);
    });
  }
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(ClassList, [{
    key: "value",
    get: function get() {
      return this.toString();
    }
  }, {
    key: "length",
    get: function get() {
      return this.tokenList.length;
    }
  }, {
    key: "add",
    value: function add() {
      var index = 0;
      var updated = false;
      var tokens = arguments;
      var length = tokens.length;
      var tokenList = this.tokenList;
      do {
        var token = tokens[index];
        if (this.checkTokenIsValid(token) && !~tokenList.indexOf(token)) {
          tokenList.push(token);
          updated = true;
        }
      } while (++index < length);
      if (updated) {
        this._update();
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      var i = 0;
      var updated = false;
      var tokens = arguments;
      var length = tokens.length;
      var tokenList = this.tokenList;
      do {
        var token = tokens[i] + '';
        if (!this.checkTokenIsValid(token)) continue;
        var index = tokenList.indexOf(token);
        if (~tokenList.indexOf(token)) {
          tokenList.splice(index, 1);
          updated = true;
        }
      } while (++i < length);
      if (updated) {
        this._update();
      }
    }
  }, {
    key: "contains",
    value: function contains(token) {
      if (!this.checkTokenIsValid(token)) return false;
      return !!~this.tokenList.indexOf(token);
    }
  }, {
    key: "toggle",
    value: function toggle(token, force) {
      var result = this.contains(token);
      var method = result ? force !== true && 'remove' : force !== false && 'add';
      if (method) {
        // @ts-ignore
        this[method](token);
      }
      if (force === true || force === false) {
        return force;
      } else {
        return !result;
      }
    }
  }, {
    key: "replace",
    value: function replace(token, replacement_token) {
      if (!this.checkTokenIsValid(token) || !this.checkTokenIsValid(replacement_token)) return;
      var index = this.tokenList.indexOf(token);
      if (~index) {
        this.tokenList.splice(index, 1, replacement_token);
        this._update();
      }
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.tokenList.filter(function (v) {
        return v !== '';
      }).join(' ');
    }
  }, {
    key: "checkTokenIsValid",
    value: function checkTokenIsValid(token) {
      if (token === '' || /\s/.test(token)) return false;
      return true;
    }
  }, {
    key: "_update",
    value: function _update() {
      this.el.className = this.value;
    }
  }]);
  return ClassList;
}();
var EventSource = /*#__PURE__*/function (_Map) {
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__["default"])(EventSource, _Map);
  var _super = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__["default"])(EventSource);
  function EventSource() {
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EventSource);
    return _super.apply(this, arguments);
  }
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(EventSource, [{
    key: "removeNode",
    value: function removeNode(child) {
      var sid = child.sid,
        uid = child.uid;
      this.delete(sid);
      if (uid !== sid && uid) this.delete(uid);
    }
  }, {
    key: "removeNodeTree",
    value: function removeNodeTree(child) {
      var _this2 = this;
      this.removeNode(child);
      var childNodes = child.childNodes;
      childNodes.forEach(function (node) {
        return _this2.removeNodeTree(node);
      });
    }
  }]);
  return EventSource;
}( /*#__PURE__*/(0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_wrapNativeSuper_js__WEBPACK_IMPORTED_MODULE_6__["default"])(Map));
var eventSource = new EventSource();
var isWeb$1 = (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isWebPlatform)();
var env = {
  window: isWeb$1 ? window : _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.EMPTY_OBJ,
  document: isWeb$1 ? document : _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.EMPTY_OBJ
};
var SPECIAL_NODES;
var componentsAlias;
/**
 * React also has a fancy function's name for this: `hydrate()`.
 * You may have been heard `hydrate` as a SSR-related function,
 * actually, `hydrate` basicly do the `render()` thing, but ignore some properties,
 * it's a vnode traverser and modifier: that's exactly what Taro's doing in here.
 */
function hydrate(node) {
  var _data;
  var _a;
  if (!componentsAlias) {
    // 初始化 componentsAlias
    componentsAlias = getComponentsAlias();
  }
  if (!SPECIAL_NODES) {
    // 初始化 SPECIAL_NODES
    SPECIAL_NODES = _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('getSpecialNodes');
  }
  var nodeName = node.nodeName;
  if (isText(node)) {
    var _ref;
    return _ref = {}, (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, "v" /* Shortcuts.Text */, node.nodeValue), (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, "nn" /* Shortcuts.NodeName */, ((_a = componentsAlias[nodeName]) === null || _a === void 0 ? void 0 : _a._num) || '8'), _ref;
  }
  var data = (_data = {}, (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_data, "nn" /* Shortcuts.NodeName */, nodeName), (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_data, "sid", node.sid), _data);
  if (node.uid !== node.sid) {
    data.uid = node.uid;
  }
  if (!node.isAnyEventBinded() && SPECIAL_NODES.indexOf(nodeName) > -1) {
    data["nn" /* Shortcuts.NodeName */] = "static-".concat(nodeName);
    if (nodeName === VIEW && !isHasExtractProp(node)) {
      data["nn" /* Shortcuts.NodeName */] = PURE_VIEW;
    }
  }
  var props = node.props;
  for (var prop in props) {
    var propInCamelCase = (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.toCamelCase)(prop);
    if (!prop.startsWith('data-') &&
    // 在 node.dataset 的数据
    prop !== CLASS && prop !== STYLE && prop !== ID && propInCamelCase !== CATCHMOVE) {
      data[propInCamelCase] = props[prop];
    }
    if (nodeName === VIEW && propInCamelCase === CATCHMOVE && props[prop] !== false) {
      data["nn" /* Shortcuts.NodeName */] = CATCH_VIEW;
    }
  }
  var childNodes = node.childNodes;
  // 过滤 comment 节点
  childNodes = childNodes.filter(function (node) {
    return !isComment(node);
  });
  if (childNodes.length > 0) {
    data["cn" /* Shortcuts.Childnodes */] = childNodes.map(hydrate);
  } else {
    data["cn" /* Shortcuts.Childnodes */] = [];
  }
  if (node.className !== '') {
    data["cl" /* Shortcuts.Class */] = node.className;
  }
  var cssText = node.cssText;
  if (cssText !== '' && nodeName !== 'swiper-item') {
    data["st" /* Shortcuts.Style */] = cssText;
  }
  _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('modifyHydrateData', data);
  var nn = data["nn" /* Shortcuts.NodeName */];
  var componentAlias = componentsAlias[nn];
  if (componentAlias) {
    data["nn" /* Shortcuts.NodeName */] = componentAlias._num;
    for (var _prop in data) {
      if (_prop in componentAlias) {
        data[componentAlias[_prop]] = data[_prop];
        delete data[_prop];
      }
    }
  }
  return data;
}
var TaroEventTarget = /*#__PURE__*/function () {
  function TaroEventTarget() {
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TaroEventTarget);
    this.__handlers = {};
  }
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(TaroEventTarget, [{
    key: "addEventListener",
    value: function addEventListener(type, handler, options) {
      type = type.toLowerCase();
      _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('onAddEvent', type, handler, options, this);
      if (type === 'regionchange') {
        // map 组件的 regionchange 事件非常特殊，详情：https://github.com/NervJS/taro/issues/5766
        this.addEventListener('begin', handler, options);
        this.addEventListener('end', handler, options);
        return;
      }
      var isCapture = Boolean(options);
      var isOnce = false;
      if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(options)) {
        isCapture = Boolean(options.capture);
        isOnce = Boolean(options.once);
      }
      if (isOnce) {
        var wrapper = function wrapper() {
          handler.apply(this, arguments); // this 指向 Element
          this.removeEventListener(type, wrapper);
        };
        this.addEventListener(type, wrapper, Object.assign(Object.assign({}, options), {
          once: false
        }));
        return;
      }
       true && (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.warn)(isCapture, 'Taro 暂未实现 event 的 capture 特性。');
      // 某些框架，如 PReact 有委托的机制，handler 始终是同一个函数
      // 这会导致多层停止冒泡失败：view -> view(handler.stop = false) -> view(handler.stop = true)
      // 这样解决：view -> view(handlerA.stop = false) -> view(handlerB.stop = false)
      // 因此每次绑定事件都新建一个函数，如果带来了性能问题，可以把这段逻辑抽取到 PReact 插件中。
      var oldHandler = handler;
      handler = function handler() {
        return oldHandler.apply(this, arguments); // this 指向 Element
      };

      handler.oldHandler = oldHandler;
      var handlers = this.__handlers[type];
      if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(handlers)) {
        handlers.push(handler);
      } else {
        this.__handlers[type] = [handler];
      }
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, handler) {
      type = type.toLowerCase();
      if (type === 'regionchange') {
        // map 组件的 regionchange 事件非常特殊，详情：https://github.com/NervJS/taro/issues/5766
        this.removeEventListener('begin', handler);
        this.removeEventListener('end', handler);
        return;
      }
      if (!handler) {
        return;
      }
      var handlers = this.__handlers[type];
      if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(handlers)) {
        return;
      }
      var index = handlers.findIndex(function (item) {
        if (item === handler || item.oldHandler === handler) return true;
      });
       true && (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.warn)(index === -1, "\u4E8B\u4EF6: '".concat(type, "' \u6CA1\u6709\u6CE8\u518C\u5728 DOM \u4E2D\uFF0C\u56E0\u6B64\u4E0D\u4F1A\u88AB\u79FB\u9664\u3002"));
      handlers.splice(index, 1);
    }
  }, {
    key: "isAnyEventBinded",
    value: function isAnyEventBinded() {
      var handlers = this.__handlers;
      var isAnyEventBinded = Object.keys(handlers).find(function (key) {
        return handlers[key].length;
      });
      return Boolean(isAnyEventBinded);
    }
  }]);
  return TaroEventTarget;
}();
var CHILDNODES = "cn" /* Shortcuts.Childnodes */;
var nodeId = incrementId();
var TaroNode = /*#__PURE__*/function (_TaroEventTarget) {
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__["default"])(TaroNode, _TaroEventTarget);
  var _super2 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__["default"])(TaroNode);
  function TaroNode() {
    var _this3;
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TaroNode);
    _this3 = _super2.call(this);
    _this3.parentNode = null;
    _this3.childNodes = [];
    _this3.hydrate = function (node) {
      return function () {
        return hydrate(node);
      };
    };
    _this3.uid = '_' + nodeId(); // dom 节点 id，开发者可修改
    _this3.sid = _this3.uid; // dom 节点全局唯一 id，不可被修改
    eventSource.set(_this3.sid, (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this3));
    return _this3;
  }
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(TaroNode, [{
    key: "updateChildNodes",
    value: function updateChildNodes(isClean) {
      var _this4 = this;
      var cleanChildNodes = function cleanChildNodes() {
        return [];
      };
      var rerenderChildNodes = function rerenderChildNodes() {
        var childNodes = _this4.childNodes.filter(function (node) {
          return !isComment(node);
        });
        return childNodes.map(hydrate);
      };
      this.enqueueUpdate({
        path: "".concat(this._path, ".").concat(CHILDNODES),
        value: isClean ? cleanChildNodes : rerenderChildNodes
      });
    }
  }, {
    key: "updateSingleChild",
    value: function updateSingleChild(index) {
      var _this5 = this;
      this.childNodes.forEach(function (child, childIndex) {
        if (isComment(child)) return;
        if (index && childIndex < index) return;
        _this5.enqueueUpdate({
          path: child._path,
          value: _this5.hydrate(child)
        });
      });
    }
  }, {
    key: "_root",
    get: function get() {
      var _a;
      return ((_a = this.parentNode) === null || _a === void 0 ? void 0 : _a._root) || null;
    }
  }, {
    key: "findIndex",
    value: function findIndex(refChild) {
      var index = this.childNodes.indexOf(refChild);
      (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.ensure)(index !== -1, 'The node to be replaced is not a child of this node.');
      return index;
    }
  }, {
    key: "_path",
    get: function get() {
      var parentNode = this.parentNode;
      if (parentNode) {
        // 计算路径时，先过滤掉 comment 节点
        var list = parentNode.childNodes.filter(function (node) {
          return !isComment(node);
        });
        var indexOfNode = list.indexOf(this);
        var index = _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('getPathIndex', indexOfNode);
        return "".concat(parentNode._path, ".").concat(CHILDNODES, ".").concat(index);
      }
      return '';
    }
  }, {
    key: "nextSibling",
    get: function get() {
      var parentNode = this.parentNode;
      return (parentNode === null || parentNode === void 0 ? void 0 : parentNode.childNodes[parentNode.findIndex(this) + 1]) || null;
    }
  }, {
    key: "previousSibling",
    get: function get() {
      var parentNode = this.parentNode;
      return (parentNode === null || parentNode === void 0 ? void 0 : parentNode.childNodes[parentNode.findIndex(this) - 1]) || null;
    }
  }, {
    key: "parentElement",
    get: function get() {
      var parentNode = this.parentNode;
      if ((parentNode === null || parentNode === void 0 ? void 0 : parentNode.nodeType) === 1 /* NodeType.ELEMENT_NODE */) {
        return parentNode;
      }
      return null;
    }
  }, {
    key: "firstChild",
    get: function get() {
      return this.childNodes[0] || null;
    }
  }, {
    key: "lastChild",
    get: function get() {
      var childNodes = this.childNodes;
      return childNodes[childNodes.length - 1] || null;
    }
    /**
     * @textContent 目前只能置空子元素
     * @TODO 等待完整 innerHTML 实现
     */
    // eslint-disable-next-line accessor-pairs
  }, {
    key: "textContent",
    set: function set(text) {
      var removedNodes = this.childNodes.slice();
      var addedNodes = [];
      // Handle old children' data structure & ref
      while (this.firstChild) {
        this.removeChild(this.firstChild, {
          doUpdate: false
        });
      }
      if (text === '') {
        this.updateChildNodes(true);
      } else {
        var newText = env.document.createTextNode(text);
        addedNodes.push(newText);
        this.appendChild(newText);
        this.updateChildNodes();
      }
      // @Todo: appendChild 会多触发一次
      MutationObserver.record({
        type: "childList" /* MutationRecordType.CHILD_LIST */,
        target: this,
        removedNodes: removedNodes,
        addedNodes: addedNodes
      });
    }
    /**
     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/insertBefore
     * @scenario
     * [A,B,C]
     *   1. insert D before C, D has no parent
     *   2. insert D before C, D has the same parent of C
     *   3. insert D before C, D has the different parent of C
     */
  }, {
    key: "insertBefore",
    value: function insertBefore(newChild, refChild, isReplace) {
      var _this6 = this;
      if (newChild.nodeName === DOCUMENT_FRAGMENT) {
        newChild.childNodes.reduceRight(function (previousValue, currentValue) {
          _this6.insertBefore(currentValue, previousValue);
          return currentValue;
        }, refChild);
        return newChild;
      }
      // Parent release newChild
      //   - cleanRef: false (No need to clean eventSource, because newChild is about to be inserted)
      //   - update: true (Need to update parent.childNodes, because parent.childNodes is reordered)
      newChild.remove({
        cleanRef: false
      });
      var index = 0;
      // Data structure
      newChild.parentNode = this;
      if (refChild) {
        // insertBefore & replaceChild
        index = this.findIndex(refChild);
        this.childNodes.splice(index, 0, newChild);
      } else {
        // appendChild
        this.childNodes.push(newChild);
      }
      var childNodesLength = this.childNodes.length;
      // Serialization
      if (this._root) {
        if (!refChild) {
          // appendChild
          var isOnlyChild = childNodesLength === 1;
          if (isOnlyChild) {
            this.updateChildNodes();
          } else {
            this.enqueueUpdate({
              path: newChild._path,
              value: this.hydrate(newChild)
            });
          }
        } else if (isReplace) {
          // replaceChild
          this.enqueueUpdate({
            path: newChild._path,
            value: this.hydrate(newChild)
          });
        } else {
          // insertBefore 有两种更新模式
          // 比方说有 A B C 三个节点，现在要在 C 前插入 D
          // 1. 插入 D，然后更新整个父节点的 childNodes 数组
          // setData({ cn: [A, B, D, C] })
          // 2. 插入 D，然后更新 D 以及 D 之后每个节点的数据
          // setData ({
          //   cn.[2]: D,
          //   cn.[3]: C,
          // })
          // 由于微信解析 ’cn.[2]‘ 这些路径的时候也需要消耗时间，
          // 所以根据 insertBefore 插入的位置来做不同的处理
          var mark = childNodesLength * 2 / 3;
          if (mark > index) {
            // 如果 insertBefore 的位置在 childNodes 的 2/3 前，则为了避免解析路径消耗过多的时间，采用第一种方式
            this.updateChildNodes();
          } else {
            // 如果 insertBefore 的位置在 childNodes 的 2/3 之后，则采用第二种方式，避免 childNodes 的全量更新
            this.updateSingleChild(index);
          }
        }
      }
      MutationObserver.record({
        type: "childList" /* MutationRecordType.CHILD_LIST */,
        target: this,
        addedNodes: [newChild],
        removedNodes: isReplace ? [refChild] /** replaceChild */ : [],
        nextSibling: isReplace ? refChild.nextSibling /** replaceChild */ : refChild || null,
        previousSibling: newChild.previousSibling
      });
      return newChild;
    }
    /**
     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/appendChild
     * @scenario
     * [A,B,C]
     *   1. append C, C has no parent
     *   2. append C, C has the same parent of B
     *   3. append C, C has the different parent of B
     */
  }, {
    key: "appendChild",
    value: function appendChild(newChild) {
      return this.insertBefore(newChild);
    }
    /**
     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/replaceChild
     * @scenario
     * [A,B,C]
     *   1. replace B with C, C has no parent
     *   2. replace B with C, C has no parent, C has the same parent of B
     *   3. replace B with C, C has no parent, C has the different parent of B
     */
  }, {
    key: "replaceChild",
    value: function replaceChild(newChild, oldChild) {
      if (oldChild.parentNode !== this) return;
      // Insert the newChild
      this.insertBefore(newChild, oldChild, true);
      // Destroy the oldChild
      //   - cleanRef: true (Need to clean eventSource, because the oldChild was detached from the DOM tree)
      //   - update: false (No need to update parent.childNodes, because replace will not cause the parent.childNodes being reordered)
      oldChild.remove({
        doUpdate: false
      });
      return oldChild;
    }
    /**
     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/removeChild
     * @scenario
     * [A,B,C]
     *   1. remove A or B
     *   2. remove C
     */
  }, {
    key: "removeChild",
    value: function removeChild(child) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cleanRef = options.cleanRef,
        doUpdate = options.doUpdate;
      if (cleanRef !== false && doUpdate !== false) {
        // appendChild/replaceChild/insertBefore 不应该触发
        // @Todo: 但其实如果 newChild 的父节点是另一颗子树的节点，应该是要触发的
        MutationObserver.record({
          type: "childList" /* MutationRecordType.CHILD_LIST */,
          target: this,
          removedNodes: [child],
          nextSibling: child.nextSibling,
          previousSibling: child.previousSibling
        });
      }
      // Data Structure
      var index = this.findIndex(child);
      this.childNodes.splice(index, 1);
      child.parentNode = null;
      // Set eventSource
      if (cleanRef !== false) {
        eventSource.removeNodeTree(child);
      }
      // Serialization
      if (this._root && doUpdate !== false) {
        this.updateChildNodes();
      }
      return child;
    }
  }, {
    key: "remove",
    value: function remove(options) {
      var _a;
      (_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this, options);
    }
  }, {
    key: "hasChildNodes",
    value: function hasChildNodes() {
      return this.childNodes.length > 0;
    }
  }, {
    key: "enqueueUpdate",
    value: function enqueueUpdate(payload) {
      var _a;
      (_a = this._root) === null || _a === void 0 ? void 0 : _a.enqueueUpdate(payload);
    }
  }, {
    key: "ownerDocument",
    get: function get() {
      return env.document;
    }
  }], [{
    key: "extend",
    value: function extend(methodName, options) {
      _extend(TaroNode, methodName, options);
    }
  }]);
  return TaroNode;
}(TaroEventTarget);
/*
 *
 * https://www.w3.org/Style/CSS/all-properties.en.html
 */
var WEBKIT = 'webkit';
var styleProperties = ['all', 'appearance', 'blockOverflow', 'blockSize', 'bottom', 'clear', 'contain', 'content', 'continue', 'cursor', 'direction', 'display', 'filter', 'float', 'gap', 'height', 'inset', 'isolation', 'left', 'letterSpacing', 'lightingColor', 'markerSide', 'mixBlendMode', 'opacity', 'order', 'position', 'quotes', 'resize', 'right', 'rowGap', 'tabSize', 'tableLayout', 'top', 'userSelect', 'verticalAlign', 'visibility', 'voiceFamily', 'volume', 'whiteSpace', 'widows', 'width', 'zIndex', 'pointerEvents', 'aspectRatio'
/** 非常用 style */
// 'azimuth',
// 'backfaceVisibility',
// 'baselineShift',
// 'captionSide',
// 'chains',
// 'dominantBaseline',
// 'elevation',
// 'emptyCells',
// 'forcedColorAdjust',
// 'glyphOrientationVertical',
// 'hangingPunctuation',
// 'hyphenateCharacter',
// 'hyphens',
// 'imageOrientation',
// 'imageResolution',
// 'orphans',
// 'playDuring',
// 'pointerEvents',
// 'regionFragment',
// 'richness',
// 'running',
// 'scrollBehavior',
// 'speechRate',
// 'stress',
// 'stringSet',
// 'unicodeBidi',
// 'willChange',
// 'writingMode',
];
// 减少文件体积
function combine(prefix, list, excludeSelf) {
  !excludeSelf && styleProperties.push(prefix);
  list.forEach(function (item) {
    styleProperties.push(prefix + item);
    if (prefix === WEBKIT) {
      styleProperties.push('Webkit' + item);
    }
  });
}
var color = 'Color';
var style = 'Style';
var width = 'Width';
var image = 'Image';
var size = 'Size';
var color_style_width = [color, style, width];
var fitlength_fitwidth_image = ['FitLength', 'FitWidth', image];
var fitlength_fitwidth_image_radius = [].concat(fitlength_fitwidth_image, ['Radius']);
var color_style_width_fitlength_fitwidth_image = [].concat(color_style_width, fitlength_fitwidth_image);
var endRadius_startRadius = ['EndRadius', 'StartRadius'];
var bottom_left_right_top = ['Bottom', 'Left', 'Right', 'Top'];
var end_start = ['End', 'Start'];
var content_items_self = ['Content', 'Items', 'Self'];
var blockSize_height_inlineSize_width = ['BlockSize', 'Height', 'InlineSize', width];
var after_before = ['After', 'Before'];
combine('borderBlock', color_style_width);
combine('borderBlockEnd', color_style_width);
combine('borderBlockStart', color_style_width);
combine('outline', [].concat(color_style_width, ['Offset']));
combine('border', [].concat(color_style_width, ['Boundary', 'Break', 'Collapse', 'Radius', 'Spacing']));
combine('borderFit', ['Length', width]);
combine('borderInline', color_style_width);
combine('borderInlineEnd', color_style_width);
combine('borderInlineStart', color_style_width);
combine('borderLeft', color_style_width_fitlength_fitwidth_image);
combine('borderRight', color_style_width_fitlength_fitwidth_image);
combine('borderTop', color_style_width_fitlength_fitwidth_image);
combine('borderBottom', color_style_width_fitlength_fitwidth_image);
combine('textDecoration', [color, style, 'Line']);
combine('textEmphasis', [color, style, 'Position']);
combine('scrollMargin', bottom_left_right_top);
combine('scrollPadding', bottom_left_right_top);
combine('padding', bottom_left_right_top);
combine('margin', [].concat(bottom_left_right_top, ['Trim']));
combine('scrollMarginBlock', end_start);
combine('scrollMarginInline', end_start);
combine('scrollPaddingBlock', end_start);
combine('scrollPaddingInline', end_start);
combine('gridColumn', end_start);
combine('gridRow', end_start);
combine('insetBlock', end_start);
combine('insetInline', end_start);
combine('marginBlock', end_start);
combine('marginInline', end_start);
combine('paddingBlock', end_start);
combine('paddingInline', end_start);
combine('pause', after_before);
combine('cue', after_before);
combine('mask', ['Clip', 'Composite', image, 'Mode', 'Origin', 'Position', 'Repeat', size, 'Type']);
combine('borderImage', ['Outset', 'Repeat', 'Slice', 'Source', 'Transform', width]);
combine('maskBorder', ['Mode', 'Outset', 'Repeat', 'Slice', 'Source', width]);
combine('font', ['Family', 'FeatureSettings', 'Kerning', 'LanguageOverride', 'MaxSize', 'MinSize', 'OpticalSizing', 'Palette', size, 'SizeAdjust', 'Stretch', style, 'Weight', 'VariationSettings']);
combine('transform', ['Box', 'Origin', style]);
combine('background', [color, image, 'Attachment', 'BlendMode', 'Clip', 'Origin', 'Position', 'Repeat', size]);
combine('listStyle', [image, 'Position', 'Type']);
combine('scrollSnap', ['Align', 'Stop', 'Type']);
combine('grid', ['Area', 'AutoColumns', 'AutoFlow', 'AutoRows']);
combine('gridTemplate', ['Areas', 'Columns', 'Rows']);
combine('overflow', ['Block', 'Inline', 'Wrap', 'X', 'Y']);
combine('transition', ['Delay', 'Duration', 'Property', 'TimingFunction']);
combine('color', ['Adjust', 'InterpolationFilters', 'Scheme']);
combine('textAlign', ['All', 'Last']);
combine('page', ['BreakAfter', 'BreakBefore', 'BreakInside']);
combine('animation', ['Delay', 'Direction', 'Duration', 'FillMode', 'IterationCount', 'Name', 'PlayState', 'TimingFunction']);
combine('flex', ['Basis', 'Direction', 'Flow', 'Grow', 'Shrink', 'Wrap']);
combine('offset', [].concat(after_before, end_start, ['Anchor', 'Distance', 'Path', 'Position', 'Rotate']));
combine('perspective', ['Origin']);
combine('clip', ['Path', 'Rule']);
combine('flow', ['From', 'Into']);
combine('align', ['Content', 'Items', 'Self'], true);
combine('alignment', ['Adjust', 'Baseline'], true);
combine('borderStart', endRadius_startRadius, true);
combine('borderEnd', endRadius_startRadius, true);
combine('borderCorner', ['Fit', image, 'ImageTransform'], true);
combine('borderTopLeft', fitlength_fitwidth_image_radius, true);
combine('borderTopRight', fitlength_fitwidth_image_radius, true);
combine('borderBottomLeft', fitlength_fitwidth_image_radius, true);
combine('borderBottomRight', fitlength_fitwidth_image_radius, true);
combine('column', ['s', 'Count', 'Fill', 'Gap', 'Rule', 'RuleColor', 'RuleStyle', 'RuleWidth', 'Span', width], true);
combine('break', [].concat(after_before, ['Inside']), true);
combine('wrap', [].concat(after_before, ['Flow', 'Inside', 'Through']), true);
combine('justify', content_items_self, true);
combine('place', content_items_self, true);
combine('max', [].concat(blockSize_height_inlineSize_width, ['Lines']), true);
combine('min', blockSize_height_inlineSize_width, true);
combine('line', ['Break', 'Clamp', 'Grid', 'Height', 'Padding', 'Snap'], true);
combine('inline', ['BoxAlign', size, 'Sizing'], true);
combine('text', ['CombineUpright', 'GroupAlign', 'Height', 'Indent', 'Justify', 'Orientation', 'Overflow', 'Shadow', 'SpaceCollapse', 'SpaceTrim', 'Spacing', 'Transform', 'UnderlinePosition', 'Wrap'], true);
combine('shape', ['ImageThreshold', 'Inside', 'Margin', 'Outside'], true);
combine('word', ['Break', 'Spacing', 'Wrap'], true);
combine('object', ['Fit', 'Position'], true);
combine('box', ['DecorationBreak', 'Shadow', 'Sizing', 'Snap'], true);
combine(WEBKIT, ['LineClamp', 'BoxOrient', 'TextFillColor', 'TextStroke', 'TextStrokeColor', 'TextStrokeWidth'], true);
function recordCss(obj) {
  MutationObserver.record({
    type: "attributes" /* MutationRecordType.ATTRIBUTES */,
    target: obj._element,
    attributeName: 'style',
    oldValue: obj.cssText
  });
}
function enqueueUpdate(obj) {
  var element = obj._element;
  if (element._root) {
    element.enqueueUpdate({
      path: "".concat(element._path, ".", "st" /* Shortcuts.Style */),
      value: obj.cssText
    });
  }
}
function setStyle(newVal, styleKey) {
   true && (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.warn)((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(newVal) && newVal.length > PROPERTY_THRESHOLD, "Style \u5C5E\u6027 ".concat(styleKey, " \u7684\u503C\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u6E32\u67D3\u6027\u80FD\uFF0C\u8003\u8651\u4F7F\u7528 CSS \u7C7B\u6216\u5176\u5B83\u65B9\u6848\u66FF\u4EE3\u3002"));
  var old = this[styleKey];
  if (old === newVal) return;
  !this._pending && recordCss(this);
  if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isNull)(newVal) || (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(newVal)) {
    this._usedStyleProp.delete(styleKey);
    delete this._value[styleKey];
  } else {
    this._usedStyleProp.add(styleKey);
    this._value[styleKey] = newVal;
  }
  !this._pending && enqueueUpdate(this);
}
function initStyle(ctor, styleProperties) {
  var properties = {};
  var _loop = function _loop() {
      var styleKey = styleProperties[i];
      if (ctor[styleKey]) return {
        v: void 0
      };
      properties[styleKey] = {
        get: function get() {
          var val = this._value[styleKey];
          return (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isNull)(val) || (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(val) ? '' : val;
        },
        set: function set(newVal) {
          setStyle.call(this, newVal, styleKey);
        }
      };
    },
    _ret;
  for (var i = 0; i < styleProperties.length; i++) {
    _ret = _loop();
    if (_ret) return _ret.v;
  }
  Object.defineProperties(ctor.prototype, properties);
}
function isCssVariable(propertyName) {
  return /^--/.test(propertyName);
}
var Style = /*#__PURE__*/function () {
  function Style(element) {
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Style);
    this._element = element;
    this._usedStyleProp = new Set();
    this._value = {};
  }
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Style, [{
    key: "setCssVariables",
    value: function setCssVariables(styleKey) {
      var _this7 = this;
      this.hasOwnProperty(styleKey) || Object.defineProperty(this, styleKey, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return _this7._value[styleKey] || '';
        },
        set: function set(newVal) {
          setStyle.call(_this7, newVal, styleKey);
        }
      });
    }
  }, {
    key: "cssText",
    get: function get() {
      var _this8 = this;
      if (!this._usedStyleProp.size) return '';
      var texts = [];
      this._usedStyleProp.forEach(function (key) {
        var val = _this8[key];
        if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isNull)(val) || (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(val)) return;
        var styleName = isCssVariable(key) ? key : (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.toDashed)(key);
        if (styleName.indexOf('webkit') === 0 || styleName.indexOf('Webkit') === 0) {
          styleName = "-".concat(styleName);
        }
        texts.push("".concat(styleName, ": ").concat(val, ";"));
      });
      return texts.join(' ');
    },
    set: function set(str) {
      var _this9 = this;
      this._pending = true;
      recordCss(this);
      this._usedStyleProp.forEach(function (prop) {
        _this9.removeProperty(prop);
      });
      if (str === '' || (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(str) || (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isNull)(str)) {
        this._pending = false;
        enqueueUpdate(this);
        return;
      }
      var rules = str.split(';');
      for (var i = 0; i < rules.length; i++) {
        var rule = rules[i].trim();
        if (rule === '') {
          continue;
        }
        // 可能存在 'background: url(http:x/y/z)' 的情况
        var _rule$split = rule.split(':'),
          _rule$split2 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_toArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_rule$split),
          propName = _rule$split2[0],
          valList = _rule$split2.slice(1);
        var val = valList.join(':');
        if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(val)) {
          continue;
        }
        this.setProperty(propName.trim(), val.trim());
      }
      this._pending = false;
      enqueueUpdate(this);
    }
  }, {
    key: "setProperty",
    value: function setProperty(propertyName, value) {
      if (propertyName[0] === '-') {
        // 支持 webkit 属性或 css 变量
        this.setCssVariables(propertyName);
      } else {
        propertyName = (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.toCamelCase)(propertyName);
      }
      if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isNull)(value) || (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(value)) {
        this.removeProperty(propertyName);
      } else {
        this[propertyName] = value;
      }
    }
  }, {
    key: "removeProperty",
    value: function removeProperty(propertyName) {
      propertyName = (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.toCamelCase)(propertyName);
      if (!this._usedStyleProp.has(propertyName)) {
        return '';
      }
      var value = this[propertyName];
      this[propertyName] = undefined;
      return value;
    }
  }, {
    key: "getPropertyValue",
    value: function getPropertyValue(propertyName) {
      propertyName = (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.toCamelCase)(propertyName);
      var value = this[propertyName];
      if (!value) {
        return '';
      }
      return value;
    }
  }]);
  return Style;
}();
initStyle(Style, styleProperties);
_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.tap('injectNewStyleProperties', function (newStyleProperties) {
  if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(newStyleProperties)) {
    initStyle(Style, newStyleProperties);
  } else {
    if (typeof newStyleProperties !== 'string') return;
    initStyle(Style, [newStyleProperties]);
  }
});
function returnTrue() {
  return true;
}
function treeToArray(root, predict) {
  var array = [];
  var filter = predict !== null && predict !== void 0 ? predict : returnTrue;
  var object = root;
  while (object) {
    if (object.nodeType === 1 /* NodeType.ELEMENT_NODE */ && filter(object)) {
      array.push(object);
    }
    object = following(object, root);
  }
  return array;
}
function following(el, root) {
  var firstChild = el.firstChild;
  var isElmentTypeValid = el.nodeType === 1 /* NodeType.ELEMENT_NODE */ || el.nodeType === 9 /* NodeType.DOCUMENT_NODE */;
  // 如果当前 el 不是 element 或 document 元素，则可以直接不递归他的子元素了
  if (firstChild && isElmentTypeValid) {
    return firstChild;
  }
  var current = el;
  do {
    if (current === root) {
      return null;
    }
    var nextSibling = current.nextSibling;
    if (nextSibling) {
      return nextSibling;
    }
    current = current.parentElement;
  } while (current);
  return null;
}
var TaroElement = /*#__PURE__*/function (_TaroNode) {
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__["default"])(TaroElement, _TaroNode);
  var _super3 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__["default"])(TaroElement);
  function TaroElement() {
    var _this10;
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TaroElement);
    _this10 = _super3.call(this);
    _this10.props = {};
    _this10.dataset = _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.EMPTY_OBJ;
    _this10.nodeType = 1 /* NodeType.ELEMENT_NODE */;
    _this10.style = new Style((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this10));
    _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('patchElement', (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this10));
    return _this10;
  }
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(TaroElement, [{
    key: "_stopPropagation",
    value: function _stopPropagation(event) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      var target = this;
      // eslint-disable-next-line no-cond-assign
      while (target = target.parentNode) {
        var listeners = target.__handlers[event.type];
        if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(listeners)) {
          continue;
        }
        for (var i = listeners.length; i--;) {
          var l = listeners[i];
          l._stop = true;
        }
      }
    }
  }, {
    key: "id",
    get: function get() {
      return this.getAttribute(ID);
    },
    set: function set(val) {
      this.setAttribute(ID, val);
    }
  }, {
    key: "className",
    get: function get() {
      return this.getAttribute(CLASS) || '';
    },
    set: function set(val) {
      this.setAttribute(CLASS, val);
    }
  }, {
    key: "cssText",
    get: function get() {
      return this.getAttribute(STYLE) || '';
    }
  }, {
    key: "classList",
    get: function get() {
      return new ClassList(this.className, this);
    }
  }, {
    key: "children",
    get: function get() {
      return this.childNodes.filter(isElement);
    }
  }, {
    key: "attributes",
    get: function get() {
      var props = this.props;
      var propKeys = Object.keys(props);
      var style = this.style.cssText;
      var attrs = propKeys.map(function (key) {
        return {
          name: key,
          value: props[key]
        };
      });
      return attrs.concat(style ? {
        name: STYLE,
        value: style
      } : []);
    }
  }, {
    key: "textContent",
    get: function get() {
      var text = '';
      var childNodes = this.childNodes;
      for (var i = 0; i < childNodes.length; i++) {
        text += childNodes[i].textContent;
      }
      return text;
    },
    set: function set(text) {
      (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_set_js__WEBPACK_IMPORTED_MODULE_10__["default"])((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_11__["default"])(TaroElement.prototype), "textContent", text, this, true);
    }
  }, {
    key: "hasAttribute",
    value: function hasAttribute(qualifiedName) {
      return !(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(this.props[qualifiedName]);
    }
  }, {
    key: "hasAttributes",
    value: function hasAttributes() {
      return this.attributes.length > 0;
    }
  }, {
    key: "focus",
    get: function get() {
      return function () {
        this.setAttribute(FOCUS, true);
      };
    }
    // 兼容 Vue3，详情请见：https://github.com/NervJS/taro/issues/10579
    ,
    set: function set(value) {
      this.setAttribute(FOCUS, value);
    }
  }, {
    key: "blur",
    value: function blur() {
      this.setAttribute(FOCUS, false);
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(qualifiedName, value) {
       true && (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.warn)((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(value) && value.length > PROPERTY_THRESHOLD, "\u5143\u7D20 ".concat(this.nodeName, " \u7684 ").concat(qualifiedName, " \u5C5E\u6027\u503C\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u6E32\u67D3\u6027\u80FD\u3002\u8003\u8651\u964D\u4F4E\u56FE\u7247\u8F6C\u4E3A base64 \u7684\u9608\u503C\u6216\u5728 CSS \u4E2D\u4F7F\u7528 base64\u3002"));
      var isPureView = this.nodeName === VIEW && !isHasExtractProp(this) && !this.isAnyEventBinded();
      if (qualifiedName !== STYLE) {
        MutationObserver.record({
          target: this,
          type: "attributes" /* MutationRecordType.ATTRIBUTES */,
          attributeName: qualifiedName,
          oldValue: this.getAttribute(qualifiedName)
        });
      }
      switch (qualifiedName) {
        case STYLE:
          this.style.cssText = value;
          break;
        case ID:
          if (this.uid !== this.sid) {
            // eventSource[sid] 永远保留，直到组件卸载
            // eventSource[uid] 可变
            eventSource.delete(this.uid);
          }
          value = String(value);
          this.props[qualifiedName] = this.uid = value;
          eventSource.set(value, this);
          break;
        default:
          this.props[qualifiedName] = value;
          if (qualifiedName.startsWith('data-')) {
            if (this.dataset === _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.EMPTY_OBJ) {
              this.dataset = Object.create(null);
            }
            this.dataset[(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.toCamelCase)(qualifiedName.replace(/^data-/, ''))] = value;
          }
          break;
      }
      // Serialization
      if (!this._root) return;
      var componentsAlias = getComponentsAlias();
      var _alias = componentsAlias[this.nodeName];
      var viewAlias = componentsAlias[VIEW]._num;
      var staticViewAlias = componentsAlias[STATIC_VIEW]._num;
      var catchViewAlias = componentsAlias[CATCH_VIEW]._num;
      var _path = this._path;
      qualifiedName = shortcutAttr(qualifiedName);
      var qualifiedNameInCamelCase = (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.toCamelCase)(qualifiedName);
      var payload = {
        path: "".concat(_path, ".").concat(qualifiedNameInCamelCase),
        value: (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value) ? function () {
          return value;
        } : value
      };
      _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('modifySetAttrPayload', this, qualifiedName, payload, componentsAlias);
      if (_alias) {
        var qualifiedNameAlias = _alias[qualifiedNameInCamelCase] || qualifiedName;
        payload.path = "".concat(_path, ".").concat((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.toCamelCase)(qualifiedNameAlias));
      }
      this.enqueueUpdate(payload);
      if (this.nodeName === VIEW) {
        if (qualifiedNameInCamelCase === CATCHMOVE) {
          // catchMove = true: catch-view
          // catchMove = false: view or static-view
          this.enqueueUpdate({
            path: "".concat(_path, ".", "nn" /* Shortcuts.NodeName */),
            value: value ? catchViewAlias : this.isAnyEventBinded() ? viewAlias : staticViewAlias
          });
        } else if (isPureView && isHasExtractProp(this)) {
          // pure-view => static-view
          this.enqueueUpdate({
            path: "".concat(_path, ".", "nn" /* Shortcuts.NodeName */),
            value: staticViewAlias
          });
        }
      }
    }
  }, {
    key: "removeAttribute",
    value: function removeAttribute(qualifiedName) {
      var isStaticView = this.nodeName === VIEW && isHasExtractProp(this) && !this.isAnyEventBinded();
      MutationObserver.record({
        target: this,
        type: "attributes" /* MutationRecordType.ATTRIBUTES */,
        attributeName: qualifiedName,
        oldValue: this.getAttribute(qualifiedName)
      });
      if (qualifiedName === STYLE) {
        this.style.cssText = '';
      } else {
        var isInterrupt = _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('onRemoveAttribute', this, qualifiedName);
        if (isInterrupt) {
          return;
        }
        if (!this.props.hasOwnProperty(qualifiedName)) {
          return;
        }
        delete this.props[qualifiedName];
      }
      // Serialization
      if (!this._root) return;
      var componentsAlias = getComponentsAlias();
      var _alias = componentsAlias[this.nodeName];
      var viewAlias = componentsAlias[VIEW]._num;
      var staticViewAlias = componentsAlias[STATIC_VIEW]._num;
      var pureViewAlias = componentsAlias[PURE_VIEW]._num;
      var _path = this._path;
      qualifiedName = shortcutAttr(qualifiedName);
      var qualifiedNameInCamelCase = (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.toCamelCase)(qualifiedName);
      var payload = {
        path: "".concat(_path, ".").concat(qualifiedNameInCamelCase),
        value: ''
      };
      _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('modifyRmAttrPayload', this, qualifiedName, payload, componentsAlias);
      if (_alias) {
        var qualifiedNameAlias = _alias[qualifiedNameInCamelCase] || qualifiedName;
        payload.path = "".concat(_path, ".").concat((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.toCamelCase)(qualifiedNameAlias));
      }
      this.enqueueUpdate(payload);
      if (this.nodeName === VIEW) {
        if (qualifiedNameInCamelCase === CATCHMOVE) {
          // catch-view => view or static-view or pure-view
          this.enqueueUpdate({
            path: "".concat(_path, ".", "nn" /* Shortcuts.NodeName */),
            value: this.isAnyEventBinded() ? viewAlias : isHasExtractProp(this) ? staticViewAlias : pureViewAlias
          });
        } else if (isStaticView && !isHasExtractProp(this)) {
          // static-view => pure-view
          this.enqueueUpdate({
            path: "".concat(_path, ".", "nn" /* Shortcuts.NodeName */),
            value: pureViewAlias
          });
        }
      }
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(qualifiedName) {
      var attr = qualifiedName === STYLE ? this.style.cssText : this.props[qualifiedName];
      return attr !== null && attr !== void 0 ? attr : '';
    }
  }, {
    key: "getElementsByTagName",
    value: function getElementsByTagName(tagName) {
      var _this11 = this;
      return treeToArray(this, function (el) {
        return el.nodeName === tagName || tagName === '*' && _this11 !== el;
      });
    }
  }, {
    key: "getElementsByClassName",
    value: function getElementsByClassName(className) {
      var classNames = className.trim().split(/\s+/);
      return treeToArray(this, function (el) {
        var classList = el.classList;
        return classNames.every(function (c) {
          return classList.contains(c);
        });
      });
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      var cancelable = event.cancelable;
      var listeners = this.__handlers[event.type];
      if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(listeners)) {
        return false;
      }
      for (var i = listeners.length; i--;) {
        var listener = listeners[i];
        var result = void 0;
        if (listener._stop) {
          listener._stop = false;
        } else {
          _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('modifyDispatchEvent', event, this);
          result = listener.call(this, event);
        }
        if ((result === false || event._end) && cancelable) {
          event.defaultPrevented = true;
        }
        if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(result) && event.mpEvent) {
          event.mpEvent[EVENT_CALLBACK_RESULT] = result;
        }
        if (event._end && event._stop) {
          break;
        }
      }
      if (event._stop) {
        this._stopPropagation(event);
      } else {
        event._stop = true;
      }
      return listeners != null;
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(type, handler, options) {
      var name = this.nodeName;
      var SPECIAL_NODES = _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('getSpecialNodes');
      var sideEffect = true;
      if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(options) && options.sideEffect === false) {
        sideEffect = false;
        delete options.sideEffect;
      }
      if (sideEffect !== false && !this.isAnyEventBinded() && SPECIAL_NODES.indexOf(name) > -1) {
        var _componentsAlias = getComponentsAlias();
        var alias = _componentsAlias[name]._num;
        this.enqueueUpdate({
          path: "".concat(this._path, ".", "nn" /* Shortcuts.NodeName */),
          value: alias
        });
      }
      (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_12__["default"])((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_11__["default"])(TaroElement.prototype), "addEventListener", this).call(this, type, handler, options);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, handler) {
      var sideEffect = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_12__["default"])((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_11__["default"])(TaroElement.prototype), "removeEventListener", this).call(this, type, handler);
      var name = this.nodeName;
      var SPECIAL_NODES = _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('getSpecialNodes');
      if (sideEffect !== false && !this.isAnyEventBinded() && SPECIAL_NODES.indexOf(name) > -1) {
        var _componentsAlias2 = getComponentsAlias();
        var value = isHasExtractProp(this) ? "static-".concat(name) : "pure-".concat(name);
        var valueAlias = _componentsAlias2[value]._num;
        this.enqueueUpdate({
          path: "".concat(this._path, ".", "nn" /* Shortcuts.NodeName */),
          value: valueAlias
        });
      }
    }
  }], [{
    key: "extend",
    value: function extend(methodName, options) {
      _extend(TaroElement, methodName, options);
    }
  }]);
  return TaroElement;
}(TaroNode);
var options = {
  prerender: true,
  debug: false
};
function initPosition() {
  return {
    index: 0,
    column: 0,
    line: 0
  };
}
function feedPosition(position, str, len) {
  var start = position.index;
  var end = position.index = start + len;
  for (var i = start; i < end; i++) {
    var _char = str.charAt(i);
    if (_char === '\n') {
      position.line++;
      position.column = 0;
    } else {
      position.column++;
    }
  }
}
function jumpPosition(position, str, end) {
  var len = end - position.index;
  return feedPosition(position, str, len);
}
function copyPosition(position) {
  return {
    index: position.index,
    line: position.line,
    column: position.column
  };
}
var whitespace = /\s/;
function isWhitespaceChar(_char2) {
  return whitespace.test(_char2);
}
var equalSign = /=/;
function isEqualSignChar(_char3) {
  return equalSign.test(_char3);
}
function shouldBeIgnore(tagName) {
  var name = tagName.toLowerCase();
  if (options.html.skipElements.has(name)) {
    return true;
  }
  return false;
}
var alphanumeric = /[A-Za-z0-9]/;
function findTextEnd(str, index) {
  while (true) {
    var textEnd = str.indexOf('<', index);
    if (textEnd === -1) {
      return textEnd;
    }
    var _char4 = str.charAt(textEnd + 1);
    if (_char4 === '/' || _char4 === '!' || alphanumeric.test(_char4)) {
      return textEnd;
    }
    index = textEnd + 1;
  }
}
function isWordEnd(cursor, wordBegin, html) {
  if (!isWhitespaceChar(html.charAt(cursor))) return false;
  var len = html.length;
  // backwrad
  for (var i = cursor - 1; i > wordBegin; i--) {
    var _char5 = html.charAt(i);
    if (!isWhitespaceChar(_char5)) {
      if (isEqualSignChar(_char5)) return false;
      break;
    }
  }
  // forward
  for (var _i2 = cursor + 1; _i2 < len; _i2++) {
    var _char6 = html.charAt(_i2);
    if (!isWhitespaceChar(_char6)) {
      if (isEqualSignChar(_char6)) return false;
      return true;
    }
  }
}
var Scaner = /*#__PURE__*/function () {
  function Scaner(html) {
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Scaner);
    this.tokens = [];
    this.position = initPosition();
    this.html = html;
  }
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Scaner, [{
    key: "scan",
    value: function scan() {
      var html = this.html,
        position = this.position;
      var len = html.length;
      while (position.index < len) {
        var start = position.index;
        this.scanText();
        if (position.index === start) {
          var _isComment = html.startsWith('!--', start + 1);
          if (_isComment) {
            this.scanComment();
          } else {
            var tagName = this.scanTag();
            if (shouldBeIgnore(tagName)) {
              this.scanSkipTag(tagName);
            }
          }
        }
      }
      return this.tokens;
    }
  }, {
    key: "scanText",
    value: function scanText() {
      var type = 'text';
      var html = this.html,
        position = this.position;
      var textEnd = findTextEnd(html, position.index);
      if (textEnd === position.index) {
        return;
      }
      if (textEnd === -1) {
        textEnd = html.length;
      }
      var start = copyPosition(position);
      var content = html.slice(position.index, textEnd);
      jumpPosition(position, html, textEnd);
      var end = copyPosition(position);
      this.tokens.push({
        type: type,
        content: content,
        position: {
          start: start,
          end: end
        }
      });
    }
  }, {
    key: "scanComment",
    value: function scanComment() {
      var type = 'comment';
      var html = this.html,
        position = this.position;
      var start = copyPosition(position);
      feedPosition(position, html, 4); // "<!--".length
      var contentEnd = html.indexOf('-->', position.index);
      var commentEnd = contentEnd + 3; // "-->".length
      if (contentEnd === -1) {
        contentEnd = commentEnd = html.length;
      }
      var content = html.slice(position.index, contentEnd);
      jumpPosition(position, html, commentEnd);
      this.tokens.push({
        type: type,
        content: content,
        position: {
          start: start,
          end: copyPosition(position)
        }
      });
    }
  }, {
    key: "scanTag",
    value: function scanTag() {
      this.scanTagStart();
      var tagName = this.scanTagName();
      this.scanAttrs();
      this.scanTagEnd();
      return tagName;
    }
  }, {
    key: "scanTagStart",
    value: function scanTagStart() {
      var type = 'tag-start';
      var html = this.html,
        position = this.position;
      var secondChar = html.charAt(position.index + 1);
      var close = secondChar === '/';
      var start = copyPosition(position);
      feedPosition(position, html, close ? 2 : 1);
      this.tokens.push({
        type: type,
        close: close,
        position: {
          start: start
        }
      });
    }
  }, {
    key: "scanTagEnd",
    value: function scanTagEnd() {
      var type = 'tag-end';
      var html = this.html,
        position = this.position;
      var firstChar = html.charAt(position.index);
      var close = firstChar === '/';
      feedPosition(position, html, close ? 2 : 1);
      var end = copyPosition(position);
      this.tokens.push({
        type: type,
        close: close,
        position: {
          end: end
        }
      });
    }
  }, {
    key: "scanTagName",
    value: function scanTagName() {
      var type = 'tag';
      var html = this.html,
        position = this.position;
      var len = html.length;
      var start = position.index;
      while (start < len) {
        var _char7 = html.charAt(start);
        var isTagChar = !(isWhitespaceChar(_char7) || _char7 === '/' || _char7 === '>');
        if (isTagChar) break;
        start++;
      }
      var end = start + 1;
      while (end < len) {
        var _char8 = html.charAt(end);
        var _isTagChar = !(isWhitespaceChar(_char8) || _char8 === '/' || _char8 === '>');
        if (!_isTagChar) break;
        end++;
      }
      jumpPosition(position, html, end);
      var tagName = html.slice(start, end);
      this.tokens.push({
        type: type,
        content: tagName
      });
      return tagName;
    }
  }, {
    key: "scanAttrs",
    value: function scanAttrs() {
      var html = this.html,
        position = this.position,
        tokens = this.tokens;
      var cursor = position.index;
      var quote = null; // null, single-, or double-quote
      var wordBegin = cursor; // index of word start
      var words = []; // "key", "key=value", "key='value'", etc
      var len = html.length;
      while (cursor < len) {
        var _char9 = html.charAt(cursor);
        if (quote) {
          var isQuoteEnd = _char9 === quote;
          if (isQuoteEnd) {
            quote = null;
          }
          cursor++;
          continue;
        }
        var isTagEnd = _char9 === '/' || _char9 === '>';
        if (isTagEnd) {
          if (cursor !== wordBegin) {
            words.push(html.slice(wordBegin, cursor));
          }
          break;
        }
        if (isWordEnd(cursor, wordBegin, html)) {
          if (cursor !== wordBegin) {
            words.push(html.slice(wordBegin, cursor));
          }
          wordBegin = cursor + 1;
          cursor++;
          continue;
        }
        var isQuoteStart = _char9 === '\'' || _char9 === '"';
        if (isQuoteStart) {
          quote = _char9;
          cursor++;
          continue;
        }
        cursor++;
      }
      jumpPosition(position, html, cursor);
      var wLen = words.length;
      var type = 'attribute';
      for (var i = 0; i < wLen; i++) {
        var word = words[i];
        var isNotPair = word.includes('=');
        if (isNotPair) {
          var secondWord = words[i + 1];
          if (secondWord && secondWord.startsWith('=')) {
            if (secondWord.length > 1) {
              var newWord = word + secondWord;
              tokens.push({
                type: type,
                content: newWord
              });
              i += 1;
              continue;
            }
            var thirdWord = words[i + 2];
            i += 1;
            if (thirdWord) {
              var _newWord = word + '=' + thirdWord;
              tokens.push({
                type: type,
                content: _newWord
              });
              i += 1;
              continue;
            }
          }
        }
        if (word.endsWith('=')) {
          var _secondWord = words[i + 1];
          if (_secondWord && !_secondWord.includes('=')) {
            var _newWord2 = word + _secondWord;
            tokens.push({
              type: type,
              content: _newWord2
            });
            i += 1;
            continue;
          }
          var _newWord3 = word.slice(0, -1);
          tokens.push({
            type: type,
            content: _newWord3
          });
          continue;
        }
        tokens.push({
          type: type,
          content: word
        });
      }
    }
  }, {
    key: "scanSkipTag",
    value: function scanSkipTag(tagName) {
      var html = this.html,
        position = this.position;
      var safeTagName = tagName.toLowerCase();
      var len = html.length;
      while (position.index < len) {
        var nextTag = html.indexOf('</', position.index);
        if (nextTag === -1) {
          this.scanText();
          break;
        }
        jumpPosition(position, html, nextTag);
        var name = this.scanTag();
        if (safeTagName === name.toLowerCase()) {
          break;
        }
      }
    }
  }]);
  return Scaner;
}();
function unquote(str) {
  var car = str.charAt(0);
  var end = str.length - 1;
  var isQuoteStart = car === '"' || car === "'";
  if (isQuoteStart && car === str.charAt(end)) {
    return str.slice(1, end);
  }
  return str;
}
var LEFT_BRACKET = '{';
var RIGHT_BRACKET = '}';
var CLASS_SELECTOR = '.';
var ID_SELECTOR = '#';
var CHILD_COMBINATOR = '>';
var GENERAL_SIBLING_COMBINATOR = '~';
var ADJACENT_SIBLING_COMBINATOR = '+';
var StyleTagParser = /*#__PURE__*/function () {
  function StyleTagParser() {
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, StyleTagParser);
    this.styles = [];
  }
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(StyleTagParser, [{
    key: "extractStyle",
    value: function extractStyle(src) {
      var _this12 = this;
      var REG_STYLE = /<style\s?[^>]*>((.|\n|\s)+?)<\/style>/g;
      var html = src;
      // let html = src.replace(/\n/g, '')
      html = html.replace(REG_STYLE, function (_, $1) {
        var style = $1.trim();
        _this12.stringToSelector(style);
        return '';
      });
      return html.trim();
    }
  }, {
    key: "stringToSelector",
    value: function stringToSelector(style) {
      var _this13 = this;
      var lb = style.indexOf(LEFT_BRACKET);
      var _loop2 = function _loop2() {
        var rb = style.indexOf(RIGHT_BRACKET);
        var selectors = style.slice(0, lb).trim();
        var content = style.slice(lb + 1, rb);
        content = content.replace(/:(.*);/g, function (_, $1) {
          var t = $1.trim().replace(/ +/g, '+++');
          return ":".concat(t, ";");
        });
        content = content.replace(/ /g, '');
        content = content.replace(/\+\+\+/g, ' ');
        if (!/;$/.test(content)) {
          content += ';';
        }
        selectors.split(',').forEach(function (src) {
          var selectorList = _this13.parseSelector(src);
          _this13.styles.push({
            content: content,
            selectorList: selectorList
          });
        });
        style = style.slice(rb + 1);
        lb = style.indexOf(LEFT_BRACKET);
      };
      while (lb > -1) {
        _loop2();
      }
      // console.log('res this.styles: ', this.styles)
    }
  }, {
    key: "parseSelector",
    value: function parseSelector(src) {
      var list = src.trim().replace(/ *([>~+]) */g, ' $1').replace(/ +/g, ' ').replace(/\[\s*([^[\]=\s]+)\s*=\s*([^[\]=\s]+)\s*\]/g, '[$1=$2]').split(' ');
      var selectors = list.map(function (item) {
        var firstChar = item.charAt(0);
        var selector = {
          isChild: firstChar === CHILD_COMBINATOR,
          isGeneralSibling: firstChar === GENERAL_SIBLING_COMBINATOR,
          isAdjacentSibling: firstChar === ADJACENT_SIBLING_COMBINATOR,
          tag: null,
          id: null,
          class: [],
          attrs: []
        };
        item = item.replace(/^[>~+]/, '');
        // 属性选择器
        item = item.replace(/\[(.+?)\]/g, function (_, $1) {
          var _$1$split = $1.split('='),
            _$1$split2 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_$1$split, 2),
            key = _$1$split2[0],
            value = _$1$split2[1];
          var all = $1.indexOf('=') === -1;
          var attr = {
            all: all,
            key: key,
            value: all ? null : value
          };
          selector.attrs.push(attr);
          return '';
        });
        item = item.replace(/([.#][A-Za-z0-9-_]+)/g, function (_, $1) {
          if ($1[0] === ID_SELECTOR) {
            // id 选择器
            selector.id = $1.substr(1);
          } else if ($1[0] === CLASS_SELECTOR) {
            // class 选择器
            selector.class.push($1.substr(1));
          }
          return '';
        });
        // 标签选择器
        if (item !== '') {
          selector.tag = item;
        }
        return selector;
      });
      return selectors;
    }
  }, {
    key: "matchStyle",
    value: function matchStyle(tagName, el, list) {
      var _this14 = this;
      var res = sortStyles(this.styles).reduce(function (str, _ref2, i) {
        var content = _ref2.content,
          selectorList = _ref2.selectorList;
        var idx = list[i];
        var selector = selectorList[idx];
        var nextSelector = selectorList[idx + 1];
        if ((nextSelector === null || nextSelector === void 0 ? void 0 : nextSelector.isGeneralSibling) || (nextSelector === null || nextSelector === void 0 ? void 0 : nextSelector.isAdjacentSibling)) {
          selector = nextSelector;
          idx += 1;
          list[i] += 1;
        }
        var isMatch = _this14.matchCurrent(tagName, el, selector);
        if (isMatch && selector.isGeneralSibling) {
          var prev = getPreviousElement(el);
          while (prev) {
            if (prev.h5tagName && _this14.matchCurrent(prev.h5tagName, prev, selectorList[idx - 1])) {
              isMatch = true;
              break;
            }
            prev = getPreviousElement(prev);
            isMatch = false;
          }
        }
        if (isMatch && selector.isAdjacentSibling) {
          var _prev = getPreviousElement(el);
          if (!_prev || !_prev.h5tagName) {
            isMatch = false;
          } else {
            var isSiblingMatch = _this14.matchCurrent(_prev.h5tagName, _prev, selectorList[idx - 1]);
            if (!isSiblingMatch) {
              isMatch = false;
            }
          }
        }
        if (isMatch) {
          if (idx === selectorList.length - 1) {
            return str + content;
          } else if (idx < selectorList.length - 1) {
            list[i] += 1;
          }
        } else {
          // 直接子代组合器: >
          if (selector.isChild && idx > 0) {
            list[i] -= 1;
            if (_this14.matchCurrent(tagName, el, selectorList[list[i]])) {
              list[i] += 1;
            }
          }
        }
        return str;
      }, '');
      return res;
    }
  }, {
    key: "matchCurrent",
    value: function matchCurrent(tagName, el, selector) {
      // 标签选择器
      if (selector.tag && selector.tag !== tagName) return false;
      // id 选择器
      if (selector.id && selector.id !== el.id) return false;
      // class 选择器
      if (selector.class.length) {
        var classList = el.className.split(' ');
        for (var i = 0; i < selector.class.length; i++) {
          var cls = selector.class[i];
          if (classList.indexOf(cls) === -1) {
            return false;
          }
        }
      }
      // 属性选择器
      if (selector.attrs.length) {
        for (var _i3 = 0; _i3 < selector.attrs.length; _i3++) {
          var _selector$attrs$_i = selector.attrs[_i3],
            all = _selector$attrs$_i.all,
            key = _selector$attrs$_i.key,
            value = _selector$attrs$_i.value;
          if (all && !el.hasAttribute(key)) {
            return false;
          } else {
            var attr = el.getAttribute(key);
            if (attr !== unquote(value || '')) {
              return false;
            }
          }
        }
      }
      return true;
    }
  }]);
  return StyleTagParser;
}();
function getPreviousElement(el) {
  var parent = el.parentElement;
  if (!parent) return null;
  var prev = el.previousSibling;
  if (!prev) return null;
  if (prev.nodeType === 1 /* NodeType.ELEMENT_NODE */) {
    return prev;
  } else {
    return getPreviousElement(prev);
  }
}
// 根据 css selector 权重排序: 权重大的靠后
// @WARN 不考虑伪类
// https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity_2
function sortStyles(styles) {
  return styles.sort(function (s1, s2) {
    var hundreds1 = getHundredsWeight(s1.selectorList);
    var hundreds2 = getHundredsWeight(s2.selectorList);
    if (hundreds1 !== hundreds2) return hundreds1 - hundreds2;
    var tens1 = getTensWeight(s1.selectorList);
    var tens2 = getTensWeight(s2.selectorList);
    if (tens1 !== tens2) return tens1 - tens2;
    var ones1 = getOnesWeight(s1.selectorList);
    var ones2 = getOnesWeight(s2.selectorList);
    return ones1 - ones2;
  });
}
function getHundredsWeight(selectors) {
  return selectors.reduce(function (pre, cur) {
    return pre + (cur.id ? 1 : 0);
  }, 0);
}
function getTensWeight(selectors) {
  return selectors.reduce(function (pre, cur) {
    return pre + cur.class.length + cur.attrs.length;
  }, 0);
}
function getOnesWeight(selectors) {
  return selectors.reduce(function (pre, cur) {
    return pre + (cur.tag ? 1 : 0);
  }, 0);
}
function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? function (val) {
    return !!map[val.toLowerCase()];
  } : function (val) {
    return !!map[val];
  };
}
var specialMiniElements = {
  img: 'image',
  iframe: 'web-view'
};
var internalCompsList = Object.keys(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.internalComponents).map(function (i) {
  return i.toLowerCase();
}).join(',');
// https://developers.weixin.qq.com/miniprogram/dev/component
var isMiniElements = makeMap(internalCompsList, true);
// https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements
var isInlineElements = makeMap('a,i,abbr,iframe,select,acronym,slot,small,span,bdi,kbd,strong,big,map,sub,sup,br,mark,mark,meter,template,canvas,textarea,cite,object,time,code,output,u,data,picture,tt,datalist,var,dfn,del,q,em,s,embed,samp,b', true);
// https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
var isBlockElements = makeMap('address,fieldset,li,article,figcaption,main,aside,figure,nav,blockquote,footer,ol,details,form,p,dialog,h1,h2,h3,h4,h5,h6,pre,dd,header,section,div,hgroup,table,dl,hr,ul,dt', true);
var closingTagAncestorBreakers = {
  li: ['ul', 'ol', 'menu'],
  dt: ['dl'],
  dd: ['dl'],
  tbody: ['table'],
  thead: ['table'],
  tfoot: ['table'],
  tr: ['table'],
  td: ['table']
};
function hasTerminalParent(tagName, stack) {
  var tagParents = closingTagAncestorBreakers[tagName];
  if (tagParents) {
    var currentIndex = stack.length - 1;
    while (currentIndex >= 0) {
      var parentTagName = stack[currentIndex].tagName;
      if (parentTagName === tagName) {
        break;
      }
      if (tagParents && tagParents.includes(parentTagName)) {
        return true;
      }
      currentIndex--;
    }
  }
  return false;
}
function getTagName(tag) {
  if (options.html.renderHTMLTag) {
    return tag;
  }
  if (specialMiniElements[tag]) {
    return specialMiniElements[tag];
  } else if (isMiniElements(tag)) {
    return tag;
  } else if (isBlockElements(tag)) {
    return 'view';
  } else if (isInlineElements(tag)) {
    return 'text';
  }
  return 'view';
}
function splitEqual(str) {
  var sep = '=';
  var idx = str.indexOf(sep);
  if (idx === -1) return [str];
  var key = str.slice(0, idx).trim();
  var value = str.slice(idx + sep.length).trim();
  return [key, value];
}
function format(children, document, styleOptions, parent) {
  return children.filter(function (child) {
    // 过滤注释和空文本节点
    if (child.type === 'comment') {
      return false;
    } else if (child.type === 'text') {
      return child.content !== '';
    }
    return true;
  }).map(function (child) {
    // 文本节点
    if (child.type === 'text') {
      var text = document.createTextNode(child.content);
      if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(options.html.transformText)) {
        text = options.html.transformText(text, child);
      }
      parent === null || parent === void 0 ? void 0 : parent.appendChild(text);
      return text;
    }
    var el = document.createElement(getTagName(child.tagName));
    el.h5tagName = child.tagName;
    parent === null || parent === void 0 ? void 0 : parent.appendChild(el);
    if (!options.html.renderHTMLTag) {
      el.className = "h5-".concat(child.tagName);
    }
    for (var i = 0; i < child.attributes.length; i++) {
      var attr = child.attributes[i];
      var _splitEqual = splitEqual(attr),
        _splitEqual2 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_splitEqual, 2),
        key = _splitEqual2[0],
        value = _splitEqual2[1];
      if (key === 'class') {
        el.className += ' ' + unquote(value);
      } else if (key[0] === 'o' && key[1] === 'n') {
        continue;
      } else {
        el.setAttribute(key, value == null ? true : unquote(value));
      }
    }
    var styleTagParser = styleOptions.styleTagParser,
      descendantList = styleOptions.descendantList;
    var list = descendantList.slice();
    var style = styleTagParser.matchStyle(child.tagName, el, list);
    el.setAttribute('style', style + el.style.cssText);
    // console.log('style, ', style)
    format(child.children, document, {
      styleTagParser: styleTagParser,
      descendantList: list
    }, el);
    if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(options.html.transformElement)) {
      return options.html.transformElement(el, child);
    }
    return el;
  });
}
function parser(html, document) {
  var styleTagParser = new StyleTagParser();
  html = styleTagParser.extractStyle(html);
  var tokens = new Scaner(html).scan();
  var root = {
    tagName: '',
    children: [],
    type: 'element',
    attributes: []
  };
  var state = {
    tokens: tokens,
    options: options,
    cursor: 0,
    stack: [root]
  };
  parse(state);
  return format(root.children, document, {
    styleTagParser: styleTagParser,
    descendantList: Array(styleTagParser.styles.length).fill(0)
  });
}
function parse(state) {
  var tokens = state.tokens,
    stack = state.stack;
  var cursor = state.cursor;
  var len = tokens.length;
  var nodes = stack[stack.length - 1].children;
  while (cursor < len) {
    var token = tokens[cursor];
    if (token.type !== 'tag-start') {
      // comment or text
      nodes.push(token);
      cursor++;
      continue;
    }
    var tagToken = tokens[++cursor];
    cursor++;
    var tagName = tagToken.content.toLowerCase();
    if (token.close) {
      var index = stack.length;
      var shouldRewind = false;
      while (--index > -1) {
        if (stack[index].tagName === tagName) {
          shouldRewind = true;
          break;
        }
      }
      while (cursor < len) {
        var endToken = tokens[cursor];
        if (endToken.type !== 'tag-end') break;
        cursor++;
      }
      if (shouldRewind) {
        stack.splice(index);
        break;
      } else {
        continue;
      }
    }
    var isClosingTag = options.html.closingElements.has(tagName);
    var shouldRewindToAutoClose = isClosingTag;
    if (shouldRewindToAutoClose) {
      shouldRewindToAutoClose = !hasTerminalParent(tagName, stack);
    }
    if (shouldRewindToAutoClose) {
      var currentIndex = stack.length - 1;
      while (currentIndex > 0) {
        if (tagName === stack[currentIndex].tagName) {
          stack.splice(currentIndex);
          var previousIndex = currentIndex - 1;
          nodes = stack[previousIndex].children;
          break;
        }
        currentIndex = currentIndex - 1;
      }
    }
    var attributes = [];
    var attrToken = void 0;
    while (cursor < len) {
      attrToken = tokens[cursor];
      if (attrToken.type === 'tag-end') break;
      attributes.push(attrToken.content);
      cursor++;
    }
    cursor++;
    var children = [];
    var element = {
      type: 'element',
      tagName: tagToken.content,
      attributes: attributes,
      children: children
    };
    nodes.push(element);
    var hasChildren = !(attrToken.close || options.html.voidElements.has(tagName));
    if (hasChildren) {
      stack.push({
        tagName: tagName,
        children: children
      });
      var innerState = {
        tokens: tokens,
        cursor: cursor,
        stack: stack
      };
      parse(innerState);
      cursor = innerState.cursor;
    }
  }
  state.cursor = cursor;
}
options.html = {
  skipElements: new Set(['style', 'script']),
  voidElements: new Set(['!doctype', 'area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']),
  closingElements: new Set(['html', 'head', 'body', 'p', 'dt', 'dd', 'li', 'option', 'thead', 'th', 'tbody', 'tr', 'td', 'tfoot', 'colgroup']),
  renderHTMLTag: false
};
function setInnerHTML(element, html) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  var children = parser(html, element.ownerDocument);
  for (var i = 0; i < children.length; i++) {
    element.appendChild(children[i]);
  }
}
function getBoundingClientRectImpl() {
  var _this15 = this;
  if (!options.miniGlobal) return Promise.resolve(null);
  return new Promise(function (resolve) {
    var query = options.miniGlobal.createSelectorQuery();
    query.select("#".concat(_this15.uid)).boundingClientRect(function (res) {
      resolve(res);
    }).exec();
  });
}
function getTemplateContent(ctx) {
  if (ctx.nodeName === 'template') {
    var _document = ctx.ownerDocument;
    var content = _document.createElement(DOCUMENT_FRAGMENT);
    content.childNodes = ctx.childNodes;
    ctx.childNodes = [content];
    content.parentNode = ctx;
    content.childNodes.forEach(function (nodes) {
      nodes.parentNode = content;
    });
    return content;
  }
}

/**
 * An implementation of `Element.insertAdjacentHTML()`
 * to support Vue 3 with a version of or greater than `vue@3.1.2`
 */
function insertAdjacentHTML(position, html) {
  var _a, _b;
  var parsedNodes = parser(html, this.ownerDocument);
  for (var i = 0; i < parsedNodes.length; i++) {
    var n = parsedNodes[i];
    switch (position) {
      case 'beforebegin':
        (_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(n, this);
        break;
      case 'afterbegin':
        if (this.hasChildNodes()) {
          this.insertBefore(n, this.childNodes[0]);
        } else {
          this.appendChild(n);
        }
        break;
      case 'beforeend':
        this.appendChild(n);
        break;
      case 'afterend':
        (_b = this.parentNode) === null || _b === void 0 ? void 0 : _b.appendChild(n);
        break;
    }
  }
}
function cloneNode() {
  var isDeep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var document = this.ownerDocument;
  var newNode;
  if (this.nodeType === 1 /* NodeType.ELEMENT_NODE */) {
    newNode = document.createElement(this.nodeName);
  } else if (this.nodeType === 3 /* NodeType.TEXT_NODE */) {
    newNode = document.createTextNode('');
  }
  for (var key in this) {
    var value = this[key];
    if ([PROPS, DATASET].includes(key) && (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_14__["default"])(value) === OBJECT) {
      newNode[key] = Object.assign({}, value);
    } else if (key === '_value') {
      newNode[key] = value;
    } else if (key === STYLE) {
      newNode.style._value = Object.assign({}, value._value);
      newNode.style._usedStyleProp = new Set(Array.from(value._usedStyleProp));
    }
  }
  if (isDeep) {
    newNode.childNodes = this.childNodes.map(function (node) {
      return node.cloneNode(true);
    });
  }
  return newNode;
}
function contains(node) {
  var isContains = false;
  this.childNodes.some(function (childNode) {
    var uid = childNode.uid;
    if (uid === node.uid || uid === node.id || childNode.contains(node)) {
      isContains = true;
      return true;
    }
  });
  return isContains;
}
if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isWebPlatform)()) {
  if (true) {
    TaroNode.extend('innerHTML', {
      set: function set(html) {
        setInnerHTML.call(this, this, html);
      },
      get: function get() {
        return '';
      }
    });
    if (false) {}
  }
  if (false) {}
  if (false) {}
  if (true) {
    TaroElement.extend('getBoundingClientRect', getBoundingClientRectImpl);
  }
  if (false) {}
}

// Taro 事件对象。以 Web 标准的事件对象为基础，加入小程序事件对象中携带的部分信息，并模拟实现事件冒泡。
var TaroEvent = /*#__PURE__*/function () {
  function TaroEvent(type, opts, event) {
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TaroEvent);
    this._stop = false;
    this._end = false;
    this.defaultPrevented = false;
    // Mouse Event botton property, it's used in 3rd lib, like react-router. default 0 in general
    this.button = 0;
    // timestamp can either be hi-res ( relative to page load) or low-res (relative to UNIX epoch)
    // here use hi-res timestamp
    this.timeStamp = Date.now();
    this.type = type.toLowerCase();
    this.mpEvent = event;
    this.bubbles = Boolean(opts && opts.bubbles);
    this.cancelable = Boolean(opts && opts.cancelable);
  }
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(TaroEvent, [{
    key: "stopPropagation",
    value: function stopPropagation() {
      this._stop = true;
    }
  }, {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      this._end = this._stop = true;
    }
  }, {
    key: "preventDefault",
    value: function preventDefault() {
      this.defaultPrevented = true;
    }
  }, {
    key: "target",
    get: function get() {
      var _a, _b, _c, _d;
      var cacheTarget = this.cacheTarget;
      if (!cacheTarget) {
        var target = Object.create(((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.target) || null);
        // Note：优先判断冒泡场景alipay的targetDataset的sid, 不然冒泡场景target属性吐出不对，其余拿取当前绑定id
        var element = env.document.getElementById(((_b = target.targetDataset) === null || _b === void 0 ? void 0 : _b.sid) || ((_c = target.dataset) === null || _c === void 0 ? void 0 : _c.sid) || target.id || null);
        target.dataset = element !== null ? element.dataset : _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.EMPTY_OBJ;
        for (var key in (_d = this.mpEvent) === null || _d === void 0 ? void 0 : _d.detail) {
          target[key] = this.mpEvent.detail[key];
        }
        this.cacheTarget = target;
        return target;
      } else {
        return cacheTarget;
      }
    }
  }, {
    key: "currentTarget",
    get: function get() {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      var cacheCurrentTarget = this.cacheCurrentTarget;
      if (!cacheCurrentTarget) {
        var doc = env.document;
        var currentTarget = Object.create(((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.currentTarget) || null);
        var element = doc.getElementById(((_b = currentTarget.dataset) === null || _b === void 0 ? void 0 : _b.sid) || currentTarget.id || null);
        var targetElement = doc.getElementById(((_e = (_d = (_c = this.mpEvent) === null || _c === void 0 ? void 0 : _c.target) === null || _d === void 0 ? void 0 : _d.dataset) === null || _e === void 0 ? void 0 : _e.sid) || ((_g = (_f = this.mpEvent) === null || _f === void 0 ? void 0 : _f.target) === null || _g === void 0 ? void 0 : _g.id) || null);
        if (element === null || element && element === targetElement) {
          this.cacheCurrentTarget = this.target;
          return this.target;
        }
        currentTarget.dataset = element.dataset;
        for (var key in (_h = this.mpEvent) === null || _h === void 0 ? void 0 : _h.detail) {
          currentTarget[key] = this.mpEvent.detail[key];
        }
        this.cacheCurrentTarget = currentTarget;
        return currentTarget;
      } else {
        return cacheCurrentTarget;
      }
    }
  }]);
  return TaroEvent;
}();
function createEvent(event, node) {
  if (typeof event === 'string') {
    // For Vue3 using document.createEvent
    return new TaroEvent(event, {
      bubbles: true,
      cancelable: true
    });
  }
  var domEv = new TaroEvent(event.type, {
    bubbles: true,
    cancelable: true
  }, event);
  for (var key in event) {
    if (key === CURRENT_TARGET || key === TARGET || key === TYPE || key === TIME_STAMP) {
      continue;
    } else {
      domEv[key] = event[key];
    }
  }
  if (domEv.type === CONFIRM && (node === null || node === void 0 ? void 0 : node.nodeName) === INPUT) {
    // eslint-disable-next-line dot-notation
    domEv[KEY_CODE] = 13;
  }
  return domEv;
}
var eventsBatch = {};
function getEventCBResult(event) {
  var result = event[EVENT_CALLBACK_RESULT];
  if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(result)) {
    delete event[EVENT_CALLBACK_RESULT];
  }
  return result;
}
// 小程序的事件代理回调函数
function eventHandler(event) {
  var _a, _b;
  // Note: ohos 上事件没有设置 type、detail 类型 setter 方法，且部分事件（例如 load 等）缺失 target 导致事件错误
  event.type === undefined && Object.defineProperty(event, 'type', {
    value: event._type // ohos only
  });

  event.detail === undefined && Object.defineProperty(event, 'detail', {
    value: event._detail || Object.assign({}, event) // ohos only
  });

  event.currentTarget = event.currentTarget || event.target || Object.assign({}, event);
  _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('modifyMpEventImpl', event);
  var currentTarget = event.currentTarget;
  var id = ((_a = currentTarget.dataset) === null || _a === void 0 ? void 0 : _a.sid /** sid */) || currentTarget.id /** uid */ || ((_b = event.detail) === null || _b === void 0 ? void 0 : _b.id) || '';
  var node = env.document.getElementById(id);
  if (node) {
    var dispatch = function dispatch() {
      var e = createEvent(event, node);
      _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('modifyTaroEvent', e, node);
      _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('dispatchTaroEvent', e, node);
      _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('dispatchTaroEventFinish', e, node);
    };
    if (_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.isExist('batchedEventUpdates')) {
      var type = event.type;
      if (!_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('isBubbleEvents', type) || !isParentBinded(node, type) || type === TOUCHMOVE && !!node.props.catchMove) {
        // 最上层组件统一 batchUpdate
        _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('batchedEventUpdates', function () {
          if (eventsBatch[type]) {
            eventsBatch[type].forEach(function (fn) {
              return fn();
            });
            delete eventsBatch[type];
          }
          dispatch();
        });
        return getEventCBResult(event);
      } else {
        // 如果上层组件也有绑定同类型的组件，委托给上层组件调用事件回调
        (eventsBatch[type] || (eventsBatch[type] = [])).push(dispatch);
      }
    } else {
      dispatch();
      return getEventCBResult(event);
    }
  }
}
var FormElement = /*#__PURE__*/function (_TaroElement) {
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__["default"])(FormElement, _TaroElement);
  var _super4 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__["default"])(FormElement);
  function FormElement() {
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FormElement);
    return _super4.apply(this, arguments);
  }
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(FormElement, [{
    key: "type",
    get: function get() {
      var _a;
      return (_a = this.props[TYPE]) !== null && _a !== void 0 ? _a : '';
    },
    set: function set(val) {
      this.setAttribute(TYPE, val);
    }
  }, {
    key: "value",
    get: function get() {
      // eslint-disable-next-line dot-notation
      var val = this.props[VALUE];
      return val == null ? '' : val;
    },
    set: function set(val) {
      this.setAttribute(VALUE, val);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      if (event.mpEvent) {
        var val = event.mpEvent.detail.value;
        if (event.type === CHANGE) {
          this.props.value = val;
        } else if (event.type === INPUT) {
          // Web 规范中表单组件的 value 应该跟着输入改变
          // 只是改 this.props.value 的话不会进行 setData，因此这里修改 this.value。
          // 只测试了 React、Vue、Vue3 input 组件的 onInput 事件，onChange 事件不确定有没有副作用，所以暂不修改。
          this.value = val;
        }
      }
      return (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_12__["default"])((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_11__["default"])(FormElement.prototype), "dispatchEvent", this).call(this, event);
    }
  }]);
  return FormElement;
}(TaroElement);
var Performance = /*#__PURE__*/function () {
  function Performance() {
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Performance);
    this.recorder = new Map();
  }
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Performance, [{
    key: "start",
    value: function start(id) {
      if (!options.debug) {
        return;
      }
      this.recorder.set(id, Date.now());
    }
  }, {
    key: "stop",
    value: function stop(id) {
      if (!options.debug) {
        return;
      }
      var now = Date.now();
      var prev = this.recorder.get(id);
      this.recorder.delete(id);
      var time = now - prev;
      // eslint-disable-next-line no-console
      console.log("".concat(id, " \u65F6\u957F\uFF1A ").concat(time, "ms"));
    }
  }]);
  return Performance;
}();
var perf = new Performance();
function findCustomWrapper(root, dataPathArr) {
  // ['root', 'cn', '[0]'] remove 'root' => ['cn', '[0]']
  var list = dataPathArr.slice(1);
  var currentData = root;
  var customWrapper;
  var splitedPath = '';
  list.some(function (item, i) {
    var key = item
    // '[0]' => '0'
    .replace(/^\[(.+)\]$/, '$1')
    // 'cn' => 'childNodes'
    .replace(/\bcn\b/g, 'childNodes');
    currentData = currentData[key];
    if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(currentData)) {
      currentData = currentData.filter(function (el) {
        return !isComment(el);
      });
    }
    if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(currentData)) return true;
    if (currentData.nodeName === CUSTOM_WRAPPER) {
      var res = customWrapperCache.get(currentData.sid);
      if (res) {
        customWrapper = res;
        splitedPath = dataPathArr.slice(i + 2).join('.');
      }
    }
  });
  if (customWrapper) {
    return {
      customWrapper: customWrapper,
      splitedPath: splitedPath
    };
  }
}
var TaroRootElement = /*#__PURE__*/function (_TaroElement2) {
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__["default"])(TaroRootElement, _TaroElement2);
  var _super5 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__["default"])(TaroRootElement);
  function TaroRootElement() {
    var _this16;
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TaroRootElement);
    _this16 = _super5.call(this);
    _this16.updatePayloads = [];
    _this16.updateCallbacks = [];
    _this16.pendingUpdate = false;
    _this16.ctx = null;
    _this16.nodeName = ROOT_STR;
    _this16.tagName = ROOT_STR.toUpperCase();
    return _this16;
  }
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(TaroRootElement, [{
    key: "_path",
    get: function get() {
      return ROOT_STR;
    }
  }, {
    key: "_root",
    get: function get() {
      return this;
    }
  }, {
    key: "enqueueUpdate",
    value: function enqueueUpdate(payload) {
      this.updatePayloads.push(payload);
      if (!this.pendingUpdate && this.ctx) {
        this.performUpdate();
      }
    }
  }, {
    key: "performUpdate",
    value: function performUpdate() {
      var _this17 = this;
      var initRender = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var prerender = arguments.length > 1 ? arguments[1] : undefined;
      this.pendingUpdate = true;
      var ctx = _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('proxyToRaw', this.ctx);
      setTimeout(function () {
        var setDataMark = "".concat(SET_DATA, " \u5F00\u59CB\u65F6\u95F4\u6233 ").concat(Date.now());
        perf.start(setDataMark);
        var data = Object.create(null);
        var resetPaths = new Set(initRender ? ['root.cn.[0]', 'root.cn[0]'] : []);
        while (_this17.updatePayloads.length > 0) {
          var _this17$updatePayload = _this17.updatePayloads.shift(),
            path = _this17$updatePayload.path,
            value = _this17$updatePayload.value;
          if (path.endsWith("cn" /* Shortcuts.Childnodes */)) {
            resetPaths.add(path);
          }
          data[path] = value;
        }
        var _loop3 = function _loop3(_path2) {
          resetPaths.forEach(function (p) {
            // 已经重置了数组，就不需要分别再设置了
            if (_path2.includes(p) && _path2 !== p) {
              delete data[_path2];
            }
          });
          var value = data[_path2];
          if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value)) {
            data[_path2] = value();
          }
        };
        for (var _path2 in data) {
          _loop3(_path2);
        }
        // 预渲染
        if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(prerender)) return prerender(data);
        // 正常渲染
        _this17.pendingUpdate = false;
        var normalUpdate = {};
        var customWrapperMap = new Map();
        if (initRender) {
          // 初次渲染，使用页面级别的 setData
          normalUpdate = data;
        } else {
          // 更新渲染，区分 CustomWrapper 与页面级别的 setData
          for (var p in data) {
            var dataPathArr = p.split('.');
            var found = findCustomWrapper(_this17, dataPathArr);
            if (found) {
              // 此项数据使用 CustomWrapper 去更新
              var customWrapper = found.customWrapper,
                splitedPath = found.splitedPath;
              // 合并同一个 customWrapper 的相关更新到一次 setData 中
              customWrapperMap.set(customWrapper, Object.assign(Object.assign({}, customWrapperMap.get(customWrapper) || {}), (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])({}, "i.".concat(splitedPath), data[p])));
            } else {
              // 此项数据使用页面去更新
              normalUpdate[p] = data[p];
            }
          }
        }
        var customWrapperCount = customWrapperMap.size;
        var isNeedNormalUpdate = Object.keys(normalUpdate).length > 0;
        var updateArrLen = customWrapperCount + (isNeedNormalUpdate ? 1 : 0);
        var executeTime = 0;
        var cb = function cb() {
          if (++executeTime === updateArrLen) {
            perf.stop(setDataMark);
            _this17.flushUpdateCallback();
            initRender && perf.stop(PAGE_INIT);
          }
        };
        // custom-wrapper setData
        if (customWrapperCount) {
          customWrapperMap.forEach(function (data, ctx) {
            if ( true && options.debug) {
              // eslint-disable-next-line no-console
              console.log('custom wrapper setData: ', data);
            }
            ctx.setData(data, cb);
          });
        }
        // page setData
        if (isNeedNormalUpdate) {
          if ( true && options.debug) {
            // eslint-disable-next-line no-console
            console.log('page setData:', normalUpdate);
          }
          ctx.setData(normalUpdate, cb);
        }
      }, 0);
    }
  }, {
    key: "enqueueUpdateCallback",
    value: function enqueueUpdateCallback(cb, ctx) {
      this.updateCallbacks.push(function () {
        ctx ? cb.call(ctx) : cb();
      });
    }
  }, {
    key: "flushUpdateCallback",
    value: function flushUpdateCallback() {
      var updateCallbacks = this.updateCallbacks;
      if (!updateCallbacks.length) return;
      var copies = updateCallbacks.slice(0);
      this.updateCallbacks.length = 0;
      for (var i = 0; i < copies.length; i++) {
        copies[i]();
      }
    }
  }]);
  return TaroRootElement;
}(TaroElement);
var TaroText = /*#__PURE__*/function (_TaroNode2) {
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__["default"])(TaroText, _TaroNode2);
  var _super6 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__["default"])(TaroText);
  function TaroText(value) {
    var _this18;
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TaroText);
    _this18 = _super6.call(this);
    _this18.nodeType = 3 /* NodeType.TEXT_NODE */;
    _this18.nodeName = '#text';
    _this18._value = value;
    return _this18;
  }
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(TaroText, [{
    key: "textContent",
    get: function get() {
      return this._value;
    },
    set: function set(text) {
      MutationObserver.record({
        target: this,
        type: "characterData" /* MutationRecordType.CHARACTER_DATA */,
        oldValue: this._value
      });
      this._value = text;
      this.enqueueUpdate({
        path: "".concat(this._path, ".", "v" /* Shortcuts.Text */),
        value: text
      });
    }
  }, {
    key: "nodeValue",
    get: function get() {
      return this._value;
    },
    set: function set(text) {
      this.textContent = text;
    }
  }, {
    key: "data",
    get: function get() {
      return this._value;
    },
    set: function set(text) {
      this.textContent = text;
    }
  }]);
  return TaroText;
}(TaroNode);
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
var _URLSearchParams_dict;
var findReg = /[!'()~]|%20|%00/g;
var plusReg = /\+/g;
var replaceCharMap = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+',
  '%00': '\x00'
};
function replacer(match) {
  return replaceCharMap[match];
}
function appendTo(dict, name, value) {
  var res = (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(value) ? value.join(',') : value;
  if (name in dict) dict[name].push(res);else dict[name] = [res];
}
function addEach(value, key) {
  appendTo(this, key, value);
}
function decode(str) {
  return decodeURIComponent(str.replace(plusReg, ' '));
}
function encode(str) {
  return encodeURIComponent(str).replace(findReg, replacer);
}
var URLSearchParams = /*#__PURE__*/function () {
  function URLSearchParams(query) {
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, URLSearchParams);
    _URLSearchParams_dict.set(this, Object.create(null));
    query !== null && query !== void 0 ? query : query = '';
    var dict = __classPrivateFieldGet(this, _URLSearchParams_dict, "f");
    if (typeof query === 'string') {
      if (query.charAt(0) === '?') {
        query = query.slice(1);
      }
      for (var pairs = query.split('&'), i = 0, length = pairs.length; i < length; i++) {
        var value = pairs[i];
        var index = value.indexOf('=');
        if (index > -1) {
          appendTo(dict, decode(value.slice(0, index)), decode(value.slice(index + 1)));
        } else if (value.length) {
          appendTo(dict, decode(value), '');
        }
      }
    } else {
      if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(query)) {
        for (var _i4 = 0, _length = query.length; _i4 < _length; _i4++) {
          var _value = query[_i4];
          appendTo(dict, _value[0], _value[1]);
        }
      } else if (query.forEach) {
        query.forEach(addEach, dict);
      } else {
        for (var key in query) {
          appendTo(dict, key, query[key]);
        }
      }
    }
  }
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(URLSearchParams, [{
    key: "append",
    value: function append(name, value) {
      appendTo(__classPrivateFieldGet(this, _URLSearchParams_dict, "f"), name, value);
    }
  }, {
    key: "delete",
    value: function _delete(name) {
      delete __classPrivateFieldGet(this, _URLSearchParams_dict, "f")[name];
    }
  }, {
    key: "get",
    value: function get(name) {
      var dict = __classPrivateFieldGet(this, _URLSearchParams_dict, "f");
      return name in dict ? dict[name][0] : null;
    }
  }, {
    key: "getAll",
    value: function getAll(name) {
      var dict = __classPrivateFieldGet(this, _URLSearchParams_dict, "f");
      return name in dict ? dict[name].slice(0) : [];
    }
  }, {
    key: "has",
    value: function has(name) {
      return name in __classPrivateFieldGet(this, _URLSearchParams_dict, "f");
    }
  }, {
    key: "keys",
    value: function keys() {
      return Object.keys(__classPrivateFieldGet(this, _URLSearchParams_dict, "f"));
    }
  }, {
    key: "set",
    value: function set(name, value) {
      __classPrivateFieldGet(this, _URLSearchParams_dict, "f")[name] = ['' + value];
    }
  }, {
    key: "forEach",
    value: function forEach(callback, thisArg) {
      var dict = __classPrivateFieldGet(this, _URLSearchParams_dict, "f");
      Object.getOwnPropertyNames(dict).forEach(function (name) {
        dict[name].forEach(function (value) {
          callback.call(thisArg, value, name, this);
        }, this);
      }, this);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {};
    }
  }, {
    key: "toString",
    value: function toString() {
      var dict = __classPrivateFieldGet(this, _URLSearchParams_dict, "f");
      var query = [];
      for (var key in dict) {
        var name = encode(key);
        for (var i = 0, value = dict[key]; i < value.length; i++) {
          query.push(name + '=' + encode(value[i]));
        }
      }
      return query.join('&');
    }
  }]);
  return URLSearchParams;
}();
_URLSearchParams_dict = new WeakMap();
var _URL_hash, _URL_hostname, _URL_pathname, _URL_port, _URL_protocol, _URL_search;
var URL = /*#__PURE__*/function () {
  function URL(url, base) {
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, URL);
    /* private property */
    _URL_hash.set(this, '');
    _URL_hostname.set(this, '');
    _URL_pathname.set(this, '');
    _URL_port.set(this, '');
    _URL_protocol.set(this, '');
    _URL_search.set(this, void 0);
    if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(url)) url = String(url);
    var parseResult = parseUrlBase(url, base);
    var hash = parseResult.hash,
      hostname = parseResult.hostname,
      pathname = parseResult.pathname,
      port = parseResult.port,
      protocol = parseResult.protocol,
      search = parseResult.search;
    __classPrivateFieldSet(this, _URL_hash, hash, "f");
    __classPrivateFieldSet(this, _URL_hostname, hostname, "f");
    __classPrivateFieldSet(this, _URL_pathname, pathname || '/', "f");
    __classPrivateFieldSet(this, _URL_port, port, "f");
    __classPrivateFieldSet(this, _URL_protocol, protocol, "f");
    __classPrivateFieldSet(this, _URL_search, new URLSearchParams(search), "f");
  }
  /* public property */
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(URL, [{
    key: "protocol",
    get: function get() {
      return __classPrivateFieldGet(this, _URL_protocol, "f");
    },
    set: function set(val) {
      (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(val) && __classPrivateFieldSet(this, _URL_protocol, val.trim(), "f");
    }
  }, {
    key: "host",
    get: function get() {
      return this.hostname + (this.port ? ':' + this.port : '');
    },
    set: function set(val) {
      if (val && (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(val)) {
        val = val.trim();
        var _parseUrl = parseUrl("//".concat(val)),
          hostname = _parseUrl.hostname,
          port = _parseUrl.port;
        this.hostname = hostname;
        this.port = port;
      }
    }
  }, {
    key: "hostname",
    get: function get() {
      return __classPrivateFieldGet(this, _URL_hostname, "f");
    },
    set: function set(val) {
      val && (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(val) && __classPrivateFieldSet(this, _URL_hostname, val.trim(), "f");
    }
  }, {
    key: "port",
    get: function get() {
      return __classPrivateFieldGet(this, _URL_port, "f");
    },
    set: function set(val) {
      (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(val) && __classPrivateFieldSet(this, _URL_port, val.trim(), "f");
    }
  }, {
    key: "pathname",
    get: function get() {
      return __classPrivateFieldGet(this, _URL_pathname, "f");
    },
    set: function set(val) {
      if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(val)) {
        val = val.trim();
        var HEAD_REG = /^(\/|\.\/|\.\.\/)/;
        var temp = val;
        while (HEAD_REG.test(temp)) {
          temp = temp.replace(HEAD_REG, '');
        }
        if (temp) __classPrivateFieldSet(this, _URL_pathname, '/' + temp, "f");else __classPrivateFieldSet(this, _URL_pathname, '/', "f");
      }
    }
  }, {
    key: "search",
    get: function get() {
      var val = __classPrivateFieldGet(this, _URL_search, "f").toString();
      return val.length === 0 || val.startsWith('?') ? val : "?".concat(val);
    },
    set: function set(val) {
      if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(val)) {
        val = val.trim();
        __classPrivateFieldSet(this, _URL_search, new URLSearchParams(val), "f");
      }
    }
  }, {
    key: "hash",
    get: function get() {
      return __classPrivateFieldGet(this, _URL_hash, "f");
    },
    set: function set(val) {
      if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(val)) {
        val = val.trim();
        if (val) __classPrivateFieldSet(this, _URL_hash, val.startsWith('#') ? val : "#".concat(val), "f");else __classPrivateFieldSet(this, _URL_hash, '', "f");
      }
    }
  }, {
    key: "href",
    get: function get() {
      return "".concat(this.protocol, "//").concat(this.host).concat(this.pathname).concat(this.search).concat(this.hash);
    },
    set: function set(val) {
      if (val && (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(val)) {
        val = val.trim();
        var _parseUrl2 = parseUrl(val),
          protocol = _parseUrl2.protocol,
          hostname = _parseUrl2.hostname,
          port = _parseUrl2.port,
          hash = _parseUrl2.hash,
          search = _parseUrl2.search,
          pathname = _parseUrl2.pathname;
        this.protocol = protocol;
        this.hostname = hostname;
        this.pathname = pathname;
        this.port = port;
        this.hash = hash;
        this.search = search;
      }
    }
  }, {
    key: "origin",
    get: function get() {
      return "".concat(this.protocol, "//").concat(this.host);
    },
    set: function set(val) {
      if (val && (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(val)) {
        val = val.trim();
        var _parseUrl3 = parseUrl(val),
          protocol = _parseUrl3.protocol,
          hostname = _parseUrl3.hostname,
          port = _parseUrl3.port;
        this.protocol = protocol;
        this.hostname = hostname;
        this.port = port;
      }
    }
  }, {
    key: "searchParams",
    get: function get() {
      return __classPrivateFieldGet(this, _URL_search, "f");
    }
    // public method
  }, {
    key: "toString",
    value: function toString() {
      return this.href;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.toString();
    }
    // convenient for deconstructor
  }, {
    key: "_toRaw",
    value: function _toRaw() {
      return {
        protocol: this.protocol,
        port: this.port,
        host: this.host,
        hostname: this.hostname,
        pathname: this.pathname,
        hash: this.hash,
        search: this.search,
        origin: this.origin,
        href: this.href
      };
    }
  }], [{
    key: "createObjectURL",
    value: function createObjectURL() {
      throw new Error('Oops, not support URL.createObjectURL() in miniprogram.');
    }
  }, {
    key: "revokeObjectURL",
    value: function revokeObjectURL() {
      throw new Error('Oops, not support URL.revokeObjectURL() in miniprogram.');
    }
  }]);
  return URL;
}();
_URL_hash = new WeakMap(), _URL_hostname = new WeakMap(), _URL_pathname = new WeakMap(), _URL_port = new WeakMap(), _URL_protocol = new WeakMap(), _URL_search = new WeakMap();
function parseUrl() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var result = {
    href: '',
    origin: '',
    protocol: '',
    hostname: '',
    host: '',
    port: '',
    pathname: '',
    search: '',
    hash: ''
  };
  if (!url || !(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(url)) return result;
  url = url.trim();
  var PATTERN = /^(([^:/?#]+):)?\/\/(([^/?#]+):(.+)@)?([^/?#:]*)(:(\d+))?([^?#]*)(\?([^#]*))?(#(.*))?/;
  var matches = url.match(PATTERN);
  if (!matches) return result;
  // TODO: username & password ?
  result.protocol = matches[1] || 'https:';
  result.hostname = matches[6] || 'taro.com';
  result.port = matches[8] || '';
  result.pathname = matches[9] || '/';
  result.search = matches[10] || '';
  result.hash = matches[12] || '';
  result.href = url;
  result.origin = result.protocol + '//' + result.hostname;
  result.host = result.hostname + (result.port ? ":".concat(result.port) : '');
  return result;
}
function parseUrlBase(url, base) {
  var VALID_URL = /^(https?:)\/\//i;
  var fullUrl = '';
  var parsedBase = null;
  if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(base)) {
    base = String(base).trim();
    if (!VALID_URL.test(base)) throw new TypeError("Failed to construct 'URL': Invalid base URL");
    parsedBase = parseUrl(base);
  }
  url = String(url).trim();
  if (VALID_URL.test(url)) {
    fullUrl = url;
  } else if (parsedBase) {
    if (url) {
      if (url.startsWith('//')) {
        fullUrl = parsedBase.protocol + url;
      } else {
        fullUrl = parsedBase.origin + (url.startsWith('/') ? url : "/".concat(url));
      }
    } else {
      fullUrl = parsedBase.href;
    }
  } else {
    throw new TypeError("Failed to construct 'URL': Invalid URL");
  }
  return parseUrl(fullUrl);
}
var AnchorElement = /*#__PURE__*/function (_TaroElement3) {
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__["default"])(AnchorElement, _TaroElement3);
  var _super7 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__["default"])(AnchorElement);
  function AnchorElement() {
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AnchorElement);
    return _super7.apply(this, arguments);
  }
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AnchorElement, [{
    key: "href",
    get: function get() {
      var _a;
      return (_a = this.props["href" /* AnchorElementAttrs.HREF */]) !== null && _a !== void 0 ? _a : '';
    },
    set: function set(val) {
      this.setAttribute("href" /* AnchorElementAttrs.HREF */, val);
    }
  }, {
    key: "protocol",
    get: function get() {
      var _a;
      return (_a = this.props["protocol" /* AnchorElementAttrs.PROTOCOL */]) !== null && _a !== void 0 ? _a : '';
    }
  }, {
    key: "host",
    get: function get() {
      var _a;
      return (_a = this.props["host" /* AnchorElementAttrs.HOST */]) !== null && _a !== void 0 ? _a : '';
    }
  }, {
    key: "search",
    get: function get() {
      var _a;
      return (_a = this.props["search" /* AnchorElementAttrs.SEARCH */]) !== null && _a !== void 0 ? _a : '';
    }
  }, {
    key: "hash",
    get: function get() {
      var _a;
      return (_a = this.props["hash" /* AnchorElementAttrs.HASH */]) !== null && _a !== void 0 ? _a : '';
    }
  }, {
    key: "hostname",
    get: function get() {
      var _a;
      return (_a = this.props["hostname" /* AnchorElementAttrs.HOSTNAME */]) !== null && _a !== void 0 ? _a : '';
    }
  }, {
    key: "port",
    get: function get() {
      var _a;
      return (_a = this.props["port" /* AnchorElementAttrs.PORT */]) !== null && _a !== void 0 ? _a : '';
    }
  }, {
    key: "pathname",
    get: function get() {
      var _a;
      return (_a = this.props["pathname" /* AnchorElementAttrs.PATHNAME */]) !== null && _a !== void 0 ? _a : '';
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(qualifiedName, value) {
      if (qualifiedName === "href" /* AnchorElementAttrs.HREF */) {
        var willSetAttr = parseUrl(value);
        for (var k in willSetAttr) {
          (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_12__["default"])((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_11__["default"])(AnchorElement.prototype), "setAttribute", this).call(this, k, willSetAttr[k]);
        }
      } else {
        (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_12__["default"])((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_11__["default"])(AnchorElement.prototype), "setAttribute", this).call(this, qualifiedName, value);
      }
    }
  }]);
  return AnchorElement;
}(TaroElement);
var TaroDocument = /*#__PURE__*/function (_TaroElement4) {
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__["default"])(TaroDocument, _TaroElement4);
  var _super8 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__["default"])(TaroDocument);
  function TaroDocument() {
    var _this19;
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TaroDocument);
    _this19 = _super8.call(this);
    _this19.createEvent = createEvent;
    _this19.nodeType = 9 /* NodeType.DOCUMENT_NODE */;
    _this19.nodeName = DOCUMENT_ELEMENT_NAME;
    return _this19;
  }
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(TaroDocument, [{
    key: "createElement",
    value: function createElement(type) {
      var nodeName = type.toLowerCase();
      var element;
      switch (true) {
        case nodeName === ROOT_STR:
          element = new TaroRootElement();
          return element;
        case _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.controlledComponent.has(nodeName):
          element = new FormElement();
          break;
        case nodeName === A:
          element = new AnchorElement();
          break;
        default:
          element = new TaroElement();
          break;
      }
      element.nodeName = nodeName;
      element.tagName = type.toUpperCase();
      return element;
    }
    // an ugly fake createElementNS to deal with @vue/runtime-dom's
    // support mounting app to svg container since vue@3.0.8
  }, {
    key: "createElementNS",
    value: function createElementNS(_svgNS, type) {
      return this.createElement(type);
    }
  }, {
    key: "createTextNode",
    value: function createTextNode(text) {
      return new TaroText(text);
    }
  }, {
    key: "getElementById",
    value: function getElementById(id) {
      var el = eventSource.get(id);
      return (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(el) ? null : el;
    }
  }, {
    key: "querySelector",
    value: function querySelector(query) {
      // 为了 Vue3 的乞丐版实现
      if (/^#/.test(query)) {
        return this.getElementById(query.slice(1));
      }
      return null;
    }
  }, {
    key: "querySelectorAll",
    value: function querySelectorAll() {
      // fake hack
      return [];
    }
    // @TODO: @PERF: 在 hydrate 移除掉空的 node
  }, {
    key: "createComment",
    value: function createComment() {
      var textnode = new TaroText('');
      textnode.nodeName = COMMENT;
      return textnode;
    }
  }, {
    key: "defaultView",
    get: function get() {
      return env.window;
    }
  }]);
  return TaroDocument;
}(TaroElement);
var document$1;
if ( true && !(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isWebPlatform)()) {
  /* eslint-disable no-inner-declarations */
  var createDocument = function createDocument() {
    /**
       * <document>
       *   <html>
       *     <head></head>
       *     <body>
       *       <container>
       *         <app id="app" />
       *       </container>
       *     </body>
       *   </html>
       * </document>
       */
    var doc = new TaroDocument();
    var documentCreateElement = doc.createElement.bind(doc);
    var html = documentCreateElement(HTML);
    var head = documentCreateElement(HEAD);
    var body = documentCreateElement(BODY);
    var app = documentCreateElement(APP);
    app.id = APP;
    var container = documentCreateElement(CONTAINER); // 多包一层主要为了兼容 vue
    doc.appendChild(html);
    html.appendChild(head);
    html.appendChild(body);
    body.appendChild(container);
    container.appendChild(app);
    doc.documentElement = html;
    doc.head = head;
    doc.body = body;
    return doc;
  };
  document$1 = env.document = createDocument();
} else {
  document$1 = env.document;
}
function getComputedStyle(element) {
  return element.style;
}
var eventCenter = _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('getEventCenter', _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.Events);

/**
 * 一个小型缓存池，用于在切换页面时，存储一些上下文信息
 */
var RuntimeCache = /*#__PURE__*/function () {
  function RuntimeCache(name) {
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RuntimeCache);
    this.cache = new Map();
    this.name = name;
  }
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(RuntimeCache, [{
    key: "has",
    value: function has(identifier) {
      return this.cache.has(identifier);
    }
  }, {
    key: "set",
    value: function set(identifier, ctx) {
      if (identifier && ctx) {
        this.cache.set(identifier, ctx);
      }
    }
  }, {
    key: "get",
    value: function get(identifier) {
      if (this.has(identifier)) return this.cache.get(identifier);
    }
  }, {
    key: "delete",
    value: function _delete(identifier) {
      this.cache.delete(identifier);
    }
  }]);
  return RuntimeCache;
}();
var _History_instances, _History_location, _History_stack, _History_cur, _History_window, _History_reset;
var cache$1 = new RuntimeCache('history');
var History = /*#__PURE__*/function (_Events) {
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__["default"])(History, _Events);
  var _super9 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__["default"])(History);
  function History(location, options) {
    var _this20;
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, History);
    _this20 = _super9.call(this);
    _History_instances.add((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this20));
    /* private property */
    _History_location.set((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this20), void 0);
    _History_stack.set((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this20), []);
    _History_cur.set((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this20), 0);
    _History_window.set((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this20), void 0);
    __classPrivateFieldSet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this20), _History_window, options.window, "f");
    __classPrivateFieldSet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this20), _History_location, location, "f");
    __classPrivateFieldGet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this20), _History_location, "f").on('__record_history__', function (href) {
      var _a;
      __classPrivateFieldSet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this20), _History_cur, (_a = __classPrivateFieldGet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this20), _History_cur, "f"), _a++, _a), "f");
      __classPrivateFieldSet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this20), _History_stack, __classPrivateFieldGet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this20), _History_stack, "f").slice(0, __classPrivateFieldGet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this20), _History_cur, "f")), "f");
      __classPrivateFieldGet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this20), _History_stack, "f").push({
        state: null,
        title: '',
        url: href
      });
    }, null);
    __classPrivateFieldGet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this20), _History_location, "f").on('__reset_history__', function (href) {
      __classPrivateFieldGet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this20), _History_instances, "m", _History_reset).call((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this20), href);
    }, null);
    // 切换上下文行为
    _this20.on(CONTEXT_ACTIONS.INIT, function () {
      __classPrivateFieldGet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this20), _History_instances, "m", _History_reset).call((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this20));
    }, null);
    _this20.on(CONTEXT_ACTIONS.RESTORE, function (pageId) {
      cache$1.set(pageId, {
        location: __classPrivateFieldGet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this20), _History_location, "f"),
        stack: __classPrivateFieldGet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this20), _History_stack, "f").slice(),
        cur: __classPrivateFieldGet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this20), _History_cur, "f")
      });
    }, null);
    _this20.on(CONTEXT_ACTIONS.RECOVER, function (pageId) {
      if (cache$1.has(pageId)) {
        var ctx = cache$1.get(pageId);
        __classPrivateFieldSet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this20), _History_location, ctx.location, "f");
        __classPrivateFieldSet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this20), _History_stack, ctx.stack, "f");
        __classPrivateFieldSet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this20), _History_cur, ctx.cur, "f");
      }
    }, null);
    _this20.on(CONTEXT_ACTIONS.DESTORY, function (pageId) {
      cache$1.delete(pageId);
    }, null);
    __classPrivateFieldGet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this20), _History_instances, "m", _History_reset).call((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this20));
    return _this20;
  }
  /* public property */
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(History, [{
    key: "length",
    get: function get() {
      return __classPrivateFieldGet(this, _History_stack, "f").length;
    }
  }, {
    key: "state",
    get: function get() {
      return __classPrivateFieldGet(this, _History_stack, "f")[__classPrivateFieldGet(this, _History_cur, "f")].state;
    }
    /* public method */
  }, {
    key: "go",
    value: function go(delta) {
      if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isNumber)(delta) || isNaN(delta)) return;
      var targetIdx = __classPrivateFieldGet(this, _History_cur, "f") + delta;
      targetIdx = Math.min(Math.max(targetIdx, 0), this.length - 1);
      __classPrivateFieldSet(this, _History_cur, targetIdx, "f");
      __classPrivateFieldGet(this, _History_location, "f").trigger('__set_href_without_history__', __classPrivateFieldGet(this, _History_stack, "f")[__classPrivateFieldGet(this, _History_cur, "f")].url);
      __classPrivateFieldGet(this, _History_window, "f").trigger('popstate', __classPrivateFieldGet(this, _History_stack, "f")[__classPrivateFieldGet(this, _History_cur, "f")]);
    }
  }, {
    key: "back",
    value: function back() {
      this.go(-1);
    }
  }, {
    key: "forward",
    value: function forward() {
      this.go(1);
    }
  }, {
    key: "pushState",
    value: function pushState(state, title, url) {
      if (!url || !(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(url)) return;
      __classPrivateFieldSet(this, _History_stack, __classPrivateFieldGet(this, _History_stack, "f").slice(0, __classPrivateFieldGet(this, _History_cur, "f") + 1), "f");
      __classPrivateFieldGet(this, _History_stack, "f").push({
        state: state,
        title: title,
        url: url
      });
      __classPrivateFieldSet(this, _History_cur, this.length - 1, "f");
      __classPrivateFieldGet(this, _History_location, "f").trigger('__set_href_without_history__', url);
    }
  }, {
    key: "replaceState",
    value: function replaceState(state, title, url) {
      if (!url || !(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(url)) return;
      __classPrivateFieldGet(this, _History_stack, "f")[__classPrivateFieldGet(this, _History_cur, "f")] = {
        state: state,
        title: title,
        url: url
      };
      __classPrivateFieldGet(this, _History_location, "f").trigger('__set_href_without_history__', url);
    }
    // For debug
  }, {
    key: "cache",
    get: function get() {
      return cache$1;
    }
  }]);
  return History;
}(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.Events);
_History_location = new WeakMap(), _History_stack = new WeakMap(), _History_cur = new WeakMap(), _History_window = new WeakMap(), _History_instances = new WeakSet(), _History_reset = function _History_reset() {
  var href = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  __classPrivateFieldSet(this, _History_stack, [{
    state: null,
    title: '',
    url: href || __classPrivateFieldGet(this, _History_location, "f").href
  }], "f");
  __classPrivateFieldSet(this, _History_cur, 0, "f");
};
var Current = {
  app: null,
  router: null,
  page: null
};
var getCurrentInstance = function getCurrentInstance() {
  return Current;
};
var _Location_instances, _Location_url, _Location_noCheckUrl, _Location_window, _Location_reset, _Location_getPreValue, _Location_rollBack, _Location_recordHistory, _Location_checkUrlChange;
var INIT_URL = 'https://taro.com';
var cache = new RuntimeCache('location');
var Location = /*#__PURE__*/function (_Events2) {
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Location, _Events2);
  var _super10 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Location);
  function Location(options) {
    var _this21;
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Location);
    _this21 = _super10.call(this);
    _Location_instances.add((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this21));
    /* private property */
    _Location_url.set((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this21), new URL(INIT_URL));
    _Location_noCheckUrl.set((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this21), false);
    _Location_window.set((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this21), void 0);
    __classPrivateFieldSet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this21), _Location_window, options.window, "f");
    __classPrivateFieldGet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this21), _Location_instances, "m", _Location_reset).call((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this21));
    _this21.on('__set_href_without_history__', function (href) {
      __classPrivateFieldSet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this21), _Location_noCheckUrl, true, "f");
      var lastHash = __classPrivateFieldGet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this21), _Location_url, "f").hash;
      __classPrivateFieldGet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this21), _Location_url, "f").href = generateFullUrl(href);
      if (lastHash !== __classPrivateFieldGet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this21), _Location_url, "f").hash) {
        __classPrivateFieldGet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this21), _Location_window, "f").trigger('hashchange');
      }
      __classPrivateFieldSet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this21), _Location_noCheckUrl, false, "f");
    }, null);
    // 切换上下文行为
    _this21.on(CONTEXT_ACTIONS.INIT, function () {
      __classPrivateFieldGet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this21), _Location_instances, "m", _Location_reset).call((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this21));
    }, null);
    _this21.on(CONTEXT_ACTIONS.RESTORE, function (pageId) {
      cache.set(pageId, {
        lastHref: _this21.href
      });
    }, null);
    _this21.on(CONTEXT_ACTIONS.RECOVER, function (pageId) {
      // 数据恢复时，不需要执行跳转
      if (cache.has(pageId)) {
        var ctx = cache.get(pageId);
        __classPrivateFieldSet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this21), _Location_noCheckUrl, true, "f");
        __classPrivateFieldGet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this21), _Location_url, "f").href = ctx.lastHref;
        __classPrivateFieldSet((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this21), _Location_noCheckUrl, false, "f");
      }
    }, null);
    _this21.on(CONTEXT_ACTIONS.DESTORY, function (pageId) {
      cache.delete(pageId);
    }, null);
    return _this21;
  }
  /* public property */
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Location, [{
    key: "protocol",
    get: function get() {
      return __classPrivateFieldGet(this, _Location_url, "f").protocol;
    },
    set: function set(val) {
      var REG = /^(http|https):$/i;
      if (!val || !(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(val) || !REG.test(val.trim())) return;
      val = val.trim();
      var preValue = __classPrivateFieldGet(this, _Location_instances, "m", _Location_getPreValue).call(this);
      __classPrivateFieldGet(this, _Location_url, "f").protocol = val;
      if (__classPrivateFieldGet(this, _Location_instances, "m", _Location_checkUrlChange).call(this, preValue)) __classPrivateFieldGet(this, _Location_instances, "m", _Location_recordHistory).call(this);
    }
  }, {
    key: "host",
    get: function get() {
      return __classPrivateFieldGet(this, _Location_url, "f").host;
    },
    set: function set(val) {
      if (!val || !(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(val)) return;
      val = val.trim();
      var preValue = __classPrivateFieldGet(this, _Location_instances, "m", _Location_getPreValue).call(this);
      __classPrivateFieldGet(this, _Location_url, "f").host = val;
      if (__classPrivateFieldGet(this, _Location_instances, "m", _Location_checkUrlChange).call(this, preValue)) __classPrivateFieldGet(this, _Location_instances, "m", _Location_recordHistory).call(this);
    }
  }, {
    key: "hostname",
    get: function get() {
      return __classPrivateFieldGet(this, _Location_url, "f").hostname;
    },
    set: function set(val) {
      if (!val || !(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(val)) return;
      val = val.trim();
      var preValue = __classPrivateFieldGet(this, _Location_instances, "m", _Location_getPreValue).call(this);
      __classPrivateFieldGet(this, _Location_url, "f").hostname = val;
      if (__classPrivateFieldGet(this, _Location_instances, "m", _Location_checkUrlChange).call(this, preValue)) __classPrivateFieldGet(this, _Location_instances, "m", _Location_recordHistory).call(this);
    }
  }, {
    key: "port",
    get: function get() {
      return __classPrivateFieldGet(this, _Location_url, "f").port;
    },
    set: function set(val) {
      var xVal = Number(val = val.trim());
      if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isNumber)(xVal) || xVal <= 0) return;
      var preValue = __classPrivateFieldGet(this, _Location_instances, "m", _Location_getPreValue).call(this);
      __classPrivateFieldGet(this, _Location_url, "f").port = val;
      if (__classPrivateFieldGet(this, _Location_instances, "m", _Location_checkUrlChange).call(this, preValue)) __classPrivateFieldGet(this, _Location_instances, "m", _Location_recordHistory).call(this);
    }
  }, {
    key: "pathname",
    get: function get() {
      return __classPrivateFieldGet(this, _Location_url, "f").pathname;
    },
    set: function set(val) {
      if (!val || !(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(val)) return;
      val = val.trim();
      var preValue = __classPrivateFieldGet(this, _Location_instances, "m", _Location_getPreValue).call(this);
      __classPrivateFieldGet(this, _Location_url, "f").pathname = val;
      if (__classPrivateFieldGet(this, _Location_instances, "m", _Location_checkUrlChange).call(this, preValue)) __classPrivateFieldGet(this, _Location_instances, "m", _Location_recordHistory).call(this);
    }
  }, {
    key: "search",
    get: function get() {
      return __classPrivateFieldGet(this, _Location_url, "f").search;
    },
    set: function set(val) {
      if (!val || !(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(val)) return;
      val = val.trim();
      val = val.startsWith('?') ? val : "?".concat(val);
      var preValue = __classPrivateFieldGet(this, _Location_instances, "m", _Location_getPreValue).call(this);
      __classPrivateFieldGet(this, _Location_url, "f").search = val;
      if (__classPrivateFieldGet(this, _Location_instances, "m", _Location_checkUrlChange).call(this, preValue)) __classPrivateFieldGet(this, _Location_instances, "m", _Location_recordHistory).call(this);
    }
  }, {
    key: "hash",
    get: function get() {
      return __classPrivateFieldGet(this, _Location_url, "f").hash;
    }
    // 小程序的navigateTo存在截断hash字符串的问题
    ,
    set: function set(val) {
      if (!val || !(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(val)) return;
      val = val.trim();
      val = val.startsWith('#') ? val : "#".concat(val);
      var preValue = __classPrivateFieldGet(this, _Location_instances, "m", _Location_getPreValue).call(this);
      __classPrivateFieldGet(this, _Location_url, "f").hash = val;
      if (__classPrivateFieldGet(this, _Location_instances, "m", _Location_checkUrlChange).call(this, preValue)) __classPrivateFieldGet(this, _Location_instances, "m", _Location_recordHistory).call(this);
    }
  }, {
    key: "href",
    get: function get() {
      return __classPrivateFieldGet(this, _Location_url, "f").href;
    },
    set: function set(val) {
      var REG = /^(http:|https:)?\/\/.+/;
      if (!val || !(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(val) || !REG.test(val = val.trim())) return;
      var preValue = __classPrivateFieldGet(this, _Location_instances, "m", _Location_getPreValue).call(this);
      __classPrivateFieldGet(this, _Location_url, "f").href = val;
      if (__classPrivateFieldGet(this, _Location_instances, "m", _Location_checkUrlChange).call(this, preValue)) __classPrivateFieldGet(this, _Location_instances, "m", _Location_recordHistory).call(this);
    }
  }, {
    key: "origin",
    get: function get() {
      return __classPrivateFieldGet(this, _Location_url, "f").origin;
    },
    set: function set(val) {
      var REG = /^(http:|https:)?\/\/.+/;
      if (!val || !(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(val) || !REG.test(val = val.trim())) return;
      var preValue = __classPrivateFieldGet(this, _Location_instances, "m", _Location_getPreValue).call(this);
      __classPrivateFieldGet(this, _Location_url, "f").origin = val;
      if (__classPrivateFieldGet(this, _Location_instances, "m", _Location_checkUrlChange).call(this, preValue)) __classPrivateFieldGet(this, _Location_instances, "m", _Location_recordHistory).call(this);
    }
    /* public method */
  }, {
    key: "assign",
    value: function assign() {
      (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.warn)(true, '小程序环境中调用location.assign()无效.');
    }
  }, {
    key: "reload",
    value: function reload() {
      (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.warn)(true, '小程序环境中调用location.reload()无效.');
    }
  }, {
    key: "replace",
    value: function replace(url) {
      this.trigger('__set_href_without_history__', url);
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.href;
    }
    // For debug
  }, {
    key: "cache",
    get: function get() {
      return cache;
    }
  }]);
  return Location;
}(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.Events);
_Location_url = new WeakMap(), _Location_noCheckUrl = new WeakMap(), _Location_window = new WeakMap(), _Location_instances = new WeakSet(), _Location_reset = function _Location_reset() {
  var Current = getCurrentInstance();
  var router = Current.router;
  if (router) {
    var path = router.path,
      params = router.params;
    var searchArr = Object.keys(params).map(function (key) {
      return "".concat(key, "=").concat(params[key]);
    });
    var searchStr = searchArr.length > 0 ? '?' + searchArr.join('&') : '';
    var url = "".concat(INIT_URL).concat(path.startsWith('/') ? path : '/' + path).concat(searchStr);
    __classPrivateFieldSet(this, _Location_url, new URL(url), "f");
    this.trigger('__reset_history__', this.href);
  }
}, _Location_getPreValue = function _Location_getPreValue() {
  return __classPrivateFieldGet(this, _Location_url, "f")._toRaw();
}, _Location_rollBack = function _Location_rollBack(href) {
  __classPrivateFieldGet(this, _Location_url, "f").href = href;
}, _Location_recordHistory = function _Location_recordHistory() {
  this.trigger('__record_history__', this.href);
}, _Location_checkUrlChange = function _Location_checkUrlChange(preValue) {
  if (__classPrivateFieldGet(this, _Location_noCheckUrl, "f")) {
    return false;
  }
  var _classPrivateFieldGe = __classPrivateFieldGet(this, _Location_url, "f")._toRaw(),
    protocol = _classPrivateFieldGe.protocol,
    hostname = _classPrivateFieldGe.hostname,
    port = _classPrivateFieldGe.port,
    pathname = _classPrivateFieldGe.pathname,
    search = _classPrivateFieldGe.search,
    hash = _classPrivateFieldGe.hash;
  // 跨域三要素不允许修改
  if (protocol !== preValue.protocol || hostname !== preValue.hostname || port !== preValue.port) {
    __classPrivateFieldGet(this, _Location_instances, "m", _Location_rollBack).call(this, preValue.href);
    return false;
  }
  // pathname
  if (pathname !== preValue.pathname) {
    return true;
  }
  // search
  if (search !== preValue.search) {
    return true;
  }
  // hashchange
  if (hash !== preValue.hash) {
    __classPrivateFieldGet(this, _Location_window, "f").trigger('hashchange');
    return true;
  }
  __classPrivateFieldGet(this, _Location_instances, "m", _Location_rollBack).call(this, preValue.href);
  return false;
};
function generateFullUrl() {
  var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var origin = INIT_URL;
  if (/^[/?#]/.test(val)) {
    return origin + val;
  }
  return val;
}
var machine = 'Macintosh';
var arch = 'Intel Mac OS X 10_14_5';
var engine = 'AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36';
var msg = '(' + machine + '; ' + arch + ') ' + engine;
var nav = (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isWebPlatform)() ? env.window.navigator : {
  appCodeName: 'Mozilla',
  appName: 'Netscape',
  appVersion: '5.0 ' + msg,
  cookieEnabled: true,
  mimeTypes: [],
  onLine: true,
  platform: 'MacIntel',
  plugins: [],
  product: 'Taro',
  productSub: '20030107',
  userAgent: 'Mozilla/5.0 ' + msg,
  vendor: 'Joyent',
  vendorSub: ''
};

// https://github.com/myrne/performance-now
var now;
(function () {
  var loadTime;
  if (typeof performance !== 'undefined' && performance !== null && performance.now) {
    now = function now() {
      return performance.now();
    };
  } else if (Date.now) {
    loadTime = Date.now();
    now = function now() {
      return Date.now() - loadTime;
    };
  } else {
    loadTime = new Date().getTime();
    now = function now() {
      return new Date().getTime() - loadTime;
    };
  }
})();
var lastTime = 0;
// https://gist.github.com/paulirish/1579671
// https://gist.github.com/jalbam/5fe05443270fa6d8136238ec72accbc0
var _raf = typeof requestAnimationFrame !== 'undefined' && requestAnimationFrame !== null ? requestAnimationFrame : function (callback) {
  var _now = now();
  var nextTime = Math.max(lastTime + 16, _now); // First time will execute it immediately but barely noticeable and performance is gained.
  return setTimeout(function () {
    callback(lastTime = nextTime);
  }, nextTime - _now);
};
var _caf = typeof cancelAnimationFrame !== 'undefined' && cancelAnimationFrame !== null ? cancelAnimationFrame : function (seed) {
  // fix https://github.com/NervJS/taro/issues/7749
  clearTimeout(seed);
};
var window$1;
if ( true && !(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isWebPlatform)()) {
  var Window = /*#__PURE__*/function (_Events3) {
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Window, _Events3);
    var _super11 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Window);
    function Window() {
      var _this22;
      (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Window);
      _this22 = _super11.call(this);
      _this22.navigator = nav;
      _this22.requestAnimationFrame = _raf;
      _this22.cancelAnimationFrame = _caf;
      _this22.getComputedStyle = getComputedStyle;
      var globalProperties = [].concat((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object.getOwnPropertyNames(__webpack_require__.g || {})), (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object.getOwnPropertySymbols(__webpack_require__.g || {})));
      globalProperties.forEach(function (property) {
        if (property === 'atob' || property === 'document') return;
        if (!Object.prototype.hasOwnProperty.call((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this22), property)) {
          // 防止小程序环境下，window 上的某些 get 属性在赋值时报错
          try {
            _this22[property] = __webpack_require__.g[property];
          } catch (e) {
            if (true) {
              console.warn("[Taro warn] window.".concat(String(property), " \u5728\u8D4B\u503C\u5230 window \u65F6\u62A5\u9519"));
            }
          }
        }
      });
      _this22.Date || (_this22.Date = Date);
      // 应用启动时，提供给需要读取历史信息的库使用
      _this22.location = new Location({
        window: (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this22)
      });
      _this22.history = new History(_this22.location, {
        window: (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this22)
      });
      _this22.initEvent();
      return _this22;
    }
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Window, [{
      key: "initEvent",
      value: function initEvent() {
        var _location = this.location;
        var _history = this.history;
        this.on(CONTEXT_ACTIONS.INIT, function (pageId) {
          // 页面onload，为该页面建立新的上下文信息
          _location.trigger(CONTEXT_ACTIONS.INIT, pageId);
        }, null);
        this.on(CONTEXT_ACTIONS.RECOVER, function (pageId) {
          // 页面onshow，恢复当前页面的上下文信息
          _location.trigger(CONTEXT_ACTIONS.RECOVER, pageId);
          _history.trigger(CONTEXT_ACTIONS.RECOVER, pageId);
        }, null);
        this.on(CONTEXT_ACTIONS.RESTORE, function (pageId) {
          // 页面onhide，缓存当前页面的上下文信息
          _location.trigger(CONTEXT_ACTIONS.RESTORE, pageId);
          _history.trigger(CONTEXT_ACTIONS.RESTORE, pageId);
        }, null);
        this.on(CONTEXT_ACTIONS.DESTORY, function (pageId) {
          // 页面onunload，清除当前页面的上下文信息
          _location.trigger(CONTEXT_ACTIONS.DESTORY, pageId);
          _history.trigger(CONTEXT_ACTIONS.DESTORY, pageId);
        }, null);
      }
    }, {
      key: "document",
      get: function get() {
        return env.document;
      }
    }, {
      key: "addEventListener",
      value: function addEventListener(event, callback) {
        if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(event)) return;
        this.on(event, callback, null);
      }
    }, {
      key: "removeEventListener",
      value: function removeEventListener(event, callback) {
        if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(event)) return;
        this.off(event, callback, null);
      }
    }, {
      key: "setTimeout",
      value: function (_setTimeout) {
        function setTimeout() {
          return _setTimeout.apply(this, arguments);
        }
        setTimeout.toString = function () {
          return _setTimeout.toString();
        };
        return setTimeout;
      }(function () {
        return setTimeout.apply(void 0, arguments);
      })
    }, {
      key: "clearTimeout",
      value: function (_clearTimeout) {
        function clearTimeout() {
          return _clearTimeout.apply(this, arguments);
        }
        clearTimeout.toString = function () {
          return _clearTimeout.toString();
        };
        return clearTimeout;
      }(function () {
        return clearTimeout.apply(void 0, arguments);
      })
    }]);
    return Window;
  }(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.Events);
  window$1 = env.window = new Window();
} else {
  window$1 = env.window;
}
var location = window$1.location;
var history = window$1.history;

// for Vue3
var SVGElement = /*#__PURE__*/function (_TaroElement5) {
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__["default"])(SVGElement, _TaroElement5);
  var _super12 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__["default"])(SVGElement);
  function SVGElement() {
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SVGElement);
    return _super12.apply(this, arguments);
  }
  return (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(SVGElement);
}(TaroElement);
/* eslint-disable dot-notation */
var instances = new Map();
var pageId = incrementId();
var isWeb = (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isWebPlatform)();
function injectPageInstance(inst, id) {
  _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('mergePageInstance', instances.get(id), inst);
  instances.set(id, inst);
}
function getPageInstance(id) {
  return instances.get(id);
}
function removePageInstance(id) {
  instances.delete(id);
}
function addLeadingSlash(path) {
  if (path == null) {
    return '';
  }
  return path.charAt(0) === '/' ? path : '/' + path;
}
function safeExecute(path, lifecycle) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  var instance = instances.get(path);
  if (instance == null) {
    return;
  }
  var func = _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('getLifecycle', instance, lifecycle);
  if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(func)) {
    var res = func.map(function (fn) {
      return fn.apply(instance, args);
    });
    return res[0];
  }
  if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(func)) {
    return;
  }
  return func.apply(instance, args);
}
function stringify(obj) {
  if (obj == null) {
    return '';
  }
  var path = Object.keys(obj).map(function (key) {
    return key + '=' + obj[key];
  }).join('&');
  return path === '' ? path : '?' + path;
}
function getPath(id, options) {
  var idx = id.indexOf('?');
  if (isWeb) {
    return "".concat(idx > -1 ? id.substring(0, idx) : id).concat(stringify((options === null || options === void 0 ? void 0 : options.stamp) ? {
      stamp: options.stamp
    } : {}));
  } else {
    return "".concat(idx > -1 ? id.substring(0, idx) : id).concat(stringify(options));
  }
}
function getOnReadyEventKey(path) {
  return path + '.' + ON_READY;
}
function getOnShowEventKey(path) {
  return path + '.' + ON_SHOW;
}
function getOnHideEventKey(path) {
  return path + '.' + ON_HIDE;
}
function createPageConfig(component, pageName, data, pageConfig) {
  var _config;
  // 小程序 Page 构造器是一个傲娇小公主，不能把复杂的对象挂载到参数上
  var id = pageName !== null && pageName !== void 0 ? pageName : "taro_page_".concat(pageId());
  var _hooks$call$page = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('getMiniLifecycleImpl').page, 7),
    ONLOAD = _hooks$call$page[0],
    ONUNLOAD = _hooks$call$page[1],
    ONREADY = _hooks$call$page[2],
    ONSHOW = _hooks$call$page[3],
    ONHIDE = _hooks$call$page[4],
    LIFECYCLES = _hooks$call$page[5],
    SIDE_EFFECT_LIFECYCLES = _hooks$call$page[6];
  var pageElement = null;
  var unmounting = false;
  var prepareMountList = [];
  function setCurrentRouter(page) {
    var router = isWeb ? page.$taroPath : page.route || page.__route__ || page.$taroPath;
    Current.router = {
      params: page.$taroParams,
      path: addLeadingSlash(router),
      $taroPath: page.$taroPath,
      onReady: getOnReadyEventKey(id),
      onShow: getOnShowEventKey(id),
      onHide: getOnHideEventKey(id)
    };
    if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(page.exitState)) {
      Current.router.exitState = page.exitState;
    }
  }
  var loadResolver;
  var hasLoaded;
  var config = (_config = {}, (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_config, ONLOAD, function () {
    var _this23 = this;
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var cb = arguments.length > 1 ? arguments[1] : undefined;
    hasLoaded = new Promise(function (resolve) {
      loadResolver = resolve;
    });
    perf.start(PAGE_INIT);
    Current.page = this;
    this.config = pageConfig || {};
    // this.$taroPath 是页面唯一标识
    var uniqueOptions = Object.assign({}, options, {
      $taroTimestamp: Date.now()
    });
    var $taroPath = this.$taroPath = getPath(id, uniqueOptions);
    if (isWeb) {
      config.path = $taroPath;
    }
    // this.$taroParams 作为暴露给开发者的页面参数对象，可以被随意修改
    if (this.$taroParams == null) {
      this.$taroParams = uniqueOptions;
    }
    setCurrentRouter(this);
    // 初始化当前页面的上下文信息
    if (!isWeb) {
      window$1.trigger(CONTEXT_ACTIONS.INIT, $taroPath);
    }
    var mount = function mount() {
      Current.app.mount(component, $taroPath, function () {
        pageElement = env.document.getElementById($taroPath);
        (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.ensure)(pageElement !== null, '没有找到页面实例。');
        safeExecute($taroPath, ON_LOAD, _this23.$taroParams);
        loadResolver();
        if (!isWeb) {
          pageElement.ctx = _this23;
          pageElement.performUpdate(true, cb);
        } else {
          (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(cb) && cb();
        }
      });
    };
    if (unmounting) {
      prepareMountList.push(mount);
    } else {
      mount();
    }
  }), (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_config, ONUNLOAD, function () {
    var $taroPath = this.$taroPath;
    // 销毁当前页面的上下文信息
    if (!isWeb) {
      window$1.trigger(CONTEXT_ACTIONS.DESTORY, $taroPath);
    }
    // 触发onUnload生命周期
    safeExecute($taroPath, ONUNLOAD);
    unmounting = true;
    Current.app.unmount($taroPath, function () {
      unmounting = false;
      instances.delete($taroPath);
      if (pageElement) {
        pageElement.ctx = null;
        pageElement = null;
      }
      if (prepareMountList.length) {
        prepareMountList.forEach(function (fn) {
          return fn();
        });
        prepareMountList = [];
      }
    });
  }), (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_config, ONREADY, function () {
    var _this24 = this;
    hasLoaded.then(function () {
      // 触发生命周期
      safeExecute(_this24.$taroPath, ON_READY);
      // 通过事件触发子组件的生命周期
      _raf(function () {
        return eventCenter.trigger(getOnReadyEventKey(id));
      });
      _this24.onReady.called = true;
    });
  }), (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_config, ONSHOW, function () {
    var _this25 = this;
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    hasLoaded.then(function () {
      // 设置 Current 的 page 和 router
      Current.page = _this25;
      setCurrentRouter(_this25);
      // 恢复上下文信息
      if (!isWeb) {
        window$1.trigger(CONTEXT_ACTIONS.RECOVER, _this25.$taroPath);
      }
      // 触发生命周期
      safeExecute(_this25.$taroPath, ON_SHOW, options);
      // 通过事件触发子组件的生命周期
      _raf(function () {
        return eventCenter.trigger(getOnShowEventKey(id));
      });
    });
  }), (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_config, ONHIDE, function () {
    // 缓存当前页面上下文信息
    if (!isWeb) {
      window$1.trigger(CONTEXT_ACTIONS.RESTORE, this.$taroPath);
    }
    // 设置 Current 的 page 和 router
    if (Current.page === this) {
      Current.page = null;
      Current.router = null;
    }
    // 触发生命周期
    safeExecute(this.$taroPath, ON_HIDE);
    // 通过事件触发子组件的生命周期
    eventCenter.trigger(getOnHideEventKey(id));
  }), _config);
  LIFECYCLES.forEach(function (lifecycle) {
    var isDefer = false;
    lifecycle = lifecycle.replace(/^defer:/, function () {
      isDefer = true;
      return '';
    });
    config[lifecycle] = function () {
      var _arguments = arguments,
        _this26 = this;
      var exec = function exec() {
        return safeExecute.apply(void 0, [_this26.$taroPath, lifecycle].concat((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_arguments)));
      };
      if (isDefer) {
        hasLoaded.then(exec);
      } else {
        return exec();
      }
    };
  });
  // onShareAppMessage 和 onShareTimeline 一样，会影响小程序右上方按钮的选项，因此不能默认注册。
  SIDE_EFFECT_LIFECYCLES.forEach(function (lifecycle) {
    var _a;
    if (component[lifecycle] || ((_a = component.prototype) === null || _a === void 0 ? void 0 : _a[lifecycle]) || component[lifecycle.replace(/^on/, 'enable')] || (pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig[lifecycle.replace(/^on/, 'enable')])) {
      config[lifecycle] = function () {
        var _a;
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        var target = (_a = args[0]) === null || _a === void 0 ? void 0 : _a.target;
        if (target === null || target === void 0 ? void 0 : target.id) {
          var _id = target.id;
          var element = env.document.getElementById(_id);
          if (element) {
            target.dataset = element.dataset;
          }
        }
        return safeExecute.apply(void 0, [this.$taroPath, lifecycle].concat(args));
      };
    }
  });
  config.eh = eventHandler;
  if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(data)) {
    config.data = data;
  }
  _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('modifyPageObject', config);
  return config;
}
function createComponentConfig(component, componentName, data) {
  var _config2;
  var id = componentName !== null && componentName !== void 0 ? componentName : "taro_component_".concat(pageId());
  var componentElement = null;
  var _hooks$call$component = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('getMiniLifecycleImpl').component, 2),
    ATTACHED = _hooks$call$component[0],
    DETACHED = _hooks$call$component[1];
  var config = (_config2 = {}, (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_config2, ATTACHED, function () {
    var _this27 = this;
    var _a;
    perf.start(PAGE_INIT);
    this.pageIdCache = ((_a = this.getPageId) === null || _a === void 0 ? void 0 : _a.call(this)) || pageId();
    var path = getPath(id, {
      id: this.pageIdCache
    });
    Current.app.mount(component, path, function () {
      componentElement = env.document.getElementById(path);
      (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.ensure)(componentElement !== null, '没有找到组件实例。');
      _this27.$taroInstances = instances.get(path);
      safeExecute(path, ON_LOAD);
      if (!isWeb) {
        componentElement.ctx = _this27;
        componentElement.performUpdate(true);
      }
    });
  }), (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_config2, DETACHED, function () {
    var path = getPath(id, {
      id: this.pageIdCache
    });
    Current.app.unmount(path, function () {
      instances.delete(path);
      if (componentElement) {
        componentElement.ctx = null;
      }
    });
  }), (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_config2, "methods", {
    eh: eventHandler
  }), _config2);
  if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(data)) {
    config.data = data;
  }
  [OPTIONS, EXTERNAL_CLASSES, BEHAVIORS].forEach(function (key) {
    var _a;
    config[key] = (_a = component[key]) !== null && _a !== void 0 ? _a : _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.EMPTY_OBJ;
  });
  return config;
}
function createRecursiveComponentConfig(componentName) {
  var _ref3;
  var isCustomWrapper = componentName === CUSTOM_WRAPPER;
  var _hooks$call$component2 = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('getMiniLifecycleImpl').component, 2),
    ATTACHED = _hooks$call$component2[0],
    DETACHED = _hooks$call$component2[1];
  var lifeCycles = isCustomWrapper ? (_ref3 = {}, (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref3, ATTACHED, function () {
    var _a, _b;
    var componentId = ((_a = this.data.i) === null || _a === void 0 ? void 0 : _a.sid) || ((_b = this.props.i) === null || _b === void 0 ? void 0 : _b.sid);
    if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(componentId)) {
      customWrapperCache.set(componentId, this);
      var el = env.document.getElementById(componentId);
      if (el) {
        el.ctx = this;
      }
    }
  }), (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref3, DETACHED, function () {
    var _a, _b;
    var componentId = ((_a = this.data.i) === null || _a === void 0 ? void 0 : _a.sid) || ((_b = this.props.i) === null || _b === void 0 ? void 0 : _b.sid);
    if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(componentId)) {
      customWrapperCache.delete(componentId);
      var el = env.document.getElementById(componentId);
      if (el) {
        el.ctx = null;
      }
    }
  }), _ref3) : _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.EMPTY_OBJ;
  return Object.assign({
    properties: {
      i: {
        type: Object,
        value: (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])({}, "nn" /* Shortcuts.NodeName */, (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.getComponentsAlias)(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.internalComponents)[VIEW]._num)
      },
      l: {
        type: String,
        value: ''
      }
    },
    options: {
      addGlobalClass: true,
      virtualHost: !isCustomWrapper
    },
    methods: {
      eh: eventHandler
    }
  }, lifeCycles);
}
var TIMEOUT = 100;
var nextTick = function nextTick(cb, ctx) {
  var beginTime = Date.now();
  var router = Current.router;
  var timerFunc = function timerFunc() {
    setTimeout(function () {
      ctx ? cb.call(ctx) : cb();
    }, 1);
  };
  if (router === null) return timerFunc();
  var path = router.$taroPath;
  /**
   * 三种情况
   *   1. 调用 nextTick 时，pendingUpdate 已经从 true 变为 false（即已更新完成），那么需要光等 100ms
   *   2. 调用 nextTick 时，pendingUpdate 为 true，那么刚好可以搭上便车
   *   3. 调用 nextTick 时，pendingUpdate 还是 false，框架仍未启动更新逻辑，这时最多轮询 100ms，等待 pendingUpdate 变为 true。
   */
  function next() {
    var _a, _b, _c;
    var pageElement = env.document.getElementById(path);
    if (pageElement === null || pageElement === void 0 ? void 0 : pageElement.pendingUpdate) {
      if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.isWebPlatform)()) {
        // eslint-disable-next-line dot-notation
        (_c = (_b = (_a = pageElement.firstChild) === null || _a === void 0 ? void 0 : _a['componentOnReady']) === null || _b === void 0 ? void 0 : _b.call(_a).then(function () {
          timerFunc();
        })) !== null && _c !== void 0 ? _c : timerFunc();
      } else {
        pageElement.enqueueUpdateCallback(cb, ctx);
      }
    } else if (Date.now() - beginTime > TIMEOUT) {
      timerFunc();
    } else {
      setTimeout(function () {
        return next();
      }, 20);
    }
  }
  next();
};


/***/ }),

/***/ "./node_modules/.pnpm/@tarojs+shared@3.6.17/node_modules/@tarojs/shared/dist/shared.esm.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tarojs+shared@3.6.17/node_modules/@tarojs/shared/dist/shared.esm.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_OBJ: function() { return /* binding */ EMPTY_OBJ; },
/* harmony export */   Events: function() { return /* binding */ Events; },
/* harmony export */   capitalize: function() { return /* binding */ capitalize; },
/* harmony export */   controlledComponent: function() { return /* binding */ controlledComponent; },
/* harmony export */   ensure: function() { return /* binding */ ensure; },
/* harmony export */   getComponentsAlias: function() { return /* binding */ getComponentsAlias; },
/* harmony export */   hooks: function() { return /* binding */ hooks; },
/* harmony export */   internalComponents: function() { return /* binding */ internalComponents; },
/* harmony export */   isArray: function() { return /* binding */ isArray; },
/* harmony export */   isBoolean: function() { return /* binding */ isBoolean; },
/* harmony export */   isFunction: function() { return /* binding */ isFunction; },
/* harmony export */   isNull: function() { return /* binding */ isNull; },
/* harmony export */   isNumber: function() { return /* binding */ isNumber; },
/* harmony export */   isObject: function() { return /* binding */ isObject; },
/* harmony export */   isString: function() { return /* binding */ isString; },
/* harmony export */   isUndefined: function() { return /* binding */ isUndefined; },
/* harmony export */   isWebPlatform: function() { return /* binding */ isWebPlatform; },
/* harmony export */   mergeInternalComponents: function() { return /* binding */ mergeInternalComponents; },
/* harmony export */   mergeReconciler: function() { return /* binding */ mergeReconciler; },
/* harmony export */   noop: function() { return /* binding */ noop; },
/* harmony export */   processApis: function() { return /* binding */ processApis; },
/* harmony export */   toCamelCase: function() { return /* binding */ toCamelCase; },
/* harmony export */   toDashed: function() { return /* binding */ toDashed; },
/* harmony export */   warn: function() { return /* binding */ warn; }
/* harmony export */ });
/* unused harmony exports EMPTY_ARR, HOOK_TYPE, PLATFORM_CONFIG_MAP, PLATFORM_TYPE, TaroHook, TaroHooks, animation, box, cacheDataGet, cacheDataHas, cacheDataSet, focusComponents, getPlatformType, getUniqueKey, hasOwn, indent, isBooleanStringLiteral, nestElements, nonsupport, queryToJson, setUniqueKeyToRoute, singleQuote, toKebabCase, touchEvents, unbox, voidElements */
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/createClass.js");






var DEFAULT_EMPTY_ARRAY = '[]';
var NO_DEFAULT_VALUE = '';
var DEFAULT_TRUE = '!0';
var DEFAULT_FALSE = '!1';
var touchEvents = {
  bindTouchStart: NO_DEFAULT_VALUE,
  bindTouchMove: NO_DEFAULT_VALUE,
  bindTouchEnd: NO_DEFAULT_VALUE,
  bindTouchCancel: NO_DEFAULT_VALUE,
  bindLongTap: NO_DEFAULT_VALUE
};
var animation = {
  animation: NO_DEFAULT_VALUE,
  bindAnimationStart: NO_DEFAULT_VALUE,
  bindAnimationIteration: NO_DEFAULT_VALUE,
  bindAnimationEnd: NO_DEFAULT_VALUE,
  bindTransitionEnd: NO_DEFAULT_VALUE
};
function singleQuote(s) {
  return "'".concat(s, "'");
}
var View = Object.assign(Object.assign({
  'hover-class': singleQuote('none'),
  'hover-stop-propagation': DEFAULT_FALSE,
  'hover-start-time': '50',
  'hover-stay-time': '400'
}, touchEvents), animation);
var Icon = {
  type: NO_DEFAULT_VALUE,
  size: '23',
  color: NO_DEFAULT_VALUE
};
var MapComp = Object.assign({
  longitude: NO_DEFAULT_VALUE,
  latitude: NO_DEFAULT_VALUE,
  scale: '16',
  markers: DEFAULT_EMPTY_ARRAY,
  covers: NO_DEFAULT_VALUE,
  polyline: DEFAULT_EMPTY_ARRAY,
  circles: DEFAULT_EMPTY_ARRAY,
  controls: DEFAULT_EMPTY_ARRAY,
  'include-points': DEFAULT_EMPTY_ARRAY,
  'show-location': NO_DEFAULT_VALUE,
  'layer-style': '1',
  bindMarkerTap: NO_DEFAULT_VALUE,
  bindControlTap: NO_DEFAULT_VALUE,
  bindCalloutTap: NO_DEFAULT_VALUE,
  bindUpdated: NO_DEFAULT_VALUE
}, touchEvents);
var Progress = {
  percent: NO_DEFAULT_VALUE,
  'stroke-width': '6',
  color: singleQuote('#09BB07'),
  activeColor: singleQuote('#09BB07'),
  backgroundColor: singleQuote('#EBEBEB'),
  active: DEFAULT_FALSE,
  'active-mode': singleQuote('backwards'),
  'show-info': DEFAULT_FALSE
};
var RichText = {
  nodes: DEFAULT_EMPTY_ARRAY
};
var Text = {
  selectable: DEFAULT_FALSE,
  space: NO_DEFAULT_VALUE,
  decode: DEFAULT_FALSE
};
var Button = Object.assign({
  size: singleQuote('default'),
  type: NO_DEFAULT_VALUE,
  plain: DEFAULT_FALSE,
  disabled: NO_DEFAULT_VALUE,
  loading: DEFAULT_FALSE,
  'form-type': NO_DEFAULT_VALUE,
  'open-type': NO_DEFAULT_VALUE,
  'hover-class': singleQuote('button-hover'),
  'hover-stop-propagation': DEFAULT_FALSE,
  'hover-start-time': '20',
  'hover-stay-time': '70',
  name: NO_DEFAULT_VALUE,
  bindagreeprivacyauthorization: NO_DEFAULT_VALUE
}, touchEvents);
var Checkbox = {
  value: NO_DEFAULT_VALUE,
  disabled: NO_DEFAULT_VALUE,
  checked: DEFAULT_FALSE,
  color: singleQuote('#09BB07'),
  name: NO_DEFAULT_VALUE
};
var CheckboxGroup = {
  bindChange: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
var Form = {
  'report-submit': DEFAULT_FALSE,
  bindSubmit: NO_DEFAULT_VALUE,
  bindReset: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
var Input = {
  value: NO_DEFAULT_VALUE,
  type: singleQuote(NO_DEFAULT_VALUE),
  password: DEFAULT_FALSE,
  placeholder: NO_DEFAULT_VALUE,
  'placeholder-style': NO_DEFAULT_VALUE,
  'placeholder-class': singleQuote('input-placeholder'),
  disabled: NO_DEFAULT_VALUE,
  maxlength: '140',
  'cursor-spacing': '0',
  focus: DEFAULT_FALSE,
  'confirm-type': singleQuote('done'),
  'confirm-hold': DEFAULT_FALSE,
  cursor: '-1',
  'selection-start': '-1',
  'selection-end': '-1',
  bindInput: NO_DEFAULT_VALUE,
  bindFocus: NO_DEFAULT_VALUE,
  bindBlur: NO_DEFAULT_VALUE,
  bindConfirm: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
var Label = {
  for: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
var Picker = {
  mode: singleQuote('selector'),
  disabled: NO_DEFAULT_VALUE,
  range: NO_DEFAULT_VALUE,
  'range-key': NO_DEFAULT_VALUE,
  value: NO_DEFAULT_VALUE,
  start: NO_DEFAULT_VALUE,
  end: NO_DEFAULT_VALUE,
  fields: singleQuote('day'),
  'custom-item': NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE,
  bindCancel: NO_DEFAULT_VALUE,
  bindChange: NO_DEFAULT_VALUE,
  bindColumnChange: NO_DEFAULT_VALUE
};
var PickerView = {
  value: NO_DEFAULT_VALUE,
  'indicator-style': NO_DEFAULT_VALUE,
  'indicator-class': NO_DEFAULT_VALUE,
  'mask-style': NO_DEFAULT_VALUE,
  'mask-class': NO_DEFAULT_VALUE,
  bindChange: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
var PickerViewColumn = {
  name: NO_DEFAULT_VALUE
};
var Radio = {
  value: NO_DEFAULT_VALUE,
  checked: DEFAULT_FALSE,
  disabled: NO_DEFAULT_VALUE,
  color: singleQuote('#09BB07'),
  name: NO_DEFAULT_VALUE
};
var RadioGroup = {
  bindChange: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
var Slider = {
  min: '0',
  max: '100',
  step: '1',
  disabled: NO_DEFAULT_VALUE,
  value: '0',
  activeColor: singleQuote('#1aad19'),
  backgroundColor: singleQuote('#e9e9e9'),
  'block-size': '28',
  'block-color': singleQuote('#ffffff'),
  'show-value': DEFAULT_FALSE,
  bindChange: NO_DEFAULT_VALUE,
  bindChanging: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
var Switch = {
  checked: DEFAULT_FALSE,
  disabled: NO_DEFAULT_VALUE,
  type: singleQuote('switch'),
  color: singleQuote('#04BE02'),
  bindChange: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
var Textarea = {
  value: NO_DEFAULT_VALUE,
  placeholder: NO_DEFAULT_VALUE,
  'placeholder-style': NO_DEFAULT_VALUE,
  'placeholder-class': singleQuote('textarea-placeholder'),
  disabled: NO_DEFAULT_VALUE,
  maxlength: '140',
  'auto-focus': DEFAULT_FALSE,
  focus: DEFAULT_FALSE,
  'auto-height': DEFAULT_FALSE,
  fixed: DEFAULT_FALSE,
  'cursor-spacing': '0',
  cursor: '-1',
  'selection-start': '-1',
  'selection-end': '-1',
  bindFocus: NO_DEFAULT_VALUE,
  bindBlur: NO_DEFAULT_VALUE,
  bindLineChange: NO_DEFAULT_VALUE,
  bindInput: NO_DEFAULT_VALUE,
  bindConfirm: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
var CoverImage = {
  src: NO_DEFAULT_VALUE,
  bindLoad: 'eh',
  bindError: 'eh'
};
var CoverView = Object.assign({
  'scroll-top': DEFAULT_FALSE
}, touchEvents);
var MovableArea = {
  'scale-area': DEFAULT_FALSE
};
var MovableView = Object.assign(Object.assign({
  direction: 'none',
  inertia: DEFAULT_FALSE,
  'out-of-bounds': DEFAULT_FALSE,
  x: NO_DEFAULT_VALUE,
  y: NO_DEFAULT_VALUE,
  damping: '20',
  friction: '2',
  disabled: NO_DEFAULT_VALUE,
  scale: DEFAULT_FALSE,
  'scale-min': '0.5',
  'scale-max': '10',
  'scale-value': '1',
  bindChange: NO_DEFAULT_VALUE,
  bindScale: NO_DEFAULT_VALUE,
  bindHTouchMove: NO_DEFAULT_VALUE,
  bindVTouchMove: NO_DEFAULT_VALUE,
  width: singleQuote('10px'),
  height: singleQuote('10px')
}, touchEvents), animation);
var ScrollView = Object.assign(Object.assign({
  'scroll-x': DEFAULT_FALSE,
  'scroll-y': DEFAULT_FALSE,
  'upper-threshold': '50',
  'lower-threshold': '50',
  'scroll-top': NO_DEFAULT_VALUE,
  'scroll-left': NO_DEFAULT_VALUE,
  'scroll-into-view': NO_DEFAULT_VALUE,
  'scroll-with-animation': DEFAULT_FALSE,
  'enable-back-to-top': DEFAULT_FALSE,
  bindScrollToUpper: NO_DEFAULT_VALUE,
  bindScrollToLower: NO_DEFAULT_VALUE,
  bindScroll: NO_DEFAULT_VALUE
}, touchEvents), animation);
var Swiper = Object.assign({
  'indicator-dots': DEFAULT_FALSE,
  'indicator-color': singleQuote('rgba(0, 0, 0, .3)'),
  'indicator-active-color': singleQuote('#000000'),
  autoplay: DEFAULT_FALSE,
  current: '0',
  interval: '5000',
  duration: '500',
  circular: DEFAULT_FALSE,
  vertical: DEFAULT_FALSE,
  'previous-margin': singleQuote('0px'),
  'next-margin': singleQuote('0px'),
  'display-multiple-items': '1',
  bindChange: NO_DEFAULT_VALUE,
  bindTransition: NO_DEFAULT_VALUE,
  bindAnimationFinish: NO_DEFAULT_VALUE
}, touchEvents);
var SwiperItem = {
  'item-id': NO_DEFAULT_VALUE
};
var Navigator = {
  url: NO_DEFAULT_VALUE,
  'open-type': singleQuote('navigate'),
  delta: '1',
  'hover-class': singleQuote('navigator-hover'),
  'hover-stop-propagation': DEFAULT_FALSE,
  'hover-start-time': '50',
  'hover-stay-time': '600',
  bindSuccess: NO_DEFAULT_VALUE,
  bindFail: NO_DEFAULT_VALUE,
  bindComplete: NO_DEFAULT_VALUE
};
var Audio = {
  id: NO_DEFAULT_VALUE,
  src: NO_DEFAULT_VALUE,
  loop: DEFAULT_FALSE,
  controls: DEFAULT_FALSE,
  poster: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE,
  author: NO_DEFAULT_VALUE,
  bindError: NO_DEFAULT_VALUE,
  bindPlay: NO_DEFAULT_VALUE,
  bindPause: NO_DEFAULT_VALUE,
  bindTimeUpdate: NO_DEFAULT_VALUE,
  bindEnded: NO_DEFAULT_VALUE
};
var Camera = {
  'device-position': singleQuote('back'),
  flash: singleQuote('auto'),
  bindStop: NO_DEFAULT_VALUE,
  bindError: NO_DEFAULT_VALUE
};
var Image = Object.assign({
  src: NO_DEFAULT_VALUE,
  mode: singleQuote('scaleToFill'),
  'lazy-load': DEFAULT_FALSE,
  bindError: NO_DEFAULT_VALUE,
  bindLoad: NO_DEFAULT_VALUE
}, touchEvents);
var LivePlayer = Object.assign({
  src: NO_DEFAULT_VALUE,
  autoplay: DEFAULT_FALSE,
  muted: DEFAULT_FALSE,
  orientation: singleQuote('vertical'),
  'object-fit': singleQuote('contain'),
  'background-mute': DEFAULT_FALSE,
  'min-cache': '1',
  'max-cache': '3',
  bindStateChange: NO_DEFAULT_VALUE,
  bindFullScreenChange: NO_DEFAULT_VALUE,
  bindNetStatus: NO_DEFAULT_VALUE
}, animation);
var Video = Object.assign({
  src: NO_DEFAULT_VALUE,
  duration: NO_DEFAULT_VALUE,
  controls: DEFAULT_TRUE,
  'danmu-list': NO_DEFAULT_VALUE,
  'danmu-btn': NO_DEFAULT_VALUE,
  'enable-danmu': NO_DEFAULT_VALUE,
  autoplay: DEFAULT_FALSE,
  loop: DEFAULT_FALSE,
  muted: DEFAULT_FALSE,
  'initial-time': '0',
  'page-gesture': DEFAULT_FALSE,
  direction: NO_DEFAULT_VALUE,
  'show-progress': DEFAULT_TRUE,
  'show-fullscreen-btn': DEFAULT_TRUE,
  'show-play-btn': DEFAULT_TRUE,
  'show-center-play-btn': DEFAULT_TRUE,
  'enable-progress-gesture': DEFAULT_TRUE,
  'object-fit': singleQuote('contain'),
  poster: NO_DEFAULT_VALUE,
  'show-mute-btn': DEFAULT_FALSE,
  bindPlay: NO_DEFAULT_VALUE,
  bindPause: NO_DEFAULT_VALUE,
  bindEnded: NO_DEFAULT_VALUE,
  bindTimeUpdate: NO_DEFAULT_VALUE,
  bindFullScreenChange: NO_DEFAULT_VALUE,
  bindWaiting: NO_DEFAULT_VALUE,
  bindError: NO_DEFAULT_VALUE
}, animation);
var Canvas = Object.assign({
  'canvas-id': NO_DEFAULT_VALUE,
  'disable-scroll': DEFAULT_FALSE,
  bindError: NO_DEFAULT_VALUE
}, touchEvents);
var Ad = {
  'unit-id': NO_DEFAULT_VALUE,
  'ad-intervals': NO_DEFAULT_VALUE,
  bindLoad: NO_DEFAULT_VALUE,
  bindError: NO_DEFAULT_VALUE,
  bindClose: NO_DEFAULT_VALUE
};
var WebView = {
  src: NO_DEFAULT_VALUE,
  bindMessage: NO_DEFAULT_VALUE,
  bindLoad: NO_DEFAULT_VALUE,
  bindError: NO_DEFAULT_VALUE
};
var Block = {};
// For Vue，因为 slot 标签被 vue 占用了
var SlotView = {
  name: NO_DEFAULT_VALUE
};
// For React
// Slot 和 SlotView 最终都会编译成 <view slot={{ i.name }} />
// 因为 <slot name="{{ i.name }}" /> 适用性没有前者高（无法添加类和样式）
// 不给 View 直接加 slot 属性的原因是性能损耗
var Slot = {
  name: NO_DEFAULT_VALUE
};
var NativeSlot = {
  name: NO_DEFAULT_VALUE
};
var internalComponents = {
  View: View,
  Icon: Icon,
  Progress: Progress,
  RichText: RichText,
  Text: Text,
  Button: Button,
  Checkbox: Checkbox,
  CheckboxGroup: CheckboxGroup,
  Form: Form,
  Input: Input,
  Label: Label,
  Picker: Picker,
  PickerView: PickerView,
  PickerViewColumn: PickerViewColumn,
  Radio: Radio,
  RadioGroup: RadioGroup,
  Slider: Slider,
  Switch: Switch,
  CoverImage: CoverImage,
  Textarea: Textarea,
  CoverView: CoverView,
  MovableArea: MovableArea,
  MovableView: MovableView,
  ScrollView: ScrollView,
  Swiper: Swiper,
  SwiperItem: SwiperItem,
  Navigator: Navigator,
  Audio: Audio,
  Camera: Camera,
  Image: Image,
  LivePlayer: LivePlayer,
  Video: Video,
  Canvas: Canvas,
  Ad: Ad,
  WebView: WebView,
  Block: Block,
  Map: MapComp,
  Slot: Slot,
  SlotView: SlotView,
  NativeSlot: NativeSlot
};
var controlledComponent = new Set(['input', 'checkbox', 'picker', 'picker-view', 'radio', 'slider', 'switch', 'textarea']);
var focusComponents = new Set(['input', 'textarea']);
var voidElements = new Set(['progress', 'icon', 'rich-text', 'input', 'textarea', 'slider', 'switch', 'audio', 'ad', 'official-account', 'open-data', 'navigation-bar']);
var nestElements = new Map([['view', -1], ['catch-view', -1], ['cover-view', -1], ['static-view', -1], ['pure-view', -1], ['block', -1], ['text', -1], ['static-text', 6], ['slot', 8], ['slot-view', 8], ['label', 6], ['form', 4], ['scroll-view', 4], ['swiper', 4], ['swiper-item', 4]]);
var PLATFORM_TYPE;
(function (PLATFORM_TYPE) {
  PLATFORM_TYPE["MINI"] = "mini";
  PLATFORM_TYPE["WEB"] = "web";
  PLATFORM_TYPE["RN"] = "rn";
  PLATFORM_TYPE["HARMONY"] = "harmony";
  PLATFORM_TYPE["QUICK"] = "quickapp";
})(PLATFORM_TYPE || (PLATFORM_TYPE = {}));
var PLATFORM_CONFIG_MAP = {
  h5: {
    type: PLATFORM_TYPE.WEB
  },
  harmony: {
    type: PLATFORM_TYPE.HARMONY
  },
  mini: {
    type: PLATFORM_TYPE.MINI
  },
  rn: {
    type: PLATFORM_TYPE.RN
  },
  quickapp: {
    type: PLATFORM_TYPE.QUICK
  }
};
var Events = /*#__PURE__*/function () {
  function Events(opts) {
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Events);
    var _a;
    this.callbacks = (_a = opts === null || opts === void 0 ? void 0 : opts.callbacks) !== null && _a !== void 0 ? _a : {};
  }
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Events, [{
    key: "on",
    value: function on(eventName, callback, context) {
      var event, tail, _eventName;
      if (!callback) {
        return this;
      }
      if ((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(eventName) === 'symbol') {
        _eventName = [eventName];
      } else {
        _eventName = eventName.split(Events.eventSplitter);
      }
      this.callbacks || (this.callbacks = {});
      var calls = this.callbacks;
      while (event = _eventName.shift()) {
        var list = calls[event];
        var node = list ? list.tail : {};
        node.next = tail = {};
        node.context = context;
        node.callback = callback;
        calls[event] = {
          tail: tail,
          next: list ? list.next : node
        };
      }
      return this;
    }
  }, {
    key: "once",
    value: function once(events, callback, context) {
      var _this = this;
      var wrapper = function wrapper() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        callback.apply(_this, args);
        _this.off(events, wrapper, context);
      };
      this.on(events, wrapper, context);
      return this;
    }
  }, {
    key: "off",
    value: function off(events, callback, context) {
      var event, calls, _events;
      if (!(calls = this.callbacks)) {
        return this;
      }
      if (!(events || callback || context)) {
        delete this.callbacks;
        return this;
      }
      if ((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(events) === 'symbol') {
        _events = [events];
      } else {
        _events = events ? events.split(Events.eventSplitter) : Object.keys(calls);
      }
      while (event = _events.shift()) {
        var node = calls[event];
        delete calls[event];
        if (!node || !(callback || context)) {
          continue;
        }
        var tail = node.tail;
        while ((node = node.next) !== tail) {
          var cb = node.callback;
          var ctx = node.context;
          if (callback && cb !== callback || context && ctx !== context) {
            this.on(event, cb, ctx);
          }
        }
      }
      return this;
    }
  }, {
    key: "trigger",
    value: function trigger(events) {
      var event, node, calls, _events;
      if (!(calls = this.callbacks)) {
        return this;
      }
      if ((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(events) === 'symbol') {
        _events = [events];
      } else {
        _events = events.split(Events.eventSplitter);
      }
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      while (event = _events.shift()) {
        if (node = calls[event]) {
          var tail = node.tail;
          while ((node = node.next) !== tail) {
            node.callback.apply(node.context || this, args);
          }
        }
      }
      return this;
    }
  }]);
  return Events;
}();
Events.eventSplitter = ','; // Note: Harmony ACE API 8 开发板不支持使用正则 split 字符串 /\s+/

function isString(o) {
  return typeof o === 'string';
}
function isUndefined(o) {
  return typeof o === 'undefined';
}
function isNull(o) {
  return o === null;
}
function isObject(o) {
  return o !== null && (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(o) === 'object';
}
function isBoolean(o) {
  return o === true || o === false;
}
function isFunction(o) {
  return typeof o === 'function';
}
function isNumber(o) {
  return typeof o === 'number';
}
function isBooleanStringLiteral(o) {
  return o === 'true' || o === 'false';
}
var isArray = Array.isArray;
var isWebPlatform = function isWebPlatform() {
  return  false || "mini" === 'web';
};
var HOOK_TYPE;
(function (HOOK_TYPE) {
  HOOK_TYPE[HOOK_TYPE["SINGLE"] = 0] = "SINGLE";
  HOOK_TYPE[HOOK_TYPE["MULTI"] = 1] = "MULTI";
  HOOK_TYPE[HOOK_TYPE["WATERFALL"] = 2] = "WATERFALL";
})(HOOK_TYPE || (HOOK_TYPE = {}));
var defaultMiniLifecycle = {
  app: ['onLaunch', 'onShow', 'onHide'],
  page: ['onLoad', 'onUnload', 'onReady', 'onShow', 'onHide', ['onPullDownRefresh', 'onReachBottom', 'onPageScroll', 'onResize', 'defer:onTabItemTap', 'onTitleClick', 'onOptionMenuClick', 'onPopMenuClick', 'onPullIntercept', 'onAddToFavorites'], ['onShareAppMessage', 'onShareTimeline']],
  component: ['attached', 'detached']
};
function TaroHook(type, initial) {
  return {
    type: type,
    initial: initial || null
  };
}
var TaroHooks = /*#__PURE__*/function (_Events) {
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__["default"])(TaroHooks, _Events);
  var _super = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(TaroHooks);
  function TaroHooks(hooks, opts) {
    var _this2;
    (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TaroHooks);
    _this2 = _super.call(this, opts);
    _this2.hooks = hooks;
    for (var hookName in hooks) {
      var initial = hooks[hookName].initial;
      if (isFunction(initial)) {
        _this2.on(hookName, initial);
      }
    }
    return _this2;
  }
  (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TaroHooks, [{
    key: "tapOneOrMany",
    value: function tapOneOrMany(hookName, callback) {
      var _this3 = this;
      var list = isFunction(callback) ? [callback] : callback;
      list.forEach(function (cb) {
        return _this3.on(hookName, cb);
      });
    }
  }, {
    key: "tap",
    value: function tap(hookName, callback) {
      var hooks = this.hooks;
      var _hooks$hookName = hooks[hookName],
        type = _hooks$hookName.type,
        initial = _hooks$hookName.initial;
      if (type === HOOK_TYPE.SINGLE) {
        this.off(hookName);
        this.on(hookName, isFunction(callback) ? callback : callback[callback.length - 1]);
      } else {
        initial && this.off(hookName, initial);
        this.tapOneOrMany(hookName, callback);
      }
    }
  }, {
    key: "call",
    value: function call(hookName) {
      var _a;
      var hook = this.hooks[hookName];
      if (!hook) return;
      var type = hook.type;
      var calls = this.callbacks;
      if (!calls) return;
      var list = calls[hookName];
      if (list) {
        var tail = list.tail;
        var node = list.next;
        for (var _len3 = arguments.length, rest = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          rest[_key3 - 1] = arguments[_key3];
        }
        var args = rest;
        var res;
        while (node !== tail) {
          res = (_a = node.callback) === null || _a === void 0 ? void 0 : _a.apply(node.context || this, args);
          if (type === HOOK_TYPE.WATERFALL) {
            var params = [res];
            args = params;
          }
          node = node.next;
        }
        return res;
      }
    }
  }, {
    key: "isExist",
    value: function isExist(hookName) {
      var _a;
      return Boolean((_a = this.callbacks) === null || _a === void 0 ? void 0 : _a[hookName]);
    }
  }]);
  return TaroHooks;
}(Events);
var hooks = new TaroHooks({
  getMiniLifecycle: TaroHook(HOOK_TYPE.SINGLE, function (defaultConfig) {
    return defaultConfig;
  }),
  getMiniLifecycleImpl: TaroHook(HOOK_TYPE.SINGLE, function () {
    return this.call('getMiniLifecycle', defaultMiniLifecycle);
  }),
  getLifecycle: TaroHook(HOOK_TYPE.SINGLE, function (instance, lifecycle) {
    return instance[lifecycle];
  }),
  getPathIndex: TaroHook(HOOK_TYPE.SINGLE, function (indexOfNode) {
    return "[".concat(indexOfNode, "]");
  }),
  getEventCenter: TaroHook(HOOK_TYPE.SINGLE, function (Events) {
    return new Events();
  }),
  isBubbleEvents: TaroHook(HOOK_TYPE.SINGLE, function (eventName) {
    /**
     * 支持冒泡的事件, 除 支付宝小程序外，其余的可冒泡事件都和微信保持一致
     * 详见 见 https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html
     */
    var BUBBLE_EVENTS = new Set(['touchstart', 'touchmove', 'touchcancel', 'touchend', 'touchforcechange', 'tap', 'longpress', 'longtap', 'transitionend', 'animationstart', 'animationiteration', 'animationend']);
    return BUBBLE_EVENTS.has(eventName);
  }),
  getSpecialNodes: TaroHook(HOOK_TYPE.SINGLE, function () {
    return ['view', 'text', 'image'];
  }),
  onRemoveAttribute: TaroHook(HOOK_TYPE.SINGLE),
  batchedEventUpdates: TaroHook(HOOK_TYPE.SINGLE),
  mergePageInstance: TaroHook(HOOK_TYPE.SINGLE),
  modifyPageObject: TaroHook(HOOK_TYPE.SINGLE),
  createPullDownComponent: TaroHook(HOOK_TYPE.SINGLE),
  getDOMNode: TaroHook(HOOK_TYPE.SINGLE),
  modifyHydrateData: TaroHook(HOOK_TYPE.SINGLE),
  modifySetAttrPayload: TaroHook(HOOK_TYPE.SINGLE),
  modifyRmAttrPayload: TaroHook(HOOK_TYPE.SINGLE),
  onAddEvent: TaroHook(HOOK_TYPE.SINGLE),
  proxyToRaw: TaroHook(HOOK_TYPE.SINGLE, function (proxyObj) {
    return proxyObj;
  }),
  modifyMpEvent: TaroHook(HOOK_TYPE.MULTI),
  modifyMpEventImpl: TaroHook(HOOK_TYPE.SINGLE, function (e) {
    try {
      // 有些小程序的事件对象的某些属性只读
      this.call('modifyMpEvent', e);
    } catch (error) {
      console.warn('[Taro modifyMpEvent hook Error]: ' + (error === null || error === void 0 ? void 0 : error.message));
    }
  }),
  injectNewStyleProperties: TaroHook(HOOK_TYPE.SINGLE),
  modifyTaroEvent: TaroHook(HOOK_TYPE.MULTI),
  dispatchTaroEvent: TaroHook(HOOK_TYPE.SINGLE, function (e, node) {
    node.dispatchEvent(e);
  }),
  dispatchTaroEventFinish: TaroHook(HOOK_TYPE.MULTI),
  modifyDispatchEvent: TaroHook(HOOK_TYPE.MULTI),
  initNativeApi: TaroHook(HOOK_TYPE.MULTI),
  patchElement: TaroHook(HOOK_TYPE.MULTI)
});
var EMPTY_OBJ = {};
var EMPTY_ARR = [];
var noop = function noop() {};
/**
 * box creates a boxed value.
 *
 * @typeparam T Value type.
 * @param v Value.
 * @returns Boxed value.
 */
var box = function box(v) {
  return {
    v: v
  };
};
/**
 * box creates a boxed value.
 *
 * @typeparam T Value type.
 * @param b Boxed value.
 * @returns Value.
 */
var unbox = function unbox(b) {
  return b.v;
};
function toDashed(s) {
  return s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
function toCamelCase(s) {
  var camel = '';
  var nextCap = false;
  for (var i = 0; i < s.length; i++) {
    if (s[i] !== '-') {
      camel += nextCap ? s[i].toUpperCase() : s[i];
      nextCap = false;
    } else {
      nextCap = true;
    }
  }
  return camel;
}
var toKebabCase = function toKebabCase(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};
function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};
/**
 * ensure takes a condition and throw a error if the condition fails,
 * like failure::ensure: https://docs.rs/failure/0.1.1/failure/macro.ensure.html
 * @param condition condition.
 * @param msg error message.
 */
function ensure(condition, msg) {
  if (!condition) {
    if (true) {
      var reportIssue = '\n如有疑问，请提交 issue 至：https://github.com/nervjs/taro/issues';
      throw new Error(msg + reportIssue);
    } else {}
  }
}
function warn(condition, msg) {
  if (true) {
    if (condition) {
      console.warn("[taro warn] ".concat(msg));
    }
  }
}
function queryToJson(str) {
  var dec = decodeURIComponent;
  var qp = str.split('&');
  var ret = {};
  var name;
  var val;
  for (var i = 0, l = qp.length, item; i < l; ++i) {
    item = qp[i];
    if (item.length) {
      var s = item.indexOf('=');
      if (s < 0) {
        name = dec(item);
        val = '';
      } else {
        name = dec(item.slice(0, s));
        val = dec(item.slice(s + 1));
      }
      if (typeof ret[name] === 'string') {
        // inline'd type check
        ret[name] = [ret[name]];
      }
      if (Array.isArray(ret[name])) {
        ret[name].push(val);
      } else {
        ret[name] = val;
      }
    }
  }
  return ret; // Object
}

var _uniqueId = 1;
var _loadTime = new Date().getTime().toString();
function getUniqueKey() {
  return _loadTime + _uniqueId++;
}
var cacheData = {};
function cacheDataSet(key, val) {
  cacheData[key] = val;
}
function cacheDataGet(key, delelteAfterGet) {
  var temp = cacheData[key];
  delelteAfterGet && delete cacheData[key];
  return temp;
}
function cacheDataHas(key) {
  return key in cacheData;
}
function mergeInternalComponents(components) {
  Object.keys(components).forEach(function (name) {
    if (name in internalComponents) {
      Object.assign(internalComponents[name], components[name]);
    } else {
      internalComponents[name] = components[name];
    }
  });
  return internalComponents;
}
function getComponentsAlias(origin) {
  var mapping = {};
  var viewAttrs = origin.View;
  var extraList = {
    '#text': {},
    StaticView: viewAttrs,
    StaticImage: origin.Image,
    StaticText: origin.Text,
    PureView: viewAttrs,
    CatchView: viewAttrs
  };
  origin = Object.assign(Object.assign({}, origin), extraList);
  Object.keys(origin).sort(function (a, b) {
    var reg = /^(Static|Pure|Catch)*(View|Image|Text)$/;
    var isACommonly = reg.test(a);
    var isBCommonly = reg.test(b);
    if (isACommonly && isBCommonly) {
      return a > b ? 1 : -1;
    } else if (isACommonly) {
      return -1;
    } else if (isBCommonly) {
      return 1;
    } else {
      return a >= b ? 1 : -1;
    }
  }).forEach(function (key, num) {
    var obj = {
      _num: String(num)
    };
    Object.keys(origin[key]).filter(function (attr) {
      return !/^bind/.test(attr) && !['focus', 'blur'].includes(attr);
    }).sort().forEach(function (attr, index) {
      obj[toCamelCase(attr)] = 'p' + index;
    });
    mapping[toDashed(key)] = obj;
  });
  return mapping;
}
function getPlatformType() {
  var platform = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'weapp';
  var configNameOrType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PLATFORM_TYPE.MINI;
  if (Object.keys(PLATFORM_CONFIG_MAP).includes(platform)) {
    configNameOrType = platform;
  }
  var param = PLATFORM_CONFIG_MAP[configNameOrType] || {};
  return param.type || configNameOrType;
}
function mergeReconciler(hostConfig, hooksForTest) {
  var obj = hooksForTest || hooks;
  var keys = Object.keys(hostConfig);
  keys.forEach(function (key) {
    obj.tap(key, hostConfig[key]);
  });
}
function nonsupport(api) {
  return function () {
    console.warn("\u5C0F\u7A0B\u5E8F\u6682\u4E0D\u652F\u6301 ".concat(api));
  };
}
function setUniqueKeyToRoute(key, obj) {
  var routerParamsPrivateKey = '__key_';
  var useDataCacheApis = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab'];
  if (useDataCacheApis.indexOf(key) > -1) {
    var url = obj.url = obj.url || '';
    var hasMark = url.indexOf('?') > -1;
    var cacheKey = getUniqueKey();
    obj.url += (hasMark ? '&' : '?') + "".concat(routerParamsPrivateKey, "=").concat(cacheKey);
  }
}
function indent(str, size) {
  return str.split('\n').map(function (line, index) {
    var indent = index === 0 ? '' : Array(size).fill(' ').join('');
    return indent + line;
  }).join('\n');
}
var needPromiseApis = new Set(['addPhoneContact', 'authorize', 'canvasGetImageData', 'canvasPutImageData', 'canvasToTempFilePath', 'checkSession', 'chooseAddress', 'chooseImage', 'chooseInvoiceTitle', 'chooseLocation', 'chooseVideo', 'clearStorage', 'closeBLEConnection', 'closeBluetoothAdapter', 'closeSocket', 'compressImage', 'connectSocket', 'createBLEConnection', 'downloadFile', 'exitMiniProgram', 'getAvailableAudioSources', 'getBLEDeviceCharacteristics', 'getBLEDeviceServices', 'getBatteryInfo', 'getBeacons', 'getBluetoothAdapterState', 'getBluetoothDevices', 'getClipboardData', 'getConnectedBluetoothDevices', 'getConnectedWifi', 'getExtConfig', 'getFileInfo', 'getImageInfo', 'getLocation', 'getNetworkType', 'getSavedFileInfo', 'getSavedFileList', 'getScreenBrightness', 'getSetting', 'getStorage', 'getStorageInfo', 'getSystemInfo', 'getUserInfo', 'getWifiList', 'hideHomeButton', 'hideShareMenu', 'hideTabBar', 'hideTabBarRedDot', 'loadFontFace', 'login', 'makePhoneCall', 'navigateBack', 'navigateBackMiniProgram', 'navigateTo', 'navigateToBookshelf', 'navigateToMiniProgram', 'notifyBLECharacteristicValueChange', 'hideKeyboard', 'hideLoading', 'hideNavigationBarLoading', 'hideToast', 'openBluetoothAdapter', 'openDocument', 'openLocation', 'openSetting', 'pageScrollTo', 'previewImage', 'queryBookshelf', 'reLaunch', 'readBLECharacteristicValue', 'redirectTo', 'removeSavedFile', 'removeStorage', 'removeTabBarBadge', 'requestSubscribeMessage', 'saveFile', 'saveImageToPhotosAlbum', 'saveVideoToPhotosAlbum', 'scanCode', 'sendSocketMessage', 'setBackgroundColor', 'setBackgroundTextStyle', 'setClipboardData', 'setEnableDebug', 'setInnerAudioOption', 'setKeepScreenOn', 'setNavigationBarColor', 'setNavigationBarTitle', 'setScreenBrightness', 'setStorage', 'setTabBarBadge', 'setTabBarItem', 'setTabBarStyle', 'showActionSheet', 'showFavoriteGuide', 'showLoading', 'showModal', 'showShareMenu', 'showTabBar', 'showTabBarRedDot', 'showToast', 'startBeaconDiscovery', 'startBluetoothDevicesDiscovery', 'startDeviceMotionListening', 'startPullDownRefresh', 'stopBeaconDiscovery', 'stopBluetoothDevicesDiscovery', 'stopCompass', 'startCompass', 'startAccelerometer', 'stopAccelerometer', 'showNavigationBarLoading', 'stopDeviceMotionListening', 'stopPullDownRefresh', 'switchTab', 'uploadFile', 'vibrateLong', 'vibrateShort', 'writeBLECharacteristicValue']);
function getCanIUseWebp(taro) {
  return function () {
    var _a;
    var res = (_a = taro.getSystemInfoSync) === null || _a === void 0 ? void 0 : _a.call(taro);
    if (!res) {
      if (true) {
        console.error('不支持 API canIUseWebp');
      }
      return false;
    }
    var platform = res.platform;
    var platformLower = platform.toLowerCase();
    if (platformLower === 'android' || platformLower === 'devtools') {
      return true;
    }
    return false;
  };
}
function getNormalRequest(global) {
  return function request(options) {
    options = options ? isString(options) ? {
      url: options
    } : options : {};
    var originSuccess = options.success;
    var originFail = options.fail;
    var originComplete = options.complete;
    var requestTask;
    var p = new Promise(function (resolve, reject) {
      options.success = function (res) {
        originSuccess && originSuccess(res);
        resolve(res);
      };
      options.fail = function (res) {
        originFail && originFail(res);
        reject(res);
      };
      options.complete = function (res) {
        originComplete && originComplete(res);
      };
      requestTask = global.request(options);
    });
    equipTaskMethodsIntoPromise(requestTask, p);
    p.abort = function (cb) {
      cb && cb();
      if (requestTask) {
        requestTask.abort();
      }
      return p;
    };
    return p;
  };
}
function processApis(taro, global) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var patchNeedPromiseApis = config.needPromiseApis || [];
  var _needPromiseApis = new Set([].concat((0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(patchNeedPromiseApis), (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(needPromiseApis)));
  var preserved = ['getEnv', 'interceptors', 'Current', 'getCurrentInstance', 'options', 'nextTick', 'eventCenter', 'Events', 'preload', 'webpackJsonp'];
  var apis = new Set(!config.isOnlyPromisify ? Object.keys(global).filter(function (api) {
    return preserved.indexOf(api) === -1;
  }) : patchNeedPromiseApis);
  if (config.modifyApis) {
    config.modifyApis(apis);
  }
  apis.forEach(function (key) {
    if (_needPromiseApis.has(key)) {
      var originKey = key;
      taro[originKey] = function () {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }
        var key = originKey;
        // 第一个参数 options 为字符串，单独处理
        if (typeof options === 'string') {
          if (args.length) {
            return global[key].apply(global, [options].concat(args));
          }
          return global[key](options);
        }
        // 改变 key 或 option 字段，如需要把支付宝标准的字段对齐微信标准的字段
        if (config.transformMeta) {
          var transformResult = config.transformMeta(key, options);
          key = transformResult.key;
          options = transformResult.options;
          // 新 key 可能不存在
          if (!global.hasOwnProperty(key)) {
            return nonsupport(key)();
          }
        }
        var task = null;
        var obj = Object.assign({}, options);
        // 为页面跳转相关的 API 设置一个随机数作为路由参数。为了给 runtime 区分页面。
        setUniqueKeyToRoute(key, options);
        // Promise 化
        var p = new Promise(function (resolve, reject) {
          obj.success = function (res) {
            var _a, _b;
            (_a = config.modifyAsyncResult) === null || _a === void 0 ? void 0 : _a.call(config, key, res);
            (_b = options.success) === null || _b === void 0 ? void 0 : _b.call(options, res);
            if (key === 'connectSocket') {
              resolve(Promise.resolve().then(function () {
                return task ? Object.assign(task, res) : res;
              }));
            } else {
              resolve(res);
            }
          };
          obj.fail = function (res) {
            var _a;
            (_a = options.fail) === null || _a === void 0 ? void 0 : _a.call(options, res);
            reject(res);
          };
          obj.complete = function (res) {
            var _a;
            (_a = options.complete) === null || _a === void 0 ? void 0 : _a.call(options, res);
          };
          if (args.length) {
            task = global[key].apply(global, [obj].concat(args));
          } else {
            task = global[key](obj);
          }
        });
        // 给 promise 对象挂载属性
        if (['uploadFile', 'downloadFile'].includes(key)) {
          equipTaskMethodsIntoPromise(task, p);
          p.progress = function (cb) {
            task === null || task === void 0 ? void 0 : task.onProgressUpdate(cb);
            return p;
          };
          p.abort = function (cb) {
            cb === null || cb === void 0 ? void 0 : cb();
            task === null || task === void 0 ? void 0 : task.abort();
            return p;
          };
        }
        return p;
      };
    } else {
      var platformKey = key;
      // 改变 key 或 option 字段，如需要把支付宝标准的字段对齐微信标准的字段
      if (config.transformMeta) {
        platformKey = config.transformMeta(key, {}).key;
      }
      // API 不存在
      if (!global.hasOwnProperty(platformKey)) {
        taro[key] = nonsupport(key);
        return;
      }
      if (isFunction(global[key])) {
        taro[key] = function () {
          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }
          if (config.handleSyncApis) {
            return config.handleSyncApis(key, global, args);
          } else {
            return global[platformKey].apply(global, args);
          }
        };
      } else {
        taro[key] = global[platformKey];
      }
    }
  });
  !config.isOnlyPromisify && equipCommonApis(taro, global, config);
}
/**
 * 挂载常用 API
 * @param taro Taro 对象
 * @param global 小程序全局对象，如微信的 wx，支付宝的 my
 */
function equipCommonApis(taro, global) {
  var apis = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  taro.canIUseWebp = getCanIUseWebp(taro);
  taro.getCurrentPages = getCurrentPages || nonsupport('getCurrentPages');
  taro.getApp = getApp || nonsupport('getApp');
  taro.env = global.env || {};
  try {
    taro.requirePlugin = requirePlugin || nonsupport('requirePlugin');
  } catch (error) {
    taro.requirePlugin = nonsupport('requirePlugin');
  }
  // request & interceptors
  var request = apis.request || getNormalRequest(global);
  function taroInterceptor(chain) {
    return request(chain.requestParams);
  }
  var link = new taro.Link(taroInterceptor);
  taro.request = link.request.bind(link);
  taro.addInterceptor = link.addInterceptor.bind(link);
  taro.cleanInterceptors = link.cleanInterceptors.bind(link);
  taro.miniGlobal = taro.options.miniGlobal = global;
  taro.getAppInfo = function () {
    return {
      platform: "mini" || 0,
      taroVersion: "3.6.17" || 0,
      designWidth: taro.config.designWidth
    };
  };
  taro.createSelectorQuery = delayRef(taro, global, 'createSelectorQuery', 'exec');
  taro.createIntersectionObserver = delayRef(taro, global, 'createIntersectionObserver', 'observe');
}
/**
 * 将Task对象中的方法挂载到promise对象中，适配小程序api原生返回结果
 * @param task Task对象 {RequestTask | DownloadTask | UploadTask}
 * @param promise Promise
 */
function equipTaskMethodsIntoPromise(task, promise) {
  if (!task || !promise) return;
  var taskMethods = ['abort', 'onHeadersReceived', 'offHeadersReceived', 'onProgressUpdate', 'offProgressUpdate', 'onChunkReceived', 'offChunkReceived'];
  task && taskMethods.forEach(function (method) {
    if (method in task) {
      promise[method] = task[method].bind(task);
    }
  });
}
function delayRef(taro, global, name, method) {
  return function () {
    var res = global[name].apply(global, arguments);
    var raw = res[method].bind(res);
    res[method] = function () {
      for (var _len6 = arguments.length, methodArgs = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        methodArgs[_key6] = arguments[_key6];
      }
      taro.nextTick(function () {
        return raw.apply(void 0, methodArgs);
      });
    };
    return res;
  };
}


/***/ }),

/***/ "./node_modules/.pnpm/@tarojs+taro@3.6.17_hdidbuxseer5gwswpbd4f5fzyu/node_modules/@tarojs/taro/index.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tarojs+taro@3.6.17_hdidbuxseer5gwswpbd4f5fzyu/node_modules/@tarojs/taro/index.js ***!
  \**************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _require = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/.pnpm/@tarojs+runtime@3.6.17/node_modules/@tarojs/runtime/dist/runtime.esm.js"),
  hooks = _require.hooks;
var taro = (__webpack_require__(/*! @tarojs/api */ "./node_modules/.pnpm/@tarojs+api@3.6.17/node_modules/@tarojs/api/dist/index.esm.js")["default"]);
if (hooks.isExist('initNativeApi')) {
  hooks.call('initNativeApi', taro);
}
module.exports = taro;
module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/.pnpm/@tarojs+webpack5-runner@3.6.17_vxs26qicuakynrgyvwvz5sghfe/node_modules/@tarojs/webpack5-runner/dist/template/comp.js":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tarojs+webpack5-runner@3.6.17_vxs26qicuakynrgyvwvz5sghfe/node_modules/@tarojs/webpack5-runner/dist/template/comp.js ***!
  \*************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/.pnpm/@tarojs+runtime@3.6.17/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* eslint-disable no-undef */

// @ts-ignore
Component((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createRecursiveComponentConfig)());

/***/ }),

/***/ "./node_modules/.pnpm/@tarojs+webpack5-runner@3.6.17_vxs26qicuakynrgyvwvz5sghfe/node_modules/@tarojs/webpack5-runner/dist/template/custom-wrapper.js":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tarojs+webpack5-runner@3.6.17_vxs26qicuakynrgyvwvz5sghfe/node_modules/@tarojs/webpack5-runner/dist/template/custom-wrapper.js ***!
  \***********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
/* eslint-disable no-undef */
var runtime_1 = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/.pnpm/@tarojs+runtime@3.6.17/node_modules/@tarojs/runtime/dist/runtime.esm.js");
// @ts-ignore
Component((0, runtime_1.createRecursiveComponentConfig)('custom-wrapper'));

/***/ })

}]);
//# sourceMappingURL=taro.js.map