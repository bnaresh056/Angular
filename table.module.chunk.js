webpackJsonp(["table.module"],{

/***/ "../../../../../src/app/pages/table/components/basic-tables/basic-tables.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <card cardTitle=\"basic table\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>FIRSTNAME</th>\n            <th>LASTNAME</th>\n            <th>USERNAME</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of default_data;let index = index\">\n            <td>{{index}}</td>\n            <td>{{item.first_name}}</td>\n            <td>{{item.last_name}}</td>\n            <td>{{item.user_name}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </card>\n  </div>\n  <div class=\"col-md-6\">\n    <card cardTitle=\"bordered table\">\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>FIRSTNAME</th>\n            <th>LASTNAME</th>\n            <th>USERNAME</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of default_data;let index = index\">\n            <td>{{index}}</td>\n            <td>{{item.first_name}}</td>\n            <td>{{item.last_name}}</td>\n            <td>{{item.user_name}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </card>\n  </div>\n  <div class=\"col-md-6\">\n    <card cardTitle=\"hover table\">\n      <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>FIRSTNAME</th>\n            <th>LASTNAME</th>\n            <th>USERNAME</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of default_data;let index = index\">\n            <td>{{index}}</td>\n            <td>{{item.first_name}}</td>\n            <td>{{item.last_name}}</td>\n            <td>{{item.user_name}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </card>\n  </div>\n  <div class=\"col-md-6\">\n    <card cardTitle=\"striped table\">\n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>FIRSTNAME</th>\n            <th>LASTNAME</th>\n            <th>USERNAME</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of default_data;let index = index\">\n            <td>{{index}}</td>\n            <td>{{item.first_name}}</td>\n            <td>{{item.last_name}}</td>\n            <td>{{item.user_name}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/table/components/basic-tables/basic-tables.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table {\n  font-size: 14px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/table/components/basic-tables/basic-tables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicTablesComponent; });
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

var BasicTablesComponent = (function () {
    function BasicTablesComponent() {
    }
    BasicTablesComponent.prototype.ngOnInit = function () {
        this.default_data = [
            { first_name: 'Steve', last_name: 'Jobs', user_name: '@steve' },
            { first_name: 'Simon', last_name: 'Philips', user_name: '@simon' },
            { first_name: 'Jane', last_name: 'Doe', user_name: '@jane' },
            { first_name: 'Larry', last_name: 'Thornton', user_name: '@larry' },
            { first_name: 'Hiver', last_name: 'Choe', user_name: '@hiver' },
        ];
    };
    return BasicTablesComponent;
}());
BasicTablesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-basic-tables',
        template: __webpack_require__("../../../../../src/app/pages/table/components/basic-tables/basic-tables.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/table/components/basic-tables/basic-tables.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BasicTablesComponent);

//# sourceMappingURL=basic-tables.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/table/components/data-table/data-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <card cardTitle=\"Data Table\">\n      <table class=\"table table-bordered table-hover\">\n        <thead>\n          <tr>\n            <th>FIRSTNAME</th>\n            <th>LASTNAME</th>\n            <th>USERNAME</th>\n            <th>EMAIL</th>\n            <th>AGE</th>\n            <th>STATE</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of tableData | paginate: { id: 'pager', itemsPerPage: pageSize, currentPage: pageNumber};let index = index\">\n            <td>{{item.firstName}}</td>\n            <td>{{item.lastName}}</td>\n            <td>{{item.username}}</td>\n            <td>{{item.email}}</td>\n            <td>{{item.age}}</td>\n            <td>\n              <span class=\"label label-info\">info</span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <form class=\"pagination-wrapper\">\n        <div class=\"form-group pages\">\n          <pagination-controls class=\"my-pagination\" id=\"pager\" (pageChange)=\"pageChanged($event)\" maxSize=\"9\" directionLinks=\"true\"\n            autoHide=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\"\n            screenReaderCurrentLabel=\"You're on page\">\n          </pagination-controls>\n        </div>\n        <div class=\"form-group options pages\">\n          <div class=\"input-group input-group-sm\">\n            <select class=\"form-control\" name=\"pageChangedName\" [(ngModel)]=\"pageSize\" (ngModelChange)=\"loadData()\">\n              <option>1</option>\n              <option>5</option>\n              <option>10</option>\n              <option>20</option>\n              <option>50</option>\n              <option>100</option>\n              <option>200</option>\n            </select>\n            <span class=\"input-group-addon addon-right\">Per Page</span>\n          </div>\n        </div>\n      </form>\n    </card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/table/components/data-table/data-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  background: #fff; }\n\n.bg-default {\n  background: linear-gradient(to top right, #999999, #b3b2b2);\n  background: -webkit-linear-gradient(to top right, #999999, #b3b2b2); }\n\n.bg-primary, .pagination-wrapper .input-group .input-group-addon, .my-pagination /deep/ .ngx-pagination a:hover,\n.my-pagination /deep/ .ngx-pagination .current {\n  background: linear-gradient(to top right, #fca400, #ffd17c);\n  background: -webkit-linear-gradient(to top right, #fca400, #ffd17c); }\n\n.bg-success {\n  background: linear-gradient(to top right, #16be9a, #42e697);\n  background: -webkit-linear-gradient(to top right, #16be9a, #42e697); }\n\n.bg-danger {\n  background: linear-gradient(to top right, #fa5167, #fda09c);\n  background: -webkit-linear-gradient(to top right, #fa5167, #fda09c); }\n\n.bg-warning {\n  background: linear-gradient(to top right, #ff7403, #fac980);\n  background: -webkit-linear-gradient(to top right, #ff7403, #fac980); }\n\n.bg-info {\n  background: linear-gradient(to top right, #2cc3ff, #15f8bf);\n  background: -webkit-linear-gradient(to top right, #2cc3ff, #15f8bf); }\n\n.pagination-wrapper {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -ms-flex-pack: justify;\n      justify-content: space-between; }\n  .pagination-wrapper .input-group {\n    width: 150px; }\n    .pagination-wrapper .input-group .input-group-addon {\n      color: #fff;\n      border: none; }\n  .pagination-wrapper .form-group {\n    height: auto;\n    margin: 0;\n    padding: 0; }\n\n.my-pagination /deep/ .ngx-pagination {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  overflow: hidden;\n  font-size: 12px;\n  padding: 0; }\n  .my-pagination /deep/ .ngx-pagination a,\n  .my-pagination /deep/ .ngx-pagination .current {\n    min-width: 30px;\n    text-decoration: none;\n    height: 35px;\n    text-align: center;\n    line-height: 33px;\n    margin: 0;\n    color: #26253c; }\n    .my-pagination /deep/ .ngx-pagination a:last-child,\n    .my-pagination /deep/ .ngx-pagination .current:last-child {\n      border: none; }\n  .my-pagination /deep/ .ngx-pagination a:hover,\n  .my-pagination /deep/ .ngx-pagination .current {\n    min-width: 30px;\n    color: #fff; }\n  .my-pagination /deep/ .ngx-pagination .disabled {\n    color: rgba(38, 37, 60, 0.4);\n    cursor: not-allowed; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/table/components/data-table/data-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tablesData_service__ = __webpack_require__("../../../../../src/app/pages/table/components/data-table/tablesData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTableComponent = (function () {
    function DataTableComponent(_tablesDataService) {
        this._tablesDataService = _tablesDataService;
        /* pagination Info */
        this.pageSize = 10;
        this.pageNumber = 1;
    }
    DataTableComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    DataTableComponent.prototype.loadData = function () {
        this.tableData = this._tablesDataService.DATA;
    };
    DataTableComponent.prototype.pageChanged = function (pN) {
        this.pageNumber = pN;
    };
    return DataTableComponent;
}());
DataTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-data-table',
        template: __webpack_require__("../../../../../src/app/pages/table/components/data-table/data-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/table/components/data-table/data-table.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__tablesData_service__["a" /* TablesDataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tablesData_service__["a" /* TablesDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__tablesData_service__["a" /* TablesDataService */]) === "function" && _a || Object])
], DataTableComponent);

var _a;
//# sourceMappingURL=data-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/table/components/data-table/tablesData.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesDataService; });
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

var TablesDataService = (function () {
    function TablesDataService() {
        this.DATA = [
            {
                id: 1,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mdo',
                email: 'mdo@gmail.com',
                age: '28'
            },
            {
                id: 2,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@fat',
                email: 'fat@yandex.ru',
                age: '45'
            },
            {
                id: 3,
                firstName: 'Larry',
                lastName: 'Bird',
                username: '@twitter',
                email: 'twitter@outlook.com',
                age: '18'
            },
            {
                id: 4,
                firstName: 'John',
                lastName: 'Snow',
                username: '@snow',
                email: 'snow@gmail.com',
                age: '20'
            },
            {
                id: 5,
                firstName: 'Jack',
                lastName: 'Sparrow',
                username: '@jack',
                email: 'jack@yandex.ru',
                age: '30'
            },
            {
                id: 6,
                firstName: 'Ann',
                lastName: 'Smith',
                username: '@ann',
                email: 'ann@gmail.com',
                age: '21'
            },
            {
                id: 7,
                firstName: 'Barbara',
                lastName: 'Black',
                username: '@barbara',
                email: 'barbara@yandex.ru',
                age: '43'
            },
            {
                id: 8,
                firstName: 'Sevan',
                lastName: 'Bagrat',
                username: '@sevan',
                email: 'sevan@outlook.com',
                age: '13'
            },
            {
                id: 9,
                firstName: 'Ruben',
                lastName: 'Vardan',
                username: '@ruben',
                email: 'ruben@gmail.com',
                age: '22'
            },
            {
                id: 10,
                firstName: 'Karen',
                lastName: 'Sevan',
                username: '@karen',
                email: 'karen@yandex.ru',
                age: '33'
            },
            {
                id: 11,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mark',
                email: 'mark@gmail.com',
                age: '38'
            },
            {
                id: 12,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@jacob',
                email: 'jacob@yandex.ru',
                age: '48'
            },
            {
                id: 13,
                firstName: 'Haik',
                lastName: 'Hakob',
                username: '@haik',
                email: 'haik@outlook.com',
                age: '48'
            },
            {
                id: 14,
                firstName: 'Garegin',
                lastName: 'Jirair',
                username: '@garegin',
                email: 'garegin@gmail.com',
                age: '40'
            },
            {
                id: 15,
                firstName: 'Krikor',
                lastName: 'Bedros',
                username: '@krikor',
                email: 'krikor@yandex.ru',
                age: '32'
            }
        ];
    }
    return TablesDataService;
}());
TablesDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], TablesDataService);

//# sourceMappingURL=tablesData.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
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

var TableComponent = (function () {
    function TableComponent() {
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    return TableComponent;
}());
TableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-table',
        template: "<router-outlet></router-outlet>"
    }),
    __metadata("design:paramtypes", [])
], TableComponent);

//# sourceMappingURL=table.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/table/table.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableModule", function() { return TableModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_routing__ = __webpack_require__("../../../../../src/app/pages/table/table.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__table_component__ = __webpack_require__("../../../../../src/app/pages/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_basic_tables_basic_tables_component__ = __webpack_require__("../../../../../src/app/pages/table/components/basic-tables/basic-tables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_data_table_data_table_component__ = __webpack_require__("../../../../../src/app/pages/table/components/data-table/data-table.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/* components */



var TableModule = (function () {
    function TableModule() {
    }
    return TableModule;
}());
TableModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__table_routing__["a" /* routing */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__table_component__["a" /* TableComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_basic_tables_basic_tables_component__["a" /* BasicTablesComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_data_table_data_table_component__["a" /* DataTableComponent */]
        ]
    })
], TableModule);

//# sourceMappingURL=table.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/table/table.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__table_component__ = __webpack_require__("../../../../../src/app/pages/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_basic_tables_basic_tables_component__ = __webpack_require__("../../../../../src/app/pages/table/components/basic-tables/basic-tables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_data_table_data_table_component__ = __webpack_require__("../../../../../src/app/pages/table/components/data-table/data-table.component.ts");




var childRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__table_component__["a" /* TableComponent */],
        children: [
            { path: '', redirectTo: 'default-tables', pathMatch: 'full' },
            { path: 'basic-tables', component: __WEBPACK_IMPORTED_MODULE_2__components_basic_tables_basic_tables_component__["a" /* BasicTablesComponent */] },
            { path: 'data-table', component: __WEBPACK_IMPORTED_MODULE_3__components_data_table_data_table_component__["a" /* DataTableComponent */] },
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(childRoutes);
//# sourceMappingURL=table.routing.js.map

/***/ })

});
//# sourceMappingURL=table.module.chunk.js.map