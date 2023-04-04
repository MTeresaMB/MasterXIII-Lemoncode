import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private AuthService: AuthService, private router: Router){}

  canActivate(){
    if(!this.AuthService.isLogged()) {
      this.router.navigateByUrl('./home');
      return false;
    }
    return true;
  }
}
