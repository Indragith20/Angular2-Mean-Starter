import {Component,ChangeDetectorRef,OnInit } from '@angular/core';
import {DashService} from '../dash.service';
import {HumanService} from '../../../app.service';

@Component({
    moduleId:module.id,
    selector:'vacation-dashboard',
    templateUrl:'./vacation.html',
})

export class VacationDashBoardComponent implements OnInit{
    managerDet:any;
    selectedTeam:any;

    eventsNotAvailable:boolean=true;
    eventsAvailable:boolean=false;

    events: any[];
    uEvents: any=[];
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
        //this.cd.detectChanges();
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
        this.eventsAvailable=false;
        this.eventsNotAvailable=true;
        if(this.event.id) {
            let index: number = this.findEventIndexById(this.event.id);
            if(index >= 0) {
                this.dashService.updateEvent(this.event,this.selectedTeam,this.managerDet).subscribe(data=>{
                this.getEventFun();
                })
            }
        }
        //new
        else {
            console.log("Event Details are===>"+JSON.stringify(this.event));
            this.dashService.saveNewEvent(this.event,this.selectedTeam,this.managerDet).subscribe(data=>{
                console.log(data);
                this.getEventFun();
            });
            
        }
        
        this.dialogVisible = false;
    }
    
    deleteEvent() {
        this.eventsAvailable=false;
        this.eventsNotAvailable=true;
        this.dashService.deleteEvent(this.event.id).subscribe(data=>{
                console.log(data);
                this.getEventFun();
            });
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

    public getEventFun():void{
            this.dashService.getEvents(this.selectedTeam.teamId,this.managerDet.userRole).subscribe(data => 
                {
                    this.eventsAvailable=true;
                    this.eventsNotAvailable=false;
                    this.events = data;
                    console.log("Events Generated==>"+JSON.stringify(this.events));
                });
    }

    ngOnInit() {
        this.headerConfig = {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		};
        this.getEventFun();
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