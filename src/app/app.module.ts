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
import { SmallDesctopComponent } from './components/navbar/small-desctop/small-desctop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MobileTabComponent } from './components/navbar/mobile-tab/mobile-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilterListComponent,
    SocialNetworksComponent,
    FooterComponent,
    LogoComponent,
    LargeDesctopComponent,
    SmallDesctopComponent,
    MobileTabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
