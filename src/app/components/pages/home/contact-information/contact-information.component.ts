import { Component, OnInit, Input } from '@angular/core';
import { ContactInformationService } from 'src/app/shared/services/pages/contact-information.service';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss']
})
export class ContactInformationComponent implements OnInit {
  hover: boolean;
  email: string;
  phoneNumber: string;


  @Input() topContext: string;
  @Input() rightContext: string;
  @Input() transformBlock: string;
  @Input() topBlock: string;
  @Input() rightBlock: string;
  @Input() bottomBlock: string;
  @Input() justifyBlock: string;
  @Input() flexDirectionBlock: string;

  constructor(
    public contactInfoS: ContactInformationService
  ) { }

  ngOnInit(): void {
    this.phoneNumber = this.contactInfoS.phoneNumber
    this.email = this.contactInfoS.email;
  }

}
