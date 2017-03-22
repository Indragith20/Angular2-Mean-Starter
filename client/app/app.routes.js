"use strict";
var router_1 = require('@angular/router');
var human_component_1 = require('./human.component');
var manager_component_1 = require('./managerComponent/manager.component');
var routes = [
    // map '/persons' to the people list component
    {
        path: 'main',
        component: human_component_1.HumanComponent,
    },
    {
        path: 'managerMain',
        component: manager_component_1.ManagerComponent,
    },
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    },
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map