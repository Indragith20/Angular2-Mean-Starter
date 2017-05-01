import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class HomeService{
    constructor(private http : Http){}

    getPosts(teamIds:string){
        var headers = new Headers();
        
        headers.append('Content-type','application/json');
        return this.http.get('post/getPosts?teamIds='+teamIds,{headers:headers})
                .map(response=> response._body);
    }

}