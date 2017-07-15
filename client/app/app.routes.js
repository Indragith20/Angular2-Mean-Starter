"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var human_component_1 = require("./human.component");
var manager_component_1 = require("./managerComponent/manager.component");
var home_manager_component_1 = require("./managerComponent/homeManagerComponent/home.manager.component");
var dashboard_manager_component_1 = require("./managerComponent/dashboardManagerComponent/dashboard.manager.component");
var team_dashboard_component_1 = require("./managerComponent/dashboardManagerComponent/teamDetailsComponent/team.dashboard.component");
var vacation_dashboard_component_1 = require("./managerComponent/dashboardManagerComponent/vacationTrackerComponent/vacation.dashboard.component");
var post_manager_component_1 = require("./managerComponent/postManagerComponent/post.manager.component");
var create_manager_component_1 = require("./managerComponent/createTeamComponent/create.manager.component");
var add_member_component_1 = require("./managerComponent/addMemberComponent/add.member.component");
var auth_service_1 = require("./auth.service");
var routes = [
    // map '/persons' to the people list component
    {
        path: 'main',
        component: human_component_1.HumanComponent,
    },
    {
        path: 'managerMain',
        component: manager_component_1.ManagerComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: home_manager_component_1.HomeManagerComponent },
            {
                path: 'dashboard',
                component: dashboard_manager_component_1.DashboardManagerComponent,
                children: [
                    { path: '', redirectTo: 'activities', pathMatch: 'full' },
                    { path: 'teams', component: team_dashboard_component_1.TeamDashBoardComponent },
                    { path: 'vacationtracker', component: vacation_dashboard_component_1.VacationDashBoardComponent },
                    { path: 'activities', component: dashboard_manager_component_1.DashboardManagerComponent }
                ]
            },
            { path: 'post', component: post_manager_component_1.PostManagerComponent },
            { path: 'createteam', component: create_manager_component_1.CreateTeamComponent },
            { path: 'addMember', component: add_member_component_1.AddMemberComponent }
        ],
        canActivate: [auth_service_1.AuthService]
    },
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map