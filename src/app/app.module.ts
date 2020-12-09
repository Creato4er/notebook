import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatStepperModule} from '@angular/material/stepper';


import { AppComponent } from './app.component';
import { ProjectDescriptionComponent } from './components/project-description/project-description.component';
import { ProjectImageComponent } from './components/project-image/project-image.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectComponent } from './components/project-list/project/project.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthorDescriptionComponent } from './components/author-description/author-description.component';
import { CareerJourneyComponent } from './components/career-journey/career-journey.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectDescriptionComponent,
    ProjectImageComponent,
    ProjectListComponent,
    ProjectComponent,
    HeaderComponent,
    FooterComponent,
    AuthorDescriptionComponent,
    CareerJourneyComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatStepperModule
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
