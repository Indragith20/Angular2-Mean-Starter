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

    saveNewEvent(){
        var headers = new Headers();
        headers.append('Content-type','application/json');
        return this.http.post('eventDetails/saveEvent?teamId='+id,{headers:headers})
            .map(response=>response._body);
    }
    

}