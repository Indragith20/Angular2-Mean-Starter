import {Component} from '@angular/core';
import {HumanService} from '../../app.service';
import {ProfileService} from './profileService';
import {MdDialog,MdDialogRef,MdDialogConfig} from '@angular/material';
import {DialogComponent} from '../dialog.component';


@Component({
    selector:'profile-page',
    moduleId:module.id,
    templateUrl:'./profile.html',
    providers:[ProfileService]
})

export class ProfileComponent{
    managerDet:any;
    profileDet:any;

    constructor(private humanService:HumanService,private profileService:ProfileService,private dialog:MdDialog){
        this.managerDet=this.humanService.userDet;
        console.log("Manager Details from posts page==>"+JSON.stringify(this.managerDet));
    }


    ngOnInit(){
        this.profileService.getProfile(this.managerDet.memberId).subscribe(data=>{
                console.log(data);
                this.profileDet=JSON.parse(data);
            });
    }
}