import { Component } from '@angular/core';
import { InfostateService } from 'src/app/services/infostate.service';

@Component({
  selector: 'app-about-team',
  templateUrl: './about-team.component.html',
  styleUrls: ['./about-team.component.css']
})

export class AboutTeamComponent {

  constructor(
    private ourTeam:InfostateService
  ) {}

  asanTeam = this.ourTeam.ourTeam;
}
