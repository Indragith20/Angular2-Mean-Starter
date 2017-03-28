import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()

export class PostService{
    constructor(private http : Http){}

    addPost(postDetails:any){
        var headers = new Headers();
        console.log("Hi from PostService");
        headers.append('Content-type','application/json');
        return this.http.post('post',postDetails,{headers:headers})
                .map(response => response.json());
    }

}