import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userEndpoint = 'http://localhost:3000/users';

  constructor(
    private http: HttpClient
  ) { }


  public logIn(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.http.post(this.userEndpoint + "/login", { email, password }).subscribe((res: any) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        resolve(true);
      })
    })
  }

  public signUp(email: string, password: string, name: string, surname: string, phone: string, address: string) {
    this.http.post(this.userEndpoint + "/signup", {
      email, password, name, surname, phone, address
    }).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('token', res.token);
    })
  }

  public logOut() {
    localStorage.removeItem('token');
  }

  public isLogged() {
    return !!localStorage.getItem('token');
  }

  public getUserData() {
    return this.http.get(this.userEndpoint + "/me", {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    });
  }

}
