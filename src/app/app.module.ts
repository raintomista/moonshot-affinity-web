import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { InvitationLoginComponent } from './invitation-login/invitation-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { RankingsComponent } from './rankings/rankings.component';


@NgModule({
  declarations: [
    AppComponent,
    InvitationLoginComponent,
    DashboardComponent,
    CampaignsComponent,
    AnalyticsComponent,
    RankingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
