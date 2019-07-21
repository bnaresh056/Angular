webpackJsonp(["icon.module"],{

/***/ "../../../../../src/app/pages/icon/icon.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-block animated fadeIn\">\n  <div class=\"row\">\n    <label class=\"control-label col-md-12\">Font Awesome</label>\n    <div class=\"col-md-1 icon-box\" *ngFor=\"let i of iconItem\" title=\"fa fa-{{i}}\">\n      <span class=\"fa fa-{{i}} icon\"></span>\n      <span>{{i}}</span>\n    </div>\n    <a href=\"https://fontawesome.com/icons\" target=\"_blank\" class=\"btn btn-link\">More Icons→</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/icon/icon.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icon-box {\n  margin: 20px 0;\n  height: auto;\n  min-height: 100px;\n  text-align: center;\n  font-size: 12px; }\n  .icon-box .icon {\n    display: block;\n    margin: 10px 0;\n    width: 100%;\n    font-size: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/icon/icon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconComponent = (function () {
    function IconComponent() {
        this.iconItem = [
            'bug',
            'area-chart',
            'bar-chart',
            'bar-chart-o',
            'line-chart',
            'pie-chart',
            'cog',
            'cogs',
            'file',
            'bell',
            'calendar',
            'check',
            'close',
            'comment',
            'comments',
            'database',
            'image',
            'navicon',
            'home',
            'print',
            'star',
            'tag',
            'tags',
            'user',
            'file',
            'file-o',
            'file-text-o',
            'file-word-o',
            'file-excel-o',
            'file-powerpoint-o',
            'file-pdf-o',
            'file-code-o',
            'file-audio-o',
            'file-image-o',
            'file-video-o',
            'file-zip-o',
        ];
    }
    IconComponent.prototype.ngOnInit = function () {
    };
    return IconComponent;
}());
IconComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-icon',
        template: __webpack_require__("../../../../../src/app/pages/icon/icon.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/icon/icon.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], IconComponent);

//# sourceMappingURL=icon.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/icon/icon.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconModule", function() { return IconModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon_routing__ = __webpack_require__("../../../../../src/app/pages/icon/icon.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icon_component__ = __webpack_require__("../../../../../src/app/pages/icon/icon.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var IconModule = (function () {
    function IconModule() {
    }
    return IconModule;
}());
IconModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__icon_routing__["a" /* routing */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__icon_component__["a" /* IconComponent */]
        ]
    })
], IconModule);

//# sourceMappingURL=icon.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/icon/icon.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon_component__ = __webpack_require__("../../../../../src/app/pages/icon/icon.component.ts");


var childRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__icon_component__["a" /* IconComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(childRoutes);
//# sourceMappingURL=icon.routing.js.map

/***/ })

});
//# sourceMappingURL=icon.module.chunk.js.map