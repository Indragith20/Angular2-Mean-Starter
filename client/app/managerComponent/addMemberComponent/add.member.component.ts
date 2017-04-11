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
    selectedTeamId:number;
    addMemberPage:boolean;
    teamDetailPage:boolean;
    contactno:number;
    name:string;

    constructor(private router:Router,private humanService:HumanService,private addService:AddService){
        this.managerDet=this.humanService.userDet;
        console.log("Manager Details from add Member page==>"+JSON.stringify(this.managerDet.teams));
    }
    ngOnInit(){
        let teams=JSON.stringify(this.managerDet.teams)
        this.teamDetailPage=true;
        this.addMemberPage=false;
        this.addService.getTeams(teams)
        .subscribe(data=>{
            console.log(data.json);
            this.teamDetails=JSON.parse(data);
        });
    }

    //Add Member Function

    goToAddMemberPage(team:any){
        this.addMemberPage=true;
        this.teamDetailPage=false;
        this.selectedTeamId=team.teamId;
    }


    addMemberToTeam(){
        let memberDetails={
            memberName:this.name,
            memberContact:this.contactno
        }

        this.addService.addNewMember(memberDetails,this.selectedTeamId)
                .subscribe(data=>{
                    console.log(data);
                })
    }

}