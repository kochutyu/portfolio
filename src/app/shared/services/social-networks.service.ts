import { Injectable } from '@angular/core';
import { SocialNetworks } from '../interface/social-networks.interface';

@Injectable({
  providedIn: 'root'
})
export class SocialNetworksService {
  social: SocialNetworks = {
    instagram: 'https://www.instagram.com/kochutyu/',
    facebook: 'https://www.instagram.com/kochutyu/',
    viber: 'https://www.instagram.com/kochutyu/',
    telegram: 'https://www.instagram.com/kochutyu/',
    linkedin: 'https://www.instagram.com/kochutyu/'
  };

  constructor() { }
}
