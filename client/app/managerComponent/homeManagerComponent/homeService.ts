import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class HomeService{
    constructor(private http : Http){}

    getPosts(){
        return this.http.get('post/getPosts')
                .map(response=> response._body);
    }

}