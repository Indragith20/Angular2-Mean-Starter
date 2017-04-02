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

     constructor(private humanService:HumanService,private createService:CreateService,private router:Router){
        this.managerDet=this.humanService.userDet;
        console.log("Manager Details from team creation page==>"+this.managerDet);
    }

    createTeam(){
        let teamDetails ={
            teamName:this.teamName,
            teamDescription:this.teamDescription
        }
        this.createService.createNewTeam(teamDetails,this.managerDet._id)
            .subscribe(response=>response.json);
    }
}