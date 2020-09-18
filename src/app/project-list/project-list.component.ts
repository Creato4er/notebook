import { Component, OnInit, Input } from '@angular/core';
import SampleJson from 'src/assets/json/projectDetails.json';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  public projectList;

  constructor() { }

  ngOnInit() {
    this.projectList = SampleJson.projects;
  }

}
