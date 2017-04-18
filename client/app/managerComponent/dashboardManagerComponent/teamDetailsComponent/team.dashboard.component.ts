import {Component,Input} from '@angular/core';
import {Router} from '@angular/router';
import {HumanService} from '../../../app.service';
import {DashService} from '../dash.service';

@Component({
    selector:'team-details',
    moduleId:module.id,
    templateUrl:'teamDetails.html',
})

export class TeamDashBoardComponent{
    managerDet:any;
   selectedTeam:any;
   memberIds:string;

    constructor(private router:Router,private humanService:HumanService,private dashService:DashService){
        this.managerDet=this.humanService.userDet;
        this.selectedTeam=this.dashService.teamSelected;
        console.log("Selected Team from Team Details Page==>"+JSON.stringify(this.selectedTeam));
    }

    ngOnInit(){
        this.memberIds=JSON.stringify(this.selectedTeam.members);
        console.log("Member Id ==>"+this.memberIds);
        this.dashService.getTeamMembers(this.memberIds)
                .subscribe(data=>{
                    console.log(data);
                })
    }
}