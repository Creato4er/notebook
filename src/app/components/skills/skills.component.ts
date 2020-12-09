import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @ViewChild('charts') public chartEl: ElementRef;
  constructor() { }
  colors = ['#120078', '#9d0191', '#fd3a69', '#fecd1a']
  myOptions: any = {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'Experience in Computer science'
    },
    xAxis: {
      categories: ['Angular', 'Javascript', 'CSS', 'JAVA', 'DS & ALGO', 'SYSTEM DESIGN', 'Machine Learning']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total fruit consumption'
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [{
      name: 'Rating',
      data: [
        {
          y: 5,
          color: this.colors[0]
        },
        {
          y: 6,
          color: this.colors[1]
        },
        {
          y: 8,
          color: this.colors[2]
        },
        {
          y: 8,
          color: this.colors[3]
        },
        {
          y: 3,
          color: this.colors[0]
        },
        {
          y: 1,
          color: this.colors[1]
        },
        {
          y: 9,
          color: this.colors[3]
        }]
    }]
  };
  ngAfterViewInit(){
    Highcharts.chart(this.chartEl.nativeElement, this.myOptions);
  }
}
