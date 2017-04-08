import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {HumanService} from '../../app.service';
import {AddService} from './addService';

@Component({
    moduleId:module.id,
    selector:'addMember',
    templateUrl:'addMember.html',
    providers:[AddService]
})

export class AddMemberComponent{
    managerDet:any;
    teamDetails:any;
    constructor(private router:Router,private humanService:HumanService,private addService:AddService){
        this.managerDet=this.humanService.userDet;
        console.log("Manager Details from add Member page==>"+JSON.stringify(this.managerDet.teams));
    }
    ngOnInit(){
        let teams=JSON.stringify(this.managerDet.teams)
        this.addService.getTeams(teams)
        .subscribe(data=>{
            console.log(data.json);
            this.teamDetails=JSON.parse(data);
        });
    }
}