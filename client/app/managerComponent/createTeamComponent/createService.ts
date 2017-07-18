import {Injectable} from '@angular/core';
import {Http, Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class CreateService{
    public token:string;
    constructor(private http : Http){
        this.token=localStorage.getItem('auth-token');
    }

    createNewTeam(postData:any,managerId:any){
        var headers = new Headers();
        headers.append('Content-type','application/json');
        headers.append('Authorization',this.token);
        let options = new RequestOptions({ headers: headers});
        return this.http.post('team/createTeam?managerId='+managerId,postData,options)
                .map(response=>response._body);
    }

}