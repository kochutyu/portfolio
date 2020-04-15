import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() value: string = 'show more'
  @Input() width: string;
  @Input() height: string = '50px';
  @Input() type: string = 'button';
  constructor() { }

  ngOnInit(): void {
  }

}
