import { Component } from '@angular/core';
import { faHandHoldingHeart, faCalendarDay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-two-div',
  templateUrl: './main-two-div.component.html',
  styleUrls: ['./main-two-div.component.css']
})

export class MainTwoDivComponent {
  faHandHoldingHeart = faHandHoldingHeart;
  faCalendarDay = faCalendarDay;
}
