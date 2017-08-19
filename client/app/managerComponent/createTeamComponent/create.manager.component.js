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
var createService_1 = require("./createService");
var router_1 = require("@angular/router");
var CreateTeamComponent = (function () {
    function CreateTeamComponent(humanService, createService, router) {
        this.humanService = humanService;
        this.createService = createService;
        this.router = router;
        this.managerDet = this.humanService.userDet;
        this.addMember = false;
        this.createNewTeam = true;
        console.log("Manager Details from team creation page==>" + this.managerDet);
    }
    CreateTeamComponent.prototype.createTeam = function () {
        var _this = this;
        var teamDetails = {
            teamName: this.teamName,
            teamDescription: this.teamDescription
        };
        this.createService.createNewTeam(teamDetails, this.managerDet.memberId)
            .subscribe(function (data) {
            var details = JSON.parse(data);
            if (details) {
                _this.savedTeamDetails = details;
                _this.savedTeamName = details.teamName;
                _this.addMember = true;
                _this.createNewTeam = false;
                console.log(JSON.parse(data));
            }
        });
    };
    CreateTeamComponent.prototype.addNewMember = function () {
        console.log("navigate to add member page");
        this.router.navigate(['/addMember']);
    };
    CreateTeamComponent = __decorate([
        core_1.Component({
            selector: 'createteam',
            moduleId: module.id,
            templateUrl: 'createteam.html',
            providers: [createService_1.CreateService]
        }),
        __metadata("design:paramtypes", [app_service_1.HumanService, createService_1.CreateService, router_1.Router])
    ], CreateTeamComponent);
    return CreateTeamComponent;
}());
exports.CreateTeamComponent = CreateTeamComponent;
//# sourceMappingURL=create.manager.component.js.map