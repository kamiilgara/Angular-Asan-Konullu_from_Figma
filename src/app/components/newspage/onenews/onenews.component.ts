import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allNews } from 'src/app/allArrays';
import { faLink, faPrint } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-onenews',
  templateUrl: './onenews.component.html',
  styleUrls: ['./onenews.component.css']
})

export class OnenewsComponent implements OnInit, DoCheck {

  faLink = faLink;
  faSquareFacebook = faSquareFacebook;
  faPrint = faPrint;
  faLinkedin = faLinkedin;
  faTwitterSquare = faTwitterSquare;

  selectedNews: any;

  constructor(private route: ActivatedRoute) { };

  ngOnInit(): void {
    let id: any = this.route.snapshot.paramMap.get('id');
    this.selectedNews = allNews.find(i => i.id == id);
  };

  ngDoCheck(): void {
    this.selectedNews;
  }

  // increase(i: number) {
  //   if (i == allNews.length - 0) {
  //     document.getElementById('nextnews')?.classList.add('disabled');
  //   } else {
  //     return (document.getElementById('prevnews')?.classList.remove("disabled"), this.nowSelected = allNews[i], this.nowSelected.id++, this.selectedNews = this.nowSelected, console.log(this.selectedNews));
  //   }
  // }

  // decrease(i: number) {
  //   if (i == 0) {
  //     document.getElementById('prevnews')?.classList.add('disabled');
  //   } else {
  //     return (this.nowSelected = allNews[i], this.nowSelected.id--, this.selectedNews = this.nowSelected, console.log(this.selectedNews), document.getElementById('nextnews')?.classList.remove('disabled'));
  //   }
  // }

  increase(item: any, id: any) {
    if (id == allNews.length - 0) {
      document.getElementById("nextnews")?.classList.add("disabled")
    } else {
      item = allNews[id]
      item.id++
      this.selectedNews = item
      console.log(this.selectedNews)
      document.getElementById("prevnews")?.classList.remove("disabled")
    }
  };

  decrease(item: any, id: any) {
    if (id == 0) {
      document.getElementById("prevnews")?.classList.add("disabled")
    } else {
      item = allNews[id]
      item.id--
      this.selectedNews = item
      console.log(this.selectedNews)      
      document.getElementById('nextnews')?.classList.remove("disabled")
    }
  };
}