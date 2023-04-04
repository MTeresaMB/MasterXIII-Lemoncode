import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { User } from '../model/user.wm';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;
  private authentication: boolean;
  private spinnerState: boolean;

  constructor() {
    this.authentication = false;
    this.user = this.getLocalStorageData();
    this.spinnerState = false;
  }

  login(username: string, password: string): Observable<boolean>{
    if(username === 'm' && password === 't'){
      this.user = { username, password };
      this.setLocalStorageData();
      this.authentication = true;
      return of(true).pipe(delay(2000));
    }
    return of(false).pipe(delay(2000));
  }

  logout(): void {
    this.user = { username: '', password: ''};
    this.authentication = false;
    this.cleanLocalStorageData();
  }

  isLogged(): boolean {
    return this.authentication;
  }

  getUsername(): string {
    return this.user.username;
  }


  setLocalStorageData(): void {
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  getLocalStorageData(): User{
    if(localStorage.getItem('user') === null){
      return {username: '', password: ''}
    } else {
      this.authentication = true;
      return JSON.parse(localStorage.getItem('user')!);
    }
  }

  cleanLocalStorageData(): void{
    localStorage.clear;
  }

  setSpinnerState(v: boolean): void {
    this.spinnerState = v;
  }

  getSpinnerState(): boolean {
    return this.spinnerState;
  }
}
