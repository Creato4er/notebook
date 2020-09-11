import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectDescriptionComponent } from './project-description/project-description.component';
import { ProjectImageComponent } from './project-image/project-image.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project-list/project/project.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectDescriptionComponent,
    ProjectImageComponent,
    ProjectListComponent,
    ProjectComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
