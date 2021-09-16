import { AuthService } from '@abp/ng.core';
import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public username;
  public password;

  get hasLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  constructor(private oAuthService: OAuthService, private authService: AuthService) {}

  login() {
    this.authService
      .login({
        password: this.password,
        username: this.username,
        rememberMe: true,
      })
      .subscribe(result => {
        console.log(result);
      });
  }
}
