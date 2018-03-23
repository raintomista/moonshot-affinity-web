import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as _ from 'lodash';
import * as Plotly from 'plotly.js';
import Pie from 'plotly.js/lib/pie';

@Component({
  selector: 'app-admin-analyze',
  templateUrl: './admin-analyze.component.html',
  styleUrls: ['./admin-analyze.component.css']
})
export class AdminAnalyzeComponent implements OnInit {

  @ViewChild('chart') el: ElementRef;

  constructor() { }

  ngOnInit() {
    this.graphData();
  }

  graphData() {
    const element = this.el.nativeElement;

    const style = {
      autosize: true,
      height: 400,
      width: 500
    };

    const trace1: Pie = {
      values: [19, 26, 55],
      labels: ['Residential', 'Non-Residential', 'Utility'],
      type: 'pie'
    };

    Plotly.plot(element, trace1, style);

  }

}
