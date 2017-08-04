import { Component,ViewContainerRef, ViewChild,AfterViewInit,ComponentFactoryResolver } from '@angular/core';
import { MdDialog,MdDialogRef,MdDialogConfig } from '@angular/material';
import {MessageComponent} from './messagedialog.component';

@Component({
  selector: 'app-dialog',
  moduleId:module.id,
  templateUrl: 'dialog.html',
})
export class DialogComponent{
  @ViewChild('containerelement', { read: ViewContainerRef }) vcr:any;
  constructor(public dialogRef: MdDialogRef<DialogComponent>,private componentFactoryResolver:ComponentFactoryResolver) { }

  ngAfterViewInit(){
      this.loadComponent();
  }

  loadComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(MessageComponent);

    this.vcr.clear();

    let componentRef = this.vcr.createComponent(componentFactory);
    
  }
} 