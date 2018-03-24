import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitationLoginComponent } from './invitation-login/invitation-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { RankingsComponent } from './rankings/rankings.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminTrainComponent } from './admin-train/admin-train.component';
import { AnalyzeComponent } from './analyze/analyze.component';
import { FindComponent } from './find/find.component';
import { AdminAnalyzeComponent } from './admin-analyze/admin-analyze.component';
import { MilestoneComponent } from './milestone/milestone.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'invitation-login', component: InvitationLoginComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'campaigns', pathMatch: 'full' },
      { path: 'campaigns', component: CampaignsComponent },
      { path: 'milestones', component: MilestoneComponent },
      { path: 'rankings', component: RankingsComponent },
    ]
  },
  {
    path: 'admin-dashboard', component: AdminDashboardComponent,
    children: [
      { path: '', redirectTo: 'train', pathMatch: 'full' },
      { path: 'train', component: AdminTrainComponent },
      { path: 'find', component: FindComponent },
      { path: 'analyze/:username', component: AdminAnalyzeComponent },
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
