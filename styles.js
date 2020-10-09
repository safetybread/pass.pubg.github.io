(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "+EN/":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--13-3!../node_modules/sass-loader/dist/cjs.js??ref--13-4!./styles.scss */ "/I9Y");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "/I9Y":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--13-3!./node_modules/sass-loader/dist/cjs.js??ref--13-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* Reset styles and global styles */\n@font-face {\n  font-family: \"AgencyFB\";\n  src: url('AgencyFB-Bold.eot');\n  src: url('AgencyFB-Bold.eot') format(\"embedded-opentype\"), url('AgencyFB-Bold.woff2') format(\"woff2\"), url('AgencyFB-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"AgencyFB\";\n  src: url('AgencyFB-Regular.eot');\n  src: url('AgencyFB-Regular.eot') format(\"embedded-opentype\"), url('AgencyFB-Regular.woff2') format(\"woff2\"), url('AgencyFB-Regular.woff') format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Notosans\";\n  src: url('notokr-bold.eot');\n  src: url('notokr-bold.eot') format(\"embedded-opentype\"), url('notokr-bold.woff2') format(\"woff2\"), url('notokr-bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Microsoft JhengHei\";\n  src: url('jhenghai.eot');\n  src: url('jhenghai.eot') format(\"embedded-opentype\"), url('jhenghai.woff2') format(\"woff2\"), url('jhenghai.woff') format(\"woff\"), url('jhenghai.ttf') format(\"truetype\");\n}\n*:focus {\n  outline: 0 !important;\n}\n*, *::before, *::after {\n  box-sizing: inherit;\n  touch-action: inherit;\n  border-style: solid;\n  border-width: 0;\n  border-color: inherit;\n}\nhtml, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6,\np, blockquote, pre, abbr, address, cite, code, del, dfn, em, img,\nins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd,\nol, ul, li, fieldset, form, label, legend, table, caption, tbody,\ntfoot, thead, tr, th, td, article, aside, dialog, figure, footer,\nheader, hgroup, menu, nav, section, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  background: transparent;\n  font: inherit;\n  font-size: 100%;\n  vertical-align: baseline;\n}\narticle, aside, dialog, figure, footer, header, hgroup, nav,\nsection, main {\n  display: block;\n}\nhtml {\n  overflow-y: scroll;\n  overflow: -moz-scrollbars-vertical;\n  box-sizing: border-box;\n  touch-action: manipulation;\n}\nbody {\n  background: #000000;\n  color: #888888;\n  line-height: 1;\n  overflow-x: hidden;\n  position: relative;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n}\nblockquote, q {\n  quotes: none;\n}\nul, ol {\n  list-style: none;\n}\nblockquote::before, blockquote::after,\nq::before, q::after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n*, *::before, *::after {\n  box-sizing: inherit;\n  touch-action: inherit;\n  border-style: solid;\n  border-width: 0;\n  border-color: inherit;\n}\ninput, button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: none;\n  border: 0;\n  outline: 0;\n  color: inherit;\n  font: inherit;\n}\na {\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n  position: relative;\n}\nsvg, img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\nbutton {\n  padding: 0;\n  cursor: pointer;\n  background: none;\n  border-width: 0;\n  color: inherit;\n}\nstrong {\n  font-weight: 700;\n}\nlabel {\n  cursor: pointer;\n}\ni, em {\n  font-style: italic;\n}\nb {\n  font-weight: 500;\n}\n.bg-theme {\n  background: #E54147 !important;\n}\n.txt-theme {\n  color: #E54147 !important;\n}", "",{"version":3,"sources":["webpack://src/styles.scss"],"names":[],"mappings":"AAAA,mCAAA;AAEA;EACE,uBAAA;EACA,6BAAA;EACA,+IAAA;EAGA,iBAAA;EACA,kBAAA;AAFF;AAKA;EACE,uBAAA;EACA,gCAAA;EACA,wJAAA;EAGA,mBAAA;EACA,kBAAA;AALF;AAQA;EACE,uBAAA;EACA,2BAAA;EACA,yIAAA;EAGA,iBAAA;EACA,kBAAA;AARF;AAWA;EACI,iCAAA;EACA,wBAAA;EACA,wKAAA;AATJ;AAeA;EACE,qBAAA;AAbF;AAgBA;EACE,mBAAA;EAEA,qBAAA;EACA,mBAAA;EACA,eAAA;EACA,qBAAA;AAbF;AAgBA;;;;;;EAMI,SAAA;EACA,UAAA;EACA,uBAAA;EACA,aAAA;EACA,eAAA;EACA,wBAAA;AAbJ;AAgBA;;EAEI,cAAA;AAbJ;AAgBA;EACE,kBAAA;EACA,kCAAA;EACA,sBAAA;EAEA,0BAAA;AAbF;AAgBA;EACE,mBAAA;EACA,cAAA;EACA,cAAA;EACA,kBAAA;EACA,kBAAA;EACA,iCAAA;EACA,eAAA;EACA,iBAAA;AAbF;AAgBA;EACI,YAAA;AAbJ;AAgBA;EACI,gBAAA;AAbJ;AAgBA;;EAEI,WAAA;EACA,aAAA;AAbJ;AAgBA;EACE,yBAAA;EACA,iBAAA;AAbF;AAgBA;EACE,mBAAA;EAEA,qBAAA;EACA,mBAAA;EACA,eAAA;EACA,qBAAA;AAbF;AAoBA;EACI,wBAAA;EACA,qBAAA;EACA,gBAAA;EACA,gBAAA;EACA,SAAA;EACA,UAAA;EACA,cAAA;EACA,aAAA;AAdJ;AAiBA;EACI,cAAA;EACA,qBAAA;EACA,eAAA;EACA,kBAAA;AAdJ;AAiBA;EACI,cAAA;EACA,eAAA;EACA,YAAA;AAdJ;AAiBA;EACE,UAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;EACA,cAAA;AAdF;AAiBA;EACE,gBAAA;AAdF;AAiBA;EACE,eAAA;AAdF;AAiBA;EACE,kBAAA;AAdF;AAiBA;EACE,gBAAA;AAdF;AAiBA;EACE,8BAAA;AAdF;AAiBA;EACE,yBAAA;AAdF","sourcesContent":["/* Reset styles and global styles */\n\n@font-face {\n  font-family: 'AgencyFB';\n  src: url(assets/font/AgencyFB/AgencyFB-Bold.eot);\n  src: url(assets/font/AgencyFB/AgencyFB-Bold.eot?#iefix) format('embedded-opentype'),\n  url(assets/font/AgencyFB/AgencyFB-Bold.woff2) format('woff2'),\n  url(assets/font/AgencyFB/AgencyFB-Bold.woff) format('woff');\n  font-weight: bold;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'AgencyFB';\n  src: url(assets/font/AgencyFB/AgencyFB-Regular.eot);\n  src: url(assets/font/AgencyFB/AgencyFB-Regular.eot?#iefix) format('embedded-opentype'),\n  url(assets/font/AgencyFB/AgencyFB-Regular.woff2) format('woff2'),\n  url(assets/font/AgencyFB/AgencyFB-Regular.woff) format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Notosans';\n  src: url(assets/font/Notosans/notokr-bold.eot);\n  src: url(assets/font/Notosans/notokr-bold.eot?#iefix) format('embedded-opentype'),\n  url(assets/font/Notosans/notokr-bold.woff2) format('woff2'),\n  url(assets/font/Notosans/notokr-bold.woff) format('woff');\n  font-weight: bold;\n  font-style: normal;\n}\n\n@font-face {\n    font-family: \"Microsoft JhengHei\";\n    src:url(assets/font/MicrosoftJhenghai/jhenghai.eot);\n    src:url(assets/font/MicrosoftJhenghai/jhenghai.eot?#iefix) format(\"embedded-opentype\"),\n    url(assets/font/MicrosoftJhenghai/jhenghai.woff2) format(\"woff2\"),\n    url(assets/font/MicrosoftJhenghai/jhenghai.woff) format(\"woff\"),\n    url(assets/font/MicrosoftJhenghai/jhenghai.ttf) format(\"truetype\")\n}\n\n*:focus {\n  outline: 0 !important;\n}\n\n*, *::before, *::after {\n  box-sizing: inherit;\n  -ms-touch-action: inherit;\n  touch-action: inherit;\n  border-style: solid;\n  border-width: 0;\n  border-color: inherit;\n}\n\nhtml, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6,\np, blockquote, pre, abbr, address, cite, code, del, dfn, em, img,\nins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd,\nol, ul, li, fieldset, form, label, legend, table, caption, tbody,\ntfoot, thead, tr, th, td, article, aside, dialog, figure, footer,\nheader, hgroup, menu, nav, section, time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    background: transparent;\n    font: inherit;\n    font-size: 100%;\n    vertical-align: baseline\n}\n\narticle, aside, dialog, figure, footer, header, hgroup, nav,\nsection, main {\n    display: block;\n}\n\nhtml {\n  overflow-y: scroll;\n  overflow: -moz-scrollbars-vertical;\n  box-sizing: border-box;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n}\n\nbody {\n  background: #000000;\n  color: #888888;\n  line-height: 1;\n  overflow-x: hidden;\n  position: relative;\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  line-height: 20px\n}\n\nblockquote, q {\n    quotes: none;\n}\n\nul, ol {\n    list-style: none;\n}\n\nblockquote::before, blockquote::after,\nq::before, q::after {\n    content: '';\n    content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n*, *::before, *::after {\n  box-sizing: inherit;\n  -ms-touch-action: inherit;\n  touch-action: inherit;\n  border-style: solid;\n  border-width: 0;\n  border-color: inherit;\n}\n\n@-ms-viewport {\n  width: device-width;\n}\n\ninput, button {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    background: none;\n    border: 0;\n    outline: 0;\n    color: inherit;\n    font: inherit;\n}\n\na {\n    color: inherit;\n    text-decoration: none;\n    cursor: pointer;\n    position: relative;\n}\n\nsvg, img {\n    display: block;\n    max-width: 100%;\n    height: auto;\n}\n\nbutton {\n  padding: 0;\n  cursor: pointer;\n  background: none;\n  border-width: 0;\n  color: inherit;\n}\n\nstrong {\n  font-weight: 700;\n}\n\nlabel {\n  cursor: pointer;\n}\n\ni, em {\n  font-style: italic;\n}\n\nb {\n  font-weight: 500;\n}\n\n.bg-theme {\n  background: #E54147 !important;\n}\n\n.txt-theme {\n  color: #E54147 !important;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\u\ng-workspace\pass.pubg.com\src\styles.scss */"+EN/");


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map