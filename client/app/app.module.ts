import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {routing} from './app.routes';

import { AppComponent }  from './app.component';
import {HumanComponent} from './human.component';
import {ManagerComponent} from './managerComponent/manager.component';
import {HomeManagerComponent} from './managerComponent/homeManagerComponent/home.manager.component';
import {DashboardManagerComponent} from './managerComponent/dashboardManagerComponent/dashboard.manager.component';
import {PostManagerComponent} from './managerComponent/postManagerComponent/post.manager.component';
import {HumanService} from './app.service';

@NgModule({
  imports: [ BrowserModule,HttpModule,FormsModule,routing ],
  declarations: [ AppComponent ,HumanComponent,ManagerComponent,HomeManagerComponent,DashboardManagerComponent,PostManagerComponent],
  providers: [HumanService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
