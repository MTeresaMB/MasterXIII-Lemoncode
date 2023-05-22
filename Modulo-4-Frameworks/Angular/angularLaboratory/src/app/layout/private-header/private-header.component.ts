import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss']
})
export class PrivateHeaderComponent {
  title = 'Angular Laboratory Lemoncode'

  constructor(private MatIconRegistry: MatIconRegistry, private DomSanitizer: DomSanitizer, public authService: AuthService, private router: Router) {
    this.MatIconRegistry.addSvgIcon('angular',this.DomSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/angular.svg'))
  }
  handleLogOut(): void {
    this.authService.logout();
    this.router.navigate(['./home']);
  }
  ngOnInit() {}
}
