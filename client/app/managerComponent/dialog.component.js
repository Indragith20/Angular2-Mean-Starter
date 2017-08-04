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
var material_1 = require("@angular/material");
var messagedialog_component_1 = require("./messagedialog.component");
var DialogComponent = (function () {
    function DialogComponent(dialogRef, componentFactoryResolver) {
        this.dialogRef = dialogRef;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    DialogComponent.prototype.ngAfterViewInit = function () {
        this.loadComponent();
    };
    DialogComponent.prototype.loadComponent = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(messagedialog_component_1.MessageComponent);
        this.vcr.clear();
        var componentRef = this.vcr.createComponent(componentFactory);
    };
    return DialogComponent;
}());
__decorate([
    core_1.ViewChild('containerelement', { read: core_1.ViewContainerRef }),
    __metadata("design:type", Object)
], DialogComponent.prototype, "vcr", void 0);
DialogComponent = __decorate([
    core_1.Component({
        selector: 'app-dialog',
        moduleId: module.id,
        templateUrl: 'dialog.html',
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef, core_1.ComponentFactoryResolver])
], DialogComponent);
exports.DialogComponent = DialogComponent;
//# sourceMappingURL=dialog.component.js.map