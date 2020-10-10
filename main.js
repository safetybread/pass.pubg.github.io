(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\u\ng-workspace\pass.pubg.com\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "he5r");
/* harmony import */ var _services_translator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/translator.service */ "Z68+");
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/menu.service */ "Gi7S");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _pipes_menu_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/menu.pipe */ "DJsg");








function HeaderComponent_li_9__svg_svg_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "dropdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "use", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_9__svg_svg_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "external");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "use", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_9_ul_8_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subItem_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", subItem_r11.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, subItem_r11.translate)));
} }
function HeaderComponent_li_9_ul_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_li_9_ul_8_li_1_Template, 5, 6, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r6.submenu);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function HeaderComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_li_9__svg_svg_6_Template, 4, 0, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_li_9__svg_svg_7_Template, 4, 0, "svg", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_li_9_ul_8_Template, 2, 1, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, item_r6.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", item_r6.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 8, item_r6.translate)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.submenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.external);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.submenu);
} }
function HeaderComponent_li_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r13.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.name);
} }
function HeaderComponent_li_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "use");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r14.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, item_r14.translate)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", item_r14.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 10, item_r14.translate)));
} }
function HeaderComponent_li_71__svg_svg_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "dropdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "use", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_71_ul_7_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subItem_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", subItem_r20.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, subItem_r20.translate)));
} }
function HeaderComponent_li_71_ul_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_li_71_ul_7_li_1_Template, 5, 6, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r15.submenu);
} }
const _c1 = function (a0, a1) { return { "txt-theme": a0, "open": a1 }; };
const _c2 = function (a0) { return { "community-btn": a0 }; };
function HeaderComponent_li_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_li_71__svg_svg_6_Template, 4, 0, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_li_71_ul_7_Template, 2, 1, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c1, item_r15.active, i_r16 === 1 && ctx_r3.isOpenCommunity));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c2, i_r16 === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", item_r15.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 8, item_r15.translate)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.submenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.submenu);
} }
function HeaderComponent_li_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "use");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r22.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, item_r22.translate)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", item_r22.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 10, item_r22.translate)));
} }
function HeaderComponent_li_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r23.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r23.name);
} }
const _c3 = function (a0) { return { "open": a0 }; };
class HeaderComponent {
    constructor(translator, menu) {
        const lang = translator.getCurrentLanguage();
        this.langItems = _constants__WEBPACK_IMPORTED_MODULE_1__["Language"];
        this.menuItems = menu.getMenu(lang);
        this.buyItems = menu.getBuyNow(lang);
        this.isOpenMenu = false;
        this.isOpenBuynow = false;
        this.isOpenLang = false;
    }
    ngOnInit() { }
    onClick(event) {
        if (event.target.closest('.menu-btn')) {
            this.isOpenMenu = !this.isOpenMenu;
            this.isOpenLang = false;
        }
        else if (event.target.closest('.lang-btn')) {
            this.isOpenLang = !this.isOpenLang;
            this.isOpenMenu = false;
            this.isOpenCommunity = false;
            this.isOpenBuynow = false;
        }
        else if (event.target.closest('.community-btn')) {
            this.isOpenCommunity = !this.isOpenCommunity;
        }
        else if (event.target.closest('.buynow-btn')) {
            this.isOpenBuynow = !this.isOpenBuynow;
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_translator_service__WEBPACK_IMPORTED_MODULE_2__["TranslatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_click_HostBindingHandler($event) { return ctx.onClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 86, vars: 24, consts: [[1, "header"], [1, "header-nav"], [1, "brand"], ["href", "https://www.pubg.com"], ["href", "assets/img/icons.svg#PUBG-TM"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["href", "assets/img/icons.svg#account"], [2, "display", "none"], ["href", "#"], ["href", "assets/img/icons.svg#globe"], [4, "ngFor", "ngForOf"], [1, "bg-theme"], ["href", "#", 1, "buynow-btn"], [1, "dropdown"], ["href", "assets/img/icons.svg#dropdown"], [1, "buynow-list"], [1, "header-mobile"], ["href", "https://www.pubg.com", 1, "brand"], ["href", "#", 1, "lang-btn"], [1, "bg-theme", "menu-btn"], [1, "burger"], [1, "header-nav-mobile", 3, "ngClass"], [1, "bg-theme", 3, "ngClass"], [1, "header-nav-mobile-lang", 3, "ngClass"], [3, "ngClass"], ["class", "dropdown", 4, "ngIf"], ["class", "external", 4, "ngIf"], [4, "ngIf"], [1, "external"], ["href", "assets/img/icons.svg#external"], [3, "href"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "PUBG-TM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "use", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_li_9_Template, 9, 12, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "use", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "globe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "use", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HeaderComponent_li_29_Template, 3, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "use", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, HeaderComponent_li_40_Template, 12, 12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "PUBG-TM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "use", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "use", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "globe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "use", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "nav", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, HeaderComponent_li_71_Template, 8, 15, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "use", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, HeaderComponent_li_82_Template, 12, 12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, HeaderComponent_li_85_Template, 3, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.langItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 12, "buynow.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.buyItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](56, 14, "login"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c3, ctx.isOpenMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c3, ctx.isOpenBuynow));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](76, 16, "buynow.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.buyItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c3, ctx.isOpenLang));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.langItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], _pipes_menu_pipe__WEBPACK_IMPORTED_MODULE_6__["MenuPipe"]], styles: ["header[_ngcontent-%COMP%] {\n  background: #161616;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 5;\n  display: flex;\n  justify-content: space-between;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.header[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%] {\n  display: none;\n  height: 60px;\n}\n\n@media screen and (min-width: 1200px) {\n  .header[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%] {\n    display: flex;\n    min-height: 80px;\n  }\n}\n\n.header[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n}\n\n.header[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  display: flex;\n  padding: 0 20px;\n  font-family: \"Teko\", \"Oswald\", sans-serif;\n  font-size: 20px;\n  line-height: 1;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n}\n\n.header[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #FFFFFF;\n}\n\n.header[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n\n.header[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg.dropdown[_ngcontent-%COMP%] {\n  margin-top: -3px;\n  margin-left: 5px;\n  margin-right: -10px;\n  width: 12px;\n  height: 12px;\n}\n\n.header[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg.external[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  margin-top: -5px;\n  margin-left: 5px;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.header[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:first-child) {\n  padding-left: 10px;\n  margin-bottom: -3px;\n}\n\n.header[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 0.4s 0.4s ease, visibility 0s 0.8s ease, transform 0.4s 0.4s ease;\n  transform: translateY(10px);\n  padding-bottom: 10px;\n  background-color: #161616;\n  text-align: right;\n  max-width: 200px;\n  min-width: 100%;\n  border-top: 2px solid #252525;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n\n.header[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.header[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Teko\", \"Oswald\", sans-serif;\n  font-size: 20px;\n  line-height: 25px;\n  text-transform: uppercase;\n  font-weight: 100;\n  padding: 5px 20px 0;\n  display: flex;\n  white-space: nowrap;\n  width: 100%;\n}\n\n.header[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #fff;\n  background: rgba(255, 255, 255, 0.1);\n}\n\n.header[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 0px;\n}\n\n.header[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:first-child) {\n  padding-left: 10px;\n}\n\n.header[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul.buynow-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.header[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul.buynow-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  vertical-align: -3px;\n}\n\n.header[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li.brand[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0 40px;\n}\n\n.header[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li.brand[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 45px;\n}\n\n.header[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li.bg-theme[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}\n\n.header[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li.bg-theme[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  padding: 0 30px;\n}\n\n.header[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li.bg-theme[_ngcontent-%COMP%]   a.buynow-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (min-width: 1200px) {\n  .header[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li.bg-theme[_ngcontent-%COMP%]   a.buynow-btn[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n\n.header[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   ul[_ngcontent-%COMP%] {\n  transition: opacity 0.4s ease, visibility 0s 0s ease, transform 0.4s ease;\n  opacity: 1;\n  visibility: visible;\n  transform: none;\n}\n\nnav.header[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:not(.brand):hover, nav.header[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:not(.brand).active {\n  background-color: #252525;\n  color: #FFFFFF;\n}\n\nnav.header[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:not(.brand):hover:after, nav.header[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:not(.brand).active:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: currentColor;\n}\n\ndiv.header-mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (max-width: 1199px) {\n  div.header-mobile[_ngcontent-%COMP%] {\n    background: #161616;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 5;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 20px;\n  }\n  div.header-mobile[_ngcontent-%COMP%]   a.brand[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 70px;\n    height: 40px;\n  }\n  div.header-mobile[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%] {\n    display: flex;\n    min-height: 60px;\n  }\n  div.header-mobile[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: flex;\n    position: relative;\n  }\n  div.header-mobile[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: inherit;\n    display: flex;\n    padding: 0 20px;\n    font-family: \"Teko\", \"Oswald\", sans-serif;\n    font-size: 20px;\n    line-height: 1;\n    text-transform: uppercase;\n    display: flex;\n    align-items: center;\n    white-space: nowrap;\n  }\n  div.header-mobile[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #FFFFFF;\n  }\n  div.header-mobile[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 22px;\n    height: 22px;\n  }\n  div.header-mobile[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg.dropdown[_ngcontent-%COMP%] {\n    margin-top: -3px;\n    margin-left: 5px;\n    margin-right: -10px;\n    width: 12px;\n    height: 12px;\n  }\n  div.header-mobile[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:first-child) {\n    padding-left: 10px;\n    margin-bottom: -3px;\n  }\n  div.header-mobile[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.menu-btn[_ngcontent-%COMP%] {\n    z-index: 1;\n    padding: 0 15px;\n    font-family: \"Teko\", \"Oswald\", sans-serif;\n    font-size: 20px;\n    line-height: 1;\n    text-transform: uppercase;\n    display: flex;\n    align-items: center;\n    white-space: nowrap;\n  }\n  div.header-mobile[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.menu-btn[_ngcontent-%COMP%]   .burger[_ngcontent-%COMP%] {\n    transform: translateZ(0px);\n    -webkit-backface-visibility: none;\n            backface-visibility: none;\n    height: 18px;\n    width: 30px;\n    display: block;\n    position: relative;\n    border-color: #FFFFFF;\n  }\n  div.header-mobile[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.menu-btn[_ngcontent-%COMP%]   .burger[_ngcontent-%COMP%]::after, div.header-mobile[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.menu-btn[_ngcontent-%COMP%]   .burger[_ngcontent-%COMP%]::before, div.header-mobile[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.menu-btn[_ngcontent-%COMP%]   .burger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    content: \"\";\n    display: block;\n    border-top-width: 2px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    transform-origin: 50% 50%;\n    transition: top 0.2s 0.2s ease, bottom 0.2s 0.2s ease, transform 0.2s 0s ease;\n  }\n  div.header-mobile[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.menu-btn[_ngcontent-%COMP%]   .burger[_ngcontent-%COMP%]::after {\n    bottom: 0;\n  }\n  div.header-mobile[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.menu-btn[_ngcontent-%COMP%]   .burger[_ngcontent-%COMP%]::before {\n    top: 0;\n  }\n  div.header-mobile[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.menu-btn[_ngcontent-%COMP%]   .burger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-top: -1px;\n    top: 50%;\n    font-size: 0;\n  }\n  div.header-mobile[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.menu-btn[_ngcontent-%COMP%]   .burger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n    content: \"\";\n    position: absolute;\n    top: -30px;\n    left: -30px;\n    right: -30px;\n    bottom: -30px;\n  }\n  div.header-mobile[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li.bg-theme[_ngcontent-%COMP%] {\n    margin-left: 30px;\n  }\n  div.header-mobile[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li.bg-theme[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 0 30px;\n  }\n  div.header-mobile[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li.bg-theme[_ngcontent-%COMP%]   a.buynow-btn[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  div.header-mobile[_ngcontent-%COMP%]   ul.header-nav[_ngcontent-%COMP%]   li.bg-theme[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #FFFFFF;\n  }\n}\n\nnav.header-nav-mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (max-width: 1199px) {\n  nav.header-nav-mobile[_ngcontent-%COMP%] {\n    flex: 1 0 auto;\n    background-color: #161616;\n    color: #adadad;\n    position: fixed;\n    top: 60px;\n    left: 0;\n    right: 0;\n    z-index: 5;\n    width: 100%;\n  }\n  nav.header-nav-mobile[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n    border-color: #252525;\n  }\n  nav.header-nav-mobile[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    height: 65px;\n    transition: max-height 0.45s ease;\n    color: currentColor;\n  }\n  nav.header-nav-mobile[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    border-top-width: 1px;\n  }\n  nav.header-nav-mobile[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: inherit;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px 30px 15px;\n    font-family: \"Teko\", \"Oswald\", sans-serif;\n    font-size: 30px;\n    line-height: 30px;\n    text-transform: uppercase;\n  }\n  nav.header-nav-mobile[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 22px;\n    height: 22px;\n  }\n  nav.header-nav-mobile[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg.dropdown[_ngcontent-%COMP%] {\n    margin-top: -3px;\n    margin-left: 5px;\n    margin-right: -10px;\n    width: 12px;\n    height: 12px;\n  }\n  nav.header-nav-mobile[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:first-child) {\n    padding-left: 10px;\n    margin-bottom: -3px;\n  }\n  nav.header-nav-mobile[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li.bg-theme[_ngcontent-%COMP%] {\n    color: #FFFFFF;\n  }\n  nav.header-nav-mobile[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    background-color: #161616;\n  }\n  nav.header-nav-mobile[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    height: auto;\n    transition: max-height 0.45s ease;\n  }\n  nav.header-nav-mobile[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:first-child)::before {\n    border-top-width: 0;\n  }\n  nav.header-nav-mobile[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: inherit;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    padding: 10px 30px 7px;\n    font-family: \"Teko\", \"Oswald\", sans-serif;\n    font-size: 26px;\n    line-height: 26px;\n    text-transform: uppercase;\n  }\n  nav.header-nav-mobile[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li.open[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  nav.header-nav-mobile.open[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\ndiv.header-nav-mobile-lang[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (max-width: 1199px) {\n  div.header-nav-mobile-lang[_ngcontent-%COMP%] {\n    flex: 1 0 auto;\n    background-color: #161616;\n    color: #adadad;\n    position: fixed;\n    top: 60px;\n    left: 0;\n    right: 0;\n    z-index: 5;\n    width: 100%;\n  }\n  div.header-nav-mobile-lang[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    max-height: 65px;\n    transition: max-height 0.45s ease;\n  }\n  div.header-nav-mobile-lang[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: inherit;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    padding: 10px 30px 5px;\n    font-family: \"Teko\", \"Oswald\", sans-serif;\n    font-size: 20.6px;\n    line-height: 20.6px;\n    text-transform: uppercase;\n  }\n  div.header-nav-mobile-lang.open[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBQUo7O0FBRUk7RUFKRjtJQUtJLGFBQUE7SUFDQSxnQkFBQTtFQUNKO0FBQ0Y7O0FBQ0k7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFDTjs7QUFDTTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ1I7O0FBQ1E7RUFDRSxjQUFBO0FBQ1Y7O0FBRVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFWOztBQUVVO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBWjs7QUFHVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFEWjs7QUFNVTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFKWjs7QUFTTTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxRkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSx3Q0FBQTtBQVBSOztBQVNRO0VBQ0UsaUJBQUE7QUFQVjs7QUFTVTtFQUNFLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtF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QTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtFQTlFUjtFQW1GRTtJQUNFLGNBQUE7RUFqRko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6ICMxNjE2MTY7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgdWwuaGVhZGVyLW5hdiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTIwMHB4KSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ1Rla28nLCAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICB3aWR0aDogMjJweDtcclxuICAgICAgICAgIGhlaWdodDogMjJweDtcclxuXHJcbiAgICAgICAgICAmLmRyb3Bkb3duIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTNweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLmV4dGVybmFsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtM3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIDAuNHMgZWFzZSwgdmlzaWJpbGl0eSAwcyAwLjhzIGVhc2UsIHRyYW5zZm9ybSAwLjRzIDAuNHMgZWFzZTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTYxNjtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgIzI1MjUyNTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdUZWtvJywgJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc3Bhbjpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYnV5bm93LWxpc3Qge1xyXG4gICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBcclxuICAgICAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogLTNweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnJhbmQge1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgcGFkZGluZzogMCA0MHB4O1xyXG4gIFxyXG4gICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYmctdGhlbWUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgcGFkZGluZzogMCAzMHB4O1xyXG5cclxuICAgICAgICAgICYuYnV5bm93LWJ0biB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZSwgdmlzaWJpbGl0eSAwcyAwcyBlYXNlLCB0cmFuc2Zvcm0gMC40cyBlYXNlO1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5uYXYuaGVhZGVyIHtcclxuICB1bC5oZWFkZXItbmF2IHtcclxuICAgICYgPiBsaTpub3QoLmJyYW5kKSB7XHJcbiAgICAgICY6aG92ZXIsICYuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNTI1O1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG5cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5kaXYuaGVhZGVyLW1vYmlsZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTYxNjE2O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5cclxuICAgIGEuYnJhbmQge1xyXG4gICAgICBzdmcge1xyXG4gICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVsLmhlYWRlci1uYXYge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gIFxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdUZWtvJywgJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcblxyXG4gICAgICAgICAgICAmLmRyb3Bkb3duIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtM3B4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0zcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBhLm1lbnUtYnRuIHtcclxuICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ1Rla28nLCAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgXHJcbiAgICAgICAgICAuYnVyZ2VyIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XHJcbiAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IG5vbmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgXHJcbiAgICAgICAgICAgICY6OmFmdGVyLCAmOjpiZWZvcmUsIHNwYW4ge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcC13aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMnMgMC4ycyBlYXNlLCBib3R0b20gMC4ycyAwLjJzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIDBzIGVhc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMDtcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0zMHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTMwcHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTMwcHg7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IC0zMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5iZy10aGVtZSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICBcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgXHJcbiAgICAgICAgICAgICYuYnV5bm93LWJ0biB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5uYXYuaGVhZGVyLW5hdi1tb2JpbGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gICAgLW1zLWZsZXg6IDEgMCBhdXRvO1xyXG4gICAgZmxleDogMSAwIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxNjE2O1xyXG4gICAgY29sb3I6ICNhZGFkYWQ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDYwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJiA+IHVsIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjMjUyNTI1O1xyXG5cclxuICAgICAgbGkge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGhlaWdodDogNjVweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNDVzIGVhc2U7XHJcbiAgICAgICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuXHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMzBweCAxNXB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdUZWtvJywgJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBcclxuICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBcclxuICAgICAgICAgICAgJi5kcm9wZG93biB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTNweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmJnLXRoZW1lIHtcclxuICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTYxNjtcclxuXHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNDVzIGVhc2U7XHJcblxyXG4gICAgICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC13aWR0aDogMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHggN3B4O1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnVGVrbycsICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLm9wZW4ge1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYub3BlbiB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZGl2LmhlYWRlci1uYXYtbW9iaWxlLWxhbmcge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gICAgLW1zLWZsZXg6IDEgMCBhdXRvO1xyXG4gICAgZmxleDogMSAwIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxNjE2O1xyXG4gICAgY29sb3I6ICNhZGFkYWQ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDYwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgdWwge1xyXG4gICAgICBsaSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgbWF4LWhlaWdodDogNjVweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNDVzIGVhc2U7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAzMHB4IDVweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnVGVrbycsICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMC42cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjAuNnB4O1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLm9wZW4ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _services_translator_service__WEBPACK_IMPORTED_MODULE_2__["TranslatorService"] }, { type: _services_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"] }]; }, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Cuw9":
/*!*********************************************************!*\
  !*** ./src/app/components/content/content.component.ts ***!
  \*********************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_translator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/translator.service */ "Z68+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






function ContentComponent_img_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 46);
} }
function ContentComponent_img_145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 47);
} }
function ContentComponent_img_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 48);
} }
function ContentComponent_img_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 49);
} }
function ContentComponent_img_148_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 50);
} }
const _c0 = function (a0) { return { "active": a0 }; };
class ContentComponent {
    constructor(route, translator) {
        this.sectionItems = [];
        this.id = 'qDuKsiwS5xw';
        this.playerVars = {
            cc_lang_pref: 'en'
        };
        this.version = '...';
        const lang = route.snapshot.params.lang;
        if (lang) {
            translator.useLanguage(lang);
        }
        else {
            translator.useLanguage('en');
        }
        // this.sixthSectionVideo = embedVideo.embed('https://player.vimeo.com/video/440524382');
        this.lastEmotActive = false;
        this.lastMapActive = 'lab';
    }
    ngOnInit() {
    }
    onMouseOver(event) {
        if (event.target.closest('.emot-left')) {
            this.lastEmotActive = false;
        }
        else if (event.target.closest('.emot-right')) {
            this.lastEmotActive = true;
        }
    }
    onClick(event) {
        if (event.target.closest('.map-item')) {
            this.lastMapActive = event.target.textContent.toLowerCase();
        }
    }
    onStateChange(event) {
        this.ytEvent = event.data;
    }
    savePlayer(player) {
        this.player = player;
    }
    playVideo() {
        this.player.playVideo();
    }
    pauseVideo() {
        this.player.pauseVideo();
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_translator_service__WEBPACK_IMPORTED_MODULE_2__["TranslatorService"])); };
ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["app-content"]], hostBindings: function ContentComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function ContentComponent_mouseover_HostBindingHandler($event) { return ctx.onMouseOver($event); })("click", function ContentComponent_click_HostBindingHandler($event) { return ctx.onClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 168, vars: 73, consts: [["role", "document"], ["src", "https://player.vimeo.com/video/440524382?autoplay=1&loop=1&autopause=0?background=1?control=0", "frameborder", "0", "allow", "autoplay; fullscreen", "allowfullscreen", ""], ["src", "assets/img/season-label.png"], ["src", "assets/img/bg-new.jpg"], [1, "character"], ["src", "assets/img/ch-01.png"], [1, "bg-cover"], [1, "align-right"], [1, "txt-theme"], ["href", "#"], [1, "items"], ["src", "assets/img/item-gloves.png"], ["src", "assets/img/item-gun.png"], ["src", "assets/img/item-shoes.png"], ["src", "assets/img/item-hat.png"], ["src", "assets/img/bg-key.jpg"], [1, "bg-dark"], ["src", "assets/img/bg-video.jpg"], ["src", "https://player.vimeo.com/video/440524382?autoplay=1&loop=1&autopause=0", "frameborder", "0", "allow", "autoplay; fullscreen", "allowfullscreen", ""], ["src", "assets/img/bg-ch.jpg"], [1, "ch-img-wrapper"], [1, "point-wrapper", "point-ch-02"], [1, "point-wrapper", "point-ch-03"], [1, "console-exclusive-items"], [1, "point-wrapper", "point-ch-01"], [1, "bg-theme", "txt-white"], [1, "emot-left", 3, "ngClass"], ["src", "/assets/img/emot-01.png"], ["src", "assets/img/emot-gif.png"], [1, "emot-right", 3, "ngClass"], ["src", "assets/img/bg-map.jpg"], ["src", "assets/img/map-summary.png"], [1, "map-item", 3, "ngClass"], [3, "ngSwitch"], ["class", "bordered", "src", "/assets/img/map-lab.png", 4, "ngSwitchCase"], ["class", "bordered", "src", "/assets/img/map-site.png", 4, "ngSwitchCase"], ["class", "bordered", "src", "/assets/img/map-ruins.png", 4, "ngSwitchCase"], ["class", "bordered", "src", "/assets/img/map-helipad.png", 4, "ngSwitchCase"], ["class", "bordered", "src", "/assets/img/map-town.png", 4, "ngSwitchCase"], ["href", "https://store.steampowered.com/app/1349770/Survivor_Pass_Payback/"], ["src", "assets/img/logo-steam.png"], ["href", "https://www.microsoft.com/store/productid/9p4q3ht7242j"], ["src", "assets/img/logo_xbox.png"], ["href", "https://store.playstation.com/en-us/product/UP5082-CUSA14081_00-PAYBCK0000000000"], ["src", "assets/img/logo_ps4.png"], ["src", "assets/img/logo_stadia.png"], ["src", "/assets/img/map-lab.png", 1, "bordered"], ["src", "/assets/img/map-site.png", 1, "bordered"], ["src", "/assets/img/map-ruins.png", 1, "bordered"], ["src", "/assets/img/map-helipad.png", 1, "bordered"], ["src", "/assets/img/map-town.png", 1, "bordered"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "iframe", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "iframe", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](81, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](88, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](105, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](109, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](128, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Lab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Ruins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Helipad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Town");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](144, ContentComponent_img_144_Template, 1, 0, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](145, ContentComponent_img_145_Template, 1, 0, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](146, ContentComponent_img_146_Template, 1, 0, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](147, ContentComponent_img_147_Template, 1, 0, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](148, ContentComponent_img_148_Template, 1, 0, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](154, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 29, "section.0.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 31, "section.1.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 33, "section.1.paragraph.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 35, "section.1.paragraph.description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 37, "section.1.paragraph.detail_view"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 39, "section.2.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 41, "section.2.paragraph.description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](71, 43, "type_a"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](81, 45, "type_b"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](88, 47, "console_exclusive_items"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](93, 49, "type_c"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](105, 51, "section.4.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](109, 53, "section.5.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](59, _c0, !ctx.lastEmotActive));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](61, _c0, ctx.lastEmotActive));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](128, 55, "section.6.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](63, _c0, ctx.lastMapActive === "lab"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](65, _c0, ctx.lastMapActive === "site"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](67, _c0, ctx.lastMapActive === "ruins"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](69, _c0, ctx.lastMapActive === "helipad"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](71, _c0, ctx.lastMapActive === "town"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.lastMapActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "lab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "ruins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "helipad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "town");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lastMapActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](154, 57, "section.7.title"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-family: \"Teko\", \"Oswald\", sans-serif;\n  font-size: 38px;\n  line-height: 1;\n  text-transform: uppercase;\n  text-shadow: 2px 2px rgba(0, 0, 0, 0.2);\n}\n@media screen and (min-width: 1200px) {\n  main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 64px;\n  }\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    > figure[_ngcontent-%COMP%] {\n  position: relative;\n  color: #fff;\n  background-color: #000;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  overflow: hidden;\n  padding: 55px 0;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    > figure[_ngcontent-%COMP%]    > picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  font-family: \"object-fit: cover\";\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    > figure[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  z-index: 2;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    > figure[_ngcontent-%COMP%]    > .bg-cover[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    > figure[_ngcontent-%COMP%]    > .bg-cover[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  margin: 0 auto;\n  top: 55px;\n  width: 100%;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    > figure[_ngcontent-%COMP%]    > .bg-cover[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  text-align: center;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    > figure[_ngcontent-%COMP%]    > .bg-cover[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   div.align-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n}\n@media screen and (min-width: 1200px) {\n  main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    > figure[_ngcontent-%COMP%]    > .bg-cover[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   div.align-right[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media screen and (max-width: 1199px) {\n  main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    > figure[_ngcontent-%COMP%]    > .bg-cover[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   div.align-right[_ngcontent-%COMP%] {\n    padding: 0 50px;\n    background: linear-gradient(transparent, #000000 18% 42%, transparent);\n  }\n}\n@media screen and (min-width: 1200px) {\n  main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    > figure[_ngcontent-%COMP%]    > .bg-cover[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n}\n@media screen and (min-width: 1200px) {\n  main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    > figure[_ngcontent-%COMP%]    > .bg-cover[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {\n    padding: 0 50px;\n  }\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(1) {\n  height: 832px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(1)    > div[_ngcontent-%COMP%]:nth-child(1) {\n  width: 100%;\n  position: absolute;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(1)    > div[_ngcontent-%COMP%]:nth-child(1)   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 832px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(1)    > div[_ngcontent-%COMP%]:nth-child(2) {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n@media screen and (min-width: 1200px) {\n  main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(1)    > div[_ngcontent-%COMP%]:nth-child(2) {\n    top: 80px;\n    padding-top: 130px;\n  }\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(1)    > div[_ngcontent-%COMP%]:nth-child(2)   div[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(1)    > div[_ngcontent-%COMP%]:nth-child(2)   h3[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin-top: 30px;\n}\n@media screen and (min-width: 1200px) {\n  main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(1)    > div[_ngcontent-%COMP%]:nth-child(2)   h3[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(2) {\n  height: 703px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(2)   figure[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%] {\n  height: 593px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(2)   figure[_ngcontent-%COMP%]    > .character[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n@media screen and (min-width: 1200px) {\n  main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(2)   figure[_ngcontent-%COMP%]    > .character[_ngcontent-%COMP%] {\n    justify-content: flex-end;\n    width: 50%;\n    padding-right: 180px;\n  }\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(2)   figure[_ngcontent-%COMP%]    > .character[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  animation-direction: alternate;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(2)   figure[_ngcontent-%COMP%]    > .character[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(1) {\n  top: 0;\n  left: 0;\n  animation: tofront 3s infinite ease-in-out forwards;\n}\n@keyframes tofront {\n  0% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(30px, 130px) scale(1.05);\n  }\n  100% {\n    transform: translate(170px, 290px) scale(2.15);\n  }\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(2)   figure[_ngcontent-%COMP%]    > .character[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(2) {\n  top: 290px;\n  left: 0;\n  animation: toback 3s infinite ease-in-out backwards;\n}\n@keyframes toback {\n  0% {\n    transform: translate(0, 0) scale(2.15);\n  }\n  50% {\n    transform: translate(-30px, -220px) scale(1.05);\n  }\n  100% {\n    transform: translate(-170px, -290px) scale(1);\n  }\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(2)   figure[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-top: 170px;\n  text-align: left;\n}\n@media screen and (min-width: 1200px) {\n  main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(2)   figure[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    margin-top: 110px;\n  }\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(2)   figure[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1;\n}\n@media screen and (min-width: 1200px) {\n  main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(2)   figure[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 23px;\n  }\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(2)   figure[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: 24px;\n}\n@media screen and (min-width: 1200px) {\n  main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(2)   figure[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-top: 32px;\n  }\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(2)   figure[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 20px;\n}\n@media screen and (min-width: 1200px) {\n  main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(2)   figure[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin-top: 26px;\n  }\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(2)   figure[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: 1px solid #FFFFFF;\n}\n@media screen and (min-width: 1200px) {\n  main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(2)   figure[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 15px 30px;\n  }\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(2)   figure[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div.items[_ngcontent-%COMP%] {\n  margin: 30px 0 0 -30px;\n}\n@media screen and (min-width: 1200px) {\n  main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(2)   figure[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div.items[_ngcontent-%COMP%] {\n    margin: 40px 0 0 -20px;\n  }\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(2)   figure[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div.items[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 8px;\n  height: 60px;\n}\n@media screen and (min-width: 1200px) {\n  main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(2)   figure[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div.items[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 20px;\n    height: 80px;\n  }\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(3) {\n  height: 803px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(3)   figure[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%] {\n  height: 693px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(3)   figure[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {\n  padding: 0;\n  top: auto;\n  bottom: 0;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(3)   figure[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  background: #00000088;\n  padding: 45px;\n  width: 100%;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(3)   figure[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(3)   figure[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-size: 12px;\n  white-space: pre-line;\n}\n@media screen and (min-width: 1200px) {\n  main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(3)   figure[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    font-size: inherit;\n    max-width: 700px;\n  }\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(4) {\n  height: 700px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(4)   figure[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%] {\n  height: 590px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(4)   figure[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {\n  top: 80px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(4)   figure[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 948px;\n  height: 523px;\n  margin: 0 auto;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(5) {\n  height: 770px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(5)   figure[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%] {\n  height: 660px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(5)   figure[_ngcontent-%COMP%]   div.character[_ngcontent-%COMP%] {\n  margin: 50px auto 0;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(5)   figure[_ngcontent-%COMP%]   div.character[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(5)   figure[_ngcontent-%COMP%]   div.character[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: center bottom/100% no-repeat url(\"/assets/img/bg-ch-card.png\");\n  width: 270px;\n  height: 552px;\n  text-align: center;\n  position: relative;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(5)   figure[_ngcontent-%COMP%]   div.character[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-left: 40px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(5)   figure[_ngcontent-%COMP%]   div.character[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div.console-exclusive-items[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 90px;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  top: 70px;\n  left: -15px;\n  font-size: 16px;\n  text-align: right;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(5)   figure[_ngcontent-%COMP%]   div.character[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div.console-exclusive-items[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 100px;\n  height: 90px;\n  background-color: #FFFFFF44;\n  -webkit-clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);\n          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);\n  position: absolute;\n  left: 30px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(5)   figure[_ngcontent-%COMP%]   div.character[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div.ch-img-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(5)   figure[_ngcontent-%COMP%]   div.character[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div.ch-img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 488px;\n  margin: 0 auto 15px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(5)   figure[_ngcontent-%COMP%]   div.character[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div.ch-img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(5)   figure[_ngcontent-%COMP%]   div.character[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div.point-wrapper[_ngcontent-%COMP%] {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: absolute;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(5)   figure[_ngcontent-%COMP%]   div.character[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div.point-wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  outline: currentcolor none medium;\n  background-color: #E5414788;\n  border: medium none;\n  border-radius: 50%;\n  padding: 0px;\n  margin: 0px;\n  position: absolute;\n  z-index: 3;\n  transform: translate3d(0px, 0px, 5px);\n  cursor: pointer;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(5)   figure[_ngcontent-%COMP%]   div.character[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div.point-wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 80%;\n  height: 80%;\n  border-radius: 100%;\n  z-index: -1;\n  transform-origin: center center 0px;\n  animation: 1.5s ease-in-out 0s infinite normal none running hzvaOS;\n  transform: translate(-50%, -50%);\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(5)   figure[_ngcontent-%COMP%]   div.character[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div.point-wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  visibility: visible;\n  position: relative;\n  padding: 4px 10px;\n  top: 20px;\n  left: 40px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(5)   figure[_ngcontent-%COMP%]   div.character[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div.point-wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n  content: \"\";\n  border: 1px solid #E54147;\n  transform: rotate(-30deg);\n  position: relative;\n  top: -22px;\n  left: -10px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(5)   figure[_ngcontent-%COMP%]   div.character[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div.point-wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n@keyframes hzvaOS {\n  0% {\n    box-shadow: #E5414744 0px 0px 0px 0px;\n  }\n  50% {\n    box-shadow: #E5414733 0px 0px 1.5px 10px;\n  }\n  100% {\n    box-shadow: #FFFFFF22 0px 0px 3px 20px;\n  }\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(5)   figure[_ngcontent-%COMP%]   div.character[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .point-ch-01[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  top: 3%;\n  left: 50%;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(5)   figure[_ngcontent-%COMP%]   div.character[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .point-ch-01[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  top: 45%;\n  left: 35%;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(5)   figure[_ngcontent-%COMP%]   div.character[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .point-ch-01[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  top: 80%;\n  left: 40%;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(5)   figure[_ngcontent-%COMP%]   div.character[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .point-ch-02[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  top: 3%;\n  left: 50%;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(5)   figure[_ngcontent-%COMP%]   div.character[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .point-ch-02[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  top: 25%;\n  left: 55%;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(5)   figure[_ngcontent-%COMP%]   div.character[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .point-ch-02[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  top: 60%;\n  left: 35%;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(5)   figure[_ngcontent-%COMP%]   div.character[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .point-ch-03[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  top: 17%;\n  left: 60%;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(5)   figure[_ngcontent-%COMP%]   div.character[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .point-ch-03[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  top: 45%;\n  left: 75%;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(5)   figure[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  width: 100%;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(6) {\n  height: 600px;\n  background: #323744;\n  padding-top: 55px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(6)   h3[_ngcontent-%COMP%] {\n  z-index: 3;\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  width: 100%;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(6)    > div[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  top: 0;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(6)    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  padding-top: 45px;\n  width: 50%;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(6)    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1) {\n  left: 0;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(6)    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1)   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  left: 50%;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(6)    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  right: 0;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(6)    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2)   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  right: 50%;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(6)    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(6)    > div[_ngcontent-%COMP%]    > div.active[_ngcontent-%COMP%] {\n  background-color: #E54147;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(6)    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:hover    > img[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(6)    > div[_ngcontent-%COMP%]    > div.active[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(6)    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(6)    > div[_ngcontent-%COMP%]    > div.active[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  visibility: visible;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(6)    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(6)    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 650px;\n  border: 2px solid #FFFFFF;\n  top: 80px;\n  z-index: 3;\n  visibility: hidden;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7) {\n  height: 800px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)   figure[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%] {\n  height: 690px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  width: 100%;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #333333;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  top: 120px;\n  left: 0;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 542px;\n  width: 100%;\n  position: absolute;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   img.bordered[_ngcontent-%COMP%] {\n  border: 2px solid #FFFFFF;\n  height: 403px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   img.bordered[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n  background: #E54147;\n  padding: 10px 20px;\n  text-transform: uppercase;\n  position: absolute;\n  left: 20px;\n  bottom: 120px;\n  font-size: 24px;\n  font-weight: 700;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #FFFFFF;\n  color: #E54147;\n  padding: 4px 10px;\n  font-weight: 700;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background: #E5414788;\n  width: 25px;\n  height: 25px;\n  border-radius: 100%;\n  z-index: -1;\n  transform-origin: center center 0px;\n  animation: 1.5s ease-in-out 0s infinite normal none running hzvaOS;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  top: 90px;\n  left: 370px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1)::before {\n  top: 43px;\n  left: -15px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  top: 140px;\n  left: 80px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)::before {\n  top: 49px;\n  left: 53px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  top: 120px;\n  left: 470px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3)::before {\n  top: 43px;\n  left: -9px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) {\n  top: 238px;\n  left: 338px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4)::before {\n  top: 40px;\n  left: -13px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5) {\n  top: 400px;\n  left: 90px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5)::before {\n  top: 41px;\n  left: 67px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  background: #E54147;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1) {\n  left: 15%;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  left: 48%;\n  top: 50px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8) {\n  background: #1E222E;\n  color: #FFFFFF;\n  width: 100%;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   h3[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  text-align: center;\n}\n@media screen and (min-width: 1200px) {\n  main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   h3[_ngcontent-%COMP%] {\n    padding-top: 50px;\n  }\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   a[_ngcontent-%COMP%] {\n  display: block;\n  color: currentColor;\n  height: 100%;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   h3[_ngcontent-%COMP%]    + ul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  color: #FFFFFF;\n  padding: 30px 0;\n  flex-wrap: wrap;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   h3[_ngcontent-%COMP%]    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 190px;\n  height: 68px;\n  border-top-left-radius: 13px;\n  border-bottom-right-radius: 13px;\n  margin: 4px;\n}\n@media screen and (min-width: 1200px) {\n  main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   h3[_ngcontent-%COMP%]    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 290px;\n  }\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   h3[_ngcontent-%COMP%]    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 18px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   h3[_ngcontent-%COMP%]    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-left: 10px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   h3[_ngcontent-%COMP%]    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  background: #0D0E13;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   h3[_ngcontent-%COMP%]    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  background: #02A650;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   h3[_ngcontent-%COMP%]    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  background: #003791;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   h3[_ngcontent-%COMP%]    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) {\n  background: linear-gradient(90deg, #f8491b 0%, #f12f3f 50%, #dc1860 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFBSjtBQUVJO0VBQ0UsY0FBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHVDQUFBO0FBQU47QUFFTTtFQVJGO0lBU0ksZUFBQTtFQUNOO0FBQ0Y7QUFFSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFOO0FBR1E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUFEVjtBQUtNO0VBQ0UsVUFBQTtBQUhSO0FBTU07RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFKUjtBQU1RO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUxWO0FBT1U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFMWjtBQVFjO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFOaEI7QUFRZ0I7RUFMRjtJQU1JLFVBQUE7RUFMaEI7QUFDRjtBQU9nQjtFQVRGO0lBVUksZUFBQTtJQUNBLHNFQUFBO0VBSmhCO0FBQ0Y7QUFRZ0I7RUFERjtJQUVJLFVBQUE7RUFMaEI7QUFDRjtBQVVVO0VBdENGO0lBdUNJLGVBQUE7RUFQVjtBQUNGO0FBWUk7RUFDRSxhQUFBO0FBVk47QUFhUTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQVhWO0FBYVU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQVhaO0FBZVE7RUFDRSxr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QUFBO0VBMUhSO0FBQ0Y7QUE2SE07RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBM0hSO0FBOEhNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBNUhSO0FBOEhRO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtBQTVIVjtBQThIVTtFQVBGO0lBUUksWUFBQTtFQTNIVjtBQUNGO0FBNkhVO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQTNIWjtBQThIVTtFQUNFLGlCQUFBO0FBNUhaO0FBK0hVO0VBQ0UsbUJBQUE7QUE3SFo7QUFnSVU7RUFDRSxtQkFBQTtBQTlIWjtBQWlJVTtFQUNFLG1CQUFBO0FBL0haO0FBa0lVO0VBQ0UseUVBQUE7QUFoSVoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xyXG4gIHNlY3Rpb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgZm9udC1mYW1pbHk6ICdUZWtvJywgJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzhweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IHJnYmEoMCwwLDAsMC4yKTtcclxuXHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNjRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiBmaWd1cmUge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgcGFkZGluZzogNTVweCAwO1xyXG5cclxuICAgICAgJiA+IHBpY3R1cmUge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdvYmplY3QtZml0OiBjb3Zlcic7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBkaXYge1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYgPiAuYmctY292ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcblxyXG4gICAgICAgICYgKyBkaXYge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIHRvcDogNTVweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgIGZpZ2NhcHRpb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAmLmFsaWduLXJpZ2h0IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNTBweDtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCAjMDAwMDAwIDE4JSA0MiUsIHRyYW5zcGFyZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgIGhlaWdodDogODMycHg7XHJcblxyXG4gICAgICAmID4gZGl2IHtcclxuICAgICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICAgICAgICBpZnJhbWUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MzJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgdG9wOiA4MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICBcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgaGVpZ2h0OiA3MDNweDtcclxuXHJcbiAgICAgIGZpZ3VyZSB7XHJcbiAgICAgICAgcGljdHVyZSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDU5M3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJiA+IC5jaGFyYWN0ZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE4MHB4O1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XHJcbiAgXHJcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICBhbmltYXRpb246IHRvZnJvbnQgM3MgaW5maW5pdGUgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XHJcbiAgXHJcbiAgICAgICAgICAgICAgQGtleWZyYW1lcyB0b2Zyb250IHtcclxuICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA1MCUge1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAxMzBweCkgc2NhbGUoMS4wNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTcwcHgsIDI5MHB4KSBzY2FsZSgyLjE1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgIHRvcDogMjkwcHg7XHJcbiAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICBhbmltYXRpb246IHRvYmFjayAzcyBpbmZpbml0ZSBlYXNlLWluLW91dCBiYWNrd2FyZHM7XHJcbiAgXHJcbiAgICAgICAgICAgICAgQGtleWZyYW1lcyB0b2JhY2sge1xyXG4gICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgyLjE1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zMHB4LCAtMjIwcHgpIHNjYWxlKDEuMDUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNzBweCwgLTI5MHB4KSBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgJiA+IGRpdiArIGRpdiB7XHJcbiAgICAgICAgICBmaWdjYXB0aW9uIHtcclxuICAgICAgICAgICAgJiA+IGRpdiB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTcwcHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMTBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRkZGRkY7XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmLml0ZW1zIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDAgMCAtMzBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNDBweCAwIDAgLTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDhweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgIGhlaWdodDogODAzcHg7XHJcblxyXG4gICAgICBmaWd1cmUge1xyXG4gICAgICAgIHBpY3R1cmUge1xyXG4gICAgICAgICAgaGVpZ2h0OiA2OTNweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYgPiBkaXYgKyBkaXYge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIHRvcDogYXV0bztcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuXHJcbiAgICAgICAgICBmaWdjYXB0aW9uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDg4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0NXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgcHJlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgaGVpZ2h0OiA3MDBweDtcclxuXHJcbiAgICAgIGZpZ3VyZSB7XHJcbiAgICAgICAgcGljdHVyZSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDU5MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJiBkaXYgKyBkaXYge1xyXG4gICAgICAgICAgdG9wOiA4MHB4O1xyXG5cclxuICAgICAgICAgIGlmcmFtZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NDhweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MjNweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQoNSkge1xyXG4gICAgICBoZWlnaHQ6IDc3MHB4O1xyXG5cclxuICAgICAgZmlndXJlIHtcclxuICAgICAgICBwaWN0dXJlIHtcclxuICAgICAgICAgIGhlaWdodDogNjYwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmIGRpdi5jaGFyYWN0ZXIge1xyXG4gICAgICAgICAgbWFyZ2luOiA1MHB4IGF1dG8gMDtcclxuXHJcbiAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIGJvdHRvbS8xMDAlIG5vLXJlcGVhdCB1cmwoJy9hc3NldHMvaW1nL2JnLWNoLWNhcmQucG5nJyk7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDI3MHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNTUycHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgJjpub3QoOmZpcnN0LW9mLXR5cGUpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBkaXYuY29uc29sZS1leGNsdXNpdmUtaXRlbXMge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogNzBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC0xNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY0NDtcclxuICAgICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDI1JSAwJSwgNzUlIDAlLCAxMDAlIDUwJSwgNzUlIDEwMCUsIDI1JSAxMDAlLCAwJSA1MCUpO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBkaXYuY2gtaW1nLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7O1xyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNDg4cHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDE1cHg7XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgICYgKyBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGRpdi5wb2ludC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICBvdXRsaW5lOiBjdXJyZW50Y29sb3Igbm9uZSBtZWRpdW07XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFNTQxNDc4ODtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDVweCk7XHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyIDBweDtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IDEuNXMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgbm9ybWFsIG5vbmUgcnVubmluZyBoenZhT1M7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA0MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTU0MTQ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTMwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgaHp2YU9TIHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAjRTU0MTQ3NDQgMHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA1MCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogI0U1NDE0NzMzIDBweCAwcHggMS41cHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAjRkZGRkZGMjIgMHB4IDBweCAzcHggMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLnBvaW50LWNoLTAxIHtcclxuICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDMlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA0NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMzUlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA0MCU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5wb2ludC1jaC0wMiB7XHJcbiAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjUlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDU1JTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMzUlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAucG9pbnQtY2gtMDMge1xyXG4gICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTclO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA0NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmID4gZGl2ICsgZGl2IHtcclxuICAgICAgICAgIGZpZ2NhcHRpb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOm50aC1jaGlsZCg2KSB7XHJcbiAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzMjM3NDQ7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1NXB4O1xyXG5cclxuICAgICAgaDMge1xyXG4gICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYgPiBkaXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRvcDogMDtcclxuXHJcbiAgICAgICAgJiA+IGRpdiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNDVweDtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgICAgICAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG5cclxuICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcblxyXG4gICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICByaWdodDogNTAlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6aG92ZXIsICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U1NDE0NztcclxuXHJcbiAgICAgICAgICAgICYgPiBpbWcge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA2NTBweDtcclxuICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgIHRvcDogODBweDtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmOm50aC1jaGlsZCg3KSB7XHJcbiAgICAgIGhlaWdodDogODAwcHg7XHJcblxyXG4gICAgICBmaWd1cmUge1xyXG4gICAgICAgIHBpY3R1cmUge1xyXG4gICAgICAgICAgaGVpZ2h0OiA2OTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZpZ2NhcHRpb24ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmID4gZGl2e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdG9wOiAxMjBweDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICBcclxuICAgICAgICAgICAgJiA+IGRpdiB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1NDJweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgIGltZy5ib3JkZXJlZCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MDNweDtcclxuXHJcbiAgICAgICAgICAgICAgICAmICsgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNFNTQxNDc7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICBib3R0b206IDEyMHB4O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAmID4gdWwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuXHJcbiAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICNFNTQxNDc7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRTU0MTQ3ODg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlciAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiAxLjVzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIG5vcm1hbCBub25lIHJ1bm5pbmcgaHp2YU9TO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMzcwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IDQzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMTVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogODBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogNDlweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDEyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDQ3MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiA0M3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTlweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjM4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMzM4cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMTNweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogOTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogNDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDY3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNFNTQxNDc7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDE1JTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDQ4JTtcclxuICAgICAgICAgICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOm50aC1jaGlsZCg4KSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMxRTIyMkU7XHJcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoMyArIHVsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIHdpZHRoOiAxOTBweDtcclxuICAgICAgICAgIGhlaWdodDogNjhweDtcclxuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEzcHg7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTNweDtcclxuICAgICAgICAgIG1hcmdpbjogNHB4O1xyXG5cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgICAgICB3aWR0aDogMjkwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxOHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6bm90KDpmaXJzdC1vZi10eXBlKSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzBEMEUxMzs7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDJBNjUwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMzc5MTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZyxyZ2JhKDI0OCw3MywyNywxKSAwJSxyZ2JhKDI0MSw0Nyw2MywxKSA1MCUscmdiYSgyMjAsMjQsOTYsMSkgMTAwJSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content',
                templateUrl: './content.component.html',
                styleUrls: ['./content.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_services_translator_service__WEBPACK_IMPORTED_MODULE_2__["TranslatorService"] }]; }, { onMouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseover', ['$event']]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
        }] }); })();


/***/ }),

/***/ "DJsg":
/*!************************************!*\
  !*** ./src/app/pipes/menu.pipe.ts ***!
  \************************************/
/*! exports provided: MenuPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPipe", function() { return MenuPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MenuPipe {
    transform(value, ...args) {
        return `${value}.title`;
    }
}
MenuPipe.ɵfac = function MenuPipe_Factory(t) { return new (t || MenuPipe)(); };
MenuPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "menu", type: MenuPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'menu' }]
    }], null, null); })();


/***/ }),

/***/ "Gi7S":
/*!******************************************!*\
  !*** ./src/app/services/menu.service.ts ***!
  \******************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "he5r");
/* harmony import */ var _translator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translator.service */ "Z68+");




class MenuService {
    constructor(translator) {
        this._translator = translator;
        this.currentLang = '';
        this.menuItems = [];
        this.buyItems = [];
        this.footerItems = [];
    }
    createMenu(items, order, lang) {
        let sortedMenu = [];
        order.forEach((index) => {
            const item = items[index];
            if (item.submenu && item.order) {
                item.submenu = this.createMenu(item.submenu, item.order[lang]);
            }
            if (item.link) {
                item.link = item.link.replace(':lang', this._translator.getCurrentLanguage());
            }
            sortedMenu.push(item);
        });
        return sortedMenu;
    }
    getMenu(lang) {
        if (this.menuItems.length === 0 || lang !== this.currentLang) {
            this.currentLang = lang;
            this.menuItems = this.createMenu(_constants__WEBPACK_IMPORTED_MODULE_1__["Menu"].items, _constants__WEBPACK_IMPORTED_MODULE_1__["Menu"].order[lang], lang);
        }
        return this.menuItems;
    }
    getBuyNow(lang) {
        if (this.buyItems.length === 0 || lang !== this.currentLang) {
            this.currentLang = lang;
            this.buyItems = this.createMenu(_constants__WEBPACK_IMPORTED_MODULE_1__["BuyNow"].items, _constants__WEBPACK_IMPORTED_MODULE_1__["BuyNow"].order[lang], lang);
        }
        return this.buyItems;
    }
    getFooter(lang) {
        if (this.footerItems.length === 0 || lang !== this.currentLang) {
            this.currentLang = lang;
            this.footerItems = this.createMenu(_constants__WEBPACK_IMPORTED_MODULE_1__["Footer"].items, _constants__WEBPACK_IMPORTED_MODULE_1__["Footer"].order[lang], lang);
        }
        return this.footerItems;
    }
}
MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_translator_service__WEBPACK_IMPORTED_MODULE_2__["TranslatorService"])); };
MenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuService, factory: MenuService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _translator_service__WEBPACK_IMPORTED_MODULE_2__["TranslatorService"] }]; }, null); })();


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/menu.service */ "Gi7S");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _pipes_menu_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/menu.pipe */ "DJsg");






function FooterComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", item_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, item_r1.translate)));
} }
class FooterComponent {
    constructor(menu) {
        this.menu = menu;
        this.footerItems = menu.getFooter('en');
        console.log(this.footerItems);
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 19, vars: 10, consts: [["href", "assets/img/icons.svg#pubg-krafton"], ["href", "mailto:PUBG_Partnership@pubg.com"], [4, "ngFor", "ngForOf"], ["src", "assets/img/esrb.png"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "pubg-krafton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "use", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FooterComponent_li_17_Template, 5, 6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, "footer.copyright"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 6, "footer.inquiry"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 8, "footer.inquiry_email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.footerItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], _pipes_menu_pipe__WEBPACK_IMPORTED_MODULE_4__["MenuPipe"]], styles: ["footer[_ngcontent-%COMP%] {\n  display: flex;\n  color: #707070;\n  font-size: 12px;\n  padding: 40px 45px 25px;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: currentColor;\n}\nfooter[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 65px;\n}\nfooter[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\nfooter[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin: 0 0 0 25px;\n}\nfooter[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n}\nfooter[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\nfooter[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:first-of-type) {\n  padding-left: 20px;\n  border-left: 1px solid currentColor;\n}\nfooter[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 125px;\n  height: 59px;\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUNFO0VBQ0UsbUJBQUE7QUFDSjtBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFBSjtBQUVJO0VBQ0UseUJBQUE7QUFBTjtBQUlFO0VBQ0Usa0JBQUE7QUFGSjtBQUlJO0VBQ0UsYUFBQTtBQUZOO0FBSU07RUFDRSxtQkFBQTtBQUZSO0FBSVE7RUFDRSxrQkFBQTtFQUNBLG1DQUFBO0FBRlY7QUFRRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFOSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2xvcjogIzcwNzA3MDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcGFkZGluZzogNDBweCA0NXB4IDI1cHg7XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICB9XHJcblxyXG4gIHN2ZyB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogNjVweDtcclxuXHJcbiAgICB0aXRsZSB7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gZGl2IHtcclxuICAgIG1hcmdpbjogMCAwIDAgMjVweDtcclxuXHJcbiAgICB1bCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuXHJcbiAgICAgICAgJjpub3QoOmZpcnN0LW9mLXR5cGUpIHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgY3VycmVudENvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiA+IGltZyB7XHJcbiAgICB3aWR0aDogMTI1cHg7XHJcbiAgICBoZWlnaHQ6IDU5cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return [{ type: _services_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");





class AppComponent {
    constructor() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Z68+":
/*!************************************************!*\
  !*** ./src/app/services/translator.service.ts ***!
  \************************************************/
/*! exports provided: TranslatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatorService", function() { return TranslatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



class TranslatorService {
    constructor(translate) {
        this.translate = translate;
        this.defaultLanguage = 'en';
        this.availablelangs = [
            { code: 'en', text: 'English (Global)' },
            { code: 'en-us', text: 'English (NA)' },
            { code: 'ko', text: 'Korean' },
            { code: 'fr', text: 'France' },
            { code: 'it', text: 'Italia' },
            { code: 'de', text: 'Deutsch' },
        ];
        if (!translate.getDefaultLang())
            translate.setDefaultLang(this.defaultLanguage);
        this.useLanguage();
    }
    useLanguage(lang = null) {
        this.translate.use(lang || this.translate.getDefaultLang());
    }
    getAvailableLanguages() {
        return this.availablelangs;
    }
    getCurrentLanguage() {
        return this.translate.currentLang;
    }
}
TranslatorService.ɵfac = function TranslatorService_Factory(t) { return new (t || TranslatorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
TranslatorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TranslatorService, factory: TranslatorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslatorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-youtube-player */ "B1r6");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/content/content.component */ "Cuw9");
/* harmony import */ var _pipes_menu_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/menu.pipe */ "DJsg");

















function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["PathLocationStrategy"] }], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                { path: '', component: _components_content_content_component__WEBPACK_IMPORTED_MODULE_11__["ContentComponent"] },
                { path: ':lang', component: _components_content_content_component__WEBPACK_IMPORTED_MODULE_11__["ContentComponent"] }
            ]),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                    useFactory: (createTranslateLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                }
            }),
            ngx_youtube_player__WEBPACK_IMPORTED_MODULE_7__["NgxYoutubePlayerModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
        _components_content_content_component__WEBPACK_IMPORTED_MODULE_11__["ContentComponent"],
        _pipes_menu_pipe__WEBPACK_IMPORTED_MODULE_12__["MenuPipe"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], ngx_youtube_player__WEBPACK_IMPORTED_MODULE_7__["NgxYoutubePlayerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                    _components_content_content_component__WEBPACK_IMPORTED_MODULE_11__["ContentComponent"],
                    _pipes_menu_pipe__WEBPACK_IMPORTED_MODULE_12__["MenuPipe"]
                ],
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                        { path: '', component: _components_content_content_component__WEBPACK_IMPORTED_MODULE_11__["ContentComponent"] },
                        { path: ':lang', component: _components_content_content_component__WEBPACK_IMPORTED_MODULE_11__["ContentComponent"] }
                    ]),
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                            useFactory: (createTranslateLoader),
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                        }
                    }),
                    ngx_youtube_player__WEBPACK_IMPORTED_MODULE_7__["NgxYoutubePlayerModule"].forRoot()
                ],
                providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["PathLocationStrategy"] }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "he5r":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: Language, Menu, BuyNow, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return Language; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyNow", function() { return BuyNow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
const Language = [
    {
        name: 'Deutsch',
        link: '/de'
    },
    {
        name: 'English [Global]',
        link: '/'
    },
    {
        name: 'English [NA]',
        link: '/en-us'
    },
    {
        name: 'Español [ES]',
        link: '/es'
    },
    {
        name: 'Español [AL]',
        link: '/es-al'
    },
    {
        name: 'Français',
        link: '/fr'
    },
    {
        name: 'Italiano',
        link: '/it'
    },
    {
        name: 'Indonesia',
        link: '/id'
    },
    {
        name: '日本語',
        link: '/ja'
    },
    {
        name: '한국어',
        link: '/ko'
    },
    {
        name: 'Polski',
        link: '/pl'
    },
    {
        name: 'Português [BR]',
        link: '/pt-br'
    },
    {
        name: 'Русский',
        link: '/ru'
    },
    {
        name: 'ไทย',
        link: '/th'
    },
    {
        name: 'Türkçe',
        link: '/tr'
    },
    {
        name: 'Tiếng Việt',
        link: '/vi'
    },
    {
        name: '简体中文',
        link: '/zh-hans'
    },
    {
        name: '繁體中文',
        link: '/zh-hant'
    },
    {
        name: 'العربية',
        link: '/ar'
    }
];
const Menu = {
    items: [
        {
            translate: 'menu.news',
            link: 'https://www.pubg.com/:lang/news/'
        },
        {
            translate: 'menu.community',
            submenu: [
                {
                    translate: 'menu.community.submenu.pubg_api',
                    link: 'https://developer.pubg.com/',
                    target: '_blank'
                },
                {
                    translate: 'menu.community.submenu.facebook',
                    link: 'https://www.facebook.com/PUBG/',
                    target: '_blank'
                },
                {
                    translate: 'menu.community.submenu.facebook_group',
                    link: 'http://bit.ly/PUBGTWGROUP',
                    target: '_blank'
                },
                {
                    translate: 'menu.community.submenu.twitter',
                    link: 'https://www.twitter.com/PUBG',
                    target: '_blank'
                },
                {
                    translate: 'menu.community.submenu.youtube',
                    link: 'https://www.youtube.com/pubg',
                    target: '_blank'
                },
                {
                    translate: 'menu.community.submenu.twitch',
                    link: 'https://www.youtube.com/pubg',
                    target: '_blank'
                },
                {
                    translate: 'menu.community.submenu.reddit',
                    link: 'https://www.reddit.com/r/PUBATTLEGROUNDS/',
                    target: '_blank'
                },
                {
                    translate: 'menu.community.submenu.instagram',
                    link: 'https://www.instagram.com/pubg/',
                    target: '_blank'
                },
                {
                    translate: 'menu.community.submenu.discord',
                    link: 'https://discordapp.com/invite/battlegrounds',
                    target: '_blank'
                },
                {
                    translate: 'menu.community.submenu.passport',
                    link: 'https://accounts.pubg.com/rewards/sweepstakes',
                    target: '_blank'
                },
                {
                    translate: 'menu.community.submenu.naver_cafe',
                    link: 'https://cafe.naver.com/playbattlegrounds',
                    target: '_blank'
                },
                {
                    translate: 'menu.community.submenu.pubg_partner',
                    link: 'https://bit.ly/2Cq6WmP',
                    target: '_blank'
                }
            ],
            order: {
                'de': [1, 3, 4, 6, 7, 8, 0],
                'en': [1, 3, 4, 6, 7, 8, 0],
                'en-us': [9, 1, 3, 4, 6, 7, 8, 0],
                'es': [1, 3, 4, 7, 8, 0],
                'es-al': [1, 3, 4, 7, 8, 0],
                'fr': [1, 3, 4, 6, 7, 8, 0],
                'it': [1, 3, 4, 6, 7, 0],
                'id': [1, 3, 4, 6, 7, 8, 0],
                'ja': [11, 8, 1, 3, 4, 6, 7, 0],
                'ko': [1, 4, 10, 0],
                'pl': [1, 3, 4, 6, 7, 0],
                'pt-br': [1, 3, 4, 6, 7, 0],
                'ru': [1, 3, 4, 6, 7, 0],
                'th': [1, 3, 4, 6, 7, 7, 0],
                'tr': [1, 3, 4, 6, 7, 0],
                'vi': [1, 3, 4, 6, 7, 8, 0],
                'zh-hans': [0],
                'zh-hant': [1, 4, 5, 0],
                'ar': [1, 3, 4, 6, 7, 8, 0]
            }
        },
        {
            translate: 'menu.season',
            link: 'https://pass.pubg.com/',
            active: true
        },
        {
            translate: 'menu.product',
            link: 'https://www.pubg.com/:lang/merch/'
        },
        {
            translate: 'menu.support',
            link: 'https://www.pubg.com/:lang/support/'
        },
        {
            translate: 'menu.careers',
            link: 'https://career.pubg.com',
            external: true
        },
        {
            translate: 'menu.esports',
            link: 'https://www.pubgesports.com/',
            external: true,
            target: '_blank'
        }
    ],
    order: {
        'de': [0, 1, 2, 3, 4, 5, 6],
        'en': [0, 1, 2, 3, 4, 5, 6],
        'en-us': [0, 1, 2, 3, 4, 5, 6],
        'es': [0, 1, 2, 3, 4, 5, 6],
        'es-al': [0, 1, 2, 3, 4, 5, 6],
        'fr': [0, 1, 2, 3, 4, 5, 6],
        'it': [0, 1, 2, 3, 4, 5, 6],
        'id': [0, 1, 2, 3, 4, 5, 6],
        'ja': [0, 1, 2, 3, 4, 5, 6],
        'ko': [0, 1, 2, 3, 4, 5, 6],
        'pl': [0, 1, 2, 3, 4, 5, 6],
        'pt-br': [0, 1, 2, 3, 4, 5, 6],
        'ru': [0, 1, 2, 3, 4, 5, 6],
        'th': [0, 1, 2, 3, 4, 5, 6],
        'tr': [0, 1, 2, 3, 4, 5, 6],
        'vi': [0, 1, 2, 3, 4, 5, 6],
        'zh-hans': [0, 1, 2, 3, 4, 5, 6],
        'zh-hant': [0, 1, 2, 3, 4, 5, 6],
        'ar': [0, 1, 2, 3, 4, 5, 6]
    }
};
const BuyNow = {
    items: [
        {
            translate: 'buynow.steam',
            link: 'https://store.steampowered.com/app/1349770/Survivor_Pass_Payback/',
            icon: 'assets/img/icons.svg#pc'
        },
        {
            translate: 'buynow.xbox',
            link: 'https://www.microsoft.com/store/productid/9p4q3ht7242j',
            icon: 'assets/img/icons.svg#xbox'
        },
        {
            translate: 'buynow.ps4',
            link: 'https://store.playstation.com/en-us/product/UP5082-CUSA14081_00-PAYBCK0000000000',
            icon: 'assets/img/icons.svg#playstation4'
        },
        {
            translate: 'buynow.stadia',
            link: 'https://stadia.com/link/9sRuzcJ5QVHr8JhEA',
            icon: 'assets/img/icons.svg#stadia'
        },
        {
            translate: 'buynow.kakao',
            link: 'http://pubg.game.daum.net/pubg/shop/package/index.daum',
            icon: 'assets/img/icons.svg#pc'
        }
    ],
    order: {
        'de': [0, 1, 2, 3],
        'en': [0, 1, 2, 3],
        'en-us': [0, 1, 2, 3],
        'es': [0, 1, 2, 3],
        'es-al': [0, 1, 2, 3],
        'fr': [0, 1, 2, 3],
        'it': [0, 1, 2, 3],
        'id': [0, 1, 2, 3],
        'ja': [0, 1, 2],
        'ko': [0, 1, 2, 4],
        'pl': [0, 1, 2],
        'pt-br': [0, 1, 2],
        'ru': [0, 1, 2],
        'th': [0, 1, 2, 3],
        'tr': [0, 1, 2],
        'vi': [0, 1, 2, 3],
        'zh-hans': [0, 1, 2],
        'zh-hant': [0],
        'ar': [0, 1, 2]
    }
};
const Footer = {
    items: [
        {
            translate: 'footer.privacy_policy',
            link: 'https://www.pubg.com/privacy/'
        },
        {
            translate: 'footer.terms_service',
            link: 'https://www.pubg.com/terms-of-service/'
        },
        {
            translate: 'footer.rules_conduct',
            link: 'https://www.pubg.com/rules-of-conduct/'
        },
        {
            translate: 'footer.eula',
            link: 'https://www.pubg.com/eula/',
            css: [{ 'font-weight': 'bold' }]
        },
        {
            translate: 'footer.player_created_content',
            link: 'https://www.pubg.com/player-created-content/',
            css: [{ 'font-weight': 'bold' }]
        }
    ],
    order: {
        'de': [0, 1, 2, 3, 4],
        'en': [0, 1, 2, 3, 4],
        'en-us': [0, 1, 2, 3, 4],
        'es': [0, 1, 2, 3, 4],
        'es-al': [0, 1, 2, 3, 4],
        'fr': [0, 1, 2, 3, 4],
        'it': [0, 1, 2, 3, 4],
        'id': [0, 1, 2, 3, 4],
        'ja': [0, 1, 2],
        'ko': [0, 1, 2, 3, 4],
        'pl': [0, 1, 2, 3, 4],
        'pt-br': [0, 1, 2, 3, 4],
        'ru': [0, 1, 2, 3, 4],
        'th': [0, 1, 2, 3, 4],
        'tr': [0, 1, 2, 3, 4],
        'vi': [0, 1, 2, 3, 4],
        'zh-hans': [0, 1, 2, 3, 4],
        'zh-hant': [0, 1, 2, 3, 4],
        'ar': [0, 1, 2, 3, 4]
    }
};


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map