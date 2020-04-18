import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { IUser } from 'src/app/shared/interface/interfaces';
// import { User, FbAuthResponse } from '../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public error$: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient) { }

  get token(): string {
    const expDate = new Date(localStorage.getItem('fb-token-exp'))
    if (new Date() > expDate) {
      this.logout()
      return null
    }
    return localStorage.getItem('fb-token')
  }

  login(user: IUser): Observable<any> {
    user.returnSecureToken = true
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.configFire.apiKey}`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      )
  }

  logout() {
    this.setToken(null)
  }

  handleError(error: HttpErrorResponse): any {
    const { message } = error.error.error;
    switch (message) {
      case 'INVALID_EMAIL':
        this.error$.next('Не правильний емейл');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('Не правильний пароль');
        break;
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Нема емейлу такого');
        break;
    }
    return throwError(error)
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  private setToken(response: any | null) {
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
      localStorage.setItem('fb-token', response.idToken)
      localStorage.setItem('fb-token-exp', expDate.toString())
    } else {
      localStorage.clear()
    }
  }
}
