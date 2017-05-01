import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()

export class PostService{
    constructor(private http : Http){}


    getTeams(id:any){
        var headers = new Headers();
        headers.append('Content-type','application/json');
        return this.http.get('team/getTeams?teamIds='+id,{headers:headers})
            .map(response=>response._body);
    }

    addPost(postDetails:any){
        var headers = new Headers();
        
        headers.append('Content-type','application/json');
        return this.http.post('post',postDetails,{headers:headers})
                .map(response => response.json());
    }

}