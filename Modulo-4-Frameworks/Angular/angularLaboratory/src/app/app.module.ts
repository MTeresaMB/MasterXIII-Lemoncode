import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './layout/footer/footer.component';
import { PrivateMenuComponent } from './layout/private-menu/private-menu.component';
import { PublicMenuComponent } from './layout/public-menu/public-menu.component';
import { PublicHeaderComponent } from './layout/public-header/public-header.component';
import { PrivateHeaderComponent } from './layout/private-header/private-header.component';
import { AboutComponent } from './pods/about/about.component';
import { CrudComponent } from './pods/crud/crud.component';
import { DashboardComponent } from './pods/dashboard/dashboard.component';
import { GalleryComponent } from './pods/gallery/gallery.component';
import { HomeComponent } from './pods/home/home.component';
import { LoginComponent } from './pods/login/login.component';
import { PagesComponent } from './pods/pages/pages.component';
import { ProfileComponent } from './pods/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PrivateMenuComponent,
    PublicMenuComponent,
    PublicHeaderComponent,
    PrivateHeaderComponent,
    AboutComponent,
    CrudComponent,
    DashboardComponent,
    GalleryComponent,
    HomeComponent,
    LoginComponent,
    PagesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
