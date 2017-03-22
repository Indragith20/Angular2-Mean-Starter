import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {routing} from './app.routes';

import { AppComponent }  from './app.component';
import {HumanComponent} from './human.component';
import {ManagerComponent} from './managerComponent/manager.component';

@NgModule({
  imports: [ BrowserModule,HttpModule,FormsModule,routing ],
  declarations: [ AppComponent ,HumanComponent,ManagerComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
