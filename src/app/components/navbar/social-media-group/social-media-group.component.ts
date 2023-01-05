import { Component } from '@angular/core';
import { faSquareFacebook, faSquareInstagram, faSquareTwitter, faSquareYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'social-media-group',
  templateUrl: './social-media-group.component.html',
  styleUrls: ['./social-media-group.component.css']
})

export class SocialMediaGroupComponent {
  faSquareFacebook = faSquareFacebook;
  faSquareInstagram = faSquareInstagram;
  faSquareTwitter = faSquareTwitter;
  faSquareYoutube = faSquareYoutube;
}
