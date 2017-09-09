import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';


@Injectable()

export class FeedbackService{
    token:string;
    constructor(private http:Http){
        this.token=localStorage.getItem('auth-token');
    }

    putFeedback(formData:any){
        
        let headers=new Headers();
        headers.append('x-access-token',this.token);
       return this.http.post('profile/feedback',formData,{headers:headers})
                .map(response => response.json());
    }

}