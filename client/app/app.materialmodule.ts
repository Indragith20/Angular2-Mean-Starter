import { NgModule }      from '@angular/core';
import {MdButtonModule, MdCheckboxModule,MdTabsModule,MdDialogModule} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule,MdTabsModule,MdDialogModule],
  exports: [MdButtonModule, MdCheckboxModule,MdTabsModule,MdDialogModule],
})
export class AppMaterialModule { }