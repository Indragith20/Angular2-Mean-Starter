import { Component,ViewContainerRef, ViewChild,AfterViewInit,ComponentFactoryResolver,Inject } from '@angular/core';
import { MdDialog,MdDialogRef,MdDialogConfig,MD_DIALOG_DATA } from '@angular/material';
import {MessageComponent} from './messagedialog.component';

@Component({
  selector: 'app-dialog',
  moduleId:module.id,
  templateUrl: 'dialog.html',
})
export class DialogComponent{
  @ViewChild('containerelement', { read: ViewContainerRef }) vcr:any;
  constructor(public dialogRef: MdDialogRef<DialogComponent>,private componentFactoryResolver:ComponentFactoryResolver,@Inject(MD_DIALOG_DATA) public data: any) { }

  ngAfterViewInit(){
      this.loadComponent();
  }

  loadComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(MessageComponent);

    this.vcr.clear();

    console.log("data from the ANtohte COmpoenn==>"+JSON.stringify(this.data));

    let componentRef = this.vcr.createComponent(componentFactory);
    
  }
} 