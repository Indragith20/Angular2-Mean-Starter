"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var imageUpload_service_1 = require("./imageUpload.service");
var ImageComponent = (function () {
    function ImageComponent(imageService, element) {
        this.imageService = imageService;
        this.element = element;
        this.filesToUpload = [];
        this.uploadPicArea = false;
    }
    ImageComponent.prototype.UploadPic = function () {
        this.uploadPicArea = true;
    };
    ImageComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        var reader = new FileReader();
        var image = this.element.nativeElement.querySelector('.image');
        reader.onload = function (e) {
            var src = e.target.files;
            image.src = src;
        };
        reader.readAsDataURL(fileInput.target.files[0]);
        //this.product.photo = fileInput.target.files[0]['name'];
    };
    ImageComponent.prototype.upload = function () {
        var formData = new FormData();
        var files = this.filesToUpload;
        console.log(files[0]['name']);
        formData.append("Name", this.managerDet.name);
        formData.append("Id", this.managerDet.memberId);
        formData.append("uploads[]", files[0], files[0]['name']);
        console.log(formData);
        this.imageService.uploadImage(formData).subscribe(function (data) {
            console.log(data);
        });
    };
    ImageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'message-dialog',
            templateUrl: './imageUpload.html',
            providers: [imageUpload_service_1.ImageUploadService]
        }),
        __metadata("design:paramtypes", [imageUpload_service_1.ImageUploadService, core_1.ElementRef])
    ], ImageComponent);
    return ImageComponent;
}());
exports.ImageComponent = ImageComponent;
//# sourceMappingURL=imageDialog.component.js.map