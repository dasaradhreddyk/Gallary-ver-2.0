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
import * as auth0 from 'auth0-js';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.loggedIn$ = new BehaviorSubject(this.loggedIn);
        // Set-up the authentication options for our flow
        this.authOptions = {
            domain: 'panchu.au.auth0.com',
            clientID: 'nnC1nPUIsJYbUSTPtTOREfDzjL0gfZ4I'
        };
        // Set-up the authentication flow
        this.auth0 = new auth0.WebAuth(this.authOptions);
    }
    AuthService.prototype.authorize = function () {
        this.auth0.authorize({
            redirectUri: 'http://localhost:8840/authorise',
            responseType: 'token id_token'
        });
    };
    AuthService.prototype.handleAuth = function () {
        var _this = this;
        // When Auth0 hash parsed, get profile
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this._getProfile(authResult);
            }
            else if (err) {
                console.error("Error authenticating: " + err.error);
            }
            //this.router.navigate(['/']);
        });
    };
    AuthService.prototype._getProfile = function (authResult) {
        var _this = this;
        // Use access token to retrieve user's profile and set session
        this.auth0.client.userInfo(authResult.accessToken, function (err, profile) {
            if (profile) {
                _this._setSession(authResult, profile);
            }
            else if (err) {
                console.error("Error authenticating: " + err.error);
            }
        });
    };
    AuthService.prototype._setSession = function (authResult, profile) {
        // Save session data and update login status subject
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + Date.now());
        // Set tokens and expiration in localStorage and props
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
        // Update login status in loggedIn$ stream
        this.setLoggedIn(true);
    };
    AuthService.prototype.parseAccessToken = function () {
        this.auth0.parseHash(function (err, authResult) {
            // <implement your logic here>
        });
    };
    AuthService.prototype.setLoggedIn = function (value) {
        // Update login status subject
        this.loggedIn$.next(value);
        this.loggedIn = value;
    };
    AuthService.prototype.login = function () {
        // Auth0 authorize request
        this.auth0.authorize();
    };
    AuthService.prototype.logout = function () {
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
    };
    Object.defineProperty(AuthService.prototype, "tokenValid", {
        get: function () {
            // Check if current time is past access token's expiration
            var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
            return Date.now() < expiresAt;
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map