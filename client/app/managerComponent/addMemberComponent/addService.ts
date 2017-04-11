import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class AddService{
    constructor(private http : Http){}

    getTeams(id:any){
        var headers = new Headers();
        headers.append('Content-type','application/json');
        return this.http.get('team/getTeams?teamIds='+id,{headers:headers})
            .map(response=>response._body);
    }


    addNewMember(details:any,teamId:any){
        var headers = new Headers();
        console.log("new Menr Details ==>"+JSON.stringify(details))
        headers.append('Content-type','application/json');
        return this.http.post('team/addMember?teamId='+teamId,details,{headers:headers})
            .map(response=>response._body);
    }

}