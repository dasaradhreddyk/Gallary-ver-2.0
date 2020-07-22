var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { HttpClient } from '@angular/common/http';
import { CHARACTERS } from './mock-data';
var AdventureTimeService = /** @class */ (function () {
    function AdventureTimeService(http) {
        var _this = this;
        this.http = http;
        http.get('/api/data/GetUserData?input=rise').subscribe(function (result) {
            _this.data = result;
            console.log(_this.data);
            _this.data.forEach(function (element) {
                CHARACTERS.push(element);
            });
            CHARACTERS.push(_this.data[0]);
        }, function (error) { return console.error(error); });
    }
    AdventureTimeService.prototype.getCharacters = function (val) {
        var _this = this;
        var url = "/api/data/GetUserData?input=" + val;
        this.http.get(url).subscribe(function (result) {
            _this.data = result;
            console.log(_this.data);
            _this.data.forEach(function (element) {
                CHARACTERS.push(element);
            });
            CHARACTERS.push(_this.data[0]);
        }, function (error) { return console.error(error); });
        return Observable.of(CHARACTERS).delay(100);
    };
    AdventureTimeService.prototype.getColumns = function () {
        return ["name", "age", "species", "occupation", "info1", "info2"];
    };
    AdventureTimeService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], AdventureTimeService);
    return AdventureTimeService;
}());
export { AdventureTimeService };
//# sourceMappingURL=adventure-time.service.js.map