import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class CreateService{
    constructor(private http : Http){}

    createNewTeam(postData:any,managerId:any){
        var headers = new Headers();
        headers.append('Content-type','application/json');
        return this.http.post('team/createTeam?managerId='+managerId,postData,{headers:headers})
                .map(response=> response._body);
    }

}