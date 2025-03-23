import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AuthService{
    private users = [
        { login: 'user1', password: 'password1', role: 'user' },
        { login: 'admin1', password: 'password1', role: 'admin' }
      ];
    public loggedIn = false;
    constructor() { }
    logIn(){
        this.loggedIn = true;
    }
    logOut(){
        this.loggedIn = false;
    }
    isAdmin(){
        const isUserAdmin = new Promise(
            (resolve, reject) => {
                    resolve(this.loggedIn);
                }
        );
        return isUserAdmin;
    }
}