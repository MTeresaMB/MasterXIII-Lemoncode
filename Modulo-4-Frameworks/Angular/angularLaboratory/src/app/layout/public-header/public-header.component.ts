import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss']
})
export class PublicHeaderComponent implements OnInit {
  title = 'angular icon';
  constructor(
    private MatIconRegistry: MatIconRegistry,
    private DomSanitizer: DomSanitizer
  ) {
    this.MatIconRegistry.addSvgIcon('angular',this.DomSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/angular.svg'))
  }
  ngOnInit() {}
}
