import { Component, OnInit, Input } from '@angular/core';
import { ITag } from 'src/app/shared/model/tag.model';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  @Input() tags: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
