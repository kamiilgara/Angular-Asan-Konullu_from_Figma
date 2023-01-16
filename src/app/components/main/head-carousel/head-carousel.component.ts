import { Component } from '@angular/core';

@Component({
  selector: 'app-head-carousel',
  templateUrl: './head-carousel.component.html',
  styleUrls: ['./head-carousel.component.css']
})
export class HeadCarouselComponent {

  
  customOptions: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

}
