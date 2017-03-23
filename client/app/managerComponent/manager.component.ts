import {Component,EventEmitter,Input,Output} from '@angular/core';

import {HumanService} from '../app.service';

@Component({
    selector:'manager',
    moduleId: module.id, 
    templateUrl:'manager.html',
    
})

export class ManagerComponent{
    managerDet:any;
    
    constructor(private humanService:HumanService){
        this.managerDet=this.humanService.userDet;
       console.log("Manager Details==>"+this.managerDet);
    }

   
}