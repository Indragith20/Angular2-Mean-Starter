import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {HumanService} from '../../app.service';
import {DashService} from './dash.service';

@Component({
    selector:'dashboard',
    moduleId:module.id,
    templateUrl:'dashboard.html',
    providers:[DashService]
})

export class DashboardManagerComponent{
    managerDet:any;
    teams:any;
    selectedTeam:any;
    isTeamSelected:boolean;

    constructor(private router:Router,private humanService:HumanService,private dashService:DashService){
        this.managerDet=this.humanService.userDet;
        console.log("Manager Details from add Member page==>"+JSON.stringify(this.managerDet.teams));
    }

    ngOnInit(){
        let teams=JSON.stringify(this.managerDet.teams)
        this.isTeamSelected=false;        
        this.dashService.getTeams(teams)
        .subscribe(data=>{
            console.log(data);
            this.teams=JSON.parse(data);
        });
    }

    changeTeam(team:any){
        this.isTeamSelected=true;
        this.selectedTeam=team;
        console.log("Selected Team from dashboard Page==>"+team+"JSON==>"+JSON.stringify(team));
        this.dashService.teamSelected=this.selectedTeam;
    }
}