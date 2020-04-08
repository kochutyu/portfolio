import { Component, OnInit } from '@angular/core';
import { UserWindowService } from 'src/app/shared/services/user-window.service';
import { IInputImg } from 'src/app/shared/model/input-img.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactMe: string = 'Зворотный контакт зы мною'

  inputImg: IInputImg[] = [
    { img: '../../../assets/img/components/pages/contact/user.png', placeholder: 'user' },
    { img: '../../../assets/img/components/pages/contact/email.png', placeholder: 'email' }
  ]

  constructor(
    public windowsS: UserWindowService
  ) { }

  ngOnInit(): void {
  }

  lols(): void{

  }

}
