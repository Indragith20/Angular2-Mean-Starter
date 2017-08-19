import { Component,ViewContainerRef, ViewChild,AfterViewInit,ComponentFactoryResolver,Inject } from '@angular/core';
import { MdDialog,MdDialogRef,MdDialogConfig,MD_DIALOG_DATA } from '@angular/material';
import {MessageComponent} from './DialogComponents/messagedialog.component';
import {ImageComponent} from './DialogComponents/imageDialog.component';

@Component({
  selector: 'app-dialog',
  moduleId:module.id,
  templateUrl: 'dialog.html',
})
export class DialogComponent{
  @ViewChild('containerelement', { read: ViewContainerRef }) vcr:any;
  headerMessage:String;

  constructor(public dialogRef: MdDialogRef<DialogComponent>,private componentFactoryResolver:ComponentFactoryResolver,@Inject(MD_DIALOG_DATA) public data: any) { }

  ngAfterViewInit(){
      this.loadComponent();
  }

  loadComponent() {
    

    if(this.data.container=="Post"){
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(MessageComponent);
      this.dialogRef.updateSize('40%', '40%'); 
          this.vcr.clear();
           this.headerMessage="Post Message"; 
          console.log("data from the ANtohte COmpoenn==>"+JSON.stringify(this.data));
      
          let componentRef = this.vcr.createComponent(componentFactory);

          componentRef.instance.message = this.data.message;
          
          componentRef.changeDetectorRef.detectChanges(); 
    }

    else if(this.data.container=="Image"){
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ImageComponent);

      this.vcr.clear();

      let componentRef = this.vcr.createComponent(componentFactory);
      this.dialogRef.updateSize('80%', '100%');
      this.headerMessage="Image Upload";
      componentRef.instance.managerDet = this.data.managerDet;
      componentRef.instance.profilePhoto = this.data.profilePhoto;

      componentRef.changeDetectorRef.detectChanges(); 
    }
    
    
  }
} 