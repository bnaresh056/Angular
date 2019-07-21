webpackJsonp(["common"],{

/***/ "../../../../../src/app/pages/charts/components/echarts/charts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsService; });
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

var ChartsService = (function () {
    function ChartsService() {
        this.xAxisData = [];
        this.data1 = [];
        this.data2 = [];
        this.PieOption = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['Example1', 'Example2', 'Example3']
            },
            roseType: 'angle',
            series: [
                {
                    name: 'PieChart',
                    type: 'pie',
                    radius: [0, '50%'],
                    data: [
                        { value: 235, name: 'Example1' },
                        { value: 210, name: 'Example2' },
                        { value: 162, name: 'Example3' }
                    ]
                }
            ]
        };
        this.LineOption = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    smooth: true
                }]
        };
        this.BarOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '60%',
                    data: [10, 52, 200, 334, 390, 330, 220]
                }
            ]
        };
        this.AnimationBarOption = {
            legend: {
                data: ['Example data1', 'Example data2'],
                align: 'left'
            },
            /* toolbox: {
                // y: 'bottom',
                feature: {
                    magicType: {
                        type: ['stack', 'tiled']
                    },
                    dataView: {},
                    saveAsImage: {
                        pixelRatio: 2
                    }
                }
            }, */
            tooltip: {},
            xAxis: {
                data: this.xAxisData,
                silent: false,
                splitLine: {
                    show: false
                }
            },
            yAxis: {},
            series: [{
                    name: 'Example data1',
                    type: 'bar',
                    data: this.data1,
                    animationDelay: function (idx) {
                        return idx * 10;
                    }
                }, {
                    name: 'Example data2',
                    type: 'bar',
                    data: this.data2,
                    animationDelay: function (idx) {
                        return idx * 10 + 100;
                    }
                }],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 5;
            }
        };
        for (var i = 0; i < 100; i++) {
            this.xAxisData.push('Type ' + i);
            this.data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
            this.data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
        }
    }
    ChartsService.prototype.getBarOption = function () {
        return this.BarOption;
    };
    ChartsService.prototype.getLineOption = function () {
        return this.LineOption;
    };
    ChartsService.prototype.getPieOption = function () {
        return this.PieOption;
    };
    ChartsService.prototype.getAnimationBarOption = function () {
        return this.AnimationBarOption;
    };
    return ChartsService;
}());
ChartsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ChartsService);

//# sourceMappingURL=charts.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/form/components/file-upload/file-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h2 class=\"col-md-12\">Angular2 File Upload</h2>\n\n  <div class=\"col-md-3\">\n    <h3>Select files</h3>\n    <div ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploader\"\n      class=\"well my-drop-zone\">\n      Base drop zone\n    </div>\n    <div ng2FileDrop [ngClass]=\"{'another-file-over-class': hasAnotherDropZoneOver}\" (fileOver)=\"fileOverAnother($event)\" [uploader]=\"uploader\"\n      class=\"well my-drop-zone\">\n      Another drop zone\n    </div>\n    Multiple\n    <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple />\n    <br/> Single\n    <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n  </div>\n\n  <div class=\"col-md-9\">\n    <h3>Upload queue</h3>\n    <p>Queue length: {{ uploader?.queue?.length }}</p>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th width=\"50%\">Name</th>\n          <th>Status</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of uploader.queue\">\n          <td>\n            <strong>{{ item?.file?.name }}</strong>\n          </td>\n          <td class=\"text-center\">\n            <span *ngIf=\"item.isSuccess\">\n              <i class=\"glyphicon glyphicon-ok\"></i>\n            </span>\n            <span *ngIf=\"item.isCancel\">\n              <i class=\"glyphicon glyphicon-ban-circle\"></i>\n            </span>\n            <span *ngIf=\"item.isError\">\n              <i class=\"glyphicon glyphicon-remove\"></i>\n            </span>\n          </td>\n          <td>\n            <button type=\"button\" class=\"btn btn-success btn-xs\" (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n              <span class=\"glyphicon glyphicon-upload\"></span> Upload\n            </button>\n            <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n              <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n            </button>\n            <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"item.remove()\">\n              <span class=\"glyphicon glyphicon-trash\"></span> Remove\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <div>\n      <div>\n        Queue progress:\n        <progress-bar [percent]=\"uploader.progress\" theme=\"success\"></progress-bar>\n      </div>\n      <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n        <span class=\"glyphicon glyphicon-upload\"></span> Upload all\n      </button>\n      <button type=\"button\" class=\"btn btn-warning btn-s\" (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n        <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\n      </button>\n      <button type=\"button\" class=\"btn btn-danger btn-s\" (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n        <span class=\"glyphicon glyphicon-trash\"></span> Remove all\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/form/components/file-upload/file-upload.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-drop-zone {\n  border: dotted 3px lightgray; }\n\n.nv-file-over {\n  border: dotted 3px red; }\n\n.another-file-over-class {\n  border: dotted 3px green; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/form/components/file-upload/file-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
var FileUploadComponent = (function () {
    function FileUploadComponent() {
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    FileUploadComponent.prototype.ngOnInit = function () { };
    FileUploadComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    FileUploadComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    return FileUploadComponent;
}());
FileUploadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-file-upload',
        template: __webpack_require__("../../../../../src/app/pages/form/components/file-upload/file-upload.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/form/components/file-upload/file-upload.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FileUploadComponent);

//# sourceMappingURL=file-upload.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/form/components/form-inputs/form-inputs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n\n    <!-- form-group form-control control-label ↓↓↓↓↓↓↓↓↓ -->\n    <card cardTitle=\"Input Types\" isCollapse=\"true\">\n      <div class=\"form-group\">\n        <label class=\"control-label\">Text</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Text Input\">\n        <label class=\"control-label\">Password</label>\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password Input\">\n        <label class=\"control-label\">With Help</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"With Help\">\n        <span class=\"help-block sub-little-text\">A block of help text that breaks onto a new line and may extend beyond one line.</span>\n        <label class=\"control-label\">Small Input</label>\n        <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Small Input\">\n        <label class=\"control-label\">Large Input</label>\n        <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\"Large Input\">\n        <label class=\"control-label\">Disabled</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Disabled Input\" disabled>\n        <label class=\"control-label\">Readonly</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Readonly Input\" readonly>\n        <label class=\"control-label\">Textarea</label>\n        <textarea cols=\"0\" rows=\"10\" class=\"form-control\" placeholder=\"Textarea\"></textarea>\n      </div>\n    </card>\n    <card cardTitle=\"Input Group\">\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <div class=\"input-group-btn\">\n            <button type=\"button\" class=\"btn btn-success dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              Action\n              <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\">\n              <li>\n                <a href=\"#\">Action</a>\n              </li>\n              <li>\n                <a href=\"#\">Another action</a>\n              </li>\n            </ul>\n          </div>\n          <input class=\"form-control form-control-sm with-success-addon\" placeholder=\"With button group\" type=\"text\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon input-group-addon-primary addon-left\" id=\"basic-addon1\">@</span>\n          <input class=\"form-control with-primary-addon\" placeholder=\"Username\" type=\"text\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <input class=\"form-control with-success-addon\" placeholder=\"Mail\" type=\"text\">\n          <span class=\"input-group-addon input-group-addon-success addon-right\" id=\"basic-addon1\">@mail.com</span>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon input-group-addon-warning addon-left\" id=\"basic-addon1\">www.</span>\n          <input class=\"form-control with-warning-addon\" placeholder=\"Sitename\" type=\"text\">\n          <span class=\"input-group-addon input-group-addon-warning addon-right\" id=\"basic-addon1\">.com</span>\n        </div>\n      </div>\n    </card>\n  </div>\n\n  <!-- input-group with-addon with-btn&btn-group ↓↓↓↓↓↓↓ -->\n  <div class=\"col-md-6\">\n    <card cardTitle=\"Checkbox&Radio\">\n      <div class=\"form-group\">\n        <div class=\"col-md-4\">\n          <input class=\"checkbox\" type=\"checkbox\" id=\"default-checkbox1\" checked>\n          <label class=\"check-label\" for=\"default-checkbox1\">Checkbox1</label>\n        </div>\n        <div class=\"col-md-4\">\n          <input class=\"checkbox\" type=\"checkbox\" id=\"default-checkbox2\">\n          <label class=\"check-label\" for=\"default-checkbox2\">Checkbox2</label>\n        </div>\n        <div class=\"col-md-4\">\n          <input class=\"checkbox\" type=\"checkbox\" id=\"default-checkbox3\">\n          <label class=\"check-label\" for=\"default-checkbox3\">Checkbox3</label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-md-4\">\n          <input class=\"radio\" type=\"radio\" id=\"default-radio1\" name=\"radio\" checked>\n          <label class=\"radio-label\" for=\"default-radio1\">Radio1</label>\n        </div>\n        <div class=\"col-md-4\">\n          <input class=\"radio\" type=\"radio\" id=\"default-radio2\" name=\"radio\">\n          <label class=\"radio-label\" for=\"default-radio2\">Radio2</label>\n        </div>\n        <div class=\"col-md-4\">\n          <input class=\"radio\" type=\"radio\" id=\"default-radio3\" name=\"radio\">\n          <label class=\"radio-label\" for=\"default-radio3\">Radio3</label>\n        </div>\n      </div>\n    </card>\n    <card cardTitle=\"Color&State\">\n      <div class=\"form-group\">\n        <div class=\"col-md-12\">\n          <input class=\"checkbox\" type=\"checkbox\" id=\"color-checkbox1\" checked>\n          <label class=\"check-label\" for=\"color-checkbox1\">Default</label>\n        </div>\n        <div class=\"col-md-12\">\n          <input class=\"checkbox checkbox-primary\" type=\"checkbox\" id=\"color-checkbox2\" checked>\n          <label class=\"check-label\" for=\"color-checkbox2\">Primary</label>\n        </div>\n        <div class=\"col-md-12\">\n          <input class=\"checkbox checkbox-success\" type=\"checkbox\" id=\"color-checkbox3\" checked>\n          <label class=\"check-label\" for=\"color-checkbox3\">Success</label>\n        </div>\n        <div class=\"col-md-12\">\n          <input class=\"checkbox checkbox-warning\" type=\"checkbox\" id=\"color-checkbox4\" checked>\n          <label class=\"check-label\" for=\"color-checkbox4\">Warning</label>\n        </div>\n        <div class=\"col-md-12\">\n          <input class=\"checkbox checkbox-danger\" type=\"checkbox\" id=\"color-checkbox5\" checked>\n          <label class=\"check-label\" for=\"color-checkbox5\">Danger</label>\n        </div>\n        <div class=\"col-md-12\">\n          <input class=\"checkbox checkbox-info\" type=\"checkbox\" id=\"color-checkbox6\" checked>\n          <label class=\"check-label\" for=\"color-checkbox6\">Info</label>\n        </div>\n      </div>\n    </card>\n    <card cardTitle=\"Switch\">\n      <div class=\"switch-group\">\n        <label class=\"control-label\">Multiple Switch</label>\n        <switch switchName=\"multiple\" switchId=\"multiple1\" multiple [checked]=\"true\"></switch>\n        <switch switchName=\"multiple\" switchId=\"multiple2\" theme=\"success\" multiple [checked]=\"true\"></switch>\n        <switch switchName=\"multiple\" switchId=\"multiple3\" theme=\"warning\" multiple [checked]=\"true\"></switch>\n        <switch switchName=\"multiple\" switchId=\"multiple4\" theme=\"danger\" multiple [checked]=\"true\"></switch>\n        <switch switchName=\"multiple\" switchId=\"multiple5\" theme=\"info\" multiple [checked]=\"true\"></switch>\n      </div>\n      <div class=\"switch-group\">\n        <label class=\"control-label\">Single Switch</label>\n        <switch switchName=\"single\" switchId=\"single1\" [checked]=\"true\"></switch>\n        <switch switchName=\"single\" switchId=\"single2\" theme=\"success\"></switch>\n        <switch switchName=\"single\" switchId=\"single3\" theme=\"warning\"></switch>\n        <switch switchName=\"single\" switchId=\"single4\" theme=\"danger\"></switch>\n        <switch switchName=\"single\" switchId=\"single5\" theme=\"info\"></switch>\n      </div>\n    </card>\n    <card cardTitle=\"Select&Multiple Select\">\n      <div class=\"form-group\">\n        <label class=\"control-label\">Select</label>\n        <select name=\"select\" id=\"select1\" class=\"form-control\">\n          <option value=\"option1\">option1</option>\n          <option value=\"option2\">option2</option>\n          <option value=\"option3\">option3</option>\n          <option value=\"option4\">option4</option>\n        </select>\n        <label class=\"control-label\">Multiple Select</label>\n        <select multiple name=\"select\" id=\"select1\" class=\"form-control\">\n          <option value=\"option1\">option1</option>\n          <option value=\"option2\">option2</option>\n          <option value=\"option3\">option3</option>\n          <option value=\"option4\">option4</option>\n          <option value=\"option5\">option4</option>\n          <option value=\"option6\">option4</option>\n          <option value=\"option7\">option4</option>\n        </select>\n      </div>\n    </card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/form/components/form-inputs/form-inputs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  background: #fff; }\n\n.bg-default {\n  background: linear-gradient(to top right, #999999, #b3b2b2);\n  background: -webkit-linear-gradient(to top right, #999999, #b3b2b2); }\n\n.bg-primary {\n  background: linear-gradient(to top right, #fca400, #ffd17c);\n  background: -webkit-linear-gradient(to top right, #fca400, #ffd17c); }\n\n.bg-success {\n  background: linear-gradient(to top right, #16be9a, #42e697);\n  background: -webkit-linear-gradient(to top right, #16be9a, #42e697); }\n\n.bg-danger {\n  background: linear-gradient(to top right, #fa5167, #fda09c);\n  background: -webkit-linear-gradient(to top right, #fa5167, #fda09c); }\n\n.bg-warning {\n  background: linear-gradient(to top right, #ff7403, #fac980);\n  background: -webkit-linear-gradient(to top right, #ff7403, #fac980); }\n\n.bg-info {\n  background: linear-gradient(to top right, #2cc3ff, #15f8bf);\n  background: -webkit-linear-gradient(to top right, #2cc3ff, #15f8bf); }\n\n.check-label,\n.radio-label {\n  margin-bottom: 20px; }\n\n.form-group > .form-control {\n  margin-bottom: 10px; }\n\n.form-group > .help-block {\n  margin-top: -10px; }\n\n.switch-group {\n  padding: 10px;\n  width: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  .switch-group .control-label {\n    width: 100%; }\n  .switch-group switch {\n    -ms-flex: 1;\n        flex: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/form/components/form-inputs/form-inputs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormInputsComponent; });
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

var FormInputsComponent = (function () {
    function FormInputsComponent() {
    }
    FormInputsComponent.prototype.ngOnInit = function () { };
    return FormInputsComponent;
}());
FormInputsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-form-inputs',
        template: __webpack_require__("../../../../../src/app/pages/form/components/form-inputs/form-inputs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/form/components/form-inputs/form-inputs.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FormInputsComponent);

//# sourceMappingURL=form-inputs.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/form/components/form-layouts/form-layouts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <card cardTitle=\"Inline Form\">\n      <form class=\"form-inline\">\n        <label for=\"example1\" class=\"form-label\">Name:</label>\n        <input type=\"text\" class=\"form-control\" id=\"example1\" placeholder=\"Jane Doe\">\n        <label for=\"example2\" class=\"form-label\">Email:</label>\n        <input type=\"email\" class=\"form-control\" id=\"example2\" placeholder=\"jane.doe@example.com\">\n        <button type=\"submit\" class=\"btn btn-primary\">Send Invitation</button>\n      </form>\n    </card>\n  </div>\n  <div class=\"col-md-12\">\n    <card cardTitle=\"Basic Form\">\n      <form class=\"form-group\">\n        <label class=\"control-label\">Name</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Name\">\n        <label class=\"control-label\">Surname</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Surname\">\n        <label class=\"control-label\">Password</label>\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n        <label class=\"control-label\">Description</label>\n        <textarea class=\"form-control\" placeholder=\"Description\"></textarea>\n        <input class=\"checkbox\" type=\"checkbox\" id=\"remember\" checked>\n        <label class=\"check-label\" for=\"remember\">Remember Me</label>\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n      </form>\n    </card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/form/components/form-layouts/form-layouts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group .form-control,\n.form-group .check-label {\n  margin: 10px 0; }\n\n.form-inline .control-label,\n.form-inline .form-control,\n.form-inline .btn {\n  margin: auto 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/form/components/form-layouts/form-layouts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormLayoutsComponent; });
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

var FormLayoutsComponent = (function () {
    function FormLayoutsComponent() {
    }
    FormLayoutsComponent.prototype.ngOnInit = function () {
    };
    return FormLayoutsComponent;
}());
FormLayoutsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-form-layouts',
        template: __webpack_require__("../../../../../src/app/pages/form/components/form-layouts/form-layouts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/form/components/form-layouts/form-layouts.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FormLayoutsComponent);

//# sourceMappingURL=form-layouts.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/form/components/ng2-select/children-select/children-select.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"selectivity-input example-input\" style=\"width: 300px; margin-bottom: 20px;\">\n  <h3>Select a city by country</h3>\n  <ng-select [allowClear]=\"true\" [items]=\"items\" [disabled]=\"disabled\" (data)=\"refreshValue($event)\" (selected)=\"selected($event)\"\n    (removed)=\"removed($event)\" placeholder=\"No city selected\"></ng-select>\n  <p></p>\n  <pre>{{value.text}}</pre>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/form/components/ng2-select/children-select/children-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildrenSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChildrenSelectComponent = (function () {
    function ChildrenSelectComponent() {
        this.items = [
            {
                text: 'Austria',
                children: [
                    { id: 54, text: 'Vienna' }
                ]
            },
            {
                text: 'Belgium',
                children: [
                    { id: 2, text: 'Antwerp' },
                    { id: 9, text: 'Brussels' }
                ]
            },
            {
                text: 'Bulgaria',
                children: [
                    { id: 48, text: 'Sofia' }
                ]
            },
            {
                text: 'Croatia',
                children: [
                    { id: 58, text: 'Zagreb' }
                ]
            },
            {
                text: 'Czech Republic',
                children: [
                    { id: 42, text: 'Prague' }
                ]
            },
            {
                text: 'Denmark',
                children: [
                    { id: 13, text: 'Copenhagen' }
                ]
            },
            {
                text: 'England',
                children: [
                    { id: 6, text: 'Birmingham' },
                    { id: 7, text: 'Bradford' },
                    { id: 26, text: 'Leeds' },
                    { id: 30, text: 'London' },
                    { id: 34, text: 'Manchester' },
                    { id: 47, text: 'Sheffield' }
                ]
            },
            {
                text: 'Finland',
                children: [
                    { id: 25, text: 'Helsinki' }
                ]
            },
            {
                text: 'France',
                children: [
                    { id: 35, text: 'Marseille' },
                    { id: 40, text: 'Paris' }
                ]
            },
            {
                text: 'Germany',
                children: [
                    { id: 5, text: 'Berlin' },
                    { id: 8, text: 'Bremen' },
                    { id: 12, text: 'Cologne' },
                    { id: 14, text: 'Dortmund' },
                    { id: 15, text: 'Dresden' },
                    { id: 17, text: 'Düsseldorf' },
                    { id: 18, text: 'Essen' },
                    { id: 19, text: 'Frankfurt' },
                    { id: 23, text: 'Hamburg' },
                    { id: 24, text: 'Hannover' },
                    { id: 27, text: 'Leipzig' },
                    { id: 37, text: 'Munich' },
                    { id: 50, text: 'Stuttgart' }
                ]
            },
            {
                text: 'Greece',
                children: [
                    { id: 3, text: 'Athens' }
                ]
            },
            {
                text: 'Hungary',
                children: [
                    { id: 11, text: 'Budapest' }
                ]
            },
            {
                text: 'Ireland',
                children: [
                    { id: 16, text: 'Dublin' }
                ]
            },
            {
                text: 'Italy',
                children: [
                    { id: 20, text: 'Genoa' },
                    { id: 36, text: 'Milan' },
                    { id: 38, text: 'Naples' },
                    { id: 39, text: 'Palermo' },
                    { id: 44, text: 'Rome' },
                    { id: 52, text: 'Turin' }
                ]
            },
            {
                text: 'Latvia',
                children: [
                    { id: 43, text: 'Riga' }
                ]
            },
            {
                text: 'Lithuania',
                children: [
                    { id: 55, text: 'Vilnius' }
                ]
            },
            {
                text: 'Netherlands',
                children: [
                    { id: 1, text: 'Amsterdam' },
                    { id: 45, text: 'Rotterdam' },
                    { id: 51, text: 'The Hague' }
                ]
            },
            {
                text: 'Poland',
                children: [
                    { id: 29, text: 'Łódź' },
                    { id: 31, text: 'Kraków' },
                    { id: 41, text: 'Poznań' },
                    { id: 56, text: 'Warsaw' },
                    { id: 57, text: 'Wrocław' }
                ]
            },
            {
                text: 'Portugal',
                children: [
                    { id: 28, text: 'Lisbon' }
                ]
            },
            {
                text: 'Romania',
                children: [
                    { id: 10, text: 'Bucharest' }
                ]
            },
            {
                text: 'Scotland',
                children: [
                    { id: 21, text: 'Glasgow' }
                ]
            },
            {
                text: 'Spain',
                children: [
                    { id: 4, text: 'Barcelona' },
                    { id: 32, text: 'Madrid' },
                    { id: 33, text: 'Málaga' },
                    { id: 46, text: 'Seville' },
                    { id: 53, text: 'Valencia' },
                    { id: 59, text: 'Zaragoza' }
                ]
            },
            {
                text: 'Sweden',
                children: [
                    { id: 22, text: 'Gothenburg' },
                    { id: 49, text: 'Stockholm' }
                ]
            }
        ];
        this.value = {};
        this._disabledV = '0';
        this.disabled = false;
    }
    ChildrenSelectComponent.prototype.selected = function (value) {
        console.log('Selected value is: ', value);
    };
    ChildrenSelectComponent.prototype.removed = function (value) {
        console.log('Removed value is: ', value);
    };
    ChildrenSelectComponent.prototype.refreshValue = function (value) {
        this.value = value;
    };
    return ChildrenSelectComponent;
}());
ChildrenSelectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-children-select',
        template: __webpack_require__("../../../../../src/app/pages/form/components/ng2-select/children-select/children-select.component.html")
    })
], ChildrenSelectComponent);

//# sourceMappingURL=children-select.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/form/components/ng2-select/multiple-select/multiple-select.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h3 class=\"col-md-12\">Select multiple cities</h3>\n  <div class=\"col-md-6\">\n    <ng-select [multiple]=\"true\" [items]=\"items\" [disabled]=\"disabled\" (data)=\"refreshValue($event)\" (selected)=\"selected($event)\"\n      (removed)=\"removed($event)\" placeholder=\"No city selected\"></ng-select>\n  </div>\n  <div class=\"col-md-6\">\n    <pre>{{itemsToString(value)}}</pre>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/form/components/ng2-select/multiple-select/multiple-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultipleSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MultipleSelectComponent = (function () {
    function MultipleSelectComponent() {
        this.items = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
            'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
            'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin', 'Düsseldorf',
            'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg', 'Hamburg', 'Hannover',
            'Helsinki', 'Leeds', 'Leipzig', 'Lisbon', 'Łódź', 'London', 'Kraków', 'Madrid',
            'Málaga', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Naples', 'Palermo',
            'Paris', 'Poznań', 'Prague', 'Riga', 'Rome', 'Rotterdam', 'Seville', 'Sheffield',
            'Sofia', 'Stockholm', 'Stuttgart', 'The Hague', 'Turin', 'Valencia', 'Vienna',
            'Vilnius', 'Warsaw', 'Wrocław', 'Zagreb', 'Zaragoza'];
        this.value = ['Athens'];
        this._disabledV = '0';
        this.disabled = false;
    }
    MultipleSelectComponent.prototype.selected = function (value) {
        console.log('Selected value is: ', value);
    };
    MultipleSelectComponent.prototype.removed = function (value) {
        console.log('Removed value is: ', value);
    };
    MultipleSelectComponent.prototype.refreshValue = function (value) {
        this.value = value;
    };
    MultipleSelectComponent.prototype.itemsToString = function (value) {
        if (value === void 0) { value = []; }
        return value
            .map(function (item) {
            return item.text;
        }).join(',');
    };
    return MultipleSelectComponent;
}());
MultipleSelectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-multiple-select',
        template: __webpack_require__("../../../../../src/app/pages/form/components/ng2-select/multiple-select/multiple-select.component.html")
    })
], MultipleSelectComponent);

//# sourceMappingURL=multiple-select.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/form/components/ng2-select/ng2-select.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-block\">\n  <app-single-select></app-single-select>\n  <app-multiple-select></app-multiple-select>\n  <!-- <app-children-select></app-children-select> -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/form/components/ng2-select/ng2-select.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/form/components/ng2-select/ng2-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ng2SelectComponent; });
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

var Ng2SelectComponent = (function () {
    function Ng2SelectComponent() {
    }
    Ng2SelectComponent.prototype.ngOnInit = function () {
    };
    return Ng2SelectComponent;
}());
Ng2SelectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ng2-select',
        template: __webpack_require__("../../../../../src/app/pages/form/components/ng2-select/ng2-select.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/form/components/ng2-select/ng2-select.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], Ng2SelectComponent);

//# sourceMappingURL=ng2-select.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/form/components/ng2-select/single-select/single-select.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h3 class=\"col-md-12\">Select a single city</h3>\n  <div class=\"col-md-6\">\n    <ng-select [allowClear]=\"true\" [items]=\"items\" [disabled]=\"disabled\" (data)=\"refreshValue($event)\" (selected)=\"selected($event)\"\n      (removed)=\"removed($event)\" (typed)=\"typed($event)\" placeholder=\"No city selected\">\n    </ng-select>\n  </div>\n  <div class=\"col-md-6\">\n    <pre>{{value.text}}</pre>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/form/components/ng2-select/single-select/single-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SingleSelectComponent = (function () {
    function SingleSelectComponent() {
        this.items = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
            'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
            'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
            'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
            'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
            'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
            'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
            'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
            'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
            'Zagreb', 'Zaragoza', 'Łódź'];
        this.value = {};
        this._disabledV = '0';
        this.disabled = false;
    }
    SingleSelectComponent.prototype.selected = function (value) {
        console.log('Selected value is: ', value);
    };
    SingleSelectComponent.prototype.removed = function (value) {
        console.log('Removed value is: ', value);
    };
    SingleSelectComponent.prototype.typed = function (value) {
        console.log('New search input: ', value);
    };
    SingleSelectComponent.prototype.refreshValue = function (value) {
        this.value = value;
    };
    return SingleSelectComponent;
}());
SingleSelectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-single-select',
        template: __webpack_require__("../../../../../src/app/pages/form/components/ng2-select/single-select/single-select.component.html")
    })
], SingleSelectComponent);

//# sourceMappingURL=single-select.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
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

var FormComponent = (function () {
    function FormComponent() {
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    return FormComponent;
}());
FormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-form',
        template: "<router-outlet></router-outlet>"
    }),
    __metadata("design:paramtypes", [])
], FormComponent);

//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/form/form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_routing__ = __webpack_require__("../../../../../src/app/pages/form/form.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_select__ = __webpack_require__("../../../../ng2-select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__form_component__ = __webpack_require__("../../../../../src/app/pages/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_form_inputs_form_inputs_component__ = __webpack_require__("../../../../../src/app/pages/form/components/form-inputs/form-inputs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_form_layouts_form_layouts_component__ = __webpack_require__("../../../../../src/app/pages/form/components/form-layouts/form-layouts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_file_upload_file_upload_component__ = __webpack_require__("../../../../../src/app/pages/form/components/file-upload/file-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ng2_select_ng2_select_component__ = __webpack_require__("../../../../../src/app/pages/form/components/ng2-select/ng2-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_ng2_select_single_select_single_select_component__ = __webpack_require__("../../../../../src/app/pages/form/components/ng2-select/single-select/single-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_ng2_select_multiple_select_multiple_select_component__ = __webpack_require__("../../../../../src/app/pages/form/components/ng2-select/multiple-select/multiple-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_ng2_select_children_select_children_select_component__ = __webpack_require__("../../../../../src/app/pages/form/components/ng2-select/children-select/children-select.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/* components */








var FormModule = (function () {
    function FormModule() {
    }
    return FormModule;
}());
FormModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_5_ng2_select__["SelectModule"],
            __WEBPACK_IMPORTED_MODULE_2__form_routing__["a" /* routing */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__form_component__["a" /* FormComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_form_inputs_form_inputs_component__["a" /* FormInputsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_form_layouts_form_layouts_component__["a" /* FormLayoutsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_file_upload_file_upload_component__["a" /* FileUploadComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_ng2_select_ng2_select_component__["a" /* Ng2SelectComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_ng2_select_single_select_single_select_component__["a" /* SingleSelectComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_ng2_select_multiple_select_multiple_select_component__["a" /* MultipleSelectComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_ng2_select_children_select_children_select_component__["a" /* ChildrenSelectComponent */]
        ]
    })
], FormModule);

//# sourceMappingURL=form.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/form/form.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_component__ = __webpack_require__("../../../../../src/app/pages/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_form_inputs_form_inputs_component__ = __webpack_require__("../../../../../src/app/pages/form/components/form-inputs/form-inputs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_form_layouts_form_layouts_component__ = __webpack_require__("../../../../../src/app/pages/form/components/form-layouts/form-layouts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_file_upload_file_upload_component__ = __webpack_require__("../../../../../src/app/pages/form/components/file-upload/file-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ng2_select_ng2_select_component__ = __webpack_require__("../../../../../src/app/pages/form/components/ng2-select/ng2-select.component.ts");






var childRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__form_component__["a" /* FormComponent */],
        children: [
            { path: '', redirectTo: 'inputs', pathMatch: 'full' },
            { path: 'form-inputs', component: __WEBPACK_IMPORTED_MODULE_2__components_form_inputs_form_inputs_component__["a" /* FormInputsComponent */] },
            { path: 'form-layouts', component: __WEBPACK_IMPORTED_MODULE_3__components_form_layouts_form_layouts_component__["a" /* FormLayoutsComponent */] },
            { path: 'file-upload', component: __WEBPACK_IMPORTED_MODULE_4__components_file_upload_file_upload_component__["a" /* FileUploadComponent */] },
            { path: 'ng2-select', component: __WEBPACK_IMPORTED_MODULE_5__components_ng2_select_ng2_select_component__["a" /* Ng2SelectComponent */] },
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(childRoutes);
//# sourceMappingURL=form.routing.js.map

/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-drop.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var file_uploader_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-uploader.class.js");
var FileDropDirective = (function () {
    function FileDropDirective(element) {
        this.fileOver = new core_1.EventEmitter();
        this.onFileDrop = new core_1.EventEmitter();
        this.element = element;
    }
    FileDropDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileDropDirective.prototype.getFilters = function () {
        return {};
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        var options = this.getOptions();
        var filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    };
    FileDropDirective.prototype.onDragOver = function (event) {
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        if (this.element) {
            if (event.currentTarget === this.element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    FileDropDirective.prototype._getTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    FileDropDirective.prototype._preventAndStop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    FileDropDirective.prototype._haveFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    return FileDropDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileDropDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "fileOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "onFileDrop", void 0);
__decorate([
    core_1.HostListener('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDrop", null);
__decorate([
    core_1.HostListener('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDragOver", null);
__decorate([
    core_1.HostListener('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], FileDropDirective.prototype, "onDragLeave", null);
FileDropDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileDrop]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileDropDirective);
exports.FileDropDirective = FileDropDirective;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-item.class.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var file_like_object_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-like-object.class.js");
var FileItem = (function () {
    function FileItem(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new file_like_object_class_1.FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    FileItem.prototype.upload = function () {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    };
    FileItem.prototype.cancel = function () {
        this.uploader.cancelItem(this);
    };
    FileItem.prototype.remove = function () {
        this.uploader.removeFromQueue(this);
    };
    FileItem.prototype.onBeforeUpload = function () {
        return void 0;
    };
    FileItem.prototype.onBuildForm = function (form) {
        return { form: form };
    };
    FileItem.prototype.onProgress = function (progress) {
        return { progress: progress };
    };
    FileItem.prototype.onSuccess = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onError = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onCancel = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onComplete = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype._onBeforeUpload = function () {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    };
    FileItem.prototype._onBuildForm = function (form) {
        this.onBuildForm(form);
    };
    FileItem.prototype._onProgress = function (progress) {
        this.progress = progress;
        this.onProgress(progress);
    };
    FileItem.prototype._onSuccess = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    };
    FileItem.prototype._onError = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    };
    FileItem.prototype._onCancel = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    };
    FileItem.prototype._onComplete = function (response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    };
    FileItem.prototype._prepareToUploading = function () {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    };
    return FileItem;
}());
exports.FileItem = FileItem;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-like-object.class.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
var FileLikeObject = (function () {
    function FileLikeObject(fileOrInput) {
        this.rawFile = fileOrInput;
        var isInput = isElement(fileOrInput);
        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        var method = '_createFrom' + postfix;
        this[method](fakePathOrObject);
    }
    FileLikeObject.prototype._createFromFakePath = function (path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    };
    FileLikeObject.prototype._createFromObject = function (object) {
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    };
    return FileLikeObject;
}());
exports.FileLikeObject = FileLikeObject;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-select.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var file_uploader_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-uploader.class.js");
var FileSelectDirective = (function () {
    function FileSelectDirective(element) {
        this.onFileSelected = new core_1.EventEmitter();
        this.element = element;
    }
    FileSelectDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileSelectDirective.prototype.getFilters = function () {
        return {};
    };
    FileSelectDirective.prototype.isEmptyAfterSelection = function () {
        return !!this.element.nativeElement.attributes.multiple;
    };
    FileSelectDirective.prototype.onChange = function () {
        var files = this.element.nativeElement.files;
        var options = this.getOptions();
        var filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    };
    return FileSelectDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileSelectDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileSelectDirective.prototype, "onFileSelected", void 0);
__decorate([
    core_1.HostListener('change'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], FileSelectDirective.prototype, "onChange", null);
FileSelectDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileSelect]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileSelectDirective);
exports.FileSelectDirective = FileSelectDirective;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-type.class.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FileType = (function () {
    function FileType() {
    }
    FileType.getMimeClass = function (file) {
        var mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    };
    FileType.fileTypeDetection = function (inputFilename) {
        var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'zip': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        var chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        var extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    };
    return FileType;
}());
/*  MS office  */
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream'
];
exports.FileType = FileType;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-upload.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var file_drop_directive_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-drop.directive.js");
var file_select_directive_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-select.directive.js");
var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    return FileUploadModule;
}());
FileUploadModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective],
        exports: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective]
    })
], FileUploadModule);
exports.FileUploadModule = FileUploadModule;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-uploader.class.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var file_like_object_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-like-object.class.js");
var file_item_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-item.class.js");
var file_type_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-type.class.js");
function isFile(value) {
    return (File && value instanceof File);
}
var FileUploader = (function () {
    function FileUploader(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false,
            formatDataFunction: function (item) { return item._file; },
            formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new core_1.EventEmitter();
    }
    FileUploader.prototype.setOptions = function (options) {
        this.options = Object.assign(this.options, options);
        this.authToken = this.options.authToken;
        this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
        this.autoUpload = this.options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
    };
    FileUploader.prototype.addToQueue = function (files, options, filters) {
        var _this = this;
        var list = [];
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            list.push(file);
        }
        var arrayOfFilters = this._getFilters(filters);
        var count = this.queue.length;
        var addedFileItems = [];
        list.map(function (some) {
            if (!options) {
                options = _this.options;
            }
            var temp = new file_like_object_class_1.FileLikeObject(some);
            if (_this._isValidFile(temp, arrayOfFilters, options)) {
                var fileItem = new file_item_class_1.FileItem(_this, some, options);
                addedFileItems.push(fileItem);
                _this.queue.push(fileItem);
                _this._onAfterAddingFile(fileItem);
            }
            else {
                var filter = arrayOfFilters[_this._failFilterIndex];
                _this._onWhenAddingFileFailed(temp, filter, options);
            }
        });
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    };
    FileUploader.prototype.removeFromQueue = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    };
    FileUploader.prototype.clearQueue = function () {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    };
    FileUploader.prototype.uploadItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        this[transport](item);
    };
    FileUploader.prototype.cancelItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    };
    FileUploader.prototype.uploadAll = function () {
        var items = this.getNotUploadedItems().filter(function (item) { return !item.isUploading; });
        if (!items.length) {
            return;
        }
        items.map(function (item) { return item._prepareToUploading(); });
        items[0].upload();
    };
    FileUploader.prototype.cancelAll = function () {
        var items = this.getNotUploadedItems();
        items.map(function (item) { return item.cancel(); });
    };
    FileUploader.prototype.isFile = function (value) {
        return isFile(value);
    };
    FileUploader.prototype.isFileLikeObject = function (value) {
        return value instanceof file_like_object_class_1.FileLikeObject;
    };
    FileUploader.prototype.getIndexOfItem = function (value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    };
    FileUploader.prototype.getNotUploadedItems = function () {
        return this.queue.filter(function (item) { return !item.isUploaded; });
    };
    FileUploader.prototype.getReadyItems = function () {
        return this.queue
            .filter(function (item) { return (item.isReady && !item.isUploading); })
            .sort(function (item1, item2) { return item1.index - item2.index; });
    };
    FileUploader.prototype.destroy = function () {
        return void 0;
    };
    FileUploader.prototype.onAfterAddingAll = function (fileItems) {
        return { fileItems: fileItems };
    };
    FileUploader.prototype.onBuildItemForm = function (fileItem, form) {
        return { fileItem: fileItem, form: form };
    };
    FileUploader.prototype.onAfterAddingFile = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onWhenAddingFileFailed = function (item, filter, options) {
        return { item: item, filter: filter, options: options };
    };
    FileUploader.prototype.onBeforeUploadItem = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onProgressItem = function (fileItem, progress) {
        return { fileItem: fileItem, progress: progress };
    };
    FileUploader.prototype.onProgressAll = function (progress) {
        return { progress: progress };
    };
    FileUploader.prototype.onSuccessItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onErrorItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCancelItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteAll = function () {
        return void 0;
    };
    FileUploader.prototype._mimeTypeFilter = function (item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    };
    FileUploader.prototype._fileSizeFilter = function (item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    };
    FileUploader.prototype._fileTypeFilter = function (item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(file_type_class_1.FileType.getMimeClass(item)) === -1);
    };
    FileUploader.prototype._onErrorItem = function (item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    };
    FileUploader.prototype._onCompleteItem = function (item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        var nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    };
    FileUploader.prototype._headersGetter = function (parsedHeaders) {
        return function (name) {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        };
    };
    FileUploader.prototype._xhrTransport = function (item) {
        var _this = this;
        var that = this;
        var xhr = item._xhr = new XMLHttpRequest();
        var sendable;
        this._onBeforeUploadItem(item);
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            var appendFile = function () { return sendable.append(item.alias, item._file, item.file.name); };
            if (!this.options.parametersBeforeFiles) {
                appendFile();
            }
            // For AWS, Additional Parameters must come BEFORE Files
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach(function (key) {
                    var paramVal = _this.options.additionalParameter[key];
                    // Allow an additional parameter to include the filename
                    if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                        paramVal = paramVal.replace('{{file_name}}', item.file.name);
                    }
                    sendable.append(key, paramVal);
                });
            }
            if (this.options.parametersBeforeFiles) {
                appendFile();
            }
        }
        else {
            sendable = this.options.formatDataFunction(item);
        }
        xhr.upload.onprogress = function (event) {
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            _this._onProgressItem(item, progress);
        };
        xhr.onload = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            var method = '_on' + gist + 'Item';
            _this[method](item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onerror = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onabort = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onCancelItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            for (var _i = 0, _a = this.options.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (item.headers.length) {
            for (var _b = 0, _c = item.headers; _b < _c.length; _b++) {
                var header = _c[_b];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
            }
        };
        if (this.options.formatDataFunctionIsAsync) {
            sendable.then(function (result) { return xhr.send(JSON.stringify(result)); });
        }
        else {
            xhr.send(sendable);
        }
        this._render();
    };
    FileUploader.prototype._getTotalProgress = function (value) {
        if (value === void 0) { value = 0; }
        if (this.options.removeAfterUpload) {
            return value;
        }
        var notUploaded = this.getNotUploadedItems().length;
        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        var ratio = 100 / this.queue.length;
        var current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    };
    FileUploader.prototype._getFilters = function (filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            var names_1 = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter(function (filter) { return names_1.indexOf(filter.name) !== -1; });
        }
        return this.options.filters;
    };
    FileUploader.prototype._render = function () {
        return void 0;
    };
    FileUploader.prototype._queueLimitFilter = function () {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    };
    FileUploader.prototype._isValidFile = function (file, filters, options) {
        var _this = this;
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every(function (filter) {
            _this._failFilterIndex++;
            return filter.fn.call(_this, file, options);
        });
    };
    FileUploader.prototype._isSuccessCode = function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    FileUploader.prototype._transformResponse = function (response, headers) {
        return response;
    };
    FileUploader.prototype._parseHeaders = function (headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map(function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        });
        return parsed;
    };
    FileUploader.prototype._onWhenAddingFileFailed = function (item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    };
    FileUploader.prototype._onAfterAddingFile = function (item) {
        this.onAfterAddingFile(item);
    };
    FileUploader.prototype._onAfterAddingAll = function (items) {
        this.onAfterAddingAll(items);
    };
    FileUploader.prototype._onBeforeUploadItem = function (item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    };
    FileUploader.prototype._onBuildItemForm = function (item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    };
    FileUploader.prototype._onProgressItem = function (item, progress) {
        var total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    };
    FileUploader.prototype._onSuccessItem = function (item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    };
    FileUploader.prototype._onCancelItem = function (item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    };
    return FileUploader;
}());
exports.FileUploader = FileUploader;


/***/ }),

/***/ "../../../../ng2-file-upload/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("../../../../ng2-file-upload/file-upload/file-select.directive.js"));
__export(__webpack_require__("../../../../ng2-file-upload/file-upload/file-drop.directive.js"));
__export(__webpack_require__("../../../../ng2-file-upload/file-upload/file-uploader.class.js"));
__export(__webpack_require__("../../../../ng2-file-upload/file-upload/file-item.class.js"));
__export(__webpack_require__("../../../../ng2-file-upload/file-upload/file-like-object.class.js"));
var file_upload_module_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-upload.module.js");
exports.FileUploadModule = file_upload_module_1.FileUploadModule;


/***/ }),

/***/ "../../../../ng2-select/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../ng2-select/select/common.js"));
__export(__webpack_require__("../../../../ng2-select/select/off-click.js"));
__export(__webpack_require__("../../../../ng2-select/select/select.module.js"));
__export(__webpack_require__("../../../../ng2-select/select/select.js"));
__export(__webpack_require__("../../../../ng2-select/select/select-item.js"));
__export(__webpack_require__("../../../../ng2-select/select/select-pipes.js"));


/***/ }),

/***/ "../../../../ng2-select/select/common.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function escapeRegexp(queryToEscape) {
    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}
exports.escapeRegexp = escapeRegexp;


/***/ }),

/***/ "../../../../ng2-select/select/off-click.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var OffClickDirective = (function () {
    function OffClickDirective() {
    }
    /* tslint:enable */
    OffClickDirective.prototype.onClick = function ($event) {
        $event.stopPropagation();
    };
    OffClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { if (typeof document !== 'undefined') {
            document.addEventListener('click', _this.offClickHandler);
        } }, 0);
    };
    OffClickDirective.prototype.ngOnDestroy = function () {
        if (typeof document !== 'undefined') {
            document.removeEventListener('click', this.offClickHandler);
        }
    };
    OffClickDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[offClick]'
                },] },
    ];
    /** @nocollapse */
    OffClickDirective.ctorParameters = function () { return []; };
    OffClickDirective.propDecorators = {
        'offClickHandler': [{ type: core_1.Input, args: ['offClick',] },],
        'onClick': [{ type: core_1.HostListener, args: ['click', ['$event'],] },],
    };
    return OffClickDirective;
}());
exports.OffClickDirective = OffClickDirective;


/***/ }),

/***/ "../../../../ng2-select/select/select-item.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SelectItem = (function () {
    function SelectItem(source) {
        var _this = this;
        if (typeof source === 'string') {
            this.id = this.text = source;
        }
        if (typeof source === 'object') {
            this.id = source.id || source.text;
            this.text = source.text;
            if (source.children && source.text) {
                this.children = source.children.map(function (c) {
                    var r = new SelectItem(c);
                    r.parent = _this;
                    return r;
                });
                this.text = source.text;
            }
        }
    }
    SelectItem.prototype.fillChildrenHash = function (optionsMap, startIndex) {
        var i = startIndex;
        this.children.map(function (child) {
            optionsMap.set(child.id, i++);
        });
        return i;
    };
    SelectItem.prototype.hasChildren = function () {
        return this.children && this.children.length > 0;
    };
    SelectItem.prototype.getSimilar = function () {
        var r = new SelectItem(false);
        r.id = this.id;
        r.text = this.text;
        r.parent = this.parent;
        return r;
    };
    return SelectItem;
}());
exports.SelectItem = SelectItem;


/***/ }),

/***/ "../../../../ng2-select/select/select-pipes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../../ng2-select/select/common.js");
var HighlightPipe = (function () {
    function HighlightPipe() {
    }
    HighlightPipe.prototype.transform = function (value, query) {
        if (query.length < 1) {
            return value;
        }
        if (query) {
            var tagRE = new RegExp('<[^<>]*>', 'ig');
            // get ist of tags
            var tagList = value.match(tagRE);
            // Replace tags with token
            var tmpValue = value.replace(tagRE, '$!$');
            // Replace search words
            value = tmpValue.replace(new RegExp(common_1.escapeRegexp(query), 'gi'), '<strong>$&</strong>');
            // Reinsert HTML
            for (var i = 0; value.indexOf('$!$') > -1; i++) {
                value = value.replace('$!$', tagList[i]);
            }
        }
        return value;
    };
    HighlightPipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'highlight' },] },
    ];
    /** @nocollapse */
    HighlightPipe.ctorParameters = function () { return []; };
    return HighlightPipe;
}());
exports.HighlightPipe = HighlightPipe;
function stripTags(input) {
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
    var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return input.replace(commentsAndPhpTags, '').replace(tags, '');
}
exports.stripTags = stripTags;


/***/ }),

/***/ "../../../../ng2-select/select/select.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var select_item_1 = __webpack_require__("../../../../ng2-select/select/select-item.js");
var select_pipes_1 = __webpack_require__("../../../../ng2-select/select/select-pipes.js");
var common_1 = __webpack_require__("../../../../ng2-select/select/common.js");
var styles = "\n  .ui-select-toggle {\n    position: relative;\n  }\n\n  /* Fix caret going into new line in Firefox */\n  .ui-select-placeholder {\n    float: left;\n  }\n  \n  /* Fix Bootstrap dropdown position when inside a input-group */\n  .input-group > .dropdown {\n    /* Instead of relative */\n    position: static;\n  }\n  \n  .ui-select-match > .btn {\n    /* Instead of center because of .btn */\n    text-align: left !important;\n  }\n  \n  .ui-select-match > .caret {\n    position: absolute;\n    top: 45%;\n    right: 15px;\n  }\n  \n  .ui-disabled {\n    background-color: #eceeef;\n    border-radius: 4px;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 5;\n    opacity: 0.6;\n    top: 0;\n    left: 0;\n    cursor: not-allowed;\n  }\n  \n  .ui-select-choices {\n    width: 100%;\n    height: auto;\n    max-height: 200px;\n    overflow-x: hidden;\n    margin-top: 0;\n  }\n  \n  .ui-select-multiple .ui-select-choices {\n    margin-top: 1px;\n  }\n  .ui-select-choices-row>a {\n      display: block;\n      padding: 3px 20px;\n      clear: both;\n      font-weight: 400;\n      line-height: 1.42857143;\n      color: #333;\n      white-space: nowrap;\n  }\n  .ui-select-choices-row.active>a {\n      color: #fff;\n      text-decoration: none;\n      outline: 0;\n      background-color: #428bca;\n  }\n  \n  .ui-select-multiple {\n    height: auto;\n    padding:3px 3px 0 3px;\n  }\n  \n  .ui-select-multiple input.ui-select-search {\n    background-color: transparent !important; /* To prevent double background when disabled */\n    border: none;\n    outline: none;\n    box-shadow: none;\n    height: 1.6666em;\n    padding: 0;\n    margin-bottom: 3px;\n    \n  }\n  .ui-select-match .close {\n      font-size: 1.6em;\n      line-height: 0.75;\n  }\n  \n  .ui-select-multiple .ui-select-match-item {\n    outline: 0;\n    margin: 0 3px 3px 0;\n  }\n  .ui-select-toggle > .caret {\n      position: absolute;\n      height: 10px;\n      top: 50%;\n      right: 10px;\n      margin-top: -2px;\n  }\n";
var SelectComponent = (function () {
    function SelectComponent(element, sanitizer) {
        this.sanitizer = sanitizer;
        this.allowClear = false;
        this.placeholder = '';
        this.idField = 'id';
        this.textField = 'text';
        this.childrenField = 'children';
        this.multiple = false;
        this.data = new core_1.EventEmitter();
        this.selected = new core_1.EventEmitter();
        this.removed = new core_1.EventEmitter();
        this.typed = new core_1.EventEmitter();
        this.opened = new core_1.EventEmitter();
        this.options = [];
        this.itemObjects = [];
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inputMode = false;
        this._optionsOpened = false;
        this.inputValue = '';
        this._items = [];
        this._disabled = false;
        this._active = [];
        this.element = element;
        this.clickedOutside = this.clickedOutside.bind(this);
    }
    Object.defineProperty(SelectComponent.prototype, "items", {
        set: function (value) {
            var _this = this;
            if (!value) {
                this._items = this.itemObjects = [];
            }
            else {
                this._items = value.filter(function (item) {
                    if ((typeof item === 'string') || (typeof item === 'object' && item && item[_this.textField] && item[_this.idField])) {
                        return item;
                    }
                });
                this.itemObjects = this._items.map(function (item) { return (typeof item === 'string' ? new select_item_1.SelectItem(item) : new select_item_1.SelectItem({ id: item[_this.idField], text: item[_this.textField], children: item[_this.childrenField] })); });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = value;
            if (this._disabled === true) {
                this.hideOptions();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (selectedItems) {
            var _this = this;
            if (!selectedItems || selectedItems.length === 0) {
                this._active = [];
            }
            else {
                var areItemsStrings_1 = typeof selectedItems[0] === 'string';
                this._active = selectedItems.map(function (item) {
                    var data = areItemsStrings_1
                        ? item
                        : { id: item[_this.idField], text: item[_this.textField] };
                    return new select_item_1.SelectItem(data);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "optionsOpened", {
        get: function () {
            return this._optionsOpened;
        },
        set: function (value) {
            this._optionsOpened = value;
            this.opened.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.sanitize = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    SelectComponent.prototype.inputEvent = function (e, isUpMode) {
        if (isUpMode === void 0) { isUpMode = false; }
        // tab
        if (e.keyCode === 9) {
            return;
        }
        if (isUpMode && (e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 38 ||
            e.keyCode === 40 || e.keyCode === 13)) {
            e.preventDefault();
            return;
        }
        // backspace
        if (!isUpMode && e.keyCode === 8) {
            var el = this.element.nativeElement
                .querySelector('div.ui-select-container > input');
            if (!el.value || el.value.length <= 0) {
                if (this.active.length > 0) {
                    this.remove(this.active[this.active.length - 1]);
                }
                e.preventDefault();
            }
        }
        // esc
        if (!isUpMode && e.keyCode === 27) {
            this.hideOptions();
            this.element.nativeElement.children[0].focus();
            e.preventDefault();
            return;
        }
        // del
        if (!isUpMode && e.keyCode === 46) {
            if (this.active.length > 0) {
                this.remove(this.active[this.active.length - 1]);
            }
            e.preventDefault();
        }
        // left
        if (!isUpMode && e.keyCode === 37 && this._items.length > 0) {
            this.behavior.first();
            e.preventDefault();
            return;
        }
        // right
        if (!isUpMode && e.keyCode === 39 && this._items.length > 0) {
            this.behavior.last();
            e.preventDefault();
            return;
        }
        // up
        if (!isUpMode && e.keyCode === 38) {
            this.behavior.prev();
            e.preventDefault();
            return;
        }
        // down
        if (!isUpMode && e.keyCode === 40) {
            this.behavior.next();
            e.preventDefault();
            return;
        }
        // enter
        if (!isUpMode && e.keyCode === 13) {
            if (this.active.indexOf(this.activeOption) === -1) {
                this.selectActiveMatch();
                this.behavior.next();
            }
            e.preventDefault();
            return;
        }
        var target = e.target || e.srcElement;
        if (target && target.value) {
            this.inputValue = target.value;
            this.behavior.filter(new RegExp(common_1.escapeRegexp(this.inputValue), 'ig'));
            this.doEvent('typed', this.inputValue);
        }
        else {
            this.open();
        }
    };
    SelectComponent.prototype.ngOnInit = function () {
        this.behavior = (this.firstItemHasChildren) ?
            new ChildrenBehavior(this) : new GenericBehavior(this);
    };
    SelectComponent.prototype.remove = function (item) {
        if (this._disabled === true) {
            return;
        }
        if (this.multiple === true && this.active) {
            var index = this.active.indexOf(item);
            this.active.splice(index, 1);
            this.data.next(this.active);
            this.doEvent('removed', item);
        }
        if (this.multiple === false) {
            this.active = [];
            this.data.next(this.active);
            this.doEvent('removed', item);
        }
    };
    SelectComponent.prototype.doEvent = function (type, value) {
        if (this[type] && value) {
            this[type].next(value);
        }
        this.onTouched();
        if (type === 'selected' || type === 'removed') {
            this.onChange(this.active);
        }
    };
    SelectComponent.prototype.clickedOutside = function () {
        this.inputMode = false;
        this.optionsOpened = false;
    };
    Object.defineProperty(SelectComponent.prototype, "firstItemHasChildren", {
        get: function () {
            return this.itemObjects[0] && this.itemObjects[0].hasChildren();
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.writeValue = function (val) {
        this.active = val;
        this.data.emit(this.active);
    };
    SelectComponent.prototype.validate = function (c) {
        var controlValue = c ? c.value : [];
        if (!controlValue) {
            controlValue = [];
        }
        return (controlValue.length > 0) ? null : {
            ng2SelectEmptyError: {
                valid: false
            }
        };
    };
    SelectComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    SelectComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    SelectComponent.prototype.matchClick = function (e) {
        if (this._disabled === true) {
            return;
        }
        this.inputMode = !this.inputMode;
        if (this.inputMode === true && ((this.multiple === true && e) || this.multiple === false)) {
            this.focusToInput();
            this.open();
        }
    };
    SelectComponent.prototype.mainClick = function (event) {
        if (this.inputMode === true || this._disabled === true) {
            return;
        }
        if (event.keyCode === 46) {
            event.preventDefault();
            this.inputEvent(event);
            return;
        }
        if (event.keyCode === 8) {
            event.preventDefault();
            this.inputEvent(event, true);
            return;
        }
        if (event.keyCode === 9 || event.keyCode === 13 ||
            event.keyCode === 27 || (event.keyCode >= 37 && event.keyCode <= 40)) {
            event.preventDefault();
            return;
        }
        this.inputMode = true;
        var value = String
            .fromCharCode(96 <= event.keyCode && event.keyCode <= 105 ? event.keyCode - 48 : event.keyCode)
            .toLowerCase();
        this.focusToInput(value);
        this.open();
        var target = event.target || event.srcElement;
        target.value = value;
        this.inputEvent(event);
    };
    SelectComponent.prototype.selectActive = function (value) {
        this.activeOption = value;
    };
    SelectComponent.prototype.isActive = function (value) {
        return this.activeOption.id === value.id;
    };
    SelectComponent.prototype.removeClick = function (value, event) {
        event.stopPropagation();
        this.remove(value);
    };
    SelectComponent.prototype.focusToInput = function (value) {
        var _this = this;
        if (value === void 0) { value = ''; }
        setTimeout(function () {
            var el = _this.element.nativeElement.querySelector('div.ui-select-container > input');
            if (el) {
                el.focus();
                el.value = value;
            }
        }, 0);
    };
    SelectComponent.prototype.open = function () {
        var _this = this;
        this.options = this.itemObjects
            .filter(function (option) { return (_this.multiple === false ||
            _this.multiple === true && !_this.active.find(function (o) { return option.text === o.text; })); });
        if (this.options.length > 0) {
            this.behavior.first();
        }
        this.optionsOpened = true;
    };
    SelectComponent.prototype.hideOptions = function () {
        this.inputMode = false;
        this.optionsOpened = false;
    };
    SelectComponent.prototype.selectActiveMatch = function () {
        this.selectMatch(this.activeOption);
    };
    SelectComponent.prototype.selectMatch = function (value, e) {
        if (e === void 0) { e = void 0; }
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (this.options.length <= 0) {
            return;
        }
        if (this.multiple === true) {
            this.active.push(value);
            this.data.next(this.active);
        }
        if (this.multiple === false) {
            this.active[0] = value;
            this.data.next(this.active[0]);
        }
        this.doEvent('selected', value);
        this.hideOptions();
        if (this.multiple === true) {
            this.focusToInput('');
        }
        else {
            this.focusToInput(select_pipes_1.stripTags(value.text));
            this.element.nativeElement.querySelector('.ui-select-container').focus();
        }
    };
    SelectComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng-select',
                    styles: [styles],
                    providers: [
                        {
                            provide: forms_1.NG_VALUE_ACCESSOR,
                            /* tslint:disable */
                            useExisting: core_1.forwardRef(function () { return SelectComponent; }),
                            /* tslint:enable */
                            multi: true
                        },
                        {
                            provide: forms_1.NG_VALIDATORS,
                            useExisting: core_1.forwardRef(function () { return SelectComponent; }),
                            multi: true,
                        }
                    ],
                    template: "\n  <div tabindex=\"0\"\n     *ngIf=\"multiple === false\"\n     (keyup)=\"mainClick($event)\"\n     [offClick]=\"clickedOutside\"\n     class=\"ui-select-container dropdown open\">\n    <div [ngClass]=\"{'ui-disabled': disabled}\"></div>\n    <div class=\"ui-select-match\"\n         *ngIf=\"!inputMode\">\n      <span tabindex=\"-1\"\n          class=\"btn btn-default btn-secondary form-control ui-select-toggle\"\n          (click)=\"matchClick($event)\"\n          style=\"outline: 0;\">\n        <span *ngIf=\"active.length <= 0\" class=\"ui-select-placeholder text-muted\">{{placeholder}}</span>\n        <span *ngIf=\"active.length > 0\" class=\"ui-select-match-text pull-left\"\n              [ngClass]=\"{'ui-select-allow-clear': allowClear && active.length > 0}\"\n              [innerHTML]=\"sanitize(active[0].text)\"></span>\n        <i class=\"dropdown-toggle pull-right\"></i>\n        <i class=\"caret pull-right\"></i>\n        <a *ngIf=\"allowClear && active.length>0\" class=\"btn btn-xs btn-link pull-right\" style=\"margin-right: 10px; padding: 0;\" (click)=\"removeClick(active[0], $event)\">\n           <i class=\"glyphicon glyphicon-remove\"></i>\n        </a>\n      </span>\n    </div>\n    <input type=\"text\" autocomplete=\"false\" tabindex=\"-1\"\n           (keydown)=\"inputEvent($event)\"\n           (keyup)=\"inputEvent($event, true)\"\n           [disabled]=\"disabled\"\n           class=\"form-control ui-select-search\"\n           *ngIf=\"inputMode\"\n           placeholder=\"{{active.length <= 0 ? placeholder : ''}}\">\n     <!-- options template -->\n     <ul *ngIf=\"optionsOpened && options && options.length > 0 && !firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let o of options\" role=\"menuitem\">\n          <div class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  \n      <ul *ngIf=\"optionsOpened && options && options.length > 0 && firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let c of options; let index=index\" role=\"menuitem\">\n          <div class=\"divider dropdown-divider\" *ngIf=\"index > 0\"></div>\n          <div class=\"dropdown-header\">{{c.text}}</div>\n  \n          <div *ngFor=\"let o of c.children\"\n               class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\"\n               [ngClass]=\"{'active': isActive(o)}\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  </div>\n\n  <div tabindex=\"0\"\n     *ngIf=\"multiple === true\"\n     (keyup)=\"mainClick($event)\"\n     (focus)=\"focusToInput('')\"\n     [offClick]=\"clickedOutside\"\n     class=\"ui-select-container ui-select-multiple dropdown form-control open\">\n    <div [ngClass]=\"{'ui-disabled': disabled}\"></div>\n    <span class=\"ui-select-match\">\n        <span *ngFor=\"let a of active\">\n            <span class=\"ui-select-match-item btn btn-default btn-secondary btn-xs\"\n                  tabindex=\"-1\"\n                  type=\"button\"\n                  [ngClass]=\"{'btn-default': true}\">\n               <a class=\"close\"\n                  style=\"margin-left: 5px; padding: 0;\"\n                  (click)=\"removeClick(a, $event)\">&times;</a>\n               <span [innerHtml]=\"sanitize(a.text)\"></span>\n           </span>\n        </span>\n    </span>\n    <input type=\"text\"\n           (keydown)=\"inputEvent($event)\"\n           (keyup)=\"inputEvent($event, true)\"\n           (click)=\"matchClick($event)\"\n           [disabled]=\"disabled\"\n           autocomplete=\"false\"\n           autocorrect=\"off\"\n           autocapitalize=\"off\"\n           spellcheck=\"false\"\n           class=\"form-control ui-select-search\"\n           placeholder=\"{{active.length <= 0 ? placeholder : ''}}\"\n           role=\"combobox\">\n     <!-- options template -->\n     <ul *ngIf=\"optionsOpened && options && options.length > 0 && !firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let o of options\" role=\"menuitem\">\n          <div class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  \n      <ul *ngIf=\"optionsOpened && options && options.length > 0 && firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let c of options; let index=index\" role=\"menuitem\">\n          <div class=\"divider dropdown-divider\" *ngIf=\"index > 0\"></div>\n          <div class=\"dropdown-header\">{{c.text}}</div>\n  \n          <div *ngFor=\"let o of c.children\"\n               class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\"\n               [ngClass]=\"{'active': isActive(o)}\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  </div>\n  "
                },] },
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: platform_browser_1.DomSanitizer, },
    ]; };
    SelectComponent.propDecorators = {
        'allowClear': [{ type: core_1.Input },],
        'placeholder': [{ type: core_1.Input },],
        'idField': [{ type: core_1.Input },],
        'textField': [{ type: core_1.Input },],
        'childrenField': [{ type: core_1.Input },],
        'multiple': [{ type: core_1.Input },],
        'items': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'active': [{ type: core_1.Input },],
        'data': [{ type: core_1.Output },],
        'selected': [{ type: core_1.Output },],
        'removed': [{ type: core_1.Output },],
        'typed': [{ type: core_1.Output },],
        'opened': [{ type: core_1.Output },],
    };
    return SelectComponent;
}());
exports.SelectComponent = SelectComponent;
var Behavior = (function () {
    function Behavior(actor) {
        this.optionsMap = new Map();
        this.actor = actor;
    }
    Behavior.prototype.fillOptionsMap = function () {
        var _this = this;
        this.optionsMap.clear();
        var startPos = 0;
        this.actor.itemObjects
            .map(function (item) {
            startPos = item.fillChildrenHash(_this.optionsMap, startPos);
        });
    };
    Behavior.prototype.ensureHighlightVisible = function (optionsMap) {
        if (optionsMap === void 0) { optionsMap = void 0; }
        var container = this.actor.element.nativeElement.querySelector('.ui-select-choices-content');
        if (!container) {
            return;
        }
        var choices = container.querySelectorAll('.ui-select-choices-row');
        if (choices.length < 1) {
            return;
        }
        var activeIndex = this.getActiveIndex(optionsMap);
        if (activeIndex < 0) {
            return;
        }
        var highlighted = choices[activeIndex];
        if (!highlighted) {
            return;
        }
        var posY = highlighted.offsetTop + highlighted.clientHeight - container.scrollTop;
        var height = container.offsetHeight;
        if (posY > height) {
            container.scrollTop += posY - height;
        }
        else if (posY < highlighted.clientHeight) {
            container.scrollTop -= highlighted.clientHeight - posY;
        }
    };
    Behavior.prototype.getActiveIndex = function (optionsMap) {
        if (optionsMap === void 0) { optionsMap = void 0; }
        var ai = this.actor.options.indexOf(this.actor.activeOption);
        if (ai < 0 && optionsMap !== void 0) {
            ai = optionsMap.get(this.actor.activeOption.id);
        }
        return ai;
    };
    return Behavior;
}());
exports.Behavior = Behavior;
var GenericBehavior = (function (_super) {
    __extends(GenericBehavior, _super);
    function GenericBehavior(actor) {
        return _super.call(this, actor) || this;
    }
    GenericBehavior.prototype.first = function () {
        this.actor.activeOption = this.actor.options[0];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.last = function () {
        this.actor.activeOption = this.actor.options[this.actor.options.length - 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.prev = function () {
        var index = this.actor.options.indexOf(this.actor.activeOption);
        this.actor.activeOption = this.actor
            .options[index - 1 < 0 ? this.actor.options.length - 1 : index - 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.next = function () {
        var index = this.actor.options.indexOf(this.actor.activeOption);
        this.actor.activeOption = this.actor
            .options[index + 1 > this.actor.options.length - 1 ? 0 : index + 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.filter = function (query) {
        var _this = this;
        var options = this.actor.itemObjects
            .filter(function (option) {
            return select_pipes_1.stripTags(option.text).match(query) &&
                (_this.actor.multiple === false ||
                    (_this.actor.multiple === true && _this.actor.active.map(function (item) { return item.id; }).indexOf(option.id) < 0));
        });
        this.actor.options = options;
        if (this.actor.options.length > 0) {
            this.actor.activeOption = this.actor.options[0];
            _super.prototype.ensureHighlightVisible.call(this);
        }
    };
    return GenericBehavior;
}(Behavior));
exports.GenericBehavior = GenericBehavior;
var ChildrenBehavior = (function (_super) {
    __extends(ChildrenBehavior, _super);
    function ChildrenBehavior(actor) {
        return _super.call(this, actor) || this;
    }
    ChildrenBehavior.prototype.first = function () {
        this.actor.activeOption = this.actor.options[0].children[0];
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.last = function () {
        this.actor.activeOption =
            this.actor
                .options[this.actor.options.length - 1]
                .children[this.actor.options[this.actor.options.length - 1].children.length - 1];
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.prev = function () {
        var _this = this;
        var indexParent = this.actor.options
            .findIndex(function (option) { return _this.actor.activeOption.parent && _this.actor.activeOption.parent.id === option.id; });
        var index = this.actor.options[indexParent].children
            .findIndex(function (option) { return _this.actor.activeOption && _this.actor.activeOption.id === option.id; });
        this.actor.activeOption = this.actor.options[indexParent].children[index - 1];
        if (!this.actor.activeOption) {
            if (this.actor.options[indexParent - 1]) {
                this.actor.activeOption = this.actor
                    .options[indexParent - 1]
                    .children[this.actor.options[indexParent - 1].children.length - 1];
            }
        }
        if (!this.actor.activeOption) {
            this.last();
        }
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.next = function () {
        var _this = this;
        var indexParent = this.actor.options
            .findIndex(function (option) { return _this.actor.activeOption.parent && _this.actor.activeOption.parent.id === option.id; });
        var index = this.actor.options[indexParent].children
            .findIndex(function (option) { return _this.actor.activeOption && _this.actor.activeOption.id === option.id; });
        this.actor.activeOption = this.actor.options[indexParent].children[index + 1];
        if (!this.actor.activeOption) {
            if (this.actor.options[indexParent + 1]) {
                this.actor.activeOption = this.actor.options[indexParent + 1].children[0];
            }
        }
        if (!this.actor.activeOption) {
            this.first();
        }
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.filter = function (query) {
        var options = [];
        var optionsMap = new Map();
        var startPos = 0;
        for (var _i = 0, _a = this.actor.itemObjects; _i < _a.length; _i++) {
            var si = _a[_i];
            var children = si.children.filter(function (option) { return query.test(option.text); });
            startPos = si.fillChildrenHash(optionsMap, startPos);
            if (children.length > 0) {
                var newSi = si.getSimilar();
                newSi.children = children;
                options.push(newSi);
            }
        }
        this.actor.options = options;
        if (this.actor.options.length > 0) {
            this.actor.activeOption = this.actor.options[0].children[0];
            _super.prototype.ensureHighlightVisible.call(this, optionsMap);
        }
    };
    return ChildrenBehavior;
}(Behavior));
exports.ChildrenBehavior = ChildrenBehavior;


/***/ }),

/***/ "../../../../ng2-select/select/select.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var select_1 = __webpack_require__("../../../../ng2-select/select/select.js");
var select_pipes_1 = __webpack_require__("../../../../ng2-select/select/select-pipes.js");
var off_click_1 = __webpack_require__("../../../../ng2-select/select/off-click.js");
var SelectModule = (function () {
    function SelectModule() {
    }
    SelectModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [select_1.SelectComponent, select_pipes_1.HighlightPipe, off_click_1.OffClickDirective],
                    exports: [select_1.SelectComponent, select_pipes_1.HighlightPipe, off_click_1.OffClickDirective]
                },] },
    ];
    /** @nocollapse */
    SelectModule.ctorParameters = function () { return []; };
    return SelectModule;
}());
exports.SelectModule = SelectModule;


/***/ }),

/***/ "../../../../ngx-echarts/ngx-echarts.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxEchartsModule; });
/* unused harmony export NgxEchartsDirective */
/* unused harmony export NgxEchartsService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_empty__ = __webpack_require__("../../../../rxjs/add/observable/empty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);






var ChangeFilter = (function () {
    /**
     * @param {?} _changes
     */
    function ChangeFilter(_changes) {
        this._changes = _changes;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ChangeFilter.of = function (changes) {
        return new ChangeFilter(changes);
    };
    /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    ChangeFilter.prototype.notEmpty = function (key) {
        if (this._changes[key]) {
            var /** @type {?} */ value = this._changes[key].currentValue;
            if (value !== undefined && value !== null) {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(value);
            }
        }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].empty();
    };
    /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    ChangeFilter.prototype.has = function (key) {
        if (this._changes[key]) {
            var /** @type {?} */ value = this._changes[key].currentValue;
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(value);
        }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].empty();
    };
    return ChangeFilter;
}());
var NgxEchartsDirective = (function () {
    /**
     * @param {?} el
     * @param {?} _ngZone
     */
    function NgxEchartsDirective(el, _ngZone) {
        this.el = el;
        this._ngZone = _ngZone;
        this.autoResize = true;
        this.loadingType = 'default';
        // chart events:
        this.chartInit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.chartClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.chartDblClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.chartMouseDown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.chartMouseUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.chartMouseOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.chartMouseOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.chartGlobalOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.chartContextMenu = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.chartDataZoom = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._chart = null;
        this.currentOffsetWidth = 0;
        this.currentOffsetHeight = 0;
        this.currentWindowWidth = null;
        this._resize$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
    }
    /**
     * @return {?}
     */
    NgxEchartsDirective.prototype.createChart = function () {
        var _this = this;
        this.currentWindowWidth = window.innerWidth;
        this.currentOffsetWidth = this.el.nativeElement.offsetWidth;
        this.currentOffsetHeight = this.el.nativeElement.offsetHeight;
        var /** @type {?} */ dom = this.el.nativeElement;
        if (window && window.getComputedStyle) {
            var /** @type {?} */ prop = window.getComputedStyle(dom, null).getPropertyValue('height');
            if ((!prop || prop === '0px') &&
                (!dom.style.height || dom.style.height === '0px')) {
                dom.style.height = '400px';
            }
        }
        return this._ngZone.runOutsideAngular(function () { return echarts.init(dom, _this.theme || undefined, _this.initOpts || undefined); });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxEchartsDirective.prototype.onWindowResize = function (event) {
        if (this.autoResize && event.target.innerWidth !== this.currentWindowWidth) {
            this.currentWindowWidth = event.target.innerWidth;
            this.currentOffsetWidth = this.el.nativeElement.offsetWidth;
            this.currentOffsetHeight = this.el.nativeElement.offsetHeight;
            this._resize$.next();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxEchartsDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var /** @type {?} */ filter = ChangeFilter.of(changes);
        filter.notEmpty('options').subscribe(function (opt) { return _this.onOptionsChange(opt); });
        filter.notEmpty('merge').subscribe(function (opt) { return _this.setOption(opt); });
        filter.has('loading').subscribe(function (v) { return _this.toggleLoading(!!v); });
    };
    /**
     * @return {?}
     */
    NgxEchartsDirective.prototype.ngOnDestroy = function () {
        if (this._resizeSub) {
            this._resizeSub.unsubscribe();
            this._resizeSub = null;
        }
        if (this._chart) {
            this._chart.dispose();
            this._chart = null;
        }
    };
    /**
     * @return {?}
     */
    NgxEchartsDirective.prototype.ngDoCheck = function () {
        // No heavy work in DoCheck!
        if (this._chart && this.autoResize) {
            var /** @type {?} */ offsetWidth = this.el.nativeElement.offsetWidth;
            var /** @type {?} */ offsetHeight = this.el.nativeElement.offsetHeight;
            if (this.currentOffsetWidth !== offsetWidth || this.currentOffsetHeight !== offsetHeight) {
                this.currentOffsetWidth = offsetWidth;
                this.currentOffsetHeight = offsetHeight;
                this._resize$.next();
            }
        }
    };
    /**
     * @param {?} opt
     * @return {?}
     */
    NgxEchartsDirective.prototype.onOptionsChange = function (opt) {
        var _this = this;
        if (opt) {
            if (!this._chart) {
                this._chart = this.createChart();
                // subscribe to _resize$ and debounced
                this._resizeSub = this._resize$.debounceTime(50).subscribe(function () {
                    if (_this._chart) {
                        _this._chart.resize();
                    }
                });
                // output echart instance:
                this.chartInit.emit(this._chart);
                // register events:
                this.registerEvents(this._chart);
            }
            this._chart.setOption(this.options, true);
            /**
             * Bugfix: Line chart is not animated on init
             * https://github.com/xieziyu/ngx-echarts/issues/102
             */
            // this._chart.resize();
        }
    };
    /**
     * @param {?} _chart
     * @return {?}
     */
    NgxEchartsDirective.prototype.registerEvents = function (_chart) {
        var _this = this;
        if (_chart) {
            // register mouse events:
            _chart.on('click', function (e) { return _this._ngZone.run(function () { return _this.chartClick.emit(e); }); });
            _chart.on('dblClick', function (e) { return _this._ngZone.run(function () { return _this.chartDblClick.emit(e); }); });
            _chart.on('mousedown', function (e) { return _this._ngZone.run(function () { return _this.chartMouseDown.emit(e); }); });
            _chart.on('mouseup', function (e) { return _this._ngZone.run(function () { return _this.chartMouseUp.emit(e); }); });
            _chart.on('mouseover', function (e) { return _this._ngZone.run(function () { return _this.chartMouseOver.emit(e); }); });
            _chart.on('mouseout', function (e) { return _this._ngZone.run(function () { return _this.chartMouseOut.emit(e); }); });
            _chart.on('globalout', function (e) { return _this._ngZone.run(function () { return _this.chartGlobalOut.emit(e); }); });
            _chart.on('contextmenu', function (e) { return _this._ngZone.run(function () { return _this.chartContextMenu.emit(e); }); });
            // other events;
            _chart.on('datazoom', function (e) { return _this._ngZone.run(function () { return _this.chartDataZoom.emit(e); }); });
        }
    };
    /**
     * @return {?}
     */
    NgxEchartsDirective.prototype.clear = function () {
        if (this._chart) {
            this._chart.clear();
        }
    };
    /**
     * @param {?} loading
     * @return {?}
     */
    NgxEchartsDirective.prototype.toggleLoading = function (loading) {
        if (this._chart) {
            loading ? this._chart.showLoading(this.loadingType, this.loadingOpts) : this._chart.hideLoading();
        }
    };
    /**
     * @param {?} option
     * @param {?=} opts
     * @return {?}
     */
    NgxEchartsDirective.prototype.setOption = function (option, opts) {
        if (this._chart) {
            this._chart.setOption(option, opts);
        }
    };
    return NgxEchartsDirective;
}());
NgxEchartsDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'echarts, [echarts]'
            },] },
];
/**
 * @nocollapse
 */
NgxEchartsDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
NgxEchartsDirective.propDecorators = {
    'options': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'theme': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'loading': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'initOpts': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'merge': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'autoResize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'loadingType': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'loadingOpts': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'chartInit': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'chartClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'chartDblClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'chartMouseDown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'chartMouseUp': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'chartMouseOver': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'chartMouseOut': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'chartGlobalOut': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'chartContextMenu': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'chartDataZoom': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'onWindowResize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['window:resize', ['$event'],] },],
};
/**
 * Provide an wrapper for global echarts
 * ```typescript
 * export class AppComponent implements onInit {
 *   constructor(private nes: NgxEchartsService) {}
 *
 *   ngOnInit() {
 *     // const points = ...;
 *     // const rect = ...;
 *
 *     // Get native global echarts object, then call native function
 *     const echarts = this.nes.echarts;
 *     const points = echarts.graphic.clipPointsByRect(points, rect);
 *
 *     // Or call wrapper function directly:
 *     const points = this.nes.graphic.clipPointsByRect(points, rect);
 *   }
 * }
 * ```
 */
var NgxEchartsService = (function () {
    function NgxEchartsService() {
    }
    Object.defineProperty(NgxEchartsService.prototype, "echarts", {
        /**
         * Get global echarts object
         * @return {?}
         */
        get: function () {
            return echarts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxEchartsService.prototype, "graphic", {
        /**
         * Wrapper for echarts.graphic
         * @return {?}
         */
        get: function () {
            return this._checkEcharts() ? echarts.graphic : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxEchartsService.prototype, "init", {
        /**
         * Wrapper for echarts.init
         * @return {?}
         */
        get: function () {
            return this._checkEcharts() ? echarts.init : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxEchartsService.prototype, "connect", {
        /**
         * Wrapper for echarts.connect
         * @return {?}
         */
        get: function () {
            return this._checkEcharts() ? echarts.connect : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxEchartsService.prototype, "disconnect", {
        /**
         * Wrapper for echarts.disconnect
         * @return {?}
         */
        get: function () {
            return this._checkEcharts() ? echarts.disconnect : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxEchartsService.prototype, "dispose", {
        /**
         * Wrapper for echarts.dispose
         * @return {?}
         */
        get: function () {
            return this._checkEcharts() ? echarts.dispose : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxEchartsService.prototype, "getInstanceByDom", {
        /**
         * Wrapper for echarts.getInstanceByDom
         * @return {?}
         */
        get: function () {
            return this._checkEcharts() ? echarts.getInstanceByDom : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxEchartsService.prototype, "registerMap", {
        /**
         * Wrapper for echarts.registerMap
         * @return {?}
         */
        get: function () {
            return this._checkEcharts() ? echarts.registerMap : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxEchartsService.prototype, "getMap", {
        /**
         * Wrapper for echarts.getMap
         * @return {?}
         */
        get: function () {
            return this._checkEcharts() ? echarts.getMap : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxEchartsService.prototype, "registerTheme", {
        /**
         * Wrapper for echarts.registerTheme
         * @return {?}
         */
        get: function () {
            return this._checkEcharts() ? echarts.registerTheme : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxEchartsService.prototype._checkEcharts = function () {
        if (echarts) {
            return true;
        }
        else {
            console.error('[ngx-echarts] global ECharts not loaded');
            return false;
        }
    };
    return NgxEchartsService;
}());
NgxEchartsService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
NgxEchartsService.ctorParameters = function () { return []; };
var NgxEchartsModule = (function () {
    function NgxEchartsModule() {
    }
    return NgxEchartsModule;
}());
NgxEchartsModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [
                    NgxEchartsDirective
                ],
                exports: [
                    NgxEchartsDirective
                ],
                providers: [
                    NgxEchartsService
                ]
            },] },
];
/**
 * @nocollapse
 */
NgxEchartsModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-echarts.es5.js.map


/***/ }),

/***/ "../../../../ngx-modal/Modal.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ModalHeader = (function () {
    function ModalHeader() {
    }
    return ModalHeader;
}());
ModalHeader = __decorate([
    core_1.Component({
        selector: "modal-header",
        template: "<ng-content></ng-content>"
    })
], ModalHeader);
exports.ModalHeader = ModalHeader;
var ModalContent = (function () {
    function ModalContent() {
    }
    return ModalContent;
}());
ModalContent = __decorate([
    core_1.Component({
        selector: "modal-content",
        template: "<ng-content></ng-content>"
    })
], ModalContent);
exports.ModalContent = ModalContent;
var ModalFooter = (function () {
    function ModalFooter() {
    }
    return ModalFooter;
}());
ModalFooter = __decorate([
    core_1.Component({
        selector: "modal-footer",
        template: "<ng-content></ng-content>"
    })
], ModalFooter);
exports.ModalFooter = ModalFooter;
var Modal = (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function Modal() {
        this.closeOnEscape = true;
        this.closeOnOutsideClick = true;
        this.hideCloseButton = false;
        // -------------------------------------------------------------------------
        // Outputs
        // -------------------------------------------------------------------------
        this.onOpen = new core_1.EventEmitter(false);
        this.onClose = new core_1.EventEmitter(false);
        this.onSubmit = new core_1.EventEmitter(false);
        // -------------------------------------------------------------------------
        // Public properties
        // -------------------------------------------------------------------------
        this.isOpened = false;
        this.createBackDrop();
    }
    // -------------------------------------------------------------------------
    // Lifecycle Methods
    // -------------------------------------------------------------------------
    Modal.prototype.ngOnDestroy = function () {
        document.body.className = document.body.className.replace(/modal-open\b/, "");
        if (this.backdropElement && this.backdropElement.parentNode === document.body)
            document.body.removeChild(this.backdropElement);
    };
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    Modal.prototype.open = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.isOpened)
            return;
        this.isOpened = true;
        this.onOpen.emit(args);
        document.body.appendChild(this.backdropElement);
        window.setTimeout(function () { return _this.modalRoot.nativeElement.focus(); }, 0);
        document.body.className += " modal-open";
    };
    Modal.prototype.close = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.isOpened)
            return;
        this.isOpened = false;
        this.onClose.emit(args);
        document.body.removeChild(this.backdropElement);
        document.body.className = document.body.className.replace(/modal-open\b/, "");
    };
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    Modal.prototype.preventClosing = function (event) {
        event.stopPropagation();
    };
    Modal.prototype.createBackDrop = function () {
        this.backdropElement = document.createElement("div");
        this.backdropElement.classList.add("modal-backdrop");
        this.backdropElement.classList.add("fade");
        this.backdropElement.classList.add("in");
    };
    return Modal;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Modal.prototype, "modalClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], Modal.prototype, "closeOnEscape", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], Modal.prototype, "closeOnOutsideClick", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Modal.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Modal.prototype, "hideCloseButton", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Modal.prototype, "cancelButtonLabel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Modal.prototype, "submitButtonLabel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Modal.prototype, "onOpen", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Modal.prototype, "onClose", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Modal.prototype, "onSubmit", void 0);
__decorate([
    core_1.ViewChild("modalRoot"),
    __metadata("design:type", core_1.ElementRef)
], Modal.prototype, "modalRoot", void 0);
Modal = __decorate([
    core_1.Component({
        selector: "modal",
        template: "\n<div class=\"modal\" \n     tabindex=\"-1\"\n     role=\"dialog\"\n     #modalRoot\n     (keydown.esc)=\"closeOnEscape ? close() : 0\"\n     [ngClass]=\"{ in: isOpened, fade: isOpened }\"\n     [ngStyle]=\"{ display: isOpened ? 'block' : 'none' }\"\n     (click)=\"closeOnOutsideClick ? close() : 0\">\n    <div [class]=\"'modal-dialog ' + modalClass\" (click)=\"preventClosing($event)\">\n        <div class=\"modal-content\" tabindex=\"0\" *ngIf=\"isOpened\">\n            <div class=\"modal-header\">\n                <button *ngIf=\"!hideCloseButton\" type=\"button\" class=\"close\" data-dismiss=\"modal\" [attr.aria-label]=\"cancelButtonLabel || 'Close'\" (click)=\"close()\"><span aria-hidden=\"true\">&times;</span></button>\n                <h4 class=\"modal-title\" *ngIf=\"title\">{{ title }}</h4>\n                <ng-content select=\"modal-header\"></ng-content>\n            </div>\n            <div class=\"modal-body\">\n                <ng-content select=\"modal-content\"></ng-content>\n            </div>\n            <div class=\"modal-footer\">\n                <ng-content select=\"modal-footer\"></ng-content>\n                <button *ngIf=\"cancelButtonLabel\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"close()\">{{ cancelButtonLabel }}</button>\n                <button *ngIf=\"submitButtonLabel\" type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit.emit(undefined)\">{{ submitButtonLabel }}</button>\n            </div>\n        </div>\n    </div>\n</div>\n"
    }),
    __metadata("design:paramtypes", [])
], Modal);
exports.Modal = Modal;
//# sourceMappingURL=Modal.js.map

/***/ }),

/***/ "../../../../ngx-modal/RouteModal.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var RouteModal = (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function RouteModal(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.closeOnEscape = true;
        this.closeOnOutsideClick = true;
        this.hideCloseButton = false;
        // -------------------------------------------------------------------------
        // Outputs
        // -------------------------------------------------------------------------
        this.onOpen = new core_1.EventEmitter(false);
        this.onClose = new core_1.EventEmitter(false);
        this.onSubmit = new core_1.EventEmitter(false);
        this.isOpened = false;
        this.createBackDrop();
    }
    // -------------------------------------------------------------------------
    // Lifecycle Methods
    // -------------------------------------------------------------------------
    RouteModal.prototype.ngOnInit = function () {
        this.open();
    };
    RouteModal.prototype.ngOnDestroy = function () {
        document.body.className = document.body.className.replace(/modal-open\b/, "");
        if (this.backdropElement && this.backdropElement.parentNode === document.body)
            document.body.removeChild(this.backdropElement);
    };
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    RouteModal.prototype.open = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.isOpened)
            return;
        this.isOpened = true;
        this.onOpen.emit(args);
        document.body.appendChild(this.backdropElement);
        window.setTimeout(function () { return _this.modalRoot.nativeElement.focus(); }, 0);
        document.body.className += " modal-open";
    };
    RouteModal.prototype.close = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.isOpened)
            return;
        this.isOpened = false;
        this.onClose.emit(args);
        document.body.className = document.body.className.replace(/modal-open\b/, "");
        if (this.cancelUrl) {
            var navigationExtras = {};
            if (this.cancelUrlExtras) {
                if (this.cancelUrlExtras.relative) {
                    navigationExtras.relativeTo = this.activatedRoute;
                }
                navigationExtras = Object.assign(navigationExtras, this.cancelUrlExtras);
            }
            this.router.navigate(this.cancelUrl, navigationExtras);
        }
        else {
            window.history.back();
        }
    };
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    RouteModal.prototype.preventClosing = function (event) {
        event.stopPropagation();
    };
    RouteModal.prototype.createBackDrop = function () {
        this.backdropElement = document.createElement("div");
        this.backdropElement.classList.add("modal-backdrop");
        this.backdropElement.classList.add("fade");
        this.backdropElement.classList.add("in");
    };
    return RouteModal;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], RouteModal.prototype, "cancelUrl", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RouteModal.prototype, "cancelUrlExtras", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RouteModal.prototype, "modalClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], RouteModal.prototype, "closeOnEscape", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], RouteModal.prototype, "closeOnOutsideClick", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RouteModal.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RouteModal.prototype, "hideCloseButton", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RouteModal.prototype, "cancelButtonLabel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RouteModal.prototype, "submitButtonLabel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RouteModal.prototype, "onOpen", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RouteModal.prototype, "onClose", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RouteModal.prototype, "onSubmit", void 0);
__decorate([
    core_1.ViewChild("modalRoot"),
    __metadata("design:type", core_1.ElementRef)
], RouteModal.prototype, "modalRoot", void 0);
RouteModal = __decorate([
    core_1.Component({
        selector: "route-modal",
        template: "\n<div class=\"modal route-modal\" \n     tabindex=\"-1\"\n     role=\"dialog\"\n     #modalRoot\n     (keydown.esc)=\"closeOnEscape ? close() : 0\"\n     [ngClass]=\"{ in: isOpened, fade: isOpened }\"\n     [ngStyle]=\"{ display: isOpened ? 'block' : 'none' }\"\n     (click)=\"closeOnOutsideClick ? close() : 0\">\n    <div [class]=\"'modal-dialog ' + modalClass\" (click)=\"preventClosing($event)\">\n        <div class=\"modal-content\" tabindex=\"0\" *ngIf=\"isOpened\">\n            <div class=\"modal-header\">\n                <button *ngIf=\"!hideCloseButton\" type=\"button\" class=\"close\" data-dismiss=\"modal\" [attr.aria-label]=\"cancelButtonLabel || 'Close'\" (click)=\"close()\"><span aria-hidden=\"true\">&times;</span></button>\n                <h4 class=\"modal-title\" *ngIf=\"title\">{{ title }}</h4>\n                <ng-content select=\"modal-header\"></ng-content>\n            </div>\n            <div class=\"modal-body\">\n                <ng-content select=\"modal-content\"></ng-content>\n            </div>\n            <div class=\"modal-footer\">\n                <ng-content select=\"modal-footer\"></ng-content>\n                <button *ngIf=\"cancelButtonLabel\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"close()\">{{ cancelButtonLabel }}</button>\n                <button *ngIf=\"submitButtonLabel\" type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit.emit(undefined)\">{{ submitButtonLabel }}</button>\n            </div>\n        </div>\n    </div>\n</div>\n"
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute])
], RouteModal);
exports.RouteModal = RouteModal;
//# sourceMappingURL=RouteModal.js.map

/***/ }),

/***/ "../../../../ngx-modal/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var Modal_1 = __webpack_require__("../../../../ngx-modal/Modal.js");
var RouteModal_1 = __webpack_require__("../../../../ngx-modal/RouteModal.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
__export(__webpack_require__("../../../../ngx-modal/Modal.js"));
__export(__webpack_require__("../../../../ngx-modal/RouteModal.js"));
var ModalModule = (function () {
    function ModalModule() {
    }
    return ModalModule;
}());
ModalModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [
            Modal_1.Modal,
            RouteModal_1.RouteModal,
            Modal_1.ModalHeader,
            Modal_1.ModalContent,
            Modal_1.ModalFooter,
        ],
        exports: [
            Modal_1.Modal,
            RouteModal_1.RouteModal,
            Modal_1.ModalHeader,
            Modal_1.ModalContent,
            Modal_1.ModalFooter,
        ],
    })
], ModalModule);
exports.ModalModule = ModalModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/empty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var empty_1 = __webpack_require__("../../../../rxjs/observable/empty.js");
Observable_1.Observable.empty = empty_1.empty;
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/of.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var of_1 = __webpack_require__("../../../../rxjs/observable/of.js");
Observable_1.Observable.of = of_1.of;
//# sourceMappingURL=of.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/debounceTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var debounceTime_1 = __webpack_require__("../../../../rxjs/operator/debounceTime.js");
Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ "../../../../rxjs/observable/empty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var EmptyObservable_1 = __webpack_require__("../../../../rxjs/observable/EmptyObservable.js");
exports.empty = EmptyObservable_1.EmptyObservable.create;
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ "../../../../rxjs/operator/debounceTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
var debounceTime_1 = __webpack_require__("../../../../rxjs/operators/debounceTime.js");
/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return debounceTime_1.debounceTime(dueTime, scheduler)(this);
}
exports.debounceTime = debounceTime;
//# sourceMappingURL=debounceTime.js.map

/***/ })

});
//# sourceMappingURL=common.chunk.js.map