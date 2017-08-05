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
var app_service_1 = require("../../app.service");
var profileService_1 = require("./profileService");
var material_1 = require("@angular/material");
var ProfileComponent = (function () {
    function ProfileComponent(humanService, profileService, dialog) {
        this.humanService = humanService;
        this.profileService = profileService;
        this.dialog = dialog;
        this.managerDet = this.humanService.userDet;
        console.log("Manager Details from posts page==>" + JSON.stringify(this.managerDet));
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getProfile(this.managerDet.memberId).subscribe(function (data) {
            console.log(data);
            _this.profileDet = JSON.parse(data);
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'profile-page',
        moduleId: module.id,
        templateUrl: './profile.html',
        providers: [profileService_1.ProfileService]
    }),
    __metadata("design:paramtypes", [app_service_1.HumanService, profileService_1.ProfileService, material_1.MdDialog])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map