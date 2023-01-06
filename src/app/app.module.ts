import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SocialMediaGroupComponent } from './components/navbar/social-media-group/social-media-group.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { Route, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AboutTeamComponent } from './components/about-team/about-team.component';

const rootconfig:Route[] = [
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'home', component: MainComponent},
  {path: 'aboutteam', component: AboutTeamComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SocialMediaGroupComponent,
    AboutUsComponent,
    MainComponent,
    AboutTeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rootconfig),
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
