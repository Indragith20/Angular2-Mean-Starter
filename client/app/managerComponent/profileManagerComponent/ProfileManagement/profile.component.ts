import {Component} from '@angular/core';
import {HumanService} from '../../../app.service';
import {ProfileService} from './profileService';
import {MdDialog,MdDialogRef,MdDialogConfig} from '@angular/material';
import {DialogComponent} from '../../dialog.component';


@Component({
    selector:'profile-page',
    moduleId:module.id,
    templateUrl:'./profile.html',
    providers:[ProfileService]
})

export class ProfileComponent{
    managerDet:any;
    profileDet:any;
    profilePhoto:String;
    loadingPhoto:boolean=false;
    filesToUpload: Array<File> = [];
    dialogRef: MdDialogRef<any>;
    config: MdDialogConfig = {
        disableClose: false,
        hasBackdrop: true,
        backdropClass: '',
        width: '',
        height: '',
        position: {
          top: '',
          bottom: '',
          left: '',
          right: ''
        },
        data: {
          container:'Image',  
          message: 'Jazzy jazz jazz'
        }
      };


    constructor(private humanService:HumanService,private profileService:ProfileService,private dialog:MdDialog){
        this.managerDet=this.humanService.userDet;
        this.profilePhoto=this.managerDet.profileImage;
        console.log("Manager Details from posts page==>"+JSON.stringify(this.managerDet));
    }


    // ngOnInit(){
    //     this.getProfileDet();
    // }


    getProfileDet(){
        this.profileService.getProfile(this.managerDet.memberId).subscribe(data=>{
            let parsedData=JSON.parse(data);
            this.managerDet=parsedData[0];
            this.profilePhoto=this.managerDet.profileImage;
            this.loadingPhoto=false;
            
        });
    }

    getTimeStamp(){
        return new Date();
    }
    

    openDialogModal(){
        this.config.data.managerDet=this.humanService.userDet;
        this.config.data.profilePhoto=this.managerDet.profileImage;
        this.dialogRef = this.dialog.open(DialogComponent,this.config);
        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
            this.loadingPhoto=true;
            this.profilePhoto="";
            this.getProfileDet();
        });
    }


}