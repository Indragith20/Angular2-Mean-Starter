import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';


@Injectable()

export class ImageUploadService{
    token:string;
    constructor(private http:Http){
        this.token=localStorage.getItem('auth-token');
    }

    uploadImage(formData:any){
        console.log(formData);
        let headers=new Headers();
        headers.append('x-access-token',this.token);
       return this.http.post('profile/upload',formData,{headers:headers})
                .map(files => files.json())
    }

}