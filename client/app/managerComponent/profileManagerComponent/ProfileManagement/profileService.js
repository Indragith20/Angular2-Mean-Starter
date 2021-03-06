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
var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
        this.token = localStorage.getItem('auth-token');
    }
    ProfileService.prototype.getProfile = function (id) {
        var headers = new http_1.Headers();
        headers.append('Content-type', 'application/json');
        headers.append('x-access-token', this.token);
        return this.http.get('profile/getProfile?profileId=' + id, { headers: headers })
            .map(function (response) { return response._body; });
    };
    ProfileService.prototype.uploadImage = function (formData) {
        console.log(formData);
        var headers = new http_1.Headers();
        headers.append('x-access-token', this.token);
        return this.http.post('profile/upload', formData, { headers: headers })
            .map(function (files) { return files.json(); });
    };
    ProfileService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ProfileService);
    return ProfileService;
}());
exports.ProfileService = ProfileService;
//# sourceMappingURL=profileService.js.map