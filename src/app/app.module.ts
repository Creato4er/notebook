import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectDescriptionComponent } from './components/project-description/project-description.component';
import { ProjectImageComponent } from './components/project-image/project-image.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectComponent } from './components/project-list/project/project.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AuthorDescriptionComponent } from './components/author-description/author-description.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectDescriptionComponent,
    ProjectImageComponent,
    ProjectListComponent,
    ProjectComponent,
    HeaderComponent,
    FooterComponent,
    AuthorDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
