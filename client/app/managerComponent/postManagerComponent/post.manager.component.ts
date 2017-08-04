import {Component} from '@angular/core';
import {HumanService} from '../../app.service';
import {PostService} from './postService';
import {MdDialog,MdDialogRef,MdDialogConfig} from '@angular/material';
import {DialogComponent} from '../dialog.component';

@Component({
    selector:'post',
    moduleId:module.id,
    templateUrl:'post.html',
    providers:[PostService]
})

export class PostManagerComponent{
    managerDet:any;
    postTitle:String;
    postDetails:String;
    selectedTeam:any;
    dialogRef: MdDialogRef<any>;
    teams:{};
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
      message: 'Jazzy jazz jazz'
    }
  };

    constructor(private humanService:HumanService,private postService:PostService,private dialog:MdDialog){
        this.managerDet=this.humanService.userDet;
        console.log("Manager Details from posts page==>"+JSON.stringify(this.managerDet));
    }

    ngOnInit(){
            let teams=JSON.stringify(this.managerDet.teams)
                
            this.postService.getTeams(teams)
            .subscribe(data=>{
                console.log(data);
                this.teams=JSON.parse(data);
            });
    }


    changeTeam(team:any){
        this.selectedTeam=team;
    }


    postEnter(){
      let notifyDetails = {
            title:this.postTitle,
            details:this.postDetails,
            teamDet:{
               teamName:this.selectedTeam.teamName,
               teamId:this.selectedTeam.teamId,
            },
            postedBy:{
                name:this.managerDet.name,
                userRole:this.managerDet.userRole,
            }
        };
   
        this.postService.addPost(notifyDetails)
            .subscribe(data=>{
                console.log(data);
                if(data){
                    this.dialogRef = this.dialog.open(DialogComponent,this.config);
                    this.dialogRef.componentInstance.param1 = "test value";
                    this.dialogRef.afterClosed().subscribe(result => {
                            this.dialogRef = null;
                        });
                }                   
            });  
    }

}