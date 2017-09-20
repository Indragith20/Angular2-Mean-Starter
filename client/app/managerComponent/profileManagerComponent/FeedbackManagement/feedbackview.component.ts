import {Component} from '@angular/core';
import {HumanService} from '../../../app.service';

@Component({
    moduleId:module.id,
    selector:'feedback-main',
    templateUrl:'./myfeedback.html'
})

export class FeedbackViewComponent{
    managerDet:any;
    feedback:any=[];

    constructor(private humanService:HumanService){
        this.managerDet=this.humanService.userDet;
        this.feedback=this.managerDet.feedback;
    }
}