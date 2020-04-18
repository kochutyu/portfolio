import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { IUser, INavigate } from 'src/app/shared/interface/interfaces';
// import { User, FbAuthResponse } from '../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  ADMIN: IUser;
  adminNav: INavigate[] = [
    { text: 'new work', path: 'admin/new-work' },
  ];
  viewerNav: INavigate[] = [
    { text: 'home', path: 'home' },
    { text: 'work', path: 'work' },
    { text: 'about', path: 'about' },
    { text: 'contact', path: 'contact' }
  ];
  activeNav: INavigate[] = this.viewerNav;
  constructor(private http: HttpClient) { }

}
