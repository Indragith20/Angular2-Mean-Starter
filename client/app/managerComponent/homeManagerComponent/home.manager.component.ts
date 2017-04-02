import {Component} from '@angular/core';
import {HumanService} from '../../app.service';
import {HomeService} from './homeService';
import {Router} from '@angular/router'

@Component({
    selector:'home',
    moduleId:module.id,
    templateUrl:'home.html',
    providers:[HomeService]
})

export class HomeManagerComponent{
    managerDet:any;
    posts:any;
    teamAvaliable:boolean;
    teamNotAvailable:boolean;

    constructor(private humanService:HumanService,private homeService:HomeService,private router:Router){
        this.managerDet=this.humanService.userDet;
        console.log("Manager Details from Home page==>"+this.managerDet);
    }
    ngOnInit(){
        if(this.managerDet.teams.length>0){
            this.teamAvaliable=true;
            // this.homeService.getPosts()
            //     .subscribe(post=>{
            //         console.log("origina post===>"+post);
            //         this.posts=JSON.parse(post);
            //         console.log("Total Posts from home page ==>"+this.posts);
            //     });
        }
        else{
            this.teamNotAvailable=true;
        }
        
    }

    createTeam(){
        this.router.navigate(['/managerMain/createteam']);
    }
}