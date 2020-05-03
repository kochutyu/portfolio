import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IUser } from 'src/app/shared/interface/interfaces';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FirestoreService } from 'src/app/shared/services/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  submitted: boolean;
  adminSub: Subscription;
  constructor(
    private authS: AuthService,
    private router: Router,
    private fireS: FirestoreService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }
  submit(): void {
    this.submitted = true;
    const user: IUser = {
      login: this.form.value.login,
      password: this.form.value.password,
    }

    this.adminSub = this.fireS.getCollection('admin').subscribe(res => {

      const admin: IUser = res.map(item => {
        return {
          ...item.payload.doc.data(),
          id: item.payload.doc.id
        }
      }).find((item: IUser) => item.login === user.login && item.password === user.password)
      this.authS.ADMIN = admin;

      if (admin) { 
        this.router.navigate(['admin', 'all-works']);
        localStorage.setItem('admin', JSON.stringify(admin));
        this.authS.logIn();
      }
      
      this.submitted = false;
      this.form.reset();
      this.adminSub.unsubscribe();
    })
  }
}
