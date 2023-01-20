import { Component } from '@angular/core';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent {

  faLocationDot = faLocationDot;
  faPhone = faPhone;
  faEnvelope = faEnvelope;

  style3 = {
    'color' : '#104de5',
    'background-color' : 'white',
    'font-size' : '38px',
    'margin' : '0px 4px',
    'border-radius' : '10px'
  }

}
