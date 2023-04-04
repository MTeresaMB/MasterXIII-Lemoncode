import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/model/user.wm';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: User;
  public dataError: boolean;


  constructor(public authService: AuthService, private router: Router) {
    this.user = { username: '', password: '' };
    this.dataError = false;
  }


  ngOnInit(): void {
  }

  onSubmit(event: { preventDefault: () => void; }): void {
    event.preventDefault();
    this.authService.setSpinnerState(true);
    this.authService.login(this.user.username, this.user.password).subscribe(
      (d) => {
        this.authService.setSpinnerState(false);
        if(d === false){
          this.dataError = true;
          setTimeout(() => {
            this.dataError = false;
          }, 4000);
        } else {
          this.router.navigate(['../dashboard'])
        }
      }, (e) => {
        console.log(`Error: ${e}`);
      }
    );
  }
}
