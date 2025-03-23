import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})


export class AuthService{
    private users = [
        { login: 'user1', password: '0000', role: 'user' },
        { login: 'admin1', password: '1234', role: 'admin' }
      ];
    public currentUser = { login: '', role: ''};
    public loggedIn = false;
    constructor() { }
    logIn(login: string, password: string): boolean {
      const user = this.users.find(u => u.login === login && u.password === password);
      if (user) {
        this.currentUser = user;
        this.loggedIn = true;
        return true;
      }
      return false;
    }
    logOut(){
        this.currentUser = { login: '', role: '' };
        this.loggedIn = false;
    }
    isLogged(){
        return this.loggedIn;
      }
    isAdmin(){
        return this.isLogged() && this.currentUser.role === 'admin';
    }
    isUser(){
        return this.isLogged() && this.currentUser.role === 'user';
    }
}