import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {apiUrl} from './env';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private rootUrl = apiUrl + '/user';
  constructor(private http: HttpClient) { }

  login(email:string, password : string): Observable<any>{
    let url = this.rootUrl + '/login';
    let body = {email: email, password : password};

    return this.http.post<any>(url, body, {observe : 'response'});
  }

  register(name : string, email: string, password: string) : Observable<any>{
    let url = this.rootUrl + '/create';
    let body = {name : name,email: email, password : password};

    return this.http.post<any>(url, body, {observe: 'response'});
  }

  logout() : void
  {
    localStorage.removeItem('JWT_token');
  }
}
