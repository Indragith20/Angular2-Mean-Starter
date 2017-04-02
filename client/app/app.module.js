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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routes_1 = require('./app.routes');
var app_component_1 = require('./app.component');
var human_component_1 = require('./human.component');
var manager_component_1 = require('./managerComponent/manager.component');
var home_manager_component_1 = require('./managerComponent/homeManagerComponent/home.manager.component');
var dashboard_manager_component_1 = require('./managerComponent/dashboardManagerComponent/dashboard.manager.component');
var post_manager_component_1 = require('./managerComponent/postManagerComponent/post.manager.component');
var create_manager_component_1 = require('./managerComponent/createTeamComponent/create.manager.component');
var app_service_1 = require('./app.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, app_routes_1.routing],
            declarations: [app_component_1.AppComponent, human_component_1.HumanComponent, manager_component_1.ManagerComponent, home_manager_component_1.HomeManagerComponent, dashboard_manager_component_1.DashboardManagerComponent, post_manager_component_1.PostManagerComponent, create_manager_component_1.CreateTeamComponent],
            providers: [app_service_1.HumanService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map