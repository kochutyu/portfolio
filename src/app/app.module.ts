import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterListComponent } from './components/navbar/filter-list/filter-list.component';
import { SocialNetworksComponent } from './components/social-networks/social-networks.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilterListComponent,
    SocialNetworksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
