import {Injectable} from '@angular/core';
import {Http, Headers,RequestOptions} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()

export class PostService{
    public token:string;
    constructor(private http : Http){
        this.token=localStorage.getItem('auth-token');
    }


    getTeams(id:any){
        var headers = new Headers();
        headers.append('Content-type','application/json');
        headers.append('x-access-token',this.token);
        return this.http.get('team/getTeams?teamIds='+id,{headers:headers})
            .map(response=>response._body);
    }

    addPost(postDetails:any){
        var headers = new Headers();
        
        headers.append('Content-type','application/json');
        headers.append('Authorization',this.token);
        let options=new RequestOptions({headers:headers});
        return this.http.post('post?postDet='+JSON.stringify(postDetails),options)
                .map(response => response.json());
    }

}