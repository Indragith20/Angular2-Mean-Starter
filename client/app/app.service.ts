import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import * as io from "socket.io-client";

@Injectable()

export class HumanService{

    public userDet:any;
    public socket:any = null;

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

    getNotifications(userId:any){
        this.socket=io('http://localhost:4000', { query: "userId="+userId });
        return new Observable(observer=>{
            this.socket.on('notification',function(data:any){
                observer.next(data);
            });
            
        });

    }
}