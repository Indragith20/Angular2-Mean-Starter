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
var dash_service_1 = require("../dash.service");
var app_service_1 = require("../../../app.service");
var VacationDashBoardComponent = (function () {
    /******************************************************************************************************** */
    function VacationDashBoardComponent(dashService, humanService, cd) {
        this.dashService = dashService;
        this.humanService = humanService;
        this.cd = cd;
        this.dialogVisible = false;
        this.idGen = 100;
        this.managerDet = this.humanService.userDet;
        this.selectedTeam = this.dashService.teamSelected;
        console.log("Selected Team from Team Details Page==>" + JSON.stringify(this.selectedTeam));
    }
    VacationDashBoardComponent.prototype.handleDayClick = function (event) {
        this.event = new MyEvent();
        this.event.start = event.date.format();
        this.dialogVisible = true;
        //trigger detection manually as somehow only moving the mouse quickly after click triggers the automatic detection
        this.cd.detectChanges();
    };
    VacationDashBoardComponent.prototype.handleEventClick = function (e) {
        this.event = new MyEvent();
        this.event.title = e.calEvent.title;
        var start = e.calEvent.start;
        var end = e.calEvent.end;
        if (e.view.name === 'month') {
            start.stripTime();
        }
        if (end) {
            end.stripTime();
            this.event.end = end.format();
        }
        this.event.id = e.calEvent.id;
        this.event.start = start.format();
        this.event.allDay = e.calEvent.allDay;
        this.dialogVisible = true;
    };
    VacationDashBoardComponent.prototype.saveEvent = function () {
        var _this = this;
        //update
        if (this.event.id) {
            var index = this.findEventIndexById(this.event.id);
            if (index >= 0) {
                this.events[index] = this.event;
            }
        }
        else {
            this.event.id = this.idGen++;
            this.events.push(this.event);
            console.log("Event Details are===>" + JSON.stringify(this.event));
            this.dashService.saveNewEvent(this.event, this.selectedTeam, this.managerDet).subscribe(function (data) {
                console.log(data);
                _this.event = null;
            });
        }
        this.dialogVisible = false;
    };
    VacationDashBoardComponent.prototype.deleteEvent = function () {
        var index = this.findEventIndexById(this.event.id);
        if (index >= 0) {
            this.events.splice(index, 1);
        }
        this.dialogVisible = false;
    };
    VacationDashBoardComponent.prototype.findEventIndexById = function (id) {
        var index = -1;
        for (var i = 0; i < this.events.length; i++) {
            if (id == this.events[i].id) {
                index = i;
                break;
            }
        }
        return index;
    };
    /********************************************************************************************************** */
    VacationDashBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.headerConfig = {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };
        this.dashService.getEvents(this.selectedTeam.teamId, this.managerDet.userRole).subscribe(function (events) {
            _this.events = events;
            console.log("Events Generated==>" + _this.events);
        });
    };
    return VacationDashBoardComponent;
}());
VacationDashBoardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'vacation-dashboard',
        templateUrl: './vacation.html',
    }),
    __metadata("design:paramtypes", [dash_service_1.DashService, app_service_1.HumanService, core_1.ChangeDetectorRef])
], VacationDashBoardComponent);
exports.VacationDashBoardComponent = VacationDashBoardComponent;
var MyEvent = (function () {
    function MyEvent() {
        this.allDay = true;
    }
    return MyEvent;
}());
exports.MyEvent = MyEvent;
//# sourceMappingURL=vacation.dashboard.component.js.map