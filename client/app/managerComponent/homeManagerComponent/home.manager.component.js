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
var app_service_1 = require('../../app.service');
var homeService_1 = require('./homeService');
var HomeManagerComponent = (function () {
    function HomeManagerComponent(humanService, homeService) {
        this.humanService = humanService;
        this.homeService = homeService;
        this.managerDet = this.humanService.userDet;
        console.log("Manager Details from Home page==>" + this.managerDet);
    }
    HomeManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homeService.getPosts()
            .subscribe(function (post) {
            console.log("origina post===>" + post);
            _this.posts = JSON.parse(post);
            console.log("Total Posts from home page ==>" + _this.posts);
        });
    };
    HomeManagerComponent = __decorate([
        core_1.Component({
            selector: 'home',
            moduleId: module.id,
            templateUrl: 'home.html',
            providers: [homeService_1.HomeService]
        }), 
        __metadata('design:paramtypes', [app_service_1.HumanService, homeService_1.HomeService])
    ], HomeManagerComponent);
    return HomeManagerComponent;
}());
exports.HomeManagerComponent = HomeManagerComponent;
//# sourceMappingURL=home.manager.component.js.map