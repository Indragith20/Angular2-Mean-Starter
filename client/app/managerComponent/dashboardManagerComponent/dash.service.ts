import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class DashService{
    teamSelected:any;

    constructor(private http : Http){}

    getTeams(id:any){
        var headers = new Headers();
        headers.append('Content-type','application/json');
        return this.http.get('team/getTeams?teamIds='+id,{headers:headers})
            .map(response=>response._body);
    }


    getTeamMembers(ids:string){
        var headers = new Headers();
        console.log("IDS from service==>"+ids);
        headers.append('Content-type','application/json');
        return this.http.get('teamDetails/getMembers?memberIds[]='+ids,{headers:headers})
            .map(response=>response._body);
    }

    // changeTeam(team:any){
        
    //     this.teamSelected=team;
    //     console.log("From Service page==>"+this.teamSelected);
    // }

}