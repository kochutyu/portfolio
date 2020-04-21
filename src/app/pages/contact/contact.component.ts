import { Component, OnInit } from '@angular/core';
import { UserWindowService } from 'src/app/shared/services/user-window.service';
import { InputImg } from 'src/app/shared/interface/input-img.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactMe: string = 'Зворотный контакт зы мною'

  form: FormGroup;

  inputImg: InputImg[] = [
    {
      img: '../../../assets/img/components/pages/contact/user.png',
      placeholder: 'user',
      formControlName: 'foemName'
    },
    {
      img: '../../../assets/img/components/pages/contact/email.png',
      placeholder: 'email',
      formControlName: 'formControl'
    }
  ]
  constructor(
    public windowsS: UserWindowService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, Validators.required),
      user: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required)
    });

  }

  lols(): void {

  }
  submited: boolean;
  submit(): void {
    this.submited = true;
    const name = {
      name: this.form.value.user,
      email: this.form.value.email,
      text: this.form.value.text,
    }
    const url = 'https://us-central1-portfolio-d9ab9.cloudfunctions.net/sendMail';
    this.http.post(url, null, {
      params: {
        name: name.name,
        email: name.email,
        text: name.text,
      }
    }).subscribe(res => {
      console.log(res);
      this.submited = false;
    });
  }

}
