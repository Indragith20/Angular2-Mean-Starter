import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ScheduleModule,CalendarModule,CheckboxModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/components/dialog/dialog'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {BrowserAnimationsModule} from '@angular/animations';

import {routing} from './app.routes';

import { AppComponent }  from './app.component';
import {HumanComponent} from './human.component';
import {ManagerComponent} from './managerComponent/manager.component';
import {HomeManagerComponent} from './managerComponent/homeManagerComponent/home.manager.component';

import {DashboardManagerComponent} from './managerComponent/dashboardManagerComponent/dashboard.manager.component';
import {TeamDashBoardComponent} from './managerComponent/dashboardManagerComponent/teamDetailsComponent/team.dashboard.component';
import {VacationDashBoardComponent} from './managerComponent/dashboardManagerComponent/vacationTrackerComponent/vacation.dashboard.component';

import {PostManagerComponent} from './managerComponent/postManagerComponent/post.manager.component';
import {CreateTeamComponent} from './managerComponent/createTeamComponent/create.manager.component';
import {AddMemberComponent} from  './managerComponent/addMemberComponent/add.member.component';
import {HumanService} from './app.service';

@NgModule({
  imports: [ BrowserModule,HttpModule,FormsModule,routing,ScheduleModule,DialogModule,CalendarModule,CheckboxModule,BrowserAnimationsModule],
  declarations: [ AppComponent ,HumanComponent,ManagerComponent,HomeManagerComponent,DashboardManagerComponent,TeamDashBoardComponent,PostManagerComponent,CreateTeamComponent,AddMemberComponent,VacationDashBoardComponent],
  providers: [HumanService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
