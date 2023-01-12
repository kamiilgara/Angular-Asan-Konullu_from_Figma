import { Component } from '@angular/core';
import { InfostateService } from 'src/app/services/infostate.service';

@Component({
  selector: 'app-teamcarousel',
  templateUrl: './teamcarousel.component.html',
  styleUrls: ['./teamcarousel.component.css']
})

export class TeamcarouselComponent {

  customOptions: any = {
    loop: true,
    mouseDrag: true, 
    autoWidth: false,
    dotsContainer: false,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  constructor(
    private team:InfostateService
  ) {}
  
  ourasanteam = this.team.team

}
