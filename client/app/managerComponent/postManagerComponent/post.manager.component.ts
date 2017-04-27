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
    constructor(private humanService:HumanService,private postService:PostService){
        this.managerDet=this.humanService.userDet;
        console.log("Manager Details from posts page==>"+this.managerDet);
    }

    postEnter(){
      let notifyDetails = {
            title:this.postTitle,
            details:this.postDetails,
            postedBy:this.managerDet._id
            
      };
   
        this.postService.addPost(notifyDetails)
            .subscribe(data=>{
                console.log(data);
                
            });  
    }

}