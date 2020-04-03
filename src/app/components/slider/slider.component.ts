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
    let clear = setTimeout(() => {
      
      if (this.nextSlide.nativeElement.childNodes[0]) {
        if (this.iSelect === 0 || this.iSelect < this.img.length - 1) this.iSelect += 1;
        else this.iSelect = 0;
      } else {
        if (this.iSelect === 0 || this.iSelect < this.img.length - 1) this.iSelect += 1;
        else this.iSelect = 0;
      }
        // this.checkNextSlide = false;
        // clearInterval(clear);
      this.OnNextSlide();
      let a = 0;
      a += 1;
      console.log(a);
      


      // if (!this.checkNextSlide) {
      //   if (this.nextSlide.nativeElement.childNodes[0]) {
      //     if (this.iSelect === 0 || this.iSelect < this.img.length - 1) this.iSelect += 1;
      //     else this.iSelect = 0;
      //   } else {
      //     if (this.iSelect === 0 || this.iSelect < this.img.length - 1) this.iSelect += 1;
      //     else this.iSelect = 0;
      //   }
      //   console.log(1);
      //   this.checkNextSlide = false;
      //   clearInterval(clear);
      //   this.OnNextSlide();
      // } else {
      //   console.log(1);
        
      // }
    }, 100);
  }
  thisItem(item): void {
    this.iSelect = item;
    this.checkNextSlide = true;
  }


}
