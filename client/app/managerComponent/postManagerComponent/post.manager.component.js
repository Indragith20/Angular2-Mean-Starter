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
var core_1 = require('@angular/core');
var app_service_1 = require('../../app.service');
var postService_1 = require('./postService');
var PostManagerComponent = (function () {
    function PostManagerComponent(humanService, postService) {
        this.humanService = humanService;
        this.postService = postService;
        this.managerDet = this.humanService.userDet;
        console.log("Manager Details from posts page==>" + this.managerDet);
    }
    PostManagerComponent.prototype.postEnter = function () {
        var notifyDetails = {
            title: this.postTitle,
            details: this.postDetails,
            postedBy: this.managerDet._id
        };
        //   console.log("Manager id is ==>"+this.managerDet._id);
        //   console.log("post details from post page ==>"+JSON.stringify(notifyDetails));
        this.postService.addPost(notifyDetails)
            .subscribe(function (data) {
            console.log(data);
            //this.loginDet.emit(data);
        });
    };
    PostManagerComponent = __decorate([
        core_1.Component({
            selector: 'post',
            moduleId: module.id,
            templateUrl: 'post.html',
            providers: [postService_1.PostService]
        }), 
        __metadata('design:paramtypes', [app_service_1.HumanService, postService_1.PostService])
    ], PostManagerComponent);
    return PostManagerComponent;
}());
exports.PostManagerComponent = PostManagerComponent;
//# sourceMappingURL=post.manager.component.js.map