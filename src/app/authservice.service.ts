import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {JwtserviceService as JWTService} from './jwtservice.service';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService implements CanActivate{

  constructor(private jwt : JWTService, private router : Router) { }

  canActivate() : boolean{
    if(!this.jwt.isAuthenticated())
    {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
