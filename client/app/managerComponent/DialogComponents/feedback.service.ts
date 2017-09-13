import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';


@Injectable()

export class FeedbackService{
    token:string;
    constructor(private http:Http){
        this.token=localStorage.getItem('auth-token');
    }

    putFeedback(message:string,memberID:number){
        console.log(message);
        let headers=new Headers();
        headers.append('x-access-token',this.token);
       return this.http.post('profile/feedback?memberID='+memberID+'&message='+JSON.stringify(message),{headers:headers})
                .map(response => response);
    }

}