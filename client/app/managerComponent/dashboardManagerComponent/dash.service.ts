import {Injectable} from '@angular/core';
import {Http, Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class DashService{
    teamSelected:any;
    public token:any;
    constructor(private http : Http){
        this.token=localStorage.getItem('auth-token');
    }

    /*****************************************Team Details Dashboard ********************************************************** */
    
    getTeams(id:any){
        var headers = new Headers();
        headers.append('Content-type','application/json');
        headers.append('x-access-token',this.token);
        return this.http.get('team/getTeams?teamIds='+id,{headers:headers})
            .map(response=>response._body);
    }


    getTeamMembers(id:string){
        var headers = new Headers();
        console.log("IDS from service==>"+id);
        headers.append('Content-type','application/json');
        headers.append('x-access-token',this.token);
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
        headers.append('Authorization',this.token);
        let options = new RequestOptions({ headers: headers});
        
        return this.http.post('events/saveEvent?event='+JSON.stringify(eventDet),options)
            .map(response=>response._body);
    }



    getEvents(id:number,role:String){
        var headers = new Headers();

        console.log("IDS from service==>"+id);
        headers.append('Content-type','application/json');
        headers.append('x-access-token',this.token);
        

        return this.http.get('events/getEvents?teamId='+id,{headers:headers})
            .map(response=>response.json());
    }


    updateEvent(event:any,team:any,member:any){
        var headers=new Headers();
        headers.append('Content-type','application/json');
        headers.append('Authorization',this.token);
        let options = new RequestOptions({ headers: headers});
        //let body = this.token;
        var eventDet={
            eventId:event.id,
            eventName:event.title,
            eventStartDate:event.start,
            eventEndDate:event.end,
            teamName:team.teamName,
            teamId:team.teamId,
            memberId:member.memberId,
            memberName:member.name
           };
        return this.http.post('events/updateEvent?event='+JSON.stringify(eventDet),options)
            .map(response=>response._body);   
    
    }


    deleteEvent(eventId:number){
        var headers=new Headers();
        headers.append('content-type','application/json');
        headers.append('Authorization',this.token);
        let options = new RequestOptions({ headers: headers});
        return this.http.post('events/deleteEvent?eventId='+eventId,options)
                    .map(response=>response._body);
    }
    

}