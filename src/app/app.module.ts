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
import { ProjectComponent } from './components/all-projects/oneproject/project.component';
import { HeadCarouselComponent } from './components/main/head-carousel/head-carousel.component';
import { AboutActComponent } from './components/main/about-act/about-act.component';
import { FourlinkComponent } from './components/main/fourlink/fourlink.component';
import { MainTwoDivComponent } from './components/main/main-two-div/main-two-div.component';
import { OurProjectsComponent } from './components/main/our-projects/our-projects.component';
import { MainMapComponent } from './components/main/main-map/main-map.component';
import { MainAwardsComponent } from './components/main/main-awards/main-awards.component';
import { MainMediaComponent } from './components/main/main-media/main-media.component';
import { MainhistoryDayComponent } from './components/main/mainhistory-day/mainhistory-day.component';
import { MainTransitionComponent } from './components/main/main-transition/main-transition.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewspageComponent } from './components/newspage/newspage.component';
import { OnenewsComponent } from './components/newspage/onenews/onenews.component';
import { MediaPageComponent } from './components/media-page/media-page.component';

const rootconfig:Route[] = [
  {path: '', component: MainComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'aboutteam', component: AboutTeamComponent},
  {path: 'aboutteam/teamlist', component: TeamComponent},
  {path: 'allprojects', component: AllProjectsComponent},
  {path: 'allprojects/:id', component: ProjectComponent},
  {path: 'news', component: NewspageComponent},
  {path: 'news/:id', component: OnenewsComponent},
  {path: 'media', component: MediaPageComponent}
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
    HeadCarouselComponent,
    AboutActComponent,
    FourlinkComponent,
    MainTwoDivComponent,
    OurProjectsComponent,
    MainMapComponent,
    MainAwardsComponent,
    MainMediaComponent,
    MainhistoryDayComponent,
    MainTransitionComponent,
    FooterComponent,
    NewspageComponent,
    OnenewsComponent,
    MediaPageComponent,
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
