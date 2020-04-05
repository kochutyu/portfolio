import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  value: string = 'show more'
  @Input() width: string;
  @Input() height: string;
  @Input() align: string;
  constructor() { }

  ngOnInit(): void {
  }

}
