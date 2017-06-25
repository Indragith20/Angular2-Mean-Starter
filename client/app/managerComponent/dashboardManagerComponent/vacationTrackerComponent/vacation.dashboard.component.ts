import {Component,ChangeDetectorRef } from '@angular/core';
import {DashService} from '../dash.service';
import {HumanService} from '../../../app.service';

@Component({
    moduleId:module.id,
    selector:'vacation-dashboard',
    templateUrl:'./vacation.html',
})

export class VacationDashBoardComponent{
    managerDet:any;
    selectedTeam:any;

    events: any[];
    headerConfig:any;




    /******************************************************************************************************** */


    constructor(private dashService:DashService,private humanService:HumanService,private cd: ChangeDetectorRef) { 
        this.managerDet=this.humanService.userDet;
        this.selectedTeam=this.dashService.teamSelected;
        console.log("Selected Team from Team Details Page==>"+JSON.stringify(this.selectedTeam));
    }



   
    
    header: any;
    
    event: MyEvent;
    
    dialogVisible: boolean = false;
    
    idGen: number = 100;

    handleDayClick(event:any) {
        this.event = new MyEvent();
        this.event.start = event.date.format();
        this.dialogVisible = true;
        
        //trigger detection manually as somehow only moving the mouse quickly after click triggers the automatic detection
        this.cd.detectChanges();
    }
    
    handleEventClick(e) {
        this.event = new MyEvent();
        this.event.title = e.calEvent.title;
        
        let start = e.calEvent.start;
        let end = e.calEvent.end;
        if(e.view.name === 'month') {
            start.stripTime();
        }
        
        if(end) {
            end.stripTime();
            this.event.end = end.format();
        }

        this.event.id = e.calEvent.id;
        this.event.start = start.format();
        this.event.allDay = e.calEvent.allDay;
        this.dialogVisible = true;
    }
    
    saveEvent() {
        //update
        if(this.event.id) {
            let index: number = this.findEventIndexById(this.event.id);
            if(index >= 0) {
                this.events[index] = this.event;
            }
        }
        //new
        else {
            //this.event.id = this.idGen++;
            this.events.push(this.event);
            console.log("Event Details are===>"+JSON.stringify(this.event));
            this.dashService.saveNewEvent(this.event,this.selectedTeam,this.managerDet).subscribe(data=>{
                console.log(data);
                this.event = null;
            });
            
        }
        
        this.dialogVisible = false;
    }
    
    deleteEvent() {
        let index: number = this.findEventIndexById(this.event.id);
        if(index >= 0) {
            this.events.splice(index, 1);
        }
        this.dialogVisible = false;
    }
    
    findEventIndexById(id: number) {
        let index = -1;
        for(let i = 0; i < this.events.length; i++) {
            if(id == this.events[i].id) {
                index = i;
                break;
            }
        }
        
        return index;
    }

    /********************************************************************************************************** */

    ngOnInit() {
        this.headerConfig = {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		};


        this.dashService.getEvents(this.selectedTeam.teamId,this.managerDet.userRole).subscribe(events => 
                {
                    this.events = events;
                    console.log("Events Generated==>"+this.events);
                });

       
    }
}   

export class MyEvent {
    id: number;
    memberName:string;
    title: string;
    start: string;
    end: string;
    allDay: boolean = true;
}