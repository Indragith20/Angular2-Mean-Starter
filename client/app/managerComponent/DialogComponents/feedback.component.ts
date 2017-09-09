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

    constructor(private feedbackService:FeedbackService){
    }

    postMessage(){
        const formData: any = new FormData();
        formData.append("memberId",this.memberDet.memberId);
        formData.append("message",this.message);
        this.feedbackService.putFeedback(formData)
            .subscribe(res=>console.log(res));
    }


}