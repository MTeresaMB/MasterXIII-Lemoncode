import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  title = 'Master Front End XIII  - Angular Laboratorio'

  constructor(private MatIconRegistry: MatIconRegistry, private DomSanitizer: DomSanitizer) {
    this.MatIconRegistry.addSvgIcon('angular',this.DomSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/angular.svg'))
  }

}
