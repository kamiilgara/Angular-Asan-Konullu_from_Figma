import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements DoCheck {

  pathname:any;

  ngDoCheck():void {
    this.pathname = window.location.pathname;
  }

}

