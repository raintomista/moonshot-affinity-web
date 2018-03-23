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
      autosize: true,
      width: 500,
      height: 200,
      margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0,
      }
    };

    const trace1: Partial<Plotly.ScatterData> = {
      x: [2, 3, 4, 5],
      y: [16, 5, 11, 9],
      mode: 'lines+markers',
      marker: {
        color: '#1AD7CC',
        size: 10
      },
      line: {
        color: '#1AD7CC',
        width: 2
      }
    };

    const data = [trace1];

    Plotly.plot(element, data, style);

  }

}
