import {Component} from '@angular/core';
import {HumanService} from '../../app.service';
import {PostService} from './postService';

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
    teams:{}

    constructor(private humanService:HumanService,private postService:PostService){
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
                
            });  
    }

}