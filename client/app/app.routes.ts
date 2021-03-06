import { Routes,RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import {HumanComponent} from './human.component';
import {ManagerComponent} from './managerComponent/manager.component';
import {HomeManagerComponent} from './managerComponent/homeManagerComponent/home.manager.component';

import {DashboardManagerComponent} from './managerComponent/dashboardManagerComponent/dashboard.manager.component';
import {TeamDashBoardComponent} from './managerComponent/dashboardManagerComponent/teamDetailsComponent/team.dashboard.component';
import {VacationDashBoardComponent} from './managerComponent/dashboardManagerComponent/vacationTrackerComponent/vacation.dashboard.component';

import {PostManagerComponent} from './managerComponent/postManagerComponent/post.manager.component';
import {CreateTeamComponent} from './managerComponent/createTeamComponent/create.manager.component';
import {AddMemberComponent} from  './managerComponent/addMemberComponent/add.member.component';
import {ProfileMainComponent} from './managerComponent/profileManagerComponent/profilemain.component';
import {ProfileComponent} from './managerComponent/profileManagerComponent/ProfileManagement/profile.component';
import {FeedbackViewComponent} from './managerComponent/profileManagerComponent/FeedbackManagement/feedbackview.component';

import {AuthService} from './auth.service';

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
      {  
        path: 'dashboard', 
        component: DashboardManagerComponent,
        children:[
            { path: '', redirectTo: 'activities',pathMatch: 'full' },
            { path: 'teams', component: TeamDashBoardComponent },
            { path :'vacationtracker', component:VacationDashBoardComponent},
            {path:'activities',component:DashboardManagerComponent}
        ]
    },
      {path:'post',component:PostManagerComponent},
      {path:'createteam',component:CreateTeamComponent},
      {path:'addMember',component:AddMemberComponent},
      {
      path:'profile',component:ProfileMainComponent,
      children:[
        {path:'',redirectTo:'myprofile',pathMatch:'full'},
        {path:'myprofile',component:ProfileComponent},
        {path:'myfeedback',component:FeedbackViewComponent}]}
      ],
    canActivate: [AuthService]
  },
  
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  }
  

];


export const routing = RouterModule.forRoot(routes);