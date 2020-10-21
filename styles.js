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
___CSS_LOADER_EXPORT___.push([module.i, "/* You can add global styles to this file, and also import other style files */\n*:focus {\n  outline: 0 !important;\n}\n*, *::before, *::after {\n  box-sizing: inherit;\n  touch-action: inherit;\n  border-style: solid;\n  border-width: 0;\n  border-color: inherit;\n}\nhtml, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6,\np, blockquote, pre, abbr, address, cite, code, del, dfn, em, img,\nins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd,\nol, ul, li, fieldset, form, label, legend, table, caption, tbody,\ntfoot, thead, tr, th, td, article, aside, dialog, figure, footer,\nheader, hgroup, menu, nav, section, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  background: transparent;\n  font: inherit;\n  font-size: 100%;\n  vertical-align: baseline;\n}\nhtml:lang(ko), body:lang(ko), div:lang(ko), span:lang(ko), object:lang(ko), iframe:lang(ko), h1:lang(ko), h2:lang(ko), h3:lang(ko), h4:lang(ko), h5:lang(ko), h6:lang(ko),\np:lang(ko), blockquote:lang(ko), pre:lang(ko), abbr:lang(ko), address:lang(ko), cite:lang(ko), code:lang(ko), del:lang(ko), dfn:lang(ko), em:lang(ko), img:lang(ko),\nins:lang(ko), kbd:lang(ko), q:lang(ko), samp:lang(ko), small:lang(ko), strong:lang(ko), sub:lang(ko), sup:lang(ko), var:lang(ko), b:lang(ko), i:lang(ko), dl:lang(ko), dt:lang(ko), dd:lang(ko),\nol:lang(ko), ul:lang(ko), li:lang(ko), fieldset:lang(ko), form:lang(ko), label:lang(ko), legend:lang(ko), table:lang(ko), caption:lang(ko), tbody:lang(ko),\ntfoot:lang(ko), thead:lang(ko), tr:lang(ko), th:lang(ko), td:lang(ko), article:lang(ko), aside:lang(ko), dialog:lang(ko), figure:lang(ko), footer:lang(ko),\nheader:lang(ko), hgroup:lang(ko), menu:lang(ko), nav:lang(ko), section:lang(ko), time:lang(ko), mark:lang(ko), audio:lang(ko), video:lang(ko) {\n  line-height: 1.2;\n  word-break: keep-all;\n}\nhtml:lang(ja), body:lang(ja), div:lang(ja), span:lang(ja), object:lang(ja), iframe:lang(ja), h1:lang(ja), h2:lang(ja), h3:lang(ja), h4:lang(ja), h5:lang(ja), h6:lang(ja),\np:lang(ja), blockquote:lang(ja), pre:lang(ja), abbr:lang(ja), address:lang(ja), cite:lang(ja), code:lang(ja), del:lang(ja), dfn:lang(ja), em:lang(ja), img:lang(ja),\nins:lang(ja), kbd:lang(ja), q:lang(ja), samp:lang(ja), small:lang(ja), strong:lang(ja), sub:lang(ja), sup:lang(ja), var:lang(ja), b:lang(ja), i:lang(ja), dl:lang(ja), dt:lang(ja), dd:lang(ja),\nol:lang(ja), ul:lang(ja), li:lang(ja), fieldset:lang(ja), form:lang(ja), label:lang(ja), legend:lang(ja), table:lang(ja), caption:lang(ja), tbody:lang(ja),\ntfoot:lang(ja), thead:lang(ja), tr:lang(ja), th:lang(ja), td:lang(ja), article:lang(ja), aside:lang(ja), dialog:lang(ja), figure:lang(ja), footer:lang(ja),\nheader:lang(ja), hgroup:lang(ja), menu:lang(ja), nav:lang(ja), section:lang(ja), time:lang(ja), mark:lang(ja), audio:lang(ja), video:lang(ja) {\n  line-height: 1.2;\n  word-break: break-all;\n}\nhtml:lang(zh-hans), body:lang(zh-hans), div:lang(zh-hans), span:lang(zh-hans), object:lang(zh-hans), iframe:lang(zh-hans), h1:lang(zh-hans), h2:lang(zh-hans), h3:lang(zh-hans), h4:lang(zh-hans), h5:lang(zh-hans), h6:lang(zh-hans),\np:lang(zh-hans), blockquote:lang(zh-hans), pre:lang(zh-hans), abbr:lang(zh-hans), address:lang(zh-hans), cite:lang(zh-hans), code:lang(zh-hans), del:lang(zh-hans), dfn:lang(zh-hans), em:lang(zh-hans), img:lang(zh-hans),\nins:lang(zh-hans), kbd:lang(zh-hans), q:lang(zh-hans), samp:lang(zh-hans), small:lang(zh-hans), strong:lang(zh-hans), sub:lang(zh-hans), sup:lang(zh-hans), var:lang(zh-hans), b:lang(zh-hans), i:lang(zh-hans), dl:lang(zh-hans), dt:lang(zh-hans), dd:lang(zh-hans),\nol:lang(zh-hans), ul:lang(zh-hans), li:lang(zh-hans), fieldset:lang(zh-hans), form:lang(zh-hans), label:lang(zh-hans), legend:lang(zh-hans), table:lang(zh-hans), caption:lang(zh-hans), tbody:lang(zh-hans),\ntfoot:lang(zh-hans), thead:lang(zh-hans), tr:lang(zh-hans), th:lang(zh-hans), td:lang(zh-hans), article:lang(zh-hans), aside:lang(zh-hans), dialog:lang(zh-hans), figure:lang(zh-hans), footer:lang(zh-hans),\nheader:lang(zh-hans), hgroup:lang(zh-hans), menu:lang(zh-hans), nav:lang(zh-hans), section:lang(zh-hans), time:lang(zh-hans), mark:lang(zh-hans), audio:lang(zh-hans), video:lang(zh-hans) {\n  line-height: 1.2;\n}\nhtml:lang(zh-hant), body:lang(zh-hant), div:lang(zh-hant), span:lang(zh-hant), object:lang(zh-hant), iframe:lang(zh-hant), h1:lang(zh-hant), h2:lang(zh-hant), h3:lang(zh-hant), h4:lang(zh-hant), h5:lang(zh-hant), h6:lang(zh-hant),\np:lang(zh-hant), blockquote:lang(zh-hant), pre:lang(zh-hant), abbr:lang(zh-hant), address:lang(zh-hant), cite:lang(zh-hant), code:lang(zh-hant), del:lang(zh-hant), dfn:lang(zh-hant), em:lang(zh-hant), img:lang(zh-hant),\nins:lang(zh-hant), kbd:lang(zh-hant), q:lang(zh-hant), samp:lang(zh-hant), small:lang(zh-hant), strong:lang(zh-hant), sub:lang(zh-hant), sup:lang(zh-hant), var:lang(zh-hant), b:lang(zh-hant), i:lang(zh-hant), dl:lang(zh-hant), dt:lang(zh-hant), dd:lang(zh-hant),\nol:lang(zh-hant), ul:lang(zh-hant), li:lang(zh-hant), fieldset:lang(zh-hant), form:lang(zh-hant), label:lang(zh-hant), legend:lang(zh-hant), table:lang(zh-hant), caption:lang(zh-hant), tbody:lang(zh-hant),\ntfoot:lang(zh-hant), thead:lang(zh-hant), tr:lang(zh-hant), th:lang(zh-hant), td:lang(zh-hant), article:lang(zh-hant), aside:lang(zh-hant), dialog:lang(zh-hant), figure:lang(zh-hant), footer:lang(zh-hant),\nheader:lang(zh-hant), hgroup:lang(zh-hant), menu:lang(zh-hant), nav:lang(zh-hant), section:lang(zh-hant), time:lang(zh-hant), mark:lang(zh-hant), audio:lang(zh-hant), video:lang(zh-hant) {\n  line-height: 1.2;\n}\narticle, aside, dialog, figure, footer, header, hgroup, nav,\nsection, main {\n  display: block;\n}\nhtml {\n  overflow-y: scroll;\n  overflow: -moz-scrollbars-vertical;\n  box-sizing: border-box;\n  touch-action: manipulation;\n}\nbody {\n  background: #000000;\n  color: #adadad;\n  line-height: 1;\n  overflow-x: hidden;\n  position: relative;\n  font-family: \"Teko\", \"Oswald\", sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n}\nbody:lang(ko) {\n  font-family: \"Teko\", \"Oswald\", \"Noto Sans KR\", sans-serif;\n}\nbody:lang(ja) {\n  font-family: \"Teko\", \"Oswald\", \"Noto Sans JP\", sans-serif;\n}\nbody:lang(zh-hans) {\n  font-family: \"Teko\", \"Oswald\", \"Noto Sans SC\", sans-serif;\n}\nbody:lang(zh-hant) {\n  font-family: \"Teko\", \"Oswald\", \"Noto Sans TC\", sans-serif;\n}\nblockquote, q {\n  quotes: none;\n}\nul, ol {\n  list-style: none;\n}\nblockquote::before, blockquote::after,\nq::before, q::after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n*, *::before, *::after {\n  box-sizing: inherit;\n  touch-action: inherit;\n  border-style: solid;\n  border-width: 0;\n  border-color: inherit;\n}\n@-ms-viewport {\n  width: device-width;\n}\ninput, button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: none;\n  border: 0;\n  outline: 0;\n  color: inherit;\n  font: inherit;\n}\na {\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n  position: relative;\n}\nsvg, img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\nbutton {\n  padding: 0;\n  cursor: pointer;\n  background: none;\n  border-width: 0;\n  color: inherit;\n}\nstrong {\n  font-weight: 700;\n}\nlabel {\n  cursor: pointer;\n}\ni, em {\n  font-style: italic;\n}\nb {\n  font-weight: 500;\n}\nul.layout li section h3 {\n  color: #FFFFFF;\n  font-family: \"Teko\", \"Oswald\", sans-serif;\n  font-size: 45px;\n  line-height: 0.9em;\n  text-align: center;\n  text-transform: uppercase;\n}\n@media screen and (min-width: 1200px) {\n  ul.layout li section h3 {\n    font-size: 64px;\n  }\n}\nul.layout li section h3:lang(ko) {\n  font-family: \"Noto Sans KR\", sans-serif;\n  font-size: 45px;\n  letter-spacing: -2px;\n  font-weight: 700;\n}\nul.layout li section h3:lang(ko) .txt-theme {\n  font-family: \"Teko\", \"Oswald\", \"Noto Sans KR\", sans-serif;\n  letter-spacing: 0;\n}\n@media screen and (max-width: 1200px) {\n  ul.layout li section h3:lang(ko) {\n    font-size: 26px;\n  }\n}\nul.layout li section h3:lang(ja) {\n  font-size: 45px;\n  letter-spacing: 0.5px;\n  font-weight: 700;\n}\n@media screen and (max-width: 1024px) {\n  ul.layout li section h3:lang(ja) {\n    font-size: 34px;\n  }\n}\nul.layout li section h3:lang(zh-hans) {\n  font-family: \"Noto Sans SC\", sans-serif;\n  font-size: 45px;\n  letter-spacing: 0.5px;\n  font-weight: 700;\n}\n@media screen and (max-width: 1024px) {\n  ul.layout li section h3:lang(zh-hans) {\n    font-size: 34px;\n  }\n}\nul.layout li section h3:lang(zh-hans) .txt-theme {\n  font-family: \"Teko\", \"Oswald\", \"Noto Sans SC\", sans-serif;\n  letter-spacing: 0;\n  padding-top: 16px;\n}\nul.layout li section h3:lang(zh-hant) {\n  font-family: \"Noto Sans TC\", sans-serif;\n  font-size: 45px;\n  letter-spacing: 0.5px;\n  font-weight: 700;\n}\n@media screen and (max-width: 1024px) {\n  ul.layout li section h3:lang(zh-hant) {\n    font-size: 34px;\n  }\n}\nul.layout li section h3:lang(zh-hant) .txt-theme {\n  font-family: \"Teko\", \"Oswald\", \"Noto Sans TC\", sans-serif;\n  letter-spacing: 0;\n  padding-top: 16px;\n}\nul.layout li section h3:lang(ru) {\n  text-transform: initial;\n  font-size: 54px;\n}\n@media screen and (max-width: 1200px) {\n  ul.layout li section h3:lang(ru) {\n    font-size: 45px;\n    line-height: 1.2em;\n  }\n}\nul.layout li section h3:lang(th) {\n  font-size: 60px;\n}\n@media screen and (max-width: 1200px) {\n  ul.layout li section h3:lang(th) {\n    font-size: 40px;\n    padding-left: 5%;\n    padding-right: 5%;\n    line-height: 1.2em;\n  }\n}\nul.layout li section h3:lang(vi) {\n  text-transform: initial;\n  padding-left: 5%;\n  padding-right: 5%;\n  line-height: 1.2em;\n  font-size: 40px;\n}\n@media screen and (min-width: 1200px) {\n  ul.layout li section {\n    min-height: 800px;\n  }\n}\nul.layout li section figure picture img {\n  object-fit: cover;\n  object-position: center;\n}\n.dropdown-icon, .dropdown-icon-wh, .external-icon, .external-icon-wh {\n  margin-top: -3px;\n  margin-left: 5px;\n  margin-right: -10px;\n  width: 14px;\n  height: 14px;\n}\n.dropdown-icon.open, .dropdown-icon-wh.open, .external-icon.open, .external-icon-wh.open {\n  transform: scaleY(-1);\n}\n.bg-theme {\n  background: #E54147 !important;\n  color: #FFFFFF !important;\n}\n.txt-theme {\n  color: #E54147 !important;\n}\n.abc-font {\n  font-family: \"Teko\", \"Oswald\", sans-serif;\n}", "",{"version":3,"sources":["webpack://src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["/* You can add global styles to this file, and also import other style files */\r\n\r\n*:focus {\r\n  outline: 0 !important;\r\n}\r\n\r\n*, *::before, *::after {\r\n  box-sizing: inherit;\r\n  -ms-touch-action: inherit;\r\n  touch-action: inherit;\r\n  border-style: solid;\r\n  border-width: 0;\r\n  border-color: inherit;\r\n}\r\n\r\nhtml, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6,\r\np, blockquote, pre, abbr, address, cite, code, del, dfn, em, img,\r\nins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd,\r\nol, ul, li, fieldset, form, label, legend, table, caption, tbody,\r\ntfoot, thead, tr, th, td, article, aside, dialog, figure, footer,\r\nheader, hgroup, menu, nav, section, time, mark, audio, video {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: transparent;\r\n    font: inherit;\r\n    font-size: 100%;\r\n    vertical-align: baseline;\r\n\r\n    &:lang(ko) {\r\n      line-height: 1.2;\r\n      word-break: keep-all;\r\n    }\r\n  \r\n    &:lang(ja) {\r\n      line-height: 1.2;   \r\n      word-break: break-all        \r\n    }\r\n  \r\n    &:lang(zh-hans) {\r\n      line-height: 1.2;\r\n    }\r\n  \r\n    &:lang(zh-hant) {\r\n      line-height: 1.2;\r\n    }\r\n}\r\n\r\narticle, aside, dialog, figure, footer, header, hgroup, nav,\r\nsection, main {\r\n    display: block;\r\n}\r\n\r\nhtml {\r\n  overflow-y: scroll;\r\n  overflow: -moz-scrollbars-vertical;\r\n  box-sizing: border-box;\r\n  -ms-touch-action: manipulation;\r\n  touch-action: manipulation;\r\n}\r\n\r\nbody {\r\n  background: #000000;\r\n  color: #adadad;\r\n  line-height: 1;\r\n  overflow-x: hidden;\r\n  position: relative;\r\n  font-family: 'Teko', 'Oswald', sans-serif;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n\r\n  &:lang(ko) {\r\n    font-family: 'Teko', 'Oswald', 'Noto Sans KR', sans-serif;\r\n  }\r\n\r\n  &:lang(ja) {\r\n    font-family: 'Teko', 'Oswald', 'Noto Sans JP', sans-serif;\r\n  }\r\n\r\n  &:lang(zh-hans) {\r\n    font-family: 'Teko', 'Oswald', 'Noto Sans SC', sans-serif;\r\n  }\r\n\r\n  &:lang(zh-hant) {\r\n    font-family: 'Teko', 'Oswald', 'Noto Sans TC', sans-serif;\r\n  }\r\n}\r\n\r\nblockquote, q {\r\n    quotes: none;\r\n}\r\n\r\nul, ol {\r\n    list-style: none;\r\n}\r\n\r\nblockquote::before, blockquote::after,\r\nq::before, q::after {\r\n    content: '';\r\n    content: none;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\n*, *::before, *::after {\r\n  box-sizing: inherit;\r\n  -ms-touch-action: inherit;\r\n  touch-action: inherit;\r\n  border-style: solid;\r\n  border-width: 0;\r\n  border-color: inherit;\r\n}\r\n\r\n@-ms-viewport {\r\n  width: device-width;\r\n}\r\n\r\ninput, button {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    background: none;\r\n    border: 0;\r\n    outline: 0;\r\n    color: inherit;\r\n    font: inherit;\r\n}\r\n\r\na {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    position: relative;\r\n}\r\n\r\nsvg, img {\r\n    display: block;\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\nbutton {\r\n  padding: 0;\r\n  cursor: pointer;\r\n  background: none;\r\n  border-width: 0;\r\n  color: inherit;\r\n}\r\n\r\nstrong {\r\n  font-weight: 700;\r\n}\r\n\r\nlabel {\r\n  cursor: pointer;\r\n}\r\n\r\ni, em {\r\n  font-style: italic;\r\n}\r\n\r\nb {\r\n  font-weight: 500;\r\n}\r\n\r\nul.layout {\r\n  li {\r\n    section {\r\n      h3 {\r\n        color: #FFFFFF;\r\n        font-family: 'Teko', 'Oswald', sans-serif;\r\n        font-size: 45px;\r\n        line-height: 0.9em;\r\n        text-align: center;\r\n        text-transform: uppercase;\r\n        \r\n  \r\n        @media screen and (min-width: 1200px) {\r\n          font-size: 64px;\r\n        }\r\n\r\n        &:lang(ko) {\r\n          //font-family: 'Teko', 'Oswald', 'Noto Sans KR', sans-serif;\r\n          font-family: 'Noto Sans KR', sans-serif;\r\n          font-size:45px;\r\n          letter-spacing: -2px;\r\n          font-weight: 700;\r\n\r\n          .txt-theme {\r\n            font-family: 'Teko', 'Oswald', 'Noto Sans KR', sans-serif;\r\n            letter-spacing: 0;\r\n          }\r\n\r\n          @media screen and (max-width: 1200px) {\r\n            font-size: 26px;\r\n          }\r\n        }\r\n      \r\n        &:lang(ja) {\r\n          //font-family: 'Teko', 'Oswald', 'Noto Sans JP', sans-serif;    \r\n          //font-family: 'Noto Sans JP', sans-serif;          \r\n          font-size:45px;\r\n          letter-spacing: 0.5px;\r\n          font-weight: 700;\r\n          @media screen and (max-width: 1024px) {\r\n            font-size: 34px;\r\n            \r\n          }\r\n        }\r\n\r\n        &:lang(zh-hans) {\r\n          //font-family: 'Teko', 'Oswald', 'Noto Sans SC', sans-serif;\r\n          font-family: 'Noto Sans SC', sans-serif;\r\n          font-size:45px;\r\n          letter-spacing: 0.5px;\r\n          font-weight: 700;\r\n          @media screen and (max-width: 1024px) {\r\n            font-size: 34px;\r\n            \r\n          }\r\n          .txt-theme {\r\n            font-family: 'Teko', 'Oswald', 'Noto Sans SC', sans-serif;\r\n            letter-spacing: 0;\r\n            padding-top:16px;\r\n          }\r\n        }\r\n\r\n        &:lang(zh-hant) {\r\n          //font-family: 'Teko', 'Oswald', 'Noto Sans TC', sans-serif;\r\n          font-family: 'Noto Sans TC', sans-serif;\r\n          font-size:45px;\r\n          letter-spacing: 0.5px;\r\n          font-weight: 700;\r\n          @media screen and (max-width: 1024px) {\r\n            font-size: 34px;\r\n            \r\n          }\r\n          .txt-theme {\r\n            font-family: 'Teko', 'Oswald', 'Noto Sans TC', sans-serif;\r\n            letter-spacing: 0;\r\n            padding-top:16px;\r\n          }\r\n        }\r\n\r\n        &:lang(ru) {\r\n          text-transform: initial;\r\n          font-size: 54px;\r\n          @media screen and (max-width: 1200px) {\r\n            font-size: 45px;\r\n            line-height: 1.2em;\r\n          }\r\n        }\r\n\r\n        &:lang(th) {\r\n          font-size:60px;\r\n\r\n          @media screen and (max-width: 1200px) {\r\n            font-size: 40px;\r\n            padding-left:5%;\r\n            padding-right:5%;\r\n            line-height: 1.2em;\r\n          }\r\n        }\r\n\r\n        &:lang(vi) {\r\n          text-transform: initial;\r\n          padding-left:5%;\r\n          padding-right:5%;\r\n          line-height: 1.2em;\r\n          font-size: 40px;\r\n        }\r\n\r\n      }\r\n\r\n      @media screen and (min-width: 1200px) {\r\n        min-height: 800px;\r\n      }\r\n      \r\n      figure {\r\n        picture {\r\n          img {\r\n            object-fit: cover;\r\n            object-position: center;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.dropdown, .external {\r\n  &-icon, &-icon-wh {\r\n    margin-top: -3px;\r\n    margin-left: 5px;\r\n    margin-right: -10px;\r\n    width: 14px;\r\n    height: 14px;\r\n  \r\n    &.open {\r\n      transform: scaleY(-1);\r\n    }\r\n  }\r\n}\r\n\r\n.bg-theme {\r\n  background: #E54147 !important;\r\n  color: #FFFFFF !important;\r\n}\r\n\r\n.txt-theme {\r\n  color: #E54147 !important;\r\n}\r\n\r\n.abc-font {\r\n  font-family: 'Teko', 'Oswald', sans-serif;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\u\ng-workspace\season9_1015\src\styles.scss */"+EN/");


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

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map