import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IUser } from 'src/app/shared/interface/interfaces';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(
    private authS: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }
  submitted: boolean;
  submit(): void {
    const user: IUser = {
      login: this.form.value.login,
      password: this.form.value.password,
    }
    
    this.authS.login(user).subscribe((res) => {
      // this.form.reset();
      // this.submitted = false;
      // this.router.navigate(['/home']);
      console.log(res);
      
    });
  }
}
