import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class DashService{
    teamSelected:any;

    constructor(private http : Http){}

    /*****************************************Team Details Dashboard ********************************************************** */
    
    getTeams(id:any){
        var headers = new Headers();
        headers.append('Content-type','application/json');
        return this.http.get('team/getTeams?teamIds='+id,{headers:headers})
            .map(response=>response._body);
    }


    getTeamMembers(id:string){
        var headers = new Headers();
        console.log("IDS from service==>"+id);
        headers.append('Content-type','application/json');
        return this.http.get('teamDetails/getMembers?teamId='+id,{headers:headers})
            .map(response=>response._body);
    }


    /************************************************************************************************************** */


    /************************************************Vacation Dashoboard************************************************************** */

    saveNewEvent(event:any,team:any,member:any){
        var headers = new Headers();

        var eventDet={
            eventName:event.title,
            eventStartDate:event.start,
            eventEndDate:event.end,
            teamName:team.teamName,
            teamId:team.teamId,
            memberId:member.memberId,
            memberName:member.name
           };

        console.log("event Details==>"+JSON.stringify(eventDet));
        headers.append('Content-type','application/json');
        return this.http.post('events/saveEvent?event='+JSON.stringify(eventDet),{headers:headers})
            .map(response=>response._body);
    }



    getEvents(id:number,role:String){
        var headers = new Headers();
        console.log("IDS from service==>"+id);
        headers.append('Content-type','application/json');

        

        return this.http.get('events/getEvents?teamId='+id,{headers:headers})
            .map(response=>response.json());
    }


    updateEvent(event:any,,team:any,member:any){
        var headers=new Headers();
        headers.append('Content-type','application/json');
        var eventDet={
            eventId:event.eventId,
            eventName:event.title,
            eventStartDate:event.start,
            eventEndDate:event.end,
            teamName:team.teamName,
            teamId:team.teamId,
            memberId:member.memberId,
            memberName:member.name
           };
        return this.http.post('events/saveEvent?event='+JSON.stringify(eventDet),{headers:headers})
            .map(response=>response.json());   
    
    }
    

}