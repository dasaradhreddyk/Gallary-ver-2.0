var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AuthService } from './auth.service';
var AppComponent = /** @class */ (function () {
    //public clickedEvent: Event;
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'app';
        this.isAuthenticated = false;
    }
    AppComponent.prototype.click = function () {
        this.authService.authorize();
        this.isAuthenticated = this.authService.loggedIn;
        this.userProfile = this.authService.userProfile;
        console.log(this.userProfile);
    };
    AppComponent.prototype.childEventClicked = function (event) {
        this.searchword = event["searchword"];
        this.type = event["type"];
        console.log("searchword :" + event);
        console.log("type :" + this.type);
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [AuthService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map