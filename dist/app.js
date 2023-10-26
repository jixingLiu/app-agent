"use strict";
require("./vendors");
require("./taro");
require("./runtime");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/.pnpm/babel-loader@8.2.1_qxiufrq5yurergrmrmsa5fwjoe/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/app.ts":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/babel-loader@8.2.1_qxiufrq5yurergrmrmsa5fwjoe/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/app.ts ***!
  \**********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/.pnpm/@tarojs+taro@3.6.17_hdidbuxseer5gwswpbd4f5fzyu/node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _guard_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guard/index */ "./src/guard/index.ts");



function App(_ref) {
  var children = _ref.children;
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.useLaunch)(function () {
    console.log('App launched.');
  });

  // children 是将要会渲染的页面
  return children;
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/constants.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/constants.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var document = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/.pnpm/@tarojs+runtime@3.6.17/node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"];


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isBrowser = exports.ROUTE_KEY = void 0;
exports.ROUTE_KEY = 'route_key';
exports.isBrowser = typeof document !== 'undefined' && !!document.scripts;

/***/ }),

/***/ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/exception/index.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/exception/index.js ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.NoPageException = void 0;
var no_page_1 = __webpack_require__(/*! ./no-page */ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/exception/no-page.js");
Object.defineProperty(exports, "NoPageException", ({
  enumerable: true,
  get: function get() {
    return no_page_1.NoPageException;
  }
}));

/***/ }),

/***/ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/exception/no-page.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/exception/no-page.js ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {



var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.NoPageException = void 0;
var NoPageException = /** @class */function (_super) {
  __extends(NoPageException, _super);
  function NoPageException() {
    return _super.call(this, '没有页面可以回退了') || this;
  }
  return NoPageException;
}(Error);
exports.NoPageException = NoPageException;

/***/ }),

/***/ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/func/formatPath.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/func/formatPath.js ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.formatPath = void 0;
var query_string_1 = __importDefault(__webpack_require__(/*! query-string */ "./node_modules/.pnpm/query-string@7.1.3/node_modules/query-string/index.js"));
function formatPath(route, params) {
  var url = route.url;
  var urlSplit = url.split('?');
  if (urlSplit.length > 1 && urlSplit[1]) {
    var urlParams = query_string_1.default.parse(url.split('?')[1]);
    params = Object.assign(urlParams, params);
    url = urlSplit[0];
  }
  var paramsStr = query_string_1.default.stringify(params, {
    encode: false
  });
  url = "".concat(url, "?").concat(paramsStr);
  return url;
}
exports.formatPath = formatPath;

/***/ }),

/***/ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/func/getCurrentRouteKey.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/func/getCurrentRouteKey.js ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getCurrentRouteKey = void 0;
var taro_1 = __importDefault(__webpack_require__(/*! @tarojs/taro */ "./node_modules/.pnpm/@tarojs+taro@3.6.17_hdidbuxseer5gwswpbd4f5fzyu/node_modules/@tarojs/taro/index.js"));
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/constants.js");
function getCurrentRouteKey() {
  if (!taro_1.default.Current.page) {
    return '';
  }
  return taro_1.default.Current.page[constants_1.ROUTE_KEY];
}
exports.getCurrentRouteKey = getCurrentRouteKey;

/***/ }),

/***/ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/func/index.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/func/index.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
__exportStar(__webpack_require__(/*! ./formatPath */ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/func/formatPath.js"), exports);
__exportStar(__webpack_require__(/*! ./getCurrentRouteKey */ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/func/getCurrentRouteKey.js"), exports);
__exportStar(__webpack_require__(/*! ./isNil */ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/func/isNil.js"), exports);

/***/ }),

/***/ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/func/isNil.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/func/isNil.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isNil = void 0;
function isNil(val) {
  return val === undefined || val === null;
}
exports.isNil = isNil;

/***/ }),

/***/ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/index.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
__webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = exports.registerMiddlewares = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = void 0;
var exception_1 = __webpack_require__(/*! ./exception */ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/exception/index.js");
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return exception_1.NoPageException;
  }
});
var middleware_1 = __webpack_require__(/*! ./middleware */ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/middleware/index.js");
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return middleware_1.execMiddlewares;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return middleware_1.getMiddlewares;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return middleware_1.registerMiddleware;
  }
});
Object.defineProperty(exports, "registerMiddlewares", ({
  enumerable: true,
  get: function get() {
    return middleware_1.registerMiddlewares;
  }
}));
var router_1 = __webpack_require__(/*! ./router */ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/router/index.js");
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return router_1.NavigateType;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return router_1.Router;
  }
});
var router_back_listener_1 = __webpack_require__(/*! ./router-back-listener */ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/router-back-listener/index.js");
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return router_back_listener_1.registerRouterBackListener;
  }
});
var router_2 = __webpack_require__(/*! ./router */ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/router/index.js");
__webpack_unused_export__ = router_2.Router;

/***/ }),

/***/ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/lib/compose.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/lib/compose.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.compose = void 0;
/**
 * Compose `middleware` returning
 * a fully valid middleware comprised
 * of all those which are passed.
 *
 * @param {Array} middleware
 * @return {Function}
 */
function compose(middleware) {
  if (!Array.isArray(middleware)) throw new TypeError('Middleware stack must be an array!');
  for (var _i = 0, middleware_1 = middleware; _i < middleware_1.length; _i++) {
    var fn = middleware_1[_i];
    if (typeof fn !== 'function') throw new TypeError('Middleware must be composed of functions!');
  }
  /**
   * @param {Object} context
   * @return {Promise}
   * @api public
   */
  return function (context, next) {
    // last called middleware #
    var index = -1;
    return dispatch(0);
    function dispatch(i) {
      if (i <= index) return Promise.reject(new Error('next() called multiple times'));
      index = i;
      var fn = middleware[i];
      if (i === middleware.length) fn = next;
      if (!fn) return Promise.resolve();
      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }
  };
}
exports.compose = compose;

/***/ }),

/***/ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/middleware/index.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/middleware/index.js ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.execMiddlewares = exports.getMiddlewares = exports.registerMiddlewares = exports.registerMiddleware = exports.middlewareCollection = void 0;
var compose_1 = __webpack_require__(/*! ../lib/compose */ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/lib/compose.js");
exports.middlewareCollection = [];
function registerMiddleware(middleware, condition) {
  exports.middlewareCollection.push({
    middlewares: [middleware],
    condition: condition
  });
}
exports.registerMiddleware = registerMiddleware;
function registerMiddlewares(middlewares, condition) {
  exports.middlewareCollection.push({
    middlewares: middlewares,
    condition: condition
  });
}
exports.registerMiddlewares = registerMiddlewares;
function getMiddlewares(ctx) {
  return exports.middlewareCollection.filter(function (mc) {
    if (!mc.condition) return true;else return mc.condition(ctx);
  }).map(function (mc) {
    return mc.middlewares;
  }).reduce(function (pre, cur) {
    return __spreadArray(__spreadArray([], pre, true), cur, true);
  }, []);
}
exports.getMiddlewares = getMiddlewares;
function execMiddlewares(middlewares, ctx) {
  return __awaiter(this, void 0, void 0, function () {
    var fn;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          fn = (0, compose_1.compose)(middlewares);
          return [4 /*yield*/, fn(ctx)];
        case 1:
          return [2 /*return*/, _a.sent()];
      }
    });
  });
}
exports.execMiddlewares = execMiddlewares;

/***/ }),

/***/ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/page-data/index.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/page-data/index.js ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PageData = void 0;
var func_1 = __webpack_require__(/*! ../func */ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/func/index.js");
var PageData = /** @class */function () {
  function PageData() {}
  PageData.getPageData = function (default_value) {
    var route_key = (0, func_1.getCurrentRouteKey)();
    var result = PageData.pageData.get(route_key) || default_value;
    return result;
  };
  PageData.delPageData = function (route_key) {
    PageData.pageData.delete(route_key);
  };
  PageData.delPagePromise = function (route_key) {
    PageData.pagePromise.delete(route_key);
  };
  PageData.setPageData = function (route_key, data) {
    this.pageData.set(route_key, data);
  };
  PageData.setPagePromise = function (route_key, options) {
    this.pagePromise.set(route_key, options);
  };
  PageData.emitBack = function (route_key) {
    var pme = PageData.pagePromise.get(route_key);
    if (!pme) return;
    var result = PageData.backResult.get(route_key);
    PageData.delPageData(route_key);
    PageData.delPagePromise(route_key);
    if (result) {
      PageData.backResult.delete(route_key);
      if (result instanceof Error) {
        pme.rej(result);
      } else {
        pme.res(result);
      }
    } else {
      pme.res(null);
    }
  };
  PageData.setBackResult = function (result) {
    var route_key = (0, func_1.getCurrentRouteKey)();
    PageData.backResult.set(route_key, result);
  };
  PageData.pageData = new Map();
  PageData.pagePromise = new Map();
  PageData.backResult = new Map();
  return PageData;
}();
exports.PageData = PageData;

/***/ }),

/***/ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/router-back-listener/index.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/router-back-listener/index.js ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.execRouterBackListener = exports.registerRouterBackListener = exports.routerBackListenerCollection = void 0;
var taro_1 = __webpack_require__(/*! @tarojs/taro */ "./node_modules/.pnpm/@tarojs+taro@3.6.17_hdidbuxseer5gwswpbd4f5fzyu/node_modules/@tarojs/taro/index.js");
exports.routerBackListenerCollection = [];
/** 注册全局路由返回监听 */
function registerRouterBackListener(listener) {
  exports.routerBackListenerCollection.push(listener);
}
exports.registerRouterBackListener = registerRouterBackListener;
function execRouterBackListener(from) {
  var _a;
  var to = {
    url: ((_a = taro_1.Current.router) === null || _a === void 0 ? void 0 : _a.path) || ''
  };
  for (var _i = 0, routerBackListenerCollection_1 = exports.routerBackListenerCollection; _i < routerBackListenerCollection_1.length; _i++) {
    var listener = routerBackListenerCollection_1[_i];
    listener(to, from);
  }
}
exports.execRouterBackListener = execRouterBackListener;

/***/ }),

/***/ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/router/index.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/router/index.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Router = exports.NavigateType = void 0;
var taro_1 = __importStar(__webpack_require__(/*! @tarojs/taro */ "./node_modules/.pnpm/@tarojs+taro@3.6.17_hdidbuxseer5gwswpbd4f5fzyu/node_modules/@tarojs/taro/index.js"));
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/constants.js");
var no_page_1 = __webpack_require__(/*! ../exception/no-page */ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/exception/no-page.js");
var func_1 = __webpack_require__(/*! ../func */ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/func/index.js");
var middleware_1 = __webpack_require__(/*! ../middleware */ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/middleware/index.js");
var page_data_1 = __webpack_require__(/*! ../page-data */ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/page-data/index.js");
var router_back_listener_1 = __webpack_require__(/*! ../router-back-listener */ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/router-back-listener/index.js");
var type_1 = __webpack_require__(/*! ./type */ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/router/type.js");
var type_2 = __webpack_require__(/*! ./type */ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/router/type.js");
Object.defineProperty(exports, "NavigateType", ({
  enumerable: true,
  get: function get() {
    return type_2.NavigateType;
  }
}));
var Router = /** @class */function () {
  function Router() {}
  /**
   * 页面跳转
   * @param route 目标路由对象
   * @param options 跳转选项
   */
  Router.navigate = function (route, options) {
    return __awaiter(this, void 0, void 0, function () {
      var route_key, context, middlewares, url;
      var _this = this;
      return __generator(this, function (_a) {
        options = __assign({
          type: type_1.NavigateType.navigateTo,
          params: {}
        }, options);
        options.params = Object.assign({}, options.params);
        route_key = Date.now() + '';
        taro_1.Current['_page'] = taro_1.Current.page;
        Object.defineProperties(taro_1.Current, {
          page: {
            set: function set(page) {
              if (page === undefined || page === null) {
                this._page = page;
                return;
              }
              if (!page[constants_1.ROUTE_KEY]) {
                var originOnUnload_1 = page.onUnload;
                page.onUnload = function () {
                  originOnUnload_1 && originOnUnload_1.apply(this);
                  page_data_1.PageData.emitBack(route_key);
                  setTimeout(function () {
                    return (0, router_back_listener_1.execRouterBackListener)(route);
                  });
                };
                page[constants_1.ROUTE_KEY] = route_key;
              }
              this._page = page;
            },
            get: function get() {
              return this._page;
            }
          }
        });
        if (options.data) {
          page_data_1.PageData.setPageData(route_key, options.data);
        }
        context = {
          route: route,
          type: options.type,
          params: options.params,
          data: options.data
        };
        middlewares = (0, middleware_1.getMiddlewares)(context);
        url = (0, func_1.formatPath)(route, options.params);
        middlewares.push(function (ctx, next) {
          return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
              switch (_b.label) {
                case 0:
                  _a = options.type;
                  switch (_a) {
                    case type_1.NavigateType.reLaunch:
                      return [3 /*break*/, 1];
                    case type_1.NavigateType.redirectTo:
                      return [3 /*break*/, 3];
                    case type_1.NavigateType.switchTab:
                      return [3 /*break*/, 5];
                  }
                  return [3 /*break*/, 7];
                case 1:
                  return [4 /*yield*/, taro_1.default.reLaunch({
                    url: url,
                    complete: options === null || options === void 0 ? void 0 : options.complete,
                    fail: options === null || options === void 0 ? void 0 : options.fail,
                    success: options === null || options === void 0 ? void 0 : options.success
                  })];
                case 2:
                  _b.sent();
                  return [3 /*break*/, 9];
                case 3:
                  return [4 /*yield*/, taro_1.default.redirectTo({
                    url: url,
                    complete: options === null || options === void 0 ? void 0 : options.complete,
                    fail: options === null || options === void 0 ? void 0 : options.fail,
                    success: options === null || options === void 0 ? void 0 : options.success
                  })];
                case 4:
                  _b.sent();
                  return [3 /*break*/, 9];
                case 5:
                  return [4 /*yield*/, taro_1.default.switchTab({
                    url: url,
                    complete: options === null || options === void 0 ? void 0 : options.complete,
                    fail: options === null || options === void 0 ? void 0 : options.fail,
                    success: options === null || options === void 0 ? void 0 : options.success
                  })];
                case 6:
                  _b.sent();
                  return [3 /*break*/, 9];
                case 7:
                  return [4 /*yield*/, taro_1.default.navigateTo({
                    url: url,
                    complete: options === null || options === void 0 ? void 0 : options.complete,
                    fail: options === null || options === void 0 ? void 0 : options.fail,
                    success: options === null || options === void 0 ? void 0 : options.success
                  })];
                case 8:
                  _b.sent();
                  return [3 /*break*/, 9];
                case 9:
                  next();
                  return [2 /*return*/];
              }
            });
          });
        });

        return [2 /*return*/, new Promise(function (res, rej) {
          return __awaiter(_this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  _a.trys.push([0, 2,, 3]);
                  page_data_1.PageData.setPagePromise(route_key, {
                    res: res,
                    rej: rej
                  });
                  return [4 /*yield*/, (0, middleware_1.execMiddlewares)(middlewares, context)];
                case 1:
                  _a.sent();
                  return [3 /*break*/, 3];
                case 2:
                  err_1 = _a.sent();
                  rej(err_1);
                  return [3 /*break*/, 3];
                case 3:
                  return [2 /*return*/];
              }
            });
          });
        })];
      });
    });
  };
  /**
   * 返回上一个页面
   * @param result 返回给上一个页面的数据，如果 result 是 Error 的实例，则是抛出异常给上一个页面
   * @param options 其他选项
   */
  Router.back = function (result, options) {
    if (!(0, func_1.isNil)(result)) {
      page_data_1.PageData.setBackResult(result);
    }
    var currentPages = taro_1.default.getCurrentPages();
    if (currentPages.length > 1) {
      return taro_1.default.navigateBack(options);
    }
    throw new no_page_1.NoPageException();
  };
  /**
   * 设置页面返回的数据
   * 当物理键返回和左上角返回也需要带数据时会使用到
   */
  Router.setBackResult = function (result) {
    page_data_1.PageData.setBackResult(result);
  };
  /**
   * 获取上一个页面携带过来的数据
   * @param default_value 默认数据
   */
  Router.getData = function (default_value) {
    return page_data_1.PageData.getPageData(default_value);
  };
  /** 获取上一个页面携带过来的参数 */
  Router.getParams = function () {
    var _a;
    var instance = (0, taro_1.getCurrentInstance)();
    return Object.assign({}, (_a = instance.router) === null || _a === void 0 ? void 0 : _a.params);
  };
  Router.toEmployees = function (options) {
    return Router.navigate({
      url: "/pages/employees/index"
    }, options);
  };
  Router.toIndex = function (options) {
    return Router.navigate({
      url: "/pages/index/index"
    }, options);
  };
  Router.toInstall = function (options) {
    return Router.navigate({
      url: "/pages/install/index"
    }, options);
  };
  Router.toInstallForm = function (options) {
    return Router.navigate({
      url: "/pages/install-form/index"
    }, options);
  };
  Router.toLogin = function (options) {
    return Router.navigate({
      url: "/pages/login/index"
    }, options);
  };
  Router.toMine = function (options) {
    return Router.navigate({
      url: "/pages/mine/index"
    }, options);
  };
  Router.toRoiCalculator = function (options) {
    return Router.navigate({
      url: "/pages/roi-calculator/index"
    }, options);
  };
  Router.toRoiCalculatorDetail = function (options) {
    return Router.navigate({
      url: "/pages/roi-calculator-detail/index"
    }, options);
  };
  return Router;
}();
exports.Router = Router;

/***/ }),

/***/ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/router/type.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/router/type.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.NavigateType = void 0;
var NavigateType;
(function (NavigateType) {
  /** 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 Router.back 可以返回到原页面。小程序中页面栈最多十层。 */
  NavigateType["navigateTo"] = "navigateTo";
  /** 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。 */
  NavigateType["redirectTo"] = "redirectTo";
  /** 关闭所有页面，打开到应用内的某个页面 */
  NavigateType["reLaunch"] = "reLaunch";
  /** 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面 */
  NavigateType["switchTab"] = "switchTab";
})(NavigateType = exports.NavigateType || (exports.NavigateType = {}));

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

var react__WEBPACK_IMPORTED_MODULE_6___namespace_cache;
/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-weapp/dist/runtime */ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.17_hdidbuxseer5gwswpbd4f5fzyu/node_modules/@tarojs/plugin-platform-weapp/dist/runtime.js");
/* harmony import */ var _tarojs_plugin_html_dist_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/plugin-html/dist/runtime */ "./node_modules/.pnpm/@tarojs+plugin-html@3.6.17_hdidbuxseer5gwswpbd4f5fzyu/node_modules/@tarojs/plugin-html/dist/runtime.js");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/.pnpm/@tarojs+runtime@3.6.17/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/plugin-framework-react/dist/runtime */ "./node_modules/.pnpm/@tarojs+plugin-framework-react@3.6.17_aqybhsjoaeiiy7hjuh6e6fbd4i/node_modules/@tarojs/plugin-framework-react/dist/runtime.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/.pnpm/@tarojs+taro@3.6.17_hdidbuxseer5gwswpbd4f5fzyu/node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_babel_loader_8_2_1_qxiufrq5yurergrmrmsa5fwjoe_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_app_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../node_modules/.pnpm/babel-loader@8.2.1_qxiufrq5yurergrmrmsa5fwjoe/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./app.ts */ "./node_modules/.pnpm/babel-loader@8.2.1_qxiufrq5yurergrmrmsa5fwjoe/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/app.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/.pnpm/@tarojs+react@3.6.17_react@18.2.0/node_modules/@tarojs/react/dist/react.esm.js");












var config = {"pages":["pages/login/index","pages/install/index","pages/install-form/index","pages/employees/index","pages/index/index","pages/mine/index","pages/roi-calculator/index","pages/roi-calculator-detail/index"],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#f5f6f7","navigationBarTitleText":"WeChat","navigationBarTextStyle":"black"},"tabBar":{"selectedColor":"#6190E8","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"assets/tabbar/home.png","selectedIconPath":"assets/tabbar/home_.png"},{"pagePath":"pages/install/index","text":"电站安装","iconPath":"assets/tabbar/work.png","selectedIconPath":"assets/tabbar/work_.png"},{"pagePath":"pages/mine/index","text":"我的","iconPath":"assets/tabbar/mine.png","selectedIconPath":"assets/tabbar/mine_.png"}]}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__.window.__taroAppConfig = config
var inst = App((0,_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_3__.createReactApp)(_node_modules_pnpm_babel_loader_8_2_1_qxiufrq5yurergrmrmsa5fwjoe_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_app_ts__WEBPACK_IMPORTED_MODULE_5__["default"], /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_6___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_6___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_6__, 2))), react_dom__WEBPACK_IMPORTED_MODULE_7__["default"], config))

;(0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__.initPxTransform)({
  designWidth: function designWidth(input) {
        var _input_file;
        // 配置 NutUI 375 尺寸
        if ((input === null || input === void 0 ? void 0 : (_input_file = input.file) === null || _input_file === void 0 ? void 0 : _input_file.replace(/\\+/g, "/").indexOf("@nutui")) > -1) {
            return 375;
        }
        // 全局使用 Taro 默认的 750 尺寸
        return 750;
    },
  deviceRatio: {"640":1.17,"750":1,"828":0.905},
  baseFontSize: 20,
  unitPrecision: undefined,
  targetUnit: undefined
})


/***/ }),

/***/ "./src/guard/index.ts":
/*!****************************!*\
  !*** ./src/guard/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var tarojs_router_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tarojs-router-next */ "./node_modules/.pnpm/tarojs-router-next@3.4.0/node_modules/tarojs-router-next/dist/index.js");
/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/auth */ "./src/guard/modules/auth.ts");



// 注册路由中间件
(0,tarojs_router_next__WEBPACK_IMPORTED_MODULE_0__.registerMiddlewares)([_modules_auth__WEBPACK_IMPORTED_MODULE_1__["default"]]);

/***/ }),

/***/ "./src/guard/modules/auth.ts":
/*!***********************************!*\
  !*** ./src/guard/modules/auth.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/.pnpm/@tarojs+taro@3.6.17_hdidbuxseer5gwswpbd4f5fzyu/node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);



var auth = /*#__PURE__*/function () {
  var _ref = (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee(ctx, next) {
    var _ctx$route$ext;
    var token, _yield$Taro$showModal, confirm;
    return (0,_Users_macbookpro_Desktop_workspace_solar_fit_solutions_app_agent_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          console.log('第一个中间件执行：', ctx);
          if (!((_ctx$route$ext = ctx.route.ext) !== null && _ctx$route$ext !== void 0 && _ctx$route$ext.isLogin)) {
            _context.next = 10;
            break;
          }
          token = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('token');
          if (token) {
            _context.next = 10;
            break;
          }
          _context.next = 6;
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showModal({
            title: '提示',
            content: '请先登录'
          });
        case 6:
          _yield$Taro$showModal = _context.sent;
          confirm = _yield$Taro$showModal.confirm;
          if (confirm) {
            console.log('去登录');
          }

          // 直接返回，不执行 next 即可打断中间件向下执行
          return _context.abrupt("return");
        case 10:
          _context.next = 12;
          return next();
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function auth(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ __webpack_exports__["default"] = (auth);

/***/ }),

/***/ "./node_modules/.pnpm/decode-uri-component@0.2.2/node_modules/decode-uri-component/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/decode-uri-component@0.2.2/node_modules/decode-uri-component/index.js ***!
  \**************************************************************************************************/
/***/ (function(module) {


var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp('(' + token + ')|([^%]+?)', 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return [decodeURIComponent(components.join(''))];
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher) || [];

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher) || [];
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ "./node_modules/.pnpm/filter-obj@1.1.0/node_modules/filter-obj/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/filter-obj@1.1.0/node_modules/filter-obj/index.js ***!
  \******************************************************************************/
/***/ (function(module) {


module.exports = function (obj, predicate) {
	var ret = {};
	var keys = Object.keys(obj);
	var isArr = Array.isArray(predicate);

	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		var val = obj[key];

		if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
			ret[key] = val;
		}
	}

	return ret;
};


/***/ }),

/***/ "./node_modules/.pnpm/query-string@7.1.3/node_modules/query-string/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/query-string@7.1.3/node_modules/query-string/index.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


const strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "./node_modules/.pnpm/strict-uri-encode@2.0.0/node_modules/strict-uri-encode/index.js");
const decodeComponent = __webpack_require__(/*! decode-uri-component */ "./node_modules/.pnpm/decode-uri-component@0.2.2/node_modules/decode-uri-component/index.js");
const splitOnFirst = __webpack_require__(/*! split-on-first */ "./node_modules/.pnpm/split-on-first@1.1.0/node_modules/split-on-first/index.js");
const filterObject = __webpack_require__(/*! filter-obj */ "./node_modules/.pnpm/filter-obj@1.1.0/node_modules/filter-obj/index.js");

const isNullOrUndefined = value => value === null || value === undefined;

const encodeFragmentIdentifier = Symbol('encodeFragmentIdentifier');

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return key => (result, value) => {
				const index = result.length;

				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[', index, ']'].join('')];
				}

				return [
					...result,
					[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
				];
			};

		case 'bracket':
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[]'].join('')];
				}

				return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
			};

		case 'colon-list-separator':
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), ':list='].join('')];
				}

				return [...result, [encode(key, options), ':list=', encode(value, options)].join('')];
			};

		case 'comma':
		case 'separator':
		case 'bracket-separator': {
			const keyValueSep = options.arrayFormat === 'bracket-separator' ?
				'[]=' :
				'=';

			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				// Translate null to an empty string so that it doesn't serialize as 'null'
				value = value === null ? '' : value;

				if (result.length === 0) {
					return [[encode(key, options), keyValueSep, encode(value, options)].join('')];
				}

				return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
			};
		}

		default:
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, encode(key, options)];
				}

				return [...result, [encode(key, options), '=', encode(value, options)].join('')];
			};
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index':
			return (key, value, accumulator) => {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return (key, value, accumulator) => {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		case 'colon-list-separator':
			return (key, value, accumulator) => {
				result = /(:list)$/.exec(key);
				key = key.replace(/:list$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		case 'comma':
		case 'separator':
			return (key, value, accumulator) => {
				const isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);
				const isEncodedArray = (typeof value === 'string' && !isArray && decode(value, options).includes(options.arrayFormatSeparator));
				value = isEncodedArray ? decode(value, options) : value;
				const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map(item => decode(item, options)) : value === null ? value : decode(value, options);
				accumulator[key] = newValue;
			};

		case 'bracket-separator':
			return (key, value, accumulator) => {
				const isArray = /(\[\])$/.test(key);
				key = key.replace(/\[\]$/, '');

				if (!isArray) {
					accumulator[key] = value ? decode(value, options) : value;
					return;
				}

				const arrayValue = value === null ?
					[] :
					value.split(options.arrayFormatSeparator).map(item => decode(item, options));

				if (accumulator[key] === undefined) {
					accumulator[key] = arrayValue;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], arrayValue);
			};

		default:
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function validateArrayFormatSeparator(value) {
	if (typeof value !== 'string' || value.length !== 1) {
		throw new TypeError('arrayFormatSeparator must be single character string');
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function removeHash(input) {
	const hashStart = input.indexOf('#');
	if (hashStart !== -1) {
		input = input.slice(0, hashStart);
	}

	return input;
}

function getHash(url) {
	let hash = '';
	const hashStart = url.indexOf('#');
	if (hashStart !== -1) {
		hash = url.slice(hashStart);
	}

	return hash;
}

function extract(input) {
	input = removeHash(input);
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}

	return input.slice(queryStart + 1);
}

function parseValue(value, options) {
	if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
		value = Number(value);
	} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
		value = value.toLowerCase() === 'true';
	}

	return value;
}

function parse(query, options) {
	options = Object.assign({
		decode: true,
		sort: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ',',
		parseNumbers: false,
		parseBooleans: false
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof query !== 'string') {
		return ret;
	}

	query = query.trim().replace(/^[?#&]/, '');

	if (!query) {
		return ret;
	}

	for (const param of query.split('&')) {
		if (param === '') {
			continue;
		}

		let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : ['comma', 'separator', 'bracket-separator'].includes(options.arrayFormat) ? value : decode(value, options);
		formatter(decode(key, options), value, ret);
	}

	for (const key of Object.keys(ret)) {
		const value = ret[key];
		if (typeof value === 'object' && value !== null) {
			for (const k of Object.keys(value)) {
				value[k] = parseValue(value[k], options);
			}
		} else {
			ret[key] = parseValue(value, options);
		}
	}

	if (options.sort === false) {
		return ret;
	}

	return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
		const value = ret[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (object, options) => {
	if (!object) {
		return '';
	}

	options = Object.assign({
		encode: true,
		strict: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ','
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const shouldFilter = key => (
		(options.skipNull && isNullOrUndefined(object[key])) ||
		(options.skipEmptyString && object[key] === '')
	);

	const formatter = encoderForArrayFormat(options);

	const objectCopy = {};

	for (const key of Object.keys(object)) {
		if (!shouldFilter(key)) {
			objectCopy[key] = object[key];
		}
	}

	const keys = Object.keys(objectCopy);

	if (options.sort !== false) {
		keys.sort(options.sort);
	}

	return keys.map(key => {
		const value = object[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			if (value.length === 0 && options.arrayFormat === 'bracket-separator') {
				return encode(key, options) + '[]';
			}

			return value
				.reduce(formatter(key), [])
				.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(x => x.length > 0).join('&');
};

exports.parseUrl = (url, options) => {
	options = Object.assign({
		decode: true
	}, options);

	const [url_, hash] = splitOnFirst(url, '#');

	return Object.assign(
		{
			url: url_.split('?')[0] || '',
			query: parse(extract(url), options)
		},
		options && options.parseFragmentIdentifier && hash ? {fragmentIdentifier: decode(hash, options)} : {}
	);
};

exports.stringifyUrl = (object, options) => {
	options = Object.assign({
		encode: true,
		strict: true,
		[encodeFragmentIdentifier]: true
	}, options);

	const url = removeHash(object.url).split('?')[0] || '';
	const queryFromUrl = exports.extract(object.url);
	const parsedQueryFromUrl = exports.parse(queryFromUrl, {sort: false});

	const query = Object.assign(parsedQueryFromUrl, object.query);
	let queryString = exports.stringify(query, options);
	if (queryString) {
		queryString = `?${queryString}`;
	}

	let hash = getHash(object.url);
	if (object.fragmentIdentifier) {
		hash = `#${options[encodeFragmentIdentifier] ? encode(object.fragmentIdentifier, options) : object.fragmentIdentifier}`;
	}

	return `${url}${queryString}${hash}`;
};

exports.pick = (input, filter, options) => {
	options = Object.assign({
		parseFragmentIdentifier: true,
		[encodeFragmentIdentifier]: false
	}, options);

	const {url, query, fragmentIdentifier} = exports.parseUrl(input, options);
	return exports.stringifyUrl({
		url,
		query: filterObject(query, filter),
		fragmentIdentifier
	}, options);
};

exports.exclude = (input, filter, options) => {
	const exclusionFilter = Array.isArray(filter) ? key => !filter.includes(key) : (key, value) => !filter(key, value);

	return exports.pick(input, exclusionFilter, options);
};


/***/ }),

/***/ "./node_modules/.pnpm/split-on-first@1.1.0/node_modules/split-on-first/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/split-on-first@1.1.0/node_modules/split-on-first/index.js ***!
  \**************************************************************************************/
/***/ (function(module) {



module.exports = (string, separator) => {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (separator === '') {
		return [string];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [string];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
};


/***/ }),

/***/ "./node_modules/.pnpm/strict-uri-encode@2.0.0/node_modules/strict-uri-encode/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/strict-uri-encode@2.0.0/node_modules/strict-uri-encode/index.js ***!
  \********************************************************************************************/
/***/ (function(module) {


module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors"], function() { return __webpack_exec__("./src/app.ts"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);;
//# sourceMappingURL=app.js.map