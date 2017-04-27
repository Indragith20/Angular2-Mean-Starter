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
   teamMemberDetails:any;

    constructor(private router:Router,private humanService:HumanService,private dashService:DashService){
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
}