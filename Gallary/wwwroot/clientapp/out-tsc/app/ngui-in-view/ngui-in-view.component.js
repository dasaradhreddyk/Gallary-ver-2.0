var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, ContentChild, ElementRef, EventEmitter, Inject, Input, Output, PLATFORM_ID, Renderer2, TemplateRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
var NguiInViewComponent = /** @class */ (function () {
    function NguiInViewComponent(element, renderer, platformId) {
        this.element = element;
        this.renderer = renderer;
        this.platformId = platformId;
        this.inView = false;
        this.once50PctVisible = false;
        this.options = { threshold: [.1, .2, .3, .4, .5, .6, .7, .8] };
        this.inView$ = new EventEmitter();
        this.notInView$ = new EventEmitter();
    }
    NguiInViewComponent.prototype.ngOnInit = function () {
        if (isPlatformBrowser(this.platformId)) {
            this.observer = new IntersectionObserver(this.handleIntersect.bind(this), this.options);
            this.observer.observe(this.element.nativeElement);
        }
    };
    NguiInViewComponent.prototype.ngOnDestroy = function () {
        this.observer.disconnect();
    };
    NguiInViewComponent.prototype.handleIntersect = function (entries, observer) {
        var _this = this;
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                _this.inView = true;
                _this.inView$.emit(entry);
            }
            else {
                _this.notInView$.emit(entry);
            }
        });
    };
    __decorate([
        ContentChild(TemplateRef),
        __metadata("design:type", TemplateRef)
    ], NguiInViewComponent.prototype, "template", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NguiInViewComponent.prototype, "options", void 0);
    __decorate([
        Output('inView'),
        __metadata("design:type", EventEmitter)
    ], NguiInViewComponent.prototype, "inView$", void 0);
    __decorate([
        Output('notInView'),
        __metadata("design:type", EventEmitter)
    ], NguiInViewComponent.prototype, "notInView$", void 0);
    NguiInViewComponent = __decorate([
        Component({
            selector: 'ngui-in-view',
            template: "\n    <ng-container *ngIf=\"inView\" [ngTemplateOutlet]=\"template\">\n    </ng-container>\n  ",
            styles: [':host {display: block;}']
        }),
        __param(2, Inject(PLATFORM_ID)),
        __metadata("design:paramtypes", [ElementRef,
            Renderer2, Object])
    ], NguiInViewComponent);
    return NguiInViewComponent;
}());
export { NguiInViewComponent };
//# sourceMappingURL=ngui-in-view.component.js.map