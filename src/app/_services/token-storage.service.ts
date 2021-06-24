import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
const CurrentUser_KEY = 'AuthAuthorities';
const EMAIL_KEY = 'AuthEmail';
const NOM_KEY = 'AuthNom';
const PRENOM_KEY = 'AuthPrenom';
const PASSWORD_KEY = 'AuthPass'
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
  public saveCurrentUserID(id: string) {
    window.localStorage.setItem(CurrentUser_KEY, id);
  }
  public getUsername(): any {
    const user = window.sessionStorage.getItem(USERNAME_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public savePassword(password: any){
    // window.sessionStorage.removeItem(PASSWORD_KEY);
    window.sessionStorage.setItem(PASSWORD_KEY, password);
  }

  public getPassword(): any {
    const user = window.sessionStorage.getItem(PASSWORD_KEY);
    if(user){
      return JSON.parse(user);
    }
  }

  public saveEmail(email: string) {
    window.sessionStorage.removeItem(EMAIL_KEY);
    window.sessionStorage.setItem(EMAIL_KEY, email);
  }

  public getEmail(): any {
    const user = window.sessionStorage.getItem(EMAIL_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public saveNom(nom:string){
    // window.sessionStorage.removeItem(NOM_KEY);
    window.sessionStorage.setItem(NOM_KEY, nom);
  }

  public getNom(): any {
    const user = window.sessionStorage.getItem(NOM_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public savePrenom(prenom:string){
    // window.sessionStorage.removeItem(PRENOM_KEY);
    window.sessionStorage.setItem(PRENOM_KEY, prenom);
  }

  public getPreom(): any {
    const user = window.sessionStorage.getItem("AuthPrenom");
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