webpackJsonp(["transactions.module"],{

/***/ "../../../../../src/app/pages/transactions/camp-requirements/camp-requirements.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"\">\n   <form [formGroup]=\"form\">\n   <div class=\"row\">\n   <div class=\"col-md-12\">\n   \n      <card cardTitle=\"Confirmation Of Arrangements For Health Camp By NetWork Hospital\" >\n <div class=\"row\">\n  <div class=\"col-md-7\">\n    \n      <div class=\"form-group\">\n        <div class=\"row rowSpace\">\n          <div class=\"col-md-3\">\n        <label class=\"control-lable\">NetWork Hospital</label>\n      </div>\n      <div class=\"col-md-5\">\n        <input type=\"text\" formControlName=\"TRANNO\" class=\"form-control\" />\n        <!-- <input type=\"text\" formControlName=\"Hosp_Name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.Hosp_Name.errors }\" />\n        <div *ngIf=\"submitted && f.Hosp_Name.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.Hosp_Name.errors.required\">Hospital Name is required</div>\n        </div> -->\n      </div>\n      </div>\n      <div class=\"row rowSpace\">\n          <div class=\"col-md-3\">\n        <label class=\"control-lable\">Venue</label>\n      </div>\n      <div class=\"col-md-5\">\n        <input type=\"text\" [readonly]=\"true\" formControlName=\"Venue\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.Venue.errors }\" />\n        <div *ngIf=\"submitted && f.Venue.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.Venue.errors.required\">Venue is required</div>\n        </div>\n      </div>\n      </div>\n      <div class=\"row rowSpace\">\n          <div class=\"col-md-3\">\n        <label class=\"control-lable\">Taluka/Zone</label>\n      </div>\n      <div class=\"col-md-5\">\n        <input type=\"text\" [readonly]=\"true\" formControlName=\"Taluka\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.Taluka.errors }\" />\n        <div *ngIf=\"submitted && f.Taluka.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.Taluka.errors.required\">Taluka is required</div>\n        </div>\n      </div>\n      </div>\n      <div class=\"row rowSpace\">\n        <div class=\"col-md-3\">\n          <label class=\"control-lable\">District</label>\n        </div>\n        <div class='col-md-5'>\n          <input type=\"text\" formControlName=\"District\" [readonly]=\"true\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.Venue.errors }\" />\n        <div *ngIf=\"submitted && f.District.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.District.errors.required\">District is required</div>\n        </div>\n        </div>\n        <!-- <div class=\"col-md-5\">\n          <ng-select [allowClear]=\"true\" [items]=\"items\" (data)=\"refreshValue($event)\" (selected)=\"selected($event)\"\n          (removed)=\"removed($event)\" (typed)=\"typed($event)\" placeholder=\"District Not Selected\">\n        </ng-select> \n      </div>-->\n      </div>\n      \n      </div>\n       \n  </div>\n<div class=\"col-md-5\">\n    <div class=\"form-group\">\n        <div class=\"row rowSpace\" [hidden]=\"true\">\n          <div class=\"col-md-5\">\n        <label class=\"control-lable\">Place Of Health Camp</label>\n      </div>\n      <div class=\"col-md-7\">\n        <input type=\"text\" formControlName=\"Camp_Place\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.Camp_Place.errors }\" />\n        <div *ngIf=\"submitted && f.Camp_Place.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.Camp_Place.errors.required\">Place of Camp is required</div>\n        </div>\n      </div>\n      </div>     \n      <div class=\"row rowSpace\">\n          <div class=\"col-md-5\">\n        <label class=\"control-lable\">Date Of Camp</label>\n      </div>\n      <div class=\"col-md-7\">\n        <input type=\"text\" formControlName=\"Camp_Date\" [readonly]=\"true\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.Camp_Date.errors }\" />\n        <div *ngIf=\"submitted && f.Camp_Date.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.Camp_Date.errors.required\">Date of Camp is required</div>\n        </div>\n      </div>\n      </div>\n      <div class=\"row rowSpace\">\n          <div class=\"col-md-5\">\n        <label class=\"control-lable\">MCCO</label>\n      </div>\n      <div class=\"col-md-7\">\n        <input type=\"text\" formControlName=\"MCCO\" [readonly]=\"true\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.MCCO.errors }\" />\n        <div *ngIf=\"submitted && f.MCCO.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.MCCO.errors.required\">MCCO is required</div>\n        </div>\n      </div>\n      </div>\n      <div class=\"row rowSpace\">\n          <div class=\"col-md-5\">\n        <label class=\"control-lable\">Mobile Number</label>\n      </div>\n      <div class=\"col-md-7\">\n        <input type=\"text\" formControlName=\"Mobile_No\" [readonly]=\"true\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.Mobile_No.errors }\" (keypress)=\"numberOnly($event)\" maxlength=\"10\"/>\n        <div *ngIf=\"submitted && f.Mobile_No.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.Mobile_No.errors.required\">Mobile No is required</div>\n        </div>\n      </div>\n      </div>\n      </div>\n</div>\n </div>\n \n </card>\n   </div>\n   </div>\n\n <div class=\"row\">\n<div class=\"col-md-12\">\n  <card cardTitle=\"Details Of Tabs\">\n    <tabset id=\"tab1\">\n      <tab-content for=\"tab1\" tabTitle=\"Doctor/Specialist\" [active]=\"true\">\n       <!-- <table class=\"table table-bordered table-hover\">\n         <tr>\n           <th style=\"width: 5%;\">Sl No</th>\n           <th style=\"width: 65%;\">Name Of the Specialist</th>\n           <th style=\"width: 30%;\">Speciality</th>\n         </tr>\n         <tr>\n           <td><input type=\"text\" style=\"width:90%;\"/></td>\n           <td><input type=\"text\" style=\"width:99%;\"/></td>\n           <td><input type=\"text\" style=\"width:99%;\"/></td>\n         </tr>        \n       </table> -->\n       \n\n       <table class=\"table table-bordered table-striped table-hover\" formArrayName=\"doctors\">\n        <tr>\n          <th style=\"width: 10%;\">Code</th>\n           <th style=\"width: 60%;\">Name Of the Specialist</th>\n           <th style=\"width: 30%;\">Speciality</th>\n        </tr>\n        <tr *ngFor=\"let item of DoctorsCtrl.controls; let row_Index=index\" [formGroupName]=\"row_Index\">\n          <td><input  formControlName=\"Code\" type=\"text\" style=\"width:90%;\" maxlength=\"6\" (change)=\"openModal(item.controls.Code.value, doctorModal, row_Index, 'doctors')\" /></td>         \n          <td><input  formControlName=\"Name\" disabled type=\"text\" style=\"width:99%;\"/></td>\n          <td><input  formControlName=\"Speciality\" disabled type=\"text\" style=\"width:99%;\"/></td>\n          <td><i  class=\"fa fa-trash fa-fw i-Del\" (click)=\"delete_doctorrow(row_Index)\" data-toggle=\"tooltip\" title=\"Delete\"></i></td>         \n          \n        </tr>\n        </table>                \n     \n      <button  class=\"fa fa-plus fa-fw btn-info\" (click)=\"add_doctorRow()\"></button>    \n      \n      </tab-content>\n      <tab-content for=\"tab1\" tabTitle=\"Paramedical/Other_Staff\">\n       \n          <table class=\"table table-bordered table-striped table-hover\" formArrayName=\"paramed\">\n            <tr>\n              <th style=\"width: 10%;\">Code</th>\n              <th style=\"width:90%;\">Paramedical_Staff/Other_Staff</th>\n            </tr>\n            <!-- (keypress)=\"numberOnly($event)\"  -->\n            <tr *ngFor=\"let item of ParamedCtrl.controls; let row_Index=index\" [formGroupName]=\"row_Index\">\n              <td><input  formControlName=\"Code\" type=\"text\" style=\"width:90%;\" maxlength=\"3\" (change)=\"openModal(item.controls.Code.value, paraModal, row_Index, 'paramed')\"/></td>\n              <td><input  formControlName=\"Name\" disabled type=\"text\" style=\"width:100%;\"/></td>\n              <td><i class=\"fa fa-trash fa-fw i-Del\" (click)=\"delete_paramedrow(row_Index)\" data-toggle=\"tooltip\" title=\"Delete\"></i></td>              \n            </tr>\n            </table>                \n         \n          <button class=\"fa fa-plus fa-fw btn-info\" (click)=\"add_paramedrow()\"></button>    \n          \n      </tab-content>\n      <tab-content for=\"tab1\" tabTitle=\"Diagnostic\">\n             <table class=\"table table-bordered table-striped table-hover\" formArrayName=\"diagnosis\">\n              <tr>\n                <th style=\"width: 10%;\">Code</th>\n                <th style=\"width: 90%;\">Name Of the Diagostic Equipment</th> \n              </tr>\n              <tr *ngFor=\"let item of DiagCtrl.controls; let row_Index=index\" [formGroupName]=\"row_Index\">\n                <td><input  formControlName=\"Code\" type=\"text\" style=\"width:90%;\" maxlength=\"3\" (change)=\"openModal(item.controls.Code.value, diagModal, row_Index, 'diagnosis')\" /></td>\n                <td><input  formControlName=\"Name\" disabled type=\"text\" style=\"width:100%;\"/></td>\n               <td><i  class=\"fa fa-trash fa-fw i-Del\" (click)=\"delete_diagnosisrow(row_Index)\" data-toggle=\"tooltip\" title=\"Delete\"></i></td>                   \n              </tr>\n              </table>                \n           \n            <button class=\"fa fa-plus fa-fw btn-info\" (click)=\"add_diagrow()\"></button>    \n            \n      </tab-content>\n      <tab-content for=\"tab1\" tabTitle=\"Vehicle\">         \n            <table class=\"table table-bordered table-striped table-hover\" formArrayName=\"vehicle\">\n              <tr>\n                <th style=\"width: 10%;\">Code</th>\n                <th style=\"width: 60%;\">Name</th>\n                <th style=\"width: 30%;\">Registration Number</th>\n              </tr>\n              <tr *ngFor=\"let item of VehicleCtrl.controls; let row_Index=index\" [formGroupName]=\"row_Index\">\n                <td><input  formControlName=\"Code\" type=\"text\" style=\"width:90%;\" maxlength=\"3\" (change)=\"openModal(item.controls.Code.value, vehicleModal, row_Index, 'vehicle')\" /></td>\n                <td><input  formControlName=\"Name\" disabled type=\"text\" style=\"width:100%;\"/></td>\n                <td><input  formControlName=\"Regd_No\" disabled type=\"text\" style=\"width:100%;\"/></td>  \n          <td><i  class=\"fa fa-trash fa-fw i-Del\" (click)=\"delete_vehiclerow(row_Index)\" data-toggle=\"tooltip\" title=\"Delete\"></i></td>                      \n              </tr>\n              </table>                \n           \n            <button class=\"fa fa-plus fa-fw btn-info\"  (click)=\"add_vehiclerow()\"></button>    \n            \n        </tab-content>\n\n        <tab-content for=\"tab1\" tabTitle=\"Carried Drugs\" >         \n          <div class=\"table-responsive\">\n            <table class=\"table table-bordered table-striped table-hover\" formArrayName=\"drugs\">\n            <tr>\n              <th style=\"width: 15%;\">Code</th>\n              <th style=\"width: 30%;\">Category</th>\n              <th style=\"width: 30%;\">Name Of Drug</th>\n              <th style=\"width: 5%;\">Qty</th>\n              <th style=\"width: 10%;\">Etimated Amount</th>\n              <th style=\"width: 10%;\" >Add</th>\n              <th style=\"width: 10%;\">Remarks</th>\n            </tr>\n            <tr *ngFor=\"let item of DrugCtrl.controls; let row_Index=index\" [formGroupName]=\"row_Index\">\n              <td><input formControlName=\"Item_ID\" type=\"text\" maxlength=\"8\" \n                (change)=\"openModal(item.controls.Item_ID.value, drugModal, row_Index, 'drugs')\" /></td>\n              <td><input formControlName=\"Category_Name\" disabled type=\"text\" style=\"width:90%;\"/>\n                <input type=\"text\" formControlName=\"GENERICNAME\" [hidden]=\"true\" />\n              </td>\n              <td><input formControlName=\"ItemName\" disabled type=\"text\" style=\"width:90%;\"/></td>\n              <td><input formControlName=\"Drug_Qty\" type=\"text\" style=\"width:95%; text-align: right;\" (keypress)=\"numberOnly($event)\"/></td>\n              <td><input formControlName=\"Drug_Estd_Amt\" type=\"text\" style=\"width:90%; text-align: right;\" (keypress)=\"numberOnly($event)\"/></td>\n              <td><input formControlName=\"Drug_Add\" type=\"text\" style=\"width:90%;\"/></td>\n              <td><input formControlName=\"Drug_Rem\" type=\"text\" style=\"width:90%;\"/></td> \n              <td><i class=\"fa fa-trash fa-fw i-Del\" (click)=\"delete_drugrow(row_Index)\" data-toggle=\"tooltip\" title=\"Delete\"></i></td>\n              \n            </tr>\n            </table>                \n          </div>\n          <button class=\"fa fa-plus fa-fw btn-info\" (click)=\"add_drugsrow()\"></button>    \n          \n   \n         </tab-content>\n\n         <tab-content for=\"tab1\" tabTitle=\"Incentives\" >         \n\n          <table class=\"table table-bordered table-striped table-hover\" formArrayName=\"incentives\">\n            <tr>\n              <th style=\"width: 10%;\">Code</th>\n              <th style=\"width: 40%;\">Name Of the Doctor</th>\n              <th style=\"width: 30%;\">Phone Number</th>\n              <th style=\"width: 20%;\">Amount</th>\n            </tr>\n            <tr *ngFor=\"let item of IncentiveCtrl.controls; let row_Index=index\" [formGroupName]=\"row_Index\">\n              <td><input  formControlName=\"Code\" type=\"text\" style=\"width:80%;\"  maxlength=\"3\"/></td>\n              <td><input  formControlName=\"Name\" type=\"text\" style=\"width:90%;\"/></td>\n              <td><input  formControlName=\"Doctor_PhNo\" type=\"text\" style=\"width:80%;\" (keypress)=\"numberOnly($event)\" maxlength=\"10\"/></td>  \n              <td><input  formControlName=\"Doctor_Amt\" type=\"text\"  style=\"width:80%; text-align: right;\" (keypress)=\"numberOnly($event)\"/></td>  \n              <td><i class=\"fa fa-trash fa-fw i-Del\" (click)=\"delete_incentivesrow(row_Index)\" data-toggle=\"tooltip\" title=\"Delete\"></i></td>              \n            </tr>\n            </table>                \n         \n          <button class=\"fa fa-plus fa-fw btn-info\" (click)=\"add_incentivesrow()\"></button>  \n          \n   \n         </tab-content>\n         <tab-content for=\"tab1\" tabTitle=\"IEC Activities\">\n          <div class=\"table-responsive\">\n            <table class=\"table table-bordered table-striped table-hover\"  formArrayName=\"activities\">\n              <thead>\n                <tr>\n                  <th>Code</th>\n                  <th>Brief Details Of Advertisements/Awareness/Publicity For The Health Camp</th>\n                  <th>Praposed Activity</th>\n                  <th>Amount Estimated</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of IEC_Activities.controls; let row_Index=index\" [formGroupName]=\"row_Index\">\n                  <td><input type=\"text\" formControlName=\"Code\" class='noBorderTextbox'  style=\"width:90%;\" disabled /></td>\n                  <td><input type=\"text\" formControlName=\"Name\" class='noBorderTextbox'  style=\"width:100%;\" disabled /></td>\n                  <td><input type=\"checkbox\" formControlName=\"chkProActvitiy\" style=\"width: 50%;\"/></td>\n                <td><input type=\"text\" style=\"width: 80%; text-align: right;\" formControlName=\"AmountEstimated\" (keypress)=\"numberOnly($event)\"/></td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n            \n              <card [hidden]=\"true\">\n                <label class=\"control-label\">Details of Exhibits if any</label>\n                <textarea  formControlName=\"Exhibits\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.Exhibits.errors }\" ></textarea>                             \n              <card cardTitle=\"Campaign Dates in Villiges\">\n                <div class=\"row\">\n              <div class=\"form-group\">\n               <div class=\"col-md-6\"> \n                 <div class=\"row rowSpace\">\n                 <div class=\"col-md-4\">\n                      <label class=\"control-lable\">From Date</label>\n                      </div>\n                      <div class=\"col-md-8\">\n                      <input type=\"date\" formControlName=\"From_Date\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.From_Date.errors }\" />\n                      <div *ngIf=\"submitted && f.From_Date.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.From_Date.errors.required\">From Date is required</div>\n                      </div> \n                    </div>\n                  </div>\n                  <div class=\"row rowSpace\">\n                    <div class=\"col-md-4\">\n                      <label class=\"control-lable\">Villages to Be Covered</label>\n                    </div>\n                    <div class=\"col-md-8\">\n          <ng-select [multiple]=\"true\" [items]=\"items\"  (data)=\"refreshValue($event)\" (selected)=\"selected($event)\"\n          (removed)=\"removed($event)\" (typed)=\"typed($event)\" placeholder=\"Villages Not Selected\">\n        </ng-select>\n       </div>\n       </div>\n\n                  </div>\n                  <div class=\"col-md-6\"> \n                    <div class=\"row rowSpace\">\n                      <div class=\"col-md-4\">\n                           <label class=\"control-lable\">To Date</label>\n                           </div>\n                           <div class=\"col-md-8\">\n                           <input type=\"date\" formControlName=\"To_Date\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.To_Date.errors }\" />\n                           <div *ngIf=\"submitted && f.To_Date.errors\" class=\"invalid-feedback\">\n                               <div *ngIf=\"f.To_Date.errors.required\">To Date is required</div>\n                           </div> \n                         </div>\n                        </div>\n                        <div class=\"row rowSpace\">\n                         <div class=\"col-md-4\">\n                           <label class=\"control-lable\">Other Villages</label>\n                         </div>\n                         <div class=\"col-md-8\">\n               <ng-select [multiple]=\"true\" [items]=\"items\" (data)=\"refreshValue($event)\" (selected)=\"selected($event)\"\n               (removed)=\"removed($event)\" (typed)=\"typed($event)\" placeholder=\"Villages Not Selected\">\n             </ng-select>\n            </div>\n            </div>\n                       </div>\n               </div>\n               </div>\n              </card>\n              </card>\n              \n         </tab-content>\n         <tab-content for=\"tab1\" tabTitle=\"Facilities\">\n          <div class=\"table-responsive\">  \n            <table class=\"table table-bordered table-striped table-hover\"  formArrayName=\"facilities\">\n              <thead>\n                <tr>\n                  <th style=\"width: 10%;\">Code</th>\n                  <th style=\"width:60%;\">Details Of Facilities For Health Camp</th>\n                  <th style=\"width: 10%;\">Yes/No</th>\n                  <th style=\"width: 20%;\">Amount Estimated</th>\n                </tr>\n              </thead>\n              <tbody>  \n                <tr *ngFor=\"let item of Facilities.controls; let row_Index=index\" [formGroupName]=\"row_Index\">\n                    <td><input type=\"text\" formControlName=\"Code\" class='noBorderTextbox' disabled /></td>\n                    <td><input type=\"text\" formControlName=\"Name\" class='noBorderTextbox' style='width:100%' disabled /></td>\n                  <td><input type=\"checkbox\" formControlName=\"chkYesNo\" style=\"width: 50%;\"/></td>\n                  <td><input type=\"text\" formControlName='AmountEstimated' style=\"width: 80%; text-align: right;\" (keypress)=\"numberOnly($event)\"/></td>\n                </tr>\n              </tbody>\n              <!-- <tr>\n                  <td><input type=\"text\" style=\"width: 80%;\"/></td>\n                  <td><span style=\"width: 80%;\">Seating Arrangements for waiting Patients</span></td>\n                  <td><input type=\"checkbox\" style=\"width: 50%;\"/></td>\n                  <td><input type=\"text\" style=\"width: 80%; text-align: right;\" (keypress)=\"numberOnly($event)\"/></td>\n                </tr>\n                <tr>\n                    <td><input type=\"text\" style=\"width: 80%;\"/></td>\n                    <td><span style=\"width: 80%;\">Providing Pedestal fans(yes/no)</span></td>\n                    <td><input type=\"checkbox\" style=\"width: 50%;\"/></td>\n                    <td><input type=\"text\" style=\"width: 80%; text-align: right;\" (keypress)=\"numberOnly($event)\"/></td>\n                  </tr> -->\n            </table>\n          </div>\n            \n         </tab-content>\n\n         <div [hidden]='true'>\n         <tab-content for=\"tab1\" tabTitle=\"File Upload\" [hidden]=\"true\">\n          <div class=\"row\">\n            <!-- <h2 class=\"col-md-12\">Angular2 File Upload</h2> -->\n          \n            <div class=\"col-md-3\">\n              <h3>Select files</h3>\n              <!-- <div ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploader\"\n                class=\"well my-drop-zone\">\n                Base drop zone\n              </div>\n              <div ng2FileDrop [ngClass]=\"{'another-file-over-class': hasAnotherDropZoneOver}\" (fileOver)=\"fileOverAnother($event)\" [uploader]=\"uploader\"\n                class=\"well my-drop-zone\">\n                Another drop zone\n              </div> -->\n              Multiple\n              <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple />\n              <br/> Single\n              <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n            </div>\n          \n            <div class=\"col-md-9\">\n              <h3>Upload queue</h3>\n              <p>Queue length: {{ uploader?.queue?.length }}</p>\n              <table class=\"table\">\n                <thead>\n                  <tr>\n                    <th width=\"50%\">Name</th>\n                    <th>Status</th>\n                    <th>Actions</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let item of uploader.queue\">\n                    <td>\n                      <strong>{{ item?.file?.name }}</strong>\n                    </td>\n                    <td class=\"text-center\">\n                      <span *ngIf=\"item.isSuccess\">\n                        <i class=\"glyphicon glyphicon-ok\"></i>\n                      </span>\n                      <span *ngIf=\"item.isCancel\">\n                        <i class=\"glyphicon glyphicon-ban-circle\"></i>\n                      </span>\n                      <span *ngIf=\"item.isError\">\n                        <i class=\"glyphicon glyphicon-remove\"></i>\n                      </span>\n                    </td>\n                    <td>\n                      <button type=\"button\" class=\"btn btn-success btn-xs\" (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                        <span class=\"glyphicon glyphicon-upload\"></span> Upload\n                      </button>\n                      <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                        <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n                      </button>\n                      <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"item.remove()\">\n                        <span class=\"glyphicon glyphicon-trash\"></span> Remove\n                      </button>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <div>\n                <div>\n                  Queue progress:\n                  <progress-bar [percent]=\"uploader.progress\" theme=\"success\"></progress-bar>\n                </div>\n                <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                  <span class=\"glyphicon glyphicon-upload\"></span> Upload all\n                </button>\n                <button type=\"button\" class=\"btn btn-warning btn-s\" (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n                  <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\n                </button>\n                <button type=\"button\" class=\"btn btn-danger btn-s\" (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                  <span class=\"glyphicon glyphicon-trash\"></span> Remove all\n                </button>\n              </div>\n            </div>\n          </div>\n          \n         </tab-content>\n\n         <tab-content for=\"tab1\" tabTitle=\"Example\" [hidden]=\"true\">                \n            \n<!--                \n                <table class=\"table table-bordered\" formArrayName=\"selling_points\">\n                  <tr>\n                    <th style=\"width: 10%;\">Sl No</th>\n                    <th style=\"width: 10%;\">Yes/No</th>\n                    <th style=\"width: 20%;\">Amount Estimated</th>\n                  </tr>\n                  <tr *ngFor=\"let item of sellingPoints.controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n                    <td><input formControlName=\"point\" type=\"text\" style=\"width: 80%;\"/></td>\n                    <td><input formControlName=\"point\" type=\"checkbox\" style=\"width: 50%;\"/></td>\n                    <td><input formControlName=\"point\" type=\"text\" style=\"width: 80%; text-align: right;\"/></td>\n\n                    <button type=\"button\" (click)=\"deleteSellingPoint(pointIndex)\">Delete</button>\n                  </tr>\n                  </table>                \n               \n                <button type=\"button\" (click)=\"addSellingPoint()\">Add Selling Point</button>        -->\n          \n         </tab-content>\n        </div>\n\n    </tabset>    \n  </card>\n</div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n      <button class=\"btn btn-success\" (click)=\"insertRequirements()\">Save</button>\n      <button class=\"btn btn-warning\" (click)=\"clearForm()\">Clear</button>\n  </div>\n</div>\n\n</form>\n</div>\n\n<modal #doctorModal [closeOnEscape]=\"false\" [closeOnOutsideClick]=\"false\">\n  <modal-header>\n    <h3>Doctors Details</h3>\n  </modal-header>\n  <modal-content>\n      <div class=\"form-group\">\n          <div class=\"input-group\">\n            <div class=\"input-group-addon\">\n              <i class=\"glyphicon glyphicon-search\"></i>\n            </div>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              name=\"searchString\"\n              placeholder=\"Type to search...\"\n              [(ngModel)]=\"searchString\"\n            />\n          </div>\n        </div>\n    <table id='tbl_PopData' class=\"table table-bordered table-striped table-hover\">\n      <thead>\n        <tr>\n          <th>Code</th>\n          <th>Name</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let doctor of doctors | filter : 'Firstname' : searchString; let index = index\" \n        (dblclick)=\"fillDataToDoctosTable(doctor, 'doctors')\">\n          <td>{{doctor.Code}}</td>\n          <td>{{doctor.Firstname}}</td>\n        </tr>\n        <tr *ngIf='doctors?.length<=0'>\n            <td colspan='2'>\n              No Records Found\n            </td>\n          </tr>\n      </tbody>\n    </table>\n  </modal-content>\n  <modal-footer>\n    <button class=\"btn btn-primary\" (click)=\"closeModal(doctorModal)\">close</button>\n  </modal-footer>\n</modal>\n\n<modal #paraModal [closeOnEscape]=\"false\" [closeOnOutsideClick]=\"false\">\n  <modal-header>\n    <h3>Paramedical Staff Details</h3>\n  </modal-header>\n  <modal-content>\n    <table id='tbl_PopData' class=\"table table-bordered table-striped table-hover\">\n      <thead>\n        <tr>\n          <th>Code</th>\n          <th>Name</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let doctor of doctors | filter : 'Name' : searchString; let index = index\" \n          (dblclick)=\"fillDataToParaTable(doctor, 'paramed', $event)\">\n          <td>{{doctor.Code}}</td>\n          <td>{{doctor.Name}}</td>\n        </tr>\n        <tr *ngIf='doctors?.length<=0'>\n          <td colspan='2'>\n            No Records Found\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </modal-content>\n  <modal-footer>\n    <button class=\"btn btn-primary\" (click)=\"closeModal(paraModal)\">close</button>\n  </modal-footer>\n</modal>\n\n<modal #diagModal [closeOnEscape]=\"false\" [closeOnOutsideClick]=\"false\">\n    <modal-header>\n      <h3>Diagnostic Equipment Details</h3>\n    </modal-header>\n    <modal-content>\n      <table id='tbl_PopData' class=\"table table-bordered table-striped table-hover\">\n        <thead>\n          <tr>\n            <th>Code</th>\n            <th>Name</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let doctor of doctors | filter : 'EQUIP_NAME' : searchString; let index = index\" (dblclick)=\"fillDataToParaTable(doctor, 'diagnosis', $event)\">\n            <td>{{doctor.EQUIP_CODE}}</td>\n            <td>{{doctor.EQUIP_NAME}}</td>\n          </tr>\n          <tr *ngIf='doctors?.length<=0'>\n            <td colspan='2'>\n              No Records Found\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </modal-content>\n    <modal-footer>\n      <button class=\"btn btn-primary\" (click)=\"closeModal(diagModal)\">close</button>\n    </modal-footer>\n  </modal>\n\n  <modal #vehicleModal [closeOnEscape]=\"false\" [closeOnOutsideClick]=\"false\">\n      <modal-header>\n        <h3>Diagnostic Equipment Details</h3>\n      </modal-header>\n      <modal-content>\n        <table id='tbl_PopData' class=\"table table-bordered table-striped table-hover\">\n          <thead>\n            <tr>\n              <th>Code</th>\n              <th>Name</th>\n              <th>Regd. No</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let doctor of doctors | filter : 'VEHICLE_CODE' : searchString; let index = index\" (dblclick)=\"fillDataToParaTable(doctor, 'vehicle', $event)\">\n              <td>{{doctor.VEHICLE_CODE}}</td>\n              <td>{{doctor.DESCRIPTION}}</td>\n              <td>{{doctor.REGD_NO}}</td>\n            </tr>\n            <tr *ngIf='doctors?.length<=0'>\n              <td colspan='2'>\n                No Records Found\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </modal-content>\n      <modal-footer>\n        <button class=\"btn btn-primary\" (click)=\"closeModal(vehicleModal)\">close</button>\n      </modal-footer>\n    </modal>\n\n    <modal #drugModal [closeOnEscape]=\"false\" [closeOnOutsideClick]=\"false\">\n      <modal-header>\n        <h3>Diagnostic Equipment Details</h3>\n      </modal-header>\n      <modal-content>\n        <table id='tbl_PopData' class=\"table table-bordered table-striped table-hover\">\n          <thead>\n            <tr>\n              <th>Code</th>\n              <th>Name</th>\n              <th>Generic Name</th>\n              <th>Cateogory</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let doctor of doctors | filter : 'ItemName' : searchString; let index = index\" (dblclick)=\"fillDataToParaTable(doctor, 'drugs', $event)\">\n              <td>{{doctor.Item_ID}}</td>\n              <td>{{doctor.ItemName}}</td>\n              <td>{{doctor.GENERICNAME}}</td>\n              <td>{{doctor.Category_Name}}</td>\n            </tr>\n            <tr *ngIf='doctors?.length<=0'>\n              <td colspan='3'>\n                No Records Found\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </modal-content>\n      <modal-footer>\n        <button class=\"btn btn-primary\" (click)=\"closeModal(vehicleModal)\">close</button>\n      </modal-footer>\n    </modal>\n\n    <button class=\"btn btn-primary\" id=\"mdlOpenModal\" style=\"display:none;\" (click)=\"mdlTran.open()\">modal that cannot be simply closed</button>\n    <modal #mdlTran [closeOnEscape]=\"false\" [closeOnOutsideClick]=\"false\">\n        <modal-header>\n          <h3>Camp Details to be Approved</h3>\n        </modal-header>\n        <modal-content>\n          <table class=\"table table-bordered table-striped table-hover\">\n            <thead>\n              <tr>\n                <th>Tran No</th>\n                <th>Date</th>\n                <th>Year</th>\n                <th>Month</th>\n                <th>City</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of OpenCampPreferrals;let ind=index\" (dblclick)=\"loadCampDetails(item);closeModal(mdlTran)\">\n                <td>{{ item.TRANNO }}</td>\n                <td>{{ item.TRANDATE | date }}</td>\n                <td>{{ item.YEAR }}</td>\n                <td>{{ item.MONTH }}</td>\n                <td>{{ item.CITY }}</td>\n              </tr>\n            </tbody>\n          </table>\n        </modal-content>\n        <modal-footer>\n          <button class=\"btn btn-primary\" (click)=\"closeModal(mdlTran)\">close</button>\n        </modal-footer>\n      </modal>"

/***/ }),

/***/ "../../../../../src/app/pages/transactions/camp-requirements/camp-requirements.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  background: #fff; }\n\n.bg-default {\n  background: linear-gradient(to top right, #999999, #b3b2b2);\n  background: -webkit-linear-gradient(to top right, #999999, #b3b2b2); }\n\n.bg-primary {\n  background: linear-gradient(to top right, #fca400, #ffd17c);\n  background: -webkit-linear-gradient(to top right, #fca400, #ffd17c); }\n\n.bg-success {\n  background: linear-gradient(to top right, #16be9a, #42e697);\n  background: -webkit-linear-gradient(to top right, #16be9a, #42e697); }\n\n.bg-danger {\n  background: linear-gradient(to top right, #fa5167, #fda09c);\n  background: -webkit-linear-gradient(to top right, #fa5167, #fda09c); }\n\n.bg-warning {\n  background: linear-gradient(to top right, #ff7403, #fac980);\n  background: -webkit-linear-gradient(to top right, #ff7403, #fac980); }\n\n.bg-info {\n  background: linear-gradient(to top right, #2cc3ff, #15f8bf);\n  background: -webkit-linear-gradient(to top right, #2cc3ff, #15f8bf); }\n\n.check-label,\n.radio-label {\n  margin-bottom: 20px; }\n\n.form-group > .form-control {\n  margin-bottom: 10px; }\n\n.form-group > .help-block {\n  margin-top: -10px; }\n\n.switch-group {\n  width: 40%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row; }\n  .switch-group .control-label {\n    width: 100%; }\n  .switch-group switch {\n    -ms-flex: 1;\n        flex: 1; }\n\n.rowSpace {\n  padding-top: 3px; }\n\n.table {\n  border: 2px;\n  width: 100%; }\n\n.rowSpace {\n  padding-top: 3px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/transactions/camp-requirements/camp-requirements.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CampRequirementsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_rest_service__ = __webpack_require__("../../../../../src/app/service/rest.service.ts");
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
var CampRequirementsComponent = (function () {
    function CampRequirementsComponent(fb, rest) {
        this.fb = fb;
        this.rest = rest;
        this.globalModal = null;
        this.currentRowIndex = 0;
        this.doctors = [];
        this.submitted = false;
        this.OpenCampPreferrals = [];
        this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__["FileUploader"]({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    CampRequirementsComponent.prototype.ngOnInit = function () {
        /* Initiate the form structure */
        this.form = this.fb.group({
            TRANNO: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            Hosp_Name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            Venue: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            Taluka: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            Camp_Place: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            Camp_Date: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            MCCO: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            Mobile_No: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            District: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            Exhibits: [''],
            From_Date: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            To_Date: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            doctors: this.fb.array([this.fb.group({ Code: '', Name: '', Speciality: '' })]),
            paramed: this.fb.array([this.fb.group({ Code: '', Name: '', })]),
            diagnosis: this.fb.array([this.fb.group({ Code: '', Name: '', })]),
            vehicle: this.fb.array([this.fb.group({ Code: '', Name: '', Regd_No: '', })]),
            drugs: this.fb.array([this.fb.group({ Item_ID: '', GENERICNAME: '', Category_Name: '', ItemName: '', Drug_Qty: '', Drug_Estd_Amt: '', Drug_Add: '', Drug_Rem: '', })]),
            incentives: this.fb.array([this.fb.group({ Code: '', Name: '', Doctor_PhNo: '', Doctor_Amt: '' })]),
            activities: this.fb.array([]),
            facilities: this.fb.array([])
        });
        this.getIECActivities();
        this.getFacilities();
        this.getOpenCampPreferrals();
        var mdlOpenOnLoad = document.getElementById('mdlOpenModal');
        mdlOpenOnLoad.click();
    };
    CampRequirementsComponent.prototype.getOpenCampPreferrals = function () {
        var _this = this;
        this.rest.getOpenCampPreferrals().subscribe(function (data) {
            _this.OpenCampPreferrals = data;
        });
    };
    CampRequirementsComponent.prototype.clearTabsRows = function () {
        var arr = this.form.controls.doctors;
        arr.controls = [];
        arr = this.form.controls.paramed;
        arr.controls = [];
        arr = this.form.controls.diagnosis;
        arr.controls = [];
        arr = this.form.controls.vehicle;
        arr.controls = [];
        arr = this.form.controls.drugs;
        arr.controls = [];
        arr = this.form.controls.incentives;
        arr.controls = [];
        arr = this.form.controls.activities;
        arr.controls = [];
        arr = this.form.controls.facilities;
        arr.controls = [];
    };
    CampRequirementsComponent.prototype.loadCampDetails = function (item) {
        var _this = this;
        this.clearTabsRows();
        this.rest.getCampRequirementsById(item.TRANNO).subscribe(function (data) {
            if (data != null && data != "") {
                _this.campDetailsArray = data;
                console.log(data);
                _this.form.controls['TRANNO'].setValue(item.TRANNO);
                _this.form.controls['Venue'].setValue(_this.campDetailsArray.Venue);
                _this.form.controls['Taluka'].setValue(_this.campDetailsArray.City + ', ' + _this.campDetailsArray.Taluka);
                //this.form.controls['Camp_Place'].setValue();
                _this.form.controls['Camp_Date'].setValue(_this.campDetailsArray.TRANDATE.split('T')[0]);
                //this.form.controls['Mobile_No'].setValue();
                _this.form.controls['District'].setValue(_this.campDetailsArray.District);
                _this.form.controls['MCCO'].setValue(_this.campDetailsArray.MCCO);
                _this.form.controls['Mobile_No'].setValue(_this.campDetailsArray.MCCO_PHONE);
                for (var i = 0; i < _this.campDetailsArray.doctors.length; i++) {
                    _this.DoctorsCtrl.push(_this.fb.group({
                        Code: _this.campDetailsArray.doctors[i].Code,
                        Name: _this.campDetailsArray.doctors[i].Name,
                        Speciality: _this.campDetailsArray.doctors[i].Speciality
                    }));
                }
                for (var i = 0; i < _this.campDetailsArray.paramed.length; i++) {
                    _this.ParamedCtrl.push(_this.fb.group({
                        Code: _this.campDetailsArray.paramed[i].Code,
                        Name: _this.campDetailsArray.paramed[i].Name
                    }));
                }
                for (var i = 0; i < _this.campDetailsArray.diagnosis.length; i++) {
                    _this.DiagCtrl.push(_this.fb.group({
                        Code: _this.campDetailsArray.diagnosis[i].Code,
                        Name: _this.campDetailsArray.diagnosis[i].Name
                    }));
                }
                for (var i = 0; i < _this.campDetailsArray.vehicle.length; i++) {
                    _this.VehicleCtrl.push(_this.fb.group({
                        Code: _this.campDetailsArray.vehicle[i].Code,
                        Name: _this.campDetailsArray.vehicle[i].Name,
                        Regd_No: _this.campDetailsArray.vehicle[i].Regd_No
                    }));
                }
                for (var i = 0; i < _this.campDetailsArray.drugs.length; i++) {
                    _this.DrugCtrl.push(_this.fb.group({
                        Item_ID: _this.campDetailsArray.drugs[i].Item_ID,
                        ItemName: _this.campDetailsArray.drugs[i].ItemName,
                        Category_Name: _this.campDetailsArray.drugs[i].Category_Name,
                        GENERICNAME: _this.campDetailsArray.drugs[i].GENERICNAME,
                        Drug_Qty: _this.campDetailsArray.drugs[i].Drug_Qty,
                        Drug_Estd_Amt: _this.campDetailsArray.drugs[i].Drug_Estd_Amt,
                        Drug_Add: _this.campDetailsArray.drugs[i].Drug_Add,
                        Drug_Rem: _this.campDetailsArray.drugs[i].Drug_Rem
                    }));
                }
                for (var i = 0; i < _this.campDetailsArray.incentives.length; i++) {
                    _this.IncentiveCtrl.push(_this.fb.group({
                        Code: _this.campDetailsArray.incentives[i].Code,
                        Name: _this.campDetailsArray.incentives[i].Name,
                        Doctor_PhNo: _this.campDetailsArray.incentives[i].Doctor_PhNo,
                        Doctor_Amt: _this.campDetailsArray.incentives[i].Doctor_Amt,
                    }));
                }
                if (_this.campDetailsArray.activities.length > 0) {
                    for (var i = 0; i < _this.campDetailsArray.activities.length; i++) {
                        _this.IEC_Activities.push(_this.fb.group({
                            Code: _this.campDetailsArray.activities[i].Code,
                            Name: _this.campDetailsArray.activities[i].Name,
                            chkProActvitiy: _this.campDetailsArray.activities[i].chkProActvitiy,
                            AmountEstimated: _this.campDetailsArray.activities[i].AmountEstimated,
                        }));
                    }
                }
                if (_this.campDetailsArray.facilities.length > 0) {
                    for (var i = 0; i < _this.campDetailsArray.facilities.length; i++) {
                        _this.Facilities.push(_this.fb.group({
                            Code: _this.campDetailsArray.facilities[i].Code,
                            Name: _this.campDetailsArray.facilities[i].Name,
                            chkYesNo: _this.campDetailsArray.facilities[i].chkProActvitiy,
                            AmountEstimated: _this.campDetailsArray.facilities[i].AmountEstimated,
                        }));
                    }
                }
            }
        });
    };
    CampRequirementsComponent.prototype.getIECActivities = function () {
        var _this = this;
        this.rest.getActivities().subscribe(function (data) {
            if (data != "" && data != null)
                for (var i = 0; i < data.length; i++) {
                    _this.IEC_Activities.push(_this.fb.group({
                        Code: data[i].ACTIVITY_CODE,
                        Name: data[i].ACTIVITY_NAME,
                        chkProActvitiy: false,
                        AmountEstimated: ''
                    }));
                }
        });
    };
    CampRequirementsComponent.prototype.getFacilities = function () {
        var _this = this;
        this.rest.getFacilities().subscribe(function (data) {
            if (data != "" && data != null)
                for (var i = 0; i < data.length; i++) {
                    _this.Facilities.push(_this.fb.group({
                        Code: data[i].FACILITY_CODE,
                        Name: data[i].FACILITY,
                        chkYesNo: false,
                        AmountEstimated: ''
                    }));
                }
        });
    };
    CampRequirementsComponent.prototype.openModal = function (value, modal, rowIndex, control) {
        if (value != "" && value != null) {
            this.globalModal = modal;
            this.currentRowIndex = rowIndex;
            this.globalControlName = control;
            //var searchTerm = this.form.value.table_rows[rowIndex].Sl_No;
            var searchTerm = value;
            this.getPopupData(control, searchTerm, modal);
        }
    };
    CampRequirementsComponent.prototype.getPopupData = function (controlName, searchTerm, modal) {
        var _this = this;
        //var tabId = document.getElementById('tab1');
        if (controlName == "doctors") {
            this.rest.getDoctorsPopUp(searchTerm).subscribe(function (data) {
                _this.doctors = [];
                _this.doctors = data;
                _this.fields = ['Code', 'Name', 'Speciality'];
                _this.fill(_this.doctors, controlName, searchTerm, _this.fields, modal);
                if (_this.form.controls[controlName].value.length - 1 === _this.currentRowIndex)
                    _this.add_doctorRow();
            });
        }
        else if (controlName == "paramed") {
            this.rest.popUp_Staff(searchTerm).subscribe(function (data) {
                _this.doctors = [];
                _this.doctors = data;
                _this.fields = ['Code', 'Name'];
                _this.fill(_this.doctors, controlName, searchTerm, _this.fields, modal);
                if (_this.form.controls[controlName].value.length - 1 === _this.currentRowIndex)
                    _this.add_paramedrow();
            });
        }
        else if (controlName == "diagnosis") {
            this.rest.popUp_Diagnostics(searchTerm).subscribe(function (data) {
                _this.doctors = [];
                _this.doctors = data;
                _this.fields = ['Code', 'Name'];
                _this.fill(_this.doctors, controlName, searchTerm, _this.fields, modal);
                if (_this.form.controls[controlName].value.length - 1 === _this.currentRowIndex)
                    _this.add_diagrow();
            });
        }
        else if (controlName == "vehicle") {
            this.rest.popUp_Vehicle(searchTerm).subscribe(function (data) {
                _this.doctors = [];
                _this.doctors = data;
                _this.fields = ['Code', 'Name', 'Regd_No'];
                _this.fill(_this.doctors, controlName, searchTerm, _this.fields, modal);
                if (_this.form.controls[controlName].value.length - 1 === _this.currentRowIndex)
                    _this.add_vehiclerow();
            });
        }
        else if (controlName == "drugs") {
            this.rest.popUp_Drugs(searchTerm).subscribe(function (data) {
                _this.doctors = [];
                _this.doctors = data;
                _this.fields = ['Item_ID', 'ItemName', 'GENERICNAME', 'Category_Name'];
                _this.fill(_this.doctors, controlName, searchTerm, _this.fields, modal);
                if (_this.form.controls[controlName].value.length - 1 === _this.currentRowIndex)
                    _this.add_drugsrow();
            });
        }
    };
    CampRequirementsComponent.prototype.fill = function (data, controlName, searchTerm, fields, modal) {
        if (this.doctors.length === 1) {
            var arr = [];
            for (var field in this.doctors[0]) {
                arr.push(field);
            }
            for (var i = 0; i < fields.length; i++) {
                //let cntrl = this.form.controls[controlName];
                this.form.get(controlName)
                    .controls[this.currentRowIndex.toString()]
                    .controls[fields[i]]
                    .setValue(this.doctors[0][arr[i]]);
                //this.Add_Rows.controls[this.currentRowIndex.toString()].controls[fields[i]].setValue(this.doctors[0][arr[i]]);  
            }
            // this.Add_Rows.controls[this.currentRowIndex.toString()].controls[id].setValue(this.doctors[0].Code);
            // this.Add_Rows.controls[this.currentRowIndex.toString()].controls[name].setValue(this.doctors[0].Firstname);
            // this.Add_Rows.controls[this.currentRowIndex.toString()].controls.Speciality.setValue(this.doctors[0].Speciality_Name);
        }
        else {
            modal.open();
        }
    };
    CampRequirementsComponent.prototype.fillDataToDoctosTable = function (row) {
        this.DoctorsCtrl.controls[this.currentRowIndex.toString()].controls.Code.setValue(row.Code);
        this.DoctorsCtrl.controls[this.currentRowIndex.toString()].controls.Name.setValue(row.Firstname);
        this.DoctorsCtrl.controls[this.currentRowIndex.toString()].controls.Speciality.setValue(row.Speciality_Name);
        this.globalModal.close();
    };
    CampRequirementsComponent.prototype.fillDataToParaTable = function (row, controlName, event) {
        var rowIndex = event.target.parentNode.rowIndex;
        var arr = [];
        for (var field in this.doctors[0]) {
            arr.push(field);
        }
        for (var i = 0; i < this.fields.length; i++) {
            //let cntrl = this.form.controls[controlName];
            this.form.get(controlName)
                .controls[this.currentRowIndex.toString()]
                .controls[this.fields[i]]
                .setValue(this.doctors[rowIndex - 1][arr[i]]);
        }
        this.globalModal.close();
    };
    CampRequirementsComponent.prototype.closeModal = function (modal) {
        modal.close();
    };
    Object.defineProperty(CampRequirementsComponent.prototype, "DoctorsCtrl", {
        get: function () {
            return this.form.get('doctors');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CampRequirementsComponent.prototype, "ParamedCtrl", {
        get: function () {
            return this.form.get('paramed');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CampRequirementsComponent.prototype, "DiagCtrl", {
        get: function () {
            return this.form.get('diagnosis');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CampRequirementsComponent.prototype, "VehicleCtrl", {
        get: function () {
            return this.form.get('vehicle');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CampRequirementsComponent.prototype, "DrugCtrl", {
        get: function () {
            return this.form.get('drugs');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CampRequirementsComponent.prototype, "IncentiveCtrl", {
        get: function () {
            return this.form.get('incentives');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CampRequirementsComponent.prototype, "IEC_Activities", {
        get: function () {
            return this.form.get('activities');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CampRequirementsComponent.prototype, "Facilities", {
        get: function () {
            return this.form.get('facilities');
        },
        enumerable: true,
        configurable: true
    });
    /////// This is new /////////////////
    CampRequirementsComponent.prototype.add_doctorRow = function () {
        this.DoctorsCtrl.push(this.fb.group({ Code: '', Name: '', Speciality: '', }));
    };
    CampRequirementsComponent.prototype.add_paramedrow = function () {
        this.ParamedCtrl.push(this.fb.group({ Code: '', Name: '' }));
    };
    CampRequirementsComponent.prototype.add_diagrow = function () {
        this.DiagCtrl.push(this.fb.group({ Code: '', Name: '', }));
    };
    CampRequirementsComponent.prototype.add_vehiclerow = function () {
        this.VehicleCtrl.push(this.fb.group({ Code: '', Name: '', Regd_No: '', }));
    };
    CampRequirementsComponent.prototype.add_drugsrow = function () {
        this.DrugCtrl.push(this.fb.group({ Item_ID: '', GENERICNAME: '', Category_Name: '', ItemName: '', Drug_Qty: '', Drug_Estd_Amt: '', Drug_Add: '', Drug_Rem: '', }));
    };
    CampRequirementsComponent.prototype.add_incentivesrow = function () {
        this.IncentiveCtrl.push(this.fb.group({ Code: '', Name: '', Doctor_PhNo: '', Doctor_Amt: '', }));
    };
    CampRequirementsComponent.prototype.delete_doctorrow = function (index) {
        this.DoctorsCtrl.removeAt(index);
    };
    CampRequirementsComponent.prototype.delete_paramedrow = function (index) {
        this.ParamedCtrl.removeAt(index);
    };
    CampRequirementsComponent.prototype.delete_diagnosisrow = function (index) {
        this.DiagCtrl.removeAt(index);
    };
    CampRequirementsComponent.prototype.delete_vehiclerow = function (index) {
        this.VehicleCtrl.removeAt(index);
    };
    CampRequirementsComponent.prototype.delete_drugrow = function (index) {
        this.DrugCtrl.removeAt(index);
    };
    CampRequirementsComponent.prototype.delete_incentivesrow = function (index) {
        this.IncentiveCtrl.removeAt(index);
    };
    CampRequirementsComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    CampRequirementsComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    Object.defineProperty(CampRequirementsComponent.prototype, "f", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    CampRequirementsComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    CampRequirementsComponent.prototype.insertRequirements = function () {
        this.rest.insertCampRequirements(this.form.value).subscribe(function (data) {
            alert('Camp Requirement detais has been saved.');
        });
    };
    return CampRequirementsComponent;
}());
CampRequirementsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-camp-requirements',
        template: __webpack_require__("../../../../../src/app/pages/transactions/camp-requirements/camp-requirements.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/transactions/camp-requirements/camp-requirements.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_rest_service__["a" /* RestService */]) === "function" && _b || Object])
], CampRequirementsComponent);

var _a, _b;
//# sourceMappingURL=camp-requirements.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/transactions/catract-record/catract-record.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <form [formGroup]=\"form\" >\n      <div class=\"form-group\">\n        <card cardTitle=\"Patient Details\" isCollapse=\"false\" >\n        <div class=\"row\" formGroupName=\"userGroup\">\n        <div class=\"col-md-4\">\n          <div class=\"row row_Space\">\n          <div class=\"col-md-4\">\n              <label class=\"control-label\">Reg. No</label>\n                </div>\n                <div class=\"col-md-8\">\n              <input type=\"text\"  placeholder=\"Registration Number\" style='text-transform: uppercase' (change)=\"Load_Details(myModal);\" formControlName=\"PATIENTMR_NO\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.PATIENTMR_NO.errors }\" />\n              </div>     \n          </div>\n          <div class=\"row row_Space\">\n              <div class=\"col-md-4\">\n                  <label class=\"control-label\">Aadhar No</label>\n                    </div>\n                    <div class=\"col-md-8\">\n                  <input type=\"text\"  placeholder=\"Aadhar Number\" formControlName=\"AADHAR_NO\" class=\"form-control\" maxlength=\"12\" (keypress)=\"numberOnly($event)\" [ngClass]=\"{ 'is-invalid': submitted && f.AADHAR_NO.errors }\" />\n                  <div *ngIf=\"submitted && f.AADHAR_NO.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.AADHAR_NO.errors.required\">Aadhar Number is required</div>\n                </div>\n                  </div>     \n          </div>\n          <div class=\"row row_Space\">\n              <div class=\"col-md-4\">\n                  <label class=\"control-label\">Age</label>\n                    </div>\n                    <div class=\"col-md-8\">\n                  <input type=\"text\"  placeholder=\"Age\"  formControlName=\"AGE\" class=\"form-control\" maxlength=\"3\" (keypress)=\"numberOnly($event)\" [ngClass]=\"{ 'is-invalid': submitted && f.AGE.errors }\" />\n                  </div>     \n              </div>\n              <div class=\"row row_Space\" style=\"padding-top:10px; \">\n                  <div class=\"col-md-4\">\n                    <label class=\"control-lable\">Gender</label>\n                  </div>\n                  <div class=\"col-md-8\">                              \n                    <div class=\"form-group\">\n                        <div class=\"col-md-4\">\n                          <input class=\"radio\" type=\"radio\" id=\"rbMale\" name=\"GENDER\" checked formControlName=\"GENDER\" value=\"M\">\n                          <label class=\"radio-label\" for=\"rbMale\">Male</label>\n                        </div>\n                        <div class=\"col-md-4\">\n                          <input class=\"radio\" type=\"radio\" id=\"rbFemale\" name=\"GENDER\" formControlName=\"GENDER\" value=\"F\">\n                          <label class=\"radio-label\" for=\"rbFemale\">Female</label>\n                        </div>         \n                      </div>\n                  </div>\n                </div>\n      </div>\n   \n      <div class=\"col-md-8\">\n          <div class=\"row row_Space\">\n          <div class=\"col-md-3\">\n              <label class=\"control-label\">Patient Name</label>\n                </div>\n                <div class=\"col-md-9\">\n              <input type=\"text\"  placeholder=\"Patient Name\"  formControlName=\"PATIENT_NAME\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.PATIENT_NAME.errors }\" />\n              </div>     \n          </div>\n          <div class=\"row row_Space\">\n              <div class=\"col-md-3\">\n                  <label class=\"control-label\">Address</label>\n                    </div>\n                    <div class=\"col-md-9\">\n      <textarea  formControlName=\"ADDRESS\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.ADDRESS.errors }\" rows=\"2\" cols=\"8\"></textarea>\n                  \n                  </div>     \n              </div>            \n      </div>  \n    </div>\n    </card>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n        <card cardTitle=\"PRE-OPERATIVE EXAMINATION\" isCollapse=\"true\" formGroupName=\"preOperativeGroup\">\n          <table class=\"table table-bordered table-hover table-align\" style=\"width: 100%;\">\n            <thead>\n              <tr>\n                <th style=\"width: 70% !important;\"></th>\n                <th style=\"width: 15% !important;\">Right Eye</th>\n                <th style=\"width: 15% !important;\">Left Eye</th>\n              </tr>\n            </thead>\n              <tbody>\n                <tr>\n                  <td>Visual Acuity<br> (With available glasses)</td>                    \n                  <td><input type=\"text\" formControlName=\"ACUITY_RE\"/></td>\n                  <td><input type=\"text\" formControlName=\"ACUITY_LE\"/></td>\n                </tr>                                                     \n                <tr>\n                  <td>Ocular Diagnosis</td>\n                  <td><input class=\"radio\" type=\"radio\" id=\"DIAG_RE\" name=\"OCULAR_DIAG\" checked formControlName=\"OCULAR_DIAG\" value=\"RE\" />\n                    <label class=\"radio-label\" for=\"DIAG_RE\" style=\"margin-left: 42%;\"></label>\n                  </td>\n                <td><input class=\"radio\" type=\"radio\" id=\"DIAG_LE\" name=\"OCULAR_DIAG\" checked formControlName=\"OCULAR_DIAG\" value=\"LE\" />\n                  <label class=\"radio-label\" for=\"DIAG_LE\" style=\"margin-left: 42%;\"></label>\n                </td>\n                </tr>\n                <tr>\n                    <td>Catract</td>\n                    <td><input class=\"radio\" type=\"radio\" id=\"CATRACT_RE\" name=\"CATRACT\" checked formControlName=\"CATRACT\" value=\"RE\" />\n                      <label class=\"radio-label\" for=\"CATRACT_RE\" style=\"margin-left: 42%;\"></label>\n                    </td>\n                  <td><input class=\"radio\" type=\"radio\" id=\"CATRACT_LE\" name=\"CATRACT\" checked formControlName=\"CATRACT\" value=\"LE\" />\n                    <label class=\"radio-label\" for=\"CATRACT_LE\" style=\"margin-left: 42%;\"></label>\n                  </td>\n                  </tr>\n                  <tr>\n                      <td>Pseudophakia/Aphakia</td>\n                      <td><input class=\"radio\" type=\"radio\" id=\"APHAKIA_RE\" name=\"APHAKIA\" checked formControlName=\"APHAKIA\" value=\"RE\" />\n                        <label class=\"radio-label\" for=\"APHAKIA_RE\" style=\"margin-left: 42%;\"></label>\n                      </td>\n                    <td><input class=\"radio\" type=\"radio\" id=\"APHAKIA_LE\" name=\"APHAKIA\" checked formControlName=\"APHAKIA\" value=\"LE\" />\n                      <label class=\"radio-label\" for=\"APHAKIA_LE\" style=\"margin-left: 42%;\"></label>\n                    </td>\n                    </tr>\n                    <tr>\n                        <td>Other Pathology</td>\n                        <td><input class=\"radio\" type=\"radio\" id=\"OTHER_Pathology_RE\" name=\"OTHER_PATHALOGY\" checked formControlName=\"OTHER_PATHALOGY\" value=\"RE\" />\n                          <label class=\"radio-label\" for=\"OTHER_Pathology_RE\" style=\"margin-left: 42%;\"></label>\n                        </td>\n                      <td><input class=\"radio\" type=\"radio\" id=\"OTHER_Pathology_LE\" name=\"OTHER_PATHALOGY\" checked formControlName=\"OTHER_PATHALOGY\" value=\"LE\" />\n                        <label class=\"radio-label\" for=\"OTHER_Pathology_LE\" style=\"margin-left: 42%;\"></label>\n                      </td>\n                      </tr>\n                      <tr>\n                          <td>No Pathology</td>\n                          <td><input class=\"radio\" type=\"radio\" id=\"NO_Pathology_RE\" name=\"NO_PATHALOGY\" checked formControlName=\"NO_PATHALOGY\" value=\"RE\" />\n                            <label class=\"radio-label\" for=\"NO_Pathology_RE\" style=\"margin-left: 42%;\"></label>\n                          </td>\n                        <td><input class=\"radio\" type=\"radio\" id=\"NO_Pathology_LE\" name=\"NO_PATHALOGY\" checked formControlName=\"NO_PATHALOGY\" value=\"LE\" />\n                          <label class=\"radio-label\" for=\"NO_Pathology_LE\" style=\"margin-left: 42%;\"></label>\n                        </td>\n                        </tr>\n                        <tr>\n                            <td>Eye to be Operated</td>\n                            <td><input class=\"radio\" type=\"radio\" id=\"EYETO_OPERATE_RE\" name=\"EYETO_OPERATE\" checked formControlName=\"EYETO_OPERATE\" value=\"RE\" />\n                              <label class=\"radio-label\" for=\"EYETO_OPERATE_RE\" style=\"margin-left: 42%;\"></label>\n                            </td>\n                          <td><input class=\"radio\" type=\"radio\" id=\"EYETO_OPERATE_LE\" name=\"EYETO_OPERATE\" checked formControlName=\"EYETO_OPERATE\" value=\"LE\" />\n                            <label class=\"radio-label\" for=\"EYETO_OPERATE_LE\" style=\"margin-left: 42%;\"></label>\n                          </td>\n                          </tr>                         \n                          <tr>\n                              <td>IOP</td>\n                              <td><input type=\"text\" formControlName=\"IOP_RE\"/></td>\n                              <td><input type=\"text\" formControlName=\"IOP_LE\"/></td>\n                            </tr>\n              </tbody>          \n          </table>\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n          <label class=\"control-lable\">Date Of Screening</label>\n        </div>\n        <div class=\"col-md-8\">\n          <input type=\"date\"  formControlName=\"SCREENING_DATE\"  class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.SCREENING_DATE.errors }\" />\n        \n        </div>\n        </div>\n          <div class=\"row row_Space\">\n            <div class=\"col-md-4\"> \n              <label class=\"control-label\">Clinical Data</label>\n            </div>\n            <div class=\"col-md-8\">\n                <input type=\"text\"  placeholder=\"Clinical Data\"  formControlName=\"CLINICALDATA\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.CLINICALDATA.errors }\" />\n                </div>     \n          </div>\n          <div class=\"row row_Space\">\n              <div class=\"col-md-4\"> \n                <label class=\"control-label\">Syringing</label>\n              </div>\n              <div class=\"col-md-8\">\n                  <input type=\"text\"  placeholder=\"Syringing\"  formControlName=\"SYRINGING\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.SYRINGING.errors }\" />\n                  </div>     \n            </div>\n            <div class=\"row row_Space\">\n                <div class=\"col-md-4\"> \n                  <label class=\"control-label\">Urine</label>\n                </div>\n                <div class=\"col-md-8\">\n                    <input type=\"text\"  placeholder=\"Urine\"  formControlName=\"URINE\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.URINE.errors }\" />\n                    </div>     \n              </div>\n              <div class=\"row row_Space\">\n                  <div class=\"col-md-4\"> \n                    <label class=\"control-label\">RBS</label>\n                  </div>\n                  <div class=\"col-md-8\">\n                      <input type=\"text\"  placeholder=\"RBS\"  formControlName=\"RBS\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.RBS.errors }\" />\n                      </div>     \n                </div>\n                <div class=\"row row_Space\">\n                    <div class=\"col-md-4\"> \n                      <label class=\"control-label\">BP</label>\n                    </div>\n                    <div class=\"col-md-8\">\n                        <input type=\"text\"  placeholder=\"BP\"  formControlName=\"BP\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.BP.errors }\" />\n                        </div>     \n                  </div>\n        </card>\n        <button class=\"btn btn-success\" (click)=\"Update_CatractRecord();\">Update Record</button>\n        </div>\n       \n        <div class=\"col-md-6\">\n          <card cardTitle=\"Operation Details\" isCollapse=\"true\" formGroupName=\"operationGroup\">\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n          <label class=\"control-lable\">Date Of Operation</label>\n        </div>\n        <div class=\"col-md-8\">\n          <input type=\"date\"  formControlName=\"OPERATION_DATE\"  class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.OPERATION_DATE.errors }\" />\n        \n        </div>\n        </div>\n        <div class=\"row row_Space\">\n          <div class=\"col-md-4\"> \n            <label class=\"control-label\">Place Of Operation</label>\n          </div>\n          <div class=\"col-md-8\">\n              <input type=\"text\"  placeholder=\"Place of Operation\"  formControlName=\"OPERATION_PLACE\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.OPERATION_PLACE.errors }\" />\n              </div>     \n        </div>\n        <div class=\"row row_Space\" style=\"padding-top:10px; \">\n            <div class=\"col-md-4\">\n              <label class=\"control-lable\">Type Of Operaion</label>\n            </div>\n            <div class=\"col-md-8\">                              \n              <div class=\"form-group\">\n                  <div class=\"col-md-6\">\n                    <input class=\"radio\" type=\"radio\" id=\"ICCE\" name=\"OPERATION_TYPE\" checked formControlName=\"OPERATION_TYPE\" value=\"ICCE + AC IOL\">\n                    <label class=\"radio-label\" for=\"ICCE\">ICCE + AC IOL</label>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <input class=\"radio\" type=\"radio\" id=\"ECCE\" name=\"OPERATION_TYPE\" formControlName=\"OPERATION_TYPE\" value=\"ECCE + IOL\">\n                    <label class=\"radio-label\" for=\"ECCE\">ECCE + IOL</label>\n                  </div>  \n                      <div class=\"row\" style=\"padding-top:30px; padding-left:16px;\">\n                          <div class=\"col-md-6\">\n                              <input class=\"radio\" type=\"radio\" id=\"SICS\" name=\"OPERATION_TYPE\" formControlName=\"OPERATION_TYPE\" value=\"SICS + IOL\">\n                              <label class=\"radio-label\" for=\"SICS\">SICS + IOL</label>\n                            </div>   \n                            <div class=\"col-md-6\" style=\"padding-left: 7px;\">\n                                <input class=\"radio\" type=\"radio\" id=\"Other\" name=\"OPERATION_TYPE\" formControlName=\"OPERATION_TYPE\" value=\"O\">\n                                <label class=\"radio-label\" for=\"Other\">Other</label>\n                              </div>  \n                      </div>\n                      <div class=\"row\">\n                        <textarea  class=\"form-control\" formControlName=\"OTHER_OPERATION\" ></textarea>\n                        <!-- *ngIf=\"form.value.operationGroup.OPERATION_TYPE=='O'\" -->\n                      </div>\n                </div>\n            </div>\n          </div>\n          <div class=\"row row_Space\">\n            <div class=\"col-md-4\"> \n              <label class=\"control-label\">Spectacles Given</label>\n            </div>\n            <div class=\"col-md-8\">\n              <div class=\"col-xs-6\">\n              <input class=\"radio\" type=\"radio\" id=\"Y\" name=\"SPECTACLES\" formControlName=\"SPECTACLES\" value=\"Y\">\n              <label class=\"radio-label\" for=\"Y\">Yes</label>\n            </div>\n            <div class='col-xs-6'>\n              <input class=\"radio\" type=\"radio\" id=\"N\" name=\"SPECTACLES\" checked formControlName=\"SPECTACLES\" value=\"N\">\n                                <label class=\"radio-label\" for=\"N\">No</label>\n                              </div>\n                </div>     \n          </div>\n          <div class=\"row row_Space\" style=\"padding-top:10px; \">\n              <div class=\"col-md-4\">\n                <label class=\"control-lable\">Presenting VA at Discharge</label>\n              </div>\n              <div class=\"col-md-8\">                              \n                <div class=\"form-group\">\n                    <div class=\"col-md-6\">\n                      <input class=\"radio\" type=\"radio\" id=\"VA_RE\" name=\"VA_DISCHARGE\" checked formControlName=\"VA_DISCHARGE\" value=\"RE\">\n                      <label class=\"radio-label\" for=\"VA_RE\">Right Eye</label>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <input class=\"radio\" type=\"radio\" id=\"VA_LE\" name=\"VA_DISCHARGE\" formControlName=\"VA_DISCHARGE\" value=\"LE\">\n                      <label class=\"radio-label\" for=\"VA_LE\">Left Eye</label>\n                    </div>  \n                  </div>\n              </div>\n          </div>\n          <div class=\"row row_Space\">\n            <div class=\"col-md-4\"> \n              <label class=\"control-label\">Final Outcome</label>\n            </div>\n            <div class=\"col-md-8\">\n                <input type=\"text\"  placeholder=\"Final Outcome\"  formControlName=\"FINAL_OUTCOME\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.FINAL_OUTCOME.errors }\" />\n                </div>     \n          </div>\n          <div class=\"row\" style=\"padding-left: 20px; padding-right:20px; \">\n      <textarea  formControlName=\"VA_DESC\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.VA_DESC.errors }\"></textarea>           \n          </div>\n        </card>\n\n        <card cardTitle=\"Follow-Up 1\" isCollapse=\"true\" formGroupName=\"followUpGroup\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n                <input class=\"radio\" type=\"radio\" id=\"Followup_RE\" name=\"FOLLOW_UP\" checked formControlName=\"FOLLOW_UP\" value=\"RE\">\n                <label class=\"radio-label\" for=\"Followup_RE\">Right Eye</label>\n            </div>\n            <div class=\"col-md-3\">\n                <input class=\"radio\" type=\"radio\" id=\"Followup_LE\" name=\"FOLLOW_UP\" checked formControlName=\"FOLLOW_UP\" value=\"LE\">\n                <label class=\"radio-label\" for=\"Followup_LE\">Left Eye</label>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"col-md-3\">\n              <label class=\"control-label\">Date</label>\n              </div>\n              <div class=\"col-md-9\">\n                  <input type=\"date\"  formControlName=\"FOLLOW_UP_DATE\"  class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.FOLLOW_UP_DATE.errors }\" />\n              </div>\n            </div>\n          </div>\n          <div class=\"row row_Space\">\n            <div class=\"col-md-4\"> \n              <label class=\"control-label\">Final Outcome</label>\n            </div>\n            <div class=\"col-md-8\">\n                <input type=\"text\"  placeholder=\"Final Outcome\"  formControlName=\"FINAL_OUTCOME\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.FINAL_OUTCOME.errors }\" />\n                </div>     \n          </div>\n          <div class=\"row row_Space\" style=\"padding-left: 20px; padding-right:20px; \">\n              <textarea  formControlName=\"FOLLOW_UP_DESC\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.FOLLOW_UP_DESC.errors }\"></textarea>           \n                  </div>\n        </card>\n\n        <card cardTitle=\"Follow-Up 2\" isCollapse=\"true\" formGroupName=\"followUp2Group\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n                <input class=\"radio\" type=\"radio\" id=\"Followup2_RE\" name=\"FOLLOW_UP2\" checked formControlName=\"FOLLOW_UP2\" value=\"RE\">\n                <label class=\"radio-label\" for=\"Followup2_RE\">Right Eye</label>\n            </div>\n            <div class=\"col-md-3\">\n                <input class=\"radio\" type=\"radio\" id=\"Followup2_LE\" name=\"FOLLOW_UP2\" checked formControlName=\"FOLLOW_UP2\" value=\"LE\">\n                <label class=\"radio-label\" for=\"Followup2_LE\">Left Eye</label>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"col-md-3\">\n              <label class=\"control-label\">Date</label>\n              </div>\n              <div class=\"col-md-9\">\n                  <input type=\"date\"  formControlName=\"FOLLOW_UP_DATE2\"  class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.FOLLOW_UP_DATE2.errors }\" />\n              </div>\n            </div>\n          </div>\n          <div class=\"row row_Space\" style=\"padding-left: 20px; padding-right:20px; \">\n              <textarea  formControlName=\"FOLLOW_UP_DESC2\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.FOLLOW_UP_DESC2.errors }\"></textarea>           \n                  </div>\n        </card>\n\n       \n            <card cardTitle=\"Immediate Complications\" isCollapse=\"true\" formGroupName=\"finalStageGroup\">\n              <div class=\"row\">\n              <div class=\"col-md-4\">\n                <label class=\"control-label\">Vitreous Loss</label>\n              </div>\n              <div class=\"col-md-8\">\n                  <input type=\"text\"  placeholder=\"Vitreous Loss\"  formControlName=\"VITREOUS_LOSS\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.VITREOUS_LOSS.errors }\" />\n              </div>\n              </div>\n\n              <div class=\"row row_Space\">\n                  <div class=\"col-md-4\">\n                    <label class=\"control-label\">Iris Prolaps</label>\n                  </div>\n                  <div class=\"col-md-8\">\n                      <input type=\"text\"  placeholder=\"Iris Prolaps\"  formControlName=\"IRIS_PROLAPS\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.IRIS_PROLAPS.errors }\" />\n                  </div>\n                  </div>\n                  <div class=\"row row_Space\">\n                      <div class=\"col-md-4\">\n                        <label class=\"control-label\">Lens Power</label>\n                      </div>\n                      <div class=\"col-md-8\">\n                          <input type=\"text\"  placeholder=\"Lens Power\"  formControlName=\"LENS_POWER\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.LENS_POWER.errors }\" />\n                      </div>\n                      </div>\n            </card>\n         \n        </div>\n      </div>\n     \n    </div>    \n  </form>\n</div>\n\n\n<modal #myModal [closeOnEscape]=\"false\" [closeOnOutsideClick]=\"false\">\n  <modal-header>\n    <h3>Select The Patient</h3>\n  </modal-header>\n  <modal-content>\n      <div class=\"form-group\">\n          <div class=\"input-group\">\n            <div class=\"input-group-addon\">\n              <i class=\"glyphicon glyphicon-search\"></i>\n            </div>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              name=\"searchString\"\n              placeholder=\"Type to search...\"\n              [(ngModel)]=\"searchString\"\n            />\n          </div>\n        </div>\n    <table class=\"table table-bordered table-hover\">\n      <thead>\n        <tr>\n          <th>Patient MRNO</th>\n          <th>Patient Name</th>\n          <th>Gender</th>\n          <th>Age</th>         \n          <th>Aadhar Number</th>\n          \n        </tr>\n      </thead>\n      <tbody>\n    <tr *ngFor=\"let item of All_Patients | filter : 'PatientMr_No' : searchString | paginate: { id: 'pager', itemsPerPage: pageSize, currentPage: pageNumber}; let index = index\" (dblclick)=\"getRowData123(item,$event); closeModal(myModal);\">\n          <td>{{item.PatientMr_No}}</td>\n          <td>{{item.Patient_Name}}</td>                    \n          <td>{{item.Gender==\"M\"?\"Male\":\"Female\"}}</td>\n          <td>{{item.Age}}</td>          \n          <td>{{item.Aadhar_No}}</td>\n\n          <td style=\"display:none;\">{{item.ACUITY_LE}}</td>         \n          <td style=\"display:none;\">{{item.ACUITY_RE}}</td>\n          <td style=\"display:none;\">{{item.OCULAR_DIAG}}</td>              \n          <td style=\"display:none;\">{{item.CATRACT}}</td>             \n          <td style=\"display:none;\">{{item.APHAKIA}}</td>\n          <td style=\"display:none;\">{{item.OTHER_PATHALOGY}}</td>\n          <td style=\"display:none;\">{{item.NO_PATHALOGY}}</td>\n          <td style=\"display:none;\">{{item.EYETO_OPERATE}}</td>\n          <td style=\"display:none;\">{{item.CLINICALDATA}}</td>\n          <td style=\"display:none;\">{{item.IOP_LE}}</td>\n          <td style=\"display:none;\">{{item.IOP_RE}}</td>\n          <td style=\"display:none;\">{{item.SYRINGING}}</td>\n          <td style=\"display:none;\">{{item.URINE}}</td>\n          <td style=\"display:none;\">{{item.RBS}}</td>\n          <td style=\"display:none;\">{{item.BP}}</td>\n          <td style=\"display:none;\">{{item.OPERATION_DATE}}</td>\n          <td style=\"display:none;\">{{item.OPERATION_PLACE}}</td>\n          <td style=\"display:none;\">{{item.OPERATION_TYPE}}</td>\n          <td style=\"display:none;\">{{item.VA_DISCHARGE}}</td>\n          <td style=\"display:none;\">{{item.VA_DESC}}</td>\n          <td style=\"display:none;\">{{item.FOLLOW_UP}}</td>\n          <td style=\"display:none;\">{{item.FOLLOW_UP_DATE}}</td>\n          <td style=\"display:none;\">{{item.FOLLOW_UP_DESC}}</td>\n          <td style=\"display:none;\">{{item.VITREOUS_LOSS}}</td>\n          <td style=\"display:none;\">{{item.IRIS_PROLAPS}}</td>\n          <td style=\"display:none;\">{{item.LENS_POWER}}</td>\n\n\n          \n          \n        </tr>\n\n      </tbody>\n    </table>\n    <div class=\"pagination-wrapper\">\n        <div class=\"form-group pages\">\n          <pagination-controls class=\"my-pagination\" id=\"pager\" (pageChange)=\"pageChanged($event)\" maxSize=\"9\" directionLinks=\"true\"\n            autoHide=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\"\n            screenReaderCurrentLabel=\"You're on page\">\n          </pagination-controls>\n        </div>\n        <div class=\"form-group options pages\">\n          <div class=\"input-group input-group-sm\">\n            <select class=\"form-control\" name=\"pageChangedName\" [(ngModel)]=\"pageSize\" (ngModelChange)=\"loadData()\">\n              <option>1</option>\n              <option>5</option>\n              <option>10</option>\n              <option>20</option>\n              <option>50</option>\n              <option>100</option>\n              <option>200</option>\n            </select>\n            <span class=\"input-group-addon addon-right\">Per Page</span>\n          </div>\n        </div>\n      </div>\n  </modal-content>\n  <modal-footer>\n    <button class=\"btn btn-primary\" (click)=\"closeModal(myModal)\">close</button>\n  </modal-footer>\n</modal>"

/***/ }),

/***/ "../../../../../src/app/pages/transactions/catract-record/catract-record.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row_Space {\n  padding-top: 4px; }\n\n.table-align td {\n  text-align: left !important; }\n\n.table-align th {\n  text-align: center !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/transactions/catract-record/catract-record.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatractRecordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_rest_service__ = __webpack_require__("../../../../../src/app/service/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_global_service__ = __webpack_require__("../../../../../src/app/shared/services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_roots_root_component__ = __webpack_require__("../../../../../src/app/shared/roots/root.component.ts");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var CatractRecordComponent = (function (_super) {
    __extends(CatractRecordComponent, _super);
    function CatractRecordComponent(fb, rest, _globalService) {
        var _this = _super.call(this, _globalService) || this;
        _this.fb = fb;
        _this.rest = rest;
        _this._globalService = _globalService;
        _this.All_Patients = [];
        _this.pageSize = 5;
        _this.pageNumber = 1;
        _this.isCollapse = false;
        _this.submitted = false;
        return _this;
    }
    CatractRecordComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            userGroup: this.fb.group({
                PATIENTMR_NO: [''],
                AADHAR_NO: [{ value: null, disabled: true }],
                GENDER: [{ value: 'M', disabled: true }],
                PATIENT_NAME: [{ value: '', disabled: true }],
                ADDRESS: [{ value: '', disabled: true }],
                AGE: [{ value: '', disabled: true }],
            }),
            preOperativeGroup: this.fb.group({
                ACUITY_RE: [''],
                ACUITY_LE: [''],
                OCULAR_DIAG: "",
                CATRACT: "",
                APHAKIA: [''],
                OTHER_PATHALOGY: [''],
                NO_PATHALOGY: [''],
                EYETO_OPERATE: [''],
                IOP_RE: [''],
                IOP_LE: [''],
                SCREENING_DATE: [''],
                CLINICALDATA: [''],
                SYRINGING: [''],
                URINE: [''],
                RBS: [''],
                BP: [''],
            }),
            operationGroup: this.fb.group({
                OPERATION_DATE: [''],
                OPERATION_PLACE: [''],
                OPERATION_TYPE: ["I"],
                OTHER_OPERATION: [""],
                SPECTACLES: [''],
                VA_DISCHARGE: ["RE"],
                VA_DESC: [''],
                FINAL_OUTCOME: ['']
            }),
            followUpGroup: this.fb.group({
                FOLLOW_UP: [''],
                FOLLOW_UP_DATE: [''],
                FOLLOW_UP_DESC: [''],
                FINAL_OUTCOME: ['']
            }),
            followUp2Group: this.fb.group({
                FOLLOW_UP2: [''],
                FOLLOW_UP_DATE2: [''],
                FOLLOW_UP_DESC2: [''],
            }),
            finalStageGroup: this.fb.group({
                VITREOUS_LOSS: [''],
                IRIS_PROLAPS: [''],
                LENS_POWER: [''],
            })
        });
    };
    // async Load_Details(modal)
    // {
    //   modal.open();
    //   var mrno=this.form.value.PATIENTMR_NO;
    //   this.Patient_CatractRecords(mrno);
    // }
    // async Patient_CatractRecords(mrno)
    // {
    //   this.rest.Patient_CatractRecords(mrno).subscribe(data => {
    //     if(data.reg_details==null)
    //     {
    //       this.All_Patients=data.catract_details;
    //     }
    //     else if(data.catract_details==null)
    //     {
    //       this.All_Patients = data.reg_details;  
    //     }
    //     //this.All_Patients = data;  
    //     },
    //     err => {
    //       console.log (err.message);
    //     }
    //   );
    // }
    CatractRecordComponent.prototype.Load_Details = function (modal) {
        return __awaiter(this, void 0, void 0, function () {
            var mrno;
            return __generator(this, function (_a) {
                modal.open();
                mrno = this.form.value.userGroup.PATIENTMR_NO;
                this.get_Patients(mrno);
                return [2 /*return*/];
            });
        });
    };
    CatractRecordComponent.prototype.get_Patients = function (mrno) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.rest.get_Patients(mrno).subscribe(function (data) {
                    _this.All_Patients = data;
                }, function (err) {
                    console.log(err.message);
                });
                return [2 /*return*/];
            });
        });
    };
    CatractRecordComponent.prototype.get_Catract = function (mrno, item) {
        var _this = this;
        this.rest.get_Catract_Details(mrno).toPromise()
            .then(function (data) {
            _this.All_Patients = data;
            if (data != null && data.length > 0)
                _this.getRowData(_this.All_Patients[0]);
            else
                _this.getRowData(item);
        }, function (err) {
            console.log(err.message);
        });
    };
    CatractRecordComponent.prototype.getRowData123 = function (item, event) {
        this.form.get('preOperativeGroup').disable();
        this.form.get('operationGroup').disable();
        this.form.get('followUpGroup').disable();
        this.form.get('followUp2Group').disable();
        this.form.get('finalStageGroup').disable();
        this.form.get('userGroup').disable();
        this.form.get('userGroup').controls["PATIENTMR_NO"].enable();
        //this.form.controls['PATIENTMR_NO'].setValue(item.PatientMr_No)
        this.form.get('userGroup').controls["PATIENTMR_NO"].setValue(item.PatientMr_No);
        this.All_Patients = "";
        this.get_Catract(item.PatientMr_No, item);
    };
    CatractRecordComponent.prototype.getRowData = function (item) {
        this.form.get('userGroup').controls['PATIENTMR_NO'].setValue(item.PatientMr_No);
        this.form.get('userGroup').controls['PATIENT_NAME'].setValue(item.Patient_Name);
        this.form.get('userGroup').controls['GENDER'].setValue(item.Gender);
        this.form.get('userGroup').controls['AGE'].setValue(item.Age);
        this.form.get('userGroup').controls['AADHAR_NO'].setValue(item.Aadhar_No);
        this.form.get('userGroup').controls['ADDRESS'].setValue(item.Address);
        this.form.get('preOperativeGroup').controls['ACUITY_RE'].setValue(item.ACUITY_RE);
        this.form.get('preOperativeGroup').controls['ACUITY_LE'].setValue(item.ACUITY_LE);
        this.form.get('preOperativeGroup').controls['OCULAR_DIAG'].setValue(item.OCULAR_DIAG);
        this.form.get('preOperativeGroup').controls['CATRACT'].setValue(item.CATRACT);
        this.form.get('preOperativeGroup').controls['APHAKIA'].setValue(item.APHAKIA);
        this.form.get('preOperativeGroup').controls['OTHER_PATHALOGY'].setValue(item.OTHER_PATHALOGY);
        this.form.get('preOperativeGroup').controls['NO_PATHALOGY'].setValue(item.NO_PATHALOGY);
        this.form.get('preOperativeGroup').controls['EYETO_OPERATE'].setValue(item.EYETO_OPERATE);
        this.form.get('preOperativeGroup').controls['CLINICALDATA'].setValue(item.CLINICALDATA);
        this.form.get('preOperativeGroup').controls['IOP_RE'].setValue(item.IOP_RE);
        this.form.get('preOperativeGroup').controls['IOP_LE'].setValue(item.IOP_LE);
        this.form.get('preOperativeGroup').controls['SCREENING_DATE'].setValue(item.SCREENING_DATE);
        this.form.get('preOperativeGroup').controls['SYRINGING'].setValue(item.SYRINGING);
        this.form.get('preOperativeGroup').controls['URINE'].setValue(item.URINE);
        this.form.get('preOperativeGroup').controls['RBS'].setValue(item.RBS);
        this.form.get('preOperativeGroup').controls['BP'].setValue(item.BP);
        this.form.get('operationGroup').controls['VA_DISCHARGE'].setValue(item.VA_DISCHARGE);
        this.form.get('operationGroup').controls['VA_DESC'].setValue(item.VA_DESC);
        this.form.get('operationGroup').controls['SPECTACLES'].setValue(item.SPECTACLES);
        var operationDate = item.OPERATION_DATE == "0001-01-01T00:00:00" ? "" : item.OPERATION_DATE;
        this.form.get('operationGroup').controls['OPERATION_DATE'].setValue(operationDate != undefined ? operationDate.split('T')[0] : "");
        this.form.get('operationGroup').controls['OPERATION_PLACE'].setValue(item.OPERATION_PLACE);
        this.form.get('operationGroup').controls['OPERATION_TYPE'].setValue(item.OPERATION_TYPE);
        this.form.get('operationGroup').controls['OTHER_OPERATION'].setValue(item.OTHER_OPERATION);
        this.form.get('followUpGroup').controls['FOLLOW_UP'].setValue(item.FOLLOW_UP);
        var followUpDate = item.FOLLOW_UP_DATE == "0001-01-01T00:00:00" ? "" : item.FOLLOW_UP_DATE;
        this.form.get('followUpGroup').controls['FOLLOW_UP_DATE'].setValue(followUpDate != undefined ? followUpDate.split('T')[0] : "");
        this.form.get('followUpGroup').controls['FOLLOW_UP_DESC'].setValue(item.FOLLOW_UP_DESC);
        this.form.get('followUp2Group').controls['FOLLOW_UP2'].setValue(item.FOLLOW_UP2);
        var followUpDate = item.FOLLOW_UP_DATE2 == "0001-01-01T00:00:00" ? "" : item.FOLLOW_UP_DATE2;
        this.form.get('followUp2Group').controls['FOLLOW_UP_DATE2'].setValue(followUpDate != undefined ? followUpDate.split('T')[0] : "");
        this.form.get('followUp2Group').controls['FOLLOW_UP_DESC2'].setValue(item.FOLLOW_UP_DESC2);
        this.form.get('finalStageGroup').controls['VITREOUS_LOSS'].setValue(item.VITREOUS_LOSS);
        this.form.get('finalStageGroup').controls['IRIS_PROLAPS'].setValue(item.IRIS_PROLAPS);
        this.form.get('finalStageGroup').controls['LENS_POWER'].setValue(item.LENS_POWER);
        item.PRE_OPEXM_STATUS = (item.PRE_OPEXM_STATUS == undefined ||
            item.PRE_OPEXM_STATUS == null ||
            item.PRE_OPEXM_STATUS == "") ? "N" : item.PRE_OPEXM_STATUS;
        item.OPERATION_STATUS = (item.OPERATION_STATUS == undefined ||
            item.OPERATION_STATUS == null ||
            item.OPERATION_STATUS == "") ? "N" : item.OPERATION_STATUS;
        item.FOLLOWUP_STATUS = (item.FOLLOWUP_STATUS == undefined ||
            item.FOLLOWUP_STATUS == null ||
            item.FOLLOWUP_STATUS == "") ? "N" : item.FOLLOWUP_STATUS;
        item.FOLLOWUP2_STATUS = (item.FOLLOWUP2_STATUS == undefined ||
            item.FOLLOWUP2_STATUS == null ||
            item.FOLLOWUP2_STATUS == "") ? "N" : item.FOLLOWUP2_STATUS;
        item.FINALSTAGE_STATUS = (item.FINALSTAGE_STATUS == undefined ||
            item.FINALSTAGE_STATUS == null ||
            item.FINALSTAGE_STATUS == "") ? "N" : item.FINALSTAGE_STATUS;
        if (item.FOLLOWUP_STATUS == "Y")
            this.form.get('followUpGroup').controls['FINAL_OUTCOME'].setValue(item.FINAL_OUTCOME);
        else
            this.form.get('operationGroup').controls['FINAL_OUTCOME'].setValue(item.FINAL_OUTCOME);
        if (item.PRE_OPEXM_STATUS == "N") {
            this.form.get('preOperativeGroup').enable();
            this.form.get('operationGroup').disable();
            this.form.get('followUpGroup').disable();
            this.form.get('followUp2Group').disable();
            this.form.get('finalStageGroup').disable();
        }
        else {
            this.form.get('preOperativeGroup').disable();
            if (item.OPERATION_STATUS == "N") {
                this.form.get('operationGroup').enable();
                this.form.get('followUpGroup').disable();
                this.form.get('followUp2Group').disable();
                this.form.get('finalStageGroup').disable();
            }
            else {
                this.form.get('operationGroup').disable();
                if (item.FOLLOWUP_STATUS == "N") {
                    this.form.get('followUpGroup').enable();
                    this.form.get('finalStageGroup').disable();
                    this.form.get('followUp2Group').disable();
                }
                else {
                    this.form.get('followUpGroup').disable();
                    if (item.FOLLOWUP2_STATUS == "N") {
                        this.form.get('followUp2Group').enable();
                        this.form.get('finalStageGroup').disable();
                    }
                    else {
                        if (item.FINALSTAGE_STATUS == "N")
                            this.form.get('finalStageGroup').enable();
                        else
                            this.form.get('finalStageGroup').disable();
                    }
                }
            }
        }
    };
    CatractRecordComponent.prototype.pageChanged = function (pN) {
        this.pageNumber = pN;
    };
    Object.defineProperty(CatractRecordComponent.prototype, "f", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    //get user(){return this.form.get('userGroup');}
    CatractRecordComponent.prototype.closeModal = function (modal) {
        modal.close();
    };
    CatractRecordComponent.prototype.Update_CatractRecord = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.valid) {
            var d = this.form.value;
            d.OPERATION_DATE = d.OPERATION_DATE == "undefined" ? "" : d.OPERATION_DATE;
            d.FOLLOW_UP_DATE = d.FOLLOW_UP_DATE == "undefined" ? "" : d.FOLLOW_UP_DATE;
            d.FOLLOW_UP2_DATE = d.FOLLOW_UP2_DATE == "undefined" ? "" : d.FOLLOW_UP2_DATE;
            d.SCREENING_DATE = d.SCREENING_DATE == "undefined" ? "" : d.SCREENING_DATE;
            d.CAMP_CODE = sessionStorage.getItem('Camp_Id');
            d.PRE_OPEXM_STATUS = this.form.get('preOperativeGroup').enabled ? "N" : "Y";
            d.OPERATION_STATUS = this.form.get('operationGroup').enabled ? "N" : "Y";
            d.FOLLOWUP_STATUS = this.form.get('followUpGroup').enabled ? "N" : "Y";
            d.FOLLOWUP2_STATUS = this.form.get('followUp2Group').enabled ? "N" : "Y";
            d.FINALSTAGE_STATUS = this.form.get('finalStageGroup').enabled ? "N" : "Y";
            //d.STATUS=d.STATUS==true?"A":"C";
            this.rest.insert_Update_CatractRecord(d).subscribe(function (data) {
                if (data != "" && data != null) {
                    _this.alertMessage({
                        type: 'success',
                        title: 'Success',
                        value: 'Catract Record Updated.'
                    });
                }
            }, function (error) {
                console.log(error.error.Message);
            });
        }
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
    };
    CatractRecordComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    return CatractRecordComponent;
}(__WEBPACK_IMPORTED_MODULE_4__shared_roots_root_component__["a" /* RootComponent */]));
CatractRecordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-catract-record',
        template: __webpack_require__("../../../../../src/app/pages/transactions/catract-record/catract-record.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/transactions/catract-record/catract-record.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_rest_service__["a" /* RestService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_global_service__["a" /* GlobalService */]) === "function" && _c || Object])
], CatractRecordComponent);

var _a, _b, _c;
//# sourceMappingURL=catract-record.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/transactions/consultation/consultation.component.html":
/***/ (function(module, exports) {

module.exports = "{{form.value|json}}\n<div class=\"row\">\n    <form [formGroup]=\"form\" >\n    <div class=\"col-md-6\">   \n       <card cardTitle=\"Patient Details\" isCollapse=\"true\"> \n        <div class=\"form-group\">\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n          <label class=\"control-label\">MR Number</label>\n            </div>\n            <div class=\"col-md-8\">\n          <input type=\"text\"  placeholder=\"MR Number\" (change)=\"Load_Details(myModal);\" formControlName=\"PatientMr_No\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.PatientMr_No.errors }\" />\n          </div>           \n        </div>\n        <div class=\"row row_Space\">\n          <div class=\"col-md-4\">\n          <label class=\"control-label\">Name</label>\n          </div>\n          <div class=\"col-md-8\">\n          <input type=\"=text\" placeholder=\"Patient Name\"  formControlName=\"Patient_Name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.Patient_Name.errors }\" aria-multiline=\"true\"/>\n          <div *ngIf=\"submitted && f.Patient_Name.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.Patient_Name.errors.required\">Patient Name  is required</div>\n          </div>   \n          </div>\n        </div>\n          <div class=\"row \" style=\"padding-top:10px; \">\n            <div class=\"col-md-4\">\n              <label class=\"control-lable\">Gender</label>\n            </div>\n            <div class=\"col-md-8\">                              \n              <div class=\"form-group\">\n                  <div class=\"col-md-4\">\n                    <input class=\"radio\" type=\"radio\" id=\"rbMale\" name=\"GENDER\" checked formControlName=\"GENDER\" value=\"M\">\n                    <label class=\"radio-label\" for=\"rbMale\">Male</label>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <input class=\"radio\" type=\"radio\" id=\"rbFemale\" name=\"GENDER\" formControlName=\"GENDER\" value=\"F\">\n                    <label class=\"radio-label\" for=\"rbFemale\">Female</label>\n                  </div>         \n                </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n            <label class=\"control-lable\">Date Of Birth</label>\n          </div>\n          <div class=\"col-md-8\">\n          <input type=\"date\"  formControlName=\"DOB\"  class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.DOB.errors }\" />\n            </div>\n          </div>\n\n         <div class=\"row row_Space\">\n           <div class=\"col-md-4\">\n        <label class=\"control-lable\">Patient Category</label>\n        </div>\n        <div class=\"col-md-8\">\n        <select class=\"form-control\" placeholder=\"Category Not Selected\" disabled=\"disabled\"  formControlName=\"Patient_Category\">\n              <option \n              *ngFor=\"let dd of Pat_Categories\"\n              value=\"{{dd.Pat_CatCode}}\">\n              {{dd.Pat_CatName}}\n     </option>\n     \n  </select>\n  </div>\n  </div>\n  <div class=\"row row_Space\">\n      <div class=\"col-md-4\">\n      <label class=\"control-label\">Age</label>\n      </div>\n      <div class=\"col-md-8\">\n      <input type=\"=text\" placeholder=\"Enter Age\"  formControlName=\"Age\" class=\"form-control\"  maxlength=\"3\" (keypress)=\"numberOnly($event)\" [ngClass]=\"{ 'is-invalid': submitted && f.Age.errors }\" aria-multiline=\"true\"/>\n      <div *ngIf=\"submitted && f.Age.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.Age.errors.required\">Age is Required</div>\n      </div>   \n      </div>\n    </div>\n    \n    <div class=\"row row_Space\">\n        <div class=\"col-md-4\">\n     <label class=\"control-lable\">Blood Group</label>\n     </div>\n     <div class=\"col-md-8\">\n     <select class=\"form-control\" placeholder=\"Department Not Selected\" formControlName=\"Blood_Group\">\n       <option value=\"\">Select Blood Group</option>\n           <option \n           *ngFor=\"let dd of BloodGroups\"\n           value=\"{{dd.id}}\">\n           {{dd.name}}\n  </option>\n</select>\n</div>\n</div>\n<div class=\"row row_Space\">\n    <div class=\"col-md-4\">\n    <label class=\"control-label\">Mobile No</label>\n    </div>\n    <div class=\"col-md-8\">\n    <input type=\"=text\" placeholder=\"Mobile Number\"  formControlName=\"Mobile\" class=\"form-control\"  maxlength=\"10\" (keypress)=\"numberOnly($event)\"  [ngClass]=\"{ 'is-invalid': submitted && f.Mobile.errors }\" aria-multiline=\"true\"/>\n    <div *ngIf=\"submitted && f.Mobile.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.Mobile.errors.required\">Mobile Number  is required</div>\n    </div>   \n    </div>\n  </div>\n\n  <div class=\"row row_Space\">\n    <div class=\"col-md-4\">\n        <label class=\"control-label\">Aadhar No</label>\n          </div>\n          <div class=\"col-md-8\">\n        <input type=\"text\"  placeholder=\"Aadhar Number\"  formControlName=\"AADHAR_NO\" class=\"form-control\" maxlength=\"12\" (keypress)=\"numberOnly($event)\" [ngClass]=\"{ 'is-invalid': submitted && f.AADHAR_NO.errors }\" />\n        <div *ngIf=\"submitted && f.AADHAR_NO.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.AADHAR_NO.errors.required\">Aadhar Number is required</div>\n      </div>\n        </div>     \n</div>\n\n        </div>\n        <div class=\"form-group\">\n          <button class=\"btn btn-success\" (click)=\"onSubmit()\">{{buttonName}}</button>\n        <button class=\"btn btn-warning\" (click)=\"clearForm()\">Clear</button>\n\n      </div>\n  \n     </card>    \n    </div>\n    \n    <div class=\"col-md-6\">   \n        <card cardTitle=\"Doctor Details\" isCollapse=\"true\"> \n         <div class=\"form-group\">\n            <div class=\"row row_Space\">\n                <div class=\"col-md-4\">\n                    <label class=\"control-label\">Doctor Code</label>\n                      </div>\n                <div class=\"col-md-4\">\n                    <input type=\"text\"  placeholder=\"Doctor Code\" (change)=\"getDoct_PopUp(doctModal);\" formControlName=\"DOCT_CODE\" class=\"form-control\"   [ngClass]=\"{ 'is-invalid': submitted && f.DOCT_CODE.errors }\" />\n                    <div *ngIf=\"submitted && f.DOCT_CODE.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.DOCT_CODE.errors.required\">Doctor Code is required</div>\n                    </div>\n                </div>\n            </div>    \n            <div class=\"row row_Space\">\n                <div class=\"col-md-4\">\n                    <label class=\"control-label\">Doctor Name</label>\n                      </div>\n                <div class=\"col-md-8\">\n                    <input type=\"text\"  placeholder=\"Doctor Name\"  formControlName=\"DOCT_NAME\" class=\"form-control\" maxlength=\"12\"  [ngClass]=\"{ 'is-invalid': submitted && f.DOCT_NAME.errors }\" />\n                    <div *ngIf=\"submitted && f.DOCT_NAME.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.DOCT_NAME.errors.required\">Doctor Name is required</div>\n                  </div>\n                    </div> \n            </div>\n               \n                \n                <div class=\"row row_Space\">\n                    <div class=\"col-md-4\">\n                 <label class=\"control-label\">Department</label>\n                 </div>\n                 <div class=\"col-md-8\">\n                 <select class=\"form-control\" placeholder=\"Department Not Selected\"   formControlName=\"DOCT_DEPT\">\n                   <option value=\"\">Select Department</option>\n                       <option \n                       *ngFor=\"let dd of Departments\"\n                       value=\"{{dd.Dept_Code}}\">\n                       {{dd.Dept}}\n                </option>\n                \n                </select>\n                </div>\n                </div>          \n              </div>\n        </card>\n    </div>\n  </form>\n  </div>\n\n  <modal #myModal [closeOnEscape]=\"false\" [closeOnOutsideClick]=\"false\">\n      <modal-header>\n        <h3>Select The Patient</h3>\n      </modal-header>\n      <modal-content>\n          <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-addon\">\n                  <i class=\"glyphicon glyphicon-search\"></i>\n                </div>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  name=\"searchString\"\n                  placeholder=\"Type to search...\"\n                  [(ngModel)]=\"searchString\"\n                />\n              </div>\n            </div>\n        <table class=\"table table-bordered table-hover\">\n          <thead>\n            <tr>\n              <th>Patient MRNO</th>\n              <th>Patient Name</th>\n              <th>Gender</th>\n              <th>Age</th>\n              <th>Mobile Number</th>\n              <th>Status</th>\n              <!-- <th>Actions</th> -->\n            </tr>\n          </thead>\n          <tbody>\n        <tr *ngFor=\"let item of All_Patients | filter : 'PatientMr_No' : searchString | paginate: { id: 'pager', itemsPerPage: pageSize, currentPage: pageNumber}; let index = index\" (dblclick)=\"getRowData(item,$event); closeModal(myModal);\">\n              <td>{{item.PatientMr_No}}</td>\n              <td>{{item.Patient_Name}}</td>                    \n              <td>{{item.Gender==\"M\"?\"Male\":\"Female\"}}</td>\n              <td>{{item.Age}}</td>\n              <td>{{item.Mobile}}</td>\n              <td>{{item.Status==\"A\"?\"Active\":\"InActive\"}}</td>\n           \n              <td style=\"display:none;\">{{item.DOB}}</td>\n              <td style=\"display:none;\">{{item.Marital_Status}}</td>              \n              <td style=\"display:none;\">{{item.Patient_Category}}</td>             \n              <td style=\"display:none;\">{{item.Blood_group}}</td>\n              <td style=\"display:none;\">{{item.Country}}</td>\n              <td style=\"display:none;\">{{item.State}}</td>\n              <td style=\"display:none;\">{{item.District}}</td>\n              <td style=\"display:none;\">{{item.City}}</td>\n              <td style=\"display:none;\">{{item.Pincode}}</td>\n              <td style=\"display:none;\">{{item.Address}}</td>\n              <td style=\"display: none;\">{{item.Aadhar_No}}</td>\n            </tr>\n\n          </tbody>\n        </table>\n        <div class=\"pagination-wrapper\">\n            <div class=\"form-group pages\">\n              <pagination-controls class=\"my-pagination\" id=\"pager\" (pageChange)=\"pageChanged($event)\" maxSize=\"9\" directionLinks=\"true\"\n                autoHide=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\"\n                screenReaderCurrentLabel=\"You're on page\">\n              </pagination-controls>\n            </div>\n            <div class=\"form-group options pages\">\n              <div class=\"input-group input-group-sm\">\n                <select class=\"form-control\" name=\"pageChangedName\" [(ngModel)]=\"pageSize\" (ngModelChange)=\"loadData()\">\n                  <option>1</option>\n                  <option>5</option>\n                  <option>10</option>\n                  <option>20</option>\n                  <option>50</option>\n                  <option>100</option>\n                  <option>200</option>\n                </select>\n                <span class=\"input-group-addon addon-right\">Per Page</span>\n              </div>\n            </div>\n          </div>\n      </modal-content>\n      <modal-footer>\n        <button class=\"btn btn-primary\" (click)=\"closeModal(myModal)\">close</button>\n      </modal-footer>\n    </modal>\n\n    <modal #doctModal [closeOnEscape]=\"false\" [closeOnOutsideClick]=\"false\">\n        <modal-header>\n          <h3>Select The Patient</h3>\n        </modal-header>\n        <modal-content>\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-addon\">\n                    <i class=\"glyphicon glyphicon-search\"></i>\n                  </div>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    name=\"searchString\"\n                    placeholder=\"Type to search...\"\n                    [(ngModel)]=\"searchString\"\n                  />\n                </div>\n              </div>\n          <table class=\"table table-bordered table-hover\">\n            <thead>\n              <tr>\n                <th>Doctor Code</th>\n                <th>Doctor Name</th>\n                <th>Department</th>              \n              </tr>\n            </thead>\n            <tbody>\n          <tr *ngFor=\"let item of All_Doctors | filter : 'DOCT_NAME' : searchString | paginate: { id: 'pager', itemsPerPage: pageSize, currentPage: pageNumber}; let index = index\" (dblclick)=\"getDoctData(item,$event); closeModal(doctModal);\">\n                <td>{{item.Doct_Code}}</td>\n                <td>{{item.Doct_Name}}</td> \n                <td>{{item.Doct_DeptName}}</td>                  \n                <td style=\"display:none;\">{{item.Doct_Dept}}</td>\n              </tr>\n  \n            </tbody>\n          </table>\n          <div class=\"pagination-wrapper\">\n              <div class=\"form-group pages\">\n                <pagination-controls class=\"my-pagination\" id=\"pager\" (pageChange)=\"pageChanged($event)\" maxSize=\"9\" directionLinks=\"true\"\n                  autoHide=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\"\n                  screenReaderCurrentLabel=\"You're on page\">\n                </pagination-controls>\n              </div>\n              <div class=\"form-group options pages\">\n                <div class=\"input-group input-group-sm\">\n                  <select class=\"form-control\" name=\"pageChangedName\" [(ngModel)]=\"pageSize\" (ngModelChange)=\"loadData()\">\n                    <option>1</option>\n                    <option>5</option>\n                    <option>10</option>\n                    <option>20</option>\n                    <option>50</option>\n                    <option>100</option>\n                    <option>200</option>\n                  </select>\n                  <span class=\"input-group-addon addon-right\">Per Page</span>\n                </div>\n              </div>\n            </div>\n        </modal-content>\n        <modal-footer>\n          <button class=\"btn btn-primary\" (click)=\"closeModal(doctModal)\">close</button>\n        </modal-footer>\n      </modal>"

/***/ }),

/***/ "../../../../../src/app/pages/transactions/consultation/consultation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row_Space {\n  padding-top: 3px; }\n\nbody {\n  background: #fff; }\n\n.bg-default {\n  background: linear-gradient(to top right, #999999, #b3b2b2);\n  background: -webkit-linear-gradient(to top right, #999999, #b3b2b2); }\n\n.bg-primary {\n  background: linear-gradient(to top right, #fca400, #ffd17c);\n  background: -webkit-linear-gradient(to top right, #fca400, #ffd17c); }\n\n.bg-success {\n  background: linear-gradient(to top right, #16be9a, #42e697);\n  background: -webkit-linear-gradient(to top right, #16be9a, #42e697); }\n\n.bg-danger {\n  background: linear-gradient(to top right, #fa5167, #fda09c);\n  background: -webkit-linear-gradient(to top right, #fa5167, #fda09c); }\n\n.bg-warning {\n  background: linear-gradient(to top right, #ff7403, #fac980);\n  background: -webkit-linear-gradient(to top right, #ff7403, #fac980); }\n\n.bg-info {\n  background: linear-gradient(to top right, #2cc3ff, #15f8bf);\n  background: -webkit-linear-gradient(to top right, #2cc3ff, #15f8bf); }\n\n.check-label,\n.radio-label {\n  margin-bottom: 20px; }\n\n.form-group > .form-control {\n  margin-bottom: 10px; }\n\n.form-group > .help-block {\n  margin-top: -10px; }\n\n.switch-group {\n  width: 50%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row; }\n  .switch-group .control-label {\n    width: 100%; }\n  .switch-group switch {\n    -ms-flex: 1;\n        flex: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/transactions/consultation/consultation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CardComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_global_service__ = __webpack_require__("../../../../../src/app/shared/services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_rest_service__ = __webpack_require__("../../../../../src/app/service/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_roots_root_component__ = __webpack_require__("../../../../../src/app/shared/roots/root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_animation_collapse_animate__ = __webpack_require__("../../../../../src/app/shared/animation/collapse-animate.ts");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var CardComponent = (function () {
    function CardComponent() {
        this.isCollapse = true;
        this.collapse = 'off';
    }
    CardComponent.prototype.collapseCard = function () {
        this.collapse === 'on' ? this.collapse = 'off' : this.collapse = 'on';
    };
    return CardComponent;
}());

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "cardTitle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], CardComponent.prototype, "isCollapse", void 0);
var ConsultationComponent = (function (_super) {
    __extends(ConsultationComponent, _super);
    function ConsultationComponent(fb, _globalService, rest) {
        var _this = _super.call(this, _globalService) || this;
        _this.fb = fb;
        _this._globalService = _globalService;
        _this.rest = rest;
        _this.BloodGroups = [
            { id: 'A+', name: 'A+' },
            { id: 'A-', name: 'A-' },
            { id: 'B+', name: 'B+' },
            { id: 'B-', name: 'B-' },
            { id: 'AB+', name: 'AB+' },
            { id: 'AB-', name: 'AB-' },
            { id: 'O+', name: 'O+' },
            { id: 'O-', name: 'O-' }
        ];
        _this.Pat_Categories = [];
        _this.All_Patients = [];
        _this.Departments = [];
        _this.All_Doctors = [];
        _this.Details = [];
        _this.pageSize = 5;
        _this.pageNumber = 1;
        _this.isCollapse = false;
        _this.submitted = false;
        _this.buttonName = "Save";
        _this.readonlyToggle = true;
        return _this;
    }
    ConsultationComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            PatientMr_No: [''],
            Patient_Name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            GENDER: "M",
            DOB: [''],
            Mobile: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            Patient_Category: [],
            Age: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            Blood_Group: [''],
            AADHAR_NO: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            DOCT_CODE: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            DOCT_NAME: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            DOCT_DEPT: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
        });
        this.getPatientCatg_Drdn();
        this.getDept_Drdn();
    };
    ConsultationComponent.prototype.closeModal = function (modal) {
        modal.close();
    };
    Object.defineProperty(ConsultationComponent.prototype, "f", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    ConsultationComponent.prototype.pageChanged = function (pN) {
        this.pageNumber = pN;
    };
    ConsultationComponent.prototype.getRowData = function (item, evt) {
        this.form.controls['PatientMr_No'].setValue(item.PatientMr_No);
        this.form.controls['Patient_Name'].setValue(item.Patient_Name);
        this.form.controls['GENDER'].setValue(item.Gender);
        this.form.controls['DOB'].setValue((item.DOB).split('T')[0]);
        this.form.controls['Mobile'].setValue(item.Mobile);
        this.form.controls['Patient_Category'].setValue(item.Patient_Category);
        this.form.controls['Blood_Group'].setValue(item.Blood_group);
        this.form.controls['Age'].setValue(item.Age);
        //this.form.controls['STATUS'].setValue(item.Status=="A"?true:false)
        this.form.controls['AADHAR_NO'].setValue(item.Aadhar_No);
    };
    ConsultationComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    ConsultationComponent.prototype.Load_Details = function (modal) {
        return __awaiter(this, void 0, void 0, function () {
            var mrno;
            return __generator(this, function (_a) {
                modal.open();
                mrno = this.form.value.PatientMr_No;
                this.get_Patients(mrno);
                return [2 /*return*/];
            });
        });
    };
    ConsultationComponent.prototype.get_Patients = function (mrno) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.rest.get_Patients(mrno).subscribe(function (data) {
                    _this.All_Patients = data;
                }, function (err) {
                    console.log(err.message);
                });
                return [2 /*return*/];
            });
        });
    };
    ConsultationComponent.prototype.getPatientCatg_Drdn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rest.getPatCatg_ForDropDown().subscribe(function (data) {
                            _this.Pat_Categories = data;
                            _this.form.controls['Patient_Category'].setValue(_this.Pat_Categories[0].Pat_CatCode);
                        }, function (err) {
                            console.log(err.message);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConsultationComponent.prototype.getDept_Drdn = function () {
        var _this = this;
        this.rest.getDept_DropDown().subscribe(function (data) {
            _this.Departments = data;
        }, function (err) {
            console.log(err.message);
        });
    };
    ConsultationComponent.prototype.getDoct_PopUp = function (doctModal) {
        var _this = this;
        doctModal.open();
        var Key = this.form.value.DOCT_CODE;
        this.rest.getDoctorsPopUp(Key).subscribe(function (data) {
            _this.All_Doctors = data;
        }, function (err) {
            console.log(err.message);
        });
    };
    ConsultationComponent.prototype.getDoctData = function (item, evt) {
        this.form.controls['DOCT_CODE'].setValue(item.Doct_Code);
        this.form.controls['DOCT_NAME'].setValue(item.Doct_Name);
        this.form.controls['DOCT_DEPT'].setValue(item.Doct_Dept);
    };
    ConsultationComponent.prototype.onSubmit = function () {
        if (this.buttonName == "Save") {
            this.save();
        }
        if (this.buttonName == "Update") {
            //this.update();
        }
    };
    ConsultationComponent.prototype.save = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.valid) {
            var d = this.form.value;
            //d.STATUS=d.STATUS==true?"A":"C";
            console.log(JSON.stringify(d));
            this.rest.Patient_Consultation(d).subscribe(function (data) {
                if (data != "" && data != null) {
                    _this.Details.push(data);
                    _this.alertMessage({
                        type: 'success',
                        title: 'Success',
                        value: 'Consultation Created.'
                    });
                    _this.clearForm();
                }
            }, function (error) {
                console.log(error.error.Message);
            });
        }
        (function (error) {
            console.log(error.error.Message);
        });
    };
    ConsultationComponent.prototype.clearForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.form.reset();
                this.form.controls["GENDER"].setValue("M");
                this.form.controls['Patient_Category'].setValue(this.Pat_Categories[0].Pat_CatCode);
                //this.form.controls["STATUS"].setValue(true);
                this.form.controls["Blood_Group"].setValue("");
                this.buttonName = 'Save';
                return [2 /*return*/];
            });
        });
    };
    return ConsultationComponent;
}(__WEBPACK_IMPORTED_MODULE_4__shared_roots_root_component__["a" /* RootComponent */]));
ConsultationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-consultation',
        template: __webpack_require__("../../../../../src/app/pages/transactions/consultation/consultation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/transactions/consultation/consultation.component.scss")],
        animations: [__WEBPACK_IMPORTED_MODULE_5__shared_animation_collapse_animate__["a" /* collapse */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_global_service__["a" /* GlobalService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_rest_service__["a" /* RestService */]) === "function" && _c || Object])
], ConsultationComponent);

var _a, _b, _c;
//# sourceMappingURL=consultation.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/transactions/patient-registration/patient-registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <form [formGroup]=\"form\" >\n    <div class=\"col-md-6\">   \n       <card cardTitle=\"Patient Details\" isCollapse=\"true\"> \n        <div class=\"form-group\">\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n          <label class=\"control-label\">MR Number</label>\n            </div>\n            <div class=\"col-md-8\">\n              \n              <input type=\"text\"  placeholder=\"MR Number\" style='text-transform: uppercase !important;' (change)=\"Load_Details(myModal);\" formControlName=\"PatientMr_No\" class=\"form-control\" />\n               \n          </div>           \n        </div>\n        <div class=\"row row_Space\">\n          <div class=\"col-md-4\">\n          <label class=\"control-label\">Name</label>\n          </div>\n          <div class=\"col-md-8\">\n            <select class=\"form-control\" style='width:25%;float:left;' (change)=\"setGenderBySalCode(this, $event)\" formControlName=\"Salutation\" [ngClass]=\"{ 'is-invalid': submitted && f.Salutation.errors }\">\n              <option value=\"\">Select</option>\n              <option *ngFor=\"let item of salutations\" value=\"{{item.Sal_Code}}\">\n                {{item.Sal_Desc}}\n              </option>\n            </select>\n            <input type=\"text\" placeholder=\"Patient Name\" style='width:75%;text-transform: uppercase !important;' formControlName=\"Patient_Name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.Patient_Name.errors }\" aria-multiline=\"true\"/>\n            <div *ngIf=\"f.Salutation.invalid && (f.Salutation.dirty || f.Salutation.touched) || (submitted && f.Salutation.errors)\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.Salutation.errors.required\" class='i-Del'>Salutation  is required</div>\n          </div>  \n            <div *ngIf=\"f.Patient_Name.invalid && (f.Patient_Name.dirty || f.Patient_Name.touched) || (submitted && f.Patient_Name.errors)\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.Patient_Name.errors.required\" class='i-Del'>Patient Name  is required</div>\n          </div>   \n          </div>\n        </div>\n        <div class=\"row row_Space\">\n          <div class=\"col-md-4\">\n          <label class=\"control-label\">Father/Husband</label>\n          </div>\n          <div class=\"col-md-8\">\n          <input type=\"text\" placeholder=\"Father / Husband Name\" style='text-transform: uppercase !important;'  formControlName=\"Guardian_Name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.Guardian_Name.errors }\" aria-multiline=\"true\"/>\n          <div *ngIf=\"f.Guardian_Name.invalid && (f.Guardian_Name.dirty || f.Guardian_Name.touched) || (submitted && f.Guardian_Name.errors)\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.Guardian_Name.errors.required\" class='i-Del'>Guardian Name  is required</div>\n          </div>   \n          </div>\n        </div>\n          <div class=\"row \" style=\"padding-top:10px; \">\n            <div class=\"col-md-4\">\n              <label class=\"control-lable\">Gender</label>\n            </div>\n            <div class=\"col-md-8\">                              \n              <div class=\"form-group\">\n                  <div class=\"col-md-4\">\n                    <input class=\"radio\" type=\"radio\" id=\"rbMale\" name=\"GENDER\" checked formControlName=\"GENDER\" value=\"M\">\n                    <label class=\"radio-label\" for=\"rbMale\">Male</label>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <input class=\"radio\" type=\"radio\" id=\"rbFemale\" name=\"GENDER\" formControlName=\"GENDER\" value=\"F\">\n                    <label class=\"radio-label\" for=\"rbFemale\">Female</label>\n                  </div>       \n                </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n            <label class=\"control-lable\">Date Of Birth</label>\n          </div>\n          <div class=\"col-md-8\">\n          <input type=\"date\"  formControlName=\"DOB\" (change)=\"calculateAgeByDOB($event.target.value)\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.DOB.errors }\" />\n            </div>\n          </div>\n\n          <div class=\"row\" style=\"padding-top:10px; \">\n              <div class=\"col-md-4\">\n                <label class=\"control-lable\">Marital Status</label>\n              </div>\n              <div class=\"col-md-8\">                              \n                <div class=\"form-group\">\n                    <div class=\"col-md-3\">\n                      <input class=\"radio\" type=\"radio\" id=\"rbMarried\" name=\"Marital_Status\" checked formControlName=\"Marital_Status\" value=\"M\">\n                      <label class=\"radio-label\" for=\"rbMarried\">Maried</label>\n                    </div>\n                    <div class=\"col-md-3\">\n                      <input class=\"radio\" type=\"radio\" id=\"rbSingle\" name=\"Marital_Status\" formControlName=\"Marital_Status\" value=\"S\">\n                      <label class=\"radio-label\" for=\"rbSingle\">Single</label>\n                    </div> \n                    <div class=\"col-md-2\">\n                        <input class=\"radio\" type=\"radio\" id=\"rbWidow\" name=\"Marital_Status\" formControlName=\"Marital_Status\" value=\"W\">\n                        <label class=\"radio-label\" for=\"rbWidow\">Widow</label>\n                      </div>         \n                  </div>\n              </div>\n            </div>\n           \n\n         <div class=\"row row_Space\">\n           <div class=\"col-md-4\">\n        <label class=\"control-lable\">Patient Category</label>\n        </div>\n        <div class=\"col-md-8\">\n        <select class=\"form-control\" placeholder=\"Category Not Selected\" readonly=\"readonly\"  formControlName=\"Patient_Category\">\n              <option \n              *ngFor=\"let dd of Pat_Categories\"\n              value=\"{{dd.Pat_CatCode}}\">\n              {{dd.Pat_CatName}}\n     </option>\n     \n  </select>\n  </div>\n  </div>\n  <div class=\"row row_Space\">\n      <div class=\"col-md-4\">\n      <label class=\"control-label\">Age</label>\n      </div>\n      <div class=\"col-md-8\">\n      <input type=\"text\" placeholder=\"Enter Age\"  formControlName=\"Age\" class=\"form-control\"  maxlength=\"8\" (keypress)=\"numberOnly($event)\" (change)=\"setDOBByAge($event.target.value)\" [ngClass]=\"{ 'is-invalid': submitted && f.Age.errors }\" aria-multiline=\"true\"/>\n      <div *ngIf=\"f.Age.invalid && (f.Age.dirty || f.Age.touched) || (submitted && f.Age.errors)\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.Age.errors.required\" class=\"i-Del\">Age is Required</div>\n      </div>   \n      </div>\n    </div>\n    \n    <div class=\"row row_Space\">\n        <div class=\"col-md-4\">\n     <label class=\"control-lable\">Blood Group</label>\n     </div>\n     <div class=\"col-md-8\">\n     <select class=\"form-control\" placeholder=\"BloodGroup Not Selected\" formControlName=\"Blood_Group\">\n       <option value=\"\">Select Blood Group</option>\n           <option \n           *ngFor=\"let dd of BloodGroups\"\n           value=\"{{dd.id}}\">\n           {{dd.name}}\n  </option>\n</select>\n</div>\n</div>\n<div class=\"row row_Space\">\n    <div class=\"col-md-4\">\n    <label class=\"control-label\">Mobile No</label>\n    </div>\n    <div class=\"col-md-8\">\n    <input type=\"text\" placeholder=\"Mobile Number\"  formControlName=\"Mobile\" class=\"form-control\"  maxlength=\"10\" (keypress)=\"numberOnly($event)\"  [ngClass]=\"{ 'is-invalid': submitted && f.Mobile.errors }\" aria-multiline=\"true\"/>\n    <div *ngIf=\"f.Mobile.invalid && (f.Mobile.dirty || f.Mobile.touched) || (submitted && f.Mobile.errors)\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.Mobile.errors.required\" class='i-Del'>Mobile Number is required</div>\n        <div *ngIf=\"f.Mobile.errors.minlength\" class='i-Del'>Number should be 10 digits</div>\n    </div>  \n    </div>\n  </div>\n\n  <div class=\"row row_Space\">\n    <div class=\"col-md-4\">\n        <label class=\"control-label\">Aadhar No</label>\n          </div>\n          <div class=\"col-md-8\">\n        <input type=\"text\"  placeholder=\"Aadhar Number\"  formControlName=\"AADHAR_NO\" class=\"form-control\" maxlength=\"12\" (keypress)=\"numberOnly($event)\" [ngClass]=\"{ 'is-invalid': submitted && f.AADHAR_NO.errors }\" />\n        <div *ngIf=\"f.AADHAR_NO.invalid && (f.AADHAR_NO.dirty || f.AADHAR_NO.touched) || (submitted && f.AADHAR_NO.errors)\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.AADHAR_NO.errors.required\" class='i-Del'>Aadhar Number is required</div>\n          <div *ngIf=\"f.AADHAR_NO.errors.minlength\" class='i-Del'>Number should be 12 digits</div>\n      </div>\n        </div>     \n</div>\n        </div>\n        \n  \n     </card>    \n    </div>  \n  \n  <div class=\"col-md-6\">   \n    <card cardTitle=\"Doctor Details\" isCollapse=\"true\"> \n        <div class=\"form-group\">\n            <div class=\"row row_Space\">\n                <div class=\"col-md-4\">\n             <label class=\"control-lable\">Doctor</label>\n             </div>\n             <div class=\"col-md-8\">\n             <select class=\"form-control\" placeholder=\"Select Doctor\" (change)=\"setDepartmentByDoc($event)\" formControlName=\"DoctCode\" [ngClass]=\"{ 'is-invalid': submitted && f.DoctCode.errors }\">\n              <option value=\"\">Select Doctor</option>\n              <option *ngFor=\"let dd of doctors\"\n                   value=\"{{dd.Doct_Code}}\">{{dd.Doct_Name}}</option>\n            </select>\n        <div *ngIf=\"f.DoctCode.invalid && (f.DoctCode.dirty || f.DoctCode.touched) || (submitted && f.DoctCode.errors)\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.DoctCode.errors.required\" class=\"i-Del\">Doctor is Required</div>\n      </div>   \n        </div>\n        </div>\n        <div class=\"row row_Space\">\n            <div class=\"col-md-4\">\n         <label class=\"control-lable\">Department</label>\n         </div>\n         <div class=\"col-md-8\">\n            <input type=\"text\" placeholder=\"Dept Code\" style='display:none'  formControlName=\"DeptCode\" class=\"form-control\" aria-multiline=\"true\"/>  \n          <input type=\"text\" placeholder=\"Department\" readonly=\"readonly\"   formControlName=\"Department\" class=\"form-control\" aria-multiline=\"true\"/>\n    </div>\n    </div>\n      </div>\n    </card>  \n    <card cardTitle=\"Patient Address Details\" isCollapse=\"true\"> \n       <div class=\"form-group\">\n          <div class=\"row row_Space\">\n              <div class=\"col-md-4\">\n           <label class=\"control-lable\">Country</label>\n           </div>\n           <div class=\"col-md-8\">\n           <select class=\"form-control\" placeholder=\"Country Not Selected\" formControlName=\"Country\" [ngClass]=\"{ 'is-invalid': submitted && f.Country.errors }\" >\n             <option value=\"\">Select Country</option>\n                 <option \n                 *ngFor=\"let dd of Countries\"\n                 value=\"{{dd.Country_Code}}\">\n                 {{dd.Country}}\n        </option>\n      </select>\n      <div *ngIf=\"f.Country.invalid && (f.Country.dirty || f.Country.touched) || (submitted && f.Country.errors)\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.Country.errors.required\" class=\"i-Del\">Country is Required</div>\n    </div>   \n      </div>\n      </div>\n      <div class=\"row row_Space\">\n          <div class=\"col-md-4\">\n       <label class=\"control-lable\">State</label>\n       </div>\n       <div class=\"col-md-8\">\n       <select class=\"form-control\" placeholder=\"State Not Selected\" formControlName=\"State\" [ngClass]=\"{ 'is-invalid': submitted && f.State.errors }\">\n        <option value=\"\">Select State</option>     \n        <option \n             *ngFor=\"let dd of States\"\n             value=\"{{dd.State_Code}}\">\n             {{dd.State}}\n    </option>\n  </select>\n  <div *ngIf=\"f.State.invalid && (f.State.dirty || f.State.touched) || (submitted && f.State.errors)\" class=\"invalid-feedback\">\n    <div *ngIf=\"f.State.errors.required\" class=\"i-Del\">State is Required</div>\n</div>   \n  </div>\n  </div>\n  <div class=\"row row_Space\">\n      <div class=\"col-md-4\">\n   <label class=\"control-lable\">District</label>\n   </div>\n   <div class=\"col-md-8\">\n   <select class=\"form-control\" placeholder=\"District Not Selected\" formControlName=\"District\" [ngClass]=\"{ 'is-invalid': submitted && f.District.errors }\">\n     <option value=\"\">Select District</option>\n         <option \n         *ngFor=\"let dd of Districts\"\n         value=\"{{dd.Dist_Code}}\">\n         {{dd.Dist}}\n</option>\n</select>\n<div *ngIf=\"f.District.invalid && (f.District.dirty || f.District.touched) || (submitted && f.District.errors)\" class=\"invalid-feedback\">\n  <div *ngIf=\"f.District.errors.required\" class=\"i-Del\">District is Required</div>\n</div> \n</div>\n</div>\n<div class=\"row row_Space\">\n    <div class=\"col-md-4\">\n <label class=\"control-lable\">City</label>\n </div>\n <div class=\"col-md-8\">\n   <div style='width:50%;float:left;' >\n <select class=\"form-control\" placeholder=\"City Not Selected\" formControlName=\"City\" [ngClass]=\"{ 'is-invalid': submitted && f.City.errors }\">\n   <option value=\"\">Select City</option>\n       <option \n       *ngFor=\"let dd of Cities\"\n       value=\"{{dd.City_Code}}\">\n       {{dd.City}}\n</option>\n</select>\n<div *ngIf=\"f.City.invalid && (f.City.dirty || f.City.touched) || (submitted && f.City.errors)\" class=\"invalid-feedback\">\n  <div *ngIf=\"f.City.errors.required\" class=\"i-Del\">City is Required</div>\n</div> \n</div>\n\n<div style='width:45%;float:right;'>\n<input type=\"text\" placeholder=\"Pincode\"  formControlName=\"PinCode\" class=\"form-control\"  maxlength=\"6\" (keypress)=\"numberOnly($event)\" [ngClass]=\"{ 'is-invalid': submitted && f.PinCode.errors }\" aria-multiline=\"true\"/>\n    <div *ngIf=\"f.PinCode.invalid && (f.PinCode.dirty || f.PinCode.touched) || (submitted && f.PinCode.errors)\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.PinCode.errors.required\" class='i-Del'>Pincode is required</div>\n        <div *ngIf=\"f.PinCode.errors.minlength\" class='i-Del'>Pincode should be 6 digits</div>\n    </div>\n  </div> \n</div>\n</div>\n  \n\n    <div class=\"row row_Space\">\n      <div class=\"col-md-4\">\n      <label class=\"control-label\">Address</label>\n      </div>\n      <div class=\"col-md-8\">\n      <textarea  formControlName=\"Address\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.Address.errors }\" rows=\"2\" cols=\"8\"></textarea>\n      <div *ngIf=\"f.Address.invalid && (f.Address.dirty || f.Address.touched) || (submitted && f.Address.errors)\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.Address.errors.required\" class='i-Del'>Address is Required</div>\n      </div>   \n      </div>\n    </div>\n    <div class=\"switch-group\" style=\"padding-top:10px;\">\n      <label class=\"control-label\">Status</label>\n      <label class=\"switch\">\n        <input type=\"checkbox\" formControlName=\"STATUS\">\n        <span class=\"slider round\" ></span>\n      </label>\n    </div>  \n    <div class=\"row row_Space\">\n        <div class=\"form-group\">\n            <button class=\"btn btn-success\" (click)=\"onSubmit()\">{{buttonName}}</button>\n          <button class=\"btn btn-warning\" (click)=\"clearForm()\">Clear</button>\n  \n        </div>\n    </div>\n        </div>\n      </card>\n      </div>\n    </form>\n  </div>   \n\n  <modal #myModal [closeOnEscape]=\"false\" [closeOnOutsideClick]=\"false\">\n      <modal-header>\n        <h3>Select The Patient</h3>\n      </modal-header>\n      <modal-content>\n          <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-addon\">\n                  <i class=\"glyphicon glyphicon-search\"></i>\n                </div>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  name=\"searchString\"\n                  placeholder=\"Type to search...\"\n                  [(ngModel)]=\"searchString\"\n                />\n              </div>\n            </div>\n        <table class=\"table table-bordered table-hover\">\n          <thead>\n            <tr>\n              <th>Patient MRNO</th>\n              <th>Patient Name</th>\n              <th>Gender</th>\n              <th>Age</th>\n              <th>Mobile Number</th>\n              <th>Status</th>\n              <!-- <th>Actions</th> -->\n            </tr>\n          </thead>\n          <tbody>\n        <tr *ngFor=\"let item of All_Patients | filter : 'PatientMr_No' : searchString | paginate: { id: 'pager', itemsPerPage: pageSize, currentPage: pageNumber}; let index = index\" (dblclick)=\"getRowData(item,$event); closeModal(myModal);\">\n              <td>{{item.PatientMr_No}}</td>\n              <td>{{item.Patient_Name}}</td>                    \n              <td>{{item.Gender==\"M\"?\"Male\":\"Female\"}}</td>\n              <td>{{item.Age}}</td>\n              <td>{{item.Mobile}}</td>\n              <td>{{item.Status==\"A\"?\"Active\":\"InActive\"}}</td>\n              <!-- <td>\n                  <i  class=\"fa fa-edit fa-fw i-Edit\" (click)=\"getRowData(item,$event)\" data-toggle=\"tooltip\" title=\"Edit\"></i>\n                  <i  class=\"fa fa-trash fa-fw i-Del\" (click)=\"update();\" data-toggle=\"tooltip\" title=\"Delete\"></i>\n                </td> -->\n              <td style=\"display:none;\">{{item.DOB}}</td>\n              <td style=\"display:none;\">{{item.Marital_Status}}</td>              \n              <td style=\"display:none;\">{{item.Patient_Category}}</td>             \n              <td style=\"display:none;\">{{item.Blood_group}}</td>\n              <td style=\"display:none;\">{{item.Country}}</td>\n              <td style=\"display:none;\">{{item.State}}</td>\n              <td style=\"display:none;\">{{item.District}}</td>\n              <td style=\"display:none;\">{{item.City}}</td>\n              <td style=\"display:none;\">{{item.Pincode}}</td>\n              <td style=\"display:none;\">{{item.Address}}</td>\n              <td style=\"display: none;\">{{item.Aadhar_No}}</td>\n            </tr>\n\n          </tbody>\n        </table>\n        <div class=\"pagination-wrapper\">\n            <div class=\"form-group pages\">\n              <pagination-controls class=\"my-pagination\" id=\"pager\" (pageChange)=\"pageChanged($event)\" maxSize=\"9\" directionLinks=\"true\"\n                autoHide=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\"\n                screenReaderCurrentLabel=\"You're on page\">\n              </pagination-controls>\n            </div>\n            <div class=\"form-group options pages\">\n              <div class=\"input-group input-group-sm\">\n                <select class=\"form-control\" name=\"pageChangedName\" [(ngModel)]=\"pageSize\" (ngModelChange)=\"loadData()\">\n                  <option>1</option>\n                  <option>5</option>\n                  <option>10</option>\n                  <option>20</option>\n                  <option>50</option>\n                  <option>100</option>\n                  <option>200</option>\n                </select>\n                <span class=\"input-group-addon addon-right\">Per Page</span>\n              </div>\n            </div>\n          </div>\n      </modal-content>\n      <modal-footer>\n        <button class=\"btn btn-primary\" (click)=\"closeModal(myModal)\">close</button>\n      </modal-footer>\n    </modal>\n  \n "

/***/ }),

/***/ "../../../../../src/app/pages/transactions/patient-registration/patient-registration.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row_Space {\n  padding-top: 3px; }\n\nbody {\n  background: #fff; }\n\n.bg-default {\n  background: linear-gradient(to top right, #999999, #b3b2b2);\n  background: -webkit-linear-gradient(to top right, #999999, #b3b2b2); }\n\n.bg-primary {\n  background: linear-gradient(to top right, #fca400, #ffd17c);\n  background: -webkit-linear-gradient(to top right, #fca400, #ffd17c); }\n\n.bg-success {\n  background: linear-gradient(to top right, #16be9a, #42e697);\n  background: -webkit-linear-gradient(to top right, #16be9a, #42e697); }\n\n.bg-danger {\n  background: linear-gradient(to top right, #fa5167, #fda09c);\n  background: -webkit-linear-gradient(to top right, #fa5167, #fda09c); }\n\n.bg-warning {\n  background: linear-gradient(to top right, #ff7403, #fac980);\n  background: -webkit-linear-gradient(to top right, #ff7403, #fac980); }\n\n.bg-info {\n  background: linear-gradient(to top right, #2cc3ff, #15f8bf);\n  background: -webkit-linear-gradient(to top right, #2cc3ff, #15f8bf); }\n\n.check-label,\n.radio-label {\n  margin-bottom: 20px; }\n\n.form-group > .form-control {\n  margin-bottom: 10px; }\n\n.form-group > .help-block {\n  margin-top: -10px; }\n\n.switch-group {\n  width: 50%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row; }\n  .switch-group .control-label {\n    width: 100%; }\n  .switch-group switch {\n    -ms-flex: 1;\n        flex: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/transactions/patient-registration/patient-registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CardComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientRegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_global_service__ = __webpack_require__("../../../../../src/app/shared/services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_rest_service__ = __webpack_require__("../../../../../src/app/service/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_roots_root_component__ = __webpack_require__("../../../../../src/app/shared/roots/root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_animation_collapse_animate__ = __webpack_require__("../../../../../src/app/shared/animation/collapse-animate.ts");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var CardComponent = (function () {
    function CardComponent() {
        this.isCollapse = true;
        this.collapse = 'off';
    }
    CardComponent.prototype.collapseCard = function () {
        this.collapse === 'on' ? this.collapse = 'off' : this.collapse = 'on';
    };
    return CardComponent;
}());

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "cardTitle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], CardComponent.prototype, "isCollapse", void 0);
var PatientRegistrationComponent = (function (_super) {
    __extends(PatientRegistrationComponent, _super);
    function PatientRegistrationComponent(fb, _globalService, rest) {
        var _this = _super.call(this, _globalService) || this;
        _this.fb = fb;
        _this._globalService = _globalService;
        _this.rest = rest;
        _this.BloodGroups = [
            { id: 'A+', name: 'A+' },
            { id: 'A-', name: 'A-' },
            { id: 'B+', name: 'B+' },
            { id: 'B-', name: 'B-' },
            { id: 'AB+', name: 'AB+' },
            { id: 'AB-', name: 'AB-' },
            { id: 'O+', name: 'O+' },
            { id: 'O-', name: 'O-' }
        ];
        _this.Details = [];
        _this.Cities = [];
        _this.Districts = [];
        _this.Countries = [];
        _this.Pat_Categories = [];
        _this.States = [];
        _this.All_Patients = [];
        _this.salutations = [];
        _this.doctors = [];
        _this.pageSize = 5;
        _this.pageNumber = 1;
        _this.isCollapse = false;
        _this.submitted = false;
        _this.buttonName = "Save";
        _this.readonlyToggle = true;
        return _this;
    }
    PatientRegistrationComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            Salutation: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            PatientMr_No: [''],
            Patient_Name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            Guardian_Name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            GENDER: ['M'],
            DOB: [''],
            Marital_Status: "M",
            Mobile: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(10)]],
            Patient_Category: [],
            Age: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            Blood_Group: [''],
            STATUS: true,
            Address: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            PinCode: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(6)]],
            Country: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            State: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            District: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            City: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            AADHAR_NO: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(12)]],
            DoctCode: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            Department: [''],
            DeptCode: ['']
        });
        this.getCountry_Drdn();
        this.getState_Drdn();
        this.getCity_Drdn();
        this.getDist_Drdn();
        this.getPatientCatg_Drdn();
        this.getSalutation();
        this.getDoctors();
    };
    PatientRegistrationComponent.prototype.calculateAgeByDOB = function (dob) {
        var today = new Date();
        var dob1 = new Date(dob);
        if (dob1.getFullYear() > 1800) {
            if (today.getTime() >= dob1.getTime()) {
                var timeDiff = Math.abs(today.getTime() - dob1.getTime());
                var totalDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                var totalYears = Math.floor(totalDays / 365.2425);
                var totalMonths = Math.floor((totalDays % 365.2425) / 30);
                var remainingDays = Math.ceil((totalDays % 365.2425) % 30);
                this.form.controls['Age'].setValue(totalYears + "." + totalMonths + "." + remainingDays); //
            }
        }
    };
    PatientRegistrationComponent.prototype.setDOBByAge = function (age) {
        var currage = age;
        var agearray;
        var numage;
        var todate = new Date().toISOString().slice(0, 10);
        var todatearr = todate.split("-");
        var dob = new Date().toISOString().slice(0, 10);
        var dobarr = dob.includes('/') ? dob.split("/") : dob.split("-");
        if (currage != "") {
            agearray = currage.split(" ");
            numage = agearray[0];
        }
        currage = parseInt(todatearr[0]) - parseInt(numage);
        if (currage != "") {
            dob = currage + "-" + dobarr[1] + "-" + dobarr[2];
            this.form.controls['DOB'].setValue(dob);
            this.form.controls['Age'].setValue(numage + ".0.0"); //
        }
    };
    PatientRegistrationComponent.prototype.getDoctors = function () {
        var _this = this;
        this.rest.getDoctors().subscribe(function (data) {
            _this.doctors = data;
        });
    };
    PatientRegistrationComponent.prototype.setDepartmentByDoc = function (event) {
        this.form.controls["Department"].setValue((this.doctors.filter(function (x) { return x.Doct_Code == event.target.value; }))[0].Doct_DeptName);
        this.form.controls["DeptCode"].setValue((this.doctors.filter(function (x) { return x.Doct_Code == event.target.value; }))[0].Doct_Dept);
    };
    PatientRegistrationComponent.prototype.closeModal = function (modal) {
        modal.close();
    };
    Object.defineProperty(PatientRegistrationComponent.prototype, "f", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    PatientRegistrationComponent.prototype.pageChanged = function (pN) {
        this.pageNumber = pN;
    };
    PatientRegistrationComponent.prototype.Load_Details = function (modal) {
        return __awaiter(this, void 0, void 0, function () {
            var mrno;
            return __generator(this, function (_a) {
                modal.open();
                mrno = this.form.value.PatientMr_No;
                this.get_Patients(mrno);
                return [2 /*return*/];
            });
        });
    };
    PatientRegistrationComponent.prototype.get_Patients = function (mrno) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.rest.get_Patients(mrno).subscribe(function (data) {
                    _this.All_Patients = data;
                }, function (err) {
                    console.log(err.message);
                });
                return [2 /*return*/];
            });
        });
    };
    PatientRegistrationComponent.prototype.getRowData = function (item, evt) {
        this.form.controls['Salutation'].setValue(item.Salutation);
        this.form.controls['PatientMr_No'].setValue(item.PatientMr_No);
        this.form.controls['Patient_Name'].setValue(item.Patient_Name);
        this.form.controls['Guardian_Name'].setValue(item.Guardian_Name);
        this.form.controls['GENDER'].setValue(item.Gender);
        this.form.controls['DOB'].setValue((item.DOB).split('T')[0]);
        this.form.controls['Marital_Status'].setValue(item.Marital_Status);
        this.form.controls['Mobile'].setValue(item.Mobile);
        this.form.controls['Patient_Category'].setValue(item.Patient_Category);
        this.form.controls['Blood_Group'].setValue(item.Blood_group);
        this.form.controls['Age'].setValue(item.Age);
        this.form.controls['Country'].setValue(item.Country);
        this.form.controls['State'].setValue(item.State);
        this.form.controls['City'].setValue(item.City);
        this.form.controls['District'].setValue(item.District);
        this.form.controls['Address'].setValue(item.Address);
        this.form.controls['PinCode'].setValue(item.Pincode);
        this.form.controls['STATUS'].setValue(item.Status == "A" ? true : false);
        this.form.controls['AADHAR_NO'].setValue(item.Aadhar_No);
        this.form.controls['DoctCode'].setValue(item.DoctCode);
        this.form.controls['DeptCode'].setValue(item.DeptCode);
        this.form.controls['Department'].setValue(item.Department);
        this.buttonName = 'Update';
    };
    PatientRegistrationComponent.prototype.getCity_Drdn = function () {
        var _this = this;
        this.rest.getCity_DropDown().subscribe(function (data) {
            _this.Cities = data;
        }, function (err) {
            console.log(err.message);
        });
    };
    PatientRegistrationComponent.prototype.getDist_Drdn = function () {
        var _this = this;
        this.rest.getDistrict_DropDown().subscribe(function (data) {
            _this.Districts = data;
        }, function (err) {
            console.log(err.message);
        });
    };
    PatientRegistrationComponent.prototype.getCountry_Drdn = function () {
        var _this = this;
        this.rest.getCountry_DropDown().subscribe(function (data) {
            _this.Countries = data;
        }, function (err) {
            console.log(err.message);
        });
    };
    PatientRegistrationComponent.prototype.getSalutation = function () {
        var _this = this;
        this.rest.getSalutation().subscribe(function (data) {
            _this.salutations = data;
        });
    };
    PatientRegistrationComponent.prototype.getPatientCatg_Drdn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rest.getPatCatg_ForDropDown().subscribe(function (data) {
                            _this.Pat_Categories = data;
                            _this.form.controls['Patient_Category'].setValue(_this.Pat_Categories[0].Pat_CatCode);
                        }, function (err) {
                            console.log(err.message);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PatientRegistrationComponent.prototype.getState_Drdn = function () {
        var _this = this;
        this.rest.getState_DropDown().subscribe(function (data) {
            _this.States = data;
        }, function (err) {
            console.log(err.message);
        });
    };
    PatientRegistrationComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode == 46)
            return true;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    PatientRegistrationComponent.prototype.onSubmit = function () {
        if (this.buttonName == "Save")
            this.save();
        if (this.buttonName == "Update")
            this.update();
    };
    PatientRegistrationComponent.prototype.save = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.valid) {
            var d = this.form.value;
            d.STATUS = d.STATUS == true ? "A" : "C";
            //d.Patient_Category="08";
            console.log(JSON.stringify(d));
            this.rest.Patient_Registration(d).subscribe(function (data) {
                if (data != "" && data != null) {
                    _this.Details.push(data);
                    _this.alertMessage({
                        type: 'success',
                        title: 'Success',
                        value: 'Patient Registered.'
                    });
                    _this.clearForm();
                }
            }, function (error) {
                console.log(error.error.Message);
            });
        }
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
    };
    PatientRegistrationComponent.prototype.update = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.valid) {
            var dates = this.form.value;
            dates.STATUS = dates.STATUS == true ? "A" : "I";
            console.log(JSON.stringify(dates));
            this.rest.Update_Patient(this.form.value.PatientMr_No, dates).subscribe(function (data) {
                if (data != "" && data != null) {
                    _this.Details.push(data);
                    _this.alertMessage({
                        type: 'success',
                        title: 'Success',
                        value: 'patient Details Updated.'
                    });
                    _this.clearForm();
                }
            }, function (error) {
                console.log(error.error.Message);
            });
        }
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
    };
    PatientRegistrationComponent.prototype.setGenderBySalCode = function (item, event) {
        if (event.target.value != "") {
            this.form.controls["GENDER"].setValue((this.salutations.filter(function (x) { return x.Sal_Code == event.target.value; }))[0].Sal_Sex.trim());
        }
        else
            this.form.controls["GENDER"].setValue("");
    };
    PatientRegistrationComponent.prototype.clearForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.form.reset();
                this.form.controls['Marital_Status'].setValue("M");
                this.form.controls["GENDER"].setValue("M");
                //this.form.controls["Patient_Category"].setValue("09");
                this.form.controls['Patient_Category'].setValue(this.Pat_Categories[0].Pat_CatCode);
                this.form.controls["STATUS"].setValue(true);
                this.form.controls["Blood_Group"].setValue("");
                this.form.controls["Country"].setValue("");
                this.form.controls["State"].setValue("");
                this.form.controls["District"].setValue("");
                this.form.controls["City"].setValue("");
                this.form.controls["Salutation"].setValue("");
                this.form.controls["DoctCode"].setValue("");
                this.form.controls["Department"].setValue("");
                this.buttonName = 'Save';
                this.submitted = false;
                return [2 /*return*/];
            });
        });
    };
    return PatientRegistrationComponent;
}(__WEBPACK_IMPORTED_MODULE_4__shared_roots_root_component__["a" /* RootComponent */]));
PatientRegistrationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-patient-registration',
        template: __webpack_require__("../../../../../src/app/pages/transactions/patient-registration/patient-registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/transactions/patient-registration/patient-registration.component.scss")],
        animations: [__WEBPACK_IMPORTED_MODULE_5__shared_animation_collapse_animate__["a" /* collapse */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_global_service__["a" /* GlobalService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_rest_service__["a" /* RestService */]) === "function" && _c || Object])
], PatientRegistrationComponent);

var _a, _b, _c;
//# sourceMappingURL=patient-registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/transactions/patient-report/patient-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"report col-sm-12 col-md-12 col-lg-12\">\n  \n      <div class=\"row table-responsive\">\n        <table border=\"2\" id=\"tbl_PatientReport\" class=\"table table-bordered\">\n          <thead>\n            <tr>\n              <th>S.<br/>No</th>\n              <th>Patient Name</th>\n              <th>S/o, W/o</th>\n              <th>Address</th>\n              <th>Age</th>\n              <th>Sex</th>\n              <th>Date of Pre<br/>-op Screening</th>\n              <th>Date of Surgery</th>\n              <th>Surgery Procedure</th>\n              <th>RE</th>              \n              <th>LE</th>\n              <th>Place of<br/> Surgery</th>\n              <th>Under Whose<br/>auspices Name<br/> of NGO</th>\n              <th>Date of 1<sup>st</sup><br/> Post of Follow up</th>\n              <th>Date of 2<sup>nd</sup><br/> Post of Follow up</th>\n              <th>Final outcome of<br /> the surgery at <br/>the 4 week</th>\n              <th>Spctacles<br/> given or not</th>\n              <th>Remarks</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let data of reportData; let i=index\">\n              <td>{{i+1}}</td>\n              <td>{{data.userGroup.Patient_Name|uppercase}}</td>\n              <td>{{data.userGroup.Guarding_Name|uppercase}}</td>\n              <td>{{data.userGroup.Address}}</td>\n              <td>{{data.userGroup.Age}}</td>\n              <td>{{data.userGroup.Gender==\"M\"?\"Male\":\"Female\"}}</td>\n              <td>{{(data.preOperativeGroup.SCREENING_DATE!=\"0001-01-01T00:00:00\"?(data.preOperativeGroup.SCREENING_DATE).split('T')[0]:\"\") | date}}</td>\n              <td>{{(data.operationGroup.OPERATION_DATE!=\"0001-01-01T00:00:00\"?(data.operationGroup.OPERATION_DATE).split('T')[0]:\"\") | date}}</td>\n              <td>{{data.operationGroup.OPERATION_TYPE}}</td>              \n              <td>{{data.operationGroup.VA_DISCHARGE==\"RE\"?\"RE\":\"\"}}</td>\n              <td>{{data.operationGroup.VA_DISCHARGE==\"LE\"?\"LE\":\"\"}}</td>\n              <td>{{data.operationGroup.OPERATION_PLACE}}</td>\n              <td>PVRI</td>\n              <td>{{(data.followUpGroup.FOLLOW_UP_DATE!=\"0001-01-01T00:00:00\"?(data.followUpGroup.FOLLOW_UP_DATE).split('T')[0]:\"\") | date}}</td>\n              <td>{{(data.followUp2Group.FOLLOW_UP_DATE2!=\"0001-01-01T00:00:00\"?(data.followUp2Group.FOLLOW_UP_DATE2).split('T')[0]:\"\") | date}}</td>\n              <td>{{data.followUpGroup.FINAL_OUTCOME}}</td>\n              <td>{{data.operationGroup.SPECTACLES==\"Y\"?\"Yes\":\"No\"}}</td>\n              <td></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/transactions/patient-report/patient-report.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".report * {\n  font-size: 10px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/transactions/patient-report/patient-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_rest_service__ = __webpack_require__("../../../../../src/app/service/rest.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PatientReportComponent = (function () {
    function PatientReportComponent(_rest) {
        this._rest = _rest;
        this.reportData = [];
    }
    PatientReportComponent.prototype.ngOnInit = function () {
        this.getPatientDetails();
    };
    PatientReportComponent.prototype.getPatientDetails = function () {
        var _this = this;
        this._rest.getPatientDetails().subscribe(function (data) {
            _this.reportData = data;
        });
    };
    return PatientReportComponent;
}());
PatientReportComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-patient-report',
        template: __webpack_require__("../../../../../src/app/pages/transactions/patient-report/patient-report.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/transactions/patient-report/patient-report.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_rest_service__["a" /* RestService */]) === "function" && _a || Object])
], PatientReportComponent);

var _a;
//# sourceMappingURL=patient-report.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/transactions/transactions.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsModule", function() { return TransactionsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_select__ = __webpack_require__("../../../../ng2-select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_modal__ = __webpack_require__("../../../../ngx-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__camp_requirements_camp_requirements_component__ = __webpack_require__("../../../../../src/app/pages/transactions/camp-requirements/camp-requirements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__patient_registration_patient_registration_component__ = __webpack_require__("../../../../../src/app/pages/transactions/patient-registration/patient-registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__form_form_module__ = __webpack_require__("../../../../../src/app/pages/form/form.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__catract_record_catract_record_component__ = __webpack_require__("../../../../../src/app/pages/transactions/catract-record/catract-record.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__consultation_consultation_component__ = __webpack_require__("../../../../../src/app/pages/transactions/consultation/consultation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__patient_report_patient_report_component__ = __webpack_require__("../../../../../src/app/pages/transactions/patient-report/patient-report.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import {NgDatepickerModule} from 'ng2-datepicker';








//import { TransactionsRoutingModule } from './transactions-routing.module';








var routes = [
    {
        path: '',
        //component:TransactionsModule,
        children: [
            { path: '', redirectTo: 'HospitalPreferredDates', pathMatch: 'full' },
            { path: 'Camp-Requirements', component: __WEBPACK_IMPORTED_MODULE_10__camp_requirements_camp_requirements_component__["a" /* CampRequirementsComponent */] },
            { path: 'Registration', component: __WEBPACK_IMPORTED_MODULE_12__patient_registration_patient_registration_component__["a" /* PatientRegistrationComponent */] },
            { path: 'CatractRecord', component: __WEBPACK_IMPORTED_MODULE_14__catract_record_catract_record_component__["a" /* CatractRecordComponent */] },
            { path: 'Consultation', component: __WEBPACK_IMPORTED_MODULE_15__consultation_consultation_component__["a" /* ConsultationComponent */] },
            { path: 'PatientReport', component: __WEBPACK_IMPORTED_MODULE_16__patient_report_patient_report_component__["a" /* PatientReportComponent */] },
        ]
    }
];
var TransactionsModule = (function () {
    function TransactionsModule() {
    }
    return TransactionsModule;
}());
TransactionsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            //TransactionsRoutingModule,
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_select__["SelectModule"],
            __WEBPACK_IMPORTED_MODULE_13__form_form_module__["FormModule"],
            __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_router__["RouterModule"].forChild(routes),
            __WEBPACK_IMPORTED_MODULE_5_ngx_modal__["ModalModule"],
            __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__["a" /* NgxPaginationModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_10__camp_requirements_camp_requirements_component__["a" /* CampRequirementsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__patient_registration_patient_registration_component__["a" /* PatientRegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_14__catract_record_catract_record_component__["a" /* CatractRecordComponent */],
            __WEBPACK_IMPORTED_MODULE_15__consultation_consultation_component__["a" /* ConsultationComponent */], __WEBPACK_IMPORTED_MODULE_16__patient_report_patient_report_component__["a" /* PatientReportComponent */],
        ]
    })
], TransactionsModule);

//# sourceMappingURL=transactions.module.js.map

/***/ })

});
//# sourceMappingURL=transactions.module.chunk.js.map