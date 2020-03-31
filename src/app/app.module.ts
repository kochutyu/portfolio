import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterListComponent } from './components/navbar/filter-list/filter-list.component';
import { SocialNetworksComponent } from './components/social-networks/social-networks.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/navbar/logo/logo.component';
import { LargeDesctopComponent } from './components/navbar/large-desctop/large-desctop.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilterListComponent,
    SocialNetworksComponent,
    FooterComponent,
    LogoComponent,
    LargeDesctopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
