import {Component} from '@angular/core';
import {FeedbackService} from './feedback.service';

@Component({
    moduleId:module.id,
    selector:'feedback',
    templateUrl:'feedback.html',
    providers:[FeedbackService]
})

export class FeedbackComponent{
    memberDet:any;
    message:any;
    postStatus:boolean=false;
    successMessage:any;

    constructor(private feedbackService:FeedbackService){
    }

    postMessage(){
        this.feedbackService.putFeedback(this.message,this.memberDet.memberId)
            .subscribe(res=>{
                this.postStatus=true
                console.log(res);
                this.successMessage=res;
            });
    }


}