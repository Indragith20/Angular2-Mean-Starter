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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var PostService = (function () {
    function PostService(http) {
        this.http = http;
        this.token = localStorage.getItem('auth-token');
    }
    PostService.prototype.getTeams = function (id) {
        var headers = new http_1.Headers();
        headers.append('Content-type', 'application/json');
        headers.append('x-access-token', this.token);
        return this.http.get('team/getTeams?teamIds=' + id, { headers: headers })
            .map(function (response) { return response._body; });
    };
    PostService.prototype.addPost = function (postDetails) {
        var headers = new http_1.Headers();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this.token);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('post?postDet=' + JSON.stringify(postDetails), options)
            .map(function (response) { return response.json(); });
    };
    return PostService;
}());
PostService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=postService.js.map