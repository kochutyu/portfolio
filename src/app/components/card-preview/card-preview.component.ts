import { Component, OnInit, Input } from '@angular/core';
import { UserWindowService } from 'src/app/shared/services/user-window.service';
import { CardPreviewService } from 'src/app/shared/services/card-preview.service';

@Component({
  selector: 'app-card-preview',
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.scss']
})
export class CardPreviewComponent implements OnInit {
  list: any[];
  @Input() widthBlock: string;
  @Input() heightBlock: string;

  constructor(
    public windowS: UserWindowService,
    public cardPreviewS: CardPreviewService
  ) { }

  ngOnInit(): void {
    this.list = this.cardPreviewS.list;
  }

}
