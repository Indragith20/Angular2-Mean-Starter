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
var router_1 = require("@angular/router");
var app_service_1 = require("../../../app.service");
var dash_service_1 = require("../dash.service");
var TeamDashBoardComponent = (function () {
    function TeamDashBoardComponent(router, humanService, dashService) {
        this.router = router;
        this.humanService = humanService;
        this.dashService = dashService;
        this.managerDet = this.humanService.userDet;
        this.selectedTeam = this.dashService.teamSelected;
        console.log("Selected Team from Team Details Page==>" + JSON.stringify(this.selectedTeam));
    }
    TeamDashBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashService.getTeamMembers(this.selectedTeam.teamId)
            .subscribe(function (data) {
            console.log(data);
            _this.teamMemberDetails = JSON.parse(data);
        });
    };
    return TeamDashBoardComponent;
}());
TeamDashBoardComponent = __decorate([
    core_1.Component({
        selector: 'team-details',
        moduleId: module.id,
        templateUrl: 'teamDetails.html',
    }),
    __metadata("design:paramtypes", [router_1.Router, app_service_1.HumanService, dash_service_1.DashService])
], TeamDashBoardComponent);
exports.TeamDashBoardComponent = TeamDashBoardComponent;
//# sourceMappingURL=team.dashboard.component.js.map