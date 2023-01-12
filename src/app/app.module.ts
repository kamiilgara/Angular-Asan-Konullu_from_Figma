import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { TeamComponent } from './components/about-team/team/team.component';
import { StoreModule } from '@ngrx/store';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TeamcarouselComponent } from './components/about-team/team/teamcarousel/teamcarousel.component';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import { ProjectComponent } from './components/all-projects/project/project.component';

const rootconfig:Route[] = [
  {path: 'home', component: MainComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'aboutteam', component: AboutTeamComponent},
  {path: 'aboutteam/teamlist', component: TeamComponent},
  {path: 'allprojects', component: AllProjectsComponent},
  {path: 'allprojects/:id', component: ProjectComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SocialMediaGroupComponent,
    AboutUsComponent,
    MainComponent,
    AboutTeamComponent,
    TeamComponent,
    TeamcarouselComponent,
    AllProjectsComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rootconfig),
    NgbModule,
    FontAwesomeModule,
    StoreModule.forRoot({}, {}),
    CarouselModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
