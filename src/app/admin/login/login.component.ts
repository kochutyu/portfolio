import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IUser } from 'src/app/shared/interface/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  submit(): void {
    const user: IUser = {
      login: this.form.value.login,
      password: this.form.value.password,
    }
    alert(`
    login: ${user.login}
    password: ${user.password}
    `);
  }
}
