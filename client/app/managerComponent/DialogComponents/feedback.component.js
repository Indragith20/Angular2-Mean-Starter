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
var feedback_service_1 = require("./feedback.service");
var FeedbackComponent = (function () {
    function FeedbackComponent(feedbackService) {
        this.feedbackService = feedbackService;
    }
    FeedbackComponent.prototype.postMessage = function () {
        var formData = new FormData();
        formData.append("memberId", this.memberDet.memberId);
        formData.append("message", this.message);
        this.feedbackService.putFeedback(formData)
            .subscribe(function (res) { return console.log(res); });
    };
    FeedbackComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'feedback',
            templateUrl: 'feedback.html',
            providers: [feedback_service_1.FeedbackService]
        }),
        __metadata("design:paramtypes", [feedback_service_1.FeedbackService])
    ], FeedbackComponent);
    return FeedbackComponent;
}());
exports.FeedbackComponent = FeedbackComponent;
//# sourceMappingURL=feedback.component.js.map