import {Component,EventEmitter,Input,Output} from '@angular/core';
import {HumanService} from '../app.service';


@Component({
    selector:'manager',
    moduleId: module.id, 
    templateUrl:'manager.html',
    
})

export class ManagerComponent{
    managerDet:any;
    socket:any = null;
    constructor(private humanService:HumanService){
        this.managerDet=this.humanService.userDet;
       console.log("Manager Details==>"+this.managerDet);
    }

    ngOnInit(){
        this.humanService.getNotifications().subscribe(data=>console.log(data));
    }
    
   
}