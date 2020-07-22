import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private auth0: auth0.WebAuth;
    private authOptions: auth0.AuthOptions;
    userProfile: any;
    // Create a stream of logged in status to communicate throughout app
    loggedIn: boolean;
    loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);

	constructor() {

		// Set-up the authentication options for our flow
		this.authOptions = {
			domain: 'panchu.au.auth0.com',
			clientID: 'nnC1nPUIsJYbUSTPtTOREfDzjL0gfZ4I'
		};

		// Set-up the authentication flow
		this.auth0 = new auth0.WebAuth(this.authOptions);
	}

	public authorize() {
		this.auth0.authorize({
			redirectUri: 'http://localhost:8840/authorise',
			responseType: 'token id_token'
		});
	}
    handleAuth() {
        // When Auth0 hash parsed, get profile
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                this._getProfile(authResult);
            } else if (err) {
                console.error(`Error authenticating: ${err.error}`);
            }
            //this.router.navigate(['/']);
        });
    }
    private _getProfile(authResult) {
        // Use access token to retrieve user's profile and set session
        this.auth0.client.userInfo(authResult.accessToken, (err, profile) => {
            if (profile) {
                this._setSession(authResult, profile);
            } else if (err) {
                console.error(`Error authenticating: ${err.error}`);
            }
        });
    }
    private _setSession(authResult, profile) {
        // Save session data and update login status subject
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + Date.now());
        // Set tokens and expiration in localStorage and props
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
        // Update login status in loggedIn$ stream
        this.setLoggedIn(true);
    }

	public parseAccessToken() {
		this.auth0.parseHash((err, authResult) => {
			// <implement your logic here>
		});
    }
    setLoggedIn(value: boolean) {
        // Update login status subject
        this.loggedIn$.next(value);
        this.loggedIn = value;
    }
    login() {
        // Auth0 authorize request
        this.auth0.authorize();
    }
    logout() {
        // Ensure all auth items removed from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        localStorage.removeItem('authRedirect');
        // Reset local properties, update loggedIn$ stream
        this.userProfile = undefined;
        this.setLoggedIn(false);
        // Return to homepage
       // this.router.navigate(['/']);
    }
    get tokenValid(): boolean {
        // Check if current time is past access token's expiration
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return Date.now() < expiresAt;
    }
}
