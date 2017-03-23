"use strict";
var router_1 = require('@angular/router');
var human_component_1 = require('./human.component');
var manager_component_1 = require('./managerComponent/manager.component');
var home_manager_component_1 = require('./managerComponent/homeManagerComponent/home.manager.component');
var dashboard_manager_component_1 = require('./managerComponent/dashboardManagerComponent/dashboard.manager.component');
var post_manager_component_1 = require('./managerComponent/postManagerComponent/post.manager.component');
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
            { path: 'dashboard', component: dashboard_manager_component_1.DashboardManagerComponent },
            { path: 'post', component: post_manager_component_1.PostManagerComponent }
        ]
    },
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    },
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map