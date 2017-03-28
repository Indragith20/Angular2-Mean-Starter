import {Component} from '@angular/core';
import {HumanService} from '../../app.service';
import {HomeService} from './homeService';

@Component({
    selector:'home',
    moduleId:module.id,
    templateUrl:'home.html',
    providers:[HomeService]
})

export class HomeManagerComponent{
    managerDet:any;
    posts:any;
    
    constructor(private humanService:HumanService,private homeService:HomeService){
        this.managerDet=this.humanService.userDet;
        console.log("Manager Details from Home page==>"+this.managerDet);
    }
    ngOnInit(){
        this.homeService.getPosts()
            .subscribe(post=>{
                console.log("origina post===>"+post);
                this.posts=JSON.parse(post);
                console.log("Total Posts from home page ==>"+this.posts);
            });
    }
}