import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SocialNetworksComponent } from './components/social-networks/social-networks.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/navbar/logo/logo.component';
import { LargeDesctopComponent } from './components/navbar/large-desctop/large-desctop.component';
import { SmallDesctopComponent } from './components/navbar/small-desctop/small-desctop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MobileTabComponent } from './components/navbar/mobile-tab/mobile-tab.component';
import { HomeComponent } from './pages/home/home.component';
import { WorkComponent } from './pages/work/work.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CardPreviewComponent } from './components/card-preview/card-preview.component';
import { ContactInformationComponent } from './components/pages/home/contact-information/contact-information.component';
import { SliderComponent } from './components/slider/slider.component';
import { WorkInfoComponent } from './components/work-info/work-info.component';
import { TagComponent } from './components/tag/tag.component';
import { DoneListComponent } from './components/done-list/done-list.component';
import { ButtonComponent } from './components/button/button.component';
import { InputImgComponent } from './components/input-img/input-img.component';
import { ProgressComponent } from './components/progress/progress.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { ngxUiLoaderConfig } from 'src/loader.config';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { AlertComponent } from './components/alert/alert.component';
import { environment } from 'src/environments/environment';
import { NewWorkComponent } from './admin/pages/new-work/new-work.component';
import { FilterComponent } from './components/navbar/filter/filter.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { FilterSmallDesctopAndMobileTabComponent } from './components/navbar/filter-small-desctop-and-mobile-tab/filter-small-desctop-and-mobile-tab.component';
import { ToastrModule } from 'ngx-toastr';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare as farSquare, faCheckSquare as farCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faGithub, faMedium, faInstagram, faFacebook, faLinkedin, faLinkedinIn, faTelegram, faTelegramPlane, faFacebookF } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SocialNetworksComponent,
    FooterComponent,
    LogoComponent,
    LargeDesctopComponent,
    SmallDesctopComponent,
    MobileTabComponent,
    HomeComponent,
    WorkComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    CardPreviewComponent,
    ContactInformationComponent,
    SliderComponent,
    WorkInfoComponent,
    TagComponent,
    DoneListComponent,
    ButtonComponent,
    InputImgComponent,
    ProgressComponent,
    AdminComponent,
    LoginComponent,
    AlertComponent,
    NewWorkComponent,
    FilterComponent,
    FilterPipe,
    FilterSmallDesctopAndMobileTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule,
    FontAwesomeModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    AngularFireModule.initializeApp(environment.configFire),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    BrowserAnimationsModule,
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { 
  constructor(private library: FaIconLibrary) {
    library.addIcons(faSquare, faCheckSquare, farSquare, farCheckSquare, faStackOverflow, faGithub, faMedium, faInstagram, faLinkedinIn, faTelegramPlane,faFacebookF);
  }
}
