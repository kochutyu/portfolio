import { Component, OnInit, Input } from '@angular/core';
import { IInputImg } from 'src/app/shared/model/input-img.model';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.scss']
})
export class InputImgComponent implements OnInit {
  @Input() img: string;
  @Input() placeholder: string;
  @Input() list: IInputImg[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
