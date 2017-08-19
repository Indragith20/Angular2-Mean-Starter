import {Component} from '@angular/core';
import {ImageUploadService} from './imageUpload.service';

@Component({
    moduleId:module.id,
    selector:'message-dialog',
    templateUrl:'./imageUpload.html',
    providers:[ImageUploadService]
})

export class ImageComponent{
  filesToUpload: Array<File> = [];
  managerDet:any;
  profilePhoto:any;

  constructor(private imageService:ImageUploadService){

  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //this.product.photo = fileInput.target.files[0]['name'];
  }

  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    
    console.log(files[0]['name']);
    formData.append("Name",this.managerDet.name);
    formData.append("Id",this.managerDet.memberId);
    formData.append("uploads[]", files[0], files[0]['name']);
    console.log(formData);
    this.imageService.uploadImage(formData).subscribe(data=>{
        console.log(data);
    });
  }

}


