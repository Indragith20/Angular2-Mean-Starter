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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var app_service_1 = require('../../app.service');
var addService_1 = require('./addService');
var AddMemberComponent = (function () {
    function AddMemberComponent(router, humanService, addService) {
        this.router = router;
        this.humanService = humanService;
        this.addService = addService;
        this.managerDet = this.humanService.userDet;
        console.log("Manager Details from add Member page==>" + JSON.stringify(this.managerDet.teams));
    }
    AddMemberComponent.prototype.ngOnInit = function () {
        var _this = this;
        var teams = JSON.stringify(this.managerDet.teams);
        this.addService.getTeams(teams)
            .subscribe(function (data) {
            console.log(data.json);
            _this.teamDetails = JSON.parse(data);
        });
    };
    AddMemberComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'addMember',
            templateUrl: 'addMember.html',
            providers: [addService_1.AddService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, app_service_1.HumanService, addService_1.AddService])
    ], AddMemberComponent);
    return AddMemberComponent;
}());
exports.AddMemberComponent = AddMemberComponent;
//# sourceMappingURL=add.member.component.js.map