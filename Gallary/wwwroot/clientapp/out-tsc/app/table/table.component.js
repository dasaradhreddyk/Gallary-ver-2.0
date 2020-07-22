var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AdventureTimeService } from '../services/adventure-time.service';
var TableComponent = /** @class */ (function () {
    function TableComponent(atService, route, router) {
        this.atService = atService;
        // const snapshot: RouterStateSnapshot = route.routerState.snapshot;
        console.log(route.queryParams);
        route.queryParams.subscribe(function (params) {
            var date = params['id'];
            console.log(date); // Print the parameter to the console.
        });
        router.events.subscribe(function (val) {
            // see also
            console.log(val instanceof NavigationEnd);
        });
    }
    TableComponent.prototype.ngOnChanges = function (changes) {
        this.columns = this.atService.getColumns();
        this.characters = this.atService.getCharacters(this.searchword);
        console.log(this.type);
        console.log(this.searchword);
    };
    TableComponent.prototype.ngOnInit = function () {
        this.columns = this.atService.getColumns();
        this.characters = this.atService.getCharacters("live");
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TableComponent.prototype, "searchword", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TableComponent.prototype, "type", void 0);
    TableComponent = __decorate([
        Component({
            selector: 'app-table',
            templateUrl: './table.component.html',
            styleUrls: ['./table.component.css']
        }),
        __metadata("design:paramtypes", [AdventureTimeService, ActivatedRoute, Router])
    ], TableComponent);
    return TableComponent;
}());
export { TableComponent };
//# sourceMappingURL=table.component.js.map