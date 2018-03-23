import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-admin-analyze',
  templateUrl: './admin-analyze.component.html',
  styleUrls: ['./admin-analyze.component.css']
})
export class AdminAnalyzeComponent implements OnInit {
  data: any[] = [];

  view: any[] = [600, 500];

  // options
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = true;

  constructor() {
  }

  onSelect(event) {
    console.log(event);
  }
  ngOnInit() {
    this.data = [
      {
        "name": "Germany",
        "value": 8940000
      },
      {
        "name": "USA",
        "value": 5000000
      },
      {
        "name": "France",
        "value": 7200000
      }
    ];
  }
}
