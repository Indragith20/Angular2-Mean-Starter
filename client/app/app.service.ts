import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class HumanService{

    constructor(private http : Http){

    }
    addHuman(human:any){
        var headers = new Headers();
        headers.append('Content-type','application/json');
        return this.http.post('api/human',human,{headers:headers})
                .map(response => response.json());
        //console.log(human);
    }
    autheticateUser(name:any,pass:any){
        var headers = new Headers();
        headers.append('Content-type','application/json');
        return this.http.get('api/checkUser?username='+name+'&password='+pass)
                .map(response => response._body);
    }
}