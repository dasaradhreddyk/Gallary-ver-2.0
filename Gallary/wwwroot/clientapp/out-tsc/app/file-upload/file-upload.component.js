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
import { HttpClient, HttpRequest, HttpEventType } from '@angular/common/http';
var FileuploadComponent = /** @class */ (function () {
    function FileuploadComponent(http) {
        this.http = http;
    }
    FileuploadComponent.prototype.upload = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        var formData = new FormData();
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            formData.append(file.name, file);
        }
        var uploadReq = new HttpRequest('POST', "api/upload", formData, {
            reportProgress: true,
        });
        this.http.request(uploadReq).subscribe(function (event) {
            if (event.type === HttpEventType.UploadProgress)
                _this.progress = Math.round(100 * event.loaded / event.total);
            else if (event.type === HttpEventType.Response)
                _this.message = event.body.toString();
        });
    };
    FileuploadComponent = __decorate([
        Component({
            selector: 'app-fileupload',
            templateUrl: './file-upload.component.html',
            styleUrls: ['./file-upload.component.css']
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], FileuploadComponent);
    return FileuploadComponent;
}());
export { FileuploadComponent };
//# sourceMappingURL=file-upload.component.js.map