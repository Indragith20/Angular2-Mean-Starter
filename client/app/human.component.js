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
var app_service_1 = require("./app.service");
var HumanComponent = (function () {
    function HumanComponent(humanService, router) {
        this.humanService = humanService;
        this.router = router;
        this.registerPageActive = true;
        this.loginPageActive = false;
        // this.registerPageActive=true;
        // this.loginPageActive=false;
    }
    HumanComponent.prototype.setRegister = function () {
        this.registerPageActive = true;
        this.loginPageActive = false;
    };
    HumanComponent.prototype.setLogin = function () {
        this.registerPageActive = false;
        this.loginPageActive = true;
    };
    HumanComponent.prototype.save = function () {
        console.log(this.registerPassword);
        var human = {
            name: this.name,
            contactNumber: this.contactno,
            password: this.registerPassword,
            userRole: this.userRole
        };
        this.humanService.addHuman(human)
            .subscribe(function (data) {
            console.log(data);
            //this.loginDet.emit(data);
        });
    };
    HumanComponent.prototype.loginUser = function (name, pass) {
        var _this = this;
        this.humanService.autheticateUser(name, pass)
            .subscribe(function (data) {
            console.log(data);
            var details = JSON.parse(data);
            console.log(details);
            if (details.success == true) {
                _this.humanService.userDet = details.loggedUserDet;
                localStorage.setItem('auth-token', details.token);
                console.log("First Component == >" + _this.humanService.userDet);
                _this.router.navigate(['/managerMain']);
            }
            else {
                _this.router.navigate(['/']);
            }
        });
    };
    return HumanComponent;
}());
HumanComponent = __decorate([
    core_1.Component({
        selector: 'human',
        moduleId: module.id,
        templateUrl: 'human.html',
    }),
    __metadata("design:paramtypes", [app_service_1.HumanService, router_1.Router])
], HumanComponent);
exports.HumanComponent = HumanComponent;
//# sourceMappingURL=human.component.js.map