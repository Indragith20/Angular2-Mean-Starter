import {Injectable} from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http'

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

    uploadImage(formData:any){
        console.log(formData);
        let headers=new Headers();
        headers.append('x-access-token',this.token);
       return this.http.post('profile/upload',formData,{headers:headers})
                .map(files => files.json())
    }
}