import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss']
})
export class PublicHeaderComponent implements OnInit {
  title = 'Angular Laboratory Lemoncode'

  constructor( private MatIconRegistry: MatIconRegistry, private DomSanitizer: DomSanitizer, public authService: AuthService) {
    this.MatIconRegistry.addSvgIcon('angular',this.DomSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/angular.svg'))
  }
  ngOnInit() {}
}
