import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent implements OnInit {
  @Input()list: string[]

  constructor() { }

  ngOnInit(): void {
  }

}
