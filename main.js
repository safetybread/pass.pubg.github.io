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
        this.el = el;
    }
    ngOnChanges() {
        this.el.nativeElement.href = `${this.item.translate}.link`;
    }
}
MenuDirective.ɵfac = function MenuDirective_Factory(t) { return new (t || MenuDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
MenuDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MenuDirective, selectors: [["", "menu", ""]], inputs: { item: ["menu", "item"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[menu]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['menu']
        }] }); })();


/***/ }),

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
/* harmony import */ var _directives_menu_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/menu.directive */ "/NGE");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _pipes_menu_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/menu.pipe */ "DJsg");









function HeaderComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menu", item_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, item_r2.translate)));
} }
function HeaderComponent_li_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r3.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.name);
} }
class HeaderComponent {
    constructor(translator, menu) {
        this.menu = menu;
        this.menuItems = menu.getMenu(translator.getCurrentLanguage());
        this.langItems = _constants__WEBPACK_IMPORTED_MODULE_1__["Language"];
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_translator_service__WEBPACK_IMPORTED_MODULE_2__["TranslatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 27, vars: 2, consts: [["role", "navigation"], [1, "brand"], ["href", "https://www.pubg.com"], ["href", "assets/img/icons.svg#PUBG-TM"], [4, "ngFor", "ngForOf"], [1, "a-menu"], [1, "bg-theme", "a-menu-mobile"], ["src", "assets/img/btn-menu.png"], [1, "a-menu-login"], [1, "a-menu-lang"], ["href", "assets/img/icons.svg#globe"], [1, "bg-theme", "a-menu-buynow"], ["href", "#"], [3, "menu"], [3, "href"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "PUBG-TM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "use", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_li_9_Template, 5, 6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "globe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "use", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HeaderComponent_li_23_Template, 3, 2, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.langItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _directives_menu_directive__WEBPACK_IMPORTED_MODULE_5__["MenuDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"], _pipes_menu_pipe__WEBPACK_IMPORTED_MODULE_7__["MenuPipe"]], styles: ["nav[_ngcontent-%COMP%] {\n  background: #161616;\n}\n@media only screen and (min-width: 1200px) {\n  nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\nnav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #888888;\n  height: 80px;\n}\nnav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.brand[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0 40px;\n}\nnav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.brand[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 45px;\n}\nnav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  text-transform: uppercase;\n}\nnav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: #252525;\n  color: #EFEFEF;\n  border-bottom: #EFEFEF;\n}\nnav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.a-menu[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\nnav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.a-menu[_ngcontent-%COMP%]    > .a-menu-mobile[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 80px;\n  height: 80px;\n  top: 0;\n  right: 0;\n}\n@media only screen and (min-width: 1200px) {\n  nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.a-menu[_ngcontent-%COMP%]    > .a-menu-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\nnav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.a-menu[_ngcontent-%COMP%]    > .a-menu-mobile[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 28px;\n  padding: 26px 20px;\n}\n@media only screen and (max-width: 1199px) {\n  nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.a-menu[_ngcontent-%COMP%]    > .a-menu-login[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (max-width: 1199px) {\n  nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.a-menu[_ngcontent-%COMP%]    > .a-menu-lang[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\nnav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.a-menu[_ngcontent-%COMP%]    > .a-menu-lang[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  padding: 0 20px;\n}\nnav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.a-menu[_ngcontent-%COMP%]    > .a-menu-lang[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(1)   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\nnav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.a-menu[_ngcontent-%COMP%]    > .a-menu-lang[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(2) {\n  position: absolute;\n  top: 80px;\n  right: -20px;\n  z-index: 1005;\n}\nnav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.a-menu[_ngcontent-%COMP%]    > .a-menu-lang[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(2)   li[_ngcontent-%COMP%] {\n  background: #161616;\n}\nnav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.a-menu[_ngcontent-%COMP%]    > .a-menu-lang[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(2)   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Teko\", \"Oswald\", sans-serif;\n  font-size: 20px;\n  line-height: 25px;\n  text-transform: uppercase;\n  font-weight: 100;\n  padding: 5px 20px 0;\n  display: block;\n  white-space: nowrap;\n}\nnav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.a-menu[_ngcontent-%COMP%]    > .a-menu-buynow[_ngcontent-%COMP%] {\n  height: 100%;\n}\nnav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.a-menu[_ngcontent-%COMP%]    > .a-menu-buynow[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsbUJBQUE7QUFBRjtBQU9JO0VBTEY7SUFNSSxhQUFBO0VBSko7QUFDRjtBQU1JO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFKTjtBQU9RO0VBQ0UsZUFBQTtBQUxWO0FBT1U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUxaO0FBVU07RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUFSUjtBQVVRO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFSVjtBQVlNO0VBQ0UsaUJBQUE7QUFWUjtBQVlRO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0FBVlY7QUFZVTtFQVBGO0lBUUksYUFBQTtFQVRWO0FBQ0Y7QUFXVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFUWjtBQWNVO0VBREY7SUFFSSxhQUFBO0VBWFY7QUFDRjtBQWVVO0VBREY7SUFFSSxhQUFBO0VBWlY7QUFDRjtBQWNVO0VBQ0UsZUFBQTtBQVpaO0FBZWM7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWJoQjtBQWlCWTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBZmQ7QUFpQmM7RUFDRSxtQkFBQTtBQWZoQjtBQWlCZ0I7RUFDRSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQWZsQjtBQXNCUTtFQUNFLFlBQUE7QUFwQlY7QUFzQlU7RUFDRSxjQUFBO0FBcEJaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbm5hdiB7XHJcbiAgYmFja2dyb3VuZDogIzE2MTYxNjtcclxuXHJcbiAgJiA+IHVsIHtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IGxpIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICM4ODg4ODg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuXHJcbiAgICAgICYuYnJhbmQge1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgcGFkZGluZzogMCA0MHB4O1xyXG5cclxuICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBhIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBcclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjUyNTI1O1xyXG4gICAgICAgICAgY29sb3I6ICNFRkVGRUY7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAjRUZFRkVGO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hLW1lbnUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIFxyXG4gICAgICAgICYgPiAuYS1tZW51LW1vYmlsZSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJiA+IGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDI2cHggMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYgPiAuYS1tZW51LWxvZ2luIHtcclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmID4gLmEtbWVudS1sYW5nIHtcclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJiA+IGxpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG5cclxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoyMnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDgwcHg7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IC0yMHB4O1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDEwMDU7XHJcblxyXG4gICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxNjE2MTY7XHJcblxyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnVGVrbycsICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMjBweCAwO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYgPiAuYS1tZW51LWJ1eW5vdyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _services_translator_service__WEBPACK_IMPORTED_MODULE_2__["TranslatorService"] }, { type: _services_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"] }]; }, null); })();


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
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-embed-video */ "OjaE");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




class ContentComponent {
    constructor(embedVideo) {
        this.sectionItems = [];
        this.video = embedVideo.embed('https://player.vimeo.com/video/440524382');
    }
    ngOnInit() {
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_embed_video__WEBPACK_IMPORTED_MODULE_1__["EmbedVideoService"])); };
ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["app-content"]], decls: 88, vars: 25, consts: [["role", "document"], [3, "innerHTML"], ["src", "assets/img/bg-new.png"], [1, "bg-cover"], ["src", "assets/img/bg-key.png"], ["src", "assets/img/bg-video.png"], ["src", "assets/img/bg-ch.png"], ["src", "assets/img/bg-map.png"], ["href", "https://store.steampowered.com/app/1349770/Survivor_Pass_Payback/"], ["href", "https://www.microsoft.com/store/productid/9p4q3ht7242j"], ["href", "https://store.playstation.com/en-us/product/UP5082-CUSA14081_00-PAYBCK0000000000"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Lab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Ruins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Helipad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Town");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " xbox one ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " ps4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " stadia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.video, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 9, "section.0.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 11, "section.1.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 13, "section.2.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 15, "section.3.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 17, "section.4.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 19, "section.5.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 21, "section.6.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](75, 23, "section.7.title"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  position: relative;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 38px;\n  text-transform: uppercase;\n  text-align: center;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    > figure[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding: 0 5%;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    > figure[_ngcontent-%COMP%]    > .bg-cover[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    > figure[_ngcontent-%COMP%]    > .bg-cover[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {\n  position: absolute;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    > figure[_ngcontent-%COMP%]:nth-child(2) {\n  height: 703px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    > figure[_ngcontent-%COMP%]:nth-child(3) {\n  height: 803px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    > figure[_ngcontent-%COMP%]:nth-child(4) {\n  height: 700px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    > figure[_ngcontent-%COMP%]:nth-child(5) {\n  height: 770px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    > figure[_ngcontent-%COMP%]:nth-child(6) {\n  height: 600px;\n  background: linear-gradient(to right, #E54147 50%, #323744 50%);\n  height: 506px;\n  padding: 60px 0;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    > figure[_ngcontent-%COMP%]:nth-child(6)   h3[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    > figure[_ngcontent-%COMP%]:nth-child(6)    > div[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  top: -40px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    > figure[_ngcontent-%COMP%]:nth-child(6)    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 0 200px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    > figure[_ngcontent-%COMP%]:nth-child(6)    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1) {\n  background: center no-repeat url(\"/assets/img/emot-01.png\");\n  width: 485px;\n  height: 560px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    > figure[_ngcontent-%COMP%]:nth-child(6)    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  background: center no-repeat url(\"/assets/img/emot-01.png\");\n  width: 485px;\n  height: 560px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(1) {\n  height: 832px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(1)    > div[_ngcontent-%COMP%] {\n  justify-content: center;\n  text-align: center;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)   figure[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 800px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)   figure[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #333333;\n  padding-top: 50px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)   figure[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 542px;\n  margin: 64px 0 0;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)   figure[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  background: no-repeat url(\"/assets/img/map-summary.png\");\n  width: 553px;\n  height: 542px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(7)   figure[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background: no-repeat url(\"/assets/img/map-lab.png\");\n  width: 719px;\n  height: 403px;\n  margin: 60px 0 0 0;\n  border: 2px solid #FFFFFF;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8) {\n  background: #1E222E;\n  color: #FFFFFF;\n  width: 100%;\n  height: 270px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   h3[_ngcontent-%COMP%] {\n  padding-top: 50px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   a[_ngcontent-%COMP%] {\n  display: block;\n  color: currentColor;\n  height: 100%;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   h3[_ngcontent-%COMP%]    + ul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  color: #FFFFFF;\n  margin-top: 38px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   h3[_ngcontent-%COMP%]    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 290px;\n  height: 68px;\n  border-top-left-radius: 13px;\n  border-bottom-right-radius: 13px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   h3[_ngcontent-%COMP%]    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 20px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   h3[_ngcontent-%COMP%]    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-left: 10px;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   h3[_ngcontent-%COMP%]    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  background: #0D0E13;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   h3[_ngcontent-%COMP%]    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  background: #02A650;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   h3[_ngcontent-%COMP%]    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  background: #003791;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(8)   h3[_ngcontent-%COMP%]    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) {\n  background: linear-gradient(90deg, #f8491b 0%, #f12f3f 50%, #dc1860 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtBQUFKO0FBRUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFBTjtBQUdJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUROO0FBR007RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFEUjtBQUdRO0VBQ0Usa0JBQUE7QUFEVjtBQUtNO0VBQ0UsYUFBQTtBQUhSO0FBTU07RUFDRSxhQUFBO0FBSlI7QUFPTTtFQUNFLGFBQUE7QUFMUjtBQVFNO0VBQ0UsYUFBQTtBQU5SO0FBU007RUFDRSxhQUFBO0VBRUEsK0RBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQVJSO0FBVVE7RUFDRSxjQUFBO0FBUlY7QUFXUTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQVRWO0FBV1U7RUFDRSxnQkFBQTtBQVRaO0FBV1k7RUFDRSwyREFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBVGQ7QUFZWTtFQUNFLDJEQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFWZDtBQWlCSTtFQUNFLGFBQUE7QUFmTjtBQWlCTTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7QUFmUjtBQW9CTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBbEJSO0FBb0JRO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBbEJWO0FBc0JVO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQXBCWjtBQXNCWTtFQUNFLHdEQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFwQmQ7QUF1Qlk7RUFDRSxvREFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQXJCZDtBQTRCSTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBMUJOO0FBNEJNO0VBQ0UsaUJBQUE7QUExQlI7QUE2Qk07RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBM0JSO0FBOEJNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBNUJSO0FBOEJRO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0FBNUJWO0FBOEJVO0VBQ0UsYUFBQTtBQTVCWjtBQStCVTtFQUNFLGlCQUFBO0FBN0JaO0FBZ0NVO0VBQ0UsbUJBQUE7QUE5Qlo7QUFpQ1U7RUFDRSxtQkFBQTtBQS9CWjtBQWtDVTtFQUNFLG1CQUFBO0FBaENaO0FBbUNVO0VBQ0UseUVBQUE7QUFqQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xyXG4gIHNlY3Rpb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzhweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiBmaWd1cmUge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMCA1JTtcclxuXHJcbiAgICAgICYgPiAuYmctY292ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcblxyXG4gICAgICAgICYgKyBkaXYge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIGhlaWdodDogNzAzcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICBoZWlnaHQ6IDgwM3B4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgaGVpZ2h0OiA3MDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpudGgtY2hpbGQoNSkge1xyXG4gICAgICAgIGhlaWdodDogNzcwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bnRoLWNoaWxkKDYpIHtcclxuICAgICAgICBoZWlnaHQ6IDYwMHB4O1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNFNTQxNDcgNTAlLCAjMzIzNzQ0IDUwJSk7XHJcbiAgICAgICAgaGVpZ2h0OiA1MDZweDtcclxuICAgICAgICBwYWRkaW5nOiA2MHB4IDA7XHJcbiAgXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICYgPiBkaXYge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgdG9wOiAtNDBweDtcclxuICBcclxuICAgICAgICAgICYgPiBkaXYge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwMHB4O1xyXG4gIFxyXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIG5vLXJlcGVhdCB1cmwoJy9hc3NldHMvaW1nL2Vtb3QtMDEucG5nJyk7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQ4NXB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNTYwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIG5vLXJlcGVhdCB1cmwoJy9hc3NldHMvaW1nL2Vtb3QtMDEucG5nJyk7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQ4NXB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNTYwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgIGhlaWdodDogODMycHg7XHJcblxyXG4gICAgICAmID4gZGl2IHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgJjpudGgtY2hpbGQoNykge1xyXG4gICAgICBmaWd1cmUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogODAwcHg7XHJcblxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICYgPiBkaXZ7XHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTQycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNjRweCAwIDA7XHJcbiAgICBcclxuICAgICAgICAgICAgJiA+IHVsIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgdXJsKCcvYXNzZXRzL2ltZy9tYXAtc3VtbWFyeS5wbmcnKTtcclxuICAgICAgICAgICAgICB3aWR0aDogNTUzcHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1NDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICYgPiBkaXYge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdCB1cmwoJy9hc3NldHMvaW1nL21hcC1sYWIucG5nJyk7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDcxOXB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDAzcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA2MHB4IDAgMCAwO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRkZGRkY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOm50aC1jaGlsZCg4KSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMxRTIyMkU7XHJcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAyNzBweDtcclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgzICsgdWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzhweDtcclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgd2lkdGg6IDI5MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA2OHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTNweDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxM3B4O1xyXG5cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6bm90KDpmaXJzdC1vZi10eXBlKSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzBEMEUxMzs7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDJBNjUwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMzc5MTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZyxyZ2JhKDI0OCw3MywyNywxKSAwJSxyZ2JhKDI0MSw0Nyw2MywxKSA1MCUscmdiYSgyMjAsMjQsOTYsMSkgMTAwJSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content',
                templateUrl: './content.component.html',
                styleUrls: ['./content.component.scss']
            }]
    }], function () { return [{ type: ngx_embed_video__WEBPACK_IMPORTED_MODULE_1__["EmbedVideoService"] }]; }, null); })();


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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menu", item_r1);
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
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 16, vars: 1, consts: [["href", "assets/img/icons.svg#pubg-krafton"], ["href", "mailto:PUBG_Partnership@pubg.com"], [4, "ngFor", "ngForOf"], ["src", "assets/img/esrb.png"], [3, "menu"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FooterComponent_li_14_Template, 5, 6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.footerItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _directives_menu_directive__WEBPACK_IMPORTED_MODULE_3__["MenuDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], _pipes_menu_pipe__WEBPACK_IMPORTED_MODULE_5__["MenuPipe"]], styles: ["footer[_ngcontent-%COMP%] {\n  display: flex;\n  color: #707070;\n  font-size: 12px;\n  padding: 40px 45px 25px;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: currentColor;\n}\nfooter[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 65px;\n}\nfooter[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\nfooter[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin: 0 0 0 25px;\n}\nfooter[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n}\nfooter[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\nfooter[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:first-of-type) {\n  padding-left: 20px;\n  border-left: 1px solid currentColor;\n}\nfooter[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 125px;\n  height: 59px;\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUNFO0VBQ0UsbUJBQUE7QUFDSjtBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFBSjtBQUVJO0VBQ0UseUJBQUE7QUFBTjtBQUlFO0VBQ0Usa0JBQUE7QUFGSjtBQUlJO0VBQ0UsYUFBQTtBQUZOO0FBSU07RUFDRSxtQkFBQTtBQUZSO0FBSVE7RUFDRSxrQkFBQTtFQUNBLG1DQUFBO0FBRlY7QUFRRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFOSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2xvcjogIzcwNzA3MDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcGFkZGluZzogNDBweCA0NXB4IDI1cHg7XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICB9XHJcblxyXG4gIHN2ZyB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogNjVweDtcclxuXHJcbiAgICB0aXRsZSB7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gZGl2IHtcclxuICAgIG1hcmdpbjogMCAwIDAgMjVweDtcclxuXHJcbiAgICB1bCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuXHJcbiAgICAgICAgJjpub3QoOmZpcnN0LW9mLXR5cGUpIHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgY3VycmVudENvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiA+IGltZyB7XHJcbiAgICB3aWR0aDogMTI1cHg7XHJcbiAgICBoZWlnaHQ6IDU5cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB9XHJcbn0iXX0= */"] });
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
            { code: 'en', text: 'English' },
            { code: 'ko', text: 'Korean' }
        ];
        if (!translate.getDefaultLang())
            translate.setDefaultLang(this.defaultLanguage);
        this.useLanguage();
    }
    useLanguage(lang = null) {
        this.translate.use(lang || this.translate.getBrowserLang());
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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-embed-video */ "OjaE");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/content/content.component */ "Cuw9");
/* harmony import */ var _pipes_menu_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/menu.pipe */ "DJsg");
/* harmony import */ var _directives_menu_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/menu.directive */ "/NGE");

















function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
class AppModule {
    constructor(translateService) {
        this.translateService = translateService;
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"])); }, providers: [], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                { path: '', component: _components_content_content_component__WEBPACK_IMPORTED_MODULE_10__["ContentComponent"] },
                { path: ':lang', component: _components_content_content_component__WEBPACK_IMPORTED_MODULE_10__["ContentComponent"] }
            ]),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                    useFactory: (createTranslateLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                }
            }),
            ngx_embed_video__WEBPACK_IMPORTED_MODULE_6__["EmbedVideo"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _components_content_content_component__WEBPACK_IMPORTED_MODULE_10__["ContentComponent"],
        _pipes_menu_pipe__WEBPACK_IMPORTED_MODULE_11__["MenuPipe"],
        _directives_menu_directive__WEBPACK_IMPORTED_MODULE_12__["MenuDirective"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], ngx_embed_video__WEBPACK_IMPORTED_MODULE_6__["EmbedVideo"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                    _components_content_content_component__WEBPACK_IMPORTED_MODULE_10__["ContentComponent"],
                    _pipes_menu_pipe__WEBPACK_IMPORTED_MODULE_11__["MenuPipe"],
                    _directives_menu_directive__WEBPACK_IMPORTED_MODULE_12__["MenuDirective"]
                ],
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                        { path: '', component: _components_content_content_component__WEBPACK_IMPORTED_MODULE_10__["ContentComponent"] },
                        { path: ':lang', component: _components_content_content_component__WEBPACK_IMPORTED_MODULE_10__["ContentComponent"] }
                    ]),
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                            useFactory: (createTranslateLoader),
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                        }
                    }),
                    ngx_embed_video__WEBPACK_IMPORTED_MODULE_6__["EmbedVideo"].forRoot()
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }]; }, null); })();


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