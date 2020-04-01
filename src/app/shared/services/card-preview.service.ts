import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardPreviewService {
  list: any[] = [
    'https://picsum.photos/101',
    'https://picsum.photos/102',
    'https://picsum.photos/103',
    'https://picsum.photos/104',
    'https://picsum.photos/105',
    'https://picsum.photos/106',
    'https://picsum.photos/107',
    'https://picsum.photos/108',
    'https://picsum.photos/109',
    'https://picsum.photos/110',
    'https://picsum.photos/111',
    'https://picsum.photos/112',
    'https://picsum.photos/113',
    'https://picsum.photos/114',
  ];

  constructor() { }
}
