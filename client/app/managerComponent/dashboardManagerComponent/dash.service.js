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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var DashService = (function () {
    function DashService(http) {
        this.http = http;
    }
    DashService.prototype.getTeams = function (id) {
        var headers = new http_1.Headers();
        headers.append('Content-type', 'application/json');
        return this.http.get('team/getTeams?teamIds=' + id, { headers: headers })
            .map(function (response) { return response._body; });
    };
    DashService.prototype.getTeamMembers = function (ids) {
        var headers = new http_1.Headers();
        console.log("IDS from service==>" + ids);
        headers.append('Content-type', 'application/json');
        return this.http.get('teamDetails/getMembers?memberIds[]=' + ids, { headers: headers })
            .map(function (response) { return response._body; });
    };
    DashService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DashService);
    return DashService;
}());
exports.DashService = DashService;
//# sourceMappingURL=dash.service.js.map