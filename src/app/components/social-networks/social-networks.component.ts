import { Component, OnInit } from '@angular/core';
import { SocialNetworksService } from 'src/app/shared/services/social-networks.service';
import { SocialNetworks } from 'src/app/shared/interface/social-networks.interface';

@Component({
  selector: 'app-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.scss']
})
export class SocialNetworksComponent implements OnInit {
  social: SocialNetworks;
  constructor(
    public socialNetworksS: SocialNetworksService
  ) { }

  ngOnInit() {
    this.social = this.socialNetworksS.social;
  }

}
