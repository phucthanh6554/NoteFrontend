import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class JwtserviceService {

  constructor(public jwtHelper : JwtHelperService) { }

  isAuthenticated() : boolean{
    let token = localStorage.getItem('JWT_token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
