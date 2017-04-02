import { Routes,RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import {HumanComponent} from './human.component';
import {ManagerComponent} from './managerComponent/manager.component';
import {HomeManagerComponent} from './managerComponent/homeManagerComponent/home.manager.component';
import {DashboardManagerComponent} from './managerComponent/dashboardManagerComponent/dashboard.manager.component';
import {PostManagerComponent} from './managerComponent/postManagerComponent/post.manager.component';
import {CreateTeamComponent} from './managerComponent/createTeamComponent/create.manager.component';

const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'main',
    component: HumanComponent,
  },
  {
    path: 'managerMain',
    component: ManagerComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeManagerComponent },
      { path: 'dashboard', component: DashboardManagerComponent},
      {path:'post',component:PostManagerComponent},
      {path:'createteam',component:CreateTeamComponent}
    ]
  },
  
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  

];


export const routing = RouterModule.forRoot(routes);