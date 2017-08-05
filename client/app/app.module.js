"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_materialmodule_1 = require("./app.materialmodule");
var primeng_1 = require("primeng/primeng");
var dialog_1 = require("primeng/components/dialog/dialog");
var animations_1 = require("@angular/platform-browser/animations");
//import {BrowserAnimationsModule} from '@angular/animations';
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
var human_component_1 = require("./human.component");
var manager_component_1 = require("./managerComponent/manager.component");
var dialog_component_1 = require("./managerComponent/dialog.component");
var messagedialog_component_1 = require("./managerComponent/messagedialog.component");
var home_manager_component_1 = require("./managerComponent/homeManagerComponent/home.manager.component");
var dashboard_manager_component_1 = require("./managerComponent/dashboardManagerComponent/dashboard.manager.component");
var team_dashboard_component_1 = require("./managerComponent/dashboardManagerComponent/teamDetailsComponent/team.dashboard.component");
var vacation_dashboard_component_1 = require("./managerComponent/dashboardManagerComponent/vacationTrackerComponent/vacation.dashboard.component");
var post_manager_component_1 = require("./managerComponent/postManagerComponent/post.manager.component");
var create_manager_component_1 = require("./managerComponent/createTeamComponent/create.manager.component");
var add_member_component_1 = require("./managerComponent/addMemberComponent/add.member.component");
var profile_component_1 = require("./managerComponent/profileManagerComponent/profile.component");
var app_service_1 = require("./app.service");
var auth_service_1 = require("./auth.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, app_routes_1.routing, primeng_1.ScheduleModule, dialog_1.DialogModule, primeng_1.CalendarModule,
            primeng_1.CheckboxModule, animations_1.BrowserAnimationsModule, app_materialmodule_1.AppMaterialModule],
        declarations: [app_component_1.AppComponent, human_component_1.HumanComponent, manager_component_1.ManagerComponent, home_manager_component_1.HomeManagerComponent,
            dashboard_manager_component_1.DashboardManagerComponent, team_dashboard_component_1.TeamDashBoardComponent, post_manager_component_1.PostManagerComponent,
            create_manager_component_1.CreateTeamComponent, add_member_component_1.AddMemberComponent, vacation_dashboard_component_1.VacationDashBoardComponent, dialog_component_1.DialogComponent,
            messagedialog_component_1.MessageComponent, profile_component_1.ProfileComponent],
        providers: [app_service_1.HumanService, auth_service_1.AuthService],
        entryComponents: [dialog_component_1.DialogComponent, messagedialog_component_1.MessageComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map