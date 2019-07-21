webpackJsonp(["trans.module"],{

/***/ "../../../../../src/app/pages/trans/activities/activities.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  activities works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/trans/activities/activities.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/trans/activities/activities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesComponent; });
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

var ActivitiesComponent = (function () {
    function ActivitiesComponent() {
    }
    ActivitiesComponent.prototype.ngOnInit = function () {
    };
    return ActivitiesComponent;
}());
ActivitiesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-activities',
        template: __webpack_require__("../../../../../src/app/pages/trans/activities/activities.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/trans/activities/activities.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ActivitiesComponent);

//# sourceMappingURL=activities.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/trans/trans.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  trans works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/trans/trans.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/trans/trans.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransComponent; });
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

var TransComponent = (function () {
    function TransComponent() {
    }
    TransComponent.prototype.ngOnInit = function () {
    };
    return TransComponent;
}());
TransComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-trans',
        template: __webpack_require__("../../../../../src/app/pages/trans/trans.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/trans/trans.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TransComponent);

//# sourceMappingURL=trans.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/trans/trans.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransModule", function() { return TransModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trans_routing__ = __webpack_require__("../../../../../src/app/pages/trans/trans.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_modal__ = __webpack_require__("../../../../ngx-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__trans_component__ = __webpack_require__("../../../../../src/app/pages/trans/trans.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__activities_activities_component__ = __webpack_require__("../../../../../src/app/pages/trans/activities/activities.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/* components */


var TransModule = (function () {
    function TransModule() {
    }
    return TransModule;
}());
TransModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_modal__["ModalModule"],
            __WEBPACK_IMPORTED_MODULE_2__trans_routing__["a" /* routing */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__trans_component__["a" /* TransComponent */],
            __WEBPACK_IMPORTED_MODULE_6__activities_activities_component__["a" /* ActivitiesComponent */],
        ]
    })
], TransModule);

//# sourceMappingURL=trans.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/trans/trans.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trans_component__ = __webpack_require__("../../../../../src/app/pages/trans/trans.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activities_activities_component__ = __webpack_require__("../../../../../src/app/pages/trans/activities/activities.component.ts");


/* children components */

var childRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__trans_component__["a" /* TransComponent */],
        children: [
            { path: '', redirectTo: 'activities', pathMatch: 'full' },
            { path: 'activities', component: __WEBPACK_IMPORTED_MODULE_2__activities_activities_component__["a" /* ActivitiesComponent */] },
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(childRoutes);
//# sourceMappingURL=trans.routing.js.map

/***/ })

});
//# sourceMappingURL=trans.module.chunk.js.map