import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  roles!: string[];
  constructor() { }


  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): any {
    const user = window.sessionStorage.getItem(USERNAME_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public saveAuthorities(authorities: string[]) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  // public getAuthorities(): string[] {
  //   this.roles = [];

  //   if (sessionStorage.getItem(TOKEN_KEY)) {
  //     JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach((authority: string) => {
  //       return this.roles.push(authority);
  //     });
  //   }

  //   return this.roles;
  // }
}