import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as _ from 'lodash';
import * as Plotly from 'plotly.js';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  @ViewChild('chart') el: ElementRef;

  constructor() { }

  ngOnInit() {
    this.graphData();
  }

  graphData() {
    const element = this.el.nativeElement;

    const style = {
        margin : {
          t : 0
        }
    };

    const data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16]
    }]

    Plotly.plot(element, data, style);

  }

}
