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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var DashService = (function () {
    function DashService(http) {
        this.http = http;
        this.token = localStorage.getItem('auth-token');
    }
    /*****************************************Team Details Dashboard ********************************************************** */
    DashService.prototype.getTeams = function (id) {
        var headers = new http_1.Headers();
        headers.append('Content-type', 'application/json');
        headers.append('x-access-token', this.token);
        return this.http.get('team/getTeams?teamIds=' + id, { headers: headers })
            .map(function (response) { return response._body; });
    };
    DashService.prototype.getTeamMembers = function (id) {
        var headers = new http_1.Headers();
        console.log("IDS from service==>" + id);
        headers.append('Content-type', 'application/json');
        headers.append('x-access-token', this.token);
        return this.http.get('teamDetails/getMembers?teamId=' + id, { headers: headers })
            .map(function (response) { return response._body; });
    };
    /************************************************************************************************************** */
    /************************************************Vacation Dashoboard************************************************************** */
    DashService.prototype.saveNewEvent = function (event, team, member) {
        var headers = new http_1.Headers();
        var eventDet = {
            eventName: event.title,
            eventStartDate: event.start,
            eventEndDate: event.end,
            teamName: team.teamName,
            teamId: team.teamId,
            memberId: member.memberId,
            memberName: member.name
        };
        console.log("event Details==>" + JSON.stringify(eventDet));
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this.token);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('events/saveEvent?event=' + JSON.stringify(eventDet), options)
            .map(function (response) { return response._body; });
    };
    DashService.prototype.getEvents = function (id, role) {
        var headers = new http_1.Headers();
        console.log("IDS from service==>" + id);
        headers.append('Content-type', 'application/json');
        headers.append('x-access-token', this.token);
        return this.http.get('events/getEvents?teamId=' + id, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    DashService.prototype.updateEvent = function (event, team, member) {
        var headers = new http_1.Headers();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this.token);
        var options = new http_1.RequestOptions({ headers: headers });
        //let body = this.token;
        var eventDet = {
            eventId: event.id,
            eventName: event.title,
            eventStartDate: event.start,
            eventEndDate: event.end,
            teamName: team.teamName,
            teamId: team.teamId,
            memberId: member.memberId,
            memberName: member.name
        };
        return this.http.post('events/updateEvent?event=' + JSON.stringify(eventDet), options)
            .map(function (response) { return response._body; });
    };
    DashService.prototype.deleteEvent = function (eventId) {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        headers.append('Authorization', this.token);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('events/deleteEvent?eventId=' + eventId, options)
            .map(function (response) { return response._body; });
    };
    DashService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], DashService);
    return DashService;
}());
exports.DashService = DashService;
//# sourceMappingURL=dash.service.js.map