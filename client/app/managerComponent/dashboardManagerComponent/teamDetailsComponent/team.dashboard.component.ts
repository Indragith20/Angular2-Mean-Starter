import {Component,Input} from '@angular/core';
import {Router} from '@angular/router';
import {HumanService} from '../../../app.service';
import {DashService} from '../dash.service';
import {MdDialog,MdDialogRef,MdDialogConfig} from '@angular/material';
import {DialogComponent} from '../../dialog.component';


@Component({
    selector:'team-details',
    moduleId:module.id,
    templateUrl:'teamDetails.html',
})

export class TeamDashBoardComponent{
    managerDet:any;
   selectedTeam:any;
   memberIds:string;
   teamMemberDetails:any;
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
         container:'feedback',  
         message: 'Jazzy jazz jazz'
       }
     };

    constructor(private router:Router,private humanService:HumanService,private dashService:DashService,private dialog:MdDialog){
        this.managerDet=this.humanService.userDet;
        this.selectedTeam=this.dashService.teamSelected;
        console.log("Selected Team from Team Details Page==>"+JSON.stringify(this.selectedTeam));
    }

    ngOnInit(){
        
        this.dashService.getTeamMembers(this.selectedTeam.teamId)
                .subscribe(data=>{
                    console.log(data);
                    this.teamMemberDetails=JSON.parse(data);
                })
    }

    openFeedbackModal(member:any){
        console.log(member);
        console.log(JSON.stringify(member));
        this.config.data.memberDet=member;
        // this.config.data.profilePhoto=this.managerDet.profileImage;
        this.dialogRef = this.dialog.open(DialogComponent,this.config);
        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
        });
    }
}