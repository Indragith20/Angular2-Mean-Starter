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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_service_1 = require("../../../app.service");
var profileService_1 = require("./profileService");
var material_1 = require("@angular/material");
var dialog_component_1 = require("../../dialog.component");
var ProfileComponent = (function () {
    function ProfileComponent(humanService, profileService, dialog) {
        this.humanService = humanService;
        this.profileService = profileService;
        this.dialog = dialog;
        this.loadingPhoto = false;
        this.filesToUpload = [];
        this.config = {
            disableClose: false,
            hasBackdrop: true,
            backdropClass: '',
            width: '',
            height: '',
            position: {
                top: '',
                bottom: '',
                left: '',
                right: ''
            },
            data: {
                container: 'Image',
                message: 'Jazzy jazz jazz'
            }
        };
        this.managerDet = this.humanService.userDet;
        this.profilePhoto = this.managerDet.profileImage;
        console.log("Manager Details from posts page==>" + JSON.stringify(this.managerDet));
    }
    // ngOnInit(){
    //     this.getProfileDet();
    // }
    ProfileComponent.prototype.getProfileDet = function () {
        var _this = this;
        this.profileService.getProfile(this.managerDet.memberId).subscribe(function (data) {
            var parsedData = JSON.parse(data);
            _this.managerDet = parsedData[0];
            _this.profilePhoto = _this.managerDet.profileImage;
            _this.loadingPhoto = false;
        });
    };
    ProfileComponent.prototype.getTimeStamp = function () {
        return new Date();
    };
    ProfileComponent.prototype.openDialogModal = function () {
        var _this = this;
        this.config.data.managerDet = this.humanService.userDet;
        this.config.data.profilePhoto = this.managerDet.profileImage;
        this.dialogRef = this.dialog.open(dialog_component_1.DialogComponent, this.config);
        this.dialogRef.afterClosed().subscribe(function (result) {
            _this.dialogRef = null;
            _this.loadingPhoto = true;
            _this.profilePhoto = "";
            _this.getProfileDet();
        });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'profile-page',
            moduleId: module.id,
            templateUrl: './profile.html',
            providers: [profileService_1.ProfileService]
        }),
        __metadata("design:paramtypes", [app_service_1.HumanService, profileService_1.ProfileService, material_1.MdDialog])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map