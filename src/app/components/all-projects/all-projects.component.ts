import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { allProjectsList } from 'src/app/allArrays';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})

export class AllProjectsComponent {

  allProjectsList = allProjectsList ;

  constructor(private router:Router, private route: ActivatedRoute) {}


  
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
}
