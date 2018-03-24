import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from ".//app-routing.module";
import { InvitationLoginComponent } from "./invitation-login/invitation-login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CampaignsComponent } from "./campaigns/campaigns.component";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { AnalyticsComponent } from "./analytics/analytics.component";
import { RankingsComponent } from "./rankings/rankings.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AdminTrainComponent } from "./admin-train/admin-train.component";
import { FileDropModule } from "ngx-file-drop";
import { AnalyzeComponent } from "./analyze/analyze.component";
import { FindComponent } from "./find/find.component";
import { AdminService } from "./admin.service";
import { AdminAnalyzeComponent } from "./admin-analyze/admin-analyze.component";
import { AdminAnalyzeService } from "./services/admin-analyze.service";
import { FindService } from "./services/find.service";

@NgModule({
  declarations: [
    AppComponent,
    InvitationLoginComponent,
    DashboardComponent,
    CampaignsComponent,
    AnalyticsComponent,
    RankingsComponent,
    AdminDashboardComponent,
    AdminTrainComponent,
    AnalyzeComponent,
    FindComponent,
    AdminAnalyzeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FileDropModule,
    NgxChartsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    FormsModule
  ],
  providers: [AdminService, AdminAnalyzeService, FindService],
  bootstrap: [AppComponent]
})
export class AppModule {}
