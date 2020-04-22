import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { IUser, INavigate } from 'src/app/shared/interface/interfaces';
import { Router } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  ADMIN: IUser;
  adminNav: INavigate[] = [
    { text: 'all works', path: 'admin/all-works' },
    { text: 'new work', path: 'admin/new-work' },
  ];
  viewerNav: INavigate[] = [
    { text: 'home', path: 'home' },
    { text: 'about', path: 'about' },
    { text: 'contact', path: 'contact' }
  ];
  activeNav: INavigate[] = this.viewerNav;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  auth: boolean = false;

  loginToAdmin(): void {
    const getAdmin: IUser = JSON.parse(localStorage.getItem('admin'));
    if (getAdmin) {
      this.router.navigate(['/admin', 'new-work']);
      this.activeNav = this.adminNav;
      this.auth = true;
    }
  }

  checkAdminAuth(): boolean{
    const authStatus: boolean = JSON.parse(localStorage.getItem('auth'));
    if (authStatus) {
      return true
    }
    return false
  }

  logIn(): void {
    localStorage.setItem('auth', 'true');
    this.activeNav = this.adminNav;
    this.router.navigate(['/admin', 'all-works']);
  }

  logOut(): void {
    localStorage.removeItem('admin');
    localStorage.removeItem('auth');
    this.activeNav = this.viewerNav;
    this.router.navigate(['home']);
  }
}
