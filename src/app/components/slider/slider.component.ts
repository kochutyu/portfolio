import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  iSelect: number = 0;
  @Input() img: string[];
  @ViewChild('nextSlide', { static: false }) nextSlide: ElementRef;
  constructor() { }


  ngOnInit() {
    this.OnNextSlide();
  }


  checkNextSlide: boolean = false;
  OnNextSlide(): void {
    let clear = setInterval(() => {
      if (!this.checkNextSlide) {
        if (this.nextSlide.nativeElement.childNodes[0]) {
          if (this.iSelect === 0 || this.iSelect < this.img.length - 1) this.iSelect += 1;
          else this.iSelect = 0;
        } else {
          if (this.iSelect === 0 || this.iSelect < this.img.length - 1) this.iSelect += 1;
          else this.iSelect = 0;
        }
      } else {
        clearInterval(clear);
        this.checkNextSlide = false;
        this.OnNextSlide();
      }
    }, 5000);
  }

  thisItemSelected(item): void {
    this.iSelect = item;
    this.checkNextSlide = true;
  }


}
