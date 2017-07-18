import {Injectable} from '@angular/core';
import {Http, Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class AddService{
    public token:string;
    constructor(private http : Http){
        this.token = localStorage.getItem('auth-token');
    }

    getTeams(id:any){
        var headers = new Headers();
        headers.append('Content-type','application/json');
        headers.append('x-access-token',this.token);
        console.log("Headers ==>"+headers);
        return this.http.get('team/getTeams?teamIds='+id,{headers:headers})
            .map(response=>response._body);
    }


    addNewMember(details:any,teamId:any){
        var headers = new Headers();
        console.log("new Menr Details ==>"+JSON.stringify(details))
        headers.append('Content-type','application/json');
        headers.append('Authorization',this.token);
        let options = new RequestOptions({ headers: headers});
        return this.http.post('team/addMember?teamId='+teamId,details,options)
            .map(response=>response._body);
    }

}