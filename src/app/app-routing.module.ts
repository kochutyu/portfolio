import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorkComponent } from './pages/work/work.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { NewWorkComponent } from './admin/pages/new-work/new-work.component';
import { AuthGuardService } from './admin/shared/services/auth-guard.service';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent
  },
  { path: 'work/:id', component: WorkComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
      { path: 'work/edit/:id', component: NewWorkComponent },
      { path: 'login', component: LoginComponent },
      { path: 'all-works', component: HomeComponent, canActivate: [AuthGuardService] },
      { path: 'new-work', component: NewWorkComponent, canActivate: [AuthGuardService] },
    ]
  },
  { path: '**', redirectTo: '/home' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
