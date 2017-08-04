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
var postService_1 = require("./postService");
var material_1 = require("@angular/material");
var dialog_component_1 = require("../dialog.component");
var PostManagerComponent = (function () {
    function PostManagerComponent(humanService, postService, dialog) {
        this.humanService = humanService;
        this.postService = postService;
        this.dialog = dialog;
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
                message: 'Jazzy jazz jazz'
            }
        };
        this.managerDet = this.humanService.userDet;
        console.log("Manager Details from posts page==>" + JSON.stringify(this.managerDet));
    }
    PostManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var teams = JSON.stringify(this.managerDet.teams);
        this.postService.getTeams(teams)
            .subscribe(function (data) {
            console.log(data);
            _this.teams = JSON.parse(data);
        });
    };
    PostManagerComponent.prototype.changeTeam = function (team) {
        this.selectedTeam = team;
    };
    PostManagerComponent.prototype.postEnter = function () {
        var _this = this;
        var notifyDetails = {
            title: this.postTitle,
            details: this.postDetails,
            teamDet: {
                teamName: this.selectedTeam.teamName,
                teamId: this.selectedTeam.teamId,
            },
            postedBy: {
                name: this.managerDet.name,
                userRole: this.managerDet.userRole,
            }
        };
        this.postService.addPost(notifyDetails)
            .subscribe(function (data) {
            console.log(data);
            if (data) {
                _this.dialogRef = _this.dialog.open(dialog_component_1.DialogComponent, _this.config);
                _this.dialogRef.componentInstance.param1 = "test value";
                _this.dialogRef.afterClosed().subscribe(function (result) {
                    _this.dialogRef = null;
                });
            }
        });
    };
    return PostManagerComponent;
}());
PostManagerComponent = __decorate([
    core_1.Component({
        selector: 'post',
        moduleId: module.id,
        templateUrl: 'post.html',
        providers: [postService_1.PostService]
    }),
    __metadata("design:paramtypes", [app_service_1.HumanService, postService_1.PostService, material_1.MdDialog])
], PostManagerComponent);
exports.PostManagerComponent = PostManagerComponent;
//# sourceMappingURL=post.manager.component.js.map