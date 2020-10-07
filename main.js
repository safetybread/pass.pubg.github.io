(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/NGE":
/*!**********************************************!*\
  !*** ./src/app/directives/menu.directive.ts ***!
  \**********************************************/
/*! exports provided: MenuDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuDirective", function() { return MenuDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MenuDirective {
    constructor(el) {
        el.nativeElement.href = `${el.nativeElement.dataset['menu']}.link`;
    }
}
MenuDirective.ɵfac = function MenuDirective_Factory(t) { return new (t || MenuDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
MenuDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MenuDirective, selectors: [["", "menu", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[menu]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\u\ng-workspace\com-pubg-pass\src\main.ts */"zUnb");


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
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/menu.service */ "Gi7S");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_menu_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/menu.directive */ "/NGE");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _pipes_menu_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/menu.pipe */ "DJsg");







function HeaderComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-menu", item_r1.translate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, item_r1.translate)));
} }
class HeaderComponent {
    constructor(menu) {
        this.menu = menu;
        this.menuItems = menu.getMenu('en');
        console.log(this.menuItems);
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 10, vars: 1, consts: [["href", "https://www.pubg.com", 1, "brand"], ["href", "assets/img/icons.svg#PUBG-TM"], [4, "ngFor", "ngForOf"], ["menu", ""]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "PUBG-TM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "use", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_li_9_Template, 5, 6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _directives_menu_directive__WEBPACK_IMPORTED_MODULE_3__["MenuDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], _pipes_menu_pipe__WEBPACK_IMPORTED_MODULE_5__["MenuPipe"]], styles: ["nav[_ngcontent-%COMP%] {\n  background: #161616;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #888888;\n  height: 80px;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0 20px;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: #252525;\n  color: #EFEFEF;\n  border-bottom: #EFEFEF;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.brand[_ngcontent-%COMP%] {\n  padding: 0 40px;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.brand[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsbUJBQUE7QUFBRjtBQUVFO0VBQ0UsYUFBQTtBQUFKO0FBRUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUFOO0FBRU07RUFDRSxlQUFBO0FBQVI7QUFFUTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBQVY7QUFJUTtFQUNFLGVBQUE7QUFGVjtBQUlVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFGWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5uYXYge1xyXG4gIGJhY2tncm91bmQ6ICMxNjE2MTY7XHJcblxyXG4gIHVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBjb2xvcjogIzg4ODg4ODtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICBcclxuICAgICAgYSB7XHJcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMyNTI1MjU7XHJcbiAgICAgICAgICBjb2xvcjogI0VGRUZFRjtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206ICNFRkVGRUY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICAmLmJyYW5kIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgNDBweDtcclxuXHJcbiAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _services_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"] }]; }, null); })();


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


class ContentComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(); };
ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["app-content"]], decls: 44, vars: 0, consts: [["href", "https://store.steampowered.com/app/1349770/Survivor_Pass_Payback/"], ["href", "https://www.microsoft.com/store/productid/9p4q3ht7242j"], ["href", "https://store.playstation.com/en-us/product/UP5082-CUSA14081_00-PAYBCK0000000000"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "And claim your victory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Discover the endless possibilities of Paramo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Lab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Ruins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Helipad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Town");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Available at");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " steam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " xbox one ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " ps4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " stadia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 38px;\n  text-transform: uppercase;\n  text-align: center;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(6) {\n  background: linear-gradient(to right, #E54147 50%, #323744 50%);\n  height: 506px;\n  padding: 60px 0;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(6)   h3[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(6)    > div[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  top: -40px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(6)    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 0 200px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(6)    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1) {\n  background: center no-repeat url(\"/assets/img/emot-01.png\");\n  width: 485px;\n  height: 560px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(6)    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  background: center no-repeat url(\"/assets/img/emot-01.png\");\n  width: 485px;\n  height: 560px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7) {\n  background: no-repeat url(\"/assets/img/bg-map.png\");\n  height: 680px;\n  padding: 60px 0;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)   h3[_ngcontent-%COMP%] {\n  color: #333333;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)    > div[_ngcontent-%COMP%] {\n  display: flex;\n  background: no-repeat url(\"/assets/img/map-summary.png\");\n  width: 100%;\n  height: 542px;\n  margin: 64px 0 0 248px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)    > div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  width: 553px;\n  height: 542px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background: no-repeat url(\"/assets/img/map-lab.png\");\n  width: 719px;\n  height: 403px;\n  margin: 60px 0 0 0;\n  border: 2px solid #FFFFFF;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8) {\n  background: #1E222E;\n  color: #FFFFFF;\n  padding: 60px 0;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   a[_ngcontent-%COMP%] {\n  display: block;\n  color: currentColor;\n  height: 100%;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   h3[_ngcontent-%COMP%]    + ul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  color: #FFFFFF;\n  margin-top: 38px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   h3[_ngcontent-%COMP%]    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 290px;\n  height: 68px;\n  border-top-left-radius: 13px;\n  border-bottom-right-radius: 13px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   h3[_ngcontent-%COMP%]    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 20px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   h3[_ngcontent-%COMP%]    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-left: 10px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   h3[_ngcontent-%COMP%]    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  background: #0D0E13;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   h3[_ngcontent-%COMP%]    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  background: #02A650;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   h3[_ngcontent-%COMP%]    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  background: #003791;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   h3[_ngcontent-%COMP%]    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) {\n  background: linear-gradient(90deg, #f8491b 0%, #f12f3f 50%, #dc1860 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUZOO0FBS0k7RUFDRSwrREFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBSE47QUFLTTtFQUNFLGNBQUE7QUFIUjtBQU1NO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FBSlI7QUFNUTtFQUNFLGdCQUFBO0FBSlY7QUFNVTtFQUNFLDJEQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFKWjtBQU9VO0VBQ0UsMkRBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUxaO0FBV0k7RUFDRSxtREFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBVE47QUFXTTtFQUNFLGNBQUE7QUFUUjtBQVlNO0VBQ0UsYUFBQTtFQUNBLHdEQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQVZSO0FBWVE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQVZWO0FBYVE7RUFDRSxvREFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQVhWO0FBZ0JJO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQWROO0FBZ0JNO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQWRSO0FBaUJNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBZlI7QUFpQlE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7QUFmVjtBQWlCVTtFQUNFLGFBQUE7QUFmWjtBQWtCVTtFQUNFLGlCQUFBO0FBaEJaO0FBbUJVO0VBQ0UsbUJBQUE7QUFqQlo7QUFvQlU7RUFDRSxtQkFBQTtBQWxCWjtBQXFCVTtFQUNFLG1CQUFBO0FBbkJaO0FBc0JVO0VBQ0UseUVBQUE7QUFwQloiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xyXG4gIHNlY3Rpb24ge1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQoNikge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNFNTQxNDcgNTAlLCAjMzIzNzQ0IDUwJSk7XHJcbiAgICAgIGhlaWdodDogNTA2cHg7XHJcbiAgICAgIHBhZGRpbmc6IDYwcHggMDtcclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJiA+IGRpdiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgdG9wOiAtNDBweDtcclxuXHJcbiAgICAgICAgJiA+IGRpdiB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDIwMHB4O1xyXG5cclxuICAgICAgICAgICY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIG5vLXJlcGVhdCB1cmwoJy9hc3NldHMvaW1nL2Vtb3QtMDEucG5nJyk7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0ODVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1NjBweDtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIG5vLXJlcGVhdCB1cmwoJy9hc3NldHMvaW1nL2Vtb3QtMDEucG5nJyk7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0ODVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1NjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOm50aC1jaGlsZCg3KSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdCB1cmwoJy9hc3NldHMvaW1nL2JnLW1hcC5wbmcnKTtcclxuICAgICAgaGVpZ2h0OiA2ODBweDtcclxuICAgICAgcGFkZGluZzogNjBweCAwO1xyXG5cclxuICAgICAgaDMge1xyXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmID4gZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm8tcmVwZWF0IHVybCgnL2Fzc2V0cy9pbWcvbWFwLXN1bW1hcnkucG5nJyk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA1NDJweDtcclxuICAgICAgICBtYXJnaW46IDY0cHggMCAwIDI0OHB4O1xyXG5cclxuICAgICAgICAmID4gdWwge1xyXG4gICAgICAgICAgd2lkdGg6IDU1M3B4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA1NDJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYgPiBkaXYge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbm8tcmVwZWF0IHVybCgnL2Fzc2V0cy9pbWcvbWFwLWxhYi5wbmcnKTtcclxuICAgICAgICAgIHdpZHRoOiA3MTlweDtcclxuICAgICAgICAgIGhlaWdodDogNDAzcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDYwcHggMCAwIDA7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRkZGRkZGO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bnRoLWNoaWxkKDgpIHtcclxuICAgICAgYmFja2dyb3VuZDogIzFFMjIyRTtcclxuICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIHBhZGRpbmc6IDYwcHggMDtcclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoMyArIHVsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDM4cHg7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIHdpZHRoOiAyOTBweDtcclxuICAgICAgICAgIGhlaWdodDogNjhweDtcclxuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEzcHg7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTNweDtcclxuXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwRDBFMTM7O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAyQTY1MDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDM3OTE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpudGgtY2hpbGQoNCkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcscmdiYSgyNDgsNzMsMjcsMSkgMCUscmdiYSgyNDEsNDcsNjMsMSkgNTAlLHJnYmEoMjIwLDI0LDk2LDEpIDEwMCUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content',
                templateUrl: './content.component.html',
                styleUrls: ['./content.component.scss']
            }]
    }], function () { return []; }, null); })();


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



class MenuService {
    constructor() {
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
MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(); };
MenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuService, factory: MenuService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _directives_menu_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/menu.directive */ "/NGE");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _pipes_menu_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/menu.pipe */ "DJsg");







function FooterComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", item_r1 == null ? null : item_r1.css);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-menu", item_r1.translate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, item_r1.translate)));
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
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 16, vars: 1, consts: [["href", "assets/img/icons.svg#pubg-krafton"], ["href", "mailto:PUBG_Partnership@pubg.com"], [4, "ngFor", "ngForOf"], ["src", "assets/img/esrb.png"], ["menu", "", 3, "ngStyle"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "COPYRIGHT \u00A92020 PUBG CORPORATION. ALL RIGHTS RESERVED.\nPLAYERUNKNOWN\u2019S BATTLEGROUNDS and PUBG are registered trademarks, trademarks or service marks of PUBG CORPORATION.\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Partnership Inquiry: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "PUBG_Partnership@pubg.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FooterComponent_li_14_Template, 5, 7, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.footerItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _directives_menu_directive__WEBPACK_IMPORTED_MODULE_3__["MenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], _pipes_menu_pipe__WEBPACK_IMPORTED_MODULE_5__["MenuPipe"]], styles: ["footer[_ngcontent-%COMP%] {\n  display: flex;\n  color: #707070;\n  font-size: 12px;\n  padding: 40px 45px 25px;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: currentColor;\n}\nfooter[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 65px;\n}\nfooter[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\nfooter[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin: 0 0 0 25px;\n}\nfooter[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n}\nfooter[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\nfooter[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:first-of-type) {\n  padding-left: 20px;\n  border-left: 1px solid currentColor;\n}\nfooter[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 125px;\n  height: 59px;\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUNFO0VBQ0UsbUJBQUE7QUFDSjtBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFBSjtBQUVJO0VBQ0UseUJBQUE7QUFBTjtBQUlFO0VBQ0Usa0JBQUE7QUFGSjtBQUlJO0VBQ0UsYUFBQTtBQUZOO0FBSU07RUFDRSxtQkFBQTtBQUZSO0FBSVE7RUFDRSxrQkFBQTtFQUNBLG1DQUFBO0FBRlY7QUFRRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFOSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2xvcjogIzcwNzA3MDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcGFkZGluZzogNDBweCA0NXB4IDI1cHg7XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICB9XHJcblxyXG4gIHN2ZyB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogNjVweDtcclxuXHJcbiAgICB0aXRsZSB7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gZGl2IHtcclxuICAgIG1hcmdpbjogMCAwIDAgMjVweDtcclxuXHJcbiAgICB1bCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuXHJcbiAgICAgICAgJjpub3QoOmZpcnN0LW9mLXR5cGUpIHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgY3VycmVudENvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiA+IGltZyB7XHJcbiAgICB3aWR0aDogMTI1cHg7XHJcbiAgICBoZWlnaHQ6IDU5cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB9XHJcbn0iXX0= */"] });
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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/content/content.component */ "Cuw9");
/* harmony import */ var _pipes_menu_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/menu.pipe */ "DJsg");
/* harmony import */ var _directives_menu_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/menu.directive */ "/NGE");
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/menu.service */ "Gi7S");
















function createTranslateLoader(http) {
    console.log('asdfasdfasdfa');
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
class AppModule {
    constructor(menuService) {
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_menu_service__WEBPACK_IMPORTED_MODULE_12__["MenuService"])); }, providers: [], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                    useFactory: (createTranslateLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                }
            }),
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                { path: '', component: _components_content_content_component__WEBPACK_IMPORTED_MODULE_9__["ContentComponent"] },
                { path: ':lang', component: _components_content_content_component__WEBPACK_IMPORTED_MODULE_9__["ContentComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _components_content_content_component__WEBPACK_IMPORTED_MODULE_9__["ContentComponent"],
        _pipes_menu_pipe__WEBPACK_IMPORTED_MODULE_10__["MenuPipe"],
        _directives_menu_directive__WEBPACK_IMPORTED_MODULE_11__["MenuDirective"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                    _components_content_content_component__WEBPACK_IMPORTED_MODULE_9__["ContentComponent"],
                    _pipes_menu_pipe__WEBPACK_IMPORTED_MODULE_10__["MenuPipe"],
                    _directives_menu_directive__WEBPACK_IMPORTED_MODULE_11__["MenuDirective"]
                ],
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                            useFactory: (createTranslateLoader),
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                        }
                    }),
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                        { path: '', component: _components_content_content_component__WEBPACK_IMPORTED_MODULE_9__["ContentComponent"] },
                        { path: ':lang', component: _components_content_content_component__WEBPACK_IMPORTED_MODULE_9__["ContentComponent"] }
                    ])
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], function () { return [{ type: _services_menu_service__WEBPACK_IMPORTED_MODULE_12__["MenuService"] }]; }, null); })();


/***/ }),

/***/ "he5r":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: Menu, Language, BuyNow, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return Language; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyNow", function() { return BuyNow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
const Menu = {
    items: [
        {
            translate: 'menu.news',
            link: true
        },
        {
            translate: 'menu.community',
            link: false,
            type: 'dropdown',
            submenu: [
                {
                    translate: 'menu.community.submenu.pubg_api',
                    link: true,
                    target: '_blank'
                },
                {
                    translate: 'menu.facebook',
                    link: true,
                    target: '_blank'
                },
                {
                    translate: 'menu.facebook_group',
                    link: true,
                    target: '_blank'
                },
                {
                    translate: 'menu.twitter',
                    link: true,
                    target: '_blank'
                },
                {
                    translate: 'menu.youtube',
                    link: true,
                    target: '_blank'
                },
                {
                    translate: 'menu.twitch',
                    link: true,
                    target: '_blank'
                },
                {
                    translate: 'menu.reddit',
                    link: true,
                    target: '_blank'
                },
                {
                    translate: 'menu.instagram',
                    link: true,
                    target: '_blank'
                },
                {
                    translate: 'menu.discord',
                    link: true,
                    target: '_blank'
                },
                {
                    translate: 'menu.passport',
                    link: true,
                    target: '_blank'
                },
                {
                    translate: 'menu.naver_cafe',
                    link: true,
                    target: '_blank'
                },
                {
                    translate: 'menu.pubg_partner',
                    link: true,
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
            link: true,
            type: 'external',
            target: '_blank'
        },
        {
            translate: 'menu.product',
            link: true
        },
        {
            translate: 'menu.support',
            link: true
        },
        {
            translate: 'menu.careers',
            link: true
        },
        {
            translate: 'menu.esports',
            link: true,
            type: 'external',
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
const BuyNow = {
    items: [
        {
            translate: 'buynow.steam',
            link: true,
            icon: 'icons.svg#pc'
        },
        {
            translate: 'buynow.xbox',
            link: true,
            icon: 'icons.svg#xbox'
        },
        {
            translate: 'buynow.ps4',
            link: true,
            icon: 'icons.svg#playstation4'
        },
        {
            translate: 'buynow.stadia',
            link: true,
            icon: 'icons.svg#stadia'
        },
        {
            translate: 'buynow.kakao',
            link: true,
            icon: 'icons.svg#pc'
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
            link: true
        },
        {
            translate: 'footer.terms_service',
            link: true
        },
        {
            translate: 'footer.rules_conduct',
            link: true
        },
        {
            translate: 'footer.eula',
            link: true,
            css: [{ 'font-weight': 'bold' }]
        },
        {
            translate: 'footer.player_created_content',
            link: true,
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