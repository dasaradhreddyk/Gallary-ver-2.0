
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
    selector: 'my-video',
    templateUrl: './videoplayer.component.html',
    styleUrls: ['./videoplayer.component.css']
})
export class VideoplayerComponent {
    name = 'Angular 6';
    safeSrc: SafeResourceUrl;
    constructor(private sanitizer: DomSanitizer) {
        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/c9F5kMUfFKk");
    }

}
