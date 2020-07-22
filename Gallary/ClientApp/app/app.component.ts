import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    public searchword: string;
    public type: string;
    isAuthenticated: boolean = false;
    public userProfile: any;
    //public clickedEvent: Event;
	constructor(private authService: AuthService) {
	}

	public click() {
        this.authService.authorize();
        this.isAuthenticated = this.authService.loggedIn;
        this.userProfile = this.authService.userProfile;
        console.log(this.userProfile);
	}

    childEventClicked(event: string) {
      
        this.searchword = event["searchword"] ;
        this.type = event["type"];

        console.log("searchword :" + event);
        console.log("type :" + this.type);
    }
}
