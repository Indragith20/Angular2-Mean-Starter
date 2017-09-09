import {Component,ElementRef} from '@angular/core';
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
  uploadPicArea:boolean=false;

  constructor(private imageService:ImageUploadService,private element:ElementRef){

  }

  UploadPic(){
    this.uploadPicArea=true;
  }

  getTimeStamp(){
    return new Date();
  }
  
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    var reader = new FileReader();
    var image = this.element.nativeElement.querySelector('.image');
      reader.onload = function(e:any) {
        console.log("event is "+e);
        var src = e.target.result;
        image.src = src;
      };

      reader.readAsDataURL(fileInput.target.files[0]);

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


