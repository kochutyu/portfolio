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

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { AlertComponent } from './components/alert/alert.component';
import { environment } from 'src/environments/environment';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    AngularFireModule.initializeApp(environment.configFire),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
