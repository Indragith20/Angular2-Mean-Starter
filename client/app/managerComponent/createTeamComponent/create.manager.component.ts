import {Component} from '@angular/core';
import {HumanService} from '../../app.service';
import {CreateService} from './createService';

import {Router} from '@angular/router'

@Component({
    selector:'createteam',
    moduleId:module.id,
    templateUrl:'createteam.html',
    providers:[CreateService]
})

export class CreateTeamComponent{
    managerDet:any;
    teamName:string;
    teamDescription:string;
    addMember:boolean;
    createNewTeam:boolean;
    savedTeamName:string;
    savedTeamDetails:any;

     constructor(private humanService:HumanService,private createService:CreateService,private router:Router){
        this.managerDet=this.humanService.userDet;
        this.addMember=false;
        this.createNewTeam=true;
        console.log("Manager Details from team creation page==>"+this.managerDet);
    }

    createTeam(){
        let teamDetails ={
            teamName:this.teamName,
            teamDescription:this.teamDescription
        }
        this.createService.createNewTeam(teamDetails,this.managerDet.memberId)
            .subscribe(data=> 
                {
                    var details=JSON.parse(data);
                    if(details){
                        this.savedTeamDetails=details;
                        this.savedTeamName=details.teamName;
                         this.addMember=true;
                         this.createNewTeam=false;   
                        console.log(JSON.parse(data));
                    }
                    
                });
    }

    addNewMember(){
        console.log("navigate to add member page");
        this.router.navigate(['/addMember']);
    }
}