import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { AdminAnalyzeService } from "../services/admin-analyze.service";
import * as _ from "lodash";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-admin-analyze",
  templateUrl: "./admin-analyze.component.html",
  styleUrls: ["./admin-analyze.component.css"],
})
export class AdminAnalyzeComponent implements OnInit {
  user: any = {};


  data: any[] = [];

  view: any[] = [600, 500];

  // options
  showLegend = true;

  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = true;

  constructor(private adminAnalyzeService: AdminAnalyzeService, private http: HttpClient) {}

  ngAfterInit(){
    // this.get("bexsnoww");
  }
  ngOnInit() {
    this.get('tomistacles');
    this.data = [
      {
        name: "Germany",
        value: 8940000
      },
      {
        name: "USA",
        value: 5000000
      },
      {
        name: "France",
        value: 7200000
      }
    ];
  }

  onSelect(event) {
    console.log(event);
  }

  get(username) {
    this.http.get(`http://192.168.43.183:5000/api/get_stats/${username}`).subscribe(data => {
      console.log(data);
      this.user = data
    });
  }
}
