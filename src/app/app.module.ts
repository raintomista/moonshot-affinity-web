import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { InvitationLoginComponent } from './invitation-login/invitation-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AnalyticsComponent } from './analytics/analytics.component';
import { RankingsComponent } from './rankings/rankings.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminTrainComponent } from './admin-train/admin-train.component';
import { FileDropModule } from 'ngx-file-drop';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FileDropModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
