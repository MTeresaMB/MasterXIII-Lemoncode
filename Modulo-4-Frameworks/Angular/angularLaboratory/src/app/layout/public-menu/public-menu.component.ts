import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-public-menu',
  templateUrl: './public-menu.component.html',
  styleUrls: ['./public-menu.component.scss']
})
export class PublicMenuComponent {
  constructor(public authService: AuthService){}
}
