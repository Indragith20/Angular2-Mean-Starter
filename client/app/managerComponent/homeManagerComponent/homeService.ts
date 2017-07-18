import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class HomeService{
    public token:string;
    constructor(private http : Http){
        this.token=localStorage.getItem('auth-token');
    }

    getPosts(teamIds:string){
        var headers = new Headers();
        
        headers.append('Content-type','application/json');
        headers.append('x-access-token',this.token);
        return this.http.get('post/getPosts?teamIds='+teamIds,{headers:headers})
                .map(response=> response._body);
    }

}