import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http'

@Injectable()

export class ProfileService{
    public token:string;

    constructor(private http:Http){
        this.token=localStorage.getItem('auth-token');
    }

    getProfile(id:number){
        let headers=new Headers();
        headers.append('Content-type','application/json');
        headers.append('x-access-token',this.token);
        return this.http.get('profile/getProfile?profileId='+id,{headers:headers})
            .map(response=>response._body);
    }
}