import { Component, Input } from '@angular/core';
import { allNews } from 'src/app/allArrays';

@Component({
  selector: 'app-newspage',
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.css']
})

export class NewspageComponent {

  allNews = allNews;

}
