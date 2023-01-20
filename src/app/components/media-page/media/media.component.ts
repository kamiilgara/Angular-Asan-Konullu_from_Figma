import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allMedia } from 'src/app/allArrays';
import { faLink, faPrint } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})

export class MediaComponent {

  faLink = faLink;
  faPrint = faPrint;
  faSquareFacebook = faSquareFacebook;
  faLinkedin = faLinkedin;
  faTwitterSquare = faTwitterSquare;


  selectedMedia: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: any = this.route.snapshot.paramMap.get('id');
    this.selectedMedia = allMedia.find(i => i.id == id);
  };

  increase(item: any, id: any) {
    if (id == allMedia.length - 0) {
      document.getElementById("nextnews")?.classList.add("disabled")
    } else {
      item = allMedia[id]
      item.id++
      this.selectedMedia = item
      console.log(this.selectedMedia)
      document.getElementById("prevnews")?.classList.remove("disabled")
    }
  };

  decrease(item: any, id: any) {
    if (id == 0) {
      document.getElementById("prevnews")?.classList.add("disabled")
    } else {
      item = allMedia[id]
      item.id--
      this.selectedMedia = item
      console.log(this.selectedMedia)
      document.getElementById('nextnews')?.classList.remove("disabled")
    }
  };

}

